'use client';

import { useEffect, useRef } from 'react';
import { IconBadge } from '@/components/shared/Icons';

const DAYS = 10;

const PHASES = [
  { name: 'Intake call',          duration: '1 day',  icon: 'headset',  start: 0, end: 1,  ongoing: false },
  { name: 'Curation + shortlist', duration: '2 days', icon: 'doc',      start: 1, end: 3,  ongoing: false },
  { name: 'Approval + contract',  duration: '2 days', icon: 'invoice',  start: 3, end: 5,  ongoing: false },
  { name: 'Pre-arrival prep',     duration: '3 days', icon: 'gear',     start: 4, end: 8,  ongoing: false },
  { name: 'Key handover',         duration: '1 day',  icon: 'key',      start: 7, end: 8,  ongoing: false },
  { name: 'In stay (ongoing)',    duration: '2 days', icon: 'home',     start: 8, end: 10, ongoing: true  },
];

export default function Timeline({ light = false }: { light?: boolean }) {
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

  const line  = light ? 'rgba(241,235,222,0.14)' : 'rgba(11,31,51,0.10)';
  const muted = light ? 'rgba(241,235,222,0.45)' : 'var(--muted)';
  const fg    = light ? 'var(--ivory)'            : 'var(--ink)';

  return (
    <div ref={ref} className="timeline-anim" style={{ width: '100%', overflowX: 'auto' }}>
      <div style={{ minWidth: 640 }}>

        {/* Header row */}
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 0, marginBottom: 4 }}>
          <span style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: muted, paddingBottom: 12 }}>
            Phase
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${DAYS}, 1fr)` }}>
            {Array.from({ length: DAYS }).map((_, i) => (
              <span key={i} style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.12em', color: muted, borderLeft: `1px solid ${line}`, paddingLeft: 8, paddingBottom: 12 }}>
                D{String(i + 1).padStart(2, '0')}
              </span>
            ))}
          </div>
        </div>

        {/* Phase rows */}
        {PHASES.map((phase) => (
          <div key={phase.name} className="tl-row" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 0, alignItems: 'center', borderTop: `1px solid ${line}`, padding: '16px 0' }}>

            {/* Label column */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingRight: 16 }}>
              <IconBadge name={phase.icon} tone={light ? 'ivory' : 'line'} size={36} />
              <div>
                <span style={{ fontFamily: 'var(--f-display)', fontSize: 18, color: fg, lineHeight: 1.2 }}>
                  {phase.name}
                </span>
                <span style={{ display: 'block', fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: muted, marginTop: 3 }}>
                  {phase.duration}
                </span>
              </div>
            </div>

            {/* Bar track */}
            <div style={{ position: 'relative', height: 32 }}>
              {/* Vertical grid lines */}
              <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: `repeat(${DAYS}, 1fr)`, pointerEvents: 'none' }}>
                {Array.from({ length: DAYS }).map((_, j) => (
                  <span key={j} style={{ borderLeft: `1px solid ${line}` }} />
                ))}
              </div>

              {/* Gantt bar */}
              <div
                className="tl-bar"
                style={{
                  position: 'absolute',
                  left: `${(phase.start / DAYS) * 100}%`,
                  width: `${((phase.end - phase.start) / DAYS) * 100}%`,
                  top: 4, bottom: 4,
                  background: phase.ongoing ? 'transparent' : 'var(--brass)',
                  border: phase.ongoing ? '1px dashed var(--brass)' : 'none',
                  display: 'flex', alignItems: 'center', paddingLeft: 10,
                }}
              >
                {phase.ongoing && (
                  <span style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--brass)' }}>
                    → ongoing
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}

        <div style={{ borderTop: `1px solid ${line}` }} />
      </div>
    </div>
  );
}
