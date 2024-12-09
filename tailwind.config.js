import { colors } from "./src/principles/colors";
import { spacing } from "./src/principles/spacing";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors,
      spacing,
    },
  },
  plugins: [],
};
