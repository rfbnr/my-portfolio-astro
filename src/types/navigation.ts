// /**
//  * Navigation and link-related type definitions
//  */

import type { SiteConfig } from ".";

export interface FooterProps {
  socialLinks: SocialLink[];
  footerLinks: FooterLinkGroup[];
  siteConfig: SiteConfig;
}

export interface ContactPageProps {
  socialLinks: SocialLink[];
  contactInfo: ContactInfo[];
}

export interface NavigationProps {
  navLinks: NavLink[];
}

export interface NavLink {
  href: string;
  label: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface SocialLink {
  href: string;
  icon: string;
  label: string;
  username?: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}
