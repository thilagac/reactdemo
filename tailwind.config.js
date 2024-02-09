/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily :{
      'hero-font':'Sriracha'

    },
    borderColor:{
      'primary':'rgb(95, 158, 160)',
      'secondary':'hsl(181, 28%, 29%)'
    }
  },
  plugins: [],
}

