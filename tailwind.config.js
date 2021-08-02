const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
    prefix: '',
    purge: {
      enabled: guessProductionMode(),
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          gray: {
            "extra-light": "#F3F4F4",
            light: " #D0D7E3",
            "extra-dark": "#7B869B",
            dark: "#131D2E",
          },
          brand: {
            primary: "#0078D4",
          },
        },
        fontFamily: {
          sans: "'Inter', sans-serif",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/line-clamp'),require('@tailwindcss/typography')],
};
