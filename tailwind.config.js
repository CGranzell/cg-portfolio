/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#000534",
        "deep-blue-tweaked": "#010026",
        yellow: "#FDCC49",
        "light-green": "#DAFEE1",
        "dark-green" : "#2D9227",
        "underline-decoration": "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" 
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}