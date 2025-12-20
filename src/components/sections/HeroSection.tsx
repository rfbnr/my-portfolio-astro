"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Code2,
  Sparkles,
  Briefcase,
  Layers,
  Award,
  Users,
  Rocket,
  Lightbulb,
} from "lucide-react";
import { Button, Badge, Card, GradientText } from "@/components/ui";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  LiquidBackground,
  ScrollIndicator,
  Floating,
  Magnetic,
} from "@/components/motion";
import type { LucideIcon } from "lucide-react";
import type { HeroSectionProps } from "@/types";

// Icon mapping for dynamic icon loading (client-side)
const iconMap: Record<string, LucideIcon> = {
  Code2,
  Sparkles,
  Briefcase,
  Layers,
  Award,
  Users,
  Rocket,
  Lightbulb,
};

export function HeroSection({
  techStack,
  heroMetrics,
  siteConfig,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <LiquidBackground />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <StaggerContainer className="space-y-6">
              {/* Badge */}
              <StaggerItem>
                <Badge variant="tech" className="mb-4">
                  <span className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse" />
                  {siteConfig.availability ?? "Available for new projects"}
                </Badge>
              </StaggerItem>

              {/* Headline */}
              <StaggerItem>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  Crafting <GradientText>high-performance</GradientText> digital
                  experiences
                </h1>
              </StaggerItem>

              {/* Subtitle */}
              <StaggerItem>
                <p className="text-lg md:text-xl text-text-secondary max-w-lg">
                  {siteConfig.description ??
                    "Mobile-first engineer focused on functional, elegant, and production-ready solutions. Specializing in Flutter & cross-platform development."}
                </p>
              </StaggerItem>

              {/* CTAs */}
              <StaggerItem>
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a href="/projects">
                    <Button variant="primary" size="lg" glow>
                      View My Work
                      <ArrowRight size={20} />
                    </Button>
                  </a>
                  <Button variant="secondary" size="lg">
                    <Download size={20} />
                    Download CV
                  </Button>
                </div>
              </StaggerItem>

              {/* Tech Stack */}
              <StaggerItem>
                <div className="pt-8">
                  <p className="text-sm text-text-muted mb-4">Tech Stack</p>
                  <div className="flex flex-wrap gap-3">
                    {techStack.map((tech) => (
                      <motion.div
                        key={tech.label}
                        className="px-4 py-2 rounded-lg glass glass-hover text-sm text-text-secondary flex items-center gap-2"
                        whileHover={{ scale: 1.05, y: -2 }}>
                        <span>{tech.icon}</span>
                        <span>{tech.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Right Content - Avatar */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <FadeIn delay={0.3}>
              <Magnetic strength={0.2}>
                <Floating delay={0.5}>
                  <div className="relative">
                    {/* Glow effect behind avatar */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/30 via-accent-purple/20 to-accent-cyan/30 rounded-full blur-3xl scale-110" />

                    {/* Avatar container with illustration */}
                    <motion.div
                      className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-accent-blue/20"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}>
                      {/* Background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-dark-700 via-dark-800 to-dark-900" />

                      {/* Avatar illustration */}
                      <img
                        src="/images/avatar-hoodie.png"
                        alt="Developer Avatar"
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      {/* Decorative ring */}
                      <div className="absolute inset-2 rounded-full border border-white/10" />
                    </motion.div>

                    {/* Floating decorative elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-accent-blue/20 backdrop-blur-sm flex items-center justify-center"
                      animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}>
                      <Code2 size={24} className="text-accent-blue" />
                    </motion.div>

                    <motion.div
                      className="absolute -bottom-2 -left-6 w-10 h-10 rounded-lg bg-accent-purple/20 backdrop-blur-sm flex items-center justify-center"
                      animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}>
                      <Sparkles size={20} className="text-accent-purple" />
                    </motion.div>
                  </div>
                </Floating>
              </Magnetic>
            </FadeIn>
          </div>
        </div>

        {/* Metrics Section */}
        <FadeIn delay={0.6}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
            {heroMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}>
                <Card className="text-center py-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                    {(() => {
                      const IconComponent = iconMap[metric.icon] || Code2;
                      return (
                        <IconComponent size={24} className="text-accent-blue" />
                      );
                    })()}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-text-primary mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-text-muted">{metric.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <ScrollIndicator />
        </div>
      </div>
    </section>
  );
}
