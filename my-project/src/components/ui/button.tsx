import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
      default: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]",
      outline:
        "border border-[var(--color-border)] text-[var(--color-foreground)] bg-white hover:bg-gray-100",
    };

    return (
      <button ref={ref} className={cn(base, variants[variant], className)} {...props} />
    );
  }
);

Button.displayName = "Button";
