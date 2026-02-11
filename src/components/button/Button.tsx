import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import type { ButtonProps as ButtonPropsType } from "./button.types";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center font-heading font-semibold uppercase tracking-wide transition-all duration-[var(--transition-duration)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white hover:bg-primary-sun focus-visible:ring-primary shadow-sm hover:shadow-md",
        secondary:
          "bg-secondary text-highlight hover:bg-muted-earth focus-visible:ring-secondary",
        outline:
          "border-2 border-border bg-transparent text-text hover:bg-surface hover:border-primary focus-visible:ring-primary",
        ghost: "text-text hover:bg-surface focus-visible:ring-muted-earth",
        accent:
          "bg-accent-gold text-text hover:bg-highlight focus-visible:ring-accent-gold shadow-sm hover:shadow-md",
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-md",
        md: "h-10 px-5 text-sm rounded-lg",
        lg: "h-12 px-6 text-base rounded-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

type Props = ButtonPropsType & VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
