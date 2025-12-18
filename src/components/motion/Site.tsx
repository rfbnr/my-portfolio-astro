import type { FloatingProps } from "@/types";
import { motion } from "framer-motion";

export function LiquidBackground() {
  return (
    <>
      <div className="liquid-bg" />
      <div className="noise-overlay" />
    </>
  );
}

export function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 text-text-muted"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}>
      <span className="text-xs uppercase tracking-widest">Scroll</span>
      <motion.div
        className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center pt-2"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}>
        <motion.div
          className="w-1.5 h-1.5 bg-text-muted rounded-full"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}

export function Floating({ children, className, delay = 0 }: FloatingProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}>
      {children}
    </motion.div>
  );
}
