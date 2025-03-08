/** @type {import('tailwindcss').Config} */
import theme from "./theme.js"

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:theme.colors,
      fontFamily: {
        sans: ["IranYekanXFaNum", "sans-serif"],
      },
    },
  },
  plugins: [],
}

