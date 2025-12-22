import { cn } from "@/lib/utils";

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
