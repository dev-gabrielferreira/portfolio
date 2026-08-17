"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "@/data/projects";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { GithubIcon } from "@/components/ui/BrandIcons";

export function ProjectModal({
  project,
  cover,
  onClose,
}: {
  project: Project | null;
  cover?: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-bg-card"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full border border-border bg-bg/70 p-2 text-fg-muted backdrop-blur transition-colors hover:text-fg"
              aria-label="Fechar"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border">
              <ProjectCover project={project} cover={cover} sizes="(max-width: 768px) 100vw, 672px" />
            </div>

            <div className="p-6 sm:p-8">
              <span className="mono-tag rounded-full border border-border bg-bg-elevated px-2.5 py-1 text-[10px] uppercase tracking-wider text-fg-muted">
                {project.category}
              </span>

              <h3 className="font-display mt-4 text-2xl font-semibold text-fg sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-1 text-fg-muted">{project.tagline}</p>

              <p className="mt-6 leading-relaxed text-fg-muted">{project.description}</p>

              <div className="mt-6 rounded-xl border border-border bg-bg-elevated p-4">
                <p className="mono-tag text-[11px] uppercase tracking-wider text-accent">
                  Problema que resolve
                </p>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{project.problem}</p>
              </div>

              <div className="mt-6">
                <p className="mono-tag text-[11px] uppercase tracking-wider text-fg-dim">
                  Destaques técnicos
                </p>
                <ul className="mt-3 space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-fg-muted">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <p className="mono-tag text-[11px] uppercase tracking-wider text-fg-dim">
                  Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="mono-tag rounded-full border border-border bg-bg-elevated px-2.5 py-1 text-[11px] text-fg-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
                  >
                    <GithubIcon size={16} />
                    Ver código
                  </a>
                ) : (
                  <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg-dim">
                    <GithubIcon size={16} />
                    Repositório em breve
                  </span>
                )}

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
                  >
                    <ExternalLink size={16} />
                    Ver demo ao vivo
                  </a>
                ) : (
                  <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg-dim">
                    <ExternalLink size={16} />
                    Deploy em breve
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
