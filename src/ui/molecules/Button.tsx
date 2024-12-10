import { ComponentProps, FC, PropsWithChildren } from "react";
import { Container } from "../atoms/Container";
import { Palette } from "../principles/types";
import { addTailwindDefaults } from "../utils/tailwind";

export type ButtonProps = PropsWithChildren<{
  colors?: Partial<Palette<"background" | "border">>;
}> &
  ComponentProps<"button">;

export const Button: FC<ButtonProps> = ({
  children,
  colors,
  ...buttonProps
}) => {
  const { className, ...rest } = buttonProps;
  return (
    <Container<"button">
      as="button"
      colors={colors}
      extraProps={rest}
      className={addTailwindDefaults(
        className,
        "p-2 rounded-md active:scale-95"
      )}
    >
      {children}
    </Container>
  );
};
