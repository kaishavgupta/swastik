import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCT_IMAGES } from './product_assets';

interface ProductPart1Props {
  onNavigate?: (path: string) => void;
}

export const ProductPart1: React.FC<ProductPart1Props> = ({ onNavigate }) => {
  const scrollToGrades = () => {
    const el = document.getElementById('product-part2');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="product-part1" className="product-snap-part product-hero-part">
      <div className="product-hero-bg-gradient" aria-hidden="true" />

      <div className="product-container product-hero-container">
        {/* LEFT COLUMN: Hero Typography & Actions */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="product-hero-left"
        >
          <span className="product-eyebrow">OUR PRODUCTS</span>
          <h1 className="product-hero-title">
            CONCRETE<br />
            ENGINEERED FOR<br />
            <span className="product-title-blue">EVERY STRUCTURE.</span>
          </h1>

          <div className="product-hero-divider" />

          <p className="product-hero-lead">
            From standard concrete grades to specialized solutions, Swastik Mixtures
            delivers concrete designed around different structural and project requirements.
          </p>

          <div className="product-hero-buttons">
            <button onClick={scrollToGrades} className="btn-primary product-btn-primary">
              EXPLORE GRADES →
            </button>
            <button onClick={() => onNavigate && onNavigate('/contact')} className="btn-secondary product-btn-secondary">
              REQUEST A QUOTE →
            </button>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Concrete Pouring Closeup SVG Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="product-hero-right"
        >
          <div className="product-hero-img-wrap">
            <img
              src={PRODUCT_IMAGES.concretePouring}
              alt="Swastik Mixtures concrete pouring closeup"
              loading="eager"
              width="700"
              height="460"
              className="product-hero-img"
            />
            <div className="product-hero-img-fade" />
          </div>
        </motion.div>
      </div>

      {/* BOTTOM HIGHLIGHT STRIP */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="product-hero-highlights-wrap"
      >
        <div className="product-container product-highlights-container">
          <div className="product-highlight-card">
            <div className="product-highlight-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="product-highlight-text">
              <span className="product-highlight-title">M10 – M60</span>
              <span className="product-highlight-sub">Concrete Grade Range</span>
            </div>
          </div>

          <div className="product-highlight-card">
            <div className="product-highlight-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="product-highlight-text">
              <span className="product-highlight-title">Specialized</span>
              <span className="product-highlight-sub">Concrete Solutions</span>
            </div>
          </div>

          <div className="product-highlight-card">
            <div className="product-highlight-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="product-highlight-text">
              <span className="product-highlight-title">Consistent</span>
              <span className="product-highlight-sub">Quality Assurance</span>
            </div>
          </div>

          <div className="product-highlight-card">
            <div className="product-highlight-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                <rect x="1" y="3" width="15" height="13" rx="2" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div className="product-highlight-text">
              <span className="product-highlight-title">Reliable</span>
              <span className="product-highlight-sub">Delivery & Support</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* BOTTOM DECORATIVE WAVE */}
      <div className="product-hero-wave-wrap" aria-hidden="true">
        <img src="/swastik-wave.svg" alt="" className="product-hero-wave-img" />
      </div>
    </section>
  );
};
