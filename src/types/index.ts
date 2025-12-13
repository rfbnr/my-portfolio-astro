/**
 * Central type exports
 * All type definitions should be exported from here
 */

// Project types
export type {
  Project,
  ProjectCategory,
  ProjectCategoryFilter,
} from "./project";

// Experiment types
export type {
  Experiment,
  ExperimentType,
  ExperimentLinks,
  ExperimentTypeColors,
} from "./experiment";

// Skill types
export type {
  Skill,
  SkillLevel,
  SkillCategory,
  SkillsByCategory,
  SkillCategoryInfo,
  TechStackItem,
  MetricItem,
} from "./skill";

// Timeline types
export type { TimelineItem, Education, Certification, Value } from "./timeline";

// Navigation types
export type {
  NavLink,
  SocialLink,
  FooterLinkGroup,
  ContactInfo,
} from "./navigation";
