import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-brand-charcoal relative">
      {/* Elemento de diseño de fondo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-gold tracking-widest uppercase mb-2">
            Lex & Law USA
          </h2>
          <h3 className="text-3xl sm:text-4xl font-serif text-white mb-4">
            {t.services.title}
          </h3>
          <p className="text-brand-silver text-base sm:text-lg font-light">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.items.map((service) => (
            <div 
              key={service.id} 
              className="bg-brand-dark border border-brand-gold/20 rounded-sm hover:border-brand-gold/60 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
            >
              {/* CABECERA DE LA TARJETA (IMAGEN + ICONO) */}
              <div className="relative h-56 w-full bg-brand-charcoal overflow-hidden">
                <img 
                  src={`/service-${service.id}.png`} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  onError={(e) => {
                    e.target.style.display = 'none'; 
                  }}
                />
                
                {/* Degradado para fusionar la imagen con la tarjeta */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>

                {/* Icono flotante decorativo */}
                <div className="absolute bottom-4 left-8 w-12 h-12 border border-brand-gold bg-brand-dark/80 backdrop-blur-sm rounded-full flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors duration-300 z-10 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
              </div>
              
              {/* CONTENIDO DE LA TARJETA */}
              <div className="p-8 flex-grow flex flex-col">
                <h4 className="text-2xl font-serif text-white mb-2 group-hover:text-brand-gold transition-colors duration-300">
                  {service.title}
                </h4>
                
                <p className="text-sm text-brand-silver font-medium mb-6 pb-4 border-b border-brand-charcoal">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mt-auto">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-brand-silver/80 font-light leading-relaxed">
                      <span className="text-brand-gold mr-3 mt-0.5 flex-shrink-0 text-lg leading-none">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;