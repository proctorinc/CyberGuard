/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        100: "#ffdbba",
        400: "#FF9F46",
        800: "#FF8A1E",
      },
      secondary: {
        100: "#A0B0FF",
        400: "#4C75F2",
        600: "#3A4DB6",
        700: "#2D3A7B",
        800: "#28336B",
      },
      gray: {
        100: "#F3F3F3",
        400: "#6D7082",
        600: "#30323E",
        800: "#21222B",
      },
      white: "#FFF",
      black: "#000",
      transparent: "#00000000",
    },
  },
  plugins: [],
};
