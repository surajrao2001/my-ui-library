import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import type { SelectProps as SelectPropsType } from "./select.types";

const selectVariants = cva(
  "cursor-pointer appearance-none font-sans text-text-primary transition-all duration-[var(--transition-duration)] focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 [&>option]:bg-surface",
  {
    variants: {
      error: {
        true: "border-destructive focus:ring-destructive",
        false: "border-border focus:ring-focus-ring",
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

const baseClasses =
  "h-10 pl-4 pr-10 rounded-lg border-2 bg-surface hover:border-border-muted";

type Props = SelectPropsType & VariantProps<typeof selectVariants>;

export const Select = forwardRef<HTMLSelectElement, Props>(
  ({ className, error, fullWidth, children, ...props }, ref) => (
    <div className={cn("relative", fullWidth && "w-full")}>
      <select
        ref={ref}
        className={cn(baseClasses, selectVariants({ error, fullWidth }), className)}
        {...props}
      >
        {children}
      </select>
      <span
        className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted"
        aria-hidden
      >
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </div>
  )
);

Select.displayName = "Select";
