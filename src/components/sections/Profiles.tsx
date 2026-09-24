import React, { useEffect, useState } from 'react';
import { socialLinks } from '../../data/links';
import { ProfileCard } from '../ui/ProfileCard';
import type { ProfileCardData } from '../ui/ProfileCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { BlurText } from '../effects/BlurText';
import './Profiles.css';

export const Profiles: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [githubExtra, setGithubExtra] = useState<string>('Repositories & Source Code');

  useEffect(() => {
    // Attempt to fetch public repo count via GitHub API
    const fetchGitHubData = async () => {
      try {
        const res = await fetch('https://api.github.com/users/vinish-v');
        if (res.ok) {
          const data = await res.json();
          if (typeof data.public_repos === 'number') {
            setGithubExtra(`${data.public_repos} Public Repositories`);
          }
        }
      } catch {
        // Fallback remains clean and verified
      }
    };

    fetchGitHubData();
  }, []);

  const profileCards: ProfileCardData[] = [
    {
      platform: 'github',
      title: 'GitHub',
      url: socialLinks.github.url,
      handle: socialLinks.github.label,
      extraMeta: githubExtra,
      isTodo: false
    },
    {
      platform: 'linkedin',
      title: 'LinkedIn',
      url: socialLinks.linkedin.url,
      handle: socialLinks.linkedin.label,
      extraMeta: 'Professional Network & Career Updates',
      isTodo: false
    },
    {
      platform: 'leetcode',
      title: 'LeetCode',
      url: socialLinks.leetcode.url,
      handle: socialLinks.leetcode.label,
      stat: '300+',
      statLabel: 'Problems Solved',
      extraMeta: 'Algorithms & Data Structures',
      isTodo: false
    },
    {
      platform: 'codechef',
      title: 'CodeChef',
      url: socialLinks.codechef.url,
      handle: socialLinks.codechef.label,
      stat: '700+',
      statLabel: 'Problems Solved',
      extraMeta: 'Contests & Algorithmic Practice',
      isTodo: true
    }
  ];

  return (
    <section 
      id="profiles" 
      className={`portfolio-section clean-profiles-section ${isVisible ? 'reveal-active' : ''}`}
      ref={ref}
      aria-label="Developer Profiles and Handles"
    >
      <div className="site-container">
        <div className="profiles-headline-wrap">
          <BlurText 
            text="Online Presence" 
            as="h2" 
            className="profiles-giant-heading font-fraunces" 
          />
          <p className="profiles-subtext font-sans">
            Direct links to competitive programming profiles, source repositories, and professional updates.
          </p>
        </div>

        {/* 2x2 Grid on desktop, 1-col on mobile */}
        <div className="profiles-grid">
          {profileCards.map((card) => (
            <ProfileCard key={card.platform} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};
