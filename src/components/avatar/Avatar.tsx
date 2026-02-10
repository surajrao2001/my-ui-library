import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import type { AvatarProps as AvatarPropsType } from "./avatar.types";

const avatarVariants = cva(
  "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted-earth font-heading font-semibold text-highlight",
  {
    variants: {
      size: {
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

type Props = AvatarPropsType & VariantProps<typeof avatarVariants>;

export const Avatar = forwardRef<HTMLDivElement, Props>(
  ({ className, src, alt = "", fallback, size, ...props }, ref) => {
    const initials = fallback ? getInitials(fallback) : null;
    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ size }), className)}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
          />
        ) : (
          initials
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";
