module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        customBlue: "#40b4ac",
        secondary: "#ffed4a",
        danger: "#e3342f",
        white: "white",
        black: "black",
        grey: "#81898c"
      },
    },
  },
};
