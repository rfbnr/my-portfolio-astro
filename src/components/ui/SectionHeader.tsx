import { cn } from "@/lib/utils";
import type { SectionHeaderProps } from "@/types";

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
