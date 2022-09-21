/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {

      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'smm': "800px",
      
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',

      'mq-1380': '1380px', 
      // => @media (min-width: 1024px) { ... }

      'xl': '1560px'
    },
    extend: {

      backgroundImage: {

        'pollo': "url('https://images.squarespace-cdn.com/content/v1/604f63fbcbfeea1a501c8b6b/1c948d3e-0e47-4025-b3bb-7104d6762c47/detalle+ajita.jpg')",
        'avocado-list': "url('https://images.squarespace-cdn.com/content/v1/604f63fbcbfeea1a501c8b6b/1618275862241-8QPSZ1QQLA90MSRJZXFL/TRES+PLATOS.png?format=1000w')"
      },
      fontFamily: {
        'ThunderhousePro': ['ThunderhousePro'],
        "antique-olive-condensed": ["antique-olive-condensed"]
      }
    },
  },
  plugins: [],
}