import React from 'react';
import { profileData } from '../../data/profile';
import { socialLinks } from '../../data/links';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { BlurText } from '../effects/BlurText';
import './Contact.css';

export const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      className={`portfolio-section clean-contact-section ${isVisible ? 'reveal-active' : ''}`}
      ref={ref}
      aria-label="Contact Information"
    >
      <div className="site-container">
        <div className="contact-editorial-wrap">
          {/* Colossal Headline in Fraunces with BlurText */}
          <BlurText 
            text="Let's build something worth looking at." 
            as="h1" 
            className="contact-colossal-title font-fraunces"
            duration={0.9}
            stagger={0.07}
          />

          <p className="contact-body-text font-sans">
            Currently seeking full-time software engineering roles and internships across{' '}
            <span className="highlight-text">{profileData.targetLocations.join(', ')}</span>.
            Whether you have an opportunity, a project proposal, or want to discuss full-stack architectures,
            my inbox is open.
          </p>

          {/* Action CTAs: Modern Buttons */}
          <div className="contact-buttons-group">
            <a
              href={`mailto:${profileData.email}`}
              className="btn-primary contact-main-btn"
              aria-label={`Send email to ${profileData.email}`}
            >
              {profileData.email} ↗
            </a>

            <a
              href={socialLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LinkedIn Profile ↗
            </a>

            <a
              href={socialLinks.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub Source ↗
            </a>
          </div>

          {/* Clean minimal bottom line (replaces cluttered metadata & redundant footer) */}
          <div className="contact-bottom-line font-sans">
            <div className="bottom-line-left">
              <span className="brand-name font-fraunces">Vinish V.</span>
              <span className="sep-dot">·</span>
              <span>2025</span>
            </div>

            <button
              type="button"
              className="contact-top-btn font-sans"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
            >
              Back to Top <span className="arrow-icon">↑</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
