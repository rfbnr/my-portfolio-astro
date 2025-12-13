/**
 * Projects data
 */

import type { Project, ProjectCategoryFilter } from "@/types";

export const projectCategories: ProjectCategoryFilter[] = [
  { id: "all", label: "All" },
  { id: "mobile", label: "Mobile" },
  { id: "web", label: "Web" },
  { id: "enterprise", label: "Enterprise" },
  { id: "experimental", label: "Experimental" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise HRIS Platform",
    slug: "enterprise-hris",
    category: "enterprise",
    tech: ["Flutter", "Laravel", "MySQL", "Firebase"],
    description:
      "Comprehensive human resource information system handling employee management, attendance, payroll, and performance reviews for 5000+ users.",
    image: "/projects/hris.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Sales Force Automation",
    slug: "sales-force-app",
    category: "mobile",
    tech: ["Flutter", "REST API", "SQLite", "Maps"],
    description:
      "Mobile-first sales tracking application with real-time location tracking, customer management, and offline-first architecture.",
    image: "/projects/sales.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "CRM Dashboard",
    slug: "crm-dashboard",
    category: "web",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
    description:
      "Interactive customer relationship management dashboard with advanced analytics and reporting capabilities.",
    image: "/projects/crm.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "E-Commerce Mobile App",
    slug: "ecommerce-app",
    category: "mobile",
    tech: ["Flutter", "Firebase", "Stripe", "Algolia"],
    description:
      "Full-featured e-commerce application with real-time inventory, payment processing, and personalized recommendations.",
    image: "/projects/ecommerce.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "SSO Authentication System",
    slug: "sso-system",
    category: "enterprise",
    tech: ["Laravel", "OAuth2", "Redis", "Docker"],
    description:
      "Centralized single sign-on system supporting multiple authentication providers and enterprise-grade security.",
    image: "/projects/sso.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Animation Playground",
    slug: "animation-playground",
    category: "experimental",
    tech: ["Flutter", "Rive", "Lottie"],
    description:
      "Experimental project exploring advanced Flutter animations and micro-interactions for enhanced UX.",
    image: "/projects/animation.jpg",
    featured: false,
  },
];

/**
 * Get filtered projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
}

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

/**
 * Get project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
