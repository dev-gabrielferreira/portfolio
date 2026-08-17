"use client";

import { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { useProjects } from "@/components/ProjectsProvider";

const categories = ["Todos", "IA & Agentes", "Machine Learning", "Dados & Análise"] as const;

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
};

export function Projects() {
  const { covers } = useProjects();
  const [filter, setFilter] = useState<(typeof categories)[number]>("Todos");
  const [revealed, setRevealed] = useState(false);

  const filtered = useMemo(
    () => (filter === "Todos" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projetos" className="scroll-mt-20 border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="mono-tag text-xs uppercase tracking-[0.2em] text-accent">Projetos</p>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            O que eu venho construindo.
          </h2>
          <p className="text-balance mt-4 max-w-xl leading-relaxed text-fg-muted">
            {projects.length} sistemas de ponta a ponta. Cada um resolve um problema específico, e
            alguns deles conversam entre si.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`mono-tag rounded-full border px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                filter === cat
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-border text-fg-muted hover:border-border-hover hover:text-fg"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="mono-tag ml-auto text-[11px] text-fg-dim">
            {filtered.length} de {projects.length}
          </span>
        </div>

        {/*
          O bug antigo: a grade revelava com `whileInView` + `once`, que dispara
          uma única vez. Os cards que entravam depois (ao voltar para "Todos")
          herdavam o estado "hidden" do container e ficavam invisíveis.

          Agora a `key` remonta a grade a cada filtro e, depois do primeiro
          reveal, a animação passa a ser `animate` puro: não depende mais do
          IntersectionObserver disparar de novo.
        */}
        <motion.div
          key={filter}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          {...(revealed
            ? { animate: "visible" as const }
            : {
                whileInView: "visible" as const,
                viewport: { once: true, margin: "-40px" },
                onViewportEnter: () => setRevealed(true),
              })}
        >
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} cover={covers[project.slug]} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
