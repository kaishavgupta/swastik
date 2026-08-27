import React from 'react';
import { motion } from 'framer-motion';

export const AboutPart1: React.FC = () => {
  return (
    <section id="about-part1" className="about-snap-part about-hero-part">
      {/* Background soft ambient gradient */}
      <div className="about-hero-bg-gradient" aria-hidden="true" />

      <div className="about-container about-hero-container">
        {/* LEFT COLUMN: Main Typography & Credibility */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="about-hero-left"
        >
          <span className="about-eyebrow">ABOUT SWASTIK</span>
          <h1 className="about-hero-title">
            BUILDING<br />
            LUCKNOW'S<br />
            RMC CULTURE<br />
            <span className="about-title-blue">SINCE 2009</span>
          </h1>

          <p className="about-hero-lead">
            Since 2009, Swastik Mixtures has been building a journey rooted in
            consistency, reliability and trust.
          </p>

          <div className="about-hero-location">
            <div className="about-location-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <span>LUCKNOW, UTTAR PRADESH, INDIA</span>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: RMC Plant SVG Visual & 18+ Years Floating Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="about-hero-right"
        >
          <div className="about-hero-visual-wrap">
            <img
              src="/08_Swastik_RMC_Plant.svg"
              alt="Swastik Mixtures Ready Mix Concrete Plant"
              className="about-hero-plant-img"
            />

            {/* Blue 18+ Floating Card (Right Overlay) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="about-hero-badge"
            >
              <div className="about-badge-big-num">18+</div>
              <div className="about-badge-big-label">YEARS</div>
              <div className="about-badge-divider" />
              <p className="about-badge-desc">
                OF TRUSTED<br />
                CONCRETE<br />
                SOLUTIONS
              </p>
              {/* Architecture/City Outline SVG */}
              <div className="about-badge-arch-svg">
                <svg width="48" height="24" viewBox="0 0 48 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5">
                  <path d="M2 22V14L6 10L10 14V22M14 22V6L20 2L26 6V22M30 22V12L34 8L38 12V22M42 22V16L46 12V22" />
                </svg>
              </div>
              <div className="about-badge-location">
                <span>LUCKNOW</span>
                <span>UTTAR PRADESH</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM DECORATIVE CURVED WAVE */}
      <div className="about-hero-wave-wrap" aria-hidden="true">
        <img src="/swastik-wave.svg" alt="" className="about-hero-wave-img" />
      </div>
    </section>
  );
};
