'use client';

export default function CostChart({ light = false }: { light?: boolean }) {
  const months = [1, 2, 3, 4, 6, 9, 12];
  const hotelRate = 88500;
  const hostsyRate = 52500;
  const max = hotelRate * 12;
  const cols = months.length;
  const fg = light ? 'rgba(241,235,222,0.8)' : 'var(--ink)';
  const muted = light ? 'rgba(241,235,222,0.5)' : 'var(--muted)';
  const grid = light ? 'rgba(241,235,222,0.12)' : 'rgba(11,31,51,0.10)';

  return (
    <div className="chart-anim" style={{ width: '100%' }}>
      <div style={{ display: 'flex', gap: 28, marginBottom: 24, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 14, height: 14, background: 'transparent', border: '1px solid ' + muted, display: 'inline-block' }}></span>
          <span className="label">4-star hotel</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 14, height: 14, background: 'var(--brass)', display: 'inline-block' }}></span>
          <span className="label">Hostsy apartment</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginLeft: 'auto' }}>
          <span style={{ width: 16, height: 1, background: 'var(--brass)', display: 'inline-block' }}></span>
          <span className="label label--brass">Cumulative saving</span>
        </div>
      </div>

      <svg viewBox="0 0 1000 400" style={{ width: '100%', height: 'auto', display: 'block' }}>
        {[0, 0.25, 0.5, 0.75, 1].map((p) => {
          const y = 340 - p * 280;
          return (
            <g key={p}>
              <line x1="60" x2="960" y1={y} y2={y} stroke={grid} strokeWidth="1" strokeDasharray={p === 0 ? '' : '2 4'} />
              <text x="0" y={y + 4} fontFamily="JetBrains Mono" fontSize="11" fill={muted}>
                R {Math.round((max * p) / 1000)}k
              </text>
            </g>
          );
        })}

        {months.map((m, i) => {
          const x = 80 + i * (900 / cols);
          const groupW = 900 / cols - 24;
          const barW = (groupW - 8) / 2;
          const hotelH = (hotelRate * m / max) * 280;
          const hostsyH = (hostsyRate * m / max) * 280;
          return (
            <g key={m}>
              <rect className={`bar bar-${i + 1}`} x={x} y={340 - hotelH} width={barW} height={hotelH} fill="none" stroke={fg} strokeWidth="1" />
              <rect className={`bar bar-${i + 1}`} x={x + barW + 8} y={340 - hostsyH} width={barW} height={hostsyH} fill="var(--brass)" />
              <text x={x + groupW / 2 - 8} y="362" fontFamily="JetBrains Mono" fontSize="11" fill={muted}>
                {String(m).padStart(2, '0')} mo
              </text>
            </g>
          );
        })}

        <polyline
          className="savings"
          points={months.map((m, i) => {
            const x = 80 + i * (900 / cols) + (900 / cols - 24) / 2;
            const saving = (hotelRate - hostsyRate) * m;
            const y = 340 - (saving / max) * 280;
            return `${x},${y}`;
          }).join(' ')}
          fill="none" stroke="var(--brass)" strokeWidth="1.6" strokeDasharray="2 3"
        />
        {months.map((m, i) => {
          const x = 80 + i * (900 / cols) + (900 / cols - 24) / 2;
          const saving = (hotelRate - hostsyRate) * m;
          const y = 340 - (saving / max) * 280;
          return <circle className="savings-dot" key={m} cx={x} cy={y} r="3" fill="var(--brass)" />;
        })}

        {([2, 12] as const).map((m) => {
          const i = months.indexOf(m);
          if (i === -1) return null;
          const x = 80 + i * (900 / cols) + (900 / cols - 24) / 2;
          const saving = (hotelRate - hostsyRate) * m;
          const y = 340 - (saving / max) * 280;
          return (
            <g key={m}>
              <line x1={x} x2={x} y1={y - 6} y2={y - 18} stroke="var(--brass)" strokeWidth="1" />
              <text x={x} y={y - 24} textAnchor="middle" fontFamily="Newsreader" fontSize="16" fill={fg}>
                R {Math.round(saving / 1000)}k
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
