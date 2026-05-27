import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
          <div className="kicker" style={{ color: 'rgba(241,235,222,0.66)' }}>
            <span className="dot"></span>
            <span className="num">00</span>
            <span className="name">/ Hostsy / Corporate Housing Infrastructure</span>
          </div>
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(241,235,222,0.66)' }}>
            Pretoria · Johannesburg · Gauteng
          </div>
        </div>

        <h2 className="foot__big">
          Premium corporate<br />
          housing<span>.</span>
        </h2>

        <div className="foot__grid">
          <div className="foot__col">
            <h5>Hostsy</h5>
            <p style={{ fontFamily: 'var(--f-display)', fontSize: 20, fontWeight: 300, lineHeight: 1.4, margin: '0 0 24px', maxWidth: '28ch', color: 'var(--ivory)' }}>
              Fully managed extended stay apartments for companies relocating talent into South Africa.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, color: 'rgba(241,235,222,0.78)' }}>
              <a href="mailto:admin@hostsy.co.za">admin@hostsy.co.za</a>
              <a href="tel:+27678182968">+27 67 818 2968</a>
              <span>Pretoria · Gauteng, South Africa</span>
            </div>
          </div>

          <div className="foot__col">
            <h5>Services</h5>
            <ul>
              <li><Link href="/corporate-housing">Corporate housing</Link></li>
              <li><Link href="/corporate-housing">Extended stay</Link></li>
              <li><Link href="/hr-mobility">Relocation support</Link></li>
              <li><Link href="/corporate-housing">Diplomatic placements</Link></li>
              <li><Link href="/corporate-housing">Project team housing</Link></li>
            </ul>
          </div>

          <div className="foot__col">
            <h5>For Companies</h5>
            <ul>
              <li><Link href="/hr-mobility">HR &amp; mobility teams</Link></li>
              <li><Link href="/contact">Request accommodation</Link></li>
              <li><Link href="/contact">Download corporate brochure</Link></li>
              <li><Link href="/contact">Service level agreement</Link></li>
            </ul>
          </div>

          <div className="foot__col">
            <h5>For Landlords</h5>
            <ul>
              <li><Link href="/landlords">Master lease partnership</Link></li>
              <li><Link href="/landlords">Guaranteed rent</Link></li>
              <li><Link href="/landlords">Property requirements</Link></li>
              <li><Link href="/contact">Submit a property</Link></li>
            </ul>
          </div>

          <div className="foot__col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About Hostsy</Link></li>
              <li><Link href="/locations">Locations</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/about">Insights</Link></li>
            </ul>
          </div>
        </div>

        <div className="foot__bottom">
          <div>© 2026 Hostsy Hospitality (Pty) Ltd · VAT Registered · B-BBEE Certified</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <span>Privacy</span>
            <span>Terms</span>
            <span>POPIA</span>
            <span>SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
