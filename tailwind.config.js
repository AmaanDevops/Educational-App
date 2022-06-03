module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  variants: {
    fontFamily: ["responsive", "hover", "focus"],
  },
  plugins: [require("flowbite/plugin")],
};
