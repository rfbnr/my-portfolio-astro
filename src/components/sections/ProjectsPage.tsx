"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Briefcase } from "lucide-react";
import { Badge, Card, Button } from "@/components/ui";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  LiquidBackground,
} from "@/components/motion";
import { cn } from "@/lib/utils";
import type { ProjectCardProps, ProjectsPageProps } from "@/types";

function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StaggerItem>
      <a href={`/projects/${project.slug}`}>
        <Card
          className="group relative overflow-hidden h-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          {/* Project Image / Placeholder */}
          <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-dark-700 to-dark-800">
            {/* Gradient placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-accent-purple/10 to-accent-cyan/20" />

            {/* Project title overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-white/10">
                {project.title.charAt(0)}
              </span>
            </div>

            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-black/60 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: isHovered ? 1 : 0.8,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 rounded-full bg-accent-blue flex items-center justify-center">
                <ArrowUpRight size={24} className="text-white" />
              </motion.div>
            </motion.div>

            {/* Featured badge */}
            {project.featured && (
              <div className="absolute top-3 right-3">
                <Badge variant="tech">Featured</Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
                {project.title}
              </h3>
              <ExternalLink
                size={16}
                className="text-text-muted shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-md bg-dark-700 text-text-muted">
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="text-xs px-2 py-1 rounded-md bg-dark-700 text-text-muted">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-text-secondary line-clamp-2">
              {project.description}
            </p>
          </div>
        </Card>
      </a>
    </StaggerItem>
  );
}

export default function ProjectsPage({
  projects,
  categories,
}: ProjectsPageProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter,
  );

  return (
    <div className="relative">
      <LiquidBackground />

      {/* Header */}
      <section className="pt-32 pb-12">
        <div className="section-container">
          <FadeIn>
            <Badge variant="tech" className="mb-4">
              <Briefcase size={14} />
              Portfolio
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Featured Projects
            </h1>

            <p className="text-xl text-text-secondary max-w-2xl">
              A selection of my recent work building production-ready
              applications across mobile, web, and enterprise platforms.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="pb-8">
        <div className="section-container">
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                    activeFilter === category.id
                      ? "bg-accent-blue text-white"
                      : "glass glass-hover text-text-secondary hover:text-text-primary",
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}>
                  {category.label}
                </motion.button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="section-container">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={project.order || 0}
                />
              ))}
            </AnimatePresence>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="section-container">
          <FadeIn>
            <Card className="text-center py-12 px-6">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                  Interested in working together?
                </h2>
                <p className="text-text-secondary mb-8">
                  I&apos;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of your vision.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="/contact">
                    <Button variant="primary" glow>
                      Get in Touch
                    </Button>
                  </a>
                  <a href="/about">
                    <Button variant="secondary">Learn More About Me</Button>
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
