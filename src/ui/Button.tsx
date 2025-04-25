import * as React from "react";
import { cn } from "@/lib/utils"; // classNames utility (can be replaced with `clsx` or your own)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
}

const baseStyles = {
  default:
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  variants: {
    default: "bg-primary text-white hover:bg-primary/90",
    ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
  },
  sizes: {
    sm: "h-8 px-3",
    md: "h-10 px-4",
    lg: "h-12 px-6",
    icon: "h-10 w-10 p-2",
  },
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles.default,
          baseStyles.variants[variant],
          baseStyles.sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
