import React from 'react';
import { motion } from 'framer-motion';

export const AboutPart3: React.FC = () => {
  return (
    <section id="about-part3" className="about-snap-part about-legacy-part">
      <div className="about-container about-legacy-container">
        {/* TOP HALF: OUR LEGACY TIMELINE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="about-legacy-top"
        >
          <span className="about-eyebrow text-center block">OUR LEGACY</span>
          <h2 className="about-legacy-title">
            Building Lucknow's RMC Culture Since 2009
          </h2>

          {/* Timeline Wrapper */}
          <div className="about-timeline-wrap">
            <div className="about-timeline-line" />

            <div className="about-timeline-grid">
              {/* Node 1 */}
              <div className="about-timeline-item">
                <span className="about-timeline-year">2009</span>
                <div className="about-timeline-node">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <h3 className="about-timeline-label">Company Founded</h3>
                <p className="about-timeline-desc">The beginning of the Swastik journey.</p>
              </div>

              {/* Node 2 */}
              <div className="about-timeline-item">
                <span className="about-timeline-year color-blue">EARLY MOVER</span>
                <div className="about-timeline-node">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
                  </svg>
                </div>
                <h3 className="about-timeline-label">One of the first</h3>
                <p className="about-timeline-desc">4 RMC plants in Lucknow</p>
              </div>

              {/* Node 3 */}
              <div className="about-timeline-item">
                <span className="about-timeline-year color-blue">CULTURE BUILDER</span>
                <div className="about-timeline-node">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h3 className="about-timeline-label">Started the culture</h3>
                <p className="about-timeline-desc">of RMC in the city</p>
              </div>

              {/* Node 4 */}
              <div className="about-timeline-item">
                <span className="about-timeline-year">TODAY</span>
                <div className="about-timeline-node">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="about-timeline-label">18+ Years of</h3>
                <p className="about-timeline-desc">Trusted Concrete Solutions</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM HALF: MISSION & VISION CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="about-mission-vision-grid"
        >
          {/* Mission Card (Swastik Blue / Dark Theme) */}
          <div className="about-mv-card about-mission-card">
            <div className="about-mv-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <div className="about-mv-content">
              <h3 className="about-mv-title">OUR MISSION</h3>
              <p className="about-mv-desc">
                To deliver high-quality ready mix concrete solutions with
                consistency, reliability and technical excellence.
              </p>
            </div>
          </div>

          {/* Vision Card (Clean White Theme with Blue Border) */}
          <div className="about-mv-card about-vision-card">
            <div className="about-mv-icon-wrap vision-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div className="about-mv-content">
              <h3 className="about-mv-title vision-title">OUR VISION</h3>
              <p className="about-mv-desc vision-desc">
                To become a trusted and leading concrete solutions partner for
                construction and infrastructure projects through quality,
                innovation, technology and customer-focused service.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
