import { GraduationCap, MapPin } from "lucide-react";
import { profile, skillGroups } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";

export function About({ photo }: { photo: string | null }) {
  return (
    <section id="sobre" className="scroll-mt-20 border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-start md:gap-16">
          <Reveal className="relative">
            <div
              className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full opacity-40 blur-[90px]"
              style={{ background: "radial-gradient(closest-side, var(--accent), transparent)" }}
            />

            <div className="photo-frame relative aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-3xl">
              <ProfilePhoto src={photo} sizes="(max-width: 768px) 80vw, 340px" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/55 via-transparent to-transparent" />
            </div>

            <div className="mt-6 max-w-[340px] space-y-3">
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-bg-card p-4">
                <GraduationCap size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-medium text-fg">{profile.education.degree}</p>
                  <p className="text-sm text-fg-muted">{profile.education.institution}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-bg-card p-4">
                <MapPin size={18} className="shrink-0 text-accent-2" />
                <p className="text-sm text-fg-muted">{profile.location}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mono-tag text-xs uppercase tracking-[0.2em] text-accent">Sobre</p>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              Como eu cheguei em dados e IA.
            </h2>

            <div className="mt-8 space-y-5">
              {profile.bio.map((paragraph, i) => (
                <p key={i} className="leading-relaxed text-fg-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <div id="skills" className="mt-20 scroll-mt-24 md:mt-28">
          <Reveal>
            <p className="mono-tag text-xs uppercase tracking-[0.2em] text-accent">Stack</p>
            <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
              O que eu uso no dia a dia.
            </h3>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-bg-card p-5 transition-colors hover:border-border-hover">
                  <p className="font-display text-sm font-semibold text-fg">{group.title}</p>
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
