import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { projectsData } from '../../data/projects';
import type { ProjectItem } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './Work.css';

gsap.registerPlugin(ScrollTrigger);

interface WorkProps {
  onOpenModal: (project: ProjectItem) => void;
}

export const Work: React.FC<WorkProps> = ({ onOpenModal }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const { ref: revealRef, isVisible } = useScrollReveal<HTMLElement>();
  const prefersReduced = useReducedMotion();

  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const filterOptions = [
    { id: 'All', label: 'All Projects' },
    { id: 'Developer Tooling', label: 'Developer Tooling' },
    { id: 'Mobile Systems', label: 'Mobile Systems' },
    { id: 'Full-Stack & AI', label: 'Full-Stack & AI' },
  ];

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : selectedFilter === 'Full-Stack & AI'
    ? projectsData.filter(p => p.category === 'Production Architecture' || p.category === 'Real-Time Systems')
    : projectsData.filter(p => p.category === selectedFilter);

  const setMergedRefs = (node: HTMLElement | null) => {
    sectionRef.current = node;
    revealRef.current = node;
  };

  useGSAP(() => {
    if (prefersReduced) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 960px)', () => {
      const slides = gsap.utils.toArray<HTMLElement>(track.querySelectorAll('.work-card-slide'));
      if (slides.length <= 1) {
        gsap.set(track, { clearProps: 'all' });
        setActiveSlideIndex(0);
        return;
      }

      // Calculate total horizontal travel distance
      const getScrollDistance = () => {
        return track.scrollWidth - window.innerWidth + 96;
      };

      const horizontalTween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: 'none',
      });

      const st = ScrollTrigger.create({
        trigger: section,
        pin: true,
        start: 'top top',
        end: () => `+=${Math.max(getScrollDistance() * 1.15, 1400)}`,
        scrub: 0.8,
        anticipatePin: 1,
        animation: horizontalTween,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const currentSlide = Math.min(
            Math.floor(self.progress * slides.length + 0.05),
            slides.length - 1
          );
          setActiveSlideIndex(currentSlide);
        },
      });

      scrollTriggerRef.current = st;

      return () => {
        st.kill();
        horizontalTween.kill();
        scrollTriggerRef.current = null;
      };
    });

    mm.add('(max-width: 959px)', () => {
      gsap.set(track, { clearProps: 'all' });
      scrollTriggerRef.current = null;
    });

    return () => {
      mm.revert();
    };
  }, { scope: sectionRef, dependencies: [selectedFilter, prefersReduced, filteredProjects.length] });

  // Arrow navigation jumping to specific slide offset
  const handleSlideJump = (targetIndex: number) => {
    const st = scrollTriggerRef.current;
    if (!st || filteredProjects.length <= 1) return;

    const clamped = Math.max(0, Math.min(targetIndex, filteredProjects.length - 1));
    const targetProgress = clamped / (filteredProjects.length - 1);
    const scrollY = st.start + targetProgress * (st.end - st.start);

    window.scrollTo({
      top: scrollY,
      behavior: 'smooth',
    });
  };

  return (
    <section 
      id="work" 
      className={`portfolio-section clean-work-section horizontal-pin-active ${isVisible ? 'reveal-active' : ''}`}
      ref={setMergedRefs}
      aria-label="Selected Engineering Work"
    >
      <div className="work-pin-container">
        {/* Pinned Section Header */}
        <div className="site-container work-header-container">
          <div className="work-headline-wrap">
            <div className="work-title-badge-row">
              <h2 className="work-giant-heading font-fraunces">
                Featured Engineering
              </h2>

              {/* Minimal Clean Arrows Navigation */}
              <div className="work-slide-nav">
                <button
                  type="button"
                  className="nav-arrow-btn"
                  onClick={() => handleSlideJump(activeSlideIndex - 1)}
                  disabled={activeSlideIndex === 0}
                  aria-label="Previous project"
                >
                  ←
                </button>
                <button
                  type="button"
                  className="nav-arrow-btn"
                  onClick={() => handleSlideJump(activeSlideIndex + 1)}
                  disabled={activeSlideIndex === filteredProjects.length - 1}
                  aria-label="Next project"
                >
                  →
                </button>
              </div>
            </div>

            <p className="work-subtext font-sans">
              Developer tooling, mobile audio systems, and full-stack architectures — built with AST static analysis, React Native, MERN backends, and LLM automation.
            </p>

            {/* Domain Filter Bar — Clean labels, no number pills */}
            <div className="work-filter-bar" role="tablist" aria-label="Filter projects by domain">
              {filterOptions.map((opt) => {
                const isActive = selectedFilter === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`work-filter-pill font-mono ${isActive ? 'is-active' : ''}`}
                    onClick={() => setSelectedFilter(opt.id)}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pinned Horizontal Track Slider */}
        <div className="work-track-wrapper">
          <div className="work-horizontal-track" ref={trackRef}>
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="work-card-slide">
                <ProjectCard 
                  project={project} 
                  index={index} 
                  onOpenModal={onOpenModal} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
