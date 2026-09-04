import Image from 'next/image';

interface Metric {
  value: string;
  label: string;
  sub: string;
}

const metrics: Metric[] = [
  { value: '15+', label: 'Years Leadership', sub: 'Executive track record across tech, retail & corporate' },
  { value: '50+', label: 'Enterprise Transformations', sub: 'Successful HCM, finance & digital restructuring' },
  { value: '$120M+', label: 'Portfolio & P&L Managed', sub: 'Capital efficiency & revenue operations governance' },
  { value: '98%', label: 'Talent & Cultural Index', sub: 'High-performance team building & employee retention' },
];

export default function AboutMe() {
  return (
    <section className="about-section" id="about" aria-label="About Umar Syarif">
      <div className="section-container">
        
        {/* Section Header Tag */}
        <div className="section-eyebrow-wrapper">
          <span className="section-eyebrow">01 // EXECUTIVE PROFILE</span>
          <span className="section-line"></span>
        </div>

        <div className="about-grid">
          
          {/* Left Column: Top Aligned Portrait Card & Floating Credential Badges */}
          <div className="about-visual-col">
            <div className="about-image-card">
              <div className="about-image-wrapper">
                <Image
                  src="/nyamping.png"
                  alt="Umar Syarif Executive Profile"
                  width={600}
                  height={720}
                  className="about-portrait-img"
                  priority
                />
              </div>
              
              {/* Floating Badge */}
              <div className="about-floating-badge">
                <div className="badge-pulse-dot"></div>
                <div>
                  <div className="badge-title">Executive Advisor</div>
                  <div className="badge-subtitle">Strategy • HCM • Finance</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Pillars & Impact Metrics */}
          <div className="about-content-col">
            <h2 className="about-heading">
              Bridging Strategic Vision, Human Capital<br className="about-heading-br" />
              &amp; Sustainable Scale
            </h2>

            <p className="about-lead">
              Umar Syarif is an executive leader and strategic advisor dedicated to driving enterprise resilience, organizational excellence, and transformative growth in fast-evolving markets.
            </p>

            <p className="about-body">
              With a multifaceted background spanning Human Capital Management (HCM), corporate financial engineering, and digital modernization, Umar aligns high-performance human talent with stringent P&amp;L governance to build scalable, future-ready organizations.
            </p>

            {/* Impact Metric Grid */}
            <div className="about-metrics-grid">
              {metrics.map((metric, i) => (
                <div key={i} className="metric-card">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                  <div className="metric-sub">{metric.sub}</div>
                </div>
              ))}
            </div>

            {/* Executive Philosophy Quote Box */}
            <div className="about-quote-box">
              <div className="quote-icon">“</div>
              <p className="quote-text">
                True enterprise transformation happens when operational rigor, empathetic leadership, and data-driven agility converge into a shared mission.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
