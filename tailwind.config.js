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
    extend: {
      lineHeight: {
        0: "0",
      },
    },
    screens: {
      xs: "430px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    fontFamily: {
      Kayak: "Kayak, sans-serif",
      Clash: "Clash, sans-serif",
      InterRegular: "InterRegular, sans-serif",
      InterMedium: "InterMedium, sans-serif",
      InterSemiBold: "InterSemiBold, sans-serif",
      InterBold: "InterBold, sans-serif",
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
      primary: {
        50: "#ecfffd",
        100: "#cffefb",
        200: "#a5fcf9",
        300: "#67f9f6",
        400: "#22eeed",
        500: "#06d3d4",
        600: "#08a9b2",
        700: "#0e8690",
        800: "#16707a",
        900: "#165963",
        950: "#083b44",
      },
      "link-water": {
        50: "#f3f6fb",
        100: "#e3ebf6",
        200: "#d5e2f1",
        300: "#adc7e3",
        400: "#85abd5",
        500: "#688fc9",
        600: "#5577bb",
        700: "#4a66ab",
        800: "#41548c",
        900: "#384870",
        950: "#262e45",
      },
      vulcan: {
        50: "#f5f6fa",
        100: "#ebedf3",
        200: "#d2d7e5",
        300: "#aab4cf",
        400: "#7c8cb4",
        500: "#5c6e9b",
        600: "#485681",
        700: "#3b4669",
        800: "#343d58",
        900: "#2f354b",
        950: "#12141d",
      },
      "pickled-bluewood": {
        50: "#f5f7fa",
        100: "#ebeef3",
        200: "#d2d9e5",
        300: "#abbbce",
        400: "#7d95b3",
        500: "#5d789a",
        600: "#496080",
        700: "#3c4d68",
        800: "#334155",
        900: "#2f3a4b",
        950: "#1f2532",
      },
'zumthor': {
        '50': '#f4f8fb',
        '100': '#e5eef5',
        '200': '#ccdfeb',
        '300': '#9ec5db',
        '400': '#6aa7c6',
        '500': '#488baf',
        '600': '#367093',
        '700': '#2d5a77',
        '800': '#284d64',
        '900': '#264154',
        '950': '#192b38',
    },
    'algae-green': {
        '50': '#edfcf4',
        '100': '#d2f9e2',
        '200': '#a9f1ca',
        '300': '#86e7b8',
        '400': '#39ce8b',
        '500': '#16b371',
        '600': '#0a915b',
        '700': '#08744c',
        '800': '#095c3e',
        '900': '#084c34',
        '950': '#032b1d',
    },
    
      black: {
        700: "#000000",
      },
      white: {
        700: "#ffffff",
        600: "#FAFAFA",
      },
      green: {
        700: "#B8E1D680",
        600: "#00A69D",
        500: "#B8E1D6",
      },
      blue: {
        700: "#09273B",
      },
      gray: {
        700: "#4C5768",
        600: "#7E8299",
        500: "#666666",
        400: "#D9D9D9",
        300: "#858585",
        200: "#C7C7C7",
        100: "#C8C8C8",
      },
      hero: "rgb(184, 225, 214)",
      transparent: "transparent",
    },
  },

  plugins: plugins,
};
