/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3490dc',
        'blueC': '#2a68ff',
        'greyC': '#f1f4f8',
        'textColor': '#252b36'
      }
    },
  },
  plugins: [],
}

