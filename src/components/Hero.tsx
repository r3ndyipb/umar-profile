'use client';

import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouseOffset({ x, y });
    };

    const handleMouseLeave = () => {
      setMouseOffset({ x: 0, y: 0 });
    };

    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener('mousemove', handleMouseMove);
      heroEl.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (heroEl) {
        heroEl.removeEventListener('mousemove', handleMouseMove);
        heroEl.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <main className="hero-stage" ref={heroRef} id="home">
      {/* Left Column: Typography & Professional Executive Bio */}
      <div className="hero-left">
        {/* One-line Greeting */}
        <p className="greeting-line">Hai, I am</p>

        {/* Big Bold Umar Syarif Headline (+10% larger) with Cyber Hologram Glitch */}
        <h1 className="hero-name cyber-glitch" data-text="Umar Syarif">
          <span className="cyber-glitch-text">Umar Syarif</span>
          <span className="glitch-copy glitch-copy-1" aria-hidden="true">
            Umar Syarif
          </span>
          <span className="glitch-copy glitch-copy-2" aria-hidden="true">
            Umar Syarif
          </span>
          <span className="glitch-scanline" aria-hidden="true"></span>
        </h1>

        {/* Concise 2-Line Thin Executive Bio */}
        <p className="executive-bio">
          Executive Leader &amp; Strategic Advisory.<br />
          Driving transformative innovation &amp; sustainable digital growth.
        </p>

        {/* Professional Apple iOS 26 Liquid Glass CTA */}
        <div className="cta-wrapper">
          <a href="#contact" className="btn-executive">
            <span>Discover Vision &amp; Impact</span>
            <svg className="cta-arrow" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 12L12 4M12 4H6M12 4V10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Right Column: Umar Portrait (+20% Size, Bottom-Right Grounded) & Clean Circle Backdrop */}
      <div className="hero-right">
        {/* Clean Static Grey Circle Backdrop */}
        <div
          className="circle-backdrop"
          style={{
            transform: `translate(${mouseOffset.x * 12}px, ${mouseOffset.y * 10}px)`,
          }}
        />

        {/* Umar Cutout Image (Scaled 20% larger, stuck to bottom right) */}
        <div
          className="portrait-container"
          style={{
            transform: `translate(${mouseOffset.x * -6}px, ${mouseOffset.y * -4}px)`,
          }}
        >
          <img
            src="/UMAR.png"
            alt="Umar Syarif - Executive Portrait"
            className="portrait-img"
            id="portraitImg"
            loading="eager"
          />
        </div>
      </div>
    </main>
  );
}
