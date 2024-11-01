/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{ 
        'fig': ["Figtree", "sans-serif"],
        'roboto':["Roboto Condensed", "sans-serif"],

    },
    extend: {},
  },
  plugins: [],
}
