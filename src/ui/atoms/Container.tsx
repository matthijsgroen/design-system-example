import { Palette } from "@/ui/principles/types";
import clsx from "clsx/lite";
import { ComponentProps, JSX, PropsWithChildren } from "react";
import { colorToHex, gradient, isGradient, single } from "../utils/colors";

type ContainerProps<TTagType extends keyof JSX.IntrinsicElements> =
  PropsWithChildren<{
    className?: string;
    colors?: Partial<Palette<"border" | "background">>;
    as?: TTagType;
    extraProps?: ComponentProps<TTagType>;
  }>;

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

  const InnerTag = (gradientBorder ? "div" : as ?? "div") as "div";

  const inner = (
    <InnerTag
      {...(!gradientBorder ? (extraProps as ComponentProps<"div">) : undefined)}
      className={clsx(
        colors?.background &&
          !isGradient(colors?.background) &&
          "bg-[--background]",
        colors?.background &&
          isGradient(colors?.background) &&
          "bg-[image:--background-gradient]",
        "rounded-lg",
        colors?.border && "border-4 border-[--border]",
        !gradientBorder && extraProps?.className,
        className
      )}
      style={{
        ...borderStyle,
        ...backgroundStyle,
        ...backgroundGradientStyle,
        ...(!gradientBorder ? extraProps?.style : undefined),
      }}
    >
      {children}
    </InnerTag>
  );
  if (colors?.border && isGradient(colors.border)) {
    // lg = 8px
    const rounded = 8;
    const maskShape = `
      <svg viewBox="0 0 100% 100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" rx="${rounded}" fill="transparent" stroke-width="${rounded}" stroke="black" />
      </svg>`;
    const mask = `url("data:image/svg+xml,${encodeURIComponent(maskShape)}")`;
    const Tag = (as ?? "div") as "div";
    return (
      <Tag
        {...(extraProps as ComponentProps<"div">)}
        className={clsx("relative", extraProps?.className)}
      >
        <div
          className={clsx(
            "rounded-lg p-[4px] bg-[image:--border-gradient] absolute inset-0 z-0"
          )}
          style={{
            "--border-gradient": gradient(colors.border),
            maskImage: mask,
            maskMode: "luminance",
            mask,
          }}
        ></div>
        {inner}
      </Tag>
    );
  }
  return inner;
};
