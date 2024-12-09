import { colorIds } from "./colors";

export type RecursiveKeyValuePair<K, V> = {
  [key: string]: V | RecursiveKeyValuePair<K, V>;
};

export type SizeType = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type Color = (typeof colorIds)[number];
export type Gradient = [Color, Color, ...Color[]];

export type ColorOrGradient = Color | Gradient;

export type Palette<T extends string> = {
  [key in T]: ColorOrGradient;
};
