"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-dark-900/80 backdrop-blur-xl border-b border-dark-700/50 shadow-lg shadow-dark-900/20"
          : "bg-transparent",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <nav className="section-container">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a href="/" className="group">
            <motion.div
              className="text-xl md:text-2xl font-bold"
              whileHover={{ scale: 1.02 }}>
              <span className="text-text-primary">Ridwan</span>
              <span className="text-accent-blue">.dev</span>
            </motion.div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-sm font-medium">
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="outline" size="sm">
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className={cn(
          "md:hidden fixed inset-x-0 top-20 bg-dark-900/95 backdrop-blur-xl border-b border-dark-700/50",
          !isOpen && "pointer-events-none",
        )}
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}>
        <div className="section-container py-6 flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                x: isOpen ? 0 : -20,
              }}
              transition={{ delay: index * 0.1 }}>
              <a
                href={link.href}
                className="block py-3 text-lg text-text-secondary hover:text-text-primary transition-colors"
                onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            </motion.div>
          ))}
          <Button variant="primary" size="md" className="mt-4">
            Let&apos;s Talk
          </Button>
        </div>
      </motion.div>
    </motion.header>
  );
}
