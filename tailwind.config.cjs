/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'serif': ['Courgette', 'cursive'],
      'sans': [ 'Fira Sans', 'sans-serif'],
      'mono': [ 'Fira Code', 'monospace'],
    },
    extend: {
      colors: {
        "polar-night-10": "#2E3440",
        "polar-night-20": "#3B4252",
        "polar-night-30": "#434C5E",
        "polar-night-40": "#4C566A",
        "snow-storm-10": "#D8DEE9",
        "snow-storm-20": "#E5E9F0",
        "snow-storm-30": "#ECEFF4",
        "frost-10": "#8FBCBB",
        "frost-20": "#88C0D0",
        "frost-30": "#81A1C1",
        "frost-40": "#5E81AC",
        "aurora-red": "#BF616A",
        "aurora-orange": "#D08770",
        "aurora-yellow": "#EBCB8B",
        "aurora-gren": "#A3BE8C",
        "aurora-purple": "#B48EAD",
        "brand-primary": "#FFAB88",
        "brand-secondary": "#FF8B7C",
      }
    },
  },
  plugins: [],
}
