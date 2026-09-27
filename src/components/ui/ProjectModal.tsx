import React, { useEffect, useRef } from 'react';
import type { ProjectItem } from '../../data/projects';
import { ProjectMockup } from './ProjectMockup';
import './ProjectModal.css';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    // Save previous overflow state
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Keydown handler for Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Focus close button initially
    const closeBtn = modalRef.current?.querySelector<HTMLButtonElement>('.modal-close-btn');
    closeBtn?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="project-modal-backdrop" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="project-modal-sheet" 
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-category font-mono">Case Study // {project.category}</span>
            <h2 id="modal-project-title" className="modal-title font-fraunces">{project.title}</h2>
          </div>
          <button 
            type="button" 
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project modal"
          >
            Close ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Visual Showcase */}
          <div className="modal-mockup-wrapper">
            <ProjectMockup type={project.imageType} />
          </div>

          <div className="modal-section">
            <span className="modal-section-label font-mono">01 // Overview & Objective</span>
            <p className="modal-text font-sans">{project.summary}</p>
          </div>

          <div className="modal-section">
            <span className="modal-section-label font-mono">02 // Problem Statement</span>
            <p className="modal-text font-sans">{project.problem}</p>
          </div>

          <div className="modal-section">
            <span className="modal-section-label font-mono">03 // Key Architectural Highlight</span>
            <div className="modal-highlight-box">
              <p className="modal-highlight-text font-sans">
                {project.keyEngineeringDetail}
              </p>
            </div>
          </div>

          <div className="modal-section">
            <span className="modal-section-label font-mono">04 // Implementation Breakdown</span>
            <ul className="modal-list">
              {project.implementation.map((step, idx) => (
                <li key={idx} className="modal-list-item">
                  <span className="list-bullet font-mono">0{idx + 1}</span>
                  <span className="list-text font-sans">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <span className="modal-section-label font-mono">05 // Technical Stack</span>
            <div className="modal-stack-tags">
              {project.stack.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links Footer inside Modal */}
          <div className="modal-footer-actions">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
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
                Production Preview ↗
              </a>
            ) : (
              <span className="demo-pending-badge font-mono">
                {project.id === 'deadcode-hunter'
                  ? 'VS Code Marketplace Ready'
                  : project.id === 'vinsic'
                  ? 'Expo Mobile Build / APK Ready'
                  : 'Deployment in progress'}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
