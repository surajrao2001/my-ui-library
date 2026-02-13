import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import type { CheckboxProps as CheckboxPropsType } from "./checkbox.types";

const checkboxVariants = cva(
  "cursor-pointer rounded border-2 transition-all duration-[var(--transition-duration)] focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 accent-primary",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
      },
      error: {
        true: "border-destructive focus:ring-destructive",
        false: "border-border focus:ring-focus-ring",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
    },
  }
);

type Props = CheckboxPropsType & VariantProps<typeof checkboxVariants>;

export const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ className, size, error, type = "checkbox", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(checkboxVariants({ size, error }), className)}
      {...props}
    />
  )
);

Checkbox.displayName = "Checkbox";
