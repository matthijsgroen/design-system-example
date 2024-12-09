import { colors } from "@/principles/colors";
import { Color, ColorOrGradient, Gradient } from "@/principles/types";

export const colorToHex = (color: Color): string => {
  const [colorName, step] = color.split("-");
  if (step && typeof colors[colorName] === "object") {
    return `${colors[colorName][step]}`;
  } else {
    return `${colors[colorName]}`;
  }
};

export const single = (color: ColorOrGradient): Color =>
  typeof color === "string" ? color : color[0];

export const isGradient = (color: ColorOrGradient): color is Gradient =>
  Array.isArray(color);

export const gradient = (color: Gradient): string =>
  `linear-gradient(to right, ${color.map((c) => colorToHex(c)).join(", ")})`;
