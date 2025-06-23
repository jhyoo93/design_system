import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors shadow-sm";

    const variants = {
        default:
            "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]",
        outline:
            "border border-gray-300 text-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800",
        };


    return (
      <button ref={ref} className={cn(base, variants[variant], className)} {...props} />
    );
  }
);

Button.displayName = "Button";
