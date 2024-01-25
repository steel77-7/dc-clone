/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit' ,
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      color:{
        
      },
      spacing:{
        'custom_20rem': "20rem",
        'custom_20.5rem': "20.5rem",
        'custom_21rem': "21rem",
        '80%':'80%'
      }
    },
  },
  variants: {
    extends: {},
  },
  plugins: [], 
}

