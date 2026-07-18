"use client";

// tiny deterministic hash -> seeded RNG so each slug always renders the same art
function seedFromString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// builds a right-angle "circuit trace" path from a random walk
function tracePath(rng, startX, startY, steps, step) {
  let x = startX;
  let y = startY;
  let d = `M ${x} ${y}`;
  const nodes = [[x, y]];
  for (let i = 0; i < steps; i++) {
    const horizontal = rng() > 0.5;
    const dist = step * (0.6 + rng() * 0.8);
    if (horizontal) x += rng() > 0.5 ? dist : -dist;
    else y += rng() > 0.5 ? dist : -dist;
    d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
    nodes.push([x, y]);
  }
  return { d, nodes };
}

export default function CoverArt({ seed = "post", className = "" }) {
  const rng = mulberry32(seedFromString(seed));

  const hueA = Math.floor(rng() * 360);
  const hueB = (hueA + 30 + Math.floor(rng() * 60)) % 360;
  const gradId = `grad-${seed}`;
  const glowId = `glow-${seed}`;

  const traces = Array.from({ length: 4 }).map((_, i) => {
    const startX = 20 + rng() * 360;
    const startY = 20 + rng() * 210;
    return tracePath(rng, startX, startY, 4 + Math.floor(rng() * 3), 26 + rng() * 20);
  });

  const dots = Array.from({ length: 18 }).map(() => ({
    cx: rng() * 400,
    cy: rng() * 250,
    r: 0.8 + rng() * 1.4,
  }));

  return (
    <svg
      viewBox="0 0 400 250"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={`hsl(${hueA}, 45%, 14%)`} />
          <stop offset="100%" stopColor={`hsl(${hueB}, 50%, 10%)`} />
        </linearGradient>
        <radialGradient id={glowId} cx="30%" cy="20%" r="70%">
          <stop offset="0%" stopColor={`hsl(${hueA}, 80%, 55%)`} stopOpacity="0.35" />
          <stop offset="100%" stopColor={`hsl(${hueA}, 80%, 55%)`} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="250" fill={`url(#${gradId})`} />
      <rect width="400" height="250" fill={`url(#${glowId})`} />

      {/* faint dot grid, computer/schematic feel */}
      {dots.map((dot, i) => (
        <circle key={i} cx={dot.cx} cy={dot.cy} r={dot.r} fill="#fff" opacity="0.15" />
      ))}

      {/* circuit traces */}
      {traces.map((t, i) => (
        <g key={i}>
          <path d={t.d} fill="none" stroke={`hsl(${hueB}, 70%, 70%)`} strokeWidth="1" opacity="0.35" />
          {t.nodes.map(([nx, ny], j) => (
            <circle key={j} cx={nx} cy={ny} r={j === t.nodes.length - 1 ? 3 : 1.6} fill={`hsl(${hueA}, 80%, 75%)`} opacity={j === t.nodes.length - 1 ? 0.8 : 0.5} />
          ))}
        </g>
      ))}
    </svg>
  );
}
