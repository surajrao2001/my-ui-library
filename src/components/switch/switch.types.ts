import type { ButtonHTMLAttributes } from "react";

export interface SwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  checked?: boolean;
  size?: "sm" | "md";
}
