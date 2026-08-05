"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="bg-grid bg-noise relative flex min-h-screen items-center overflow-hidden border-b border-border pt-24"
    >
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, var(--accent), transparent)" }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mono-tag mb-6 text-xs uppercase tracking-[0.2em] text-accent"
        >
          Portfólio · {profile.focus}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <div className="mt-5 h-10 sm:h-12">
          <motion.p
            key={roleIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="font-display text-xl font-medium text-fg-muted sm:text-2xl"
          >
            {profile.roles[roleIndex]}
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-balance mt-6 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projetos"
            className="group inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            Ver projetos
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
          >
            Falar comigo
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-fg-dim"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
