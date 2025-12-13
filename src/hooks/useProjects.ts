/**
 * Custom hook for project filtering and management
 */

import { useState, useMemo, useCallback } from "react";
import { projects, projectCategories } from "@/data";
import type { Project, ProjectCategory } from "@/types";

interface UseProjectsOptions {
  initialCategory?: ProjectCategory;
  limit?: number;
}

interface UseProjectsReturn {
  filteredProjects: Project[];
  displayedProjects: Project[];
  activeFilter: ProjectCategory;
  setActiveFilter: (category: ProjectCategory) => void;
  categories: typeof projectCategories;
  hasMore: boolean;
}

export function useProjects(
  options: UseProjectsOptions = {},
): UseProjectsReturn {
  const { initialCategory = "all", limit } = options;
  const [activeFilter, setActiveFilter] =
    useState<ProjectCategory>(initialCategory);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const displayedProjects = useMemo(() => {
    if (!limit) return filteredProjects;
    return filteredProjects.slice(0, limit);
  }, [filteredProjects, limit]);

  const hasMore = limit ? filteredProjects.length > limit : false;

  const handleSetActiveFilter = useCallback((category: ProjectCategory) => {
    setActiveFilter(category);
  }, []);

  return {
    filteredProjects,
    displayedProjects,
    activeFilter,
    setActiveFilter: handleSetActiveFilter,
    categories: projectCategories,
    hasMore,
  };
}
