'use client';

import { useEffect, useRef } from 'react';

const PTA_NODES = [
  { name: 'Waterkloof', cx: 303, cy: 90,  r: 10, units: 38 },
  { name: 'Arcadia',    cx: 328, cy: 112, r: 7,  units: 24 },
  { name: 'Brooklyn',   cx: 352, cy: 126, r: 11, units: 42 },
  { name: 'Hatfield',   cx: 378, cy: 148, r: 6,  units: 22 },
  { name: 'Lynnwood',   cx: 393, cy: 172, r: 5,  units: 18 },
  { name: 'Menlyn',     cx: 412, cy: 198, r: 8,  units: 31 },
];

const JHB_NODES = [
  { name: 'Sandton',  cx: 205, cy: 284, r: 8,  units: 26 },
  { name: 'Rosebank', cx: 178, cy: 313, r: 6,  units: 19 },
];

const ALL_NODES = [...PTA_NODES, ...JHB_NODES];

export default function GautengMap() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('is-in'); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="map-anim" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 64, alignItems: 'center' }}>

      {/* Left: text */}
      <div>
        <p style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--brass)', margin: '0 0 20px' }}>
          Coverage map
        </p>
        <h2 className="h-2" style={{ margin: '0 0 24px', color: 'var(--ivory)' }}>
          Two cities. Eight <em>addresses</em>.
        </h2>
        <p style={{ color: 'rgba(241,235,222,0.68)', fontSize: 15, lineHeight: 1.65, margin: '0 0 40px' }}>
          Pretoria's embassy belt and Johannesburg's financial core, connected by the N1. Every Hostsy apartment sits within 15 minutes of its city's business centre.
        </p>

        {/* Legend */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--brass)', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.12em', color: 'rgba(241,235,222,0.55)', textTransform: 'uppercase' }}>Neighbourhood</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 20, height: 1, borderTop: '1px dashed var(--brass)', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.12em', color: 'rgba(241,235,222,0.55)', textTransform: 'uppercase' }}>N1 corridor</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 20, height: 10, border: '1px solid rgba(241,235,222,0.25)', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.12em', color: 'rgba(241,235,222,0.55)', textTransform: 'uppercase' }}>City catchment</span>
          </div>
        </div>
      </div>

      {/* Right: SVG map */}
      <div style={{ position: 'relative' }}>
        <svg
          viewBox="0 0 520 400"
          style={{ width: '100%', height: 'auto', display: 'block' }}
          aria-label="Abstract map of Gauteng showing Hostsy neighbourhoods in Pretoria and Johannesburg"
        >
          <defs>
            {/* Hatch pattern for PTA */}
            <pattern id="hatch-pta" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(176,141,91,0.18)" strokeWidth="1" />
            </pattern>
            {/* Hatch pattern for JHB */}
            <pattern id="hatch-jhb" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(-45)">
              <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(176,141,91,0.18)" strokeWidth="1" />
            </pattern>
          </defs>

          {/* Pretoria catchment ellipse */}
          <ellipse
            cx={358} cy={150} rx={118} ry={92}
            fill="url(#hatch-pta)"
            stroke="rgba(241,235,222,0.22)"
            strokeWidth="1"
          />

          {/* Joburg catchment ellipse */}
          <ellipse
            cx={212} cy={308} rx={95} ry={72}
            fill="url(#hatch-jhb)"
            stroke="rgba(241,235,222,0.22)"
            strokeWidth="1"
          />

          {/* City labels */}
          <text x={252} y={88} fontFamily="Newsreader, Georgia, serif" fontSize="12" fill="rgba(241,235,222,0.4)" letterSpacing="0.18em">PRETORIA</text>
          <text x={136} y={249} fontFamily="Newsreader, Georgia, serif" fontSize="12" fill="rgba(241,235,222,0.4)" letterSpacing="0.18em">JOHANNESBURG</text>

          {/* N1 corridor — animated highway path */}
          <path
            className="highway"
            d="M 340 240 C 300 255 265 270 220 285"
            fill="none"
            stroke="var(--brass)"
            strokeWidth="1.5"
            strokeDasharray="4 5"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* N1 label */}
          <text x={278} y={274} fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(176,141,91,0.7)" letterSpacing="0.08em">N1</text>

          {/* Neighbourhood dots */}
          {ALL_NODES.map((n, idx) => (
            <g key={n.name}>
              <circle
                className="nbhd-dot"
                cx={n.cx}
                cy={n.cy}
                r={n.r}
                fill="var(--brass)"
                opacity="0.85"
                style={{ transitionDelay: `${idx * 0.1}s` } as React.CSSProperties}
              />
              <text
                x={n.cx + n.r + 6}
                y={n.cy + 4}
                fontFamily="JetBrains Mono, monospace"
                fontSize="9.5"
                fill="rgba(241,235,222,0.7)"
                letterSpacing="0.06em"
              >
                {n.name}
              </text>
              <text
                x={n.cx + n.r + 6}
                y={n.cy + 16}
                fontFamily="JetBrains Mono, monospace"
                fontSize="8"
                fill="rgba(176,141,91,0.7)"
              >
                {n.units} units
              </text>
            </g>
          ))}

          {/* Crosshair — top right */}
          <line x1="490" y1="18" x2="490" y2="38" stroke="rgba(241,235,222,0.3)" strokeWidth="1" />
          <line x1="480" y1="28" x2="500" y2="28" stroke="rgba(241,235,222,0.3)" strokeWidth="1" />
          <circle cx="490" cy="28" r="2.5" fill="none" stroke="rgba(241,235,222,0.3)" strokeWidth="1" />

          {/* Scale bar */}
          <line x1="36" y1="374" x2="96" y2="374" stroke="rgba(241,235,222,0.3)" strokeWidth="1" />
          <line x1="36" y1="370" x2="36" y2="378" stroke="rgba(241,235,222,0.3)" strokeWidth="1" />
          <line x1="96" y1="370" x2="96" y2="378" stroke="rgba(241,235,222,0.3)" strokeWidth="1" />
          <text x="116" y="378" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="rgba(241,235,222,0.35)">50 km</text>
        </svg>
      </div>
    </div>
  );
}
