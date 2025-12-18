import { defineCollection, z, render } from "astro:content";

// ================================
// Projects Collection
// ================================
const projectsCollection = defineCollection({
  type: "data",
  schema: z.object({
    // Basic fields (for listing)
    title: z.string(),
    category: z.enum(["mobile", "web", "enterprise", "experimental"]),
    tech: z.array(z.string()),
    description: z.string(),
    image: z.string(),
    featured: z.boolean().default(false),
    order: z.number().optional(),

    // Detail fields (for case study page)
    summary: z.string().optional(),
    role: z.string().optional(),
    timeline: z.string().optional(),
    liveUrl: z.string().optional(),
    repoUrl: z.string().optional(),
    challenges: z
      .array(
        z.object({
          challenge: z.string(),
          solution: z.string(),
        }),
      )
      .optional(),
    impactMetrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        }),
      )
      .optional(),
    outcome: z.string().optional(),
  }),
});

// ================================
// Experiments Collection
// ================================
const experimentsCollection = defineCollection({
  type: "data",
  schema: z.object({
    // Basic fields (for listing)
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    type: z.enum([
      "experiment",
      "prototype",
      "tool",
      "research",
      "open-source",
    ]),
    icon: z.string(),
    links: z.object({
      demo: z.string().optional(),
      github: z.string().optional(),
    }),
    order: z.number().optional(),

    // Detail fields (for experiment detail page)
    status: z.enum(["completed", "in-progress", "archived"]).optional(),
    date: z.string().optional(),
    motivation: z.string().optional(),
    approach: z
      .object({
        description: z.string(),
        steps: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
          }),
        ),
      })
      .optional(),
    techStack: z
      .array(
        z.object({
          name: z.string(),
          role: z.string(),
        }),
      )
      .optional(),
    learnings: z
      .object({
        worked: z.array(z.string()),
        didntWork: z.array(z.string()),
      })
      .optional(),
    keyInsights: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
        }),
      )
      .optional(),
    futurePlans: z.string().optional(),
    codeHighlight: z.string().optional(),
  }),
});

// ================================
// Skills Collection
// ================================
const skillsCollection = defineCollection({
  type: "data",
  schema: z.object({
    category: z.enum(["mobile", "web", "backend", "tools"]),
    categoryTitle: z.string(),
    categoryIcon: z.string(), // Icon name from lucide-react
    skills: z.array(
      z.object({
        name: z.string(),
        level: z.enum(["Expert", "Advanced", "Intermediate", "Familiar"]),
        years: z.number(),
      }),
    ),
    order: z.number().optional(),
  }),
});

// ================================
// Timeline Collection
// ================================
const timelineCollection = defineCollection({
  type: "data",
  schema: z.object({
    year: z.string(),
    title: z.string(),
    description: z.string(),
    icon: z.string(), // Icon name from lucide-react
    highlight: z.boolean().default(false),
    order: z.number().optional(),
  }),
});

// ================================
// Education Collection
// ================================
const educationCollection = defineCollection({
  type: "data",
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    year: z.string(),
    description: z.string(),
    order: z.number().optional(),
  }),
});

// ================================
// Certifications Collection
// ================================
const certificationsCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    issuer: z.string(),
    year: z.string(),
    order: z.number().optional(),
  }),
});

// ================================
// Values Collection
// ================================
const valuesCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(), // Emoji
    order: z.number().optional(),
  }),
});

// ================================
// Site Config Collection
// ================================
const siteCollection = defineCollection({
  type: "data",
  schema: z.object({
    // For config.json
    name: z.string().optional(),
    fullName: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    email: z.string().optional(),
    location: z.string().optional(),
    availability: z.string().optional(),
    // For navigation.json
    navLinks: z
      .array(
        z.object({
          href: z.string(),
          label: z.string(),
        }),
      )
      .optional(),
    footerLinks: z
      .array(
        z.object({
          title: z.string(),
          links: z.array(
            z.object({
              href: z.string(),
              label: z.string(),
            }),
          ),
        }),
      )
      .optional(),
    // For social.json
    socialLinks: z
      .array(
        z.object({
          href: z.string(),
          icon: z.string(), // Icon name from lucide-react
          label: z.string(),
          username: z.string().optional(),
        }),
      )
      .optional(),
    contactInfo: z
      .array(
        z.object({
          icon: z.string(),
          label: z.string(),
          value: z.string(),
        }),
      )
      .optional(),
    // For hero.json
    techStack: z
      .array(
        z.object({
          label: z.string(),
          icon: z.string(),
        }),
      )
      .optional(),
    heroMetrics: z
      .array(
        z.object({
          icon: z.string(),
          value: z.string(),
          label: z.string(),
        }),
      )
      .optional(),
  }),
});

// ================================
// Export Collections
// ================================
export const collections = {
  projects: projectsCollection,
  experiments: experimentsCollection,
  skills: skillsCollection,
  timeline: timelineCollection,
  education: educationCollection,
  certifications: certificationsCollection,
  values: valuesCollection,
  site: siteCollection,
};
