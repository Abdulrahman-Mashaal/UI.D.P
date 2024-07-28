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
          lineHeight: "1.5", // font-size/line-height
          fontWeight: "400",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.68",
          fontWeight: "400",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "1.5",
          fontWeight: "400",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "0.7",
          fontWeight: "600",
        },
      ],
      "2xl": [
        "1.625rem",
        {
          lineHeight: "1.5",
          fontWeight: "600",
        },
      ],
      "3xl": [
        "2.125rem",
        {
          lineHeight: "1.5",
          fontWeight: "700",
        },
      ],
      "4xl": [
        "3.25rem",
        {
          lineHeight: "1.19",
          fontWeight: "700",
        },
      ],
    },
    colors: {
      transparent: "transparent",
      black: '#000',
      white: 'ffffff',
      mineShaft: {
        950: '#2b2b2b',
    },
    chicago: {
        600: '#595959',
    },
    wildSand: {
        50: '#f5f5f5',
    },
    mineShaft: {
        900: '#333333',
    },
    starDust: {
        400: '#999999',
    },
    sazerac: {
        100: '#fef3df',
    },
    grayNurse: {
        100: '#e6ebe4',
    },
    iron: {
        300: '#cccccc',
    },
    
    
    
    
    
    
    
    
    },
  },

  plugins: plugins,
};
