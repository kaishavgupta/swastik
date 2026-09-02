import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HomePart1Props {
  onNavigate?: (path: string) => void;
}

const STATS = [
  {
    id: 'experience',
    main: '18+',
    sub: 'YEARS OF EXPERIENCE',
    big: true,
    svgIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#306497" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    id: 'established',
    label: 'SINCE',
    main: '2009',
    sub: 'ESTABLISHED',
    big: true,
    hasLabel: true,
    svgIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#306497" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
  {
    id: 'location',
    main: 'LUCKNOW',
    sub: 'UTTAR PRADESH, INDIA',
    blue: true,
    svgIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#306497" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    id: 'ready-mix',
    main: 'READY MIX',
    sub: 'CONCRETE SOLUTIONS',
    blue: true,
    svgIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#306497" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: 'quality',
    main: 'QUALITY',
    sub: 'YOU CAN TRUST',
    blue: true,
    isQuality: true,
    svgIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#306497" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

const InformationCards: React.FC = () => {
  return (
    <div className="stats-grid">
      {STATS.map((s) => (
        <div key={s.id} className={`stats-item ${s.isQuality ? 'stats-item--quality' : ''}`}>
          <div className="stats-icon-wrap" aria-hidden="true">
            {s.svgIcon}
          </div>
          <div className="stats-text-wrap">
            {s.hasLabel && <span className="stats-label">{s.label}</span>}
            {s.isQuality ? (
              <div className="stats-quality-content">
                <span className="stats-main color-navy">{s.main}</span>
                <span className="stats-sub">{s.sub}</span>
              </div>
            ) : (
              <>
                <span className={`stats-main ${s.blue ? 'color-blue' : 'color-navy'} ${s.big ? 'size-big' : 'size-normal'}`}>
                  {s.main}
                </span>
                <span className="stats-sub">{s.sub}</span>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export const HomePart1: React.FC<HomePart1Props> = ({ onNavigate }) => {
  const { scrollY } = useScroll();
  const truckY = useTransform(scrollY, [0, 600], [0, 40]);
  const waveY = useTransform(scrollY, [0, 600], [0, 15]);
  const textY = useTransform(scrollY, [0, 600], [0, -15]);
  const statsY = useTransform(scrollY, [0, 600], [0, -10]);

  const handleNav = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.hash = path;
    }
  };

  return (
    <section id="home-part-1" className="hero-section home-snap-part" aria-label="Ready Mix Concrete Hero">
      <div className="hero-flex-layout">
        {/* ── LEFT COLUMN: Typography & CTAs ── */}
        <div className="hero-left-col">
          <motion.div style={{ y: textY }} className="hero-text-content">
            {/* Floating 18+ Years Badge on mobile/tablet */}
            <div className="hero-truck-floating-badge" aria-label="18+ Years of Concreting Trust">
              <div className="hero-truck-badge-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#306497" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <span className="hero-truck-badge-number">18+</span>
              <span className="hero-truck-badge-label">
                YEARS OF<br />CONCRETING TRUST
              </span>
            </div>

            <span className="hero-label">READY MIX CONCRETE</span>
            <h1 className="hero-title">
              BUILDING<span className="br-desktop"><br /></span> STRENGTH.<span className="br-all"><br /></span> DELIVERING<span className="br-desktop"><br /></span> <span className="hero-title-accent">TRUST.</span>
            </h1>
            <p className="hero-paragraph">
              18+ years of dependable Ready Mix Concrete solutions for
              construction and infrastructure across Lucknow.
            </p>

            <div className="hero-buttons">
              <button
                type="button"
                className="btn-primary hero-btn-quote"
                onClick={() => handleNav('/contact?form=true')}
                aria-label="Request a quote for ready mix concrete"
              >
                <span className="btn-icon--left" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
                <span>REQUEST A QUOTE</span>
                <span className="btn-icon--right-chevron" aria-hidden="true">&rarr;</span>
              </button>

              <button
                type="button"
                className="btn-secondary hero-btn-products"
                onClick={() => handleNav('/products')}
                aria-label="Explore ready mix concrete products"
              >
                <span className="btn-icon--left" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </span>
                <span>EXPLORE PRODUCTS</span>
                <span className="btn-icon--right-chevron" aria-hidden="true">&rarr;</span>
              </button>
            </div>

            <div className="hero-location-badge">
              <svg width="14" height="14" viewBox="0 0 20 20" fill="var(--blue)" style={{ flexShrink: 0 }} aria-hidden="true">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 1 1 9.9 9.9L10 18.9l-4.95-4.95a7 7 0 0 1 0-9.9zM10 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" clipRule="evenodd"/>
              </svg>
              <span>
                <strong style={{ color: 'var(--navy)', fontWeight: 700 }}>LOCATION:</strong> LUCKNOW, UTTAR PRADESH, INDIA
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN: Transit Mixer Truck Visual ── */}
        <div className="hero-right-col">
          <motion.div style={{ y: truckY }} className="hero-truck-wrap">
            <img
              src="/swastik_ready_mix_truck.svg"
              alt="Swastik Mixtures Ready Mix Concrete Truck"
              className="hero-truck-visual"
            />
          </motion.div>
          <div className="hero-visual-gradient" aria-hidden="true" />
        </div>
      </div>

      {/* Decorative Wave for Desktop & Mobile */}
      <motion.div style={{ y: waveY }} className="hero-wave-container" aria-hidden="true">
        <svg
          viewBox="0 0 1440 160"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="hero-wave-svg"
        >
          <path
            d="M0,80 C240,20 480,140 720,80 C960,20 1200,130 1440,70 L1440,160 L0,160 Z"
            fill="#172531"
          />
          <path
            d="M0,100 C200,48 440,150 720,95 C960,48 1220,140 1440,88 L1440,160 L0,160 Z"
            fill="#306497"
            fillOpacity="0.75"
          />
        </svg>
      </motion.div>

      {/* ── OVERLAPPING WHITE INFORMATION CONTAINER ── */}
      <div className="hero-stats-wrapper">
        <motion.div style={{ y: statsY }} className="stats-card">
          <InformationCards />
        </motion.div>
      </div>
    </section>
  );
};

export default HomePart1;
