/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          'bayon': ['Bayon', 'sans-serif'],
          'berkshire': ['Berkshire Swash', 'cursive'],
          'lobster': ['Lobster', 'cursive'],
          'pacifico': ['Pacifico', 'cursive'],
          'roboto': ['Roboto', 'sans-serif'], // Added Roboto font
          'playfair': ['Playfair Display', 'serif'], // Added Playfair Display font
          'montserrat': ['Montserrat', 'sans-serif'], // Added Montserrat font
          'caveat': ['Caveat', 'cursive'], // Added Caveat font
        },
    },
  },
  plugins: [],
}

