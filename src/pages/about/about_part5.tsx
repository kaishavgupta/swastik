import React from 'react';
import { motion } from 'framer-motion';

interface AboutPart5Props {
  onNavigate?: (path: string) => void;
}

export const AboutPart5: React.FC<AboutPart5Props> = ({ onNavigate }) => {
  const LEADERSHIP = [
    { name: 'Uma Shankar Mittal', role: 'Founding Member', initials: 'UM' },
    { name: 'Anand Singhal', role: 'Founding Member', initials: 'AS' },
    { name: 'Neeraj Mittal', role: 'Director', initials: 'NM' },
    { name: 'Nikhil Mittal', role: 'Director', initials: 'NM' },
  ];

  const SAFETY_POINTS = [
    ['Safety-first approach', 'Proper PPE for all team members', 'Safe concrete handling & operations'],
    ['Professional and trained workforce', 'Quality-controlled production', 'On-time site coordination'],
    ['Committed to a safer construction environment', 'Responsible execution of every project', 'Technical support at every step']
  ];

  return (
    <section id="about-part5" className="about-snap-part about-safety-part">
      <div className="about-container about-safety-container">
        {/* TOP: LEADERSHIP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="about-leadership-section"
        >
          <span className="about-eyebrow text-center block">LEADERSHIP</span>
          <div className="about-leadership-grid">
            {LEADERSHIP.map((member, idx) => (
              <div key={idx} className="about-leader-card">
                <div className="about-leader-avatar">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="1.8">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="about-leader-name">{member.name}</h3>
                <p className="about-leader-role">{member.role}</p>
                <div className="about-leader-bar" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* MIDDLE: SAFETY & RESPONSIBILITY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="about-safety-section"
        >
          <div className="about-safety-layout">
            {/* Left: Construction Worker SVG Visual */}
            <div className="about-safety-left">
              <div className="about-safety-img-wrap">
                <img
                  src="/07_Safety_Construction_Site.svg"
                  alt="Swastik Safety Construction Site"
                  className="about-safety-img"
                />
              </div>
            </div>

            {/* Right: Copy & 3-Column Checklist */}
            <div className="about-safety-right">
              <span className="about-eyebrow">SAFETY & RESPONSIBILITY</span>
              <h2 className="about-safety-title">
                Safety Is Not Just A Responsibility –<br />It Is A Commitment.
              </h2>

              <div className="about-safety-points-grid">
                {SAFETY_POINTS.map((col, cIdx) => (
                  <div key={cIdx} className="about-safety-col">
                    {col.map((point, pIdx) => (
                      <div key={pIdx} className="about-safety-item">
                        <span className="about-check-icon">✓</span>
                        <span className="about-safety-text">{point}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM: FINAL CTA CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="about-cta-card"
        >
          <div className="about-cta-left">
            <div className="about-cta-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div className="about-cta-text">
              <h3 className="about-cta-heading">HAVE A PROJECT IN MIND?</h3>
              <p className="about-cta-sub">Let's build something strong with Swastik Mixtures.</p>
            </div>
          </div>

          <button
            onClick={() => onNavigate && onNavigate('/contact')}
            className="btn-primary about-cta-btn"
          >
            REQUEST A QUOTE →
          </button>
        </motion.div>
      </div>
    </section>
  );
};
