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
          "bg-surface border border-border text-text-primary hover:bg-surface-hover",
        primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
        success: "bg-success text-primary-foreground",
        warning: "bg-warning text-text-primary hover:bg-surface-muted",
        error: "bg-destructive text-primary-foreground",
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
