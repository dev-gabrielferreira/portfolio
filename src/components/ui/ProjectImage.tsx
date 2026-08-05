import { ImageOff } from "lucide-react";
import type { Project } from "@/data/projects";

const categoryGradient: Record<Project["category"], string> = {
  "IA & Agentes": "from-accent/25 via-accent/5 to-transparent",
  "Machine Learning": "from-accent-2/25 via-accent-2/5 to-transparent",
  "Dados & Análise": "from-fg/20 via-fg/5 to-transparent",
};

export function ProjectImage({ project }: { project: Project }) {
  if (project.image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={project.image} alt={project.title} className="h-full w-full object-cover" />;
  }

  return (
    <div
      className={`bg-grid relative flex h-full w-full items-center justify-center bg-gradient-to-br ${categoryGradient[project.category]}`}
    >
      <div className="flex flex-col items-center gap-2 text-fg-dim">
        <ImageOff size={26} strokeWidth={1.5} />
        <span className="mono-tag text-[11px] uppercase tracking-wider">
          Screenshot em breve
        </span>
      </div>
    </div>
  );
}
