import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const FloatingChatButton = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end group">
      
      {/* Tooltip (Visible al pasar el ratón en escritorio) */}
      <span className="mb-2 px-3 py-1.5 bg-brand-charcoal border border-brand-gold/30 text-brand-silver text-xs rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg transform translate-y-2 group-hover:translate-y-0">
        {t.chat.tooltip}
      </span>

      {/* Botón Principal */}
      <button
        onClick={() => alert(t.chat.comingSoon)}
        className="relative bg-brand-gold text-brand-dark p-4 rounded-full shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_25px_rgba(197,160,89,0.6)] hover:bg-white hover:scale-110 transition-all duration-300 focus:outline-none"
        aria-label={t.chat.ariaLabel}
      >
        {/* Ícono de Chat */}
        <svg 
          className="w-7 h-7" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>

        {/* Pequeño punto indicador (simula que hay alguien en línea) */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 border-2 border-brand-dark bg-green-500"></span>
        </span>
      </button>
    </div>
  );
};

export default FloatingChatButton;