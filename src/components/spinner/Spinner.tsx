import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import type { SpinnerProps as SpinnerPropsType } from "./spinner.types";

const spinnerVariants = cva(
  "animate-spin rounded-full border-2 border-muted-earth border-t-primary",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type Props = SpinnerPropsType & VariantProps<typeof spinnerVariants>;

export const Spinner = forwardRef<HTMLDivElement, Props>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      role="status"
      aria-label="Loading"
      className={cn(spinnerVariants({ size }), className)}
      {...props}
    />
  )
);

Spinner.displayName = "Spinner";
