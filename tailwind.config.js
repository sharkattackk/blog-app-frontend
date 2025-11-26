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
        "favourite-colour": "#2596be",
        "light-gray": "F8F8FF",
        "accent-blue": "#2c92d1",
      }
    },
  },
  plugins: [],
}

