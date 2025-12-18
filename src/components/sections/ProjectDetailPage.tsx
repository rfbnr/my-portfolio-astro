"use client";

import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  User,
  Layers,
  TrendingUp,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";
import { Button, Badge, Card, SectionHeader, Divider } from "@/components/ui";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  LiquidBackground,
} from "@/components/motion";
import type { ProjectDetailPageProps } from "@/types";
import { ProjectShowcase } from "./ProjectShowcase";

export default function ProjectDetailPage({
  project,
  relatedProjects,
}: ProjectDetailPageProps) {
  // Use project data directly, with sensible defaults only for optional fields
  const projectData = {
    ...project,
    summary: project.summary || project.description,
    role: project.role || "Developer",
    timeline: project.timeline || "2023",
    liveUrl: project.liveUrl || "#",
    repoUrl: project.repoUrl || "#",
    challenges: project.challenges || [],
    impactMetrics: project.impactMetrics || [],
    outcome: project.outcome || "",
    showcase: project.showcase || [],
  };

  return (
    <div className="relative">
      <LiquidBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="section-container">
          <FadeIn>
            {/* Back Link */}
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-8">
              <ArrowLeft size={18} />
              Back to Projects
            </a>

            {/* Category Badge */}
            <div className="flex flex-wrap gap-3 mb-4">
              <Badge variant="category" className="capitalize">
                {projectData.category}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              {projectData.title}
            </h1>

            {/* Summary */}
            <p className="text-xl text-text-secondary max-w-3xl mb-8">
              {projectData.summary}
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" glow>
                <ExternalLink size={18} />
                View Live
              </Button>
              <Button variant="secondary">
                <Github size={18} />
                Source Code
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Hero Media - Project Showcase Carousel */}
      <ProjectShowcase
        images={projectData.showcase || []}
        title={projectData.title}
      />

      {/* Project Overview */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Meta Info */}
            <FadeIn>
              <div className="space-y-6">
                <Card className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User size={20} className="text-accent-blue" />
                    <div>
                      <p className="text-sm text-text-muted">Role</p>
                      <p className="text-text-primary font-medium">
                        {projectData.role}
                      </p>
                    </div>
                  </div>

                  <Divider />

                  <div className="flex items-center gap-3">
                    <Calendar size={20} className="text-accent-blue" />
                    <div>
                      <p className="text-sm text-text-muted">Timeline</p>
                      <p className="text-text-primary font-medium">
                        {projectData.timeline}
                      </p>
                    </div>
                  </div>

                  <Divider />

                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Layers size={20} className="text-accent-blue" />
                      <p className="text-sm text-text-muted">Tech Stack</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {projectData.tech.map((tech) => (
                        <Badge key={tech} variant="tech">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Impact Metrics */}
                <Card className="space-y-4">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp size={20} className="text-accent-emerald" />
                    <p className="font-medium text-text-primary">
                      Impact Metrics
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {projectData.impactMetrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="text-center p-3 rounded-lg bg-dark-800">
                        <p className="text-lg font-bold text-accent-blue">
                          {metric.value}
                        </p>
                        <p className="text-xs text-text-muted">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={0.2} className="lg:col-span-2">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-text-primary mb-6">
                  Project Overview
                </h2>
                <div className="text-text-secondary space-y-4 whitespace-pre-line">
                  {projectData.description.trim()}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Divider />

      {/* Challenges & Solutions */}
      <section className="py-16">
        <div className="section-container">
          <FadeIn>
            <SectionHeader
              title="Challenges & Solutions"
              subtitle="Key engineering problems I solved during this project."
            />
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {projectData.challenges.map((item, index) => (
              <StaggerItem key={index}>
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-accent-rose/10 flex items-center justify-center">
                      <Lightbulb size={20} className="text-accent-rose" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-text-primary">
                        {item.challenge}
                      </h3>
                      <div className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-accent-emerald mt-1 shrink-0"
                        />
                        <p className="text-sm text-text-secondary">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Divider />

      {/* Outcome */}
      <section className="py-16">
        <div className="section-container">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <SectionHeader title="Outcome" subtitle="" align="center" />
              <p className="text-lg text-text-secondary whitespace-pre-line">
                {projectData.outcome.trim()}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Divider />

      {/* Related Projects */}
      <section className="py-16">
        <div className="section-container">
          <FadeIn>
            <SectionHeader
              title="Related Projects"
              subtitle="More work you might find interesting."
            />
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {relatedProjects.map((project) => (
              <StaggerItem key={project.slug}>
                <a href={`/projects/${project.slug}`}>
                  <Card className="group">
                    <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-dark-700 to-dark-800 mb-4 relative">
                      {project.showcase && project.showcase.length > 0 ? (
                        <img
                          src={project.showcase[0]}
                          alt={project.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-4xl font-bold text-white/10">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <Badge variant="category" className="mb-2">
                      {project.category}
                    </Badge>
                    <h3 className="font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
                      {project.title}
                    </h3>
                  </Card>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
