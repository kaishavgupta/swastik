import React from 'react';
import { motion } from 'framer-motion';

interface AboutPart6Props {
  onNavigate?: (path: string) => void;
}

export const AboutPart6: React.FC<AboutPart6Props> = ({ onNavigate }) => {
  // Desktop 3-Column Checklist Data
  const DESKTOP_COL1 = [
    'Safety-first approach',
    'Proper PPE for all team members',
    'Safe concrete handling & operations'
  ];

  const DESKTOP_COL2 = [
    'Professional and trained workforce',
    'Quality-controlled production',
    'On-time site coordination'
  ];

  const DESKTOP_COL3 = [
    'Committed to a safer construction environment',
    'Responsible execution of every project',
    'Technical support at every step'
  ];

  // Tablet 2-Column Checklist Data
  const TABLET_COL1 = [
    'Safety-first approach',
    'Proper PPE for all team members',
    'Safe concrete handling & operations',
    'On-time site coordination'
  ];

  const TABLET_COL2 = [
    'Professional and trained workforce',
    'Quality-controlled production',
    'Committed to a safer construction environment',
    'Responsible execution of every project',
    'Technical support at every step'
  ];

  // Mobile Single-Column Checklist Data (9 items in exact order)
  const MOBILE_CHECKLIST = [
    'Safety-first approach',
    'Proper PPE for all team members',
    'Safe concrete handling & operations',
    'Professional and trained workforce',
    'Quality-controlled production',
    'On-time site coordination',
    'Committed to a safer construction environment',
    'Responsible execution of every project',
    'Technical support at every step'
  ];

  const handleNav = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.hash = path;
    }
  };

  return (
    <section id="about-part6" className="about-safety-responsibility-section">
      <div className="about-safety-resp-wrapper">
        {/* ── TOP TWO-COLUMN AREA (Desktop & Tablet) / STACKED (Mobile) ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="about-safety-main-layout"
        >
          {/* Construction Site Worker Visual */}
          <div className="about-safety-img-col">
            <div className="about-safety-photo-card">
              <img
                src="/07_Safety_Construction_Site.svg"
                alt="Swastik Mixtures Construction Site Safety"
                className="about-safety-photo"
              />
            </div>
          </div>

          {/* Narrative & Checklists */}
          <div className="about-safety-content-col">
            <span className="about-safety-eyebrow-label">SAFETY & RESPONSIBILITY</span>
            <div className="about-safety-eyebrow-line" />
            <h2 className="about-safety-main-heading">
              Safety Is Not Just A Responsibility –<br className="safety-title-br" />
              It Is A <span className="text-blue-accent">Commitment.</span>
            </h2>
            <p className="about-safety-lead-paragraph">
              At Swastik Mixtures, safety is at the core of everything we do.
              We follow strict protocols, modern practices and continuous training
              to ensure a safe and secure environment at every site.
            </p>

            {/* Desktop 3-Column Checklist */}
            <div className="about-safety-3col-checklist desktop-checklist-view">
              <div className="about-safety-check-col">
                {DESKTOP_COL1.map((item, idx) => (
                  <div key={idx} className="about-safety-check-row">
                    <span className="about-safety-circle-check">✓</span>
                    <span className="about-safety-check-text">{item}</span>
                  </div>
                ))}
              </div>
              <div className="about-safety-col-divider" />
              <div className="about-safety-check-col">
                {DESKTOP_COL2.map((item, idx) => (
                  <div key={idx} className="about-safety-check-row">
                    <span className="about-safety-circle-check">✓</span>
                    <span className="about-safety-check-text">{item}</span>
                  </div>
                ))}
              </div>
              <div className="about-safety-col-divider" />
              <div className="about-safety-check-col">
                {DESKTOP_COL3.map((item, idx) => (
                  <div key={idx} className="about-safety-check-row">
                    <span className="about-safety-circle-check">✓</span>
                    <span className="about-safety-check-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tablet 2-Column Checklist */}
            <div className="about-safety-2col-checklist tablet-checklist-view">
              <div className="about-safety-check-col">
                {TABLET_COL1.map((item, idx) => (
                  <div key={idx} className="about-safety-check-row">
                    <span className="about-safety-circle-check">✓</span>
                    <span className="about-safety-check-text">{item}</span>
                  </div>
                ))}
              </div>
              <div className="about-safety-check-col">
                {TABLET_COL2.map((item, idx) => (
                  <div key={idx} className="about-safety-check-row">
                    <span className="about-safety-circle-check">✓</span>
                    <span className="about-safety-check-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile 1-Column Checklist */}
            <div className="about-safety-1col-checklist mobile-checklist-view">
              {MOBILE_CHECKLIST.map((item, idx) => (
                <div key={idx} className="about-safety-check-row mobile-card-row">
                  <span className="about-safety-circle-check">✓</span>
                  <span className="about-safety-check-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── BOTTOM NAVY CTA BANNER ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="about-safety-cta-banner"
        >
          <div className="about-safety-cta-left">
            <div className="about-safety-cta-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div className="about-safety-cta-texts">
              <h3 className="about-safety-cta-title">HAVE A PROJECT IN MIND?</h3>
              <p className="about-safety-cta-sub">Let's build something strong with Swastik Mixtures.</p>
            </div>
          </div>

          <button
            onClick={() => handleNav('/contact')}
            className="about-safety-cta-button"
          >
            REQUEST A QUOTE →
          </button>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave Transition to Footer */}
      <div className="about-safety-wave-container" aria-hidden="true">
        <img src="/swastik-wave.svg" alt="" className="about-safety-wave-svg" />
      </div>
    </section>
  );
};

export default AboutPart6;
