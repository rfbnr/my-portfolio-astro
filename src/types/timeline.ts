/**
 * Timeline and experience-related type definitions
 */

import type { LucideIcon } from "lucide-react";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlight?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}
