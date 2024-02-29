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
          'berkshire' : ['Berkshire Swash', 'serif'],
          'lobster': ['Lobster', 'cursive'], 
          'pacifico': ['Pacifico', 'cursive'],
        },
    },
  },
  plugins: [],
}

