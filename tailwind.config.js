/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#E5F1FF",
        "light-gray": "#E5E8EB",
        "dark-blue": "#0a75dc",
        "dark-gray": "#b1bec1ff",
        "dark-text": "#696969ff",
      },
    },
  },
  plugins: [],
}
