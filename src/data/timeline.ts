/**
 * Timeline and experience data
 */

import {
  Award,
  Users,
  Briefcase,
  GraduationCap,
  Rocket,
  Code2,
} from "lucide-react";
import type { TimelineItem, Education, Certification, Value } from "@/types";

export const timeline: TimelineItem[] = [
  {
    year: "2025",
    title: "Open for New Opportunities",
    description:
      "Seeking challenging projects in mobile architecture and cross-platform development.",
    icon: Award,
    highlight: true,
  },
  {
    year: "2024",
    title: "Architecture Mastery & Mentoring",
    description:
      "Led mobile architecture decisions and mentored junior developers in Flutter best practices.",
    icon: Users,
  },
  {
    year: "2023",
    title: "Production-Level Enterprise Systems",
    description:
      "Built HRIS, CRM, and Sales Force applications handling thousands of users daily.",
    icon: Briefcase,
  },
  {
    year: "2022",
    title: "Backend & SSO Architecture",
    description:
      "Expanded into full-stack development with Laravel and implemented SSO systems.",
    icon: GraduationCap,
  },
  {
    year: "2021",
    title: "Enterprise System Development",
    description:
      "Transitioned to building enterprise-grade applications with complex business logic.",
    icon: Briefcase,
  },
  {
    year: "2020",
    title: "Transition to Flutter",
    description:
      "Embraced cross-platform development with Flutter, rapidly becoming proficient.",
    icon: Rocket,
  },
  {
    year: "2019",
    title: "Started Android Development",
    description:
      "Began mobile development journey with native Android and Kotlin.",
    icon: Code2,
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Information Technology 1",
    institution: "Universitas XYZ",
    year: "2015 - 2019",
    description:
      "Focused on software engineering and mobile application development.",
  },
  {
    degree: "Bachelor of Information Technology 2",
    institution: "Universitas XYZ",
    year: "2015 - 2019",
    description:
      "Focused on software engineering and mobile application development.",
  },
];

export const certifications: Certification[] = [
  {
    name: "Google Associate Android Developer",
    issuer: "Google",
    year: "2021",
  },
  {
    name: "Flutter Development Bootcamp",
    issuer: "Udemy",
    year: "2020",
  },
];

export const values: Value[] = [
  {
    title: "Problem Solver First",
    description:
      "I approach every project by understanding the core problem before jumping into code.",
    icon: "🎯",
  },
  {
    title: "Design-Aware Engineering",
    description:
      "Good UX isn't just designer's job - I bridge the gap between design and implementation.",
    icon: "🎨",
  },
  {
    title: "Production-Ready Mindset",
    description:
      "Code that works in development is easy; code that scales in production is the goal.",
    icon: "🚀",
  },
  {
    title: "Continuous Learning",
    description:
      "Technology evolves rapidly - staying curious and learning is non-negotiable.",
    icon: "📚",
  },
];
