'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavItem {
  label: string;
  href: string;
}

interface LanguageOption {
  code: string;
  name: string;
  native: string;
}

const navItems: NavItem[] = [
  { label: 'OVERVIEW', href: '#home' },
  { label: 'PROFILE', href: '#about' },
  { label: 'EXPERTISE', href: '#expertise' },
  { label: 'LEADERSHIP', href: '#leadership' },
  { label: 'CONNECT', href: '#contact' },
];

const languages: LanguageOption[] = [
  { code: 'EN', name: 'English', native: 'English' },
  { code: 'ID', name: 'Indonesia', native: 'Bahasa Indonesia' },
  { code: 'ZH', name: 'China', native: '中文' },
  { code: 'JA', name: 'Jepang', native: '日本語' },
  { code: 'AR', name: 'Arab', native: 'العربية' },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('OVERVIEW');
  const [selectedLang, setSelectedLang] = useState<LanguageOption>(languages[0]);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="navbar">
      {/* Left Area: Avatar Icon.png + Menu Links beside it */}
      <div className="nav-left-group">
        <Link href="#home" className="brand-logo-icon" aria-label="Umar Syarif" title="Umar Syarif">
          <img
            src="/icon.png"
            alt="Umar Syarif"
            width={28}
            height={28}
            className="brand-avatar-img"
          />
        </Link>

        {/* Menu beside Avatar on the Left */}
        <nav className="nav-menu">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-item ${activeItem === item.label ? 'active' : ''}`}
              onClick={() => setActiveItem(item.label)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Right Group: Social Icons & Language Dropdown */}
      <div className="nav-socials">
        <a
          href="https://www.linkedin.com/in/umar-syarif-912b4753/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-icon-link"
          aria-label="LinkedIn: Umar Syarif"
          title="LinkedIn: Umar Syarif"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>

        <a
          href="https://wa.me/628170034354"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-icon-link"
          aria-label="WhatsApp: +62 817-0034-354"
          title="WhatsApp: +62 817-0034-354"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </a>

        {/* Language Dropdown beside WA icon */}
        <div className="lang-dropdown-wrapper" ref={langRef}>
          <button
            type="button"
            className={`lang-btn ${isLangOpen ? 'active' : ''}`}
            onClick={() => setIsLangOpen(!isLangOpen)}
            aria-expanded={isLangOpen}
            aria-label="Select Language"
          >
            <svg
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="lang-code-text">{selectedLang.code}</span>
            <span className={`lang-chevron ${isLangOpen ? 'rotate' : ''}`}>▾</span>
          </button>

          {isLangOpen && (
            <div className="lang-menu" role="menu">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  className={`lang-item ${selectedLang.code === lang.code ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedLang(lang);
                    setIsLangOpen(false);
                  }}
                  role="menuitem"
                >
                  <span className="lang-item-badge">{lang.code}</span>
                  <div className="lang-item-labels">
                    <span className="lang-item-name">{lang.name}</span>
                    <span className="lang-item-native">{lang.native}</span>
                  </div>
                  {selectedLang.code === lang.code && <span className="lang-item-check">✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
