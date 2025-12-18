/**
 * About Page Types
 * Types for skills, timeline, education, certifications, and values
 */

// ================================
// Skills Types
// ================================

export interface AboutPageProps {
  skills: Record<string, AboutSkill[]>;
  skillCategories: AboutSkillCategory[];
  levelColors: AboutLevelColors;
  timeline: AboutTimelineItem[];
  education: AboutEducation[];
  certifications: AboutCertification[];
  values: Value[];
}

export type AboutSkillLevel =
  | "Expert"
  | "Advanced"
  | "Intermediate"
  | "Familiar";

export interface AboutSkill {
  name: string;
  level: AboutSkillLevel;
  years: number;
}

export interface AboutSkillCategory {
  key: string;
  title: string;
  icon: string;
}

export interface AboutSkillsByCategory {
  [key: string]: AboutSkill[];
}

// ================================
// Timeline Types
// ================================

export interface AboutTimelineItem {
  year: string;
  title: string;
  description: Array<string>;
  icon: string;
  highlight?: boolean;
}

// ================================
// Education Types
// ================================

export interface AboutEducation {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

// ================================
// Certification Types
// ================================

export interface AboutCertification {
  name: string;
  issuer: string;
  year: string;
}

// ================================
// Values Types
// ================================

export interface Value {
  title: string;
  description: string;
  icon: string;
}

// ================================
// Level Colors (UI mapping)
// ================================

export type AboutLevelColors = Record<AboutSkillLevel, string>;
