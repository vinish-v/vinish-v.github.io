import React from 'react';
import './ProjectMockup.css';

interface ProjectMockupProps {
  type: 'hr-system' | 'chat-app' | 'deadcode-hunter' | 'vinsic';
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
  if (type === 'deadcode-hunter') {
    return (
      <div className="project-mockup deadcode-mockup" aria-label="DeadCode Hunter VS Code Extension Interface Preview">
        <div className="mockup-window-bar">
          <div className="mockup-dots">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <span className="mockup-title font-code">deadcode-hunter // workspace-audit-v1.0.8</span>
          <span className="mockup-badge font-code badge-emerald">AST + Git Safe Undo</span>
        </div>

        <div className="mockup-content deadcode-content">
          {/* Top Scan Metrics Row */}
          <div className="scanner-metrics-row font-code">
            <div className="scanner-stat-pill">
              <span className="stat-num">1,420</span>
              <span className="stat-label">Files Scanned</span>
            </div>
            <div className="scanner-stat-pill highlight-emerald">
              <span className="stat-num">14</span>
              <span className="stat-label">Orphan Files</span>
            </div>
            <div className="scanner-stat-pill">
              <span className="stat-num">8</span>
              <span className="stat-label">Clones (SHA-256)</span>
            </div>
            <div className="scanner-stat-pill highlight-space">
              <span className="stat-num">4.8 MB</span>
              <span className="stat-label">Reclaimable</span>
            </div>
          </div>

          {/* Dual Panel: AST Terminal Log & Items to Clean */}
          <div className="deadcode-grid">
            {/* Left: Terminal AST Log */}
            <div className="deadcode-panel terminal-panel">
              <div className="panel-header">
                <span className="panel-title font-code">ENGINE: static_analyzer.ts</span>
                <span className="terminal-status font-code pulse-dot">● Scanning Complete</span>
              </div>
              <div className="code-block font-code deadcode-terminal">
                <p><span className="c-dim">[0.14s]</span> <span className="c-cyan">CRAWL</span> AST import graph resolved</p>
                <p><span className="c-dim">[0.21s]</span> <span className="c-warn">DETECT</span> Unreferenced: <span className="c-highlight">HeroLegacy.tsx</span></p>
                <p><span className="c-dim">[0.28s]</span> <span className="c-purple">HASH</span> SHA-256 duplicate icon match</p>
                <p><span className="c-dim">[0.33s]</span> <span className="c-green">GIT</span> Snapshot saved: <span className="c-highlight">stash@{'{0}'}</span></p>
                <p><span className="c-dim">[0.35s]</span> <span className="c-cyan">SAFE</span> OS Recycle Bin target armed</p>
              </div>
            </div>

            {/* Right: Detected Items List */}
            <div className="deadcode-panel list-panel">
              <div className="panel-header">
                <span className="panel-title font-code">DETECTED CANDIDATES (3 of 25)</span>
                <span className="reclaim-tag font-code">SELECT ALL</span>
              </div>

              <div className="deadcode-items-list">
                <div className="audit-item-row">
                  <div className="audit-check checked font-code">✓</div>
                  <div className="audit-info">
                    <span className="audit-file font-code">src/legacy/HeroLegacy.tsx</span>
                    <span className="audit-meta font-code">TSX Module · 8 mo ago · 6.2 KB</span>
                  </div>
                  <span className="audit-type-badge font-code tag-orphan">ORPHAN</span>
                </div>

                <div className="audit-item-row">
                  <div className="audit-check checked font-code">✓</div>
                  <div className="audit-info">
                    <span className="audit-file font-code">public/hero_bg_clone.webp</span>
                    <span className="audit-meta font-code">SHA-256 Exact Binary Match · 2.4 MB</span>
                  </div>
                  <span className="audit-type-badge font-code tag-clone">CLONE</span>
                </div>

                <div className="audit-item-row">
                  <div className="audit-check checked font-code">✓</div>
                  <div className="audit-info">
                    <span className="audit-file font-code">moment-timezone (package.json)</span>
                    <span className="audit-meta font-code">Zero Source Imports · 540 KB</span>
                  </div>
                  <span className="audit-type-badge font-code tag-ghost">GHOST DEP</span>
                </div>
              </div>

              <div className="deadcode-action-strip">
                <span className="safe-undo-note font-code">♻ 1-Click OS Trash Safe Undo</span>
                <button type="button" className="btn-clean-mock font-code">Clean Selected (3)</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'vinsic') {
    return (
      <div className="project-mockup vinsic-mockup" aria-label="Vinsic Music and Audio Player Interface Preview">
        <div className="mockup-window-bar">
          <div className="mockup-dots">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <span className="mockup-title font-code">vinsic // audio-engine: active</span>
          <span className="mockup-badge font-code badge-purple">Lossless 24-bit/96kHz</span>
        </div>

        <div className="mockup-content vinsic-content">
          <div className="vinsic-grid">
            {/* Left: Player Card & Sing Slider */}
            <div className="vinsic-panel player-panel">
              <div className="now-playing-header">
                <span className="player-tag font-code">CIRCADIAN: LATE NIGHT CHILL</span>
                <span className="source-tag font-code">LOCAL + STREAM</span>
              </div>

              <div className="album-art-wrap">
                <div className="album-art-inner">
                  <div className="album-vinyl-glow" />
                  <span className="vinyl-icon font-fraunces">V</span>
                  <div className="visualizer-bars" aria-hidden="true">
                    <span className="v-bar bar-1" />
                    <span className="v-bar bar-2" />
                    <span className="v-bar bar-3" />
                    <span className="v-bar bar-4" />
                    <span className="v-bar bar-5" />
                    <span className="v-bar bar-6" />
                  </div>
                </div>
                <div className="track-details">
                  <span className="track-title font-fraunces">Midnight Flow</span>
                  <span className="track-artist font-code">Vinish Audio Collective · Lossless FLAC</span>
                  <div className="scrubber-bar">
                    <div className="scrubber-fill" style={{ width: '56%' }} />
                    <span className="scrubber-knob" style={{ left: '56%' }} />
                  </div>
                  <div className="scrubber-times font-code">
                    <span>01:28</span>
                    <span>03:42</span>
                  </div>
                </div>
              </div>

              {/* Karaoke Sing Slider */}
              <div className="vocal-sing-module">
                <div className="sing-header font-code">
                  <span className="sing-title">✦ Sing Mode (Karaoke)</span>
                  <span className="vocal-val">Vocal -4.5 dB (45%)</span>
                </div>
                <div className="sing-slider-track">
                  <div className="sing-slider-fill" style={{ width: '45%' }} />
                  <span className="sing-slider-thumb" style={{ left: '45%' }} />
                </div>
              </div>
            </div>

            {/* Right: Synced Lyrics Stream */}
            <div className="vinsic-panel lyrics-panel">
              <div className="panel-header">
                <span className="panel-title font-code">REAL-TIME SYNCED LYRICS</span>
                <span className="sync-status font-code">● Tap to Seek</span>
              </div>

              <div className="lyrics-stream-wrap">
                <div className="lyric-line past font-sans">
                  <span className="lyric-time font-code">01:20</span>
                  <p>Running through the digital landscape</p>
                </div>

                <div className="lyric-line past font-sans">
                  <span className="lyric-time font-code">01:24</span>
                  <p>Catching every frequency in the room</p>
                </div>

                <div className="lyric-line active font-fraunces">
                  <span className="lyric-time font-code">01:28</span>
                  <p className="glowing-lyric">"Echoes through the late night flow tonight"</p>
                </div>

                <div className="lyric-line future font-sans">
                  <span className="lyric-time font-code">01:32</span>
                  <p>Waiting for the pulse to align with the sound</p>
                </div>

                <div className="lyric-line future font-sans">
                  <span className="lyric-time font-code">01:36</span>
                  <p>Fading out into the midnight haze</p>
                </div>
              </div>

              <div className="lyrics-footer font-code">
                <span>Auto-scroll locked · Spotify & Saavn Unified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'hr-system') {
    return (
      <div className="project-mockup hr-mockup" aria-label="AI-Powered HR System Interface Preview">
        <div className="mockup-window-bar">
          <div className="mockup-dots">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <span className="mockup-title font-code">ai-resume-parser // hr-records-v1</span>
          <span className="mockup-badge font-code badge-blue">MERN + LLM</span>
        </div>
        
        <div className="mockup-content">
          <div className="hr-grid">
            {/* Left: Resume Ingest & Parse */}
            <div className="hr-panel">
              <div className="panel-header">
                <span className="panel-title font-code">INPUT: resume_candidate.pdf</span>
                <span className="parse-status font-code">Extracted 98%</span>
              </div>
              <div className="code-block font-code">
                <p><span className="k">const</span> extractedData = &#123;</p>
                <p>&nbsp;&nbsp;name: <span className="s">"Candidate Record"</span>,</p>
                <p>&nbsp;&nbsp;role: <span className="s">"Full-Stack Dev"</span>,</p>
                <p>&nbsp;&nbsp;skills: [<span className="s">"React"</span>, <span className="s">"Node"</span>, <span className="s">"MongoDB"</span>],</p>
                <p>&nbsp;&nbsp;confidence: <span className="n">0.978</span></p>
                <p>&#125;;</p>
              </div>
            </div>

            {/* Right: Auto-populated Employee Record */}
            <div className="hr-panel table-panel">
              <div className="panel-header">
                <span className="panel-title font-code">DB_RECORDS: employees.bson</span>
                <span className="db-status font-code">REST: 200 OK</span>
              </div>
              <div className="employee-row">
                <div className="avatar-chip font-code">JD</div>
                <div className="emp-info">
                  <span className="emp-name">Software Engineer</span>
                  <span className="emp-role font-code">Engineering · Full-Time</span>
                </div>
                <span className="verified-tag font-code">PARSED</span>
              </div>
              <div className="employee-row">
                <div className="avatar-chip font-code">AK</div>
                <div className="emp-info">
                  <span className="emp-name">Systems Specialist</span>
                  <span className="emp-role font-code">Operations · Active</span>
                </div>
                <span className="verified-tag font-code">PARSED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-mockup chat-mockup" aria-label="Real-Time Chat Application Interface Preview">
      <div className="mockup-window-bar">
        <div className="mockup-dots">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
        <span className="mockup-title font-code">socket.io // event-stream: active</span>
        <span className="mockup-badge font-code badge-orange">14ms latency</span>
      </div>

      <div className="mockup-content chat-content">
        <div className="chat-messages">
          <div className="chat-bubble incoming">
            <span className="sender font-code">peer:client_802</span>
            <p>Did you check the latency on the new Socket.IO heartbeat ping?</p>
          </div>
          <div className="chat-bubble outgoing">
            <span className="sender font-code">self:vinish</span>
            <p>Yes, round-trip is down to 14ms with persistent MongoDB session logs.</p>
          </div>
        </div>

        {/* AI Smart Replies Bar */}
        <div className="smart-replies-bar">
          <div className="smart-title font-code">
            <span className="sparkle">✦</span> LLM Smart Suggestions
          </div>
          <div className="smart-chips">
            <span className="reply-chip font-code">"Deploy to staging now"</span>
            <span className="reply-chip font-code">"Verified with 200 OK"</span>
            <span className="reply-chip font-code">"All sockets synchronized"</span>
          </div>
        </div>
      </div>
    </div>
  );
};
