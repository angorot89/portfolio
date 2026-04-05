import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2024 Amine Amraoui.</span>
            <span className="hidden md:inline">All rights reserved.</span>
          </div>

          <Link
            href="#home"
            className="text-xl font-medium text-foreground tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            folio.
          </Link>

          <div className="text-sm text-muted-foreground">
            Made with passion in Morocco
          </div>
        </div>
      </div>
    </footer>
  );
}
