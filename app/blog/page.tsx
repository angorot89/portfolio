import { BlogNavbar } from "@/components/blog-navbar";

export const metadata = {
  title: "Blog — Amine Amraoui",
  description:
    "A little about me — creative developer, designer, and builder from Morocco.",
};

export default function BlogPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden dark">

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

      {/* Mobile-first content with desktop pinned composition */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-10 pt-28 lg:absolute lg:inset-0 lg:left-0 lg:right-0 lg:px-16 lg:pb-16 lg:pt-0">
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20 lg:items-end">

          {/* Left — label + title + button */}
          <div className="max-w-xl">
            <span className="mb-4 block text-[10px] uppercase tracking-[0.4em] text-primary">
              Blog
            </span>
            <h1
              className="mb-6 text-[clamp(2.6rem,16vw,6.5rem)] font-bold leading-[0.9] tracking-tight text-white lg:mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A Little
              <br />
              About Me
            </h1>
            <a
              href="/images/amine-amraoui-cv.jpg"
              download
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[11px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary hover:shadow-[0_0_24px_rgba(200,120,50,0.45)] lg:px-6 lg:text-xs"
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
          <div className="pb-1">
            <p className="max-w-2xl text-[0.78rem] leading-[1.9] tracking-wide text-white/60 lg:ml-auto lg:text-[0.82rem]">
              {`I'm Amine Amraoui, a 21-year-old creative developer from Morocco. I'm currently completing my Bachelor's degree in Computer Science at Zhejiang University of Science and Technology (ZUST) in China, where I'll be graduating in July. My background is rooted in full-stack development, but over time I expanded beyond just code. I developed a strong interest in UI/UX design, combining technical skills with visual thinking to create digital experiences that are not only functional, but also feel clean, modern, and intuitive. Throughout my journey, I've worked on a variety of projects — from AI agents and web platforms to full-scale applications — constantly exploring how design, development, and creativity can come together in meaningful ways. I've had the opportunity to collaborate with different companies and organizations, including Alburaq Group, Moonblock, HulkGym, Skyscanner, and my university, gaining real-world experience across different industries and project types. Driven by this passion, I built and now lead a creative agency where we focus on turning ideas into real digital products. Together with my team, we handle everything from development and branding to design, campaigns, and content creation — helping bring concepts to life in a complete and thoughtful way. For me, it's not just about building things — it's about building things that feel right.`}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
