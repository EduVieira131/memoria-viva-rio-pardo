import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      green: {
        50: "#F3F6F3",
        100: "#E5E8E3",
        200: "#CBD2C8",
        300: "#A6B2A3",
        400: "#7D8D7A",
        500: "#5D6F5A",
        600: "#475645",
        700: "#384537",
        800: "#2E382D",
        900: "#262E26",
        950: "#151A14",
      },
      brown: {
        50: "#F5F4F1",
        100: "#E6E1DB",
        200: "#CFC5B9",
        300: "#B4A290",
        400: "#9E8671",
        500: "#8F7563",
        600: "#84685A",
        700: "#634D45",
        800: "#55423E",
        900: "#4B3A38",
        950: "#2A1F1E",
      },
      sand: {
        50: "#F9F7F1",
        100: "#ECE7D5",
        200: "#DAD0AD",
        300: "#C7B682",
        400: "#BAA165",
        500: "#AE8A52",
        600: "#997146",
        700: "#80593D",
        800: "#6A4936",
        900: "#583D2F",
        950: "#312017",
      },
      gray: "#FCFCFC",
    },
    extend: {
      fontFamily: {
        display: ["Libre Baskerville", "serif"],
        body: ["Arvo", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
