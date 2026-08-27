import React from 'react';
import { motion } from 'framer-motion';

export const BlogHero: React.FC = () => {
  const scrollToSearch = () => {
    const el = document.getElementById('blog-part2');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="blog-part1" className="blog-snap-part blog-hero-part">
      <div className="blog-hero-layout">
        {/* LEFT COLUMN: Dark Blue / Charcoal Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="blog-hero-left"
        >
          <span className="blog-eyebrow">OUR BLOG</span>

          <h1 className="blog-hero-title">
            BLOG & INSIGHTS
          </h1>

          <div className="blog-title-line" />

          <p className="blog-hero-lead">
            News, updates and expert insights from the world of ready mix concrete,
            construction and infrastructure.
          </p>

          <button onClick={scrollToSearch} className="btn-primary blog-hero-cta-btn">
            EXPLORE ARTICLES →
          </button>
        </motion.div>

        {/* RIGHT COLUMN: Swastik RMC Plant Imagery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="blog-hero-right"
        >
          <div className="blog-hero-img-wrap">
            <img
              src="/08_Swastik_RMC_Plant.svg"
              alt="Swastik Mixtures Ready Mix Concrete Batching Plant"
              loading="eager"
              width="800"
              height="500"
              className="blog-hero-plant-img"
            />
            <div className="blog-hero-img-overlay" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
