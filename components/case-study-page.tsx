import Image from "next/image";
import Link from "next/link";

import type { WorkProject } from "@/lib/work-projects";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs uppercase tracking-[0.25em] text-primary/80">
      {children}
    </span>
  );
}

function SectionBlock({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border/70 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20 lg:px-8">
        <div className="space-y-4">
          <SectionLabel>{label}</SectionLabel>
          <h2
            className="text-3xl font-bold text-foreground lg:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

function OverviewGrid({
  items,
}: {
  items: Array<{ label: string; value: string }>;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur-sm"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {item.label}
          </p>
          <p className="text-lg text-foreground">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <div
          key={item}
          className="flex gap-4 rounded-2xl border border-border/60 bg-background/50 px-5 py-4"
        >
          <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_rgba(200,120,50,0.45)]" />
          <p className="text-base leading-relaxed text-muted-foreground">{item}</p>
        </div>
      ))}
    </div>
  );
}

export function CaseStudyPage({
  project,
  nextProject,
}: {
  project: WorkProject;
  nextProject: WorkProject;
}) {
  const caseStudy = project.caseStudy;

  if (!caseStudy) {
    return (
      <main className="min-h-screen bg-background">
        <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>←</span>
              Back to Work
            </Link>
            <span className="text-sm font-mono text-primary">
              {String(project.id).padStart(2, "0")}
            </span>
          </div>
        </nav>

        <section className="px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="mx-auto max-w-5xl">
            <SectionLabel>{project.category}</SectionLabel>
            <h1
              className="mt-6 text-4xl font-bold text-foreground lg:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground lg:text-2xl">
              {project.description}
            </p>
          </div>
        </section>

        <section className="border-t border-border/70 px-6 py-20 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <SectionLabel>Impact</SectionLabel>
              <p className="mt-4 max-w-2xl text-xl text-foreground">
                {project.impactLine}
              </p>
            </div>
            <Link
              href={`/work/${nextProject.slug}`}
              className="inline-flex items-center gap-3 rounded-full border border-border bg-card/70 px-6 py-4 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
            >
              Next Project
              <span>→</span>
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span>←</span>
            Back to Work
          </Link>
          <span className="text-sm font-mono text-primary">
            {String(project.id).padStart(2, "0")} / 0{nextProject.id}
          </span>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 pb-20 pt-28 lg:px-8 lg:pb-28 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,120,50,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <SectionLabel>{project.category}</SectionLabel>
            <h1
              className="mt-6 text-[clamp(3rem,8vw,6.8rem)] font-bold leading-[0.92] tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {caseStudy.heroTitle ?? project.title}
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/85 lg:text-2xl">
              {caseStudy.heroSubtitle}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              {caseStudy.heroIntro}
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] border border-primary/20 bg-card/70 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <div className="relative aspect-[16/9] bg-black">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className={
                  project.imageMode === "contain"
                    ? "object-contain p-4 lg:p-6"
                    : "object-cover"
                }
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/18 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 grid gap-4 border-t border-white/10 bg-black/35 px-6 py-6 backdrop-blur-md lg:grid-cols-3 lg:px-8">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-primary/80">
                    Client
                  </p>
                  <p className="mt-2 text-sm text-white/88">{caseStudy.client}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-primary/80">
                    Role
                  </p>
                  <p className="mt-2 text-sm text-white/88">{caseStudy.role}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-primary/80">
                    Scope
                  </p>
                  <p className="mt-2 text-sm text-white/88">{caseStudy.scope}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionBlock label="Overview" title="Project Context">
        <OverviewGrid
          items={
            caseStudy.overviewItems ?? [
              { label: "Client", value: caseStudy.client },
              { label: "Industry", value: caseStudy.industry },
              { label: "Role", value: caseStudy.role },
              { label: "Scope", value: caseStudy.scope },
            ]
          }
        />
      </SectionBlock>

      <SectionBlock label="Problem" title="What Needed To Change">
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
          {caseStudy.problem}
        </p>
      </SectionBlock>

      <SectionBlock label="Solution" title="Designed For Clarity">
        <div className="space-y-8">
          {caseStudy.solution.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-3xl text-lg leading-relaxed text-muted-foreground lg:text-xl"
            >
              {paragraph}
            </p>
          ))}
          <BulletList items={caseStudy.solution.bullets} />
        </div>
      </SectionBlock>

      <SectionBlock label="Features" title="Platform Highlights">
        <BulletList items={caseStudy.features} />
      </SectionBlock>

      {caseStudy.techSection ? (
        <SectionBlock label={caseStudy.techSection.label} title={caseStudy.techSection.title}>
          <BulletList items={caseStudy.techSection.items} />
        </SectionBlock>
      ) : caseStudy.techStack ? (
        <SectionBlock label="Tech Stack" title="Built With">
          <BulletList items={caseStudy.techStack} />
        </SectionBlock>
      ) : null}

      <SectionBlock label="Results" title="Business Outcome">
        <BulletList items={caseStudy.results} />
      </SectionBlock>

      {caseStudy.testimonial ? (
        <section className="border-t border-border/70 py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="rounded-[2rem] border border-primary/20 bg-[linear-gradient(135deg,rgba(200,120,50,0.12),rgba(255,255,255,0.03))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.38)] lg:p-12">
              <SectionLabel>Client Feedback</SectionLabel>
              <blockquote
                className="mt-6 max-w-4xl text-2xl leading-relaxed text-foreground lg:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                “{caseStudy.testimonial.quote}”
              </blockquote>
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-border/70 py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel>{caseStudy.closingLabel ?? "Final Note"}</SectionLabel>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground lg:text-2xl">
              {caseStudy.closingNote}
            </p>
          </div>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group inline-flex items-center gap-4 rounded-full border border-border bg-card/70 px-6 py-4 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            Continue to {nextProject.title}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
