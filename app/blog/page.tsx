import { BlogNavbar } from "@/components/blog-navbar";

export const metadata = {
  title: "Blog — Amine Amraoui",
  description:
    "A little about me — creative developer, designer, and builder from Morocco.",
};

export default function BlogPage() {
  return (
    // One full-screen container — no scroll, no sections
    <div className="relative h-screen w-full overflow-hidden dark">

      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/blog-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

      {/* Navbar */}
      <BlogNavbar />

      {/* Content — pinned to the bottom, two-column magazine layout */}
      <div className="absolute inset-0 flex flex-col justify-end pb-12 lg:pb-16 px-6 lg:px-16 max-w-7xl mx-auto left-0 right-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-end">

          {/* Left — label + title + button */}
          <div>
            <span className="block text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
              Blog
            </span>
            <h1
              className="text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.88] tracking-tight text-white mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A Little
              <br />
              About Me
            </h1>
            <a
              href="/images/amine-amraoui-cv.jpg"
              download
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/15 bg-white/5 text-white text-xs font-medium backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:border-primary hover:shadow-[0_0_24px_rgba(200,120,50,0.45)] hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
          </div>

          {/* Right — story paragraph */}
          <div className="lg:pb-1">
            <p className="text-[0.78rem] lg:text-[0.82rem] text-white/50 leading-[1.95] tracking-wide">
              {`I'm Amine Amraoui, a 21-year-old creative developer from Morocco. I'm currently completing my Bachelor's degree in Computer Science at Zhejiang University of Science and Technology (ZUST) in China, where I'll be graduating in July. My background is rooted in full-stack development, but over time I expanded beyond just code. I developed a strong interest in UI/UX design, combining technical skills with visual thinking to create digital experiences that are not only functional, but also feel clean, modern, and intuitive. Throughout my journey, I've worked on a variety of projects — from AI agents and web platforms to full-scale applications — constantly exploring how design, development, and creativity can come together in meaningful ways. I've had the opportunity to collaborate with different companies and organizations, including Alburaq Group, Moonblock, HulkGym, Skyscanner, and my university, gaining real-world experience across different industries and project types. Driven by this passion, I built and now lead a creative agency where we focus on turning ideas into real digital products. Together with my team, we handle everything from development and branding to design, campaigns, and content creation — helping bring concepts to life in a complete and thoughtful way. For me, it's not just about building things — it's about building things that feel right.`}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
