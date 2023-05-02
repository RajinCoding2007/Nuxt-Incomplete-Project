/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: [".dark-mode"],
  content: ["./content/**/*.md"],
  theme: {
    screens: {
      xxs: "0px",
      xs: "300px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
  },
  plugins: [],
};
