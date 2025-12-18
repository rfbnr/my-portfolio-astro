import type { ReactNode } from "react";

export interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export interface ImageCarouselProps {
  images: string[];
  alt?: string;
  onImageClick?: (index: number) => void;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
  alt?: string;
}

export interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  depth?: number;
}

export interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export interface FloatingProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}
