/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        s_bolditalic:["Sansita-BoldItalic", "sans-serif"],
        q_bold:["QwitcherGrypen-Bold", "sans-serif"],
        q_regular:["QwitcherGrypen-Regular", "sans-serif"],
      }
    },
  },
  plugins: ["nativewind/babel"],
}

