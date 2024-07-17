const options = require("./config"); //options from config.js

const allPlugins = {
  typography: require("@tailwindcss/typography"),
  forms: require("@tailwindcss/forms"),
  containerQueries: require("@tailwindcss/container-queries"),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: "class",

  theme: {
    extend: {},
    screens: {
      'xs': '430px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
    },
    fontFamily: {
      'helvetica': "Helvetica, sans-serif",
      'aeonik': "Aeonik, sans-serif",
    },
    fontSize: {
      sm: [
        ".875rem",
        {
          lineHeight: "1.25",
          fontWeight: "400",
        },
      ],
      base: [
        '1.125rem',
        {
          lineHeight: "1.25",
          fontWeight: "400",
        },
      ],
      lg: [
        '1.25rem',
        {
          lineHeight: "1.5",
          fontWeight: "500",
        },
      ],
      xl: [
        '1.625rem',
        {
          lineHeight: "1.26",
          fontWeight: "500",
        },
      ],
      '2xl': [
        '2rem',
        {
          lineHeight: "1.5",
          fontWeight: "600",
        },
      ],
      '3xl': [
        '3.125rem',
        {
          lineHeight: "1.1",
          fontWeight: "700",
        },
      ],
      '4xl': [
        '3.75rem',
        {
          lineHeight: "1.1",
          fontWeight: "700",
        },
      ],
    },
    colors: {
      primary: {
        '50': '#ecfffd',
        '100': '#cffefb',
        '200': '#a5fcf9',
        '300': '#67f9f6',
        '400': '#22eeed',
        '500': '#06d3d4',
        '600': '#08a9b2',
        '700': '#0e8690',
        '800': '#16707a',
        '900': '#165963',
        '950': '#083b44',
      },
      black: {
        700: "#000000",
      },
      white: {
        700: "#ffffff",
        600: "#FAFAFA"
      },
      green: {
        700: "#B8E1D680",
        600: "#00A69D",
        500: "#B8E1D6"
      },
      blue: {
        700: "#09273B"
      },
      gray: {
        700: "#4C5768",
        600: "#7E8299",
        500: "#666666",
        400: "#D9D9D9",
        300: "#858585",
        200: "#C7C7C7",
        100: "#C8C8C8"
      },
      hero: 'rgb(184, 225, 214)',
      transparent: 'transparent',
    },
  },

  plugins: plugins,
};
