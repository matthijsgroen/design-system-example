import { Palette } from "@/ui/principles/types";
import clsx from "clsx/lite";
import { FC, PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
  className?: string;
  colors?: Palette<"background" | "border">;
}>;

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={clsx("rounded-md", className)}>{children}</div>;
};
