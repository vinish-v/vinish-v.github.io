import React from 'react';
import './ProfileCard.css';

export interface ProfileCardData {
  platform: 'github' | 'linkedin' | 'leetcode' | 'codechef';
  title: string;
  url: string;
  handle: string;
  stat?: string;
  statLabel?: string;
  extraMeta?: string;
  isTodo?: boolean;
}

interface ProfileCardProps {
  card: ProfileCardData;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ card }) => {
  const isClickable = !card.isTodo && card.url !== '#';

  const innerContent = (
    <>
      <div className="card-header-top">
        <span className="profile-platform-title font-sans">{card.title}</span>
        {isClickable ? (
          <span className="pcard-arrow rotate-arrow">↗</span>
        ) : (
          <span className="pcard-pending-badge font-mono">Pending URL</span>
        )}
      </div>

      <div className="card-middle-content">
        <span className="pcard-handle font-mono">{card.handle}</span>
        {card.stat && (
          <div className="pcard-stat-wrap">
            <span className="pcard-stat-num font-fraunces">{card.stat}</span>
            {card.statLabel && (
              <span className="pcard-stat-label font-mono">{card.statLabel}</span>
            )}
          </div>
        )}
      </div>

      <div className="card-bottom-footer font-sans">
        <p className="pcard-extra">{card.extraMeta}</p>
        <span className="pcard-action-text">
          {isClickable ? 'View Profile ↗' : 'Profile Pending'}
        </span>
      </div>
    </>
  );

  if (isClickable) {
    return (
      <a 
        href={card.url}
        target="_blank"
        rel="noopener noreferrer"
        className="clean-profile-card is-interactive"
        aria-label={`Visit Vinish's ${card.title} profile`}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <div 
      className="clean-profile-card is-pending"
      title="Profile URL pending user confirmation"
    >
      {innerContent}
    </div>
  );
};
