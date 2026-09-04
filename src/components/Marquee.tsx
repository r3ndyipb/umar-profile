const skills = [
  'Strategic Leadership',
  'Human Capital Management (HCM)',
  'Corporate Finance & M&A',
  'Digital Transformation',
  'Enterprise Architecture',
  'Organizational Development',
  'Talent Acquisition & Retention',
  'Financial Modeling & Valuation',
  'P&L Management',
  'Agile & OKR Frameworks',
  'Risk Management & Compliance',
  'Executive Coaching & Mentorship',
  'Change Management',
  'Product Strategy & Go-To-Market',
  'Operational Excellence',
  'Venture Capital & Private Equity',
  'Cross-Functional Synergy',
  'Stakeholder Engagement',
  'Supply Chain Optimization',
  'Performance Management Systems',
  'ESG & Sustainable Governance',
  'Revenue Operations (RevOps)',
  'Capital Allocation Strategy',
  'Data-Driven Decision Making',
  'HR Tech & Workforce Analytics',
  'Strategic Partnerships & Alliances',
  'Brand Architecture & Positioning',
  'Crisis Management & Resilience',
  'Board Advisory & Governance',
  'Omnichannel Customer Experience',
  'Budgeting, Forecasting & Audit',
  'Business Model Innovation',
  'Culture Transformation',
  'Cost Optimization & Efficiency',
  'AI Strategy & Tech Modernization',
  'Global Market Expansion',
];

export default function Marquee() {
  return (
    <section className="marquee-section" aria-label="Business & Leadership Skills">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {/* First Loop Track */}
          <div className="marquee-content">
            {skills.map((skill, index) => (
              <span key={`skill-1-${index}`} className="marquee-item">
                <span className="marquee-bullet">✦</span>
                <span className="marquee-text">{skill}</span>
              </span>
            ))}
          </div>

          {/* Duplicate Loop Track for Seamless Infinite Loop */}
          <div className="marquee-content" aria-hidden="true">
            {skills.map((skill, index) => (
              <span key={`skill-2-${index}`} className="marquee-item">
                <span className="marquee-bullet">✦</span>
                <span className="marquee-text">{skill}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
