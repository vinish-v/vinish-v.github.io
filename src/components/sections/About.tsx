import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { profileData } from '../../data/profile';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { BlurText } from '../effects/BlurText';
import { PixelTransition } from '../effects/PixelTransition';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const { ref: revealRef, isVisible } = useScrollReveal<HTMLElement>();
  const sectionRef = useRef<HTMLElement>(null);
  const portraitImgRef = useRef<HTMLImageElement>(null);
  const portraitCardRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useGSAP(() => {
    if (prefersReduced) return;

    if (portraitImgRef.current && sectionRef.current) {
      gsap.fromTo(
        portraitImgRef.current,
        { yPercent: -10, scale: 1.1 },
        {
          yPercent: 10,
          scale: 1.1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }

    if (portraitCardRef.current && sectionRef.current) {
      gsap.fromTo(
        portraitCardRef.current,
        { y: 20 },
        {
          y: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    }
  }, { scope: sectionRef, dependencies: [prefersReduced] });

  return (
    <section 
      id="about" 
      className={`portfolio-section clean-about-section ${isVisible ? 'reveal-active' : ''}`}
      ref={(el) => {
        revealRef.current = el;
        sectionRef.current = el;
      }}
      aria-label="About Vinish V"
    >
      <div className="site-container">
        {/* Editorial Section Title with BlurText reveal */}
        <div className="about-title-row">
          <BlurText 
            text="Engineering Functional Systems" 
            as="h2" 
            className="about-giant-heading font-fraunces" 
          />
        </div>

        {/* Main Content Layout with Portrait Photo Integrated */}
        <div className="about-content-layout">
          {/* Left Column: User Portrait Card with Parallax & Pixel Transition */}
          <div className="about-portrait-column">
            <div className="about-photo-card" ref={portraitCardRef}>
              <div className="about-photo-wrapper">
                <PixelTransition
                  firstContent={
                    <div className="about-pixel-default">
                      <img 
                        ref={portraitImgRef}
                        src={profileData.photoUrl} 
                        alt="Vinish V - Full-Stack Developer" 
                        className="about-portrait-img parallax-img"
                      />
                      <div className="about-photo-badge font-mono">
                        <span>Full-Stack Dev</span>
                      </div>
                    </div>
                  }
                  secondContent={
                    <div className="about-pixel-reveal">
                      <div className="pixel-reveal-inner">
                        <span className="pixel-reveal-tag font-mono">CORE PROFILE</span>
                        <h4 className="pixel-reveal-title font-fraunces">Vinish V.</h4>
                        <p className="pixel-reveal-role font-mono">MERN + LLM Architect</p>
                        <div className="pixel-reveal-divider" />
                        <div className="pixel-reveal-items font-mono">
                          <div className="pixel-reveal-row">
                            <span className="reveal-dim">STATUS</span>
                            <span className="reveal-val">Open for Roles</span>
                          </div>
                          <div className="pixel-reveal-row">
                            <span className="reveal-dim">LOCATION</span>
                            <span className="reveal-val">Coimbatore / Remote</span>
                          </div>
                          <div className="pixel-reveal-row">
                            <span className="reveal-dim">DEGREE</span>
                            <span className="reveal-val">B.E. ECE · 8.0</span>
                          </div>
                          <div className="pixel-reveal-row">
                            <span className="reveal-dim">CP STATS</span>
                            <span className="reveal-val">300+ LeetCode</span>
                          </div>
                        </div>
                        <span className="pixel-reveal-cta font-mono">Hover to dismiss ↻</span>
                      </div>
                    </div>
                  }
                  gridSize={12}
                  pixelColor="#ffffff"
                  animationStepDuration={0.4}
                  aspectRatio="125%"
                  className="about-pixel-transition"
                />
              </div>

              <div className="about-photo-caption">
                <p className="caption-name font-fraunces">Vinish V.</p>
                <p className="caption-meta font-mono">B.E. ECE · KGISL · CGPA 8.0</p>
                <p className="caption-loc">Coimbatore, India</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Details */}
          <div className="about-text-column">
            <p className="about-lead-statement font-fraunces">
              I'm a final-year ECE student at KGISL Institute of Technology, building developer tools, 
              cross-platform mobile systems, and full-stack web applications. My projects combine functional backends 
              with AST analysis, audio engineering, and LLM integrations — practical software that solves real problems.
            </p>

            <div className="about-narrative">
              {profileData.bio.map((para, i) => (
                <p key={i} className="narrative-p">
                  {para}
                </p>
              ))}
            </div>

            <div className="about-action-row">
              <a href="#work" className="btn-primary">
                Explore Selected Projects ↗
              </a>
              <a
                href={profileData.gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label={`Compose email to ${profileData.email} in Gmail`}
              >
                Direct Inquiry ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
