import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import type { SkeletonProps } from "./skeleton.types";

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "animate-pulse rounded-md bg-muted-earth/50",
        className
      )}
      {...props}
    />
  )
);

Skeleton.displayName = "Skeleton";
