import { FC } from "react";
import Text, { TextProps } from "./Text";
import clsx from "clsx/lite";

export type HeaderProps = TextProps;

/**
 * Level 1 header
 *
 * It wraps the content in a span, so that a
 * color gradient of the text is until the end of the text,
 * instead of the end of the width of the container
 */
export const Header1: FC<TextProps> = ({ children, ...props }) => {
  return (
    <h1 className="mt-lg mb-md">
      <Text
        as={"span"}
        {...props}
        className={clsx("text-2xl font-bold", props.className)}
      >
        {children}
      </Text>
    </h1>
  );
};

/**
 * Level 2 header
 *
 * It wraps the content in a span, so that a
 * color gradient of the text is until the end of the text,
 * instead of the end of the width of the container
 */
export const Header2: FC<TextProps> = ({ children, ...props }) => {
  return (
    <h2 className="mt-lg mb-md">
      <Text
        as={"span"}
        {...props}
        className={clsx("text-xl font-bold", props.className)}
      >
        {children}
      </Text>
    </h2>
  );
};
