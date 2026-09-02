import React from 'react';
import { motion } from 'framer-motion';

const FEATURE_CARDS = [
  {
    title: '18+ Years Experience',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    )
  },
  {
    title: 'Premium Quality',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    title: 'High Strength Concrete',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    )
  },
  {
    title: 'Reliable Delivery',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    )
  },
  {
    title: 'Technical Expertise',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  },
  {
    title: 'Customer-Focused Service',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    )
  },
  {
    title: 'Consistent Quality',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  },
  {
    title: 'Professional Support',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
];

const TIMELINE_MILESTONES = [
  {
    label: '2009',
    title: 'Company Founded',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    )
  },
  {
    label: 'Early Mover',
    title: 'One of the first 4 RMC plants in Lucknow',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    )
  },
  {
    label: 'Culture Builder',
    title: 'Started the culture of RMC in the city',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  },
  {
    label: 'Today',
    title: '18+ Years of Trusted Concrete Solutions',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }
];

export const HomePart3: React.FC = () => {
  return (
    <section id="home-part-3" className="legacy-section home-snap-part">
      {/* Full-bleed background image covering entire section */}
      <div className="legacy-factory-bg" aria-hidden="true" />
      {/* Luminous light overlay for readability */}
      <div className="legacy-factory-fade" aria-hidden="true" />

      <div className="legacy-main-container">
        {/* TOP / HEADING AREA */}
        <div className="legacy-header-block">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.5 }}
            className="legacy-eyebrow"
          >
            OUR LEGACY
          </motion.span>
          <span className="legacy-divider" />
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="legacy-heading"
          >
            Building Lucknow's RMC <br className="legacy-br-desktop" />Culture Since{' '}
            <span className="legacy-heading-accent">2009</span>
          </motion.h2>
        </div>

        {/* CONTENT ROW: Left 8-Card Grid + Right Timeline on Desktop */}
        <div className="legacy-content-columns">
          {/* 8-CARD FEATURE PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="legacy-features-panel"
          >
            <div className="legacy-features-grid">
              {FEATURE_CARDS.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.04, duration: 0.45, ease: "easeOut" }}
                  className="legacy-feature-card"
                >
                  <div className="legacy-feature-icon">{card.icon}</div>
                  <h4 className="legacy-feature-title">{card.title}</h4>
                  <span className="legacy-feature-accent" />

                  {/* SVG PERIMETER BORDER OVERLAY */}
                  <svg className="legacy-card-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <rect
                      className="legacy-card-border-base"
                      x="1" y="1" width="98" height="98" rx="12" ry="12"
                      pathLength="1000"
                      vectorEffect="non-scaling-stroke"
                    />
                    <rect
                      className="legacy-card-border-glow"
                      x="1" y="1" width="98" height="98" rx="12" ry="12"
                      pathLength="1000"
                      vectorEffect="non-scaling-stroke"
                    />
                    <rect
                      className="legacy-card-border-stroke"
                      x="1" y="1" width="98" height="98" rx="12" ry="12"
                      pathLength="1000"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 4-POINT HORIZONTAL TIMELINE */}
          <div className="legacy-timeline-wrapper">
            <div className="legacy-timeline">
              <div className="legacy-timeline-track" aria-hidden="true" />
              {TIMELINE_MILESTONES.map((item, i) => (
                <div key={item.label} className="legacy-milestone">
                  <span className="legacy-milestone-label">{item.label}</span>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: 0.15 + i * 0.1, duration: 0.45, ease: "easeOut" }}
                    className="legacy-milestone-node"
                  >
                    {item.icon}
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.45 }}
                    className="legacy-milestone-desc"
                  >
                    {item.title}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FULL-WIDTH DUAL LAYER WAVE FOOTER */}
      <div className="legacy-wave-container" aria-hidden="true">
        <svg
          viewBox="0 0 1440 160"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="legacy-wave-svg"
        >
          <path
            d="M0,80 C240,20 480,140 720,80 C960,20 1200,130 1440,70 L1440,160 L0,160 Z"
            fill="#071A36"
          />
          <path
            d="M0,100 C200,48 440,150 720,95 C960,48 1220,140 1440,88 L1440,160 L0,160 Z"
            fill="#0868C9"
            fillOpacity="0.75"
          />
        </svg>
      </div>
    </section>
  );
};

export default HomePart3;
