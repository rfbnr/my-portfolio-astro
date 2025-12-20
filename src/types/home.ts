/**
 * Site Types
 * Types for site configuration, navigation, and social links
 */

// ================================
// Site Config Types
// ================================

export interface SiteConfig {
  name?: string;
  fullName?: string;
  title?: string;
  titlePage?: string;
  description?: string;
  email?: string;
  location?: string;
  availability?: string;
}

// ================================
// Hero Types
// ================================

export interface HeroSectionProps {
  techStack: HeroTechStack[];
  heroMetrics: HeroMetric[];
  siteConfig: SiteConfig;
}

export interface HeroTechStack {
  label: string;
  icon: string;
}

export interface HeroMetric {
  icon: string;
  value: string;
  label: string;
}
