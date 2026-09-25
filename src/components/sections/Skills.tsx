import React, { useState } from 'react';
import { skillCategories, competitiveProgrammingStats } from '../../data/skills';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { BlurText } from '../effects/BlurText';
import './Skills.css';

interface ServiceBlock {
  num: string;
  category: string;
  items: string[];
  description: string;
}

export const Skills: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [activeAccordion, setActiveAccordion] = useState<number>(0);

  const skillBlocks: ServiceBlock[] = [
    {
      num: "01",
      category: "Languages",
      items: skillCategories.find(c => c.category === "Languages")?.items || [],
      description: "Foundational programming languages used for algorithmic problem solving, backend servers, and interactive scripting."
    },
    {
      num: "02",
      category: "Frontend",
      items: skillCategories.find(c => c.category === "Frontend")?.items || [],
      description: "Component-driven client architectures, reactive state management, responsive DOM hierarchies, and modern styling."
    },
    {
      num: "03",
      category: "Backend",
      items: skillCategories.find(c => c.category === "Backend")?.items || [],
      description: "Scalable REST APIs, middleware orchestration, authentication pipelines, and asynchronous runtime environments."
    },
    {
      num: "04",
      category: "Databases",
      items: skillCategories.find(c => c.category === "Databases")?.items || [],
      description: "NoSQL document collections, relational query structuring, indexing strategies, and high-throughput caching."
    },
    {
      num: "05",
      category: "Data & BI",
      items: skillCategories.find(c => c.category === "Data & BI")?.items || [],
      description: "Data preparation, dimensional modeling, automated visualization dashboards, and analytical reporting."
    },
    {
      num: "06",
      category: "Tools",
      items: skillCategories.find(c => c.category === "Tools")?.items || [],
      description: "Distributed version control, collaborative branch workflows, pull request reviews, and continuous integration."
    },
    {
      num: "07",
      category: "CP & Algorithms",
      items: [
        `LeetCode: ${competitiveProgrammingStats.leetcode}`,
        `CodeChef: ${competitiveProgrammingStats.codechef}`,
        "Data Structures & Graph Theory"
      ],
      description: "Rigorous daily algorithmic problem solving covering dynamic programming, graph traversal, and time/space optimization."
    }
  ];

  return (
    <section 
      id="skills" 
      className={`portfolio-section clean-skills-section ${isVisible ? 'reveal-active' : ''}`}
      ref={ref}
      aria-label="Capabilities and Technical Skills"
    >
      <div className="site-container">
        <div className="skills-headline-row">
          <BlurText 
            text="Technical Capabilities" 
            as="h2" 
            className="skills-giant-heading font-fraunces" 
          />
          <p className="skills-subtext font-sans">
            Hover or select a domain to inspect specialized engineering proficiencies.
          </p>
        </div>

        {/* Expanding Accordion Columns */}
        <div className="clean-services-wrapper" role="tablist">
          {skillBlocks.map((block, idx) => {
            const isActive = activeAccordion === idx;
            return (
              <div 
                key={block.category}
                className={`clean-service-column ${isActive ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveAccordion(idx)}
                onClick={() => setActiveAccordion(idx)}
                tabIndex={0}
                role="tab"
                aria-selected={isActive}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveAccordion(idx);
                  }
                }}
              >
                {/* Column Header */}
                <div className="service-column-top">
                  <span className="service-num font-mono">{block.num}</span>
                  <div className="service-title-wrap">
                    <span className="service-title font-fraunces">{block.category}</span>
                  </div>
                </div>

                {/* Expanded Content View */}
                <div className="service-column-body">
                  <div className="service-items-list">
                    <span className="skills-list-title font-mono">Core Technologies</span>
                    <ul>
                      {block.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="service-item-li">
                          <span className="service-item-dot" />
                          <span className="li-name font-sans">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="service-description font-sans">
                    {block.description}
                  </p>
                </div>

                {/* Bottom Indicator */}
                <div className="service-column-footer">
                  <span className="service-footer-dot" />
                  <span className="service-footer-label font-mono">Domain</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
