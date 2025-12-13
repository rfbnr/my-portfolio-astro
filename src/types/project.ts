/**
 * Project-related type definitions
 */

export type ProjectCategory =
  | "all"
  | "mobile"
  | "web"
  | "enterprise"
  | "experimental";

export interface Project {
  id: number;
  title: string;
  slug: string;
  category: Exclude<ProjectCategory, "all">;
  tech: string[];
  description: string;
  image: string;
  featured: boolean;
}

export interface ProjectCategoryFilter {
  id: ProjectCategory;
  label: string;
}
