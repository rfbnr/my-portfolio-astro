/**
 * Navigation and link-related type definitions
 */

import type { LucideIcon } from "lucide-react";

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  icon: LucideIcon;
  label: string;
  username?: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
}
