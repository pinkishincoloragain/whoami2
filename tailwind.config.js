const { colors } = require("./src/config.json");

module.exports = {
  content: ["./src/Views/**/*.{js,jsx}", "./src/Components/**/*.{js,jsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...colors,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
