import { FC, PropsWithChildren } from "react";
import { Container } from "../atoms/Container";
import { Palette } from "../principles/types";
import clsx from "clsx/lite";

export type ButtonProps = PropsWithChildren<{
  onClick?: VoidFunction;
  colors?: Partial<Palette<"background" | "border">>;
  className?: string;
}>;

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  colors,
  className,
}) => {
  return (
    <Container<"button">
      as="button"
      colors={colors}
      extraProps={{ onClick, className: "active:scale-95" }}
      className={clsx("text-xs p-2", className)}
    >
      {children}
    </Container>
  );
};
