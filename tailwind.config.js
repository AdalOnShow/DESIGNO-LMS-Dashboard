/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "serif"],
      },
      colors: {
        primary: "#ff4b00",
      }
    },
  },
  plugins: [],
}