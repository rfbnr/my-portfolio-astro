import { cn } from "@/lib/utils";
import type { GlowTextProps, GradientTextProps } from "@/types";

export function GlowText({
  children,
  className,
  as: Component = "span",
}: GlowTextProps) {
  return (
    <Component className={cn("text-glow", className)}>{children}</Component>
  );
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
