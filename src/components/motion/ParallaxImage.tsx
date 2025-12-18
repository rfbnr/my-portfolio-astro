import { cn } from "@/lib/utils";
import type { ParallaxImageProps } from "@/types";
import { motion } from "framer-motion";
import { useRef } from "react";

export function ParallaxImage({
  src,
  alt,
  className,
  depth = 20,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

    ref.current.style.transform = `perspective(1000px) rotateY(${
      x * depth
    }deg) rotateX(${-y * depth}deg) translateZ(20px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform =
      "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)";
  };

  return (
    <motion.div
      ref={ref}
      className={cn("transition-transform duration-300 ease-out", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-2xl"
      />
    </motion.div>
  );
}
