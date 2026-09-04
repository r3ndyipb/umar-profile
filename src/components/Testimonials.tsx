interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Umar combines rare strategic depth with exceptional empathy. He transformed our leadership alignment and steered our organizational scale during a pivotal high-growth phase.',
    author: 'Alexander Hartono',
    role: 'Managing Partner & Board Member',
    organization: 'Apex Capital Ventures',
  },
  {
    quote:
      'His ability to break down complex financial and HCM challenges into clear, actionable roadmaps delivered immediate bottom-line impact. A truly visionary executive partner.',
    author: 'Dr. Stephanie Wardani',
    role: 'Chief Executive Officer',
    organization: 'Nusantara Global Tech',
  },
  {
    quote:
      'Umar’s governance framework and cultural leadership elevated our entire executive cadre. He brings clarity to chaos and drives execution with unwavering integrity.',
    author: 'Bambang S. Prabowo',
    role: 'Senior Executive VP of Strategy',
    organization: 'Mega Corp Holdings',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" aria-label="Executive Endorsements">
      <div className="section-container">
        
        {/* Eyebrow */}
        <div className="section-eyebrow-wrapper">
          <span className="section-eyebrow">04 // ENDORSEMENTS &amp; RECOGNITION</span>
          <span className="section-line"></span>
        </div>

        <div className="section-header-row">
          <h2 className="section-title">
            Trusted by Boards, Founders &amp; Executive Peers
          </h2>
          <p className="section-subtitle">
            Reflections from leaders on Umar’s strategic governance and transformative advisory.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="quote-mark">“</div>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author-box">
                <div className="author-avatar-badge">{t.author.charAt(0)}</div>
                <div>
                  <div className="author-name">{t.author}</div>
                  <div className="author-role">{t.role}</div>
                  <div className="author-org">{t.organization}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
