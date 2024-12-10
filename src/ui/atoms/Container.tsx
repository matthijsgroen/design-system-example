import { Palette, SizeType } from "@/ui/principles/types";
import clsx from "clsx/lite";
import { ComponentProps, JSX, PropsWithChildren } from "react";
import { colorToHex, gradient, isGradient, single } from "../utils/colors";

export type BorderWidths = 1 | 2 | 4 | 8;
export type BorderRadii = SizeType | "full";

export type BorderProps = {
  borderRadius?: BorderRadii;
  borderWidth?: BorderWidths;
};

export type ContainerProps<TTagType extends keyof JSX.IntrinsicElements> =
  PropsWithChildren<{
    className?: string;
    colors?: Partial<Palette<"border" | "background">>;
    as?: TTagType;
    extraProps?: ComponentProps<TTagType>;
  }> &
    BorderProps;

const borderWidths: Record<BorderWidths, string> = {
  1: "border-1",
  2: "border-2",
  4: "border-4",
  8: "border-8",
};

const borderRadii: Record<BorderRadii, string> = {
  xs: "rounded-xs",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
};

export const Container = <
  TTagType extends keyof JSX.IntrinsicElements = "div"
>({
  children,
  className,
  colors,
  as,
  extraProps,
  borderRadius,
  borderWidth,
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
    gradientBorder && colors?.border && isGradient(colors.border)
      ? {
          "--border-gradient": gradient(colors.border),
          "--border-width": `${borderWidth}px`,
        }
      : undefined;

  const InnerTag = (as ?? "div") as "div";

  // if (colors?.border && borderWidth && isGradient(colors.border)) {
  //   const rounded =
  //     borderRadius === undefined
  //       ? 0
  //       : {
  //           xs: 2,
  //           sm: 4,
  //           md: 6,
  //           lg: 8,
  //           xl: 12,
  //           "2xl": 16,
  //           full: "50%",
  //         }[borderRadius];
  //   const maskShape = `
  //     <svg viewBox="0 0 100% 100%" xmlns="http://www.w3.org/2000/svg">
  //       <rect width="100%" height="100%" ry="${rounded}" fill="transparent" stroke-width="${
  //     borderWidth * 2
  //   }" stroke="black" />
  //     </svg>`;
  //   const mask = `url("data:image/svg+xml,${encodeURIComponent(maskShape)}")`;
  //   const Tag = (as ?? "div") as "div";
  //   return (
  //     <Tag
  //       {...(extraProps as ComponentProps<"div">)}
  //       className={clsx("relative", extraProps?.className)}
  //     >
  //       <div
  //         className={clsx(
  //           borderRadius && borderRadii[borderRadius],
  //           "bg-[image:--border-gradient] absolute inset-0 z-0 pointer-events-none"
  //         )}
  //         style={{
  //           "--border-gradient": gradient(colors.border),
  //           maskImage: mask,
  //           maskMode: "luminance",
  //           mask,
  //         }}
  //       ></div>
  //       {inner}
  //     </Tag>
  //   );
  // }
  return (
    <InnerTag
      {...(extraProps as ComponentProps<"div">)}
      className={clsx(
        colors?.background &&
          !isGradient(colors?.background) &&
          "bg-[--background]",
        colors?.background &&
          isGradient(colors?.background) &&
          "bg-[image:--background-gradient]",
        borderRadius && borderRadii[borderRadius],
        colors?.border &&
          borderWidth &&
          `${borderWidths[borderWidth]} border-[--border]`,
        gradientBorder &&
          "relative before:inline-block before:content-[''] before:absolute before:inset-0 before:z-0 before:pointer-events-none before:bg-[image:--border-gradient]",
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
    </InnerTag>
  );
};
