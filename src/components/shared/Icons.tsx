import React from 'react';

const ICONS: Record<string, React.ReactNode> = {
  key: <g><circle cx="8" cy="12" r="3.5" /><path d="M11.5 12h9" /><path d="M16 12v3" /><path d="M19 12v2" /></g>,
  door: <g><rect x="5" y="3" width="14" height="18" rx="0.5" /><circle cx="15.5" cy="13" r="0.7" fill="currentColor" /></g>,
  bed: <g><path d="M3 18V8" /><path d="M21 18v-6a3 3 0 0 0-3-3H3" /><circle cx="7.5" cy="12.5" r="2" /><path d="M3 18h18" /></g>,
  shield: <g><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" /><polyline points="8.5,12 11,14.5 16,9.5" /></g>,
  wifi: <g><path d="M3 9a14 14 0 0 1 18 0" /><path d="M6 13a9 9 0 0 1 12 0" /><path d="M9 17a4.5 4.5 0 0 1 6 0" /><circle cx="12" cy="20" r="0.8" fill="currentColor" /></g>,
  bolt: <g><polygon points="13,3 4,14 11,14 10,21 19,10 12,10 13,3" /></g>,
  droplet: <g><path d="M12 3c4 5 6 8.5 6 11.5a6 6 0 1 1-12 0C6 11.5 8 8 12 3Z" /></g>,
  broom: <g><path d="M14 4l6 6" /><path d="M11.5 6.5l6 6" /><path d="M6 16l5-5 4 4-5 5-7 1 3-5Z" /></g>,
  wrench: <g><path d="M15 4a5 5 0 0 0 5 8l-9 9-3-3 9-9a5 5 0 0 0-2-5Z" /></g>,
  headset: <g><path d="M5 13v-1a7 7 0 1 1 14 0v1" /><rect x="3" y="13" width="4" height="6" rx="1" /><rect x="17" y="13" width="4" height="6" rx="1" /><path d="M19 19v1a3 3 0 0 1-3 3h-2" /></g>,
  doc: <g><path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" /><polyline points="14,3 14,8 19,8" /><line x1="9" y1="13" x2="16" y2="13" /><line x1="9" y1="17" x2="13" y2="17" /></g>,
  user: <g><circle cx="12" cy="9" r="3.5" /><path d="M5 20a7 7 0 0 1 14 0" /></g>,
  clock: <g><circle cx="12" cy="12" r="9" /><polyline points="12,7 12,12 16,14" /></g>,
  check: <g><polyline points="4,12 10,18 20,6" /></g>,
  building: <g><rect x="5" y="3" width="14" height="18" /><line x1="9" y1="7" x2="9" y2="8" /><line x1="12" y1="7" x2="12" y2="8" /><line x1="15" y1="7" x2="15" y2="8" /><line x1="9" y1="11" x2="9" y2="12" /><line x1="12" y1="11" x2="12" y2="12" /><line x1="15" y1="11" x2="15" y2="12" /><line x1="9" y1="15" x2="9" y2="16" /><line x1="12" y1="15" x2="12" y2="16" /><line x1="15" y1="15" x2="15" y2="16" /><rect x="10.5" y="18" width="3" height="3" /></g>,
  briefcase: <g><rect x="3" y="7" width="18" height="13" rx="1" /><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" /><line x1="3" y1="13" x2="21" y2="13" /></g>,
  handshake: <g><path d="M3 12l4-4 5 4" /><path d="M21 12l-4-4-5 4" /><path d="M7 12l3 3 2-2 2 2 3-3" /><path d="M10 15l-1 2" /><path d="M14 15l1 2" /></g>,
  chart: <g><line x1="3" y1="21" x2="21" y2="21" /><rect x="5" y="13" width="3" height="8" /><rect x="10.5" y="9" width="3" height="12" /><rect x="16" y="5" width="3" height="16" /></g>,
  gear: <g><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M4.5 19.5l2-2M17.5 6.5l2-2" /></g>,
  target: <g><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></g>,
  compass: <g><circle cx="12" cy="12" r="9" /><polygon points="14,10 12,16 10,14 12,8" fill="currentColor" stroke="none" /></g>,
  coin: <g><circle cx="12" cy="12" r="9" /><path d="M9.5 9h4a2 2 0 0 1 0 4h-3a2 2 0 0 0 0 4h4" /><line x1="12" y1="6" x2="12" y2="18" /></g>,
  invoice: <g><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="9" y1="12" x2="15" y2="12" /></g>,
  map: <g><polygon points="3,6 9,4 15,6 21,4 21,18 15,20 9,18 3,20 3,6" /><line x1="9" y1="4" x2="9" y2="18" /><line x1="15" y1="6" x2="15" y2="20" /></g>,
  pin: <g><path d="M12 21s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></g>,
  home: <g><polyline points="4,11 12,4 20,11 20,21 4,21 4,11" /><polyline points="9,21 9,14 15,14 15,21" /></g>,
  arrow: <g><line x1="4" y1="12" x2="19" y2="12" /><polyline points="13,6 19,12 13,18" /></g>,
  moon: <g><path d="M20 14a8 8 0 1 1-10-10 6 6 0 0 0 10 10Z" /></g>,
  parking: <g><rect x="4" y="4" width="16" height="16" rx="1" /><path d="M10 17v-10h3a3 3 0 0 1 0 6h-3" /></g>,
  gauge: <g><path d="M3 18a9 9 0 1 1 18 0" /><line x1="12" y1="18" x2="16" y2="9" /><circle cx="12" cy="18" r="1" fill="currentColor" /></g>,
  plane: <g><path d="M3 14l5-1 3-7 2 0 0 6 6-2 1 2-6 3 0 6-2 1-1-6-7 3-1-5Z" /></g>,
};

interface IconProps {
  name: string;
  size?: number;
  stroke?: number;
  color?: string;
  style?: React.CSSProperties;
}

export function Icon({ name, size = 22, stroke = 1.4, color = 'currentColor', style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      {ICONS[name] ?? null}
    </svg>
  );
}

type IconTone = 'brass' | 'brassFill' | 'ink' | 'ivory' | 'line';

interface IconBadgeProps {
  name: string;
  size?: number;
  tone?: IconTone;
}

const TONE_COLORS: Record<IconTone, { bg: string; fg: string; border?: string }> = {
  brass:     { bg: 'rgba(176,141,91,0.12)', fg: 'var(--brass-deep)' },
  brassFill: { bg: 'var(--brass)', fg: 'var(--ivory)' },
  ink:       { bg: 'var(--ink)', fg: 'var(--ivory)' },
  ivory:     { bg: 'rgba(241,235,222,0.1)', fg: 'var(--ivory)' },
  line:      { bg: 'transparent', fg: 'var(--ink)', border: '1px solid var(--line)' },
};

export function IconBadge({ name, size = 48, tone = 'brass' }: IconBadgeProps) {
  const c = TONE_COLORS[tone];
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: 999,
        background: c.bg,
        color: c.fg,
        display: 'inline-grid',
        placeItems: 'center',
        border: c.border,
        flexShrink: 0,
      }}
    >
      <Icon name={name} size={Math.round(size * 0.46)} />
    </span>
  );
}
