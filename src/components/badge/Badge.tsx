import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import type { BadgeProps as BadgePropsType } from "./badge.types";

const badgeVariants = cva(
  "inline-flex items-center font-heading font-medium uppercase tracking-wide transition-colors duration-[var(--transition-duration)]",
  {
    variants: {
      variant: {
        default:
          "bg-surface border border-border text-text hover:bg-muted-earth",
        primary: "bg-primary text-white hover:bg-primary-sun",
        success: "bg-success text-white",
        warning: "bg-warning text-text hover:bg-highlight-soft",
        error: "bg-error text-white",
      },
      size: {
        sm: "px-2 py-0.5 text-xs rounded",
        md: "px-2.5 py-1 text-xs rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

type Props = BadgePropsType & VariantProps<typeof badgeVariants>;

export const Badge = forwardRef<HTMLSpanElement, Props>(
  ({ className, variant, size, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
);

Badge.displayName = "Badge";
