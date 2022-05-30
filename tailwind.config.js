const { colors } = require("./config.json");

module.exports = {
  content: [
    "./src/Views/**/*.{js,jsx}",
    "./src/Components_devmode/**/*.{js,jsx}",
    "./src/Components/**/*.{js,jsx}",
  ],
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
