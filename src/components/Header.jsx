import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="fixed w-full top-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-brand-gold/15 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO Y NOMBRE DE LA EMPRESA */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.location.href = '#home'}>
            <img 
              className="h-12 sm:h-14 w-auto object-contain" 
              src="/lexnlawusa.png" 
              alt="Lex & Law Logo" 
            />
            <div className="flex flex-col items-center justify-center border-l border-brand-gold/30 pl-3">
              <span className="font-serif text-white text-base sm:text-xl font-bold tracking-widest leading-none">
                LEX & LAW
              </span>
              <span className="text-brand-gold text-[0.65rem] sm:text-xs tracking-[0.2em] mt-1 font-medium uppercase text-center">
                USA
              </span>
            </div>
          </div>
          
          {/* NAVEGACIÓN DESKTOP */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-brand-silver hover:text-brand-gold text-sm tracking-wide transition-colors duration-300 font-medium uppercase">{t.nav.home}</a>
            <a href="#services" className="text-brand-silver hover:text-brand-gold text-sm tracking-wide transition-colors duration-300 font-medium uppercase">{t.nav.services}</a>
            <a href="#contact" className="text-brand-silver hover:text-brand-gold text-sm tracking-wide transition-colors duration-300 font-medium uppercase">{t.nav.contact}</a>
            
            {/* SELECTOR DE IDIOMA DINÁMICO (DESKTOP) */}
            <button 
              onClick={toggleLanguage}
              className="ml-4 flex items-center gap-2 text-brand-gold border border-brand-gold/30 hover:bg-brand-gold/10 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300"
              title="Change Language / Cambiar Idioma"
            >
              <img 
                src={language === 'en' ? 'https://flagcdn.com/w40/es.png' : 'https://flagcdn.com/w40/us.png'} 
                alt={language === 'en' ? 'Español' : 'English'} 
                className="w-4 h-4 rounded-full object-cover"
              />
              <span>{language === 'en' ? 'ES' : 'EN'}</span>
            </button>
          </nav>

          {/* BOTÓN CTA DESKTOP */}
          <div className="hidden md:flex">
            <a href="#contact" className="bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-semibold py-2.5 px-6 rounded-sm transition-all duration-300 uppercase tracking-widest text-xs border border-transparent hover:shadow-[0_0_15px_rgba(197,160,89,0.3)]">
              {t.nav.cta}
            </a>
          </div>

          {/* BOTONES MÓVIL (Selector dinámico + Hamburguesa) */}
          <div className="flex md:hidden items-center space-x-3">
            
            {/* SELECTOR DE IDIOMA DINÁMICO (MÓVIL) */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-brand-gold border border-brand-gold/30 hover:bg-brand-gold/10 px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300"
            >
              <img 
                src={language === 'en' ? 'https://flagcdn.com/w40/es.png' : 'https://flagcdn.com/w40/us.png'} 
                alt={language === 'en' ? 'Español' : 'English'} 
                className="w-4 h-4 rounded-full object-cover"
              />
              <span>{language === 'en' ? 'ES' : 'EN'}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-brand-gold focus:outline-none"
            >
              <div className="w-6 h-6 flex flex-col justify-between items-center relative">
                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 origin-left ${isOpen ? 'rotate-45 translate-x-1 -translate-y-0.5' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-200 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 origin-left ${isOpen ? '-rotate-45 translate-x-1 translate-y-0.5' : ''}`}></span>
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-brand-dark/98 border-b border-brand-gold/10 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 shadow-xl">
          <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-brand-silver hover:text-brand-gold">{t.nav.home}</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-brand-silver hover:text-brand-gold">{t.nav.services}</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-brand-silver hover:text-brand-gold">{t.nav.contact}</a>
          <div className="pt-4 border-t border-brand-charcoal">
            <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full text-center bg-brand-gold text-brand-dark font-semibold py-3 px-4 rounded-sm uppercase tracking-widest text-sm">
              {t.nav.cta}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;