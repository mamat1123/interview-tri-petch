/** @type {import('tailwindcss').Config} */
import { Breakpoint } from "./src/constants/breakpoint";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: `${Breakpoint.MOBILE}px`,
      md: `${Breakpoint.TABLET}px`,
      lg: `${Breakpoint.DESKTOP}px`,
    },
    colors: {
      tri: {
        "gray-dark": "#E7E7E7",
        "gray-bg": "#F5F4F9",
        gray: "#C2C2C2",
        purple: "#5E3DB3",
        "purple-line": "#603EBE",
        "purple-dark": "#090C35",
        white: "#FFF",
        back: "#000",
      },
    },
    fontSize: {
      sm: [
        "15px",
        {
          lineHeight: "1.099rem",
          frontWeight: "400",
        },
      ],
      base: "1rem",
      md: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.75rem",
      "3xl": "1.953rem",
      "4xl": [
        "2.25rem",
        {
          lineHeight: "42px",
          frontWeight: "400",
        },
      ],
      "5xl": "3.125rem",
      "8xl": [
        "5.625rem",
        {
          lineHeight: "6.592rem",
          frontWeight: "400",
        },
      ],
    },
  },
  plugins: [],
};
