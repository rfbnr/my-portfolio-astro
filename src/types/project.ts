/**
 * Project-related type definitions
 */

export type ProjectCategory =
  | "mobile"
  | "web"
  | "enterprise"
  | "experimental"
  | "all";

export interface ProjectsPageProps {
  projects: Project[];
  categories: ProjectCategoryFilter[];
}

export interface ProjectCardProps {
  project: Project;
  index: number;
}

export interface ProjectsGridProps {
  projects: Project[];
  categories: ProjectCategoryFilter[];
  showHeader?: boolean;
  limit?: number;
}

export interface ProjectDetailPageProps {
  project: Project;
  relatedProjects: RelatedProject[];
}

export interface RelatedProject {
  slug: string;
  title: string;
  category: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  tech: string[];
  description: string;
  image?: string;
  featured?: boolean;
  order?: number;
  // Detail fields (for case study page)
  summary?: string;
  role?: string;
  timeline?: string;
  liveUrl?: string;
  repoUrl?: string;
  challenges?: ProjectChallenge[];
  impactMetrics?: ProjectMetric[];
  outcome?: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectCategoryFilter {
  id: string;
  label: string;
}
