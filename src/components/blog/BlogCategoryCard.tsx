import React from 'react';
import { motion } from 'framer-motion';

export interface CategoryItem {
  num: string;
  title: string;
  desc: string;
  image: string;
  categoryFilterKey: string;
}

interface BlogCategoryCardProps {
  item: CategoryItem;
  index: number;
  onSelectCategory: (categoryKey: string) => void;
}

export const BlogCategoryCard: React.FC<BlogCategoryCardProps> = ({ item, index, onSelectCategory }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={() => onSelectCategory(item.categoryFilterKey)}
      className="blog-category-card"
    >
      <div className="blog-cat-img-overlay" aria-hidden="true">
        <img src={item.image} alt="" className="blog-cat-bg-img" loading="lazy" />
        <div className="blog-cat-gradient" />
      </div>

      <div className="blog-cat-top-bar">
        <span className="blog-cat-num">{item.num}</span>
        <div className="blog-cat-arrow-circle">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>

      <div className="blog-cat-content">
        <h3 className="blog-cat-title">{item.title}</h3>
        <p className="blog-cat-desc">{item.desc}</p>
      </div>
    </motion.div>
  );
};

export default BlogCategoryCard;
