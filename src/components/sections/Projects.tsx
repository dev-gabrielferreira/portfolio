"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { Reveal } from "@/components/ui/Reveal";

const categories = ["Todos", "IA & Agentes", "Machine Learning", "Dados & Análise"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Todos");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (filter === "Todos" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projetos" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mono-tag text-xs uppercase tracking-[0.2em] text-accent">
              Projetos
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              8 sistemas de ponta a ponta, não só notebooks.
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`mono-tag rounded-full border px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                filter === cat
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-border text-fg-muted hover:border-border-hover hover:text-fg"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.08 }}
        >
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} onOpen={setSelected} />
          ))}
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
