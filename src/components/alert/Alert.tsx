import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import type { AlertProps as AlertPropsType } from "./alert.types";

const alertVariants = cva(
  "rounded-lg border px-4 py-3 font-sans text-sm transition-colors duration-[var(--transition-duration)]",
  {
    variants: {
      variant: {
        success:
          "border-success/50 bg-success/10 text-success",
        error:
          "border-destructive/50 bg-destructive/10 text-destructive",
        warning:
          "border-warning/50 bg-warning/10 text-warning",
        info: "border-info/50 bg-info/10 text-info",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

type Props = AlertPropsType & VariantProps<typeof alertVariants>;

export const Alert = forwardRef<HTMLDivElement, Props>(
  ({ className, variant, role = "alert", ...props }, ref) => (
    <div
      ref={ref}
      role={role}
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
);

Alert.displayName = "Alert";
