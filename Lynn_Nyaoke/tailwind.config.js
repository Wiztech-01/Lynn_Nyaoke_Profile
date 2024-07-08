/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '350px',
      'md': '960px',
      'lg': '1440px' // Fixed typo '144opx' to '1440px'
    },
    extend: {},
  },
  plugins: [],
}
