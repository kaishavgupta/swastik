import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS_DATA, type BlogPost } from './blog_data';

interface Blog3Props {
  posts?: BlogPost[];
  onSelectPost?: (post: BlogPost) => void;
  onNavigate?: (path: string) => void;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'INDUSTRY INSIGHTS': (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  'RMC TECHNOLOGY': (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  'CONSTRUCTION TIPS': (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 18h20" />
      <path d="M6 18V4l8 6v8" />
      <path d="M14 10l8 4v4" />
    </svg>
  ),
};

export const Blog3: React.FC<Blog3Props> = ({ posts = BLOG_POSTS_DATA, onSelectPost, onNavigate }) => {
  const featuredPosts = posts.filter(p => p.featured).slice(0, 3);
  const displayPosts = featuredPosts.length >= 3 ? featuredPosts : posts.slice(0, 3);

  const handleViewAll = () => {
    const el = document.getElementById('blog-part4');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate('/blog#blog-part4');
    }
  };

  return (
    <section id="blog-part3" className="blog-snap-part featured-insights-section" aria-label="Featured Insights">
      {/* Decorative SVG Background Layer (Mixer Truck Left, Construction Right) */}
      <div className="featured-insights-bg-layer" aria-hidden="true" />

      <div className="featured-insights-container">
        {/* ── 1. SECTION HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="featured-insights-header"
        >
          <span className="featured-insights-eyebrow">FEATURED INSIGHTS</span>
          <h2 className="featured-insights-title">
            PRACTICAL KNOWLEDGE &<br />
            <span>INDUSTRY UPDATES</span>
          </h2>
          <div className="featured-insights-title-line" aria-hidden="true" />
          <p className="featured-insights-desc">
            Stay informed with expert insights, technical knowledge and industry updates shaping the future of construction.
          </p>
        </motion.div>

        {/* ── 2. THREE FEATURED ARTICLE CARDS ── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="featured-insights-grid"
        >
          {displayPosts.map(post => (
            <div
              key={post.id}
              className="featured-insight-card"
              onClick={() => onSelectPost && onSelectPost(post)}
            >
              {/* Top Image Box with Category Badge */}
              <div className="featured-card-img-wrap">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="featured-card-img"
                />
                <span className="featured-card-badge">
                  {CATEGORY_ICONS[post.category] && (
                    <span className="featured-badge-icon" aria-hidden="true">
                      {CATEGORY_ICONS[post.category]}
                    </span>
                  )}
                  <span>{post.category}</span>
                </span>
              </div>

              {/* Card Body */}
              <div className="featured-card-body">
                {/* Date Row with Calendar Icon */}
                <div className="featured-card-date-row">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span className="featured-card-date-text">{post.date}</span>
                </div>

                {/* Article Title */}
                <h3 className="featured-card-title">{post.title}</h3>

                {/* Article Description */}
                <p className="featured-card-desc">{post.description}</p>

                {/* Read More Link */}
                <div className="featured-card-footer">
                  <button
                    type="button"
                    className="featured-card-readmore-btn"
                    onClick={e => {
                      e.stopPropagation();
                      if (onSelectPost) onSelectPost(post);
                    }}
                    aria-label={`Read more about ${post.title}`}
                  >
                    <span>READ MORE &rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── 3. VIEW ALL ARTICLES BUTTON ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="featured-insights-action-row"
        >
          <button
            type="button"
            onClick={handleViewAll}
            className="featured-insights-viewall-btn"
            aria-label="View All Articles"
          >
            <span>VIEW ALL ARTICLES &rarr;</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog3;
