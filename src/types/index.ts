/**
 * Types Index
 * Re-exports all types for easy importing
 *
 * Usage: import { Project, SocialLink, Skill } from "@/types";
 */

// Content types (projects, experiments)
export type {
  ExperimentsPageProps,
  ExperimentDetailPageProps,
  ExperimentApproachStep,
  ExperimentTechStackItem,
  ExperimentKeyInsight,
  ExperimentLearnings,
  ExperimentApproach,
  ExperimentLinks,
  Experiment,
  ExperimentType,
} from "./experiment";

export type {
  ProjectsPageProps,
  ProjectCardProps,
  ProjectDetailPageProps,
  ProjectShowcaseProps,
  ProjectsGridProps,
  RelatedProject,
  Project,
  ProjectChallenge,
  ProjectMetric,
  ProjectCategory,
  ProjectCategoryFilter,
} from "./project";

export type {
  SiteConfig,
  HeroTechStack,
  HeroMetric,
  HeroSectionProps,
} from "./home";

export type {
  FooterProps,
  ContactPageProps,
  NavigationProps,
  NavLink,
  FooterLinkGroup,
  SocialLink,
  ContactInfo,
} from "./navigation";

// About page types (skills, timeline, education)
export type {
  AboutPageProps,
  AboutSkillLevel,
  AboutSkill,
  AboutSkillCategory,
  AboutSkillsByCategory,
  AboutTimelineItem,
  AboutEducation,
  AboutCertification,
  Value,
  AboutLevelColors,
} from "./about";

// Motion types
export type {
  FadeInProps,
  AnimatedCounterProps,
  FloatingProps,
  ImageCarouselProps,
  ImageLightboxProps,
  MagneticProps,
  ParallaxImageProps,
  StaggerContainerProps,
} from "./motion";
