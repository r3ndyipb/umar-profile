interface Pillar {
  number: string;
  title: string;
  desc: string;
  items: string[];
}

const pillars: Pillar[] = [
  {
    number: '01',
    title: 'Human Capital & Culture Engineering',
    desc: 'Transforming organizational structures into agile, high-performing talent ecosystems that drive retention and cross-functional synergy.',
    items: [
      'Strategic Workforce Architecture & Planning',
      'C-Suite & Executive Leadership Coaching',
      'Performance Management Systems (OKR / KPI)',
      'Culture Transformation & Employee Engagement',
    ],
  },
  {
    number: '02',
    title: 'Corporate Finance & Value Creation',
    desc: 'Aligning capital allocation, cost governance, and financial modeling to unlock sustainable EBITDA expansion and M&A readiness.',
    items: [
      'P&L Governance & Cost Optimization',
      'Capital Allocation Strategy & Modeling',
      'M&A Due Diligence & Post-Merger Integration',
      'Risk Management, Compliance & Internal Audit',
    ],
  },
  {
    number: '03',
    title: 'Digital & AI Tech Modernization',
    desc: 'Bridging executive strategy with emerging technology, automating workflows, and enabling actionable data-driven intelligence.',
    items: [
      'Enterprise Architecture & Cloud Scaling',
      'AI Adoption & Automation Roadmaps',
      'Revenue Operations (RevOps) Engineering',
      'Omnichannel Customer Experience (CX)',
    ],
  },
  {
    number: '04',
    title: 'Board Advisory & Governance',
    desc: 'Providing unbiased strategic counsel to boards and founders to navigate market pivots, crises, and global expansion.',
    items: [
      'ESG & Sustainable Corporate Governance',
      'Stakeholder & Investor Relations',
      'Strategic Partnerships & Joint Ventures',
      'Crisis Management & Enterprise Resilience',
    ],
  },
];

export default function Expertise() {
  return (
    <section className="expertise-section" id="expertise" aria-label="Core Pillars of Expertise">
      <div className="section-container">
        
        {/* Eyebrow */}
        <div className="section-eyebrow-wrapper">
          <span className="section-eyebrow">02 // PILLARS OF EXPERTISE</span>
          <span className="section-line"></span>
        </div>

        <div className="section-header-row">
          <h2 className="section-title">
            Holistic Capabilities Designed for Enterprise Scale
          </h2>
          <p className="section-subtitle">
            A battle-tested framework combining human-centric leadership, fiscal discipline, and technological acceleration.
          </p>
        </div>

        {/* 4 Bento Grid Cards */}
        <div className="expertise-grid">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="expertise-card">
              <div className="expertise-card-header">
                <span className="pillar-number">{pillar.number}</span>
                <span className="pillar-arrow">↗</span>
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
              
              <ul className="pillar-list">
                {pillar.items.map((item, idx) => (
                  <li key={idx} className="pillar-list-item">
                    <span className="pillar-check">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
