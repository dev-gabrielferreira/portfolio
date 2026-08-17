import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-center text-xs text-fg-dim sm:flex-row sm:text-left md:px-10">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="mono-tag">Feito por mim, com Next.js, Tailwind CSS e Framer Motion.</p>
      </div>
    </footer>
  );
}
