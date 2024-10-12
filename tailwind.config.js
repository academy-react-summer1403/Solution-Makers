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
        background: "#e7f0fc",
        primary: "#2196F3",
        gray: "#ECEFF1",
        dark: {
          100: "#3F3F46",
          200: "#27272A",
        },
      },
      screens: {
        xs: "350px",
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
