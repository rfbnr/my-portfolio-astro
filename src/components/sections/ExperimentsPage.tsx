"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Beaker } from "lucide-react";
import { Badge, Card, SectionHeader, Button } from "@/components/ui";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  LiquidBackground,
} from "@/components/motion";
import { experiments, experimentTypeColors } from "@/data";

export default function ExperimentsPage() {
  return (
    <div className="relative">
      <LiquidBackground />

      {/* Header */}
      <section className="pt-32 pb-12">
        <div className="section-container">
          <FadeIn>
            <Badge variant="tech" className="mb-4">
              <Beaker size={14} />
              Beyond Work Projects
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              R&D Playground
            </h1>

            <p className="text-xl text-text-secondary max-w-2xl">
              Personal experiments, prototypes, and open-source contributions.
              This is where I explore new ideas and push the boundaries of
              what&apos;s possible.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Experiments Grid */}
      <section className="py-12">
        <div className="section-container">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiments.map((experiment) => (
              <StaggerItem key={experiment.id}>
                <a
                  href={`/experiments/${experiment.slug}`}
                  className="block h-full">
                  <Card className="h-full flex flex-col group">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-dark-700 flex items-center justify-center group-hover:bg-accent-blue/10 transition-colors">
                        <experiment.icon
                          size={24}
                          className="text-accent-blue"
                        />
                      </div>
                      <Badge
                        className={`text-xs capitalize ${
                          experimentTypeColors[experiment.type] ||
                          experimentTypeColors.experiment
                        }`}>
                        {experiment.type}
                      </Badge>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-blue transition-colors">
                      {experiment.title}
                    </h3>

                    <p className="text-sm text-text-secondary mb-4 flex-grow">
                      {experiment.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {experiment.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-md bg-dark-700 text-text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Details */}
                    <div className="flex items-center gap-2 pt-4 border-t border-dark-700 text-sm text-text-secondary group-hover:text-accent-blue transition-colors">
                      <span>View Details</span>
                      <ExternalLink size={14} />
                    </div>
                  </Card>
                </a>
              </StaggerItem>
            ))}
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
                  Have an interesting idea?
                </h2>
                <p className="text-text-secondary mb-8">
                  I&apos;m always excited to collaborate on experimental
                  projects or explore new technologies. Let&apos;s build
                  something innovative together.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="primary" glow>
                    Start a Conversation
                  </Button>
                  <Button variant="secondary">
                    <Github size={18} />
                    View GitHub
                  </Button>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
