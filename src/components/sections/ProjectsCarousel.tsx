"use client";

import { ArrowRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { useProjects } from "@/components/ProjectsProvider";

function CarouselCard({
  project,
  cover,
  duplicate,
}: {
  project: Project;
  cover?: string;
  duplicate: boolean;
}) {
  const { openProject } = useProjects();

  return (
    <button
      onClick={() => openProject(project)}
      tabIndex={duplicate ? -1 : undefined}
      aria-hidden={duplicate || undefined}
      className="group relative w-[260px] shrink-0 overflow-hidden rounded-2xl border border-border bg-bg-card text-left transition-colors hover:border-accent/60 sm:w-[320px]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <ProjectCover project={project} cover={cover} sizes="320px" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/10 to-transparent" />
      </div>

      <div className="px-4 pb-4 pt-1">
        <p className="mono-tag text-[10px] uppercase tracking-wider text-accent">
          {project.category}
        </p>
        <p className="font-display mt-1.5 text-sm font-semibold text-fg transition-colors group-hover:text-accent">
          {project.title}
        </p>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-fg-muted">{project.tagline}</p>
      </div>
    </button>
  );
}

export function ProjectsCarousel() {
  const { covers } = useProjects();

  // Lista duplicada para o loop contínuo. A segunda cópia é decorativa.
  const track = [...projects, ...projects];

  return (
    <section className="overflow-hidden border-b border-border py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-4 px-6 md:px-10">
        <div>
          <p className="mono-tag text-xs uppercase tracking-[0.2em] text-accent">Em destaque</p>
          <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
            Uma olhada rápida em tudo.
          </h2>
        </div>
        <a
          href="#projetos"
          className="group inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-accent"
        >
          Ver todos
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>

      <div className="marquee mt-10">
        <div className="marquee-track">
          {track.map((project, i) => (
            <CarouselCard
              key={`${project.slug}-${i}`}
              project={project}
              cover={covers[project.slug]}
              duplicate={i >= projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
