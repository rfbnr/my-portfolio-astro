"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Tag,
  Lightbulb,
  Target,
  BookOpen,
  Rocket,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";
import { Button, Badge, Card, SectionHeader, Divider } from "@/components/ui";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  LiquidBackground,
} from "@/components/motion";

// Experiment data - would come from CMS in production
const experimentData = {
  title: "Liquid Morphism Cards",
  slug: "liquid-morphism-cards",
  type: "experiment",
  status: "completed",
  date: "October 2024",
  summary:
    "Exploring fluid animations and glassmorphism effects in Flutter using custom painters and shaders for next-generation UI experiences.",
  tags: ["UI", "Animation", "Flutter", "Custom Painter", "Shaders"],
  links: {
    demo: "https://example.com/demo",
    github: "https://github.com/ridwanfar/liquid-morphism",
  },
  motivation: `
    Modern UI design has evolved beyond flat surfaces. Users expect interfaces that feel alive, 
    responsive, and delightful. I wanted to explore how far we can push Flutter's rendering 
    capabilities to create truly premium visual experiences.
    
    The goal wasn't just to create "cool effects" — it was to understand the technical 
    foundations of high-performance animations and how they can be implemented in a way 
    that's maintainable and performant on real devices.
  `,
  approach: {
    description: `
      I took a bottom-up approach, starting with Flutter's CustomPainter API to understand 
      low-level rendering before abstracting into reusable components.
    `,
    steps: [
      {
        title: "Research & Inspiration",
        description:
          "Studied glassmorphism trends, analyzed implementations in SwiftUI and CSS, collected 50+ UI references from Dribbble and Behance.",
      },
      {
        title: "Core Engine Development",
        description:
          "Built a custom rendering engine using CustomPainter with support for real-time blur, gradient mesh, and noise textures.",
      },
      {
        title: "Animation System",
        description:
          "Implemented a physics-based animation controller that responds to touch velocity and device motion sensors.",
      },
      {
        title: "Performance Optimization",
        description:
          "Used RepaintBoundary, cached paint objects, and implemented LOD (Level of Detail) system for older devices.",
      },
    ],
  },
  techStack: [
    { name: "Flutter", role: "Framework" },
    { name: "Custom Painter", role: "Rendering" },
    { name: "Rive", role: "Complex Animations" },
    { name: "Sensors Plus", role: "Device Motion" },
  ],
  learnings: {
    worked: [
      "CustomPainter with cached Paint objects achieved 60fps on mid-range devices",
      "Physics-based animations feel more natural than predefined curves",
      "Layer separation (blur layer, content layer, glow layer) simplified debugging",
      "Using device sensors for subtle parallax creates premium feel without effort",
    ],
    didntWork: [
      "Real-time shader compilation caused jank on first render — solved with warm-up",
      "Heavy blur on full-screen elements dropped to 30fps — needed LOD fallback",
      "Complex gradient meshes increased GPU memory significantly on older devices",
    ],
  },
  keyInsights: [
    {
      title: "Performance vs Aesthetics Trade-off",
      description:
        "Premium effects are possible, but require graceful degradation. Always have a simpler fallback for lower-end devices.",
    },
    {
      title: "Flutter's Hidden Power",
      description:
        "Most developers use pre-built widgets, but CustomPainter unlocks near-native rendering performance with full control.",
    },
    {
      title: "Motion Design Principles",
      description:
        "Good animation isn't about flashy effects — it's about guiding user attention and providing feedback.",
    },
  ],
  futurePlans: `
    This experiment has potential to become a proper open-source package. I'm considering:
    
    • Publishing as a Flutter package with customizable presets
    • Adding accessibility options (reduce motion support)
    • Creating a visual editor for designing liquid effects
    • Exploring integration with Impeller (Flutter's new rendering engine)
  `,
  codeHighlight: `
// Simplified example of the core blur effect
class LiquidPainter extends CustomPainter {
  final double blurRadius;
  final List<Color> gradientColors;
  
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..shader = RadialGradient(
        colors: gradientColors,
      ).createShader(Rect.fromLTWH(0, 0, size.width, size.height))
      ..maskFilter = MaskFilter.blur(BlurStyle.normal, blurRadius);
    
    canvas.drawRRect(
      RRect.fromRectAndRadius(
        Rect.fromLTWH(0, 0, size.width, size.height),
        Radius.circular(24),
      ),
      paint,
    );
  }
}
  `,
};

const relatedExperiments = [
  {
    title: "Gesture-Based Navigation",
    slug: "gesture-navigation",
    type: "experiment",
  },
  {
    title: "Micro-Interaction Library",
    slug: "micro-interactions",
    type: "open-source",
  },
];

const statusColors: Record<string, string> = {
  completed:
    "text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20",
  "in-progress": "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
  archived: "text-text-muted bg-dark-700 border-dark-600",
};

const typeColors: Record<string, string> = {
  experiment: "text-accent-purple",
  prototype: "text-accent-blue",
  tool: "text-accent-cyan",
  "open-source": "text-accent-rose",
};

export default function ExperimentDetailPage() {
  return (
    <div className="relative">
      <LiquidBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12">
        <div className="section-container">
          <FadeIn>
            {/* Back Link */}
            <a
              href="/experiments"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-8">
              <ArrowLeft size={18} />
              Back to R&D
            </a>

            {/* Type & Status Badges */}
            <div className="flex flex-wrap gap-3 mb-4">
              <Badge
                variant="category"
                className={`capitalize ${typeColors[experimentData.type]}`}>
                {experimentData.type}
              </Badge>
              <Badge className={statusColors[experimentData.status]}>
                {experimentData.status === "completed"
                  ? "✓ Completed"
                  : experimentData.status}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              {experimentData.title}
            </h1>

            {/* Summary */}
            <p className="text-xl text-text-secondary max-w-3xl mb-8">
              {experimentData.summary}
            </p>

            {/* Meta & Actions */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-text-muted">
                <Calendar size={16} />
                <span>{experimentData.date}</span>
              </div>

              <div className="flex gap-3">
                {experimentData.links.demo && (
                  <Button variant="primary" glow>
                    <ExternalLink size={18} />
                    Live Demo
                  </Button>
                )}
                {experimentData.links.github && (
                  <Button variant="secondary">
                    <Github size={18} />
                    View Source
                  </Button>
                )}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {experimentData.tags.map((tag) => (
                <Badge key={tag} variant="tech">
                  {tag}
                </Badge>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Motivation Section */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            <FadeIn className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent-purple/10 flex items-center justify-center">
                  <Lightbulb size={20} className="text-accent-purple" />
                </div>
                <h2 className="text-2xl font-bold text-text-primary">
                  Why I Built This
                </h2>
              </div>
              <div className="text-text-secondary space-y-4 whitespace-pre-line leading-relaxed">
                {experimentData.motivation.trim()}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="space-y-4">
                <h3 className="font-semibold text-text-primary">Tech Stack</h3>
                <div className="space-y-3">
                  {experimentData.techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center justify-between">
                      <span className="text-text-primary">{tech.name}</span>
                      <span className="text-xs text-text-muted bg-dark-700 px-2 py-1 rounded">
                        {tech.role}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      <Divider />

      {/* Approach Section */}
      <section className="py-16">
        <div className="section-container">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                <Target size={20} className="text-accent-blue" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary">
                Technical Approach
              </h2>
            </div>
            <p className="text-text-secondary max-w-3xl mb-12">
              {experimentData.approach.description.trim()}
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {experimentData.approach.steps.map((step, index) => (
              <StaggerItem key={index}>
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-text-secondary">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Divider />

      {/* Code Highlight Section */}
      <section className="py-16">
        <div className="section-container">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center">
                <BookOpen size={20} className="text-accent-cyan" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary">
                Code Highlight
              </h2>
            </div>

            <Card className="p-0 overflow-hidden">
              <div className="bg-dark-950 p-4 border-b border-dark-700">
                <span className="text-sm text-text-muted">
                  liquid_painter.dart
                </span>
              </div>
              <pre className="p-6 overflow-x-auto text-sm">
                <code className="text-text-secondary font-mono">
                  {experimentData.codeHighlight.trim()}
                </code>
              </pre>
            </Card>
          </FadeIn>
        </div>
      </section>

      <Divider />

      {/* Learnings Section */}
      <section className="py-16">
        <div className="section-container">
          <FadeIn>
            <SectionHeader
              title="Key Learnings"
              subtitle="What worked, what didn't, and what I'd do differently."
            />
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What Worked */}
            <FadeIn delay={0.1}>
              <Card className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 size={24} className="text-accent-emerald" />
                  <h3 className="text-lg font-semibold text-text-primary">
                    What Worked
                  </h3>
                </div>
                <ul className="space-y-4">
                  {experimentData.learnings.worked.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-emerald mt-2 shrink-0" />
                      <span className="text-text-secondary text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>

            {/* What Didn't Work */}
            <FadeIn delay={0.2}>
              <Card className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle size={24} className="text-accent-rose" />
                  <h3 className="text-lg font-semibold text-text-primary">
                    Challenges Faced
                  </h3>
                </div>
                <ul className="space-y-4">
                  {experimentData.learnings.didntWork.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-rose mt-2 shrink-0" />
                      <span className="text-text-secondary text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      <Divider />

      {/* Key Insights */}
      <section className="py-16">
        <div className="section-container">
          <FadeIn>
            <SectionHeader
              title="Key Insights"
              subtitle="The bigger lessons that go beyond this specific experiment."
            />
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {experimentData.keyInsights.map((insight, index) => (
              <StaggerItem key={index}>
                <Card className="h-full text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center">
                    <Lightbulb size={24} className="text-accent-blue" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-3">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {insight.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Divider />

      {/* Future Plans */}
      <section className="py-16">
        <div className="section-container">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent-emerald/10 flex items-center justify-center">
                <Rocket size={20} className="text-accent-emerald" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary">
                What&apos;s Next
              </h2>
            </div>
            <div className="text-text-secondary whitespace-pre-line leading-relaxed max-w-3xl">
              {experimentData.futurePlans.trim()}
            </div>
          </FadeIn>
        </div>
      </section>

      <Divider />

      {/* Related Experiments */}
      <section className="py-16">
        <div className="section-container">
          <FadeIn>
            <SectionHeader
              title="Related Experiments"
              subtitle="More explorations you might find interesting."
            />
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {relatedExperiments.map((exp) => (
              <StaggerItem key={exp.slug}>
                <a href={`/experiments/${exp.slug}`}>
                  <Card className="group flex items-center justify-between">
                    <div>
                      <Badge
                        variant="category"
                        className={`capitalize mb-2 ${typeColors[exp.type]}`}>
                        {exp.type}
                      </Badge>
                      <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
                        {exp.title}
                      </h3>
                    </div>
                    <ArrowRight
                      size={20}
                      className="text-text-muted group-hover:text-accent-blue transition-colors"
                    />
                  </Card>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container">
          <FadeIn>
            <Card className="text-center py-12 px-6">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                  Interested in this experiment?
                </h2>
                <p className="text-text-secondary mb-8">
                  I&apos;m always happy to discuss technical details, share
                  learnings, or collaborate on similar explorations.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="/contact">
                    <Button variant="primary" glow>
                      Let&apos;s Discuss
                    </Button>
                  </a>
                  <a
                    href={experimentData.links.github}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Button variant="secondary">
                      <Github size={18} />
                      View on GitHub
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
