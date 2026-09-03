import React from 'react';
import { motion } from 'framer-motion';

export const AboutPart3: React.FC = () => {
  return (
    <section id="about-part3" className="about-legacy-section">
      <div className="about-legacy-wrapper">
        {/* TOP HEADER AREA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="about-legacy-header"
        >
          <span className="about-legacy-eyebrow">OUR LEGACY</span>
          <div className="about-legacy-eyebrow-line" />
          <h2 className="about-legacy-heading">
            Building Lucknow's <span className="text-blue-accent">RMC Culture</span> Since 2009
          </h2>
          <p className="about-legacy-subheading">
            From a single RMC plant to a trusted concrete solutions partner, our journey is built on consistency, quality and trust.
          </p>
        </motion.div>

        {/* TIMELINE AREA (Horizontal on Desktop, 2x2 on Tablet, Vertical on Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="about-legacy-timeline"
        >
          <div className="legacy-timeline-track" />

          {/* Milestone 1 */}
          <div className="legacy-milestone">
            <span className="legacy-milestone-tag">2009</span>
            <div className="legacy-milestone-circle">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <h3 className="legacy-milestone-title">Company Founded</h3>
            <p className="legacy-milestone-desc">The beginning of the Swastik<br />journey.</p>
          </div>

          {/* Milestone 2 */}
          <div className="legacy-milestone">
            <span className="legacy-milestone-tag text-blue-accent">EARLY MOVER</span>
            <div className="legacy-milestone-circle">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
              </svg>
            </div>
            <h3 className="legacy-milestone-title">One of the first</h3>
            <p className="legacy-milestone-desc">4 RMC plants in Lucknow</p>
          </div>

          {/* Milestone 3 */}
          <div className="legacy-milestone">
            <span className="legacy-milestone-tag text-blue-accent">CULTURE BUILDER</span>
            <div className="legacy-milestone-circle">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3 className="legacy-milestone-title">Started the culture</h3>
            <p className="legacy-milestone-desc">of RMC in the city</p>
          </div>

          {/* Milestone 4 */}
          <div className="legacy-milestone">
            <span className="legacy-milestone-tag">TODAY</span>
            <div className="legacy-milestone-circle">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="legacy-milestone-title">18+ Years of</h3>
            <p className="legacy-milestone-desc">Trusted Concrete Solutions</p>
          </div>
        </motion.div>

        {/* MISSION & VISION DUAL CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          className="about-legacy-cards-grid"
        >
          {/* LEFT CARD — OUR MISSION */}
          <div className="legacy-mission-card">
            <div className="legacy-card-inner">
              <div className="legacy-mission-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <div className="legacy-card-body">
                <h3 className="legacy-card-title">OUR MISSION</h3>
                <div className="legacy-card-line legacy-card-line--mission" />
                <p className="legacy-card-desc">
                  To deliver high-quality ready mix concrete solutions with consistency, reliability and technical excellence.
                </p>
              </div>
            </div>
            {/* Subtle background plant silhouette artwork */}
            <div className="legacy-mission-bg-art" aria-hidden="true" />
          </div>

          {/* RIGHT CARD — OUR VISION */}
          <div className="legacy-vision-card">
            <div className="legacy-card-inner">
              <div className="legacy-vision-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div className="legacy-card-body">
                <h3 className="legacy-card-title legacy-card-title--vision">OUR VISION</h3>
                <div className="legacy-card-line legacy-card-line--vision" />
                <p className="legacy-card-desc legacy-card-desc--vision">
                  To become a trusted and leading concrete solutions partner for construction and infrastructure projects through quality, innovation, technology and customer-focused service.
                </p>
              </div>
            </div>
            {/* Subtle background truck silhouette artwork */}
            <div className="legacy-vision-bg-art" aria-hidden="true" />
          </div>
        </motion.div>
      </div>

      {/* Decorative Wave Transition */}
      <div className="about-legacy-wave-container" aria-hidden="true">
        <img src="/swastik-wave.svg" alt="" className="about-legacy-wave-svg" />
      </div>
    </section>
  );
};

export default AboutPart3;
