import type { Metadata } from 'next';
import { Kicker, CTA, Stat, PageHeroBlock } from '@/components/shared/primitives';
import GautengMap from '@/components/dataviz/GautengMap';

export const metadata: Metadata = {
  title: 'Locations — Pretoria & Johannesburg Corporate Housing | Hostsy',
  description: '220 apartments across 8 neighbourhoods in Gauteng. Waterkloof, Brooklyn, Arcadia, Sandton, Rosebank and more. Premium corporate housing across Pretoria and Johannesburg.',
};

const PTA_SKYLINE = 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=2000&q=80';
const LIVING_IMG = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80';
const BEDROOM_IMG = 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=900&q=80';
const BALCONY_IMG = 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80';
const KITCHEN_IMG = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80';
const DINING_IMG = 'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=900&q=80';
const WORKSPACE_IMG = 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=900&q=80';

const LOCATIONS = [
  { city: 'Pretoria', name: 'Waterkloof', img: LIVING_IMG, units: 38, drive: '12 min CBD', tags: ['Embassy belt', 'Executive families', 'Quiet'], note: "Old money calm. Embassy infrastructure. Hostsy's largest Pretoria concentration." },
  { city: 'Pretoria', name: 'Brooklyn', img: BEDROOM_IMG, units: 42, drive: '8 min CBD', tags: ['Diplomatic', 'Restaurants', 'Walkable'], note: 'Cafes, embassies and the University of Pretoria within walking distance. Our most requested address.' },
  { city: 'Pretoria', name: 'Arcadia', img: BALCONY_IMG, units: 24, drive: '6 min CBD', tags: ['Heritage', 'Embassy row', 'Secure'], note: 'Heritage stock with embassy adjacency. Discreet, professional, well established.' },
  { city: 'Pretoria', name: 'Menlyn', img: KITCHEN_IMG, units: 31, drive: '15 min CBD', tags: ['Family', 'Shopping', 'Schools'], note: 'Family ready three bedrooms near international schools and the Menlyn Maine business hub.' },
  { city: 'Pretoria', name: 'Lynnwood', img: DINING_IMG, units: 18, drive: '14 min CBD', tags: ['Family', 'Schools', 'Mature'], note: 'Suburban calm with proximity to the Lynnwood Bridge corporate node.' },
  { city: 'Pretoria', name: 'Hatfield', img: WORKSPACE_IMG, units: 22, drive: '5 min CBD', tags: ['Gautrain', 'University', 'Compact'], note: 'Compact units near the Gautrain. Used heavily for graduate programmes and shorter rotations.' },
  { city: 'Johannesburg', name: 'Sandton', img: LIVING_IMG, units: 26, drive: '0 min CBD', tags: ['Banking', 'Consulting', 'Executive'], note: "Africa's financial capital. Walking distance to Standard Bank, Discovery, BCG and the JSE." },
  { city: 'Johannesburg', name: 'Rosebank', img: BEDROOM_IMG, units: 19, drive: '8 min Sandton', tags: ['Gautrain', 'Restaurants', 'Co-work'], note: 'Pedestrian friendly. Strong restaurant scene. Direct Gautrain link to Sandton, Pretoria and OR Tambo.' },
];

const PRETORIA = LOCATIONS.filter(l => l.city === 'Pretoria');
const JOBURG = LOCATIONS.filter(l => l.city === 'Johannesburg');

export default function LocationsPage() {
  return (
    <main>
      <PageHeroBlock
        index="06 / 07"
        label="Locations"
        title={<>A curated map of corporate <em>Gauteng</em>.</>}
        sub="Hostsy operates 220 apartments across eight neighbourhoods in Pretoria and Johannesburg. Each address was chosen for proximity to business, embassies, international schools, transit or all four."
      />

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="stats">
            <Stat value="220" suffix="+" label="Apartments under management across Gauteng" />
            <Stat value="8" label="Neighbourhoods directly served by Hostsy" />
            <Stat value="2" label="Cities. Pretoria and Johannesburg, end to end." />
            <Stat value="42" label="Embassies within 4 km of a Hostsy apartment" />
          </div>
        </div>
      </section>

      {/* Gauteng map */}
      <section className="section on-ink">
        <div className="wrap">
          <GautengMap />
        </div>
      </section>

      {/* Pretoria */}
      <section className="section">
        <div className="wrap">
          <div className="editorial">
            <div className="editorial__label">
              <Kicker num="01" name="Pretoria" />
              <div className="brass-rule" style={{ marginTop: 28 }}></div>
              <p className="label label--muted" style={{ marginTop: 24, fontFamily: 'var(--f-sans)', fontSize: 14, lineHeight: 1.6, letterSpacing: '0.02em', textTransform: 'none' }}>
                The administrative capital. Home to over 130 diplomatic missions, the Union Buildings, the Reserve Bank and a large share of Africa&apos;s diplomatic infrastructure.
              </p>
            </div>
            <div>
              <h2 className="h-1" style={{ margin: 0 }}>Six neighbourhoods.<br />One <em>capital</em>.</h2>
            </div>
          </div>
          <div className="dir" style={{ marginTop: 64 }}>
            {PRETORIA.map((l, i) => (
              <div key={l.name} className="dir__row">
                <span className="idx">{String(i + 1).padStart(2, '0')}</span>
                <span className="name">{l.name}</span>
                <span className="meta">{l.units} units</span>
                <span className="meta">{l.drive}</span>
                <span className="meta">{l.tags[0]} · {l.tags[1]}</span>
                <span className="arrow">→</span>
              </div>
            ))}
          </div>
          <div className="grid-3" style={{ marginTop: 56 }}>
            {PRETORIA.map(l => (
              <div key={l.name} className="aptcard">
                <div className="aptcard__img" style={{ backgroundImage: `url(${l.img})` }}>
                  <span className="aptcard__pill">{l.units} units</span>
                </div>
                <div className="aptcard__meta">
                  <span className="aptcard__title">{l.name}</span>
                  <span className="aptcard__loc">{l.city}</span>
                </div>
                <div className="aptcard__row">{l.tags.map(t => <span key={t}>{t}</span>)}</div>
                <p style={{ margin: '14px 16px 16px', color: 'var(--muted)', fontSize: 14, lineHeight: 1.5 }}>{l.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City image break */}
      <section style={{ height: 480, backgroundImage: `url(${PTA_SKYLINE})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,31,51,0.2), rgba(11,31,51,0.65))' }}></div>
        <div className="wrap" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', paddingBottom: 48, color: 'var(--ivory)' }}>
          <div>
            <p className="label" style={{ color: 'rgba(241,235,222,0.7)' }}>City profile · 02 / 02</p>
            <h2 className="h-1" style={{ margin: '16px 0 0', maxWidth: '18ch' }}>Johannesburg.<br />The economic engine.</h2>
          </div>
        </div>
      </section>

      {/* Johannesburg */}
      <section className="section">
        <div className="wrap">
          <div className="editorial">
            <div className="editorial__label">
              <Kicker num="02" name="Johannesburg" />
              <div className="brass-rule" style={{ marginTop: 28 }}></div>
              <p className="label label--muted" style={{ marginTop: 24, fontFamily: 'var(--f-sans)', fontSize: 14, lineHeight: 1.6, letterSpacing: '0.02em', textTransform: 'none' }}>
                Africa&apos;s financial capital. Hostsy&apos;s Johannesburg portfolio anchors in Sandton and Rosebank, the two nodes most in demand for financial services and consulting deployments.
              </p>
            </div>
            <div>
              <h2 className="h-1" style={{ margin: 0 }}>Two cities.<br />One <em>operator</em>.</h2>
            </div>
          </div>
          <div className="dir" style={{ marginTop: 64 }}>
            {JOBURG.map((l, i) => (
              <div key={l.name} className="dir__row">
                <span className="idx">{String(i + 1).padStart(2, '0')}</span>
                <span className="name">{l.name}</span>
                <span className="meta">{l.units} units</span>
                <span className="meta">{l.drive}</span>
                <span className="meta">{l.tags[0]} · {l.tags[1]}</span>
                <span className="arrow">→</span>
              </div>
            ))}
          </div>
          <div className="grid-3" style={{ marginTop: 56 }}>
            {JOBURG.map(l => (
              <div key={l.name} className="aptcard">
                <div className="aptcard__img" style={{ backgroundImage: `url(${l.img})` }}>
                  <span className="aptcard__pill">{l.units} units</span>
                </div>
                <div className="aptcard__meta">
                  <span className="aptcard__title">{l.name}</span>
                  <span className="aptcard__loc">{l.city}</span>
                </div>
                <div className="aptcard__row">{l.tags.map(t => <span key={t}>{t}</span>)}</div>
                <p style={{ margin: '14px 16px 16px', color: 'var(--muted)', fontSize: 14, lineHeight: 1.5 }}>{l.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section on-ink">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Kicker num="·" name="Ready to place your employee?" light />
          <h2 className="h-1" style={{ margin: '24px auto', maxWidth: '22ch' }}>Tell us the neighbourhood. We will tell you what we have <em>available</em>.</h2>
          <p className="lede" style={{ color: 'rgba(241,235,222,0.78)', margin: '0 auto 40px', maxWidth: '50ch' }}>With 220 apartments across eight postcodes, we almost always have something close to where your employee needs to be.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <CTA to="/contact" kind="brass" size="lg">Request availability</CTA>
            <CTA to="/corporate-housing" kind="ghost-ivory" size="lg">Learn about our grades</CTA>
          </div>
        </div>
      </section>
    </main>
  );
}
