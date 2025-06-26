/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
"./src/**/*.{html,ts}",
],
  theme: {
    extend: {},
  },
  plugins: [],
fontFamily: {
  sans: ['Poppins', 'sans-serif'], // أو الخط اللي يناسبك
},
extend: {
  fontFamily: {
    playfair: ['"Playfair Display"', 'serif'],
  }
}
}

