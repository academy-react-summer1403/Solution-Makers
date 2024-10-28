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
        // background: "#e7f0fc",
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

//   theme: {
//     extend: {
//       //   colors: {
//       //     background:
//       //       "hsl(var(--background))",
//       //     primary: {
//       //       DEFAULT:
//       //         "hsl(var(--primary))",
//       //       foreground:
//       //         "hsl(var(--primary-foreground))",
//       //     },
//       //     gray: "#ECEFF1",
//       //     dark: {
//       //       100: "#3F3F46",
//       //       200: "#27272A",
//       //     },
//       //     foreground:
//       //       "hsl(var(--foreground))",
//       //     card: {
//       //       DEFAULT: "hsl(var(--card))",
//       //       foreground:
//       //         "hsl(var(--card-foreground))",
//       //     },
//       //     popover: {
//       //       DEFAULT:
//       //         "hsl(var(--popover))",
//       //       foreground:
//       //         "hsl(var(--popover-foreground))",
//       //     },
//       //     secondary: {
//       //       DEFAULT:
//       //         "hsl(var(--secondary))",
//       //       foreground:
//       //         "hsl(var(--secondary-foreground))",
//       //     },
//       //     muted: {
//       //       DEFAULT: "hsl(var(--muted))",
//       //       foreground:
//       //         "hsl(var(--muted-foreground))",
//       //     },
//       //     accent: {
//       //       DEFAULT: "hsl(var(--accent))",
//       //       foreground:
//       //         "hsl(var(--accent-foreground))",
//       //     },
//       //     destructive: {
//       //       DEFAULT:
//       //         "hsl(var(--destructive))",
//       //       foreground:
//       //         "hsl(var(--destructive-foreground))",
//       //     },
//       //     border: "hsl(var(--border))",
//       //     input: "hsl(var(--input))",
//       //     ring: "hsl(var(--ring))",
//       //     chart: {
//       //       1: "hsl(var(--chart-1))",
//       //       2: "hsl(var(--chart-2))",
//       //       3: "hsl(var(--chart-3))",
//       //       4: "hsl(var(--chart-4))",
//       //       5: "hsl(var(--chart-5))",
//       //     },
//       //   },
//       screens: {
//         xs: "350px",
//         sm: "576px",
//         md: "992px",
//         lg: "1200px",
//         xl: "1400px",
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//     },
//     container: {
//       center: "true",
//       padding: "1rem",
//     },
//   },
//   darkMode: ["class", "class"],
//   plugins: [
//     nextui(),
//     require("tailwindcss-animate"),
//   ],
// };
