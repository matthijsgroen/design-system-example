// We need to import the original types, else all types get overridden by this declare,
// resulting in a lot of type errors.
import "react";

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined | null;
  }
}
