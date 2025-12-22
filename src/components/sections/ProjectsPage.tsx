"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Badge, Card, Button, Pagination } from "@/components/ui";
import {
  FadeIn,
  StaggerContainer,
  LiquidBackground,
} from "@/components/motion";
import { cn, ITEMS_PER_PAGE } from "@/lib/utils";
import type { ProjectsPageProps } from "@/types";
import { ProjectCard } from "./ProjectsGrid";

export default function ProjectsPage({
  projects,
  categories,
}: ProjectsPageProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter,
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of grid section
    // window.scrollTo({ top: 400, behavior: "smooth" });
  };

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
          <StaggerContainer
            key={`${activeFilter}-${currentPage}`}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {paginatedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={project.order || 0}
                />
              ))}
            </AnimatePresence>
          </StaggerContainer>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            className="mt-12"
          />
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
