/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'], // Agregar fallback
      },
      screens: {
        '3xl': '1440px', // breakpoint personalizado
      },
    },
  },
  plugins: [],
};