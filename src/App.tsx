import React, { useState } from 'react';
import type { ProjectItem } from './data/projects';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Work } from './components/sections/Work';
import { Skills } from './components/sections/Skills';
import { Journey } from './components/sections/Journey';
import { Profiles } from './components/sections/Profiles';
import { Contact } from './components/sections/Contact';
import { ProjectModal } from './components/ui/ProjectModal';

export const App: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const handleOpenProjectModal = (project: ProjectItem) => {
    setActiveProject(project);
  };

  const handleCloseProjectModal = () => {
    setActiveProject(null);
  };

  return (
    <div className="portfolio-app">

      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Main Single-Scroll Experience */}
      <main id="main-content">
        <Hero />
        <About />
        <Work onOpenModal={handleOpenProjectModal} />
        <Skills />
        <Journey />
        <Profiles />
        <Contact />
      </main>

      {/* Project Detail Modal Overlay */}
      <ProjectModal 
        project={activeProject} 
        onClose={handleCloseProjectModal} 
      />
    </div>
  );
};

export default App;
