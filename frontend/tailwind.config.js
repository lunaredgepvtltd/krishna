/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-top': '0 -1px 1px rgba(0, 0, 0, 0), 0 1px 1px rgba(0, 0, 0, 0)',
        // You can adjust the values to fit your needs
      }
    },
  },
  plugins: [],
}















       