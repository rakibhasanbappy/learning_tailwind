/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}'
  ],
  theme: {
    extend: {
      colors:{
        mainTheme: { // my custom color name
          dark: "#D5D5D5",
        }
      }
    },
  },
  plugins: [],
}

