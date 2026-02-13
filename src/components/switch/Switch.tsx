import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import type { SwitchProps as SwitchPropsType } from "./switch.types";

const switchVariants = cva(
  "cursor-pointer inline-flex shrink-0 items-center rounded-full border-2 border-transparent transition-colors duration-[var(--transition-duration)] focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-5 w-9 px-0.5",
        md: "h-6 w-11 px-0.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const thumbVariants = cva(
  "pointer-events-none inline-block rounded-full bg-surface shadow-sm transition-transform duration-[var(--transition-duration)]",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type Props = SwitchPropsType & VariantProps<typeof switchVariants>;

export const Switch = forwardRef<HTMLButtonElement, Props>(
  ({ className, checked = false, size = "md", ...props }, ref) => {
    const translateX = checked
      ? size === "sm"
        ? "translate-x-4"
        : "translate-x-5"
      : "translate-x-0";
    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        className={cn(
          switchVariants({ size }),
          checked ? "bg-primary" : "bg-surface-muted",
          className
        )}
        {...props}
      >
        <span
          className={cn(thumbVariants({ size }), translateX)}
        />
      </button>
    );
  }
);

Switch.displayName = "Switch";
