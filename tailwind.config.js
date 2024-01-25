/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '11px',
      },
      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif'],
        'barlow': ['Barlow Condensed', 'sans-serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

