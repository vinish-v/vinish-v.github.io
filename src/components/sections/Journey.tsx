import React from 'react';
import { journeyData } from '../../data/journey';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { BlurText } from '../effects/BlurText';
import './Journey.css';

export const Journey: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section 
      id="journey" 
      className={`portfolio-section clean-journey-section ${isVisible ? 'reveal-active' : ''}`}
      ref={ref}
      aria-label="Journey and Experience"
    >
      <div className="site-container">
        <div className="journey-headline-wrap">
          <BlurText 
            text="Timeline & Milestones" 
            as="h2" 
            className="journey-giant-heading font-fraunces" 
          />
          <p className="journey-subtext font-sans">
            Chronological progression across academics, software engineering internship, and competitive programming.
          </p>
        </div>

        {/* Editorial Timeline Rows */}
        <div className="journey-editorial-table">
          {journeyData.map((node, index) => (
            <div key={index} className="journey-editorial-row">
              <div className="journey-col-period">
                <span className="journey-period font-mono">{node.period}</span>
                {node.badge && (
                  <span className="journey-badge font-mono">{node.badge}</span>
                )}
              </div>

              <div className="journey-col-main">
                <h3 className="journey-title font-fraunces">{node.title}</h3>
                <div className="journey-org-line font-sans">
                  <span className="org-name">{node.organization}</span>
                  {node.location && <span className="org-loc"> · {node.location}</span>}
                </div>

                <ul className="journey-details-list">
                  {node.details.map((detail, idx) => (
                    <li key={idx} className="journey-detail-item font-sans">
                      <span className="bullet-point">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="journey-col-index font-mono">
                <span>0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
