import React from 'react';
import { motion } from 'framer-motion';

interface AboutPart1Props {
  onNavigate?: (path: string) => void;
}

const ABOUT_STATS = [
  {
    iconUrl: '/icons/experience.svg',
    main: '18+',
    sub1: 'YEARS OF',
    sub2: 'EXPERIENCE',
    big: true,
  },
  {
    iconUrl: '/icons/established.svg',
    label: 'SINCE',
    main: '2009',
    sub1: 'ESTABLISHED',
    big: true,
    hasLabel: true,
  },
  {
    iconUrl: '/icons/location.svg',
    main: 'LUCKNOW',
    sub1: 'UTTAR PRADESH,',
    sub2: 'INDIA',
    blue: true,
  },
  {
    iconUrl: '/icons/ready-mix.svg',
    main: 'READY MIX',
    sub1: 'CONCRETE',
    sub2: 'SOLUTIONS',
    blue: true,
  },
];

const AboutInformationCards: React.FC = () => {
  return (
    <div className="stats-grid">
      {ABOUT_STATS.map((s, i) => (
        <div key={i} className="stats-item">
          <div className="stats-icon-wrap">
            <img src={s.iconUrl} alt="" className="stats-icon-img" />
          </div>
          <div className="stats-text-wrap">
            {s.hasLabel && <p className="stats-label">{s.label}</p>}
            <p className={`stats-main ${s.blue ? 'color-blue' : 'color-navy'} ${s.big ? 'size-big' : 'size-normal'}`}>
              {s.main}
            </p>
            <p className="stats-sub">
              {s.sub1}
              <span className="stats-desktop-br"><br /></span>
              <span className="stats-sub-separator"> </span>
              {s.sub2}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const AboutPart1: React.FC<AboutPart1Props> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.hash = path;
    }
  };

  return (
    <section id="about-part1" className="hero-section home-snap-part">
      <div className="hero-flex-layout">
        {/* Left Column: Eyebrow, Heading, Lead & CTAs */}
        <div className="hero-left-col">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="hero-text-content"
          >
            <span className="hero-label">ABOUT SWASTIK MIXTURES</span>
            <h1 className="hero-title">
              BUILDING<span className="br-desktop"><br /></span> LUCKNOW'S<span className="br-all"><br /></span> RMC CULTURE<span className="br-desktop"><br /></span> <span className="hero-title-accent">SINCE 2009.</span>
            </h1>
            <p className="hero-paragraph">
              Since 2009, Swastik Mixtures has been building a journey rooted in
              consistency, reliability and trust across Lucknow's construction landscape.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => handleNav('/contact')}>
                <span className="btn-icon--left">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
                REQUEST A QUOTE
                <span className="btn-icon--right-chevron">→</span>
              </button>
              <button className="btn-secondary" onClick={() => handleNav('/products')}>
                <span className="btn-icon--left">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </span>
                EXPLORE PRODUCTS
                <span className="btn-icon--right-chevron">→</span>
              </button>
            </div>

            <div className="hero-location-badge">
              <svg width="14" height="14" viewBox="0 0 20 20" fill="var(--blue)" style={{ flexShrink: 0 }}>
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 1 1 9.9 9.9L10 18.9l-4.95-4.95a7 7 0 0 1 0-9.9zM10 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" clipRule="evenodd"/>
              </svg>
              <span>
                <strong style={{ color: 'var(--navy)', fontWeight: 700 }}>LOCATION:</strong> LUCKNOW, UTTAR PRADESH, INDIA
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Immersive Plant/Mixer Visual + Left Soft Fade Gradient */}
        <div className="hero-right-col">
          <motion.img
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            src="/08_Swastik_RMC_Plant.svg"
            alt="Swastik Mixtures Ready Mix Concrete Plant"
            className="hero-truck-visual"
          />
          <div className="hero-visual-gradient" />

          {/* Floating Blue 18+ Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="about-hero-blue-badge"
          >
            <span className="badge-num">18+</span>
            <span className="badge-years">YEARS</span>
            <div className="badge-line" />
            <p className="badge-desc">
              OF TRUSTED<br />
              CONCRETE<br />
              SOLUTIONS
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Wave Transition */}
      <div className="hero-wave-container">
        <img src="/swastik-wave.svg" alt="" className="hero-wave-svg" />
      </div>

      {/* Floating Statistics Strip Overlapping Bottom Transition */}
      <div className="hero-stats-wrapper">
        <div className="stats-card">
          <AboutInformationCards />
        </div>
      </div>
    </section>
  );
};

export default AboutPart1;
