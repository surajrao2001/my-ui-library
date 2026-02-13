import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import type { CardProps as CardPropsType } from "./card.types";

const cardVariants = cva(
  "rounded-xl font-sans transition-all duration-[var(--transition-duration)]",
  {
    variants: {
      variant: {
        default: "bg-surface border border-border",
        elevated: "bg-surface shadow-md hover:shadow-lg",
        outlined: "bg-transparent border-2 border-border hover:border-border-muted",
      },
      hoverable: {
        true: "cursor-pointer hover:-translate-y-0.5",
        false: "",
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      hoverable: false,
      padding: "md",
    },
  }
);

type Props = CardPropsType & VariantProps<typeof cardVariants>;

export const Card = forwardRef<HTMLDivElement, Props>(
  ({ className, variant, hoverable, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, hoverable, padding }), className)}
      {...props}
    />
  )
);

Card.displayName = "Card";
