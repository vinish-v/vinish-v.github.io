import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="clean-footer">
      <div className="site-container clean-footer-container">
        <div className="footer-left font-sans">
          <span className="footer-brand font-fraunces">Vinish V.</span>
          <span className="sep-dot">·</span>
          <span>Full-Stack Developer</span>
          <span className="sep-dot">·</span>
          <span>2025</span>
        </div>

        <div className="footer-right font-sans">
          <button 
            type="button" 
            className="footer-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            Back to Top <span className="arrow-icon">↑</span>
          </button>
          
          <a href="mailto:viniv6687@gmail.com" className="footer-email-btn">
            viniv6687@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};
