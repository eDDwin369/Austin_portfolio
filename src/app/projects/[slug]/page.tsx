import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { CaseStudySection } from "@/components/projects/CaseStudySection";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — ${project.category} | Austin Paul`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.description,
      images: [project.heroImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <ProjectHero project={project} />
      <CaseStudySection project={project} />
    </main>
  );
}
