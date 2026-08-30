import React from 'react';
import { motion } from 'framer-motion';
import type { BlogPost } from '../../pages/blog/blog_data';

interface ArticleCardProps {
  post: BlogPost;
  index: number;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="blog-grid-card"
    >
      <div className="blog-card-img-wrap">
        <img src={post.image} alt={post.title} className="blog-card-img" loading="lazy" />
        <span className="blog-card-category">{post.category}</span>
      </div>

      <div className="blog-card-body">
        <span className="blog-card-date">{post.date}</span>
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-desc">{post.description}</p>
        <span className="blog-card-readmore">READ MORE &rarr;</span>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
