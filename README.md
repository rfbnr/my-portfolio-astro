# 🚀 Ridwan Febnur AR Portfolio

A modern, dark-themed portfolio website built with **Astro** and **React**, featuring stunning glassmorphism design, smooth animations, and a liquid background effect. Built with **Clean Architecture** principles for maintainability and scalability.

![Astro](https://img.shields.io/badge/Astro-5.16.5-ff5d01?style=flat-square&logo=astro)
![React](https://img.shields.io/badge/React-19.2.3-61dafb?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.18-38bdf8?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.26-ff0055?style=flat-square&logo=framer)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript)

## ✨ Features

- 🌙 **Dark Liquid Theme** - Beautiful dark mode with animated liquid background
- 🪟 **Glassmorphism Design** - Modern glass-like UI components with blur effects
- 🎭 **Smooth Animations** - Powered by Framer Motion for delightful interactions
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ♿ **Accessible** - Reduced motion support and semantic HTML
- ⚡ **Fast Performance** - Static site generation with partial hydration
- 🏗️ **Clean Architecture** - Proper separation of concerns for maintainability

## 🛠 Tech Stack

| Technology                                     | Purpose                           |
| ---------------------------------------------- | --------------------------------- |
| [Astro](https://astro.build)                   | Static Site Generator & Framework |
| [React](https://react.dev)                     | Interactive UI Components         |
| [TailwindCSS](https://tailwindcss.com)         | Utility-first CSS Styling         |
| [Framer Motion](https://www.framer.com/motion) | Animations & Transitions          |
| [Lucide React](https://lucide.dev)             | Icon Library                      |
| [TypeScript](https://www.typescriptlang.org)   | Type Safety                       |

## 📂 Project Structure (Clean Architecture)

```
src/
├── types/                    # 🔷 Type Definitions Layer
│   ├── index.ts              # Central type exports
│   ├── project.ts            # Project interfaces
│   ├── experiment.ts         # Experiment interfaces
│   ├── skill.ts              # Skill & tech stack interfaces
│   ├── timeline.ts           # Timeline, education, values
│   └── navigation.ts         # Navigation & social links
│
├── data/                     # 📊 Data Layer
│   ├── index.ts              # Central data exports
│   ├── projects.ts           # Projects data + helpers
│   ├── experiments.ts        # Experiments data
│   ├── skills.ts             # Skills, tech stack, metrics
│   ├── timeline.ts           # Career timeline, education
│   └── site.ts               # Site config, nav, social links
│
├── hooks/                    # 🪝 Custom Hooks Layer
│   ├── index.ts              # Central hook exports
│   └── useProjects.ts        # Project filtering logic
│
├── components/               # 🧩 Presentation Layer
│   ├── layout/               # Layout components
│   │   ├── Navigation.tsx    # Header navigation
│   │   └── Footer.tsx        # Site footer
│   ├── motion/               # Animation components
│   │   └── index.tsx         # FadeIn, Stagger, Floating, etc.
│   ├── sections/             # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── ProjectsGrid.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── ExperimentsPage.tsx
│   │   ├── ExperimentDetailPage.tsx
│   │   └── CaseStudyPage.tsx
│   └── ui/                   # Reusable UI primitives
│       └── index.tsx         # Button, Badge, Card, etc.
│
├── layouts/                  # Astro layouts
│   └── Layout.astro
│
├── lib/                      # Utilities
│   └── utils.ts              # Helper functions (cn)
│
├── pages/                    # File-based routing
│   ├── index.astro           # Homepage
│   ├── about.astro
│   ├── contact.astro
│   ├── experiments.astro
│   ├── experiments/[slug].astro
│   └── projects/
│       ├── index.astro
│       └── [slug].astro
│
└── styles/
    └── global.css            # Design tokens & global styles
```

<!-- ## 🏗️ Architecture Principles

### Separation of Concerns

| Layer          | Purpose                | Example                          |
| -------------- | ---------------------- | -------------------------------- |
| **Types**      | Interface definitions  | `Project`, `Skill`, `NavLink`    |
| **Data**       | Data sources & helpers | `projects`, `getProjectBySlug()` |
| **Hooks**      | Business logic         | `useProjects()` with filtering   |
| **Components** | Presentation only      | Import data, render UI           | -->

<!-- ### How to Add New Data

1. **Define type** in `src/types/`:

```typescript
// src/types/blog.ts
export interface BlogPost {
  id: number;
  title: string;
  content: string;
}
```

2. **Create data file** in `src/data/`:

```typescript
// src/data/blog.ts
import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  { id: 1, title: "Hello World", content: "..." },
];
```

3. **Export from index files**
4. **Import in components**:

```typescript
import { blogPosts } from "@/data";
import type { BlogPost } from "@/types";
``` -->

## 🎨 Design System

### Color Palette

| Variable           | Color     | Usage              |
| ------------------ | --------- | ------------------ |
| `--dark-900`       | `#0a0a0f` | Primary background |
| `--dark-700`       | `#1a1a24` | Card backgrounds   |
| `--accent-blue`    | `#3b82f6` | Primary accent     |
| `--accent-purple`  | `#8b5cf6` | Secondary accent   |
| `--accent-cyan`    | `#06b6d4` | Tertiary accent    |
| `--accent-emerald` | `#10b981` | Success states     |

### Typography

- **Inter** - Body text and UI
- **Space Grotesk** - Headings and display text
- **JetBrains Mono** - Code blocks

<!-- ### UI Components

| Component       | Description                                                        |
| --------------- | ------------------------------------------------------------------ |
| `Button`        | Animated button with variants (primary, secondary, ghost, outline) |
| `Badge`         | Small labels for tags and status indicators                        |
| `TechBadge`     | Tech stack badges with icons                                       |
| `Card`          | Glassmorphism container with hover effects                         |
| `MetricCard`    | Statistics display card                                            |
| `SectionHeader` | Section title with optional subtitle                               |
| `GlowText`      | Text with glow effect                                              |
| `GradientText`  | Gradient-colored text                                              |
| `Divider`       | Gradient divider line                                              |

### Animation Components

| Component          | Description                                 |
| ------------------ | ------------------------------------------- |
| `FadeIn`           | Fade in on viewport entry                   |
| `StaggerContainer` | Container for staggered children animations |
| `StaggerItem`      | Child item for stagger effect               |
| `LiquidBackground` | Animated gradient background                |
| `ScrollIndicator`  | Scroll down indicator                       |
| `Floating`         | Floating animation wrapper                  |
| `Magnetic`         | Mouse-following magnetic effect             | -->

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/my-portfolio-astro.git
cd my-portfolio-astro

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Server runs at http://localhost:4321
```

### Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Available Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start development server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview production build locally             |
| `npm run astro`   | Run Astro CLI commands                       |

## 📄 Pages

| Route                 | Description                                                     |
| --------------------- | --------------------------------------------------------------- |
| `/`                   | Homepage with hero section and featured projects                |
| `/about`              | About page with skills, experience timeline, and certifications |
| `/projects`           | All projects listing                                            |
| `/projects/[slug]`    | Individual project case study                                   |
| `/experiments`        | Side projects and experiments                                   |
| `/experiments/[slug]` | Experiment detail page                                          |
| `/contact`            | Contact form                                                    |

<!-- ## 🔧 Path Aliases

The project uses TypeScript path aliases for clean imports:

```typescript
import { Component } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { cn } from "@/lib/utils";
import { projects } from "@/data";
import type { Project } from "@/types";
``` -->

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Reduced motion media query support
- Keyboard navigation support
- ARIA labels where appropriate

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using [Astro](https://astro.build)
