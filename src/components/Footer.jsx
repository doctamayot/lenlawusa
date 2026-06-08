import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import PrivacyModal from './PrivacyModal'; // Importamos el modal

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado del modal

  return (
    <>
      <footer id="contact" className="bg-brand-dark border-t border-brand-gold/20 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-12">
            
            {/* Columna 1: Marca y Descripción */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <img 
                  className="h-12 w-auto object-contain" 
                  src="/lexnlawusa.png" 
                  alt="Lex & Law Logo" 
                />
                <div className="flex flex-col justify-center border-l border-brand-gold/30 pl-3">
                  <span className="font-serif text-white text-lg font-bold tracking-widest leading-none">
                    LEX & LAW
                  </span>
                  <span className="text-brand-gold text-[0.65rem] tracking-[0.2em] mt-1 font-medium uppercase text-center">
                    USA
                  </span>
                </div>
              </div>
              <p className="text-brand-silver/80 text-sm font-light leading-relaxed max-w-sm mx-auto md:mx-0">
                {t.footer.description}
              </p>
            </div>

            {/* Columna 2: Enlaces Rápidos */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-serif text-lg mb-6 tracking-wide">
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-brand-silver/80 hover:text-brand-gold text-sm transition-colors duration-300">
                    {t.nav.home}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-brand-silver/80 hover:text-brand-gold text-sm transition-colors duration-300">
                    {t.nav.services}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-brand-silver/80 hover:text-brand-gold text-sm transition-colors duration-300">
                    {t.nav.contact}
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 3: Información de Contacto */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-serif text-lg mb-6 tracking-wide">
                {t.footer.contactInfo}
              </h4>
              <ul className="space-y-6 md:space-y-4">
                {/* Dirección */}
                <li className="flex flex-col md:flex-row items-center md:items-start">
                  <svg className="w-6 h-6 md:w-5 md:h-5 text-brand-gold mb-2 md:mb-0 md:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <span className="block text-brand-silver/50 text-xs uppercase tracking-wider mb-1">{t.footer.addressLabel}</span>
                    <span className="text-brand-silver/90 text-sm leading-relaxed block">
                      6454 NE 4th Ave Bay #2<br />
                      Miami, FL 33138
                    </span>
                  </div>
                </li>
                
                {/* Teléfono */}
                <li className="flex flex-col md:flex-row items-center md:items-start">
                  <svg className="w-6 h-6 md:w-5 md:h-5 text-brand-gold mb-2 md:mb-0 md:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <span className="block text-brand-silver/50 text-xs uppercase tracking-wider mb-1">{t.footer.phoneLabel}</span>
                    <a href="tel:+13056741707" className="text-brand-silver/90 text-sm hover:text-brand-gold transition-colors duration-300 block">
                      +1 (305) 674-1707
                    </a>
                  </div>
                </li>

                {/* Email */}
                <li className="flex flex-col md:flex-row items-center md:items-start">
                  <svg className="w-6 h-6 md:w-5 md:h-5 text-brand-gold mb-2 md:mb-0 md:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <span className="block text-brand-silver/50 text-xs uppercase tracking-wider mb-1">{t.footer.emailLabel}</span>
                    <a href="mailto:Lexlaw57@gmail.com" className="text-brand-silver/90 text-sm hover:text-brand-gold transition-colors duration-300 block">
                      Lexlaw57@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Línea inferior de Copyright y Políticas */}
          <div className="border-t border-brand-charcoal pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-brand-silver/40 text-xs text-center md:text-left">
              &copy; {currentYear} Lex & Law USA. {t.footer.rights}
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-brand-silver/40 hover:text-brand-gold text-xs transition-colors duration-300"
            >
              {t.legal.link}
            </button>
          </div>
        </div>
      </footer>

      {/* Renderizado del Modal */}
      <PrivacyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Footer;