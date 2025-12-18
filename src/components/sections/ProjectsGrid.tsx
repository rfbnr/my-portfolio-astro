"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Badge, Card, SectionHeader } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { cn } from "@/lib/utils";
import type { ProjectCardProps, ProjectsGridProps } from "@/types";

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}>
      <a href={`/projects/${project.slug}`}>
        <Card
          className="group relative overflow-hidden h-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          {/* Project Image / Placeholder */}
          <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-dark-700 to-dark-800">
            {/* Show actual image if showcase exists, otherwise show placeholder */}
            {project.showcase && project.showcase.length > 0 ? (
              <img
                src={project.showcase[0]}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-contain"
              />
            ) : (
              <>
                {/* Gradient placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-accent-purple/10 to-accent-cyan/20" />
                {/* Project title overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white/10">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </>
            )}

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

            {/* Description - shows on hover */}
            <motion.p
              className="text-sm text-text-secondary line-clamp-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: isHovered ? 1 : 0.7, height: "auto" }}
              transition={{ duration: 0.3 }}>
              {project.description}
            </motion.p>
          </div>
        </Card>
      </a>
    </motion.div>
  );
}

export function ProjectsGrid({
  projects,
  categories,
  showHeader = true,
  limit,
}: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter,
  );

  const displayedProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  return (
    <section className="py-20 md:py-32">
      <div className="section-container">
        {showHeader && (
          <FadeIn>
            <SectionHeader
              title="Featured Projects"
              subtitle="A selection of my recent work building production-ready applications across mobile, web, and enterprise platforms."
            />
          </FadeIn>
        )}

        {/* Filter Bar */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-2 mb-12">
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

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Link */}
        {limit && filteredProjects.length > limit && (
          <FadeIn delay={0.4}>
            <div className="flex justify-center mt-12">
              <a href="/projects">
                <motion.span
                  className="inline-flex items-center gap-2 text-accent-blue hover:text-blue-400 font-medium"
                  whileHover={{ x: 5 }}>
                  View all projects
                  <ArrowUpRight size={18} />
                </motion.span>
              </a>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
