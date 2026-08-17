import Image from "next/image";
import type { Project } from "@/data/projects";

/**
 * Capa do projeto.
 *
 * Se existir `public/projects/<slug>.(webp|avif|png|jpg)`, ela é usada.
 * Caso contrário, desenhamos uma capa gerada a partir do slug: o mesmo projeto
 * sempre produz o mesmo desenho, e cada categoria tem seu próprio motivo.
 */

type Palette = { line: string; fill: string };

const palettes: Record<Project["category"], Palette> = {
  "IA & Agentes": { line: "var(--accent)", fill: "var(--accent)" },
  "Machine Learning": { line: "var(--accent-2)", fill: "var(--accent-2)" },
  "Dados & Análise": { line: "var(--fg-muted)", fill: "var(--fg)" },
};

/** PRNG determinístico (FNV-1a + xorshift) para o desenho não variar entre servidor e cliente. */
function makeRandom(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}

const round = (n: number) => Math.round(n * 100) / 100;

const W = 400;
const H = 250;

function AgentGraph({ seed, palette }: { seed: string; palette: Palette }) {
  const rand = makeRandom(seed);
  const cx = 200;
  const cy = 128;
  const count = 6;

  const nodes = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 + rand() * 0.5;
    const radius = 62 + rand() * 46;
    return {
      x: round(cx + Math.cos(angle) * radius * 1.35),
      y: round(cy + Math.sin(angle) * radius * 0.82),
      r: round(3 + rand() * 4),
    };
  });

  return (
    <g>
      {nodes.map((node, i) => (
        <line
          key={`edge-${i}`}
          x1={cx}
          y1={cy}
          x2={node.x}
          y2={node.y}
          stroke={palette.line}
          strokeWidth={1}
          opacity={0.35}
        />
      ))}
      {nodes.map((node, i) => (
        <line
          key={`ring-${i}`}
          x1={node.x}
          y1={node.y}
          x2={nodes[(i + 1) % count].x}
          y2={nodes[(i + 1) % count].y}
          stroke={palette.line}
          strokeWidth={0.75}
          opacity={0.14}
          strokeDasharray="3 5"
        />
      ))}
      {nodes.map((node, i) => (
        <circle key={`node-${i}`} cx={node.x} cy={node.y} r={node.r} fill={palette.fill} opacity={0.7} />
      ))}
      <circle cx={cx} cy={cy} r={26} fill={palette.fill} opacity={0.1} />
      <circle cx={cx} cy={cy} r={16} fill="none" stroke={palette.line} strokeWidth={1.25} opacity={0.85} />
      <circle cx={cx} cy={cy} r={5} fill={palette.fill} />
    </g>
  );
}

function ForecastCurve({ seed, palette }: { seed: string; palette: Palette }) {
  const rand = makeRandom(seed);
  const steps = 30;
  const phase = rand() * Math.PI * 2;

  const points = Array.from({ length: steps + 1 }, (_, i) => {
    const t = i / steps;
    const wave = Math.sin(phase + t * Math.PI * 3.2) * 34 + Math.sin(phase * 2 + t * Math.PI * 7) * 12;
    return { x: round(t * W), y: round(150 - wave - t * 26) };
  });

  const line = points.map((p) => `${p.x},${p.y}`).join(" ");
  const area = `${line} ${W},${H} 0,${H}`;
  const scatter = points.filter((_, i) => i % 3 === 0);

  return (
    <g>
      <polygon points={area} fill={palette.fill} opacity={0.08} />
      <polyline points={line} fill="none" stroke={palette.line} strokeWidth={1.75} opacity={0.9} />
      {scatter.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={round(p.y + (rand() - 0.5) * 22)}
          r={2.2}
          fill={palette.fill}
          opacity={0.55}
        />
      ))}
      <line x1={0} y1={196} x2={W} y2={196} stroke="var(--border-hover)" strokeWidth={1} opacity={0.6} />
    </g>
  );
}

function DataBars({ seed, palette }: { seed: string; palette: Palette }) {
  const rand = makeRandom(seed);
  const count = 12;
  const gap = 10;
  const barWidth = (W - gap * (count + 1)) / count;

  const bars = Array.from({ length: count }, (_, i) => {
    const height = 28 + rand() * 112;
    return {
      x: round(gap + i * (barWidth + gap)),
      y: round(196 - height),
      height: round(height),
    };
  });

  return (
    <g>
      {bars.map((bar, i) => (
        <rect
          key={i}
          x={bar.x}
          y={bar.y}
          width={round(barWidth)}
          height={bar.height}
          rx={3}
          fill={palette.fill}
          opacity={0.16 + (i % 4) * 0.09}
        />
      ))}
      <polyline
        points={bars.map((b) => `${round(b.x + barWidth / 2)},${b.y}`).join(" ")}
        fill="none"
        stroke={palette.line}
        strokeWidth={1.5}
        opacity={0.75}
      />
      <line x1={0} y1={196} x2={W} y2={196} stroke="var(--border-hover)" strokeWidth={1} opacity={0.6} />
    </g>
  );
}

function GeneratedCover({ project }: { project: Project }) {
  const palette = palettes[project.category];
  const glowId = `cover-glow-${project.slug}`;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="img"
      aria-label={`Capa ilustrativa do projeto ${project.title}`}
    >
      <defs>
        <radialGradient id={glowId} cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor={palette.fill} stopOpacity={0.22} />
          <stop offset="100%" stopColor={palette.fill} stopOpacity={0} />
        </radialGradient>
        <pattern id={`cover-grid-${project.slug}`} width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="var(--fg)" strokeOpacity={0.05} strokeWidth={1} />
        </pattern>
      </defs>

      <rect width={W} height={H} fill="var(--bg-elevated)" />
      <rect width={W} height={H} fill={`url(#cover-grid-${project.slug})`} />
      <rect width={W} height={H} fill={`url(#${glowId})`} />

      {project.category === "IA & Agentes" && <AgentGraph seed={project.slug} palette={palette} />}
      {project.category === "Machine Learning" && (
        <ForecastCurve seed={project.slug} palette={palette} />
      )}
      {project.category === "Dados & Análise" && <DataBars seed={project.slug} palette={palette} />}
    </svg>
  );
}

export function ProjectCover({
  project,
  cover,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: {
  project: Project;
  cover?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (cover) {
    return (
      <Image
        src={cover}
        alt={`Capa do projeto ${project.title}`}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    );
  }

  return <GeneratedCover project={project} />;
}
