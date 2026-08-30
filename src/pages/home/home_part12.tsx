import React from 'react';
import { motion } from 'framer-motion';

interface HomePart12Props {
  onNavigate?: (path: string) => void;
}

const SAFETY_POINTS = [
  'Safety-first approach on all project sites',
  'Proper PPE for all team members',
  'Safe concrete handling & operations',
  'Professional and trained workforce',
  'Quality-controlled production',
  'On-time site coordination',
  'Committed to a safer construction environment'
];

export const HomePart12: React.FC<HomePart12Props> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.hash = path;
    }
  };

  return (
    <section id="home-part-12" className="safety-section home-snap-part">
      <div className="safety-bg-blueprint" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="safetyGridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#0875D1" fillOpacity="0.03" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#safetyGridPattern)" />
        </svg>
        <div className="safety-bg-crane">
          <svg width="320" height="450" viewBox="0 0 100 150" fill="none" stroke="#0875D1" strokeOpacity="0.04" strokeWidth="0.8">
            <line x1="20" y1="150" x2="20" y2="40" />
            <line x1="22" y1="150" x2="22" y2="40" />
            <line x1="0" y1="40" x2="100" y2="40" />
            <line x1="20" y1="40" x2="60" y2="20" />
          </svg>
        </div>
      </div>

      <div className="safety-container">
        <div className="safety-layout">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="safety-left-col"
          >
            <div className="safety-image-wrapper">
              <img
                src="/swastik-safety-worker.svg"
                alt="Swastik Mixtures Ready Mix Concrete Safety Worker"
                className="safety-worker-img"
                loading="lazy"
              />
              <div className="safety-badge">
                <div className="safety-badge-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 11 2 2 4-4" />
                  </svg>
                </div>
                <div className="safety-badge-text">
                  <span className="safety-badge-title">Safety Today</span>
                  <span className="safety-badge-subtitle">Stronger Tomorrow</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="safety-right-col"
          >
            <span className="safety-eyebrow">SAFETY & RESPONSIBILITY</span>
            <h2 className="safety-heading">
              Building with Safety<br />
              as Foundation
            </h2>
            <div className="safety-heading-line" aria-hidden="true" />

            <ul className="safety-checklist">
              {SAFETY_POINTS.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="safety-checklist-item"
                >
                  <div className="safety-checklist-icon-circle">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <span className="safety-checklist-text">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* CTA BANNER */}
      <div
        id="cta"
        style={{
          background: `linear-gradient(135deg, #071A36 0%, #0868C9 100%)`,
          padding: '60px 24px',
          textAlign: 'center',
          marginTop: '40px',
          borderRadius: '16px'
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: '#6DB4F5',
              marginBottom: '12px',
            }}
          >
            START YOUR PROJECT
          </p>
          <h2
            style={{
              fontSize: 'clamp(24px, 3.5vw, 42px)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.02em',
              marginBottom: '12px',
            }}
          >
            Have a Project in Mind?
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: 'rgba(255,255,255,.72)',
              marginBottom: '28px',
              lineHeight: 1.6,
            }}
          >
            Let's build something strong with Swastik Mixtures.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => handleNav('/contact?form=true')}
              style={{
                background: '#fff',
                color: 'var(--blue, #0875D1)',
                border: '2px solid #fff',
                borderRadius: '8px',
                padding: '12px 28px',
                fontSize: '12.5px',
                fontWeight: 700,
                letterSpacing: '.06em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              REQUEST A QUOTE →
            </button>
            <button
              onClick={() => handleNav('/contact?form=true')}
              style={{
                background: 'transparent',
                color: '#fff',
                border: '2px solid rgba(255,255,255,.5)',
                borderRadius: '8px',
                padding: '12px 28px',
                fontSize: '12.5px',
                fontWeight: 700,
                letterSpacing: '.06em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              CONTACT OUR TEAM
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePart12;

