/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fonts: {},
    containers: {},
    extend: {
      colors: {
        bridgitGreen: '#059669',
      },
      boxShadow: {
        cardShadow: '12px 12px 2px 5px red'
      },
    },
  },
  plugins: [],
}
