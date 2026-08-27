import React from 'react';
import { motion } from 'framer-motion';

interface BlogCategoriesProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

const CATEGORIES_LIST = [
  'ALL',
  'INDUSTRY INSIGHTS',
  'CONSTRUCTION TIPS',
  'RMC TECHNOLOGY',
  'PROJECTS',
  'COMPANY NEWS'
];

export const BlogCategories: React.FC<BlogCategoriesProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory
}) => {
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="blog-part2" className="blog-snap-part blog-discovery-part">
      <div className="blog-container blog-discovery-container">
        {/* HEADER */}
        <div className="blog-section-header text-center">
          <span className="blog-eyebrow block">EXPLORE OUR INSIGHTS</span>
          <h2 className="blog-section-title">KNOWLEDGE & UPDATES FROM OUR EXPERTS</h2>
          <p className="blog-discovery-lead">
            Discover practical information on ready mix concrete, construction technology,
            quality assurance, project highlights, and Swastik Mixtures news.
          </p>
          <div className="blog-title-bar margin-auto" />
        </div>

        {/* SEARCH BAR */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="blog-search-bar-wrap"
        >
          <form onSubmit={handleSearchSubmit} className="blog-search-form">
            <div className="blog-search-input-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#526887" strokeWidth="2" className="blog-search-icon">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search blog articles..."
                className="blog-search-input"
              />
            </div>
            <button type="submit" className="btn-primary blog-search-btn">
              SEARCH
            </button>
          </form>
        </motion.div>

        {/* CATEGORY FILTER BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="blog-category-strip-wrap"
        >
          <span className="blog-category-strip-label">Browse by Category:</span>
          <div className="blog-category-strip">
            {CATEGORIES_LIST.map(cat => {
              const isActive = cat === selectedCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`blog-category-btn ${isActive ? 'active' : ''}`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
