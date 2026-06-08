/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0a0a0a',      // Fondo negro profundo
          charcoal: '#1a1a1a',  // Gris muy oscuro para tarjetas/secciones
          gold: '#c5a059',      // Oro elegante principal
          'gold-light': '#e8ce8a', // Brillo del oro
          silver: '#e2e8f0',    // Plata/Gris claro
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}