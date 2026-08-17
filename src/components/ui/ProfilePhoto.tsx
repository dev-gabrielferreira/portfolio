import Image from "next/image";
import { profile } from "@/data/profile";

/**
 * Foto do Gabriel. O arquivo é opcional: enquanto não existir
 * `public/gabriel-ferreira.(webp|avif|png|jpg)`, cai no monograma.
 *
 * O elemento pai precisa ser `relative` e definir o tamanho/formato.
 */
export function ProfilePhoto({
  src,
  sizes,
  priority = false,
  objectPosition = "center 22%",
}: {
  src: string | null;
  sizes: string;
  priority?: boolean;
  objectPosition?: string;
}) {
  if (!src) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/25 via-bg-elevated to-accent-2/20">
        <span className="font-display text-[28%] font-semibold tracking-tight text-fg/70">
          {profile.initials}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={`Foto de ${profile.name}`}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover"
      style={{ objectPosition }}
    />
  );
}
