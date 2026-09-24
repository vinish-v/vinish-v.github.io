import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './BlurText.css';

gsap.registerPlugin(ScrollTrigger);

export interface BlurTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  splitBy?: 'words' | 'chars';
  delay?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  immediate?: boolean;
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  className = '',
  as: Component = 'h2',
  splitBy = 'words',
  delay = 0,
  duration = 0.85,
  stagger = 0.06,
  ease = 'none',
  immediate = false,
}) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (prefersReduced) {
      gsap.set(el.querySelectorAll('.blur-unit'), {
        opacity: 1,
        y: 0,
      });
      return;
    }

    const units = el.querySelectorAll('.blur-unit');
    if (!units || units.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(units, {
        opacity: 0,
        y: 20,
        willChange: 'transform, opacity',
      });

      const animProps = {
        opacity: 1,
        y: 0,
        duration: duration,
        stagger: stagger,
        ease: ease,
        delay: delay,
      };

      if (immediate) {
        gsap.to(units, animProps);
      } else {
        gsap.to(units, {
          ...animProps,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, [text, splitBy, delay, duration, stagger, ease, immediate, prefersReduced]);

  if (splitBy === 'chars') {
    const chars = text.split('');
    return (
      // @ts-expect-error dynamic component ref
      <Component ref={containerRef} className={`blur-text-root ${className}`}>
        {chars.map((char, index) => (
          <span
            key={index}
            className="blur-unit blur-char"
            aria-hidden="true"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
        <span className="sr-only">{text}</span>
      </Component>
    );
  }

  // Split by words
  const words = text.split(' ');
  return (
    // @ts-expect-error dynamic component ref
    <Component ref={containerRef} className={`blur-text-root ${className}`}>
      {words.map((word, index) => (
        <span key={index} className="blur-word-wrapper">
          <span className="blur-unit blur-word" aria-hidden="true">
            {word}
          </span>
          {index < words.length - 1 && (
            <span className="blur-space" aria-hidden="true">&nbsp;</span>
          )}
        </span>
      ))}
      <span className="sr-only">{text}</span>
    </Component>
  );
};
