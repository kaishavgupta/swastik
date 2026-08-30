import React from 'react';
import { motion } from 'framer-motion';

interface HomePart2Props {
  onNavigate?: (path: string) => void;
}

export const HomePart2: React.FC<HomePart2Props> = () => {
  return (
    <section id="home-part-2" className="about-section-fullscreen home-snap-part">
      {/* Full-bleed right-side image */}
      <div className="about-bg-img-col" aria-hidden="true">
        <img
          src="/swastik-concrete-batching-plant.svg"
          alt="Swastik Mixtures Ready Mix Concrete Batching Plant"
          className="about-bg-img"
        />
        <div className="about-img-fade" />
      </div>

      {/* Left text content */}
      <div className="about-left-col">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="about-left-content"
        >
          <span className="about-eyebrow">ABOUT SWASTIK MIXTURES</span>
          <h2 className="about-heading">
            18 Years of<br />Concreting{' '}
            <span className="about-heading-accent">Trust</span>
          </h2>
          <span className="about-divider" />
          <p className="about-paragraph">
            Swastik Mixtures is a trusted Ready Mix Concrete company based
            in Lucknow, Uttar Pradesh, bringing 18+ years of dedicated
            experience to the construction and infrastructure sector.
          </p>
          <p className="about-paragraph">
            From residential builders to large infrastructure contractors,
            we work closely with our customers to understand their
            requirements and deliver concrete solutions suited to their
            project.
          </p>
        </motion.div>
      </div>

      {/* 18+ Floating Badge */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 0.35, duration: 0.75, ease: "easeOut" }}
        className="about-floating-badge"
      >
        <div className="about-badge-icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
        </div>
        <p className="about-badge-num">18+</p>
        <p className="about-badge-txt">YEARS OF<br />CONCRETING TRUST</p>
      </motion.div>

      {/* Bottom Wave */}
      <div className="about-wave-container" aria-hidden="true">
        <svg
          viewBox="0 0 1440 130"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="about-wave-svg"
        >
          <path
            d="M0,65 C180,10 360,110 540,60 C720,10 900,100 1080,55 C1260,10 1380,70 1440,55 L1440,130 L0,130 Z"
            fill="#071A36"
          />
          <path
            d="M0,85 C200,40 400,115 600,75 C800,35 1000,105 1200,70 C1320,50 1390,85 1440,80 L1440,130 L0,130 Z"
            fill="#0868C9"
            fillOpacity="0.45"
          />
        </svg>
      </div>

      {/* Bottom 3-column Info Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
        className="about-info-panel"
      >
        <div className="about-info-item">
          <div className="about-info-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div className="about-info-text">
            <p className="about-info-main">LUCKNOW</p>
            <p className="about-info-sub">UTTAR PRADESH, INDIA</p>
          </div>
        </div>

        <div className="about-info-sep" />

        <div className="about-info-item">
          <div className="about-info-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="about-info-text">
            <p className="about-info-main">READY MIX</p>
            <p className="about-info-sub">CONCRETE</p>
          </div>
        </div>

        <div className="about-info-sep" />

        <div className="about-info-item">
          <div className="about-info-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div className="about-info-text">
            <p className="about-info-main">QUALITY</p>
            <p className="about-info-sub">YOU CAN TRUST</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomePart2;
