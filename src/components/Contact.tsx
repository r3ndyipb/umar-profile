'use client';

import { useState } from 'react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Executive Advisory Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = `Halo Pak Umar Syarif,
Nama: ${formData.name}
Email: ${formData.email}
Perihal: ${formData.subject}
Pesan: ${formData.message}`;

    const waUrl = `https://wa.me/628170034354?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact" aria-label="Connect with Umar Syarif">
      <div className="section-container">
        
        {/* Eyebrow */}
        <div className="section-eyebrow-wrapper">
          <span className="section-eyebrow">05 // ENGAGE &amp; COLLABORATE</span>
          <span className="section-line"></span>
        </div>

        <div className="contact-card-glass">
          <div className="contact-grid">
            
            {/* Left Info Column */}
            <div className="contact-info-col">
              <h2 className="contact-heading">
                Ready to Accelerate Your Strategic Trajectory?
              </h2>
              <p className="contact-subtext">
                Available for Board Advisory, Interim Executive Leadership, Keynote Engagements, and Enterprise Transformation Consultations.
              </p>

              <div className="contact-channel-list">
                <div className="channel-item">
                  <div className="channel-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="channel-label">Office Address</div>
                    <div className="channel-val">Jalan Veteran III No. 43, Ds. Banjarsari, Ciawi, Bogor, 16720</div>
                  </div>
                </div>

                <div className="channel-item">
                  <div className="channel-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <div className="channel-label">Phone &amp; WhatsApp</div>
                    <div className="channel-val">
                      <a href="https://wa.me/628170034354" target="_blank" rel="noopener noreferrer" className="channel-link">
                        +62 817-0034-354
                      </a>
                    </div>
                  </div>
                </div>

                <div className="channel-item">
                  <div className="channel-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="channel-label">Executive Office</div>
                    <div className="channel-val">
                      <a href="mailto:contact@umarsyarif.com" className="channel-link">
                        contact@umarsyarif.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="channel-item">
                  <div className="channel-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <div>
                    <div className="channel-label">Professional Network</div>
                    <div className="channel-val">
                      <a href="https://www.linkedin.com/in/umar-syarif-912b4753/" target="_blank" rel="noopener noreferrer" className="channel-link">
                        linkedin.com/in/umar-syarif-912b4753
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Quick Action CTAs */}
              <div className="contact-quick-actions">
                <a
                  href="https://wa.me/628170034354"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-quick-wa"
                >
                  <span>Chat via WhatsApp</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/umar-syarif-912b4753/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-quick-li"
                >
                  <span>Connect on LinkedIn</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Message Form */}
            <div className="contact-form-col">
              {formSubmitted ? (
                <div className="form-success-box">
                  <div className="success-icon">✓</div>
                  <h3 className="success-title">Message Received</h3>
                  <p className="success-desc">
                    Thank you for reaching out. Umar Syarif’s executive office will respond to your inquiry within 24 business hours.
                  </p>
                  <button
                    className="btn-reset"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="executive-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Full Name &amp; Title</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Maya Indrawati, Chief Executive Officer"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Corporate Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="e.g. maya@enterprise.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">Engagement Scope</label>
                    <select
                      id="subject"
                      className="form-input form-select"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="Executive Advisory">Executive / Board Advisory</option>
                      <option value="HCM & Org Transformation">HCM &amp; Organizational Transformation</option>
                      <option value="Financial & P&L Strategy">Financial &amp; P&amp;L Strategy</option>
                      <option value="Speaking & Keynote">Speaking &amp; Keynote Panel</option>
                      <option value="Other Confidential Inquiry">Other Confidential Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message / Scope Outline</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Briefly describe your organizational context, challenges, or objectives..."
                      className="form-input form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-form-submit">
                    <span>Submit Inquiry</span>
                    <span className="submit-arrow">→</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
