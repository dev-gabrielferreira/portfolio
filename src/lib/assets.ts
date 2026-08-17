import fs from "node:fs";
import path from "node:path";

import { projects } from "@/data/projects";

/**
 * Descoberta de arquivos estáticos em build/render no servidor.
 *
 * A ideia é não precisar editar código para publicar uma imagem: basta soltar o
 * arquivo em `public/` com o nome certo que ele passa a ser usado.
 *
 *   public/gabriel-ferreira.jpg   -> foto de perfil
 *   public/projects/<slug>.png    -> capa do projeto (senão, capa gerada)
 *   public/resume/qualquer.pdf    -> currículo para download
 */

const PUBLIC_DIR = path.join(process.cwd(), "public");
const EXTENSIONS = [".webp", ".avif", ".png", ".jpg", ".jpeg"];
const PHOTO_BASENAME = "gabriel-ferreira";

function findPublicFile(dir: string, basename: string): string | null {
  for (const ext of EXTENSIONS) {
    const file = `${basename}${ext}`;
    if (fs.existsSync(path.join(PUBLIC_DIR, dir, file))) {
      return path.posix.join("/", dir, file);
    }
  }
  return null;
}

export function getProfilePhoto(): string | null {
  return findPublicFile("", PHOTO_BASENAME);
}

/** Primeiro PDF encontrado em `public/resume/`, independente do nome. */
export function getResumeFile(): string | null {
  const dir = path.join(PUBLIC_DIR, "resume");
  if (!fs.existsSync(dir)) return null;
  const pdf = fs.readdirSync(dir).find((file) => file.toLowerCase().endsWith(".pdf"));
  return pdf ? path.posix.join("/resume", pdf) : null;
}

export type ProjectCovers = Record<string, string | undefined>;

export function getProjectCovers(): ProjectCovers {
  const covers: ProjectCovers = {};
  for (const project of projects) {
    const found = findPublicFile("projects", project.slug);
    if (found) covers[project.slug] = found;
  }
  return covers;
}
