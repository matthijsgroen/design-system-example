import { FC } from "react";
import Text, { TextProps } from "./Text";
import clsx from "clsx/lite";

export type HeaderProps = TextProps;

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
