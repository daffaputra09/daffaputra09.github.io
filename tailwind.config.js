/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily:{
        "Poppins": ["Poppins", "Sans-serif"]
      },
      colors: {
        'primary': '#EEBE21',
        'darkprimary': '#BE8F15',
        'lightprimary': '#F2D642',
        'second' : '#313131',
        'base': '#181818',
      },
    },
  },
  plugins: [],
}
