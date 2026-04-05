"use client";

import { useEffect, useRef, useState, forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";
import { workProjects } from "@/lib/work-projects";

// ─── Data ────────────────────────────────────────────────────────────────────
const projects = workProjects;

const reviews = [
  {
    id: 1,
    name: "Sarah Chen",
    company: "Nomad",
    testimonial: "Exceptional work. The attention to detail and creative vision exceeded all expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Webb",
    company: "Synthesis AI",
    testimonial: "A true creative partner. They understood our vision and brought it to life beautifully.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    company: "Meridian",
    testimonial: "The results speak for themselves. Our conversion rates have never been higher.",
    rating: 5,
  },
  {
    id: 4,
    name: "James Park",
    company: "Pulse Health",
    testimonial: "Working with them was seamless. They delivered beyond what we imagined possible.",
    rating: 5,
  },
  {
    id: 5,
    name: "Aisha Patel",
    company: "Vertex Labs",
    testimonial: "Incredible design sense paired with technical excellence. Highly recommended.",
    rating: 5,
  },
];

// ─── Project Panel ────────────────────────────────────────────────────────────
//
// Each panel is absolutely positioned within the sticky viewport.
// The parent's useEffect drives transforms directly on the DOM — no React
// state is touched on scroll, so there are zero re-renders per frame.

interface ProjectPanelProps {
  project: (typeof projects)[0];
  index: number;
}

const ProjectPanel = forwardRef<HTMLDivElement, ProjectPanelProps>(
  function ProjectPanel({ project, index }, ref) {
    const isEven = project.id % 2 === 0;

    return (
      <div
        ref={ref}
        className="absolute inset-0 will-change-transform bg-background flex items-center"
        // Initial Y is set imperatively in WorkSection's useEffect
        style={{ zIndex: index + 1 }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text */}
            <div className={`space-y-4 lg:space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
              <div className="flex items-center gap-4">
                <span
                  className="text-5xl lg:text-6xl font-bold text-primary/20"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {String(project.id).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-border max-w-24" />
              </div>

              <span className="text-xs lg:text-sm text-primary uppercase tracking-[0.2em] block">
                {project.category}
              </span>

              <h3
                className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {project.title}
              </h3>

              <p className="text-base lg:text-lg text-muted-foreground max-w-md leading-relaxed">
                {project.description}
              </p>

              <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs lg:text-sm text-primary font-medium">{project.impactLine}</span>
              </div>

              <div className="pt-2 lg:pt-4">
                <Link
                  href={`/work/${project.slug}`}
                  className="group inline-flex items-center gap-3 rounded-full border border-border/60 bg-card/80 px-6 py-3 text-sm font-medium text-foreground shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground lg:gap-4 lg:px-8 lg:py-4 lg:text-base"
                >
                  <span>Read More</span>
                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1 lg:text-lg">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
              <div className="relative aspect-[4/3] rounded-xl lg:rounded-2xl overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={
                    project.imageMode === "contain"
                      ? "object-contain bg-black p-4 transition-transform duration-700 hover:scale-[1.02] lg:p-6"
                      : "object-cover transition-transform duration-700 hover:scale-105"
                  }
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-3 -right-3 lg:-bottom-4 lg:-right-4 bg-card border border-border px-4 lg:px-6 py-2 lg:py-3 rounded-full">
                <span className="text-xs lg:text-sm text-muted-foreground">{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

// ─── Reviews ──────────────────────────────────────────────────────────────────

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="flex-shrink-0 w-[240px] lg:w-[360px] p-4 lg:p-7 bg-background border border-border rounded-xl lg:rounded-2xl">
      <div className="flex gap-1 mb-2 lg:mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <span key={i} className="text-primary text-xs lg:text-sm">&#9733;</span>
        ))}
      </div>
      <p className="text-foreground text-xs lg:text-sm mb-3 lg:mb-5 leading-relaxed line-clamp-4">
        &ldquo;{review.testimonial}&rdquo;
      </p>
      <div className="flex items-center gap-2 lg:gap-3">
        <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <span className="text-[10px] lg:text-xs text-primary font-medium">
            {review.name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="text-[11px] lg:text-xs font-medium text-foreground">{review.name}</div>
          <div className="text-[10px] lg:text-[11px] text-muted-foreground">{review.company}</div>
        </div>
      </div>
    </div>
  );
}

function ReviewsSection() {
  return (
    <div className="w-full overflow-hidden py-12 lg:py-24 bg-card border-t border-border">
      <div className="mb-8 lg:mb-12 text-center px-6">
        <span className="text-xs lg:text-sm text-primary uppercase tracking-[0.2em] block mb-3 lg:mb-4">
          Client Reviews
        </span>
        <h3
          className="text-2xl lg:text-4xl font-bold text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          What They Say
        </h3>
      </div>

      {/* Desktop: CSS auto-scroll marquee — zero JS, GPU-composited */}
      <div className="relative hidden lg:block">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
        {/* animationDuration overrides the 25s default in globals.css */}
        <div
          className="flex animate-marquee-fast"
          style={{ animationDuration: "20s" }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div key={`${review.id}-${index}`} className="mx-3">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: native horizontal touch scroll */}
      <div className="lg:hidden">
        <div
          className="flex gap-3 overflow-x-auto px-6 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
        >
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        <p className="text-center mt-2 text-[11px] text-muted-foreground">Swipe to see more</p>
      </div>
    </div>
  );
}

// ─── Work Section ─────────────────────────────────────────────────────────────
//
// Scroll mechanics (all imperative, no setState on scroll):
//
//   The section is  N × 100vh  tall.  A sticky child fills the viewport.
//   Panels are stacked absolutely inside it.
//
//   There are N-1 transitions between N projects, so  seg = 1/(N-1).
//   Project 0 is already visible on arrival; its replacement starts
//   immediately as the user begins scrolling — no dead-scroll buffer.
//
//   For project i:
//     fullyIn  = i * seg   (progress where this project sits at y=0)
//     entry    = [fullyIn - seg, fullyIn]   (slides from 100% → 0%)
//     push     = [fullyIn, fullyIn + seg]   (drifts to -8% as next enters)
//
//   The only React state update is activeIndex (for the progress dots),
//   which fires at most N-1 times during the full scroll.

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const panels = panelRefs.current;
    const n = projects.length;

    // Set initial positions without triggering layout
    panels.forEach((panel, i) => {
      if (!panel) return;
      panel.style.transform = i === 0 ? "translateY(0%)" : "translateY(100%)";
    });

    let raf = 0;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
      // N projects → N-1 transitions; each transition owns 1/(N-1) of progress
      const seg = n > 1 ? 1 / (n - 1) : 1;

      panels.forEach((panel, i) => {
        if (!panel) return;

        // progress value where this project is fully in view (y = 0%)
        const fullyIn = i * seg;
        // entry window: [fullyIn - seg, fullyIn]  (irrelevant for i=0)
        const entryStart = Math.max(0, fullyIn - seg);
        // push window: [fullyIn, fullyIn + seg]
        const pushEnd = Math.min(1, fullyIn + seg);

        let y: number;

        if (progress <= entryStart) {
          // Waiting below — project 0 never hits this (entryStart = 0)
          y = i === 0 ? 0 : 100;
        } else if (progress <= fullyIn) {
          // Entering: slide from 100% → 0%
          // For project 0 fullyIn=0, so this branch is never reached either
          const t = (progress - entryStart) / (fullyIn - entryStart);
          y = 100 - 100 * t;
        } else if (progress <= pushEnd) {
          // Being gently displaced upward as the next project enters: 0% → -8%
          const t = (progress - fullyIn) / (pushEnd - fullyIn);
          y = -8 * t;
        } else {
          // Fully covered (or last project, which stays at 0%)
          y = i === n - 1 ? 0 : -8;
        }

        panel.style.transform = `translateY(${y}%)`;
      });

      // Update progress dots (state) only when the active project changes
      const newActive = Math.min(n - 1, Math.floor(progress / seg));
      if (newActive !== activeIndexRef.current) {
        activeIndexRef.current = newActive;
        setActiveIndex(newActive);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update(); // run once on mount

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="work"
        className="relative bg-background"
        style={{ height: `${projects.length * 100}vh` }}
      >
        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Header: label + progress dots */}
          <div className="absolute top-6 lg:top-8 left-0 right-0 z-50 pointer-events-none">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
              <span className="text-xs lg:text-sm text-muted-foreground uppercase tracking-[0.15em] lg:tracking-[0.2em]">
                Selected Work
              </span>
              <div className="flex items-center gap-1.5 lg:gap-2">
                {projects.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 lg:h-2 rounded-full transition-all duration-300 ease-out ${
                      index === activeIndex
                        ? "bg-primary w-6 lg:w-8"
                        : "bg-muted-foreground/30 w-1.5 lg:w-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Panels — transforms driven imperatively, not by React state */}
          {projects.map((project, index) => (
            <ProjectPanel
              key={project.id}
              ref={(el) => {
                panelRefs.current[index] = el;
              }}
              project={project}
              index={index}
            />
          ))}

          {/* Scroll hint — fades out as soon as first project is left */}
          <div
            className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 text-muted-foreground transition-opacity duration-500 pointer-events-none"
            style={{ opacity: activeIndex === 0 ? 1 : 0 }}
          >
            <span className="text-[10px] lg:text-xs uppercase tracking-widest">Scroll to explore</span>
            <div className="w-px h-6 lg:h-8 bg-gradient-to-b from-muted-foreground to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      <div className="bg-background px-6 pb-12 text-center">
        <p className="inline-flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>For more projects check my</span>
          <Link
            href="https://github.com/angorot89"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="inline-flex items-center justify-center rounded-full border border-border p-2 text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </Link>
        </p>
      </div>

      <ReviewsSection />
    </>
  );
}
