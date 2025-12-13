/**
 * Skill-related type definitions
 */

import type { LucideIcon } from "lucide-react";

export type SkillLevel = "Expert" | "Advanced" | "Intermediate" | "Familiar";
export type SkillCategory = "mobile" | "web" | "backend" | "tools";

export interface Skill {
  name: string;
  level: SkillLevel;
  years: number;
}

export interface SkillsByCategory {
  mobile: Skill[];
  web: Skill[];
  backend: Skill[];
  tools: Skill[];
}

export interface SkillCategoryInfo {
  key: SkillCategory;
  title: string;
  icon: LucideIcon;
}

export interface TechStackItem {
  label: string;
  icon: string;
}

export interface MetricItem {
  icon: LucideIcon;
  value: string;
  label: string;
  suffix: string;
}
