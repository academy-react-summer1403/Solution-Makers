import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2196F3",
        dark: "#252641",
      },
      screens: {
        sm: "576px",
        md: "992px",
        lg: "1200px",
        xl: "1400px",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
