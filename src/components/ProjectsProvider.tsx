"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { Project } from "@/data/projects";
import type { ProjectCovers } from "@/lib/assets";
import { ProjectModal } from "@/components/ProjectModal";

type ProjectsContextValue = {
  covers: ProjectCovers;
  openProject: (project: Project) => void;
};

const ProjectsContext = createContext<ProjectsContextValue | null>(null);

/**
 * O carrossel (topo da página) e a grade (fim da página) compartilham o mesmo
 * modal, então o estado de seleção vive aqui em volta dos dois.
 */
export function ProjectsProvider({
  covers,
  children,
}: {
  covers: ProjectCovers;
  children: ReactNode;
}) {
  const [selected, setSelected] = useState<Project | null>(null);

  const openProject = useCallback((project: Project) => setSelected(project), []);
  const value = useMemo(() => ({ covers, openProject }), [covers, openProject]);

  return (
    <ProjectsContext.Provider value={value}>
      {children}
      <ProjectModal
        project={selected}
        cover={selected ? covers[selected.slug] : undefined}
        onClose={() => setSelected(null)}
      />
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProjects precisa estar dentro de <ProjectsProvider>.");
  }
  return context;
}
