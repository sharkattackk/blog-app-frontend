/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       fontFamily: {
        sans: ['"Public Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        "dark-gray": "#151419",
        "med-gray": "#bbbdc7",
        "favourite-colour": "#4287f5",
        "light-gray": "#F8F8FF",
        "accent-blue": "#2c92d1",
        "pale-blue": "#F4EDDA",
        "main-accent": "#234d91",
      }
    },
  },
  plugins: [],
}

