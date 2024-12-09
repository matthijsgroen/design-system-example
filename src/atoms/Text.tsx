import { Palette } from "@/principles/types";
import { colorToHex, gradient, isGradient, single } from "@/utils/colors";
import { clsx } from "clsx/lite";
import { FC, JSX, PropsWithChildren } from "react";

export type TextProps = PropsWithChildren<{
  /**
   * default is "p"
   */
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  colors: Palette<"text">;
}>;

const Text: FC<TextProps> = ({ children, as = "p", colors, className }) => {
  const Component = as;

  if (isGradient(colors.text)) {
    return (
      <Component
        className={clsx(
          "text-transparent bg-clip-text bg-[image:--text-gradient]",
          className
        )}
        style={{ "--text-gradient": gradient(colors.text) }}
      >
        {children}
      </Component>
    );
  }
  return (
    <Component
      className={clsx("text-[--text]", className)}
      style={{ "--text": colorToHex(single(colors.text)) }}
    >
      {children}
    </Component>
  );
};

export default Text;
