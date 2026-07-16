import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const FloatingChatButton = () => {
  const { t, language, isChatOpen, setIsChatOpen } = useLanguage();
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const initialMessage = {
    role: 'model',
    text: language === 'en' 
      ? 'Hello! I am the Lex & Law USA virtual assistant. How can I help you today?' 
      : '¡Hola! Soy el asistente legal virtual de Lex & Law USA. ¿En qué te puedo ayudar hoy?'
  };

  const [messages, setMessages] = useState([initialMessage]);

  useEffect(() => {
    if (messages.length === 1) {
      setMessages([{
        role: 'model',
        text: language === 'en' 
          ? 'Hello! I am the Lex & Law USA virtual assistant. How can I help you today?' 
          : '¡Hola! Soy el asistente legal virtual de Lex & Law USA. ¿En qué te puedo ayudar hoy?'
      }]);
    }
  }, [language]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isChatOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    
    const newMessages = [...messages, { role: 'user', text: userText }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const formattedHistory = messages
        .slice(1)
        .filter(m => m.role === 'user' || m.role === 'model')
        .map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        }));

      // HACEMOS LA LLAMADA AL BACKEND EN VERCEL
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userText, 
          history: formattedHistory,
          language: language // Enviamos el idioma actual para que el backend lo sepa
        })
      });

      const data = await response.json();

      if (data.reply) {
        setMessages([...newMessages, { role: 'model', text: data.reply }]);
      } else {
        throw new Error('Error en la respuesta');
      }

    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { 
        role: 'model', 
        text: language === 'en' 
          ? 'I am experiencing connection issues. Please contact us directly at Lexlaw57@gmail.com.' 
          : 'Estoy experimentando problemas de conexión. Por favor, contáctanos directamente a Lexlaw57@gmail.com.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div 
        className={`fixed bottom-24 right-4 sm:right-6 z-50 w-[90vw] sm:w-96 max-w-sm bg-brand-dark border border-brand-gold/30 rounded-lg shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isChatOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-0 opacity-0 pointer-events-none'
        }`}
        style={{ height: '500px', maxHeight: '75vh' }}
      >
        <div className="bg-brand-charcoal border-b border-brand-gold/20 p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-brand-dark">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-serif text-sm font-bold">Lex & Law USA</h3>
              <span className="text-brand-gold text-[10px] tracking-widest uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Online
              </span>
            </div>
          </div>
          <button onClick={() => setIsChatOpen(false)} className="text-brand-silver/50 hover:text-brand-gold transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex-grow p-4 overflow-y-auto bg-brand-dark/50 custom-scrollbar space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] rounded-md p-3 text-sm whitespace-pre-wrap leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-brand-gold text-brand-dark font-medium rounded-tr-none' 
                    : 'bg-brand-charcoal text-brand-silver border border-brand-gold/10 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-brand-charcoal border border-brand-gold/10 rounded-md rounded-tl-none p-3 flex gap-1.5 items-center">
                <span className="w-1.5 h-1.5 bg-brand-gold/50 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-brand-gold/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-1.5 h-1.5 bg-brand-gold/50 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-3 bg-brand-charcoal border-t border-brand-gold/20">
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={language === 'en' ? 'Type your message...' : 'Escribe tu mensaje...'}
              className="flex-grow bg-brand-dark text-white border border-brand-gold/30 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-brand-gold placeholder-brand-silver/30"
              disabled={isLoading}
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-brand-gold hover:bg-white text-brand-dark p-2 rounded-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end group">
        {!isChatOpen && (
          <span className="mb-2 px-3 py-1.5 bg-brand-charcoal border border-brand-gold/30 text-brand-silver text-xs rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg transform translate-y-2 group-hover:translate-y-0">
            {t.chat.tooltip}
          </span>
        )}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`relative bg-brand-gold text-brand-dark p-4 rounded-full shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_25px_rgba(197,160,89,0.6)] hover:bg-white hover:scale-110 transition-all duration-300 focus:outline-none ${isChatOpen ? 'rotate-90 scale-90' : ''}`}
          aria-label={t.chat.ariaLabel}
        >
          {isChatOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 border-2 border-brand-dark bg-green-500"></span>
              </span>
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default FloatingChatButton;