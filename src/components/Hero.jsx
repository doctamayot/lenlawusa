import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[85vh] flex items-center border-b border-brand-gold/10">
      
      {/* IMAGEN DE FONDO Y DEGRADADOS */}
      <div className="absolute inset-0 z-0">
        {/* Imagen base */}
        <img 
          src="/hero-bg.png" 
          alt="Lex & Law USA Corporate Office" 
          className="w-full h-full object-cover object-center opacity-60"
        />
        {/* Degradado horizontal (de oscuro a la izquierda a transparente a la derecha) */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/20"></div>
        {/* Degradado vertical (para que se funda con la siguiente sección hacia abajo) */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50"></div>
      </div>

      {/* CONTENIDO DEL HERO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left w-full">
        <div className="lg:w-3/4">
          
          <span className="inline-block border border-brand-gold/50 bg-brand-gold/10 text-brand-gold px-4 py-1.5 rounded-sm font-semibold tracking-widest uppercase text-xs mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(197,160,89,0.1)]">
            {t.hero.subtitle}
          </span>
          
          <h1 className="text-4xl tracking-tight font-serif sm:text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
            {t.hero.title}
          </h1>
          
          <div className="mt-6 text-base text-brand-silver sm:text-lg max-w-3xl mx-auto lg:mx-0 font-light space-y-4 drop-shadow-md">
            <p>{t.hero.paragraph1}</p>
            <p className="opacity-80">{t.hero.paragraph2}</p>
          </div>
          
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-5">
            <div className="rounded-sm shadow-lg shadow-brand-gold/20">
              <a href="#services" className="w-full flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-sm text-brand-dark bg-brand-gold hover:bg-white hover:text-brand-dark transition-all duration-300 md:text-lg">
                {t.hero.btnPrimary}
              </a>
            </div>
            <div className="mt-4 sm:mt-0">
              <a href="#contact" className="w-full flex items-center justify-center px-8 py-3.5 border border-brand-silver/50 text-base font-medium rounded-sm text-white hover:border-brand-gold hover:text-brand-gold bg-brand-dark/30 backdrop-blur-sm transition-all duration-300 md:text-lg">
                {t.hero.btnSecondary}
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;