import { cn } from "@/lib/utils";
import type { CardProps, MetricCardProps } from "@/types";
import { motion } from "framer-motion";
import { forwardRef } from "react";

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
