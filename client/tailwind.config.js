/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors:{
      primary:'#1B48DA',
      primaryHoverColor:'#EFF6FF',
      greenColor:'#1acd81',
      chocolateColor:'#fde48a',
      darkChocolateColor:'#923e0e'
     }
    },
  },
  plugins: [],
}

