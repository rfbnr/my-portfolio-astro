/**
 * Experiment-related type definitions
 */

import type { LucideIcon } from "lucide-react";

export type ExperimentType =
  | "experiment"
  | "prototype"
  | "tool"
  | "research"
  | "open-source";

export interface ExperimentLinks {
  demo?: string;
  github?: string;
}

export interface Experiment {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  type: ExperimentType;
  icon: LucideIcon;
  links: ExperimentLinks;
}

export interface ExperimentTypeColors {
  [key: string]: string;
}
