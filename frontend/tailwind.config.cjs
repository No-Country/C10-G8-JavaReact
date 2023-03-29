/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      color: {
        primary:{
          "900":"#1e3a8a"
        }
      }
    },
  },
  plugins: [],
}