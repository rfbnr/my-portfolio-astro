"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, MessageSquare } from "lucide-react";
import { Button, Card, SectionHeader, GradientText } from "@/components/ui";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  LiquidBackground,
} from "@/components/motion";
import { socialLinks, contactInfo } from "@/data";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="relative">
      <LiquidBackground />

      {/* Header */}
      <section className="pt-32 pb-12">
        <div className="section-container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                Let&apos;s <GradientText>Work Together</GradientText>
              </h1>

              <p className="text-xl text-text-secondary">
                Have a project in mind? I&apos;m always open to discussing new
                opportunities, creative ideas, or ways to help bring your vision
                to life.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-12">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn>
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                    <MessageSquare size={20} className="text-accent-blue" />
                  </div>
                  <h2 className="text-xl font-semibold text-text-primary">
                    Send a Message
                  </h2>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-accent-emerald/20 flex items-center justify-center mx-auto mb-4">
                      <Send size={32} className="text-accent-emerald" />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-text-secondary">
                      Thanks for reaching out. I&apos;ll get back to you soon.
                    </p>
                    <Button
                      variant="ghost"
                      className="mt-6"
                      onClick={() => setIsSubmitted(false)}>
                      Send another message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm text-text-secondary mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-600 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm text-text-secondary mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-600 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm text-text-secondary mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-600 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm text-text-secondary mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-600 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      glow
                      className="w-full"
                      disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </FadeIn>

            {/* Contact Info & Social */}
            <div className="space-y-6">
              <FadeIn delay={0.2}>
                <Card>
                  <h3 className="text-lg font-semibold text-text-primary mb-6">
                    Contact Info
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((info) => (
                      <div key={info.label} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center">
                          <info.icon size={18} className="text-accent-blue" />
                        </div>
                        <div>
                          <p className="text-sm text-text-muted">
                            {info.label}
                          </p>
                          <p className="text-text-primary">{info.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeIn>

              {/* Social Links */}
              <FadeIn delay={0.3}>
                <Card>
                  <h3 className="text-lg font-semibold text-text-primary mb-6">
                    Connect
                  </h3>
                  <StaggerContainer className="space-y-3">
                    {socialLinks.map((social) => (
                      <StaggerItem key={social.label}>
                        <motion.a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-3 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors group"
                          whileHover={{ x: 4 }}>
                          <div className="w-10 h-10 rounded-lg bg-dark-700 group-hover:bg-dark-600 flex items-center justify-center transition-colors">
                            <social.icon
                              size={18}
                              className="text-text-secondary group-hover:text-accent-blue transition-colors"
                            />
                          </div>
                          <div className="flex-grow">
                            <p className="text-sm text-text-muted">
                              {social.label}
                            </p>
                            <p className="text-text-primary">
                              {social.username}
                            </p>
                          </div>
                        </motion.a>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </Card>
              </FadeIn>

              {/* Calendly CTA */}
              <FadeIn delay={0.4}>
                <Card className="text-center py-8 border-accent-blue/20">
                  <Calendar
                    size={32}
                    className="text-accent-blue mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Prefer a call?
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    Schedule a 30-minute discovery call to discuss your project.
                  </p>
                  <Button variant="outline">Book a Call</Button>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
