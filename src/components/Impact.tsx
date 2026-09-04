interface Milestone {
  period: string;
  tag: string;
  title: string;
  desc: string;
  impact: string;
}

const milestones: Milestone[] = [
  {
    period: '2023 — Present',
    tag: 'STRATEGY & HCM',
    title: 'Enterprise-Wide Workforce & Digital Restructuring',
    desc: 'Led organizational redesign across 1,200+ employees, instituting an agile OKR performance matrix and automated HR analytics stack.',
    impact: '+34% Employee Productivity & 96% Retention Rate',
  },
  {
    period: '2020 — 2023',
    tag: 'FINANCE & REV-OPS',
    title: 'Multi-Market P&L Turnaround & Capital Allocation',
    desc: 'Architected cost rationalization program and unit economic overhaul while navigating post-pandemic macroeconomic volatility.',
    impact: '+28% EBITDA Margin Expansion & $40M+ Cost Saved',
  },
  {
    period: '2016 — 2020',
    tag: 'M&A & SCALE',
    title: 'Cross-Border M&A Diligence & Post-Merger Integration',
    desc: 'Directed integration of three regional acquisitions, unifying disparate tech systems, financial reporting, and cultural identity.',
    impact: '100% Synergies Realized Within 9 Months',
  },
];

export default function Impact() {
  return (
    <section className="impact-section" id="leadership" aria-label="Leadership Milestones & Impact">
      <div className="section-container">
        
        {/* Eyebrow */}
        <div className="section-eyebrow-wrapper">
          <span className="section-eyebrow">03 // PROVEN TRACK RECORD</span>
          <span className="section-line"></span>
        </div>

        <div className="section-header-row">
          <h2 className="section-title">
            Measurable Outcomes Across Transformative Eras
          </h2>
          <p className="section-subtitle">
            Consistent execution delivering shareholder value, operational resilience, and energized teams.
          </p>
        </div>

        {/* Milestone Timeline / Cards */}
        <div className="impact-timeline">
          {milestones.map((m, index) => (
            <div key={index} className="impact-card">
              <div className="impact-card-top">
                <span className="impact-period">{m.period}</span>
                <span className="impact-tag">{m.tag}</span>
              </div>
              <h3 className="impact-title">{m.title}</h3>
              <p className="impact-desc">{m.desc}</p>
              <div className="impact-metric-pill">
                <span className="pill-dot"></span>
                <span className="pill-text">{m.impact}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
