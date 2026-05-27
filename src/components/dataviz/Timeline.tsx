'use client';

import { IconBadge } from '@/components/shared/Icons';

const STEPS = [
  { name: 'Intake call', start: 0, end: 1, icon: 'headset' },
  { name: 'Curation + shortlist', start: 1, end: 3, icon: 'doc' },
  { name: 'Approval + contract', start: 3, end: 5, icon: 'invoice' },
  { name: 'Pre-arrival prep', start: 4, end: 7, icon: 'gear' },
  { name: 'Key handover', start: 7, end: 8, icon: 'key' },
  { name: 'In stay (ongoing)', start: 8, end: 10, icon: 'home' },
];
const DAYS = 10;

export default function Timeline({ light = false }: { light?: boolean }) {
  const muted = light ? 'rgba(241,235,222,0.45)' : 'var(--muted)';
  const fg = light ? 'var(--ivory)' : 'var(--ink)';
  const grid = light ? 'rgba(241,235,222,0.12)' : 'rgba(11,31,51,0.08)';

  return (
    <div className="timeline-anim" style={{ width: '100%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 24, marginBottom: 18 }}>
        <span className="label label--muted" style={{ color: muted }}>Phase</span>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${DAYS}, 1fr)`, fontFamily: 'var(--f-mono)', fontSize: 10, color: muted, letterSpacing: '0.12em' }}>
          {Array.from({ length: DAYS }).map((_, i) => (
            <span key={i} style={{ borderLeft: '1px solid ' + grid, paddingLeft: 6, paddingBottom: 8 }}>
              D{String(i + 1).padStart(2, '0')}
            </span>
          ))}
        </div>
      </div>

      {STEPS.map((s, i) => (
        <div key={s.name} className="tl-row" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 24, alignItems: 'center', padding: '14px 0', borderTop: '1px solid ' + grid }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <IconBadge name={s.icon} tone={light ? 'ivory' : 'line'} size={36} />
            <div>
              <span style={{ fontFamily: 'var(--f-display)', fontSize: 18, color: fg }}>{s.name}</span>
              <span style={{ display: 'block', fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: muted }}>
                {s.end - s.start} {s.end - s.start === 1 ? 'day' : 'days'}
              </span>
            </div>
          </div>
          <div style={{ position: 'relative', height: 26 }}>
            <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: `repeat(${DAYS}, 1fr)` }}>
              {Array.from({ length: DAYS }).map((_, j) => (
                <span key={j} style={{ borderLeft: '1px solid ' + grid }}></span>
              ))}
            </div>
            <div className="tl-bar" style={{
              position: 'absolute',
              left: `${(s.start / DAYS) * 100}%`,
              width: `${((s.end - s.start) / DAYS) * 100}%`,
              top: 4, bottom: 4,
              background: i === STEPS.length - 1 ? 'transparent' : 'var(--brass)',
              border: i === STEPS.length - 1 ? '1px dashed var(--brass)' : 'none',
              display: 'flex', alignItems: 'center', padding: '0 10px',
              color: 'var(--ivory)', fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.1em',
            }}>
              {i === STEPS.length - 1 ? <span style={{ color: 'var(--brass)' }}>→ ongoing</span> : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
