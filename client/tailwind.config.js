/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        heading:['Merriweather','sans-serif']
      },
    },
  },
  plugins: [],
}

