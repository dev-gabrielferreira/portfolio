import { Download, Briefcase, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";

export function Resume({ resume }: { resume: string | null }) {
  return (
    <section id="curriculo" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
          <Reveal>
            <p className="mono-tag text-xs uppercase tracking-[0.2em] text-accent">
              Currículo
            </p>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              Meu currículo.
            </h2>
            <p className="text-balance mt-5 max-w-lg leading-relaxed text-fg-muted">
              Engenharia na UFOP, e desde então bastante Python. Se quiser a versão longa, o PDF
              tem o histórico completo. Se quiser a versão curta, é a lista de projetos aqui em
              cima.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {resume ? (
                <a
                  href={resume}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
                >
                  <Download size={16} />
                  Baixar currículo (PDF)
                </a>
              ) : (
                <span
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-fg-dim"
                  title="PDF ainda não adicionado"
                >
                  <Download size={16} />
                  Currículo em breve
                </span>
              )}
              <a
                href="#contato"
                className="text-sm font-medium text-fg-muted underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                ou fale comigo diretamente
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-bg-card p-6">
              <Briefcase size={20} className="text-accent" />
              <p className="font-display mt-4 text-3xl font-semibold text-fg">
                {projects.length}
              </p>
              <p className="mt-1 text-sm text-fg-muted">
                projetos construídos do zero, cada um com seu próprio deploy
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-bg-card p-6">
              <Sparkles size={20} className="text-accent-2" />
              <p className="font-display mt-4 text-3xl font-semibold text-fg">3</p>
              <p className="mt-1 text-sm text-fg-muted">
                frentes: agentes, machine learning e análise de dados
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
