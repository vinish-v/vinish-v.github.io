import React from 'react';
import './ProjectMockup.css';

interface ProjectMockupProps {
  type: 'hr-system' | 'chat-app';
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
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
          <span className="mockup-badge font-code">MERN + LLM</span>
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
        <span className="mockup-badge font-code">14ms latency</span>
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
