import React from 'react';
import { motion } from 'framer-motion';

export const Quality1: React.FC = () => {
  return (
    <section id="quality-part1" className="quality-snap-part quality-hero-part">
      <div className="quality-hero-layout">
        {/* LEFT COLUMN: Dark Blue Panel with Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="quality-hero-left"
        >
          <span className="quality-eyebrow">QUALITY ASSURANCE</span>
          
          <h1 className="quality-hero-title">
            QUALITY IS<br />
            OUR FOUNDATION
          </h1>

          <p className="quality-hero-lead">
            At Swastik Mixtures, quality is not just a step in our process —
            it is a commitment we follow in every batch, every load, and every project.
          </p>

          {/* 4 Bottom Quality Pillars */}
          <div className="quality-hero-pillars-grid">
            <div className="quality-pillar-item">
              <div className="quality-pillar-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <span className="quality-pillar-title">TESTED</span>
              <span className="quality-pillar-sub">MATERIALS</span>
            </div>

            <div className="quality-pillar-item">
              <div className="quality-pillar-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2">
                  <path d="M10 2v7.5M14 2v7.5M8.5 2h7M14 9.5a5 5 0 1 1-4 0v-7.5" />
                </svg>
              </div>
              <span className="quality-pillar-title">CONTROLLED</span>
              <span className="quality-pillar-sub">PROCESSES</span>
            </div>

            <div className="quality-pillar-item">
              <div className="quality-pillar-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2">
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" />
                </svg>
              </div>
              <span className="quality-pillar-title">REGULAR</span>
              <span className="quality-pillar-sub">TESTING</span>
            </div>

            <div className="quality-pillar-item">
              <div className="quality-pillar-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <span className="quality-pillar-title">EXPERT</span>
              <span className="quality-pillar-sub">SUPPORT</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Large Plant Photograph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="quality-hero-right"
        >
          <div className="quality-hero-img-wrap">
            <img
              src="/08_Swastik_RMC_Plant.svg"
              alt="Swastik Mixtures Ready Mix Concrete Batching Plant"
              loading="eager"
              width="800"
              height="500"
              className="quality-hero-plant-img"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
