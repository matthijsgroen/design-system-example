import { Palette } from "@/ui/principles/types";
import clsx from "clsx/lite";
import { ComponentProps, JSX, PropsWithChildren } from "react";
import { colorToHex, gradient, isGradient, single } from "../utils/colors";
import styles from "./Container.module.css";

export type ContainerProps<TTagType extends keyof JSX.IntrinsicElements> =
  PropsWithChildren<{
    className?: string;
    colors?: Partial<Palette<"border" | "background">>;
    as?: TTagType;
    extraProps?: ComponentProps<TTagType>;
  }>;

const getBorderWidth = (classNames: string): number => {
  const match = classNames.match(/border-(\d+)/);
  return match ? parseInt(match[1]) : 0;
};

export const Container = <
  TTagType extends keyof JSX.IntrinsicElements = "div"
>({
  children,
  className,
  colors,
  as,
  extraProps,
}: ContainerProps<TTagType>) => {
  const borderStyle = colors?.border
    ? {
        "--border": colorToHex(single(colors.border)),
      }
    : undefined;

  const backgroundStyle = colors?.background
    ? {
        "--background": colorToHex(single(colors.background)),
      }
    : undefined;
  const backgroundGradientStyle =
    colors?.background && isGradient(colors.background)
      ? {
          "--background-gradient": gradient(colors.background),
        }
      : undefined;

  const gradientBorder = colors?.border && isGradient(colors.border);

  const borderGradientStyle =
    colors?.border && isGradient(colors.border)
      ? {
          "--border-gradient": gradient(colors.border),
          "--border-width": `${getBorderWidth(
            `${className} ${extraProps?.className}`
          )}px`,
        }
      : undefined;

  const ContainerTag = (as ?? "div") as "div";

  return (
    <ContainerTag
      {...(extraProps as ComponentProps<"div">)}
      className={clsx(
        "box-border",
        colors?.background &&
          !isGradient(colors?.background) &&
          "bg-[--background]",

        colors?.background &&
          isGradient(colors?.background) &&
          "bg-[image:--background-gradient]",

        gradientBorder && styles.borderGradient,
        !gradientBorder && "border-[--border]",
        extraProps?.className,
        className
      )}
      style={{
        ...borderStyle,
        ...backgroundStyle,
        ...backgroundGradientStyle,
        ...borderGradientStyle,
        ...extraProps?.style,
      }}
    >
      {children}
    </ContainerTag>
  );
};
