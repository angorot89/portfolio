import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study-page";
import { getWorkProject, workProjects } from "@/lib/work-projects";

export function generateStaticParams() {
  return workProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getWorkProject(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = workProjects.findIndex((p) => p.slug === slug);
  const nextProject = workProjects[(currentIndex + 1) % workProjects.length];

  return <CaseStudyPage project={project} nextProject={nextProject} />;
}
