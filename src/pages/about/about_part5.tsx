import React from 'react';
import { motion } from 'framer-motion';

interface AboutPart5Props {
  onNavigate?: (path: string) => void;
}

export const AboutPart5: React.FC<AboutPart5Props> = () => {
  const LEADERS = [
    {
      name: 'Uma Shankar Mittal',
      role: 'Founding Member'
    },
    {
      name: 'Anand Singhal',
      role: 'Founding Member'
    },
    {
      name: 'Neeraj Mittal',
      role: 'Director'
    },
    {
      name: 'Nikhil Mittal',
      role: 'Director'
    }
  ];

  return (
    <section id="about-part5" className="about-leadership-section">
      <div className="about-leadership-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="about-leadership-header"
        >
          <span className="about-leadership-eyebrow">LEADERSHIP</span>
          <div className="about-leadership-eyebrow-line" />
          <h2 className="about-leadership-heading">
            Leadership Built On <span className="text-blue-accent">Experience.</span>
          </h2>
          <p className="about-leadership-subheading">
            Strong leadership, clear vision and a commitment to excellence drive Swastik Mixtures forward every day.
          </p>
        </motion.div>

        {/* Desktop, Tablet & Mobile Leadership Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="about-leadership-cards-grid"
        >
          {LEADERS.map((leader, idx) => (
            <div key={idx} className="about-leadership-card">
              <div className="about-leadership-avatar-wrap">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="about-leadership-info">
                <h3 className="about-leadership-name">{leader.name}</h3>
                <p className="about-leadership-role">{leader.role}</p>
              </div>
              <div className="about-leadership-accent-line" />
              <span className="about-leadership-mobile-arrow">›</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Bottom Wave Transition */}
      <div className="about-leadership-wave-container" aria-hidden="true">
        <img src="/swastik-wave.svg" alt="" className="about-leadership-wave-svg" />
      </div>
    </section>
  );
};

export default AboutPart5;
