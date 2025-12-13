/**
 * Central data exports
 * All data should be exported from here
 */

// Projects
export {
  projects,
  projectCategories,
  getProjectsByCategory,
  getFeaturedProjects,
  getProjectBySlug,
} from "./projects";

// Experiments
export {
  experiments,
  experimentTypeColors,
  getExperimentBySlug,
  getExperimentsByType,
} from "./experiments";

// Skills
export {
  skills,
  skillCategories,
  techStack,
  heroMetrics,
  levelColors,
} from "./skills";

// Timeline
export { timeline, education, certifications, values } from "./timeline";

// Site config
export {
  siteConfig,
  navLinks,
  socialLinks,
  footerLinks,
  contactInfo,
} from "./site";
