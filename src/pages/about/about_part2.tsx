import React from 'react';
import { motion } from 'framer-motion';

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

export const AboutPart2: React.FC = () => {
  return (
    <section id="about-part2" className="hero-section home-snap-part about-part2-section">
      <div className="hero-flex-layout">
        {/* Left Column: Eyebrow, Heading, Paragraphs */}
        <div className="hero-left-col">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="hero-text-content"
          >
            <span className="hero-label">WHO WE ARE</span>
            <h2 className="hero-title">
              MORE THAN<span className="br-desktop"><br /></span> CONCRETE.<span className="br-all"><br /></span> <span className="hero-title-accent">A PARTNER IN<br />BUILDING.</span>
            </h2>
            <div className="about-title-bar-accent" />

            <div className="about-paragraphs-group">
              <p className="hero-paragraph">
                Swastik Mixtures is a trusted Ready Mix Concrete company rooted in Lucknow, with a journey spanning 18+ years.
              </p>
              <p className="hero-paragraph">
                Our journey began with a young RMC plant and has grown into a trusted concrete solutions partner for builders, architects and infrastructure contractors.
              </p>
              <p className="hero-paragraph">
                We combine technical expertise, modern infrastructure and a customer-first approach to deliver concrete that builds stronger, lasts longer and creates value.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Immersive Plant Visual + Left Soft Fade Gradient + Floating Cards */}
        <div className="hero-right-col">
          <motion.img
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            src="/swastik-concrete-batching-plant.svg"
            alt="Swastik Mixtures Concrete Batching Plant"
            className="hero-truck-visual"
          />
          <div className="hero-visual-gradient" />

          {/* Floating White Experience Card Overlapping Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="about-part2-white-card"
          >
            <div className="about-part2-card-row">
              <div className="about-part2-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className="about-part2-card-text">
                <span className="about-part2-num">18+</span>
                <span className="about-part2-sub">YEARS OF<br />EXPERIENCE</span>
              </div>
            </div>

            <div className="about-part2-card-divider" />

            <div className="about-part2-card-row">
              <div className="about-part2-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
                </svg>
              </div>
              <div className="about-part2-card-text">
                <span className="about-part2-label">SINCE</span>
                <span className="about-part2-num">2009</span>
                <span className="about-part2-sub">ESTABLISHED</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Blue 18+ Badge (Right side) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
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

export default AboutPart2;
