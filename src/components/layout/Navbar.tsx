import React, { useState, useEffect } from 'react';
import { profileData } from '../../data/profile';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', index: '01' },
    { label: 'Work', href: '#work', index: '02' },
    { label: 'Capabilities', href: '#skills', index: '03' },
    { label: 'Journey', href: '#journey', index: '04' },
    { label: 'Profiles', href: '#profiles', index: '05' },
    { label: 'Contact', href: '#contact', index: '06' },
  ];

  return (
    <header className={`clean-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="site-container clean-nav-container">
        {/* Brand Logo in Fraunces Serif */}
        <a href="#hero" className="clean-brand" aria-label="Vinish V - Scroll to top">
          <span className="brand-title font-fraunces">Vinish V</span>

        </a>

        {/* Center Desktop Navigation without any brackets */}
        <nav className="clean-desktop-nav" aria-label="Main Navigation">
          <ul className="clean-nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="clean-nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Info: Contact CTA without brackets */}
        <div className="clean-nav-right">
          <a
            href={profileData.gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="clean-contact-cta"
            aria-label="Compose email to Vinish in Gmail"
          >
            <span>Get in Touch</span>
            <span className="cta-arrow">↗</span>
          </a>

          <button
            type="button"
            className="clean-burger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="clean-mobile-drawer" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-content">
            <span className="mobile-drawer-tag font-mono">Navigation</span>
            <ul className="mobile-nav-items">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="mobile-nav-anchor"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="anchor-index font-mono">{link.index}</span>
                    <span className="anchor-label font-fraunces">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-footer font-mono">
              <p>Coimbatore, India · Open for Roles</p>
              <a
                href={profileData.gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-email-link"
                aria-label="Compose email to Vinish in Gmail"
              >
                viniv6687@gmail.com ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
