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
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,html}"],
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
        ".875rem", // 14px
        {
          lineHeight: "1.5", // font-size/line-height
          fontWeight: "400",
        },
      ],
      base: [
        "1rem", // 16px
        {
          lineHeight: "1.68",
          fontWeight: "400",
        },
      ],
      lg: [
        "1.125rem", // 18px
        {
          lineHeight: "1.5",
          fontWeight: "400",
        },
      ],
      xl: [
        "1.25rem", // 20px
        {
          lineHeight: "0.7",
          fontWeight: "600",
        },
      ],
      "2xl": [
        "1.625rem", // 26px
        {
          lineHeight: "1.5",
          fontWeight: "600",
        },
      ],
      "3xl": [
        "2.125rem", // 32px
        {
          lineHeight: "1.5",
          fontWeight: "700",
        },
      ],
      "4xl": [
        "3.25rem", // 48px
        {
          lineHeight: "1.19",
          fontWeight: "700",
        },
      ],
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#ffffff",
      "bay-of-many": {
        50: "#eef8ff",
        100: "#d8eeff",
        200: "#bae1ff",
        300: "#8ad0ff",
        400: "#53b6ff",
        500: "#2b94ff",
        600: "#1475fc",
        700: "#0d5de8",
        800: "#124bbb",
        900: "#12397e",
        950: "#122959",
      },
      vulcan: {
        50: "#f5f7fa",
        100: "#ebeef3",
        200: "#d2dae5",
        300: "#aab9cf",
        400: "#7c94b4",
        500: "#5b779c",
        600: "#475e82",
        700: "#3b4d69",
        800: "#334259",
        900: "#2e394c",
        950: "#181d27",
      },
      abbey: {
        50: "#f5f6f6",
        100: "#e4e6e9",
        200: "#cdd1d4",
        300: "#a9aeb7",
        400: "#7f8691",
        500: "#646b76",
        600: "#535862",
        700: "#494c55",
        800: "#414349",
        900: "#393b40",
        950: "#232429",
      },
    },
  },

  plugins: plugins,
};
