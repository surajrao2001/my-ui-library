import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import type { DividerProps as DividerPropsType } from "./divider.types";

const dividerVariants = cva("shrink-0 border-border", {
  variants: {
    orientation: {
      horizontal: "w-full border-t",
      vertical: "h-full min-h-[1em] w-px border-l self-stretch",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

type Props = DividerPropsType & VariantProps<typeof dividerVariants>;

export const Divider = forwardRef<HTMLHRElement, Props>(
  ({ className, orientation, ...props }, ref) => (
    <hr
      ref={ref}
      role="separator"
      className={cn(dividerVariants({ orientation }), className)}
      {...props}
    />
  )
);

Divider.displayName = "Divider";
