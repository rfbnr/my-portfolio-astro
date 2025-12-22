import { cn } from "@/lib/utils";
import type { BadgeProps, TechBadgeProps } from "@/types";
import { motion } from "framer-motion";

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
