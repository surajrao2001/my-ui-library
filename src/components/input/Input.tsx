import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import type { InputProps as InputPropsType } from "./input.types";

const inputVariants = cva(
  "font-sans text-text placeholder:text-text-muted transition-all duration-[var(--transition-duration)] focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      error: {
        true: "border-error focus:ring-error",
        false: "border-border focus:ring-primary",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      error: false,
      fullWidth: false,
    },
  }
);

const baseInputClasses =
  "h-10 px-4 rounded-lg border-2 bg-surface hover:border-muted-earth";

type Props = InputPropsType & VariantProps<typeof inputVariants>;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, error, fullWidth, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        baseInputClasses,
        inputVariants({ error, fullWidth }),
        className
      )}
      {...props}
    />
  )
);

Input.displayName = "Input";
