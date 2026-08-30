import React from 'react';
import { motion } from 'framer-motion';

interface BlogHeroProps {
  onExploreClick?: () => void;
  onProjectsClick?: () => void;
}

export const BlogHero: React.FC<BlogHeroProps> = ({ onExploreClick, onProjectsClick }) => {
  return (
    <section id="blog-part1" className="blog-hero-section blog-snap-part">
      {/* Background blueprint grid pattern */}
      <div className="blog-hero-bg-pattern" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="blogHeroGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0875D1" strokeOpacity="0.035" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blogHeroGrid)" />
        </svg>
      </div>

      <div className="blog-container blog-hero-container">
        <div className="blog-hero-layout">
          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="blog-hero-left"
          >
            <span className="blog-eyebrow">SWASTIK MIXTURES</span>
            
            <h1 className="blog-hero-title">
              OUR <span className="text-blue">BLOG</span>
            </h1>

            <p className="blog-hero-subhead">
              Insights, ideas and knowledge from the world of concrete, construction and infrastructure.
            </p>

            <p className="blog-hero-description">
              Explore expert perspectives on Ready Mix Concrete, batching technology, quality testing, construction best practices, and major project developments across Uttar Pradesh.
            </p>

            <div className="blog-hero-actions">
              <button onClick={onExploreClick} className="btn-primary blog-hero-btn">
                EXPLORE ARTICLES ↓
              </button>
              <button onClick={onProjectsClick} className="btn-secondary blog-hero-btn">
                VIEW PROJECTS →
              </button>
            </div>
          </motion.div>

          {/* RIGHT: Visual Asset */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="blog-hero-right"
          >
            <div className="blog-hero-img-wrap">
              <img
                src="/06_rmc_batching_plant.svg"
                alt="Swastik Mixtures Ready Mix Concrete Batching Plant"
                className="blog-hero-img"
                loading="eager"
              />
              <div className="blog-hero-badge">
                <span className="blog-hero-badge-title">KNOWLEDGE HUB</span>
                <span className="blog-hero-badge-sub">Ready Mix Concrete</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator at bottom */}
      <div className="blog-scroll-indicator" onClick={onExploreClick}>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
};

export default BlogHero;
