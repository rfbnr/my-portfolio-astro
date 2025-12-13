"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Divider } from "@/components/ui";
import { socialLinks, footerLinks, siteConfig } from "@/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-32">
      <Divider className="mb-16" />

      <div className="section-container pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="text-text-primary">Ridwan</span>
                <span className="text-accent-blue">.dev</span>
              </span>
            </a>
            <p className="text-text-secondary max-w-sm mb-6">
              {siteConfig.description}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass glass-hover flex items-center justify-center text-text-secondary hover:text-accent-blue transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={social.label}>
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-text-primary font-semibold mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-secondary hover:text-text-primary transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <Divider className="mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <p>
            © {currentYear} {siteConfig.fullName}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Crafted with <Heart size={14} className="text-accent-rose" /> using
            Astro & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
