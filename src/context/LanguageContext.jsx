import React, { createContext, useState, useContext } from 'react';

// Diccionario de traducciones
export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Practice Areas',
      about: 'About Us',
      contact: 'Contact',
      cta: 'Free Consultation'
    },
    hero: {
      subtitle: 'Lex & Law USA',
      title: 'Over 25 Years of Legal Excellence',
      paragraph1: 'Established in 1992, our firm brings decades of proven Colombian legal expertise to the United States.',
      paragraph2: 'We offer comprehensive counsel in Civil, Commercial, Criminal, Labor, Public, Administrative, Tax, and Family Law, alongside Corporate Advisory, Insurance, Intellectual Property, and Debt Collection.',
      btnPrimary: 'Our Services',
      btnSecondary: 'Contact an Attorney'
    },
    services: {
      title: 'Our Practice Areas',
      subtitle: 'Specialized legal solutions tailored for cross-border operations and the US market.',
      items: [
        {
          id: 1,
          title: 'Tax Law & Planning',
          description: 'Comprehensive tax advisory and representation before tax authorities.',
          features: [
            'Strategic tax planning tailored to your business activities.',
            'Tax controversies and representation (administrative and judicial proceedings).',
            'Tax advisory for real estate transactions, estate planning, insurance, and trusts.',
            'Guidance on tax penalties and regulatory compliance.',
            'Tax refund requests and credit offsets.',
            'Amendments to tax returns, VAT/Sales Tax, and withholdings.'
          ]
        },
        {
          id: 2,
          title: 'Foreign Investment',
          description: 'Comprehensive legal guidance for international investments and cross-border asset management.',
          features: [
            'Direct and portfolio investments, including tangible, intangible, and in-kind assets.',
            'Ordinary and long-term temporary imports, including financial leasing and foreign-based fixed assets.',
            'Foreign currency inflow, outflow, and monetization.',
            'Registrations and regulatory reporting before exchange market intermediaries and the Central Bank (Banco de la República).'
          ]
        },
        {
          id: 3,
          title: 'Foreign Exchange Law',
          description: 'Expert counsel on currency exchange regulations and representation before regulatory bodies.',
          features: [
            'Responses and legal appeals to regulatory entities (DIAN, Superintendence of Companies).',
            'Export/Import reimbursements: Processing, currency monetization, foreign remittances, and international payments.',
            'Filing and management of foreign exchange declarations.',
            'Clearing accounts (Cuentas de compensación): Registration, filing, and regulatory compliance training.',
            'External Credit (Foreign Loans): Registration, forms, and reporting.',
            'Foreign investment management: Registrations, reporting, cancellations, and substitutions.'
          ]
        },
        {
          id: 4,
          title: 'Litigation & Dispute Resolution',
          description: 'Comprehensive legal representation across labor and criminal courts, backed by executive bilingual expertise.',
          features: [
            'Labor & Employment counsel and legal representation before labor courts and regulatory agencies (e.g., Ministry of Labor).',
            'Criminal defense and litigation: Drafting of criminal complaints, civil party representation, and technical defense in the accusatory penal system.',
            'Executive Bilingual Support: Expert English-Spanish contract translation and comprehensive client assistance across all practice areas, provided directly by our Managing Director.'
          ]
        },
        {
          id: 5,
          title: 'Cross-Border Conciliation & Insolvency',
          description: 'Strategic advisory for US citizens and entities navigating Colombian alternative dispute resolution and insolvency frameworks. We bridge the gap between jurisdictions to protect your assets and rights.',
          features: [
            'Representation of US creditors in Colombian insolvency proceedings and creditors\' boards.',
            'Advisory in extrajudicial conciliation for legal disputes originating in Colombia.',
            'Direct liaison with authorized Colombian Conciliation Centers.',
            'Cross-border debt collection and settlement negotiations.'
          ]
        }
      ]
    },
    footer: {
      description: 'Top-tier corporate and international law representation in the United States, backed by over 25 years of proven Colombian legal expertise.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Information',
      rights: 'All rights reserved.',
      addressLabel: 'Location',
      phoneLabel: 'Phone',
      emailLabel: 'Email'
    },
    legal: {
      link: 'Privacy & Cookies Policy',
      title: 'Privacy and Cookies Policy',
      lastUpdated: 'Last Updated: June 2026',
      close: 'Close',
      sections: [
        {
          heading: '1. Information We Collect',
          text: 'Lex & Law USA collects personal information (such as name, email address, and phone number) only when voluntarily submitted by our visitors through our contact channels. We also automatically collect certain technical data through cookies, including IP addresses and browsing behavior, to ensure our website functions optimally.'
        },
        {
          heading: '2. How We Use Your Information',
          text: 'The information collected is strictly used to provide legal consultation, respond to your inquiries, improve our web services, and comply with applicable legal obligations. Lex & Law USA does not sell, rent, or share your personal information with third parties for marketing purposes.'
        },
        {
          heading: '3. Cookies Policy',
          text: 'We use cookies and similar tracking technologies to track activity on our website and hold certain information. These are essential for the website to operate securely and efficiently. By continuing to browse our site, you consent to our use of cookies.'
        },
        {
          heading: '4. Contact Information',
          text: 'If you have any questions or concerns regarding this Privacy Policy or your data, please contact us at Lexlaw57@gmail.com, call +1 (305) 674-1707, or visit our office at 6454 NE 4th Ave Bay #2, Miami, FL 33138.'
        }
      ]
    },
    chat: {
      ariaLabel: 'Open chat',
      tooltip: 'Chat with us',
      comingSoon: 'Live chat functionality will be available soon. Please use our contact form or email us in the meantime.'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Áreas de Práctica',
      about: 'Nosotros',
      contact: 'Contacto',
      cta: 'Consulta Gratis'
    },
    hero: {
      subtitle: 'Lex & Law USA',
      title: 'Más de 25 años de excelencia legal',
      paragraph1: 'Nuestra firma Abogados Asesores está constituida desde 1992, trayendo décadas de experiencia en Colombia a Estados Unidos.',
      paragraph2: 'Prestamos asesoría en derecho civil, comercial, penal, laboral, público, administrativo, tributario, familia, seguros, marcas y patentes, recaudo de cartera y gestión legal empresarial.',
      btnPrimary: 'Nuestros Servicios',
      btnSecondary: 'Contactar Abogado'
    },
    services: {
      title: 'Nuestras Áreas de Práctica',
      subtitle: 'Soluciones legales especializadas para operaciones transfronterizas y el mercado internacional.',
      items: [
        {
          id: 1,
          title: 'Derecho Tributario',
          description: 'Asesoría fiscal integral y representación ante las autoridades tributarias.',
          features: [
            'Estrategias tributarias de acuerdo a su actividad económica.',
            'Controversias ante autoridades (trámite administrativo y judicial).',
            'Asesoría por impuestos en compra/venta de inmuebles, sucesiones, seguros y patrimonios autónomos.',
            'Régimen sancionatorio y defensa ante entidades de control.',
            'Solicitudes de devolución y compensación de saldos a favor.',
            'Correcciones a declaraciones de renta, IVA y retención en la fuente.'
          ]
        },
        {
          id: 2,
          title: 'Inversión Extranjera',
          description: 'Asesoría legal para inversiones internacionales y gestión de activos transfronterizos.',
          features: [
            'Inversiones directas, de portafolio, tangibles, intangibles y en especie.',
            'Importaciones ordinarias y temporales a largo plazo, incluyendo leasing financiero y activos fijos en el exterior.',
            'Ingreso, egreso y monetización de recursos en divisas.',
            'Informes y registros ante intermediarios del mercado cambiario y el Banco de la República.'
          ]
        },
        {
          id: 3,
          title: 'Derecho Cambiario',
          description: 'Asesoría en regulaciones de cambio de divisas y representación ante entidades de control.',
          features: [
            'Respuestas y recursos a entidades de control cambiario (DIAN, Superintendencia de Sociedades).',
            'Reintegro de exportaciones y reembolso de importaciones: Trámites, giros al exterior y monetización.',
            'Diligenciamiento y trámite de declaraciones de cambio.',
            'Cuentas de compensación: Registro, presentación de formularios y capacitación en reporte de información.',
            'Crédito externo: Registro, formularios y reportes.',
            'Gestión de inversión extranjera: Registro, informes, cancelaciones y sustituciones.'
          ]
        },
        {
          id: 4,
          title: 'Litigio y Representación',
          description: 'Representación legal integral en cortes laborales y penales, con soporte bilingüe ejecutivo.',
          features: [
            'Asesoría en materia laboral y representación legal ante el Ministerio del Trabajo y Juzgados Laborales.',
            'Elaboración de denuncios penales, representación de parte civil y defensa técnica en el sistema penal acusatorio.',
            'Soporte legal bilingüe: Traducción certificada de contratos (inglés-español) y asistencia integral al cliente en todas las áreas, gestionada directamente por la Gerencia.'
          ]
        },
        {
          id: 5,
          title: 'Conciliación e Insolvencia Transfronteriza',
          description: 'Asesoría estratégica para ciudadanos y entidades de EE. UU. frente a mecanismos colombianos de resolución de conflictos e insolvencia. Servimos de puente jurisdiccional para proteger sus derechos y patrimonio.',
          features: [
            'Representación de acreedores estadounidenses en mesas de insolvencia en Colombia.',
            'Asesoría en conciliación extrajudicial para disputas legales originadas en territorio colombiano.',
            'Enlace y gestión directa con Centros de Conciliación autorizados en Colombia.',
            'Negociación de acuerdos y recuperación de cartera a nivel internacional.'
          ]
        }
      ]
    },
    footer: {
      description: 'Representación legal corporativa e internacional de primer nivel en Estados Unidos, respaldada por más de 25 años de experiencia colombiana.',
      quickLinks: 'Enlaces Rápidos',
      contactInfo: 'Información de Contacto',
      rights: 'Todos los derechos reservados.',
      addressLabel: 'Ubicación',
      phoneLabel: 'Teléfono',
      emailLabel: 'Correo'
    },
    legal: {
      link: 'Política de Privacidad y Cookies',
      title: 'Política de Privacidad y Cookies',
      lastUpdated: 'Última actualización: Junio 2026',
      close: 'Cerrar',
      sections: [
        {
          heading: '1. Información que Recopilamos',
          text: 'Lex & Law USA recopila información personal (como nombre, correo electrónico y número de teléfono) solo cuando es enviada voluntariamente por nuestros visitantes a través de nuestros canales de contacto. También recopilamos automáticamente ciertos datos técnicos mediante cookies, incluidas direcciones IP y comportamiento de navegación, para garantizar que nuestro sitio web funcione de manera óptima.'
        },
        {
          heading: '2. Cómo Utilizamos su Información',
          text: 'La información recopilada se utiliza estrictamente para brindar consultas legales, responder a sus consultas, mejorar nuestros servicios web y cumplir con las obligaciones legales aplicables. Lex & Law USA no vende, alquila ni comparte su información personal con terceros para fines de marketing.'
        },
        {
          heading: '3. Política de Cookies',
          text: 'Utilizamos cookies y tecnologías de seguimiento similares para rastrear la actividad en nuestro sitio web y retener cierta información. Estas son esenciales para que el sitio web funcione de manera segura y eficiente. Al continuar navegando en nuestro sitio, usted acepta nuestro uso de cookies.'
        },
        {
          heading: '4. Información de Contacto',
          text: 'Si tiene alguna pregunta o inquietud con respecto a esta Política de Privacidad o sus datos, comuníquese con nosotros a Lexlaw57@gmail.com, llame al +1 (305) 674-1707, o visite nuestra oficina en 6454 NE 4th Ave Bay #2, Miami, FL 33138.'
        }
      ]
    },
    chat: {
      ariaLabel: 'Abrir chat',
      tooltip: 'Chatea con nosotros',
      comingSoon: 'La función de chat en vivo estará disponible pronto. Por favor, utilice nuestro formulario de contacto o correo electrónico mientras tanto.'
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);