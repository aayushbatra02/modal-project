// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  // theme: {
  //   textColor: (theme) => theme("colors"),
  //   textColor: {
      // customBlue: "#40b4ac",
      // secondary: "#ffed4a",
      // danger: "#e3342f",
      // white: "white",
      // black: "black",
      // grey: "#81898c"
  //   },
  // },
  theme: {
    extend: {
      colors: {
        customBlue: {
          DEFAULT: "#40b4ac", // Background color
          text: "#FFFFFF", // Text color
        },
        secondary: "#ffed4a",
        danger: "#e3342f",
        white: "white",
        black: "black",
        grey: "#81898c"
      },
    },
  },
};
