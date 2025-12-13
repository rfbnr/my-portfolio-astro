/**
 * Site configuration and social links
 */

import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Calendar,
} from "lucide-react";
import type {
  NavLink,
  SocialLink,
  FooterLinkGroup,
  ContactInfo,
} from "@/types";

export const siteConfig = {
  name: "Ridwan.dev",
  fullName: "Ridwan Febnur Asri",
  title: "Mobile & Web Developer",
  description:
    "Mobile-first engineer focused on functional, elegant, and production-ready solutions. Specializing in Flutter & cross-platform development.",
  email: "hello@ridwan.dev",
  location: "Indonesia (Remote-friendly)",
  availability: "Open for new projects",
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/experiments", label: "R&D" },
  { href: "/contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/ridwanfar",
    icon: Github,
    label: "GitHub",
    username: "@ridwanfar",
  },
  {
    href: "https://linkedin.com/in/ridwanfar",
    icon: Linkedin,
    label: "LinkedIn",
    username: "Ridwan Febnur Asri",
  },
  {
    href: "https://twitter.com/ridwanfar",
    icon: Twitter,
    label: "Twitter",
    username: "@ridwanfar",
  },
  {
    href: "mailto:hello@ridwan.dev",
    icon: Mail,
    label: "Email",
    username: "hello@ridwan.dev",
  },
];

export const footerLinks: FooterLinkGroup[] = [
  {
    title: "Navigation",
    links: [
      { href: "/", label: "Home" },
      { href: "/projects", label: "Projects" },
      { href: "/about", label: "About" },
      { href: "/experiments", label: "R&D" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "#", label: "Resume/CV" },
      { href: "#", label: "Blog" },
    ],
  },
];

export const contactInfo: ContactInfo[] = [
  { icon: Mail, label: "Email", value: siteConfig.email },
  { icon: MapPin, label: "Location", value: siteConfig.location },
  { icon: Calendar, label: "Availability", value: siteConfig.availability },
];
