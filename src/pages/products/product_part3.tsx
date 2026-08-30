import React, { useState } from 'react';
import { PRODUCT_IMAGES } from './product_assets';

interface ProductPart3Props {
  onNavigate?: (path: string) => void;
}

interface SolutionItem {
  num: string;
  title: string;
  desc: string;
  image: string;
  altText: string;
  link: string;
  icon: React.ReactNode;
}

const SOLUTIONS: SolutionItem[] = [
  {
    num: '01',
    title: 'M40+ SELF-COMPACTING CONCRETE (SCC)',
    desc: 'Flows and consolidates under its own weight without vibration.',
    image: PRODUCT_IMAGES.concretePouring,
    altText: 'Swastik Mixtures M40+ self-compacting concrete SCC',
    link: '/contact?solution=scc',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    )
  },
  {
    num: '02',
    title: 'M30–M45 HIGH STRENGTH CONCRETE',
    desc: 'Formulated for demanding structural performance requirements.',
    image: PRODUCT_IMAGES.constructionSite,
    altText: 'Swastik Mixtures M30-M45 high strength concrete',
    link: '/contact?solution=high-strength',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11" />
      </svg>
    )
  },
  {
    num: '03',
    title: 'WATERPROOF CONCRETE',
    desc: 'Engineered for reduced permeability in moisture-exposed structures.',
    image: PRODUCT_IMAGES.waterproofConcrete,
    altText: 'Swastik Mixtures waterproof concrete channel',
    link: '/contact?solution=waterproof',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    num: '04',
    title: 'FIBER REINFORCED CONCRETE (FRC)',
    desc: 'Enhanced with fibers for improved crack resistance and durability.',
    image: PRODUCT_IMAGES.fiberConcrete,
    altText: 'Swastik Mixtures fiber reinforced concrete FRC',
    link: '/contact?solution=frc',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
      </svg>
    )
  }
];

const FEATURES = [
  {
    title: '25+',
    sub1: 'Specialized Solutions',
    sub2: 'Engineered for every construction need',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    )
  },
  {
    title: 'High',
    sub1: 'Performance Concrete',
    sub2: 'Delivering strength, durability & reliability',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11" />
      </svg>
    )
  },
  {
    title: 'Advanced',
    sub1: 'Technology',
    sub2: 'Modern plants and strict quality control',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.31M14 2v7.31M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0" />
      </svg>
    )
  },
  {
    title: 'Expert',
    sub1: 'Support',
    sub2: 'Technical guidance at every step',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    )
  }
];

export const ProductPart3: React.FC<ProductPart3Props> = ({ onNavigate }) => {
  const [activeSlide, setActiveSlide] = useState(1); // Default to slide 02 matching mobile reference

  const handlePrev = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : SOLUTIONS.length - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev < SOLUTIONS.length - 1 ? prev + 1 : 0));
  };

  const handleNav = (link: string) => {
    if (onNavigate) {
      onNavigate(link);
    } else {
      window.location.hash = link;
    }
  };

  return (
    <section id="product-part3" className="product-part-3">
      {/* Background Architectural Patterns */}
      <div className="product-part-3__bg-dots" aria-hidden="true" />
      <div className="product-part-3__bg-curves" aria-hidden="true" />

      <div className="product-part-3__inner">
        {/* TOP: Section Eyebrow + Main Heading + Description */}
        <div className="product-part-3__header">
          <span className="product-part-3__eyebrow">OUR SOLUTIONS</span>
          <div className="product-part-3__eyebrow-line" />
          <h2 className="product-part-3__title">
            SPECIALIZED CONCRETE <span className="product-part-3__title-accent">SOLUTIONS</span>
          </h2>
          <p className="product-part-3__desc">
            Engineered to performance. Built for every challenge. Our specialized concrete solutions
            deliver strength, durability, and reliability where it matters most.
          </p>
        </div>

        {/* ── DESKTOP & TABLET (1024px): 4 Cards Horizontal Row ── */}
        <div className="product-part-3__cards-row">
          {SOLUTIONS.map((item, idx) => (
            <div key={idx} className="product-part-3__card">
              {/* Card Top: Image + Number Badge */}
              <div className="product-part-3__card-img-wrap">
                <img
                  src={item.image}
                  alt={item.altText}
                  loading="lazy"
                  className="product-part-3__card-img"
                />
                <div className="product-part-3__card-num-badge">{item.num}</div>
              </div>

              {/* Circular Overlapping Icon */}
              <div className="product-part-3__card-icon-wrap">
                {item.icon}
              </div>

              {/* Card Body */}
              <div className="product-part-3__card-body">
                <h3 className="product-part-3__card-title">{item.title}</h3>
                <div className="product-part-3__card-divider" />
                <p className="product-part-3__card-desc">{item.desc}</p>
                <button
                  onClick={() => handleNav(item.link)}
                  className="product-part-3__card-cta"
                >
                  EXPLORE →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── SMALL MOBILE (375px): Interactive Carousel ── */}
        <div className="product-part-3__mobile-carousel-wrap">
          <div className="product-part-3__mobile-carousel">
            <button
              onClick={handlePrev}
              className="product-part-3__carousel-arrow prev"
              aria-label="Previous Solution"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Carousel Slide Container */}
            <div className="product-part-3__carousel-viewport">
              <div
                className="product-part-3__carousel-track"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {SOLUTIONS.map((item, idx) => (
                  <div key={idx} className="product-part-3__carousel-slide">
                    <div className="product-part-3__card">
                      <div className="product-part-3__card-img-wrap">
                        <img
                          src={item.image}
                          alt={item.altText}
                          loading="lazy"
                          className="product-part-3__card-img"
                        />
                        <div className="product-part-3__card-num-badge">{item.num}</div>
                      </div>

                      <div className="product-part-3__card-icon-wrap">
                        {item.icon}
                      </div>

                      <div className="product-part-3__card-body">
                        <h3 className="product-part-3__card-title">{item.title}</h3>
                        <div className="product-part-3__card-divider" />
                        <p className="product-part-3__card-desc">{item.desc}</p>
                        <button
                          onClick={() => handleNav(item.link)}
                          className="product-part-3__card-cta"
                        >
                          EXPLORE →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="product-part-3__carousel-arrow next"
              aria-label="Next Solution"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="product-part-3__carousel-dots">
            {SOLUTIONS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`product-part-3__dot ${idx === activeSlide ? 'active' : ''}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── BOTTOM HIGHLIGHT / FEATURE ITEMS ── */}
        {/* Desktop & Tablet: Horizontal 4-col Panel | Mobile: Stacked Vertical Cards */}
        <div className="product-part-3__features-panel">
          {FEATURES.map((feat, idx) => (
            <React.Fragment key={idx}>
              <div className="product-part-3__feature-item">
                <div className="product-part-3__feature-icon-wrap">
                  {feat.icon}
                </div>
                <div className="product-part-3__feature-texts">
                  <span className="product-part-3__feature-title">{feat.title}</span>
                  <span className="product-part-3__feature-sub1">{feat.sub1}</span>
                  <span className="product-part-3__feature-sub2">{feat.sub2}</span>
                </div>
              </div>
              {idx < FEATURES.length - 1 && (
                <div className="product-part-3__feature-sep" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPart3;
