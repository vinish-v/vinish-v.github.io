import React, { useState } from 'react';
import { projectsData } from '../../data/projects';
import type { ProjectItem } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { BlurText } from '../effects/BlurText';
import './Work.css';

interface WorkProps {
  onOpenModal: (project: ProjectItem) => void;
}

export const Work: React.FC<WorkProps> = ({ onOpenModal }) => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

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

  return (
    <section 
      id="work" 
      className={`portfolio-section clean-work-section ${isVisible ? 'reveal-active' : ''}`}
      ref={ref}
      aria-label="Selected Engineering Work"
    >
      <div className="site-container">
        <div className="work-headline-wrap">
          <BlurText 
            text="Featured Engineering" 
            as="h2" 
            className="work-giant-heading font-fraunces" 
          />
          <p className="work-subtext font-sans">
            Developer tooling, mobile audio systems, and full-stack architectures — built with AST static analysis, React Native, MERN backends, and LLM automation.
          </p>

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

        {/* Project Cards List */}
        <div className="work-projects-list">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              totalCount={filteredProjects.length}
              onOpenModal={onOpenModal} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
