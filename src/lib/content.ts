/**
 * Content Collections Data Loader
 * Provides functions to load data from Astro Content Collections
 */

import type { AboutLevelColors, AboutSkill, Project } from "@/types";
import { getCollection, getEntry } from "astro:content";
import {
  Sparkles,
  Puzzle,
  Code2,
  Beaker,
  Box,
  Lightbulb,
  Award,
  Users,
  Briefcase,
  GraduationCap,
  ExternalLink,
  Rocket,
  Palette,
  BookOpen,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Calendar,
  Layers,
  Smartphone,
  Globe,
  Server,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Icon mapping for dynamic icon loading
const iconMaps: Record<string, LucideIcon> = {
  Sparkles,
  Puzzle,
  Code2,
  Beaker,
  Box,
  Lightbulb,
  Award,
  Users,
  Briefcase,
  GraduationCap,
  Rocket,
  Palette,
  BookOpen,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Calendar,
  Layers,
  Smartphone,
  Globe,
  Server,
  Wrench,
};

export function getIcon(iconName: string): LucideIcon {
  return iconMaps[iconName] || Code2;
}

// ================================
// Projects
// ================================
export async function getProjects() {
  const projects = await getCollection("projects");
  const sortedProjects = projects
    .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99))
    .map((project) => ({
      id: project.id,
      slug: project.id,
      ...project.data,
    }));

  return sortedProjects;
}

export async function getProjectBySlug(slug: string) {
  const entry = await getEntry("projects", slug);
  if (!entry) return null;
  return {
    id: entry.id,
    slug: entry.id,
    ...entry.data,
  };
}

export async function getFeaturedProjects() {
  const projects = await getProjects();
  return projects.filter((p) => p.featured);
}

// ================================
// Experiments
// ================================
export async function getExperiments() {
  const experiments = await getCollection("experiments");
  return experiments
    .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99))
    .map((exp) => ({
      id: exp.id,
      slug: exp.id,
      ...exp.data,
      // icon: getIcon(exp.data.icon),
      icon: exp.data.icon,
    }));
}

export async function getExperimentBySlug(slug: string) {
  const entry = await getEntry("experiments", slug);
  if (!entry) return null;
  return {
    id: entry.id,
    slug: entry.id,
    ...entry.data,
    icon: entry.data.icon,
  };
}

// ================================
// Skills
// ================================
export async function getSkills() {
  const skillsCollection = await getCollection("skills");
  const sorted = skillsCollection.sort(
    (a, b) => (a.data.order ?? 99) - (b.data.order ?? 99),
  );

  // Build skills object by category
  const skillsByCategory: Record<string, AboutSkill[]> = {};
  // Keep icon as string - it will be converted to component on client side
  const categories: Array<{ key: string; title: string; icon: string }> = [];

  for (const item of sorted) {
    skillsByCategory[item.data.category] = item.data.skills;
    categories.push({
      key: item.data.category,
      title: item.data.categoryTitle,
      icon: item.data.categoryIcon,
    });
  }

  return { skillsByCategory, categories };
}

// ================================
// Timeline
// ================================
export async function getTimeline() {
  const timeline = await getCollection("timeline");
  return (
    timeline
      .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99))
      // Keep icon as string - it will be converted to component on client side
      .map((item) => item.data)
  );
}

// ================================
// Education
// ================================
export async function getEducation() {
  const education = await getCollection("education");
  return education
    .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99))
    .map((item) => item.data);
}

// ================================
// Certifications
// ================================
export async function getCertifications() {
  const certifications = await getCollection("certifications");
  return certifications
    .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99))
    .map((item) => item.data);
}

// ================================
// Values
// ================================
export async function getValues() {
  const values = await getCollection("values");
  return values
    .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99))
    .map((item) => item.data);
}

// ================================
// Site Config
// ================================
export async function getSiteConfig() {
  const config = await getEntry("site", "config");
  return config?.data ?? {};
}

export async function getNavigation() {
  const navigation = await getEntry("site", "navigation");
  return navigation?.data ?? { navLinks: [], footerLinks: [] };
}

export async function getSocialLinks() {
  const social = await getEntry("site", "social");
  if (!social) return { socialLinks: [], contactInfo: [] };

  return {
    // Keep icon as string - it will be converted to component on client side
    socialLinks: social.data.socialLinks ?? [],
    contactInfo: social.data.contactInfo ?? [],
  };
}

export async function getHeroData() {
  const hero = await getEntry("site", "hero");
  if (!hero) return { techStack: [], heroMetrics: [] };

  return {
    techStack: hero.data.techStack ?? [],
    // Keep icon as string - it will be converted to component on client side
    heroMetrics: hero.data.heroMetrics ?? [],
  };
}

// ================================
// Constants (non-async)
// ================================
export const projectCategories = [
  { id: "all", label: "All" },
  { id: "mobile", label: "Mobile" },
  { id: "web", label: "Web" },
  { id: "enterprise", label: "Enterprise" },
  { id: "experimental", label: "Experimental" },
];

export const experimentTypeColors: Record<string, string> = {
  experiment: "text-accent-purple bg-accent-purple/10 border-accent-purple/20",
  prototype: "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
  tool: "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20",
  research: "text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20",
  "open-source": "text-accent-rose bg-accent-rose/10 border-accent-rose/20",
};

export const levelColors: AboutLevelColors = {
  Expert: "text-accent-blue",
  Advanced: "text-accent-purple",
  Intermediate: "text-accent-cyan",
  Familiar: "text-text-muted",
};
