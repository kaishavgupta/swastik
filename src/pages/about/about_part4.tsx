import React from 'react';
import { motion } from 'framer-motion';

export const AboutPart4: React.FC = () => {
  const VALUES = [
    {
      title: 'Consistency',
      desc: 'Delivering quality consistently in every batch.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: 'Reliability',
      desc: 'Dependable concrete solutions you can trust.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <polyline points="17 11 19 13 23 9" />
        </svg>
      )
    },
    {
      title: 'Technical Excellence',
      desc: 'Skilled engineers, modern equipment and advanced processes.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    },
    {
      title: 'Customer Focused',
      desc: 'Understanding your needs and delivering solutions that create value.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: 'Quality First',
      desc: 'Strict quality control and testing for stronger structures.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      )
    },
    {
      title: 'Professional Support',
      desc: 'Expert support from planning to project completion.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      )
    }
  ];

  const TECH_ASSETS = [
    { title: 'RMC Batching Plant', img: '/01_RMC_Batching_Plant.svg' },
    { title: 'Transit Mixers', img: '/02_Transit_Mixers.svg' },
    { title: 'Concrete Pumps', img: '/03_Concrete_Pumps.svg' },
    { title: 'Material Handling', img: '/04_Material_Handling.svg' },
    { title: 'Quality-Control Lab', img: '/05_Quality_Control_Lab.svg' },
    { title: 'Modern Equipment', img: '/06_Modern_Equipment.svg' }
  ];

  return (
    <section id="about-part4" className="about-values-tech-section">
      <div className="about-values-tech-wrapper">
        {/* ── BLOCK A: WHAT WE STAND FOR ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="about-block-a"
        >
          <div className="about-block-header">
            <span className="about-block-eyebrow">WHAT WE STAND FOR</span>
            <div className="about-block-eyebrow-line" />
            <h2 className="about-block-heading">
              Driven By <span className="text-blue-accent">Values.</span> Built On Trust.
            </h2>
            <p className="about-block-subheading">
              Our values define who we are and how we deliver.<br className="values-sub-br" />
              They guide our people, our processes and our partnerships.
            </p>
          </div>

          <div className="about-values-row-grid">
            {VALUES.map((item, index) => (
              <div key={index} className="about-value-item-card">
                <div className="about-value-item-icon-wrap">{item.icon}</div>
                <h3 className="about-value-item-title">{item.title}</h3>
                <div className="about-value-item-accent-line" />
                <p className="about-value-item-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── BLOCK B: TECHNOLOGY & INFRASTRUCTURE ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="about-block-b"
        >
          {/* Left Column: Narrative & Checklist */}
          <div className="about-tech-narrative-col">
            <span className="about-tech-eyebrow">TECHNOLOGY & INFRASTRUCTURE</span>
            <h2 className="about-tech-heading">
              Engineered For<br />
              <span className="text-blue-accent">Consistency</span>
            </h2>
            <p className="about-tech-paragraph">
              Our modern RMC plant, advanced technology and well-maintained fleet
              ensure high-quality concrete and timely delivery at every site.
            </p>

            <div className="about-tech-checklist-grid">
              <div className="about-checklist-row">
                <span className="about-check-badge">✓</span>
                <span className="about-checklist-label">RMC Batching Plant</span>
              </div>
              <div className="about-checklist-row">
                <span className="about-check-badge">✓</span>
                <span className="about-checklist-label">Transit Mixers</span>
              </div>
              <div className="about-checklist-row">
                <span className="about-check-badge">✓</span>
                <span className="about-checklist-label">Concrete Pumps</span>
              </div>
              <div className="about-checklist-row">
                <span className="about-check-badge">✓</span>
                <span className="about-checklist-label">Quality-Control Lab</span>
              </div>
              <div className="about-checklist-row">
                <span className="about-check-badge">✓</span>
                <span className="about-checklist-label">Material Handling</span>
              </div>
              <div className="about-checklist-row">
                <span className="about-check-badge">✓</span>
                <span className="about-checklist-label">Modern Equipment</span>
              </div>
            </div>
          </div>

          {/* Right Column: 2x3 Portfolio Gallery */}
          <div className="about-tech-gallery-col">
            <div className="about-tech-gallery-grid">
              {TECH_ASSETS.map((asset, idx) => (
                <div key={idx} className="about-tech-gallery-card">
                  <img src={asset.img} alt={asset.title} className="about-tech-gallery-img" />
                  <div className="about-tech-gallery-overlay">
                    <span className="about-tech-gallery-title">{asset.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave Transition */}
      <div className="about-part4-wave-container" aria-hidden="true">
        <img src="/swastik-wave.svg" alt="" className="about-part4-wave-svg" />
      </div>
    </section>
  );
};

export default AboutPart4;
