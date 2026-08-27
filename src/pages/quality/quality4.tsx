import React from 'react';
import { motion } from 'framer-motion';

export const Quality4: React.FC = () => {
  return (
    <section id="quality-part4" className="quality-snap-part quality-consistency-part">
      <div className="quality-container quality-consistency-container">
        <div className="quality-consistency-layout">
          {/* LEFT: Heading & Supporting Copy */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="quality-consistency-left"
          >
            <span className="quality-eyebrow">CONSISTENCY</span>
            <h2 className="quality-section-title">IN EVERY BATCH</h2>
            <div className="quality-title-bar" style={{ marginBottom: '20px' }} />

            <p className="quality-consistency-lead">
              We follow stringent quality controls at every stage to ensure you get the same
              reliable concrete, every single time.
            </p>
          </motion.div>

          {/* MIDDLE: 4 Large Metric Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="quality-consistency-middle"
          >
            <div className="quality-metrics-grid">
              {/* Card 1 */}
              <div className="quality-metric-card">
                <div className="quality-metric-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                </div>
                <span className="quality-metric-big">18+</span>
                <span className="quality-metric-label">YEARS</span>
                <span className="quality-metric-sub">OF EXPERIENCE</span>
              </div>

              {/* Card 2 */}
              <div className="quality-metric-card">
                <div className="quality-metric-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <span className="quality-metric-big">100%</span>
                <span className="quality-metric-label">QUALITY</span>
                <span className="quality-metric-sub">FOCUSED</span>
              </div>

              {/* Card 3 */}
              <div className="quality-metric-card">
                <div className="quality-metric-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                    <path d="M10 2v7.5M14 2v7.5M8.5 2h7M14 9.5a5 5 0 1 1-4 0v-7.5" />
                  </svg>
                </div>
                <span className="quality-metric-big sm">ADVANCED</span>
                <span className="quality-metric-label">LAB & TESTING</span>
                <span className="quality-metric-sub">FACILITIES</span>
              </div>

              {/* Card 4 */}
              <div className="quality-metric-card">
                <div className="quality-metric-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <span className="quality-metric-big sm">CONSISTENT</span>
                <span className="quality-metric-label">STRENGTH &</span>
                <span className="quality-metric-sub">DURABILITY</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Concrete Chute Pouring Image */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="quality-consistency-right"
          >
            <div className="quality-pour-img-wrap">
              <img
                src="/10_concrete_pouring_closeup.svg"
                alt="Swastik Mixtures consistent concrete chute pouring"
                loading="lazy"
                width="480"
                height="320"
                className="quality-pour-img"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
