"use client";

import { useState } from "react";
import { Mail, MessageCircle, Copy, Check } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const links = [
    {
      label: "LinkedIn",
      value: "dev-gabriel-ferreira",
      href: profile.contact.linkedin,
      icon: LinkedinIcon,
    },
    {
      label: "GitHub",
      value: profile.contact.github || "em breve",
      href: profile.contact.github,
      icon: GithubIcon,
    },
    {
      label: "WhatsApp",
      value: profile.contact.whatsapp ? "Chamar no WhatsApp" : "em breve",
      href: profile.contact.whatsapp,
      icon: MessageCircle,
    },
  ];

  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal className="text-center">
          <p className="mono-tag text-xs uppercase tracking-[0.2em] text-accent">
            Contato
          </p>
          <h2 className="font-display text-balance mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Tem um projeto de dados ou IA em mente? Vamos conversar.
          </h2>

          <button
            onClick={copyEmail}
            className="group mono-tag mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-bg-card px-6 py-3 text-sm text-fg transition-colors hover:border-accent"
          >
            <Mail size={16} className="text-accent" />
            {profile.contact.email}
            {copied ? (
              <Check size={14} className="text-accent-2" />
            ) : (
              <Copy size={14} className="text-fg-dim transition-colors group-hover:text-fg" />
            )}
          </button>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 grid gap-4 sm:grid-cols-3">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = Boolean(link.href);
            const content = (
              <>
                <Icon size={20} className={isActive ? "text-accent" : "text-fg-dim"} />
                <div>
                  <p className="text-sm font-medium text-fg">{link.label}</p>
                  <p className="mt-0.5 text-xs text-fg-muted">{link.value}</p>
                </div>
              </>
            );

            return isActive ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-border bg-bg-card p-5 transition-colors hover:border-border-hover"
              >
                {content}
              </a>
            ) : (
              <div
                key={link.label}
                className="flex cursor-not-allowed items-center gap-3 rounded-2xl border border-border bg-bg-card p-5 opacity-60"
              >
                {content}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
