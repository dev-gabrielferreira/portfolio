import { GraduationCap } from "lucide-react";
import { profile, skillGroups } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="sobre" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="mono-tag text-xs uppercase tracking-[0.2em] text-accent">
              Sobre
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              De automação industrial para automação de decisões com IA.
            </h2>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-bg-card p-4">
              <GraduationCap size={20} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium text-fg">{profile.education.degree}</p>
                <p className="text-sm text-fg-muted">{profile.education.institution}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-5">
            {profile.bio.map((paragraph, i) => (
              <p key={i} className="text-balance leading-relaxed text-fg-muted">
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>

        <div id="skills" className="mt-20 scroll-mt-24 md:mt-28">
          <Reveal>
            <p className="mono-tag text-xs uppercase tracking-[0.2em] text-accent">
              Stack
            </p>
            <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
              Ferramentas que uso para construir isso tudo.
            </h3>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-bg-card p-5 transition-colors hover:border-border-hover">
                  <p className="font-display text-sm font-semibold text-fg">
                    {group.title}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="mono-tag rounded-full border border-border bg-bg-elevated px-3 py-1 text-[11px] text-fg-muted"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
