import React from 'react';
import { motion } from 'framer-motion';

export const AboutPart2: React.FC = () => {
  return (
    <section id="about-part2" className="about-snap-part about-who-part">
      <div className="about-container about-who-container">
        {/* LEFT COLUMN: Narrative & Position */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="about-who-left"
        >
          <span className="about-eyebrow">WHO WE ARE</span>
          <h2 className="about-who-title">
            More Than Concrete.<br />
            A <span className="about-title-blue">Partner In Building.</span>
          </h2>

          <div className="about-who-body">
            <p>
              Swastik Mixtures is a trusted Ready Mix Concrete company rooted in
              Lucknow, with a journey spanning 18+ years.
            </p>
            <p>
              Our journey began with a young RMC plant and has grown into a
              trusted concrete solutions partner for builders and contractors.
            </p>
            <p>
              We combine technical expertise, modern infrastructure and a
              customer-first approach to deliver concrete that builds stronger,
              lasts longer and creates value.
            </p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Plant Image with Overlapping Vertical Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="about-who-right"
        >
          <div className="about-who-image-wrap">
            {/* Main Batching Plant Image */}
            <img
              src="/swastik-concrete-batching-plant.svg"
              alt="Swastik Mixtures Concrete Batching Plant"
              className="about-who-plant-img"
            />

            {/* Vertical Info Card Overlapping the Left Seam */}
            <div className="about-who-card">
              <div className="about-who-card-item">
                <div className="about-who-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="about-who-card-text">
                  <span className="about-who-card-num">18+</span>
                  <span className="about-who-card-sub">YEARS OF<br />EXPERIENCE</span>
                </div>
              </div>

              <div className="about-who-card-divider" />

              <div className="about-who-card-item">
                <div className="about-who-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
                  </svg>
                </div>
                <div className="about-who-card-text">
                  <span className="about-who-card-label">SINCE</span>
                  <span className="about-who-card-num">2009</span>
                  <span className="about-who-card-sub">ESTABLISHED</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
