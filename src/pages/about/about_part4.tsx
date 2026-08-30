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

  return (
    <section id="about-part4" className="about-values-section">
      <div className="about-values-wrapper">
        {/* ── HEADER: WHAT WE STAND FOR ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="about-values-header"
        >
          <span className="about-values-eyebrow">WHAT WE STAND FOR</span>
          <div className="about-values-eyebrow-line" />
          <h2 className="about-values-heading">
            Driven By <span className="text-blue-accent">Values.</span> Built On Trust.
          </h2>
          <p className="about-values-subheading">
            Our values define who we are and how we deliver.<br className="values-sub-br" />
            They guide our people, our processes and our partnerships.
          </p>
        </motion.div>

        {/* ── 6 VALUE CARDS ROW/GRID ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="about-values-cards-grid"
        >
          {VALUES.map((item, index) => (
            <div key={index} className="about-value-item-card">
              <div className="about-value-item-icon-wrap">{item.icon}</div>
              <div className="about-value-item-info">
                <h3 className="about-value-item-title">{item.title}</h3>
                <div className="about-value-item-accent-line" />
                <p className="about-value-item-desc">{item.desc}</p>
              </div>
              <span className="about-values-mobile-arrow">›</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Bottom Wave Transition */}
      <div className="about-values-wave-container" aria-hidden="true">
        <img src="/swastik-wave.svg" alt="" className="about-values-wave-svg" />
      </div>
    </section>
  );
};

export default AboutPart4;
