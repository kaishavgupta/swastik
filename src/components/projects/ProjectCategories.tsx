import React from 'react';
import { motion } from 'framer-motion';

export const ProjectCategories: React.FC = () => {
  const CATEGORIES = [
    {
      title: 'High-Rise',
      sub: 'Buildings',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
        </svg>
      )
    },
    {
      title: 'Roads &',
      sub: 'Highways',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
          <path d="M4 22L8 2M16 2l4 20" />
          <path d="M12 4v4M12 12v4" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      title: 'Bridges &',
      sub: 'Flyovers',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
          <path d="M3 18h18" />
          <path d="M6 18V9a3 3 0 0 1 6 0v9" />
          <path d="M12 18V9a3 3 0 0 1 6 0v9" />
        </svg>
      )
    },
    {
      title: 'Commercial',
      sub: 'Structures',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
          <path d="M3 21h18M3 7l9-4 9 4v14H3V7z" />
          <path d="M9 21v-8h6v8" />
        </svg>
      )
    },
    {
      title: 'Industrial',
      sub: 'Construction',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
          <path d="M2 22h20M4 22V10l6-4v16M10 14l6-4v12" />
          <path d="M18 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 8v14" />
        </svg>
      )
    },
    {
      title: 'Infrastructure',
      sub: 'Projects',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
          <path d="M12 2v20M2 12h20" />
          <path d="M19 19L5 5" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      )
    }
  ];

  return (
    <section id="project-categories" className="project-snap-section project-categories-section">
      <div className="project-container project-categories-container">
        {/* HEADER */}
        <div className="project-section-header text-center">
          <span className="project-eyebrow block">PROJECT CATEGORIES</span>
          <h2 className="project-section-title">WHERE OUR CONCRETE BUILDS</h2>
          <div className="project-title-bar margin-auto" />
        </div>

        {/* 6 CATEGORIES GRID */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="project-categories-grid"
        >
          {CATEGORIES.map((cat, idx) => (
            <div key={idx} className="project-category-card">
              <div className="project-category-icon-wrap">
                {cat.icon}
              </div>
              <div className="project-category-divider" />
              <h3 className="project-category-name">
                <span>{cat.title}</span>
                <span>{cat.sub}</span>
              </h3>
              <div className="project-category-indicator" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
