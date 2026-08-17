"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";

export function Hero({ photo }: { photo: string | null }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="bg-grid bg-noise relative flex min-h-screen items-center overflow-hidden border-b border-border pt-28 pb-20"
    >
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, var(--accent-glow), transparent)" }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="grid items-stretch gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10">
          {/* Painel opaco: sem ele a grade do fundo passa por trás do texto. */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border bg-bg-card p-7 shadow-[0_24px_60px_-40px_rgba(24,32,46,0.3)] sm:p-9"
          >
            <p className="mono-tag text-xs uppercase tracking-[0.2em] text-accent">
              Portfólio · {profile.focus}
            </p>

            <h1 className="font-display mt-6 text-balance tracking-tight text-fg">
              <span className="block text-xl font-medium text-fg-muted sm:text-2xl">
                {profile.greeting}
              </span>
              <span className="mt-1 block text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
                {profile.name}
              </span>
            </h1>

            <div className="mt-4 h-9 sm:h-10">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="font-display text-lg font-medium text-fg-muted sm:text-xl"
                >
                  {profile.roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="text-balance mt-5 max-w-lg leading-relaxed text-fg-muted">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
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
            </div>

            <p className="mono-tag mt-7 inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-fg-dim">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
              </span>
              {profile.availability}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="photo-frame relative aspect-[4/5] w-full overflow-hidden rounded-3xl md:aspect-auto md:h-full md:min-h-[480px]"
          >
            <ProfilePhoto
              src={photo}
              sizes="(max-width: 768px) 90vw, 520px"
              priority
              objectPosition="center 18%"
            />
          </motion.div>
        </div>
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
