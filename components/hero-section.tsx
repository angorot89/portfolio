"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ContactOptionsDialog } from "@/components/contact-options-dialog";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.min(
        Math.max(-rect.top / (rect.height * 0.5), 0),
        1
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Image with Zoom Effect */}
      <div
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{
          transform: `scale(${1 + scrollProgress * 0.15})`,
        }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Street scene in Thailand at dusk"
          fill
          className="object-cover object-center"
          priority
          quality={75}
        />
      </div>

      {/* Gradient Overlay - Dark on left for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      {/* Content */}
      <div
        className="relative z-10 min-h-screen flex flex-col justify-center px-6 lg:px-16 max-w-7xl mx-auto"
        style={{
          opacity: 1 - scrollProgress * 1.5,
          transform: `translateY(${scrollProgress * 50}px)`,
        }}
      >
        {/* Main Headline */}
        <div className="mb-8 lg:mb-12">
          <h1
            className="text-[clamp(3.5rem,12vw,10rem)] font-bold leading-[0.85] tracking-tight text-foreground/90"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="block">AMINE</span>
            <span className="block">AMRAOUI</span>
          </h1>
        </div>

        {/* Two Column Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 max-w-4xl mb-10 lg:mb-14">
          <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
            I build digital experiences inspired by real-world moments — blending design, motion, and code.
          </p>
          <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
            Creative developer focused on clean systems, interaction, and storytelling.
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <ContactOptionsDialog
            trigger={
              <button
                type="button"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,120,50,0.5)] hover:scale-105"
              >
                {"Let's Talk"}
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            }
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 1 - scrollProgress * 3 }}
      >
        <span className="text-xs text-foreground/50 uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-foreground/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
