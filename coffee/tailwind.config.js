/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        pompiere:['Pompiere', 'sans-serif'],
        lobster:['Lobster', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

