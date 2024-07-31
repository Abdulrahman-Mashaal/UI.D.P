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
      Hind: "Hind, sans-serif",
    },
    fontSize: {
      sm: [
        "1.25rem",
        {
          lineHeight: "1.618", // golden line height ration
          fontWeight: "400",
        },
      ],
      base: [
        "1.5rem",
        {
          lineHeight: "1.618",
          fontWeight: "400",
        },
      ],
      lg: [
        "1.75rem",
        {
          lineHeight: "1.618",
          fontWeight: "500",
        },
      ],
      xl: [
        "2rem",
        {
          lineHeight: "1.618",
          fontWeight: "500",
        },
      ],
      "2xl": [
        "2.625rem",
        {
          lineHeight: "1.618",
          fontWeight: "600",
        },
      ],
      "3xl": [
        "3.25rem",
        {
          lineHeight: "1.618",
          fontWeight: "700",
        },
      ],
      "4xl": [
        "3.875rem",
        {
          lineHeight: "1.618",
          fontWeight: "700",
        },
      ],
    },
    colors: {
      transparent: "transparent",
      black: '#000',
      white: '#ffffff',
      deepSapphir: {
          500: "#111f61",
},
      opal: {
        300: '#aac4bf',
    },
      zircon: {
        100: '#e0e6ff',
    },
      mountainMeadow: {
        500: '#02b994',
    },
      plantation: {
        800: '#2a4a45',
    },
      tangaroa: {
        950: '#0f1534',
    },
    ebb: {
        100: '#eee6e6',
    },
    cararra: {
        100: '#eeede6',
    },
    gravel: {
        800: '#414146',
    },
    porcelain: {
        100: '#ecefee',
    },
    persianGreen: {
        500: '#1aac94',
    },
    offGreen: {
        50: '#e9f9f3',
    },
    zircon: {
        50: '#f0f3ff',
    },
    
    
    },
  },

  plugins: plugins,
};
