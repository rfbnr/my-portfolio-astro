"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

// Re-export Pagination component
export { Pagination } from "./Pagination";

// ========================================
// BUTTON COMPONENT
// ========================================

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

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

// ========================================
// BADGE COMPONENT
// ========================================

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "tech" | "category";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-dark-700 text-text-secondary border-dark-600",
    tech: "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
    category: "bg-accent-purple/10 text-accent-purple border-accent-purple/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border",
        variants[variant],
        className,
      )}>
      {children}
    </span>
  );
}

// ========================================
// TECH BADGE COMPONENT
// ========================================

interface TechBadgeProps {
  icon?: React.ReactNode;
  label: string;
  className?: string;
}

export function TechBadge({ icon, label, className }: TechBadgeProps) {
  return (
    <motion.div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-lg glass glass-hover text-text-secondary text-sm",
        className,
      )}
      whileHover={{ scale: 1.05, y: -2 }}>
      {icon}
      <span>{label}</span>
    </motion.div>
  );
}

// ========================================
// CARD COMPONENT
// ========================================

interface CardProps extends HTMLMotionProps<"div"> {
  hover?: boolean;
  glow?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, glow = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "glass-card p-6 overflow-hidden",
          hover && "glass-hover cursor-pointer",
          glow && "glow-blue",
          className,
        )}
        whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
        transition={{ duration: 0.3, ease: "easeOut" }}
        {...props}>
        {children}
      </motion.div>
    );
  },
);
Card.displayName = "Card";

// ========================================
// METRIC CARD COMPONENT
// ========================================

interface MetricCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  suffix?: string;
  className?: string;
}

export function MetricCard({
  icon,
  value,
  label,
  suffix,
  className,
}: MetricCardProps) {
  return (
    <Card className={cn("flex flex-col gap-4", className)}>
      <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue">
        {icon}
      </div>
      <div>
        <div className="text-3xl font-bold text-text-primary">
          {value}
          {suffix && <span className="text-accent-blue">{suffix}</span>}
        </div>
        <div className="text-sm text-text-muted mt-1">{label}</div>
      </div>
    </Card>
  );
}

// ========================================
// SECTION HEADER COMPONENT
// ========================================

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn("mb-12", align === "center" && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-secondary max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}

// ========================================
// GLOW TEXT COMPONENT
// ========================================

interface GlowTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function GlowText({
  children,
  className,
  as: Component = "span",
}: GlowTextProps) {
  return (
    <Component className={cn("text-glow", className)}>{children}</Component>
  );
}

// ========================================
// GRADIENT TEXT COMPONENT
// ========================================

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function GradientText({
  children,
  className,
  as: Component = "span",
}: GradientTextProps) {
  return (
    <Component className={cn("gradient-text", className)}>{children}</Component>
  );
}

// ========================================
// DIVIDER COMPONENT
// ========================================

export function Divider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full h-px bg-gradient-to-r from-transparent via-dark-600 to-transparent",
        className,
      )}
    />
  );
}
