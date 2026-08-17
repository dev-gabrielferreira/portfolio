"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { projectUrl, type Project } from "@/data/projects";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { revealItem } from "@/components/ui/Reveal";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { useProjects } from "@/components/ProjectsProvider";

export function ProjectCard({ project, cover }: { project: Project; cover?: string }) {
  const { openProject } = useProjects();
  const url = projectUrl(project);

  return (
    <motion.article
      variants={revealItem}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-card transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-[0_20px_50px_-28px_rgba(24,32,46,0.35)] focus-within:border-accent"
    >
      <button
        onClick={() => openProject(project)}
        className="absolute inset-0 z-10 cursor-pointer rounded-2xl outline-none"
        aria-label={`Ver detalhes de ${project.title}`}
      />

      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]">
          <ProjectCover project={project} cover={cover} />
        </div>
        <span className="mono-tag absolute left-3 top-3 rounded-full border border-border bg-bg/80 px-2.5 py-1 text-[10px] uppercase tracking-wider text-fg-muted backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-fg transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="mono-tag rounded-full border border-border bg-bg-elevated px-2.5 py-1 text-[10px] text-fg-muted"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="mono-tag rounded-full border border-border bg-bg-elevated px-2.5 py-1 text-[10px] text-fg-dim">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-4">
          <div className="flex items-center gap-1.5 text-[11px] text-fg-dim">
            <Clock size={12} />
            <span>{project.status}</span>
          </div>

          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="relative z-20 inline-flex items-center gap-1.5 text-xs font-medium text-fg-muted transition-colors hover:text-accent"
            >
              <GithubIcon size={13} />
              Abrir projeto
              <ArrowUpRight size={13} />
            </a>
          ) : (
            <span className="text-[11px] text-fg-dim" title="Repositório privado por enquanto">
              link em breve
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
