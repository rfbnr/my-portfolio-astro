import type { AnimatedCounterProps } from "@/types";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}>
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}>
        {isInView && <CounterNumber value={value} duration={duration} />}
      </motion.span>
      {suffix}
    </motion.span>
  );
}

function CounterNumber({
  value,
  duration,
}: {
  value: number;
  duration: number;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  return (
    <motion.span
      ref={nodeRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <motion.span
        initial={false}
        animate={true}
        transition={{ duration, ease: "easeOut" }}>
        {Math.round(value)}
      </motion.span>
    </motion.span>
  );
}
