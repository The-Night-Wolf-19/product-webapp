module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#292929",
        secondary: "#131313",
        danger: "#e3342f",
      }),
    },
  },
  plugins: [],
};
