/**
 * Experiments data
 */

import { Sparkles, Puzzle, Code2, Beaker, Box, Lightbulb } from "lucide-react";
import type { Experiment, ExperimentTypeColors } from "@/types";

export const experiments: Experiment[] = [
  {
    id: 1,
    slug: "liquid-morphism-cards",
    title: "Liquid Morphism Cards",
    description:
      "Exploring fluid animations and glassmorphism effects in Flutter using custom painters and shaders.",
    tags: ["UI", "Animation", "Flutter"],
    type: "experiment",
    icon: Sparkles,
    links: { demo: "#", github: "#" },
  },
  {
    id: 2,
    slug: "offline-sync-engine",
    title: "Offline-First Sync Engine",
    description:
      "A prototype synchronization engine with conflict resolution for offline-first mobile applications.",
    tags: ["Architecture", "SQLite", "Dart"],
    type: "prototype",
    icon: Puzzle,
    links: { github: "#" },
  },
  {
    id: 3,
    slug: "gesture-navigation",
    title: "Gesture-Based Navigation",
    description:
      "Custom navigation system using complex gestures for seamless page transitions.",
    tags: ["UX", "Animation", "Flutter"],
    type: "experiment",
    icon: Code2,
    links: { demo: "#", github: "#" },
  },
  {
    id: 4,
    slug: "state-machine-visualizer",
    title: "State Machine Visualizer",
    description:
      "A tool to visualize and debug complex state machines in Flutter applications.",
    tags: ["Tool", "State Management", "Dev Tools"],
    type: "tool",
    icon: Beaker,
    links: { github: "#" },
  },
  {
    id: 5,
    slug: "api-mock-generator",
    title: "API Mock Generator",
    description:
      "CLI tool to generate mock API responses from OpenAPI specifications for faster development.",
    tags: ["CLI", "Node.js", "OpenAPI"],
    type: "tool",
    icon: Box,
    links: { github: "#" },
  },
  {
    id: 6,
    slug: "micro-interactions",
    title: "Micro-Interaction Library",
    description:
      "Collection of reusable micro-interactions and loading animations for Flutter apps.",
    tags: ["Animation", "Open Source", "Flutter"],
    type: "open-source",
    icon: Lightbulb,
    links: { demo: "#", github: "#" },
  },
];

export const experimentTypeColors: ExperimentTypeColors = {
  experiment: "text-accent-purple bg-accent-purple/10 border-accent-purple/20",
  prototype: "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
  tool: "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20",
  research: "text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20",
  "open-source": "text-accent-rose bg-accent-rose/10 border-accent-rose/20",
};

/**
 * Get experiment by slug
 */
export function getExperimentBySlug(slug: string): Experiment | undefined {
  return experiments.find((exp) => exp.slug === slug);
}

/**
 * Get experiments by type
 */
export function getExperimentsByType(type: string): Experiment[] {
  return experiments.filter((exp) => exp.type === type);
}
