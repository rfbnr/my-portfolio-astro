import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/types";
import { motion } from "framer-motion";
import { forwardRef } from "react";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      glow = false,
      children,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 cursor-pointer";

    const variants = {
      primary: "bg-accent-blue hover:bg-blue-500 text-white",
      secondary:
        "bg-dark-700 hover:bg-dark-600 text-text-primary border border-glass-border",
      ghost:
        "bg-transparent hover:bg-glass-hover text-text-secondary hover:text-text-primary",
      outline:
        "bg-transparent border border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm gap-2",
      md: "px-6 py-3 text-base gap-2",
      lg: "px-8 py-4 text-lg gap-3",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          glow && "glow-blue",
          className,
        )}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        {...props}>
        {children}
      </motion.button>
    );
  },
);
Button.displayName = "Button";
