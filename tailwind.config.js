const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
         //sans: ["Fira Sans", ...defaultTheme.fontFamily.sans],
         //mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
        sans: ["PT Sans", ...defaultTheme.fontFamily.sans],
        mono: ["PT Mono", ...defaultTheme.fontFamily.mono],
      }
    }
  },
  variants: {},
  plugins: []
};
