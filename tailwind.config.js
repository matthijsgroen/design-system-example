import { colors } from "./src/ui/principles/colors";
import { spacing } from "./src/ui/principles/spacing";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.stories.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
      spacing,
    },
  },
  plugins: [],
};
