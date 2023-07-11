/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        sm:{max: "414px"},
        md: {min: "415px", max:"800px"}
      },

      backgroundImage:{
        'frame': "url('/src/assets/Frame.png')",
        'mainBG': "url('/src/assets/mainBG.png')",
        'verifyBG': "url('/src/assets/bgverify.png')"
      }
      

    },
  },
  plugins: [],
}

