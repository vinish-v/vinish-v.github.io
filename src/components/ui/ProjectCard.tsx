import React from 'react';
import type { ProjectItem } from '../../data/projects';
import { ProjectMockup } from './ProjectMockup';
import './ProjectCard.css';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCount?: number;
  onOpenModal: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpenModal }) => {
  const isImageLeft = index % 2 === 0;

  return (
    <article 
      className={`clean-project-card ${isImageLeft ? 'image-left' : 'image-right'} card-accent-${project.accent}`}
      onClick={() => onOpenModal(project)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenModal(project);
        }
      }}
    >
      {/* Visual / Mockup container */}
      <div className="card-visual-wrapper">
        <div className="card-image-scaler">
          <ProjectMockup type={project.imageType} />
        </div>
      </div>

      {/* Content description */}
      <div className="card-info-col">
        <div className="card-meta-row font-mono">
          <span className="card-category-tag">{project.category}</span>
        </div>

        <h3 className="card-title font-fraunces">
          {project.title}
        </h3>

        <p className="card-summary font-sans">
          {project.summary}
        </p>

        {/* Stack Tags */}
        <div className="card-stack-wrap" aria-label="Technology Stack">
          {project.stack.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="card-actions-row" onClick={(e) => e.stopPropagation()}>
          <button 
            type="button" 
            className="btn-primary"
            onClick={() => onOpenModal(project)}
          >
            Read Case Study ↗
          </button>

          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            GitHub Source ↗
          </a>

          {project.demoUrl ? (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Live Demo ↗
            </a>
          ) : (
            <span className="card-pending-badge font-mono">
              {project.id === 'deadcode-hunter' 
                ? 'VS Code Marketplace Ready' 
                : project.id === 'vinsic' 
                ? 'Expo Preview / APK Ready' 
                : 'Deployment in progress'}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
