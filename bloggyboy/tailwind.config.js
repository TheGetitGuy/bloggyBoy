/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      primary: "#660e60",
      primaryLight: "#893f71",
      secondary: "#f3d0a4",
      secondaryDark: "#cfa093"
      
    },
  },
  plugins: [],
}
