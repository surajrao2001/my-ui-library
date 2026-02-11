import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import type { SelectProps as SelectPropsType } from "./select.types";

const selectVariants = cva(
  "cursor-pointer appearance-none font-sans text-text transition-all duration-[var(--transition-duration)] focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 [&>option]:bg-surface",
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

const baseClasses =
  "h-10 pl-4 pr-10 rounded-lg border-2 bg-surface bg-[length:1.25rem] bg-[position:right_0.5rem_center] bg-no-repeat hover:border-muted-earth";

type Props = SelectPropsType & VariantProps<typeof selectVariants>;

export const Select = forwardRef<HTMLSelectElement, Props>(
  ({ className, error, fullWidth, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(baseClasses, selectVariants({ error, fullWidth }), className)}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
      }}
      {...props}
    >
      {children}
    </select>
  )
);

Select.displayName = "Select";
