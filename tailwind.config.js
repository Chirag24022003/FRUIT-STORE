/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}" ],
  theme: {
    extend: {
      colors:{
        primary:"#de2c4d",
        secondary:"#fb923c",
      },
      fontFamily:{
        poppins:["poppins","sans_serif"],
        averia:["averia serif libre","serif"],
      },

      container:{
        center: true,
        padding:{
          default:'1rem',
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};

