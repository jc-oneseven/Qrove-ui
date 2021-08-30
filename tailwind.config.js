const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
  prefix: "",
  purge: {
    enabled: guessProductionMode(),
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          "extra-light": "#F3F4F4",
          light: " #D0D7E3",

          "extra-dark": "#7B869B",
        },
        dark : "#131D2E",
        brand: {
          primary: "#0078D4",
          "primary-dark": "#081215",
        },
      },
      fontFamily: {
        sans: "'Inter', sans-serif",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
