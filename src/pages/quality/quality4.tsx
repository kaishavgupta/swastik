import React from 'react';
import { motion } from 'framer-motion';

export const Quality4: React.FC = () => {
  const QUALITY_METRICS = [
    {
      id: 'metric-1',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
      num: '18+',
      isNum: true,
      title: 'YEARS',
      sub: 'OF EXPERIENCE'
    },
    {
      id: 'metric-2',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      num: '100%',
      isNum: true,
      title: 'QUALITY',
      sub: 'FOCUSED'
    },
    {
      id: 'metric-3',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.5M14 2v7.5M8.5 2h7M14 9.5a5 5 0 1 1-4 0v-7.5" />
        </svg>
      ),
      num: 'ADVANCED',
      isNum: false,
      title: 'LAB & TESTING',
      sub: 'FACILITIES'
    },
    {
      id: 'metric-4',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
      num: 'CONSISTENT',
      isNum: false,
      title: 'STRENGTH &',
      sub: 'DURABILITY'
    }
  ];

  return (
    <section id="quality-part4" className="quality-snap-section consistency-sec" aria-label="Consistency In Every Batch">
      {/* 1. BACKGROUND SVG ASSET (z-index: 0): Faded Skyline, Monument, Silos & Blue Geometric Waves */}
      <img
        src="/swastik_quality_background.svg"
        alt=""
        aria-hidden="true"
        className="consistency-bg-skyline"
      />

      {/* 2. BACKGROUND DECORATIVE ELEMENTS (z-index: 1): Top-left concentric circles */}
      <div className="consistency-bg-circles" aria-hidden="true" />

      {/* 3. FOREGROUND MAIN CONTENT (z-index: 2) */}
      <div className="consistency-container">
        {/* TOP EDITORIAL BADGE (Upper Right on Desktop / Over Architecture) */}
        <div className="consistency-editorial-badge">
          <span className="consistency-badge-top">TEST TODAY.</span>
          <span className="consistency-badge-bottom">STRONGER TOMORROW.</span>
          <div className="consistency-badge-line-wrap">
            <span className="consistency-badge-line" />
            <span className="consistency-badge-dot" />
          </div>
        </div>

        {/* ── 3-COLUMN MAIN COMPOSITION ── */}
        <div className="consistency-main-row">
          {/* ── COLUMN 1 (LEFT): Heading & Supporting Copy & Bottom Cubes ── */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="consistency-col-left"
          >
            {/* Eyebrow */}
            <div className="consistency-eyebrow-wrap">
              <span className="consistency-eyebrow">CONSISTENCY</span>
              <span className="consistency-eyebrow-line" />
            </div>

            {/* Main Heading */}
            <h2 className="consistency-headline">
              <span className="consistency-headline-navy">IN EVERY</span><br />
              <span className="consistency-headline-blue">BATCH</span>
            </h2>

            {/* Blue Underline Accent */}
            <div className="consistency-title-bar" />

            {/* Description Paragraph */}
            <p className="consistency-desc">
              We follow stringent quality controls at every stage to ensure you get the same
              reliable concrete, every single time.
            </p>

            {/* ── BOTTOM-LEFT: Concrete Test Cubes + Dot Matrix Grid ── */}
            <div className="consistency-cubes-wrapper">
              {/* Dot Matrix Pattern */}
              <div className="consistency-dot-grid" aria-hidden="true">
                {Array.from({ length: 25 }).map((_, i) => (
                  <span key={i} className="consistency-dot" />
                ))}
              </div>

              {/* Two Concrete Cubes */}
              <div className="consistency-cubes-pair">
                {/* Cube 1 (Large) */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                  className="consistency-cube-item large"
                >
                  <img
                    src="/concrete-fiber-material.svg"
                    alt="Swastik Mixtures Concrete Quality Cube"
                    loading="lazy"
                    className="consistency-cube-img"
                  />
                  <div className="consistency-cube-shadow large" aria-hidden="true" />
                </motion.div>

                {/* Cube 2 (Small) */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="consistency-cube-item small"
                >
                  <img
                    src="/concrete-texture.svg"
                    alt="Swastik Mixtures Concrete Test Specimen"
                    loading="lazy"
                    className="consistency-cube-img"
                  />
                  <div className="consistency-cube-shadow small" aria-hidden="true" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ── COLUMN 2 (CENTER): 2 x 2 Quality Cards ── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="consistency-col-center"
          >
            <div className="consistency-cards-grid">
              {QUALITY_METRICS.map((metric) => (
                <div key={metric.id} className="consistency-card">
                  {/* Circular Icon Badge */}
                  <div className="consistency-card-icon-wrap">
                    {metric.icon}
                  </div>

                  {/* Value / Highlight */}
                  <span className={`consistency-card-val ${metric.isNum ? 'is-number' : 'is-text'}`}>
                    {metric.num}
                  </span>

                  {/* Title & Subtitle */}
                  <span className="consistency-card-title">{metric.title}</span>
                  <span className="consistency-card-sub">{metric.sub}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── COLUMN 3 (RIGHT): Concrete Pouring Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="consistency-col-right"
          >
            <div className="consistency-pour-frame">
              <img
                src="/swastik_concrete_pouring_clean.svg"
                alt="Swastik Mixtures consistent concrete chute pouring on site"
                loading="lazy"
                className="consistency-pour-img"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Quality4;
