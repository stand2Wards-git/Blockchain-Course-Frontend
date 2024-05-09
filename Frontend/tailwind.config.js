/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'light-gray': "#b9bbd2",
        'primary': "#4a4d85",
        "mid-purple": "#333661",
        "dark-purple": "#252746",
        "purple": "#7e4bde",
        "light-purple": "#b89ced",
        "extar-light-purple": "#4a4d85",
        "extra-dark-purple": "#191b33",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
     
    },
  },
  plugins: [],
}