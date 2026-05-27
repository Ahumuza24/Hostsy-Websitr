'use client';

import { useEffect, useRef } from 'react';

const MONTHS = [1, 2, 3, 4, 6, 9, 12];
const HOTEL_RATE = 88500;
const HOSTSY_RATE = 52500;
const MAX = HOTEL_RATE * 12; // 1,062,000

const PAD_LEFT = 72;
const PAD_RIGHT = 24;
const PAD_TOP = 24;
const PAD_BOTTOM = 48;
const W = 960;
const H = 380;
const CHART_W = W - PAD_LEFT - PAD_RIGHT;
const CHART_H = H - PAD_TOP - PAD_BOTTOM;

const COL_W = CHART_W / MONTHS.length;
const BAR_GAP = 5;
const BAR_W = (COL_W - 24 - BAR_GAP) / 2;

function xFor(i: number) {
  return PAD_LEFT + i * COL_W + 12;
}
function yFor(value: number) {
  return PAD_TOP + CHART_H - (value / MAX) * CHART_H;
}

const Y_TICKS = [0, 0.25, 0.5, 0.75, 1];

export default function CostChart() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('is-in'); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const savingsPoints = MONTHS.map((m, i) => {
    const cx = xFor(i) + BAR_W + BAR_GAP / 2 + BAR_W / 2;
    const saving = (HOTEL_RATE - HOSTSY_RATE) * m;
    return { x: cx, y: yFor(saving), saving, m };
  });

  return (
    <div ref={ref} className="chart-anim" style={{ width: '100%' }}>
      {/* Legend */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 28, marginBottom: 20, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 14, height: 14, border: '1.5px solid var(--ink)', display: 'inline-block', flexShrink: 0 }} />
          <span className="label">4-star hotel</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 14, height: 14, background: 'var(--brass)', display: 'inline-block', flexShrink: 0 }} />
          <span className="label">Hostsy apartment</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }}>
          <span style={{ width: 20, height: 1.5, background: 'var(--brass)', display: 'inline-block' }} />
          <span className="label label--brass">Cumulative saving</span>
        </div>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}
        aria-label="Bar chart showing cumulative cost of 4-star hotel vs Hostsy apartment over 12 months"
      >
        {/* Horizontal grid lines */}
        {Y_TICKS.map((p) => {
          const y = PAD_TOP + CHART_H - p * CHART_H;
          const value = Math.round((MAX * p) / 1000);
          return (
            <g key={p}>
              <line
                x1={PAD_LEFT} x2={W - PAD_RIGHT}
                y1={y} y2={y}
                stroke="rgba(11,31,51,0.12)"
                strokeWidth="1"
                strokeDasharray={p === 0 ? undefined : '2 5'}
              />
              <text
                x={PAD_LEFT - 8} y={y + 4}
                textAnchor="end"
                fontFamily="JetBrains Mono, monospace"
                fontSize="10"
                fill="rgba(11,31,51,0.5)"
              >
                R {value}k
              </text>
            </g>
          );
        })}

        {/* Bars */}
        {MONTHS.map((m, i) => {
          const x = xFor(i);
          const hotelH = (HOTEL_RATE * m / MAX) * CHART_H;
          const hostsyH = (HOSTSY_RATE * m / MAX) * CHART_H;
          const baseline = PAD_TOP + CHART_H;
          return (
            <g key={m}>
              {/* Hotel bar — hollow */}
              <rect
                className={`bar bar-${i + 1}`}
                x={x}
                y={baseline - hotelH}
                width={BAR_W}
                height={hotelH}
                fill="none"
                stroke="var(--ink)"
                strokeWidth="1.5"
              />
              {/* Hostsy bar — filled brass */}
              <rect
                className={`bar bar-${i + 1}`}
                x={x + BAR_W + BAR_GAP}
                y={baseline - hostsyH}
                width={BAR_W}
                height={hostsyH}
                fill="var(--brass)"
              />
              {/* X-axis label */}
              <text
                x={x + BAR_W + BAR_GAP / 2}
                y={baseline + 18}
                textAnchor="middle"
                fontFamily="JetBrains Mono, monospace"
                fontSize="10"
                fill="rgba(11,31,51,0.5)"
              >
                {String(m).padStart(2, '0')} mo
              </text>
            </g>
          );
        })}

        {/* Savings polyline */}
        <polyline
          className="savings"
          points={savingsPoints.map(p => `${p.x},${p.y}`).join(' ')}
          fill="none"
          stroke="var(--brass)"
          strokeWidth="1.8"
          strokeDasharray="3 4"
          strokeLinecap="round"
        />

        {/* Savings dots */}
        {savingsPoints.map(({ x, y, m }) => (
          <circle className="savings-dot" key={m} cx={x} cy={y} r="3.5" fill="var(--brass)" />
        ))}

        {/* Callout annotations at month 2 and month 12 */}
        {savingsPoints
          .filter(p => p.m === 2 || p.m === 12)
          .map(({ x, y, saving }) => (
            <g key={saving}>
              <line x1={x} x2={x} y1={y - 7} y2={y - 20} stroke="var(--brass)" strokeWidth="1" />
              <text
                x={x} y={y - 26}
                textAnchor="middle"
                fontFamily="Newsreader, Georgia, serif"
                fontSize="15"
                fontWeight="400"
                fill="var(--ink)"
              >
                R {Math.round(saving / 1000)}k
              </text>
            </g>
          ))}
      </svg>
    </div>
  );
}
