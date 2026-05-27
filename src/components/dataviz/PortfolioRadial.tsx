'use client';

export default function PortfolioRadial({ light = false }: { light?: boolean }) {
  const muted = light ? 'rgba(241,235,222,0.5)' : 'var(--muted)';
  const fg = light ? 'var(--ivory)' : 'var(--ink)';
  const slices = [
    { v: 42 }, { v: 38 }, { v: 31 }, { v: 26 },
    { v: 24 }, { v: 22 }, { v: 19 }, { v: 18 },
  ];
  const total = slices.reduce((a, s) => a + s.v, 0);
  const cx = 200, cy = 200, r = 140, ir = 90;

  let acc = -Math.PI / 2;
  const arcs = slices.map((s, i) => {
    const ang = (s.v / total) * Math.PI * 2;
    const a0 = acc;
    const a1 = acc + ang;
    acc = a1;
    const large = ang > Math.PI ? 1 : 0;
    const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
    const xi1 = cx + ir * Math.cos(a1), yi1 = cy + ir * Math.sin(a1);
    const xi0 = cx + ir * Math.cos(a0), yi0 = cy + ir * Math.sin(a0);
    const opacity = 0.35 + (i % 4) * 0.18;
    return { d: `M ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1} L ${xi1} ${yi1} A ${ir} ${ir} 0 ${large} 0 ${xi0} ${yi0} Z`, opacity };
  });

  return (
    <svg viewBox="0 0 400 400" style={{ width: '100%', maxWidth: 460, display: 'block' }}>
      {arcs.map((a, i) => (
        <path key={i} d={a.d} fill="var(--brass)" opacity={a.opacity} stroke={light ? 'var(--ink)' : 'var(--ivory)'} strokeWidth="1" />
      ))}
      <circle cx={cx} cy={cy} r={ir - 2} fill={light ? 'var(--ink)' : 'var(--ivory)'} />
      <text x={cx} y={cy - 6} textAnchor="middle" fontFamily="Newsreader" fontSize="56" fontWeight="300" fill={fg} letterSpacing="-2">220</text>
      <text x={cx} y={cy + 18} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" letterSpacing="2" fill={muted}>APARTMENTS</text>
      <text x={cx} y={cy + 34} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" letterSpacing="2" fill={muted}>UNDER MGMT</text>
    </svg>
  );
}
