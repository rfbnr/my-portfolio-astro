"use client";

import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import type {
  AnimatedCounterProps,
  FadeInProps,
  FloatingProps,
  MagneticProps,
  ParallaxImageProps,
  StaggerContainerProps,
} from "@/types";

// ========================================
// FADE IN COMPONENT
// ========================================

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directionOffset[direction] }
      }
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

// ========================================
// STAGGER CONTAINER COMPONENT
// ========================================

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function StaggerContainer({
  children,
  className,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

// ========================================
// PAGE TRANSITION COMPONENT
// ========================================

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}>
      {children}
    </motion.div>
  );
}

// ========================================
// PARALLAX IMAGE COMPONENT
// ========================================

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

// ========================================
// MAGNETIC ELEMENT COMPONENT
// ========================================

export function Magnetic({
  children,
  strength = 0.3,
  className,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * strength}px, ${
      y * strength
    }px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <div
      ref={ref}
      className={cn("transition-transform duration-300 ease-out", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
}

// ========================================
// COUNTER ANIMATION COMPONENT
// ========================================

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

// ========================================
// LIQUID BACKGROUND COMPONENT
// ========================================

export function LiquidBackground() {
  return (
    <>
      <div className="liquid-bg" />
      <div className="noise-overlay" />
    </>
  );
}

// ========================================
// SCROLL INDICATOR COMPONENT
// ========================================

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

// ========================================
// FLOATING ELEMENT WRAPPER
// ========================================

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
