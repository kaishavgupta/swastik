import React from 'react';
import { motion } from 'framer-motion';

export const Quality3: React.FC = () => {
  const TESTING_CAPABILITIES_LEFT = [
    {
      name: 'Slump Cone Test',
      desc: 'Workability and consistency check.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0066E6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 20 8 4 16 4 19 20 5 20" />
          <line x1="7" y1="12" x2="17" y2="12" />
        </svg>
      )
    },
    {
      name: 'Compressive Strength Test',
      desc: 'Measures concrete strength and durability.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0066E6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    },
    {
      name: 'Cube Casting & Testing',
      desc: 'Standardized specimen testing.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0066E6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>
      )
    },
    {
      name: 'Aggregate Testing',
      desc: 'Quality check of fine and coarse aggregates.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0066E6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="8" r="3.5" />
          <circle cx="16" cy="8" r="3.5" />
          <circle cx="12" cy="16" r="4" />
        </svg>
      )
    }
  ];

  const TESTING_CAPABILITIES_RIGHT = [
    {
      name: 'Moisture Content Test',
      desc: 'Ensures correct water content.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0066E6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      )
    },
    {
      name: 'Sieve Analysis',
      desc: 'Gradation and particle size distribution.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0066E6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
        </svg>
      )
    },
    {
      name: 'Specific Gravity Test',
      desc: 'Determines material density.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0066E6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.5M14 2v7.5M8.5 2h7M14 9.5a5 5 0 1 1-4 0v-7.5" />
        </svg>
      )
    },
    {
      name: 'Mix Design Verification',
      desc: 'Confirms optimal mix proportions.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0066E6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    }
  ];

  return (
    <section id="quality-part3" className="quality-snap-section quality-lab-sec" aria-label="Quality Testing & Laboratory">
      {/* 1. BACKGROUND SVG ASSET (z-index: 0) with Lucknow skyline, monument, silos & blue geometric diagonal shapes */}
      <img
        src="/swastik_quality_background.svg"
        alt=""
        aria-hidden="true"
        className="quality-background-art"
      />

      {/* 2. FOREGROUND CONTENT (z-index: 2) */}
      <div className="quality-content quality-lab__container">
        {/* ── TOP HEADER AREA ── */}
        <div className="quality-lab__top-row">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="quality-lab__header-left"
          >
            {/* Eyebrow */}
            <div className="quality-lab__eyebrow-wrap">
              <span className="quality-lab__eyebrow">QUALITY TESTING & LABORATORY</span>
              <span className="quality-lab__eyebrow-line" />
            </div>

            {/* Main Headline */}
            <h2 className="quality-lab__headline">
              <span className="quality-lab__headline-navy">ADVANCED LAB.</span><br />
              <span className="quality-lab__headline-blue">ACCURATE RESULTS.</span>
            </h2>

            {/* Description */}
            <p className="quality-lab__desc">
              Our in-house laboratory is equipped with modern instruments to ensure every
              batch meets the highest standards of quality and performance.
            </p>
          </motion.div>

          {/* Right Floating Quality Statement over Background Architecture */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="quality-lab__header-right"
          >
            <div className="quality-lab__slogan-box">
              <span className="quality-lab__slogan-top">TEST TODAY.</span>
              <span className="quality-lab__slogan-bottom">STRONGER TOMORROW.</span>
              <div className="quality-lab__slogan-deco">
                <span className="quality-lab__slogan-line" />
                <span className="quality-lab__slogan-dot" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── MAIN CONTENT GRID (55% / 45%) ── */}
        <div className="quality-lab__main-grid">
          {/* LEFT: Laboratory Image Card with swastik_concrete_lab.svg */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="quality-lab__image-card"
          >
            <div className="quality-lab__image-frame">
              <img
                src="/swastik_concrete_lab.svg"
                alt="Swastik Mixtures concrete quality testing laboratory"
                loading="lazy"
                className="quality-lab-image"
              />
              {/* Blue Geometric Image Frame Accent */}
              <div className="quality-lab__img-border-accent" aria-hidden="true" />
            </div>

            {/* Bottom Overlay Ribbon */}
            <div className="quality-lab__ribbon">
              <div className="quality-lab__ribbon-left">
                <div className="quality-lab__ribbon-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 2v7.5M14 2v7.5M8.5 2h7M14 9.5a5 5 0 1 1-4 0v-7.5" />
                  </svg>
                </div>
                <div className="quality-lab__ribbon-texts">
                  <span className="quality-lab__ribbon-title">PRECISION TESTING</span>
                  <span className="quality-lab__ribbon-sub">FOR STRONGER TOMORROW</span>
                </div>
              </div>

              <div className="quality-lab__ribbon-arrow" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0066E6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Testing Capabilities Card & Quality Statement Trust Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="quality-lab__capabilities-card"
          >
            {/* Left 2-Column Capabilities Content */}
            <div className="quality-lab__cap-content">
              {/* Header */}
              <div className="quality-lab__cap-header">
                <span className="quality-lab__cap-eyebrow">OUR TESTING CAPABILITIES</span>
                <span className="quality-lab__cap-line" />
              </div>

              {/* 2-Column Grid: 4 items left, 4 items right */}
              <div className="quality-lab__cap-grid">
                <div className="quality-lab__cap-column">
                  {TESTING_CAPABILITIES_LEFT.map((item, idx) => (
                    <div key={idx} className="quality-lab__cap-item">
                      <div className="quality-lab__cap-icon-circle" aria-hidden="true">
                        {item.icon}
                      </div>
                      <div className="quality-lab__cap-text-wrap">
                        <h4 className="quality-lab__cap-name">{item.name}</h4>
                        <p className="quality-lab__cap-desc">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="quality-lab__cap-column">
                  {TESTING_CAPABILITIES_RIGHT.map((item, idx) => (
                    <div key={idx} className="quality-lab__cap-item">
                      <div className="quality-lab__cap-icon-circle" aria-hidden="true">
                        {item.icon}
                      </div>
                      <div className="quality-lab__cap-text-wrap">
                        <h4 className="quality-lab__cap-name">{item.name}</h4>
                        <p className="quality-lab__cap-desc">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Vertical Quality Checked / Trust Delivered Card */}
            <div className="quality-lab__statement-panel">
              {/* Subtle Shield Watermark in Background */}
              <div className="quality-lab__statement-watermark" aria-hidden="true">
                <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>

              <div className="quality-lab__statement-icon" aria-hidden="true">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>

              <div className="quality-lab__statement-heading">
                <span>QUALITY</span>
                <span>CHECKED.</span>
                <span className="quality-lab__statement-space" />
                <span>TRUST</span>
                <span>DELIVERED.</span>
              </div>

              <div className="quality-lab__statement-divider" aria-hidden="true" />

              <p className="quality-lab__statement-desc">
                Every test strengthens our commitment to better concrete.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM ROW: STATISTICS STRIP & FLOATING CONCRETE CUBE ── */}
        <div className="quality-lab__bottom-row">
          {/* Floating White Statistics Card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="quality-lab__achievement-strip"
          >
            {/* Stat 1: 18+ */}
            <div className="quality-lab__achieve-col">
              <div className="quality-lab__achieve-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066E6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <div className="quality-lab__achieve-info">
                <span className="quality-lab__achieve-num">18+</span>
                <span className="quality-lab__achieve-lbl">YEARS OF EXPERIENCE</span>
              </div>
            </div>

            <div className="quality-lab__achieve-divider" aria-hidden="true" />

            {/* Stat 2: Lucknow */}
            <div className="quality-lab__achieve-col">
              <div className="quality-lab__achieve-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066E6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="quality-lab__achieve-info">
                <span className="quality-lab__achieve-title">LUCKNOW</span>
                <span className="quality-lab__achieve-sub">UTTAR PRADESH, INDIA</span>
              </div>
            </div>

            <div className="quality-lab__achieve-divider" aria-hidden="true" />

            {/* Stat 3: Expert Team */}
            <div className="quality-lab__achieve-col">
              <div className="quality-lab__achieve-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066E6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="quality-lab__achieve-info">
                <span className="quality-lab__achieve-title">EXPERT TEAM</span>
                <span className="quality-lab__achieve-sub">SKILLED & CERTIFIED PROFESSIONALS</span>
              </div>
            </div>

            <div className="quality-lab__achieve-divider" aria-hidden="true" />

            {/* Stat 4: Consistent Quality */}
            <div className="quality-lab__achieve-col">
              <div className="quality-lab__achieve-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066E6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="quality-lab__achieve-info">
                <span className="quality-lab__achieve-title">CONSISTENT QUALITY</span>
                <span className="quality-lab__achieve-sub">TESTED. VERIFIED. TRUSTED.</span>
              </div>
            </div>
          </motion.div>

          {/* ── DECORATIVE CONCRETE BLOCK (z-index: 4) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            animate={{
              y: [0, -6, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="quality-concrete-cube-wrap quality-lab__concrete-cube-wrap"
          >
            <img
              src="/concrete-fiber-material.svg"
              alt="Swastik Mixtures Quality Tested Concrete Cube Block"
              loading="lazy"
              className="quality-concrete-cube quality-lab__concrete-cube"
            />
            <div className="quality-lab__cube-shadow" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Quality3;
