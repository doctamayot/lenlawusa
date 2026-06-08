import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const PrivacyModal = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Fondo oscuro desenfocado */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Contenedor del Modal */}
      <div className="relative bg-brand-charcoal border border-brand-gold/30 rounded-sm shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden animate-[fadeIn_0.3s_ease-out]">
        
        {/* Cabecera del Modal */}
        <div className="flex justify-between items-center p-6 border-b border-brand-gold/20 bg-brand-dark">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif text-white">{t.legal.title}</h2>
            <p className="text-xs text-brand-gold mt-1 tracking-widest uppercase">{t.legal.lastUpdated}</p>
          </div>
          <button 
            onClick={onClose}
            className="text-brand-silver/50 hover:text-brand-gold transition-colors p-2"
            aria-label={t.legal.close}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Contenido (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
          <div className="space-y-8">
            {t.legal.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-serif text-brand-gold mb-3">{section.heading}</h3>
                <p className="text-brand-silver/80 text-sm font-light leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-4 border border-brand-gold/20 bg-brand-dark/50 rounded-sm text-xs text-brand-silver/50 font-light text-center">
            Disclaimer: This policy is provided for informational purposes. As a legal entity, Lex & Law USA reserves the right to update these terms to maintain compliance with federal and state regulations.
          </div>
        </div>

        {/* Pie del Modal */}
        <div className="p-6 border-t border-brand-gold/20 bg-brand-dark flex justify-end">
          <button 
            onClick={onClose}
            className="bg-brand-gold hover:bg-white text-brand-dark font-semibold py-2 px-8 rounded-sm transition-all duration-300 uppercase tracking-widest text-xs"
          >
            {t.legal.close}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;