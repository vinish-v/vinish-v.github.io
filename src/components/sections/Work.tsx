import React from 'react';
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

  return (
    <section 
      id="work" 
      className={`portfolio-section clean-work-section ${isVisible ? 'reveal-active' : ''}`}
      ref={ref}
      aria-label="Selected Work"
    >
      <div className="site-container">
        <div className="work-headline-wrap">
          <BlurText 
            text="Production Architectures" 
            as="h2" 
            className="work-giant-heading font-fraunces" 
          />
          <p className="work-subtext font-sans">
            Full-stack systems integrating MERN infrastructure, database optimization, and LLM automation.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="work-projects-list">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onOpenModal={onOpenModal} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
