'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="section-container">
        
        <div className="footer-top-row">
          
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo-group">
              <img
                src="/icon.png"
                alt="Umar Syarif"
                width={32}
                height={32}
                className="footer-avatar-img"
              />
              <span className="footer-brand-name">Umar Syarif</span>
            </div>
            <p className="footer-tagline">
              Visionary Leadership, Human Capital Transformation &amp; Strategic Value Creation.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-links-col">
            <span className="footer-heading">NAVIGATION</span>
            <div className="footer-links-list">
              <Link href="#home" className="footer-link">Overview</Link>
              <Link href="#about" className="footer-link">Executive Profile</Link>
              <Link href="#expertise" className="footer-link">Strategic Capabilities</Link>
              <Link href="#leadership" className="footer-link">Track Record</Link>
              <Link href="#contact" className="footer-link">Connect &amp; Advisory</Link>
            </div>
          </div>

          {/* Socials & Direct Contact */}
          <div className="footer-social-col">
            <span className="footer-heading">DIRECT CONTACT</span>
            <div className="footer-links-list">
              <a
                href="https://wa.me/628170034354"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link footer-contact-highlight"
              >
                WA: +62 817-0034-354 ↗
              </a>
              <a
                href="mailto:contact@umarsyarif.com"
                className="footer-link"
              >
                contact@umarsyarif.com ↗
              </a>
              <a
                href="https://www.linkedin.com/in/umar-syarif-912b4753/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                LinkedIn Profile ↗
              </a>
            </div>
          </div>

          {/* Office Address & Back to Top */}
          <div className="footer-action-col">
            <span className="footer-heading">OFFICE ADDRESS</span>
            <p className="footer-address">
              Jalan Veteran III No. 43, Ds. Banjarsari,<br />
              Ciawi, Bogor, 16720
            </p>
            <button
              onClick={scrollToTop}
              className="btn-back-to-top"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <span className="top-arrow">↑</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Umar Syarif. All rights reserved.
          </p>
          <p className="footer-built-with">
            Designed for Executive Leadership &amp; Strategic Impact.
          </p>
        </div>

      </div>
    </footer>
  );
}
