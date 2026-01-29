/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Duru Sans"', 'sans-serif'],
      },
      colors: {
        "dark-gray": "#151419",
        "med-gray": "#23242A",
        "favourite-colour": "#FFC0CB",
        "light-gray": "#F8F8FF",
        "accent-blue": "#2c92d1",
        "pale-blue": "#C5D2F8",
        "main-accent": "#4F0C28",
      }
    },
  },
  plugins: [],
}

