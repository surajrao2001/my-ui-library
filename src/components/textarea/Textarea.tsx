import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import type { TextareaProps as TextareaPropsType } from "./textarea.types";

const textareaVariants = cva(
  "min-h-[80px] resize-y px-4 py-3 font-sans text-text placeholder:text-text-muted transition-all duration-[var(--transition-duration)] focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
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
  "rounded-lg border-2 bg-surface hover:border-muted-earth";

type Props = TextareaPropsType & VariantProps<typeof textareaVariants>;

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ className, error, fullWidth, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(baseClasses, textareaVariants({ error, fullWidth }), className)}
      {...props}
    />
  )
);

Textarea.displayName = "Textarea";
