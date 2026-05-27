import type { Metadata } from 'next';
import { Kicker, CTA, Stat, CtaBand, PageHeroBlock } from '@/components/shared/primitives';
import { IconBadge } from '@/components/shared/Icons';

export const metadata: Metadata = {
  title: 'About Hostsy — An Operator, Not a Marketplace',
  description: 'Hostsy was founded in 2019 to bring institutional discipline to corporate housing in South Africa. We operate every apartment under one brand, one specification, one service standard.',
};

const HERO_IMG = 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2000&q=80';
const WORKSPACE_IMG = 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=900&q=80';
const BALCONY_IMG = 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80';
const CITY_NIGHT = 'https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&w=2000&q=80';

const PRINCIPLES = [
  { ic: 'target', num: 'I', title: 'Specification beats taste.', body: 'Apartments are not styled to flatter a photograph. They are configured to perform for a year. The decisions that matter happen in the spec sheet, not the moodboard.' },
  { ic: 'wrench', num: 'II', title: 'Promises that close out tickets.', body: 'A four hour maintenance SLA is not a marketing line. It is a metric we report internally every week and externally every quarter. Promises we cannot keep, we do not make.' },
  { ic: 'user', num: 'III', title: 'One named person, every time.', body: 'Behind every account sits a person who knows your name, your policy, your people. Not a queue. Not a chatbot. The same person, on the same number, for years.' },
  { ic: 'shield', num: 'IV', title: 'Operate at the level of the auditor.', body: 'VAT, POPIA, B-BBEE, PO matching, SLA reporting. The administrative discipline of a Fortune 500 vendor, applied to a 220 unit operation. Boring on purpose.' },
];

const TEAM = [
  { name: 'Thandi M. Sithole', role: 'Chief Executive', bio: 'Former GM at Protea Hotels. Built Hostsy from 12 apartments to 220. Obsessed with operational systems, not property.' },
  { name: 'Pieter van der Berg', role: 'Chief Operating Officer', bio: 'Ex Marriott operations. Responsible for every apartment in the portfolio, every SLA, every maintenance ticket.' },
  { name: 'Anika Roussouw', role: 'Head of Client Partnerships', bio: 'Former global mobility lead at a Big 4 firm. The person who knows exactly what an HR director needs before they ask.' },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeroBlock
        index="06 / 07"
        label="About Hostsy"
        title={<>An operator, <em>not</em> a marketplace.</>}
        sub="Hostsy was founded in 2019 to bring institutional discipline to corporate housing in South Africa. We do not list. We do not broker. We operate every apartment in our portfolio under one brand, one specification, one service standard."
      />

      <section className="section">
        <div className="wrap">
          <div className="editorial">
            <div className="editorial__label">
              <Kicker num="01" name="The thesis" />
              <div className="brass-rule" style={{ marginTop: 28 }}></div>
            </div>
            <div>
              <h2 className="h-1" style={{ margin: 0 }}>
                Talent moves to where work is.<br />
                Companies need housing infrastructure that <em>moves with them</em>.
              </h2>
              <p className="lede" style={{ marginTop: 28 }}>
                South Africa&apos;s corporate centre is concentrated in Gauteng. Mining houses headquartered in Johannesburg, banks anchored to Sandton, diplomatic missions clustered in Pretoria, and a constant flow of executives, engineers and specialists arriving for weeks, months and years. The hotel category answered well for short trips. The private rental market answered well for permanent moves. Almost nothing existed for the long middle. We built Hostsy to be that infrastructure.
              </p>
            </div>
          </div>
          <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, height: 480 }}>
            <div style={{ backgroundImage: `url(${HERO_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div style={{ backgroundImage: `url(${WORKSPACE_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div style={{ backgroundImage: `url(${BALCONY_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          </div>
        </div>
      </section>

      <section className="section on-ink">
        <div className="wrap">
          <Kicker num="02" name="Hostsy by the numbers" light />
          <div className="stats" style={{ marginTop: 40 }}>
            <Stat value="2019" label="Year founded in Pretoria, by ex hospitality operators" />
            <Stat value="220" suffix="+" label="Apartments under direct Hostsy management today" />
            <Stat value="34" label="Operational staff across Pretoria and Johannesburg" />
            <Stat value="46" label="Corporate, diplomatic and project clients on contract" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="editorial">
            <div className="editorial__label">
              <Kicker num="03" name="Operating principles" />
              <div className="brass-rule" style={{ marginTop: 28 }}></div>
            </div>
            <div>
              <h2 className="h-1" style={{ margin: 0 }}>Four principles, on every wall.</h2>
              <p className="lede" style={{ marginTop: 28 }}>We are an operator. Operators live or die by the daily quality of execution. These are the four standards we hold our own team to, every day.</p>
            </div>
          </div>
          <div className="grid-2" style={{ marginTop: 80, gap: 56 }}>
            {PRINCIPLES.map(p => (
              <div key={p.num}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                  <IconBadge name={p.ic} tone="brass" size={56} />
                  <span className="numeral" style={{ fontSize: 64, color: 'var(--brass)', display: 'block', lineHeight: 1 }}>{p.num}</span>
                </div>
                <h3 className="h-2" style={{ margin: '24px 0 18px', fontSize: 'clamp(28px, 3vw, 40px)' }}>{p.title}</h3>
                <p style={{ color: 'var(--muted)', margin: 0, fontSize: 16, lineHeight: 1.6, maxWidth: '44ch' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section on-sand">
        <div className="wrap">
          <Kicker num="04" name="Leadership" />
          <h2 className="h-1" style={{ margin: '24px 0 56px', maxWidth: '22ch' }}>People who built it, people who run it.</h2>
          <div className="grid-3">
            {TEAM.map(t => (
              <div key={t.name} style={{ borderTop: '1px solid var(--line)', paddingTop: 28 }}>
                <div style={{ width: 56, height: 56, borderRadius: 999, background: 'rgba(176,141,91,0.15)', display: 'grid', placeItems: 'center', marginBottom: 20 }}>
                  <span style={{ fontFamily: 'var(--f-display)', fontSize: 22, color: 'var(--brass)', fontStyle: 'italic' }}>{t.name.charAt(0)}</span>
                </div>
                <h4 className="h-3" style={{ margin: '0 0 4px' }}>{t.name}</h4>
                <span className="label label--brass">{t.role}</span>
                <p style={{ color: 'var(--muted)', marginTop: 14, fontSize: 14.5, lineHeight: 1.55 }}>{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        kicker={{ num: '05', name: "Let's talk" }}
        headline={<span>The best way to know us is to brief us on <em>a placement</em>.</span>}
        sub="Send us a brief. We come back with options. You will know very quickly whether Hostsy is the right operator for your programme."
        primary={{ label: 'Send a brief', to: '/contact' }}
        secondary={{ label: 'View our portfolio', to: '/locations' }}
        bg={CITY_NIGHT}
      />
    </main>
  );
}
