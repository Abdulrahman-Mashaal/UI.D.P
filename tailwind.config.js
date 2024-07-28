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
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {},
    screens: {
      xs: "430px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    fontFamily: {
      Inter: "Inter, sans-serif",
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
        "1.125rem",
        {
          lineHeight: "1.25",
          fontWeight: "400",
        },
      ],
      lg: [
        "1.25rem",
        {
          lineHeight: "1.5",
          fontWeight: "500",
        },
      ],
      xl: [
        "1.625rem",
        {
          lineHeight: "1.26",
          fontWeight: "500",
        },
      ],
      "2xl": [
        "2rem",
        {
          lineHeight: "1.5",
          fontWeight: "600",
        },
      ],
      "3xl": [
        "3.125rem",
        {
          lineHeight: "1.1",
          fontWeight: "700",
        },
      ],
      "4xl": [
        "3.75rem",
        {
          lineHeight: "1.1",
          fontWeight: "700",
        },
      ],
    },
    colors: {
      black: '#000',
      white: 'ffffff',
      transparent: "transparent",
    },
  },

  plugins: plugins,
};
