"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 lg:py-40 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Image */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group">
              <Image
                src="/images/about-photo.jpg"
                alt="Looking out at tropical paradise"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* Section Label */}
            <span className="text-sm text-primary uppercase tracking-widest font-medium">
              About Me
            </span>

            <h2
              className="text-4xl lg:text-5xl font-bold mt-4 mb-8 text-foreground leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              More Than Just Code
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                {`I'm a Moroccan creative developer currently based in China, building digital experiences that feel alive.`}
              </p>
              <p>
                {`I care about the details — motion, flow, and how things feel — not just functionality.`}
              </p>
              <p>
                {`When I'm not coding, I'm exploring new places, capturing moments, and finding inspiration in real-world environments.`}
              </p>
            </div>

            {/* Personal Stats */}
            <div className="flex flex-wrap gap-6 mt-12 pt-10 border-t border-border">
              <div className="flex items-center gap-3 bg-secondary/50 px-5 py-3 rounded-full">
                <div
                  className="text-xl font-bold text-primary"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  5+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="flex items-center gap-3 bg-secondary/50 px-5 py-3 rounded-full">
                <div
                  className="text-xl font-bold text-primary"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects
                </div>
              </div>
              <div className="flex items-center gap-3 bg-secondary/50 px-5 py-3 rounded-full">
                <span className="text-lg">🇲🇦</span>
                <div className="text-sm text-muted-foreground">
                  Born in Morocco
                </div>
              </div>
              <div className="flex items-center gap-3 bg-secondary/50 px-5 py-3 rounded-full">
                <span className="text-lg">🇨🇳</span>
                <div className="text-sm text-muted-foreground">
                  Based in China
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
