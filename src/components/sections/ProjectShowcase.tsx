import type { ProjectShowcaseProps } from "@/types";
import { useState } from "react";
import { FadeIn, ImageCarousel, ImageLightbox } from "../motion";

export function ProjectShowcase({ images, title }: ProjectShowcaseProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleLightboxNavigate = (index: number) => {
    setLightboxIndex(index);
  };

  // If no showcase images, show placeholder
  if (!images || images.length === 0) {
    return (
      <section className="py-8">
        <div className="section-container">
          <FadeIn delay={0.2}>
            <div className="relative aspect-video rounded-2xl overflow-hidden glass">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-dark-800 to-accent-purple/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl md:text-8xl font-bold text-white/10">
                  {title.charAt(0)}
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-8">
        <div className="section-container">
          <FadeIn delay={0.2}>
            <ImageCarousel
              images={images}
              alt={title}
              onImageClick={handleImageClick}
            />
          </FadeIn>
        </div>
      </section>

      <ImageLightbox
        images={images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={handleLightboxNavigate}
        alt={title}
      />
    </>
  );
}
