import React from 'react';
import { motion } from 'framer-motion';

export const Quality1: React.FC = () => {
  return (
    <section id="quality-hero" className="quality-snap-section quality-hero-sec" aria-label="Quality Assurance Hero">
      <div className="quality-hero-wrapper">
        {/* ── LEFT COLUMN: Dark Navy Quality Content Panel ── */}
        <div className="quality-hero-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="quality-hero-left-content"
          >
            {/* Eyebrow */}
            <div className="quality-eyebrow-wrap">
              <span className="quality-eyebrow-dash">—</span>
              <span className="quality-eyebrow">QUALITY ASSURANCE</span>
            </div>

            {/* Main Heading */}
            <h1 className="quality-hero-title">
              QUALITY IS<br />
              OUR FOUNDATION
            </h1>

            <div className="quality-hero-divider" />

            {/* Supporting Text */}
            <p className="quality-hero-desc">
              At Swastik Mixtures, quality is not just a step in our process —
              it is a commitment we follow in every batch, every load, and every project.
            </p>

            {/* ── 4 QUALITY PILLARS ── */}
            <div className="quality-pillars-grid">
              {/* Pillar 1 */}
              <div className="quality-pillar-card">
                <div className="quality-pillar-icon-ring" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <h3 className="quality-pillar-name">
                  TESTED<br />MATERIALS
                </h3>
                <p className="quality-pillar-sub">Only premium raw materials, carefully verified.</p>
              </div>

              {/* Pillar 2 */}
              <div className="quality-pillar-card">
                <div className="quality-pillar-icon-ring" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 2v7.5M14 2v7.5M8.5 2h7M14 9.5a5 5 0 1 1-4 0v-7.5" />
                  </svg>
                </div>
                <h3 className="quality-pillar-name">
                  CONTROLLED<br />PROCESSES
                </h3>
                <p className="quality-pillar-sub">Precision mix design and advanced batching systems.</p>
              </div>

              {/* Pillar 3 */}
              <div className="quality-pillar-card">
                <div className="quality-pillar-icon-ring" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" />
                  </svg>
                </div>
                <h3 className="quality-pillar-name">
                  REGULAR<br />TESTING
                </h3>
                <p className="quality-pillar-sub">Rigorous testing at every stage for consistent quality.</p>
              </div>

              {/* Pillar 4 */}
              <div className="quality-pillar-card">
                <div className="quality-pillar-icon-ring" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="quality-pillar-name">
                  EXPERT<br />SUPPORT
                </h3>
                <p className="quality-pillar-sub">Skilled team and on-site support you can always rely on.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN: Plant & Mixer Photograph with Angled Transition ── */}
        <div className="quality-hero-right">
          <div className="quality-hero-angle-accent" aria-hidden="true" />
          <div className="quality-hero-img-frame">
            <img
              src="/08_Swastik_RMC_Plant.svg"
              alt="Swastik Mixtures Ready Mix Concrete Batching Plant and Mixer Truck"
              loading="eager"
              className="quality-hero-plant-img"
            />
          </div>

          {/* ── FLOATING WHITE STATISTICS CARD ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="quality-hero-stats-card"
          >
            {/* Stat 1: 18+ Experience */}
            <div className="quality-stat-box">
              <div className="quality-stat-icon-wrap" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066E6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <div className="quality-stat-info">
                <span className="quality-stat-val">18+</span>
                <span className="quality-stat-lbl">YEARS OF EXPERIENCE</span>
              </div>
            </div>

            <div className="quality-stat-divider" aria-hidden="true" />

            {/* Stat 2: Lucknow Location */}
            <div className="quality-stat-box">
              <div className="quality-stat-icon-wrap" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066E6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="quality-stat-info">
                <span className="quality-stat-city">LUCKNOW</span>
                <span className="quality-stat-sub">UTTAR PRADESH, INDIA</span>
              </div>
            </div>

            <div className="quality-stat-divider" aria-hidden="true" />

            {/* Stat 3: 1000+ Projects */}
            <div className="quality-stat-box">
              <div className="quality-stat-icon-wrap" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066E6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <div className="quality-stat-info">
                <span className="quality-stat-val">1000+</span>
                <span className="quality-stat-lbl">PROJECTS DELIVERED</span>
              </div>
            </div>

            <div className="quality-stat-divider" aria-hidden="true" />

            {/* Stat 4: On-Time */}
            <div className="quality-stat-box">
              <div className="quality-stat-icon-wrap" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066E6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <path d="M9 22v-4h6v4" />
                  <line x1="8" y1="6" x2="10" y2="6" />
                  <line x1="14" y1="6" x2="16" y2="6" />
                  <line x1="8" y1="10" x2="10" y2="10" />
                  <line x1="14" y1="10" x2="16" y2="10" />
                  <line x1="8" y1="14" x2="10" y2="14" />
                  <line x1="14" y1="14" x2="16" y2="14" />
                </svg>
              </div>
              <div className="quality-stat-info">
                <span className="quality-stat-city">ON-TIME</span>
                <span className="quality-stat-sub">EVERY TIME, EVERY PROJECT</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Quality1;
