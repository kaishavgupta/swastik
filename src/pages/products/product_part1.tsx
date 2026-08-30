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

  const handleQuoteNav = () => {
    if (onNavigate) {
      onNavigate('/contact?form=true');
    } else {
      window.location.hash = '/contact?form=true';
    }
  };

  const HIGHLIGHTS = [
    {
      title: 'M10 – M60',
      sub: 'Concrete Grade Range',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      title: 'Specialized',
      sub: 'Concrete Solutions',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.31M14 2v7.31M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0" />
        </svg>
      )
    },
    {
      title: 'Consistent',
      sub: 'Quality Assurance',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      )
    },
    {
      title: 'Reliable',
      sub: 'Delivery & Support',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    }
  ];

  return (
    <section id="product-part1" className="product-part-1">
      {/* Full-bleed right-side concrete pouring image (Desktop / 1024px) */}
      <div className="product-part-1__bg-img-col" aria-hidden="true">
        <img
          src={PRODUCT_IMAGES.concretePouring}
          alt="Swastik Mixtures concrete pouring at construction site"
          loading="eager"
          className="product-part-1__bg-img"
        />
        <div className="product-part-1__img-fade" />
      </div>

      <div className="product-part-1__inner">
        {/* Main Content Area: Left Narrative */}
        <div className="product-part-1__content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="product-part-1__left-content"
          >
            <span className="product-part-1__eyebrow">OUR PRODUCTS</span>
            <div className="product-part-1__eyebrow-line" />
            <h1 className="product-part-1__title">
              CONCRETE<br />
              ENGINEERED FOR<br />
              <span className="product-part-1__title-blue">EVERY STRUCTURE.</span>
            </h1>

            <p className="product-part-1__desc">
              From standard concrete grades to specialized solutions, Swastik Mixtures
              delivers concrete designed around different structural and project requirements.
            </p>

            <div className="product-part-1__btn-group">
              <button onClick={scrollToGrades} className="product-part-1__btn-primary">
                EXPLORE GRADES →
              </button>
              <button onClick={handleQuoteNav} className="product-part-1__btn-secondary">
                REQUEST A QUOTE →
              </button>
            </div>
          </motion.div>
        </div>

        {/* Dedicated Responsive Image Block for Tablet (768px) and Mobile (375px) */}
        <div className="product-part-1__responsive-img-wrap" aria-hidden="true">
          <img
            src={PRODUCT_IMAGES.concretePouring}
            alt="Swastik Mixtures concrete pouring at construction site"
            loading="eager"
            className="product-part-1__responsive-img"
          />
        </div>

        {/* 4 Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="product-part-1__cards-grid"
        >
          {HIGHLIGHTS.map((item, idx) => (
            <div key={idx} className="product-part-1__card">
              <div className="product-part-1__card-icon-wrap">
                {item.icon}
              </div>
              <div className="product-part-1__card-info">
                <span className="product-part-1__card-title">{item.title}</span>
                <span className="product-part-1__card-sub">{item.sub}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scoped Bottom Wave */}
      <div className="product-part-1__wave" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="product-part-1__wave-svg"
        >
          <path
            d="M0,32 C240,65 480,10 720,42 C960,74 1200,20 1440,38 L1440,80 L0,80 Z"
            fill="#0875D1"
          />
        </svg>
      </div>
    </section>
  );
};

export default ProductPart1;


