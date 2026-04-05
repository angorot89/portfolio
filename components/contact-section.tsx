"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/angor__rot89?igsh=MTd0bWhrbDVsb3pqMA%3D%3D&utm_source=qr",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amine-amraoui-a3772132a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/8613625719863",
  },
  {
    label: "GitHub",
    href: "https://github.com/angorot89",
  },
];

export function ContactSection() {
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
      id="contact"
      className="relative py-32 lg:py-40 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Section Label */}
          <span className="text-sm text-primary uppercase tracking-widest block mb-8">
            Get in Touch
          </span>

          {/* Large Headline */}
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {"Let's Create"}
            <br />
            <span className="text-primary">Something Amazing</span>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground max-w-xl mx-auto mb-12 text-lg leading-relaxed">
            {`Have a project in mind? I'd love to hear about it. Drop me a message 
            and let's bring your vision to life.`}
          </p>

          {/* CTA Button */}
          <Link
            href="mailto:amraouiaminei89@gmail.com"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-primary text-primary-foreground font-medium text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(200,120,50,0.5)] hover:scale-105"
          >
            Start a Conversation
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-8 mt-16 pt-16 border-t border-border">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
