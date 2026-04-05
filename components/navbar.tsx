"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ContactOptionsDialog } from "@/components/contact-options-dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="#home"
            className="text-xl font-medium text-foreground tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            folio.
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <ContactOptionsDialog
            trigger={
              <button
                type="button"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,120,50,0.4)] hover:scale-105"
              >
                {"Let's Talk"}
                <span className="text-lg">→</span>
              </button>
            }
          />

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden text-foreground p-2" aria-label="Open navigation menu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="border-border/70 bg-background/95 backdrop-blur-xl">
              <SheetHeader className="px-6 pt-12 pb-6">
                <SheetTitle
                  className="text-xl tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  folio.
                </SheetTitle>
                <SheetDescription>
                  Navigate through the portfolio.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col px-6 pb-8">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.label}>
                    <Link
                      href={link.href}
                      className="border-b border-border/60 py-4 text-lg text-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
