/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- IMPORTANT: Add this line
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

