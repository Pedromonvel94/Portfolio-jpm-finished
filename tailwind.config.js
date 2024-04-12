/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      boxShadow: {
        '3xl': '4px 4px 9px 0px rgb(0, 0, 0);',
      },
      boxShadowTop: {
        '6xl': '0px -2px 9px 0px black;',
      }
    },
  },
  plugins: [
    require('tailwindcss-hero-patterns'),
  ],
}

