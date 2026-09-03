import React from 'react';
import { motion } from 'framer-motion';
import type { BlogPost } from './blog_data';

interface Blog3Props {
  posts: BlogPost[];
  onSelectPost?: (post: BlogPost) => void;
}

export const Blog3: React.FC<Blog3Props> = ({ posts, onSelectPost }) => {
  const featuredPosts = posts.filter(p => p.featured).slice(0, 3);
  const displayPosts = featuredPosts.length > 0 ? featuredPosts : posts.slice(0, 3);

  return (
    <section id="blog-part3" className="blog-snap-part blog-featured-part">
      <div className="blog-container blog-featured-container">
        {/* HEADER */}
        <div className="blog-section-header">
          <span className="blog-eyebrow block">FEATURED INSIGHTS</span>
          <h2 className="blog-section-title">PRACTICAL KNOWLEDGE & INDUSTRY UPDATES</h2>
          <div className="blog-title-bar" />
        </div>

        {/* 3 LARGE FEATURED CARDS GRID */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="blog-featured-grid"
        >
          {displayPosts.map(post => (
            <div key={post.id} className="blog-card blog-featured-card">
              <div className="blog-card-img-wrap">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  width="380"
                  height="220"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Blog3;
