import type { HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "tech" | "category";
  className?: string;
}

export interface TechBadgeProps {
  icon?: React.ReactNode;
  label: string;
  className?: string;
}

export interface CardProps extends HTMLMotionProps<"div"> {
  hover?: boolean;
  glow?: boolean;
}

export interface MetricCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  suffix?: string;
  className?: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export interface GlowTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}
