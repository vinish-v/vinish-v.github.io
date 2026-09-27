import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { projectsData } from '../../data/projects';
import type { ProjectItem } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { BlurText } from '../effects/BlurText';
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
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const filterOptions = [
    { id: 'All', label: 'All Projects', count: projectsData.length },
    { 
      id: 'Developer Tooling', 
      label: 'Developer Tooling', 
      count: projectsData.filter(p => p.category === 'Developer Tooling').length 
    },
    { 
      id: 'Mobile Systems', 
      label: 'Mobile Systems', 
      count: projectsData.filter(p => p.category === 'Mobile Systems').length 
    },
    { 
      id: 'Full-Stack & AI', 
      label: 'Full-Stack & AI', 
      count: projectsData.filter(p => p.category === 'Production Architecture' || p.category === 'Real-Time Systems').length 
    },
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
        setScrollProgress(0);
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
          setScrollProgress(self.progress);
          const currentSlide = Math.min(
            Math.floor(self.progress * slides.length + 0.1),
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
      // On mobile / tablet screens, clear transform and let vertical stack breathe
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

  const currentProjectNumber = String(activeSlideIndex + 1).padStart(2, '0');
  const totalProjectsNumber = String(filteredProjects.length).padStart(2, '0');

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
              <BlurText 
                text="Featured Engineering" 
                as="h2" 
                className="work-giant-heading font-fraunces" 
              />
              {/* Dynamic Slide Counter & Nav for Desktop */}
              <div className="work-slide-nav font-mono">
                <span className="slide-count-badge">
                  {currentProjectNumber} // {totalProjectsNumber}
                </span>
                <div className="slide-nav-arrows">
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
            </div>

            <div className="work-meta-subrow">
              <p className="work-subtext font-sans">
                Developer tooling, mobile audio systems, and full-stack architectures — built with AST static analysis, React Native, MERN backends, and LLM automation.
              </p>

              {/* Progress Bar (Desktop) */}
              <div className="work-scroll-progress-wrap" aria-hidden="true">
                <div 
                  className="work-scroll-progress-fill" 
                  style={{ width: `${Math.max(12, scrollProgress * 100)}%` }}
                />
                <span className="scroll-cue font-mono">
                  {scrollProgress > 0.05 ? 'Horizontal Track' : 'Scroll down to slide →'}
                </span>
              </div>
            </div>

            {/* Domain Filter Bar */}
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
                    <span className="pill-label">{opt.label}</span>
                    <span className="pill-count">0{opt.count}</span>
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
                  totalCount={filteredProjects.length}
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
