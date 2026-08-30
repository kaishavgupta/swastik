import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS_DATA, type BlogPost } from './blog_data';

interface Blog4Props {
  posts?: BlogPost[];
  allPosts?: BlogPost[];
  onSelectPost?: (post: BlogPost) => void;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'INDUSTRY INSIGHTS': (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  'RMC TECHNOLOGY': (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  'CONSTRUCTION TIPS': (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 18h20" />
      <path d="M6 18V4l8 6v8" />
      <path d="M14 10l8 4v4" />
    </svg>
  ),
  'PROJECTS': (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="16" y2="14" />
    </svg>
  ),
  'COMPANY NEWS': (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 5L6 9H2v6h4l5 4V5z" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  ),
};

export const Blog4: React.FC<Blog4Props> = ({
  posts = BLOG_POSTS_DATA,
  allPosts = BLOG_POSTS_DATA,
  onSelectPost
}) => {
  // Use first 5 posts for Popular Posts
  const popularPosts = allPosts.slice(0, 5);

  const handlePostClick = (post: BlogPost) => {
    if (onSelectPost) {
      onSelectPost(post);
    }
  };

  const handleViewAllPosts = () => {
    const el = document.getElementById('blog-part2');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="blog-part4" className="blog-snap-part all-articles-section" aria-label="All Articles">
      {/* Decorative SVG Background Layer (Truck Left, Construction Right) */}
      <div className="all-articles-bg-layer" aria-hidden="true" />

      <div className="all-articles-container">
        {/* ── 1. SECTION HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="all-articles-header"
        >
          <span className="all-articles-eyebrow">ALL ARTICLES</span>
          <h2 className="all-articles-title">MORE FROM SWASTIK MIXTURES</h2>
          <div className="all-articles-title-line" aria-hidden="true" />
          <p className="all-articles-desc">
            Explore expert insights, industry best practices and innovative solutions shaping the future of construction.
          </p>
        </motion.div>

        {/* ── 2. MAIN LAYOUT (Articles Grid on Left, Sidebar on Right) ── */}
        <div className="all-articles-main-layout">
          {/* LEFT AREA: Article Cards Grid (3 Columns on Desktop) */}
          <div className="all-articles-left-col">
            {posts.length === 0 ? (
              <div className="all-articles-no-results">
                <h3>No articles found</h3>
                <p>Try adjusting your search query or selecting another category filter above.</p>
              </div>
            ) : (
              <div className="all-articles-cards-grid">
                {posts.map(post => (
                  <div
                    key={post.id}
                    className="all-article-card"
                    onClick={() => handlePostClick(post)}
                  >
                    {/* Top Image Wrap with Category Badge */}
                    <div className="all-article-img-wrap">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="all-article-img"
                      />
                      <span className="all-article-badge">
                        {CATEGORY_ICONS[post.category] && (
                          <span className="all-article-badge-icon" aria-hidden="true">
                            {CATEGORY_ICONS[post.category]}
                          </span>
                        )}
                        <span>{post.category}</span>
                      </span>
                    </div>

                    {/* Card Content Body */}
                    <div className="all-article-body">
                      {/* Date Row */}
                      <div className="all-article-date-row">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span className="all-article-date-text">{post.date}</span>
                      </div>

                      {/* Title */}
                      <h3 className="all-article-title">{post.title}</h3>

                      {/* Description */}
                      <p className="all-article-desc">{post.description}</p>

                      {/* Read More Button Link */}
                      <div className="all-article-footer">
                        <button
                          type="button"
                          className="all-article-readmore-btn"
                          onClick={e => {
                            e.stopPropagation();
                            handlePostClick(post);
                          }}
                          aria-label={`Read more about ${post.title}`}
                        >
                          <span>READ MORE &rarr;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR (About Our Blog + Popular Posts) */}
          <aside className="all-articles-sidebar-col" aria-label="Blog Sidebar">
            {/* 1. About Our Blog Card */}
            <div className="all-articles-sidebar-card">
              <h3 className="all-articles-widget-title">About Our Blog</h3>
              <div className="all-articles-widget-line" aria-hidden="true" />
              <p className="all-articles-widget-desc">
                We share knowledge on ready mix concrete, construction best practices,
                industry trends and innovations shaping the future.
              </p>
            </div>

            {/* 2. Popular Posts Card */}
            <div className="all-articles-sidebar-card">
              <h3 className="all-articles-widget-title">Popular Posts</h3>
              <div className="all-articles-widget-line" aria-hidden="true" />
              <div className="all-articles-popular-list">
                {popularPosts.map(post => (
                  <div
                    key={post.id}
                    onClick={() => handlePostClick(post)}
                    className="all-articles-popular-item"
                    role="button"
                    tabIndex={0}
                  >
                    <div className="all-articles-popular-img-wrap">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="all-articles-popular-img"
                      />
                    </div>
                    <div className="all-articles-popular-info">
                      <h4 className="all-articles-popular-title">{post.title}</h4>
                      <span className="all-articles-popular-date">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Posts Button */}
              <div className="all-articles-widget-action">
                <button
                  type="button"
                  onClick={handleViewAllPosts}
                  className="all-articles-viewall-posts-btn"
                  aria-label="View All Posts"
                >
                  <span>VIEW ALL POSTS &rarr;</span>
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Blog4;
