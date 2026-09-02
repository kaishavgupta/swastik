import React from 'react';
import { motion } from 'framer-motion';
import { getTelUrl, CONTACT_NUMBER_DISPLAY } from '../../config/contact';

interface Quality5Props {
  onNavigate?: (path: string) => void;
}

export const Quality5: React.FC<Quality5Props> = ({ onNavigate }) => {
  const handleQuoteClick = () => {
    if (onNavigate) {
      onNavigate('/contact?form=true');
    } else {
      window.location.hash = '/contact?form=true';
    }
  };

  const CONTACT_INFO = [
    {
      id: 'phone',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      content: (
        <div className="quality-cta-contact-text">
          <a href={getTelUrl()} className="quality-cta-contact-link">{CONTACT_NUMBER_DISPLAY}</a>
        </div>
      )
    },
    {
      id: 'email',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      content: (
        <div className="quality-cta-contact-text">
          <a href="mailto:info@swastikmixtures.com" className="quality-cta-contact-link">info@swastikmixtures.com</a>
        </div>
      )
    },
    {
      id: 'location',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      content: (
        <div className="quality-cta-contact-text">
          <span>Lucknow,</span>
          <span>Uttar Pradesh, India</span>
        </div>
      )
    }
  ];

  return (
    <section id="quality-part5" className="quality-snap-section quality-cta-sec" aria-label="Build With Confidence - Quality CTA">
      {/* 1. BACKGROUND SVG ASSET (z-index: 0): Faded Skyline, Monument, Silos & Blue Geometric Waves */}
      <img
        src="/swastik_quality_background.svg"
        alt=""
        aria-hidden="true"
        className="quality-cta-bg-skyline"
      />

      {/* 2. BACKGROUND DECORATIONS (z-index: 1): Top-left concentric circles */}
      <div className="quality-cta-bg-circles" aria-hidden="true" />

      {/* 3. FOREGROUND CONTENT WRAPPER (z-index: 2) */}
      <div className="quality-cta-container">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="quality-cta-dark-card"
        >
          {/* ── COLUMN 1: TRUCK IMAGE ── */}
          <div className="quality-cta-truck-col">
            <div className="quality-cta-truck-frame">
              <img
                src="/swastik_ready_mix_truck.svg"
                alt="Swastik Mixtures Ready Mix Concrete Truck Fleet"
                loading="lazy"
                className="quality-cta-truck-img"
              />
            </div>
          </div>

          {/* ── COLUMN 2: CTA CONTENT ── */}
          <div className="quality-cta-content-col">
            {/* Short blue horizontal accent line */}
            <div className="quality-cta-accent-line" aria-hidden="true" />

            {/* Heading */}
            <h2 className="quality-cta-headline">
              <span className="quality-cta-headline-white">BUILD WITH</span><br />
              <span className="quality-cta-headline-blue">CONFIDENCE</span>
            </h2>

            {/* Description */}
            <p className="quality-cta-desc">
              When you choose Swastik Mixtures, you choose quality, reliability and a partner who cares about your project.
            </p>

            {/* CTA Button */}
            <button
              onClick={handleQuoteClick}
              className="quality-cta-button"
              aria-label="Request a Quote"
            >
              <span>REQUEST A QUOTE &gt;</span>
            </button>
          </div>

          {/* ── COLUMN 3: CONTACT DETAILS (with vertical divider) ── */}
          <div className="quality-cta-contact-col">
            <div className="quality-cta-divider" aria-hidden="true" />

            <div className="quality-cta-contact-list">
              {CONTACT_INFO.map((item) => (
                <div key={item.id} className="quality-cta-contact-row">
                  <div className="quality-cta-icon-circle" aria-hidden="true">
                    {item.icon}
                  </div>
                  {item.content}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── BOTTOM-LEFT DECORATIVE CONCRETE BLOCKS + DOT MATRIX ── */}
        <div className="quality-cta-bottom-decor" aria-hidden="true">
          {/* Dot Matrix Pattern */}
          <div className="quality-cta-dot-grid">
            {Array.from({ length: 25 }).map((_, i) => (
              <span key={i} className="quality-cta-dot" />
            ))}
          </div>

          {/* Dual Concrete Cubes */}
          <div className="quality-cta-cubes-pair">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="quality-cta-cube-item large"
            >
              <img
                src="/concrete-fiber-material.svg"
                alt=""
                className="quality-cta-cube-img"
              />
              <div className="quality-cta-cube-shadow large" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="quality-cta-cube-item small"
            >
              <img
                src="/concrete-texture.svg"
                alt=""
                className="quality-cta-cube-img"
              />
              <div className="quality-cta-cube-shadow small" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality5;
