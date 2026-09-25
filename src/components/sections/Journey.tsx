import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { journeyData } from '../../data/journey';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { BlurText } from '../effects/BlurText';
import { ScrollStack, ScrollStackItem } from '../effects/ScrollStack';
import './Journey.css';

gsap.registerPlugin(ScrollTrigger);

export const Journey: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { ref: revealRef, isVisible } = useScrollReveal<HTMLElement>();

  const setRefs = (node: HTMLElement | null) => {
    sectionRef.current = node;
    revealRef.current = node;
  };

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = gsap.utils.toArray<HTMLElement>(section.querySelectorAll('.scroll-stack-card'));
    if (cards.length < 2) return;

    // Card 1 starts at top of stack (y: 0)
    gsap.set(cards[0], { y: 0, scale: 1, filter: 'brightness(1)' });

    // Subsequent cards start offscreen below the viewport
    for (let i = 1; i < cards.length; i++) {
      gsap.set(cards[i], { y: '100vh', scale: 0.98, filter: 'brightness(1)' });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${(cards.length - 1) * 450}`,
        pin: true,
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    for (let i = 1; i < cards.length; i++) {
      // Incoming card glides up and sits directly on the stack
      tl.to(
        cards[i],
        { y: 30 * i, scale: 1, ease: 'power1.out', duration: 1 }
      );

      // Card immediately below dims slightly and scales down
      tl.to(
        cards[i - 1],
        { scale: 0.96, filter: 'brightness(0.68)', ease: 'power1.out', duration: 1 },
        '<'
      );

      // Any earlier cards scale further down and dim more
      for (let j = 0; j < i - 1; j++) {
        tl.to(
          cards[j],
          { scale: 0.92, filter: 'brightness(0.45)', ease: 'power1.out', duration: 1 },
          '<'
        );
      }
    }
  }, { scope: sectionRef });

  return (
    <section 
      id="journey" 
      className={`portfolio-section clean-journey-section ${isVisible ? 'reveal-active' : ''}`}
      ref={setRefs}
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

        {/* Stacked Cards Container */}
        <div className="journey-stack-wrapper">
          <ScrollStack 
            itemStackDistance={30}
            stackPosition={215}
            className="journey-scroll-stack"
          >
            {journeyData.map((node, index) => (
              <ScrollStackItem key={index} itemClassName="journey-stack-card">
                <div className="journey-card-top">
                  <span className="journey-card-num font-mono">0{index + 1}</span>
                  <span className="journey-card-period font-mono">{node.period}</span>
                </div>

                <div className="journey-card-main">
                  <h3 className="journey-card-title font-fraunces">{node.title}</h3>
                  <div className="journey-card-org font-sans">
                    <span className="org-name">{node.organization}</span>
                    {node.location && <span className="org-loc"> · {node.location}</span>}
                  </div>

                  <ul className="journey-card-details">
                    {node.details.map((detail, idx) => (
                      <li key={idx} className="journey-card-detail font-sans">
                        <span className="bullet-point">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
};
