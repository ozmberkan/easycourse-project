
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#3A7582',
        'secondary-color': '#3A6082',
      },
      fontFamily: {
        'damion': ['Damion'],
        'montserrat' : ['Montserrat'],
      },
    },
  },
  plugins: [],
}