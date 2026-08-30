import React from 'react';
import { motion } from 'framer-motion';
import type { BlogPost } from '../../pages/blog/blog_data';

interface FeaturedArticleProps {
  article: BlogPost;
  supportingArticles: BlogPost[];
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article, supportingArticles }) => {
  return (
    <div className="blog-featured-layout">
      {/* Main Dominant Featured Article Card */}
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="blog-featured-dominant-card"
      >
        <div className="blog-featured-img-wrap">
          <img src={article.image} alt={article.title} className="blog-featured-img" loading="lazy" />
          <span className="blog-featured-badge">FEATURED ARTICLE</span>
        </div>

        <div className="blog-featured-content-wrap">
          <div className="blog-featured-meta">
            <span className="blog-meta-category">{article.category}</span>
            <span className="blog-meta-dot">•</span>
            <span className="blog-meta-date">{article.date}</span>
          </div>

          <h3 className="blog-featured-title">{article.title}</h3>
          <p className="blog-featured-desc">{article.description}</p>

          <button className="btn-primary blog-read-btn">
            READ ARTICLE →
          </button>
        </div>
      </motion.div>

      {/* 2 Supporting Side Articles */}
      <div className="blog-featured-side-list">
        {supportingArticles.map((sub, i) => (
          <motion.div
            key={sub.id}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: "easeOut" }}
            className="blog-supporting-card"
          >
            <div className="blog-supporting-img-wrap">
              <img src={sub.image} alt={sub.title} className="blog-supporting-img" loading="lazy" />
            </div>

            <div className="blog-supporting-content">
              <span className="blog-meta-category">{sub.category}</span>
              <h4 className="blog-supporting-title">{sub.title}</h4>
              <p className="blog-supporting-desc">{sub.description}</p>
              <span className="blog-supporting-link">READ MORE &rarr;</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticle;
