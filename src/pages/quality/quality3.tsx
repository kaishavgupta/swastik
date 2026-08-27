import React from 'react';
import { motion } from 'framer-motion';

export const Quality3: React.FC = () => {
  const TESTING_CHECKLIST = [
    { left: 'Slump Cone Test', right: 'Moisture Content Test' },
    { left: 'Compressive Strength Test', right: 'Sieve Analysis' },
    { left: 'Cube Casting & Testing', right: 'Specific Gravity Test' },
    { left: 'Aggregate Testing', right: 'Mix Design Verification' },
  ];

  return (
    <section id="quality-part3" className="quality-snap-part quality-testing-part">
      <div className="quality-container quality-testing-container">
        {/* HEADER */}
        <div className="quality-section-header">
          <span className="quality-eyebrow block">QUALITY TESTING & LABORATORY</span>
          <h2 className="quality-section-title">ADVANCED LAB. ACCURATE RESULTS.</h2>
          <div className="quality-title-bar" />
        </div>

        {/* LAYOUT: LEFT LAB IMAGE, RIGHT CHECKLIST & BADGE CARD */}
        <div className="quality-testing-layout">
          {/* LEFT: Laboratory Testing Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="quality-testing-left"
          >
            <div className="quality-testing-img-wrap">
              <img
                src="/05_Quality_Control_Lab.svg"
                alt="Swastik Mixtures Quality Control Laboratory"
                loading="lazy"
                width="640"
                height="420"
                className="quality-testing-lab-img"
              />
            </div>
          </motion.div>

          {/* RIGHT: Lab Information & Checklist + Quality Checked Badge */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="quality-testing-right"
          >
            <p className="quality-testing-lead">
              Our in-house laboratory is equipped with modern instruments to ensure
              every batch meets the highest standards of quality and performance.
            </p>

            <div className="quality-testing-checklist-wrap">
              <div className="quality-checklist-grid">
                {TESTING_CHECKLIST.map((row, idx) => (
                  <React.Fragment key={idx}>
                    <div className="quality-checklist-item">
                      <span className="quality-check-bullet">✓</span>
                      <span className="quality-check-label">{row.left}</span>
                    </div>

                    <div className="quality-checklist-item">
                      <span className="quality-check-bullet">✓</span>
                      <span className="quality-check-label">{row.right}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* Quality Checked Badge Card */}
              <div className="quality-badge-card">
                <div className="quality-badge-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                    <path d="M10 2v7.5M14 2v7.5M8.5 2h7M14 9.5a5 5 0 1 1-4 0v-7.5" />
                  </svg>
                </div>
                <span className="quality-badge-text-dark">QUALITY CHECKED.</span>
                <span className="quality-badge-text-blue">TRUST DELIVERED.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
