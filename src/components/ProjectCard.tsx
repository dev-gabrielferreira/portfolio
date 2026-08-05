"use client";

import { motion } from "framer-motion";
import { ExternalLink, Clock } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { revealItem } from "@/components/ui/Reveal";
import { GithubIcon } from "@/components/ui/BrandIcons";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <motion.div
      variants={revealItem}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-card transition-colors hover:border-border-hover"
    >
      <button
        onClick={() => onOpen(project)}
        className="relative aspect-[16/10] w-full overflow-hidden border-b border-border text-left"
      >
        <div className="transition-transform duration-500 group-hover:scale-105">
          <ProjectImage project={project} />
        </div>
        <span className="mono-tag absolute left-3 top-3 rounded-full border border-border bg-bg/80 px-2.5 py-1 text-[10px] uppercase tracking-wider text-fg-muted backdrop-blur">
          {project.category}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <button onClick={() => onOpen(project)} className="text-left">
          <h3 className="font-display text-lg font-semibold text-fg transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-fg-muted">{project.tagline}</p>
        </button>

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

        <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-1.5 text-[11px] text-fg-dim">
            <Clock size={12} />
            <span>{project.status}</span>
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border p-2 text-fg-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="Repositório no GitHub"
              >
                <GithubIcon size={15} />
              </a>
            ) : (
              <span
                className="cursor-not-allowed rounded-full border border-border p-2 text-fg-dim/50"
                title="Repositório privado por enquanto"
              >
                <GithubIcon size={15} />
              </span>
            )}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border p-2 text-fg-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="Ver demo ao vivo"
              >
                <ExternalLink size={15} />
              </a>
            ) : (
              <span
                className="cursor-not-allowed rounded-full border border-border p-2 text-fg-dim/50"
                title="Deploy em breve"
              >
                <ExternalLink size={15} />
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
