import React from 'react';
import type { JourneyNode } from '../../data/journey';
import './TimelineNode.css';

interface TimelineNodeProps {
  node: JourneyNode;
  isLast: boolean;
}

export const TimelineNode: React.FC<TimelineNodeProps> = ({ node, isLast }) => {
  return (
    <div className={`timeline-node ${isLast ? 'is-last' : ''}`}>
      {/* Indicator Marker */}
      <div className="timeline-marker">
        <span className="marker-dot" />
        {!isLast && <span className="marker-line" />}
      </div>

      {/* Node Content */}
      <div className="timeline-content">
        <div className="timeline-meta-row">
          <span className="timeline-period font-code">{node.period}</span>
          {node.badge && (
            <span className="timeline-badge font-code">{node.badge}</span>
          )}
        </div>

        <h3 className="timeline-title">{node.title}</h3>
        
        <p className="timeline-org">
          {node.organization}
          {node.location && <span className="timeline-loc"> · {node.location}</span>}
        </p>

        <ul className="timeline-details">
          {node.details.map((detail, idx) => (
            <li key={idx} className="timeline-detail-item text-body">
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
