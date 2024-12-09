import { FC, PropsWithChildren } from "react";
import clsx from "clsx/lite";

export const Page: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-7xl py-8 px-4 @container",
        className
      )}
    >
      {children}
    </div>
  );
};
