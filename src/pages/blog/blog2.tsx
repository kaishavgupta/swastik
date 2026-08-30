import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Blog2Props {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

interface CategoryItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'ALL',
    label: 'ALL',
  },
  {
    id: 'INDUSTRY INSIGHTS',
    label: 'INDUSTRY INSIGHTS',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    id: 'CONSTRUCTION TIPS',
    label: 'CONSTRUCTION TIPS',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 18h20" />
        <path d="M6 18V4l8 6v8" />
        <path d="M14 10l8 4v4" />
      </svg>
    ),
  },
  {
    id: 'RMC TECHNOLOGY',
    label: 'RMC TECHNOLOGY',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    id: 'PROJECTS',
    label: 'PROJECTS',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="16" y2="10" />
        <line x1="8" y1="14" x2="16" y2="14" />
      </svg>
    ),
  },
  {
    id: 'COMPANY NEWS',
    label: 'COMPANY NEWS',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    ),
  },
];

const INSIGHT_CARDS = [
  {
    id: '01',
    title: 'Expert Insights',
    desc: 'Actionable knowledge from industry professionals.',
    category: 'INDUSTRY INSIGHTS',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    )
  },
  {
    id: '02',
    title: 'Industry Updates',
    desc: 'Latest trends, technologies and innovations.',
    category: 'INDUSTRY INSIGHTS',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    )
  },
  {
    id: '03',
    title: 'Practical Knowledge',
    desc: 'Real-world solutions to everyday construction challenges.',
    category: 'CONSTRUCTION TIPS',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="9" y1="18" x2="15" y2="18" />
        <line x1="10" y1="22" x2="14" y2="22" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    )
  },
  {
    id: '04',
    title: 'Quality Assurance',
    desc: 'Committed to delivering quality, safety and long-lasting results.',
    category: 'RMC TECHNOLOGY',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    )
  },
  {
    id: '05',
    title: 'Project Highlights',
    desc: 'Stories from our projects that build a stronger tomorrow.',
    category: 'PROJECTS',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 18h20" />
        <path d="M5 18v-4a7 7 0 0 1 14 0v4" />
        <path d="M10 10V6a2 2 0 0 1 4 0v4" />
      </svg>
    )
  },
  {
    id: '06',
    title: 'Company Updates',
    desc: 'News and updates from Swastik Mixtures and our team.',
    category: 'COMPANY NEWS',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    )
  }
];

export const Blog2: React.FC<Blog2Props> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory
}) => {
  const [localSearch, setLocalSearch] = useState(searchQuery);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearch);
  };

  const handleCardClick = (category: string) => {
    setSelectedCategory(category);
    const el = document.getElementById('blog-part3') || document.getElementById('blog-part4');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="blog-part2" className="blog-snap-part blog-insights-section" aria-label="Explore Our Insights">
      {/* Decorative SVG Background Layer (Truck on Left, Building on Right, Dots on Top) */}
      <div className="blog-insights-bg-layer" aria-hidden="true" />

      <div className="blog-insights-container">
        {/* ── 1. HEADER AREA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="blog-insights-header"
        >
          {/* Eyebrow with Center Book Icon */}
          <div className="blog-insights-eyebrow-row">
            <span className="blog-insights-eyebrow-text">EXPLORE OUR</span>
            <span className="blog-insights-eyebrow-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </span>
            <span className="blog-insights-eyebrow-text">OUR INSIGHTS</span>
          </div>

          {/* Main Heading (2 Lines on Desktop) */}
          <h2 className="blog-insights-title">
            KNOWLEDGE & UPDATES<br />
            <span>FROM OUR EXPERTS</span>
          </h2>

          {/* Subtitle Description */}
          <p className="blog-insights-desc">
            Discover practical information on ready mix concrete, construction technology,
            quality assurance, project highlights, and Swastik Mixtures news.
          </p>

          {/* Short Blue Decorative Underline */}
          <div className="blog-insights-title-line" aria-hidden="true" />
        </motion.div>

        {/* ── 2. SEARCH BAR COMPONENT ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="blog-insights-search-wrapper"
        >
          <form onSubmit={handleSearchSubmit} className="blog-insights-search-form">
            <div className="blog-insights-search-input-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#526887" strokeWidth="2.2" className="blog-insights-search-icon" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                value={localSearch}
                onChange={e => {
                  setLocalSearch(e.target.value);
                  setSearchQuery(e.target.value);
                }}
                placeholder="Search blog articles..."
                className="blog-insights-search-input"
                aria-label="Search blog articles"
              />
            </div>
            <button type="submit" className="blog-insights-search-btn" aria-label="Submit search">
              <span>SEARCH &rarr;</span>
            </button>
          </form>
        </motion.div>

        {/* ── 3. BROWSE BY CATEGORY PILLS ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="blog-insights-categories-wrapper"
        >
          <span className="blog-insights-category-label">Browse by Category:</span>
          <div className="blog-insights-pills-row" role="tablist">
            {CATEGORIES.map(cat => {
              const isActive = cat.id === selectedCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`blog-category-pill-btn ${isActive ? 'active' : ''}`}
                  role="tab"
                  aria-selected={isActive}
                >
                  {cat.icon && <span className="blog-pill-icon">{cat.icon}</span>}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── 4. SIX INSIGHT CARDS (One Continuous White Panel on Desktop) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="blog-insights-cards-panel"
        >
          {INSIGHT_CARDS.map((card, idx) => (
            <React.Fragment key={card.id}>
              <div
                className="blog-insight-card-item"
                onClick={() => handleCardClick(card.category)}
                role="button"
                tabIndex={0}
              >
                <div className="blog-insight-icon-circle" aria-hidden="true">
                  {card.icon}
                </div>
                <h3 className="blog-insight-card-title">{card.title}</h3>
                <p className="blog-insight-card-desc">{card.desc}</p>
                <div className="blog-insight-card-line" aria-hidden="true" />
              </div>
              {idx < INSIGHT_CARDS.length - 1 && (
                <div className="blog-insight-vertical-divider" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog2;
