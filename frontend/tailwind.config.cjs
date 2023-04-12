/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   
  ],
    
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins', 'sans-serif']
      }
 
    },
  },
  plugins: [],
}