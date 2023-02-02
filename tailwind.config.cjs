/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '0.3': '1.5px'
      },
      fontFamily: {
        header: ["aktiv-grotesk", 'sans-serif'],
        body: ["aktiv-grotesk"]
      }
    },
  },
  plugins: [],
}