/**
 * Skills data
 */

import {
  Code2,
  Palette,
  Rocket,
  BookOpen,
  Briefcase,
  Layers,
  Sparkles,
} from "lucide-react";
import type {
  SkillsByCategory,
  SkillCategoryInfo,
  TechStackItem,
  MetricItem,
} from "@/types";

export const skills: SkillsByCategory = {
  mobile: [
    { name: "Flutter", level: "Expert", years: 4 },
    { name: "Dart", level: "Expert", years: 4 },
    { name: "Android", level: "Advanced", years: 3 },
    { name: "iOS", level: "Intermediate", years: 2 },
  ],
  web: [
    { name: "Next.js", level: "Advanced", years: 2 },
    { name: "React", level: "Advanced", years: 2 },
    { name: "TypeScript", level: "Advanced", years: 3 },
    { name: "Tailwind CSS", level: "Advanced", years: 2 },
  ],
  backend: [
    { name: "Laravel", level: "Expert", years: 3 },
    { name: "Node.js", level: "Intermediate", years: 2 },
    { name: "Firebase", level: "Advanced", years: 3 },
    { name: "PostgreSQL", level: "Intermediate", years: 2 },
  ],
  tools: [
    { name: "Git", level: "Expert", years: 5 },
    { name: "Docker", level: "Intermediate", years: 2 },
    { name: "Figma", level: "Familiar", years: 2 },
    { name: "VS Code", level: "Expert", years: 5 },
  ],
};

export const skillCategories: SkillCategoryInfo[] = [
  { key: "mobile", title: "Mobile", icon: Code2 },
  { key: "web", title: "Web", icon: Palette },
  { key: "backend", title: "Backend", icon: Rocket },
  { key: "tools", title: "Tools", icon: BookOpen },
];

export const techStack: TechStackItem[] = [
  { label: "Flutter", icon: "🎯" },
  { label: "Dart", icon: "💎" },
  { label: "Next.js", icon: "▲" },
  { label: "Laravel", icon: "🔺" },
  { label: "Firebase", icon: "🔥" },
  { label: "CI/CD", icon: "⚙️" },
];

export const heroMetrics: MetricItem[] = [
  { icon: Briefcase, value: "5+", label: "Years Experience", suffix: "" },
  { icon: Code2, value: "30+", label: "Projects Completed", suffix: "" },
  { icon: Layers, value: "Mobile & Web", label: "Area Focus", suffix: "" },
  { icon: Sparkles, value: "Open", label: "For Collaboration", suffix: "" },
];

export const levelColors: Record<string, string> = {
  Expert: "text-accent-blue",
  Advanced: "text-accent-purple",
  Intermediate: "text-accent-cyan",
  Familiar: "text-text-muted",
};
