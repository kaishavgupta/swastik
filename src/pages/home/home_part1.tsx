import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HomePart1Props {
  onNavigate?: (path: string) => void;
}

const STATS = [
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
  {
    iconUrl: '/icons/quality.svg',
    main: 'QUALITY',
    sub1: 'YOU CAN',
    sub2: 'TRUST',
    blue: true,
  },
];

const InformationCards: React.FC = () => {
  return (
    <div className="stats-grid">
      {STATS.map((s, i) => (
        <div key={i} className={`stats-item ${i === 4 ? 'stats-item--quality' : ''}`}>
          <div className="stats-icon-wrap">
            <img src={s.iconUrl} alt="" className="stats-icon-img" />
          </div>
          <div className="stats-text-wrap">
            {s.hasLabel && <p className="stats-label">{s.label}</p>}
            {i === 4 ? (
              <>
                <div className="stats-quality-desktop">
                  <p className={`stats-main ${s.blue ? 'color-blue' : 'color-navy'} ${s.big ? 'size-big' : 'size-normal'}`}>
                    {s.main}
                  </p>
                  <p className="stats-sub">
                    {s.sub1}<br />{s.sub2}
                  </p>
                </div>
                <p className="stats-quality-mobile">QUALITY YOU CAN TRUST</p>
              </>
            ) : (
              <>
                <p className={`stats-main ${s.blue ? 'color-blue' : 'color-navy'} ${s.big ? 'size-big' : 'size-normal'}`}>
                  {s.main}
                </p>
                <p className="stats-sub">
                  {s.sub1}
                  <span className="stats-desktop-br"><br /></span>
                  <span className="stats-sub-separator"> </span>
                  {s.sub2}
                </p>
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
    <section id="home-part-1" className="hero-section home-snap-part">
      <div className="hero-flex-layout">
        {/* Hero Left Column */}
        <div className="hero-left-col">
          <motion.div style={{ y: textY }} className="hero-text-content">
            <span className="hero-label">READY MIX CONCRETE</span>
            <h1 className="hero-title">
              BUILDING<span className="br-desktop"><br /></span> STRENGTH.<span className="br-all"><br /></span> DELIVERING<span className="br-desktop"><br /></span> <span className="hero-title-accent">TRUST.</span>
            </h1>
            <p className="hero-paragraph">
              18+ years of dependable Ready Mix Concrete solutions for
              construction and infrastructure across Lucknow.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => handleNav('/contact?form=true')}>
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

        {/* Hero Right Column */}
        <div className="hero-right-col">
          <motion.img
            style={{ y: truckY }}
            src="/swastik_ready_mix_truck.svg"
            alt="Swastik Mixtures Ready Mix Concrete Truck"
            className="hero-truck-visual"
          />
          <div className="hero-visual-gradient" />
        </div>
      </div>

      {/* Decorative Wave */}
      <motion.div style={{ y: waveY }} className="hero-wave-container">
        <img src="/swastik-wave.svg" alt="" className="hero-wave-svg" />
      </motion.div>

      {/* Bottom Statistics Card */}
      <div className="hero-stats-wrapper">
        <motion.div style={{ y: statsY }} className="stats-card">
          <InformationCards />
        </motion.div>
      </div>

      {/* Mobile Construction Background */}
      <div className="hero-construction-wrap" aria-hidden="true">
        <div className="hero-construction-fade" />
        <img
          src="/swastik_construction_site.svg"
          alt=""
          className="mob-construction-img"
        />
      </div>
      
    </section>
  );
};

export default HomePart1;

