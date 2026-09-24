import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { socialLinks } from '../../data/links';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { DepthText } from '../effects/DepthText';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const prefersReduced = useReducedMotion();

  useGSAP(() => {
    if (prefersReduced) return;

    // Colossal 3D Depth name fade-in reveal
    if (nameRef.current) {
      gsap.fromTo(
        nameRef.current,
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: 'power2.out',
        }
      );

      // ScrollTrigger Parallax on monumental name
      gsap.to(nameRef.current, {
        yPercent: 28,
        opacity: 0.25,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    // Stagger in bottom links cleanly
    gsap.fromTo(
      ['.hero-bottom-bar'],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.45,
        ease: 'power2.out',
      }
    );
  }, { scope: heroRef, dependencies: [prefersReduced] });

  return (
    <section id="hero" className="monumental-hero-section" ref={heroRef} aria-label="Hero Section">
      <div className="hero-fullscreen-wrapper">
        {/* Giant 3D Depth Name VINISH that covers the entire hero section */}
        <div className="hero-monumental-name-container" ref={nameRef}>
          <h1 className="hero-depth-title" aria-label="VINISH">
            <DepthText
              text="VINISH"
              layers={30}
              depth={2.0}
              faceColor="#ffffff"
              depthColor="#121212"
              tilt={8}
              pointerTracking={true}
              smoothing={0.14}
              perspective={1000}
              autoOrbit={true}
              orbitSpeed={0.3}
              fontSize="clamp(76px, 19.5vw, 320px)"
              fontWeight={800}
              shadow={true}
              className="font-fraunces"
            />
          </h1>
        </div>

        {/* Minimal clean bottom bar with work link & scroll prompt */}
        <div className="hero-bottom-bar site-container">
          <div className="hero-bottom-actions">
            <a href="#work" className="btn-primary">
              View Work ↗
            </a>
            <a 
              href={socialLinks.github.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary"
            >
              GitHub ↗
            </a>
          </div>

          <div className="hero-scroll-cue font-mono">
            <span>Scroll to explore ↓</span>
          </div>
        </div>
      </div>
    </section>
  );
};
