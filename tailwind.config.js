/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': "365px",

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px'
    },

    extend: {
      backgroundImage :{
        'home-desktop' : "url(./assets/home/desktop/image-hero.jpg)",
        'home-tablet' : "url(./assets/home/tablet/image-header.jpg)",
        'home-mobile' : "url(./assets/home/mobile/image-header.jpg)"
      },
    },
  },
  plugins: [],
}

