import React from 'react';
import { motion } from 'framer-motion';
import type { BlogPost } from './blog_data';

interface BlogGridProps {
  posts: BlogPost[];
  allPosts: BlogPost[];
  onSelectPost?: (post: BlogPost) => void;
}

export const BlogGrid: React.FC<BlogGridProps> = ({ posts, allPosts, onSelectPost }) => {
  const popularPosts = allPosts.slice(0, 4);

  return (
    <section id="blog-part4" className="blog-snap-part blog-grid-part">
      <div className="blog-container blog-grid-container">
        <div className="blog-main-grid-layout">
          {/* LEFT 70%: Filtered Main Posts Grid */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="blog-left-grid-col"
          >
            <div className="blog-section-header" style={{ marginBottom: '24px' }}>
              <span className="blog-eyebrow block">ALL ARTICLES</span>
              <h2 className="blog-section-title">MORE FROM SWASTIK MIXTURES</h2>
              <div className="blog-title-bar" />
            </div>

            {posts.length === 0 ? (
              <div className="blog-no-results">
                <h3>No articles found</h3>
                <p>Try adjusting your search query or selecting another category filter.</p>
              </div>
            ) : (
              <div className="blog-cards-grid-3col">
                {posts.map(post => (
                  <div key={post.id} className="blog-card">
                    <div className="blog-card-img-wrap">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        width="300"
                        height="170"
                        className="blog-card-img"
                      />
                      <span className="blog-card-badge">{post.category}</span>
                    </div>

                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span>{post.date}</span>
                      </div>

                      <h3 className="blog-card-title">{post.title}</h3>
                      <p className="blog-card-desc">{post.description}</p>

                      <button
                        onClick={() => onSelectPost && onSelectPost(post)}
                        className="blog-card-readmore"
                      >
                        READ MORE →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* RIGHT 30%: Sidebar Widget Card (About & Popular Posts) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="blog-sidebar-col"
          >
            {/* About Widget */}
            <div className="blog-sidebar-widget">
              <h3 className="blog-widget-title">About Our Blog</h3>
              <p className="blog-widget-text">
                We share knowledge on ready mix concrete, construction best practices,
                industry trends and innovations shaping the future.
              </p>
            </div>

            {/* Popular Posts Widget */}
            <div className="blog-sidebar-widget">
              <h3 className="blog-widget-title">Popular Posts</h3>
              <div className="blog-popular-list">
                {popularPosts.map(post => (
                  <div
                    key={post.id}
                    onClick={() => onSelectPost && onSelectPost(post)}
                    className="blog-popular-item"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      width="64"
                      height="48"
                      className="blog-popular-img"
                    />
                    <div className="blog-popular-info">
                      <span className="blog-popular-item-title">{post.title}</span>
                      <span className="blog-popular-item-date">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
