/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports =withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
    screens:{
      'xs': '250px', 
      'desktop':'1366px',
      'max-desktop':{'max':'1365px'},
      'max-tablet':{'max':'960px'},
      
    },
  }, 
  },
  plugins: [],
})

