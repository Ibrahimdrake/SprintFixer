/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {  
      colors: {
        'sprintfixer-darkgreen': '#0D4B40',
        'sprintfixer-yellow': '#FFD95C',
        'sprintfixer-orange': '#F58634',
        'sprintfixer-black': '#121212',
        'sprintfixer-gray': '#4A4A4A',
        'sprintfixer-white': '#FFFFFF'
      },
    },
  },
  plugins: [],
}



