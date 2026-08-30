import React from 'react';
import { motion } from 'framer-motion';

export const AboutPart4b: React.FC = () => {
  const CHECKLIST_LEFT = [
    'RMC Batching Plant',
    'Concrete Pumps',
    'Material Handling'
  ];

  const CHECKLIST_RIGHT = [
    'Transit Mixers',
    'Quality-Control Lab',
    'Modern Equipment'
  ];

  const TECH_CARDS = [
    {
      title: 'RMC Batching Plant',
      img: '/01_RMC_Batching_Plant.svg',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20h20M4 20V10l4-2v12M12 20V6l4-2v16M20 20v-8l-4-2" />
        </svg>
      )
    },
    {
      title: 'Transit Mixers',
      img: '/02_Transit_Mixers.svg',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    },
    {
      title: 'Concrete Pumps',
      img: '/03_Concrete_Pumps.svg',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v8M4.93 10.93l1.41 1.41M2 18h20M12 10a4 4 0 0 0-4 4v6h8v-6a4 4 0 0 0-4-4z" />
        </svg>
      )
    },
    {
      title: 'Material Handling',
      img: '/04_Material_Handling.svg',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    },
    {
      title: 'Quality-Control Lab',
      img: '/05_Quality_Control_Lab.svg',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.31M14 2v7.31M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0" />
        </svg>
      )
    },
    {
      title: 'Modern Equipment',
      img: '/06_Modern_Equipment.svg',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    }
  ];

  const STATS = [
    {
      num: '1+',
      title: 'RMC Batching Plant',
      sub: 'State-of-the-art facility',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20h20M4 20V10l4-2v12M12 20V6l4-2v16M20 20v-8l-4-2" />
        </svg>
      )
    },
    {
      num: '20+',
      title: 'Modern Transit Mixers',
      sub: 'Well-maintained fleet',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    },
    {
      num: '50+',
      title: 'Skilled Professionals',
      sub: 'Experienced & dedicated team',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    },
    {
      num: '100%',
      title: 'Quality Commitment',
      sub: 'Consistent. Reliable. Trusted.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      )
    }
  ];

  return (
    <section id="about-technology" className="about-tech-independent-section">
      <div className="about-tech-wrapper">
        {/* ── TOP TWO-COLUMN AREA: Left Narrative & Checklist, Right 3x2 Image Cards (Desktop / Tablet) ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="about-tech-top-layout"
        >
          {/* Left Column (Desktop) / Top Center (Tablet & Mobile) */}
          <div className="about-tech-narrative-col">
            <span className="about-tech-eyebrow">TECHNOLOGY & INFRASTRUCTURE</span>
            <div className="about-tech-eyebrow-line" />
            <h2 className="about-tech-heading">
              Engineered For<br />
              <span className="text-blue-accent">Consistency</span>
            </h2>
            <p className="about-tech-paragraph">
              Our modern RMC plant, advanced technology and well-maintained fleet
              ensure high-quality concrete and timely delivery at every site.
            </p>

            <div className="about-tech-checklist-dual-col">
              {/* Left Checklist Column */}
              <div className="about-tech-checklist-subcol">
                {CHECKLIST_LEFT.map((item, idx) => (
                  <div key={idx} className="about-checklist-row">
                    <span className="about-check-badge">✓</span>
                    <span className="about-checklist-label">{item}</span>
                  </div>
                ))}
              </div>

              {/* Right Checklist Column */}
              <div className="about-tech-checklist-subcol">
                {CHECKLIST_RIGHT.map((item, idx) => (
                  <div key={idx} className="about-checklist-row">
                    <span className="about-check-badge">✓</span>
                    <span className="about-checklist-label">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop & Tablet Gallery Grid */}
          <div className="about-tech-gallery-col desktop-tablet-gallery">
            <div className="about-tech-gallery-grid">
              {TECH_CARDS.map((card, idx) => (
                <div key={idx} className="about-tech-gallery-card">
                  <img src={card.img} alt={card.title} className="about-tech-gallery-img" />
                  <div className="about-tech-gallery-overlay">
                    <div className="about-tech-card-badge-icon">{card.icon}</div>
                    <span className="about-tech-gallery-title">{card.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── MOBILE EQUIPMENT LIST (HORIZONTAL ROWS WITH THUMBNAIL ON RIGHT) ── */}
        <div className="about-tech-mobile-equipment-list">
          {TECH_CARDS.map((card, idx) => (
            <div key={idx} className="about-tech-mobile-equipment-row">
              <div className="about-tech-mobile-icon-badge">{card.icon}</div>
              <span className="about-tech-mobile-equipment-title">{card.title}</span>
              <div className="about-tech-mobile-thumb-wrap">
                <img src={card.img} alt={card.title} className="about-tech-mobile-thumb-img" />
              </div>
            </div>
          ))}
        </div>

        {/* ── BOTTOM STATISTICS PANEL ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="about-tech-stats-strip"
        >
          {STATS.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className="about-tech-stat-item">
                <div className="about-tech-stat-icon-wrap">{stat.icon}</div>
                <div className="about-tech-stat-content">
                  <span className="about-tech-stat-number">{stat.num}</span>
                  <h4 className="about-tech-stat-title">{stat.title}</h4>
                  <p className="about-tech-stat-sub">{stat.sub}</p>
                </div>
                <span className="about-tech-stat-mobile-arrow">›</span>
              </div>
              {idx < STATS.length - 1 && <div className="about-tech-stat-divider" />}
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Decorative Bottom Wave Transition */}
      <div className="about-tech-wave-container" aria-hidden="true">
        <img src="/swastik-wave.svg" alt="" className="about-tech-wave-svg" />
      </div>
    </section>
  );
};

export default AboutPart4b;
