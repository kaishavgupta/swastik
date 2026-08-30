import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCT_IMAGES } from './product_assets';

interface ProductPart2Props {
  onNavigate?: (path: string) => void;
}

interface GradeData {
  grade: string;
  desc: string;
  idealFor: string[];
  image: string;
  altText: string;
}

const GRADES_DATA: Record<string, GradeData> = {
  M10: {
    grade: 'M10',
    desc: 'Low-strength non-structural concrete suitable for leveling courses, trench fills, and unreinforced foundation bases.',
    idealFor: [
      'Levelling Courses & PCC',
      'Trench Fill & Pipe Bedding',
      'Pathway Under-layers',
      'Non-Structural Blinding'
    ],
    image: PRODUCT_IMAGES.concretePouring,
    altText: 'Swastik Mixtures M10 concrete pouring closeup'
  },
  M20: {
    grade: 'M20',
    desc: 'Standard structural grade for low-rise residential RCC framing, driveways, and light commercial foundations.',
    idealFor: [
      'Single-Story Frame Structures',
      'Driveways & Courtyards',
      'Retaining & Boundary Walls',
      'Ground Slabs & Footings'
    ],
    image: PRODUCT_IMAGES.concretePouring,
    altText: 'Swastik Mixtures M20 concrete pouring closeup'
  },
  M25: {
    grade: 'M25',
    desc: 'Versatile commercial RCC mix for multi-story residential columns, beams, slabs, and general structural members.',
    idealFor: [
      'Multi-Story Residential Buildings',
      'Structural Columns & Slabs',
      'Footings & Reinforced Beams',
      'Internal Roads & Parking Lots'
    ],
    image: PRODUCT_IMAGES.concretePouring,
    altText: 'Swastik Mixtures M25 concrete pouring closeup'
  },
  M30: {
    grade: 'M30',
    desc: 'A structural concrete solution for projects requiring dependable performance and consistent production.',
    idealFor: [
      'Residential & Commercial Buildings',
      'Columns, Beams & Slabs',
      'Foundations & Footings',
      'Pavements & Rigid Floors'
    ],
    image: PRODUCT_IMAGES.concretePouring,
    altText: 'Swastik Mixtures M30 concrete grade pouring closeup'
  },
  M35: {
    grade: 'M35',
    desc: 'Heavy-duty structural mix engineered for multi-story commercial complexes, basement slabs, and water tanks.',
    idealFor: [
      'Commercial Towers & Malls',
      'Basements & Water Retaining Walls',
      'Industrial Heavy Slabs',
      'Bridge Abutments & Piers'
    ],
    image: PRODUCT_IMAGES.concretePouring,
    altText: 'Swastik Mixtures M35 concrete grade pouring closeup'
  },
  M40: {
    grade: 'M40',
    desc: 'High-strength structural concrete designed for high-load infrastructure, flyovers, and heavy industrial floors.',
    idealFor: [
      'High-Rise Commercial Towers',
      'Flyovers, Bridges & Viaducts',
      'Heavy Industrial Pavements',
      'Pre-stressed Concrete Members'
    ],
    image: PRODUCT_IMAGES.concretePouring,
    altText: 'Swastik Mixtures M40 concrete grade pouring closeup'
  },
  M45: {
    grade: 'M45',
    desc: 'Specialized high-performance concrete formulated for severe exposure environments and heavy infrastructure.',
    idealFor: [
      'Highway Rigid Pavements',
      'Port & Coastal Structures',
      'Heavy Machinery Foundations',
      'Bridge Slabs & Box Girders'
    ],
    image: PRODUCT_IMAGES.concretePouring,
    altText: 'Swastik Mixtures M45 concrete grade pouring closeup'
  },
  M50: {
    grade: 'M50',
    desc: 'Ultra-durable high-grade concrete engineered for skyscrapers, deep foundations, and rapid structural turnarounds.',
    idealFor: [
      'Skyscraper Transfer Plates',
      'Deep Foundation Piles',
      'Metro Rail Corridors',
      'High-Durability Infrastructure'
    ],
    image: PRODUCT_IMAGES.concretePouring,
    altText: 'Swastik Mixtures M50 concrete grade pouring closeup'
  },
  M55: {
    grade: 'M55',
    desc: 'Premium high-strength concrete mix for specialized civil engineering projects demanding extreme load capacity.',
    idealFor: [
      'Heavy Load Transfer Columns',
      'Industrial Containment Structures',
      'Pre-cast Infrastructure Members',
      'Specialized Civil Works'
    ],
    image: PRODUCT_IMAGES.concretePouring,
    altText: 'Swastik Mixtures M55 concrete grade pouring closeup'
  },
  M60: {
    grade: 'M60',
    desc: 'Super high-strength structural concrete engineered for landmark towers and mega-scale infrastructure works.',
    idealFor: [
      'Landmark Skyscraper Columns',
      'Long-span Bridge Decks',
      'Extreme Load-Bearing Piles',
      'Critical Structural Nodes'
    ],
    image: PRODUCT_IMAGES.concretePouring,
    altText: 'Swastik Mixtures M60 concrete grade pouring closeup'
  }
};

const GRADE_LIST = ['M10', 'M20', 'M25', 'M30', 'M35', 'M40', 'M45', 'M50', 'M55', 'M60'];

export const ProductPart2: React.FC<ProductPart2Props> = ({ onNavigate }) => {
  // Default to M60 matching reference design
  const [selectedGrade, setSelectedGrade] = useState<string>('M60');
  const currentData = GRADES_DATA[selectedGrade] || GRADES_DATA['M60'];

  const handlePrevGrade = () => {
    const idx = GRADE_LIST.indexOf(selectedGrade);
    if (idx > 0) {
      setSelectedGrade(GRADE_LIST[idx - 1]);
    }
  };

  const handleNextGrade = () => {
    const idx = GRADE_LIST.indexOf(selectedGrade);
    if (idx < GRADE_LIST.length - 1) {
      setSelectedGrade(GRADE_LIST[idx + 1]);
    }
  };

  return (
    <section id="product-part2" className="product-part-2">
      {/* Subtle technical dotted background pattern */}
      <div className="product-part-2__bg-pattern" aria-hidden="true" />

      <div className="product-part-2__inner">
        {/* SECTION HEADER */}
        <div className="product-part-2__header">
          <h2 className="product-part-2__title">CONCRETE GRADE RANGE</h2>
          <div className="product-part-2__title-bar" />
          <p className="product-part-2__subtitle">
            Explore our wide range of concrete grades designed to meet diverse structural requirements and deliver superior performance.
          </p>
        </div>

        {/* HORIZONTAL GRADE SELECTOR STRIP WITH ARROWS */}
        <div className="product-part-2__selector-wrapper">
          <button
            onClick={handlePrevGrade}
            className="product-part-2__nav-arrow prev"
            aria-label="Previous Grade"
            disabled={selectedGrade === GRADE_LIST[0]}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="product-part-2__grade-scroll">
            <div className="product-part-2__grade-strip">
              {GRADE_LIST.map(g => {
                const isActive = g === selectedGrade;
                return (
                  <button
                    key={g}
                    onClick={() => setSelectedGrade(g)}
                    className={`product-part-2__grade-card ${isActive ? 'active' : ''}`}
                    aria-pressed={isActive}
                  >
                    <div className="product-part-2__grade-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="3" width="15" height="13" />
                        <polygon points="16 8 20 8 23 11 23 16 16 16 8" />
                        <circle cx="5.5" cy="18.5" r="2.5" />
                        <circle cx="18.5" cy="18.5" r="2.5" />
                      </svg>
                    </div>
                    <span className="product-part-2__grade-name">{g}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleNextGrade}
            className="product-part-2__nav-arrow next"
            aria-label="Next Grade"
            disabled={selectedGrade === GRADE_LIST[GRADE_LIST.length - 1]}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* MAIN PRODUCT INFORMATION CONTAINER CARD */}
        <motion.div
          key={selectedGrade}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="product-part-2__main-card"
        >
          {/* TOP SECTION: Left Narrative + Right Image */}
          <div className="product-part-2__top-grid">
            {/* LEFT COLUMN: Grade Title, Tag, Description, Checklist, CTA */}
            <div className="product-part-2__left-info">
              <div className="product-part-2__grade-header">
                <span className="product-part-2__big-grade">{currentData.grade}</span>
                <span className="product-part-2__grade-tag">CONCRETE GRADE</span>
                <div className="product-part-2__grade-tag-line" />
              </div>

              {/* Floating Badge (Mobile only, placed right under tag) */}
              <div className="product-part-2__mobile-premium-badge">
                <div className="product-part-2__badge-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <div className="product-part-2__badge-texts">
                  <span className="product-part-2__badge-title">Premium Grade</span>
                  <span className="product-part-2__badge-sub">Maximum Strength &bull; Maximum Reliability</span>
                </div>
              </div>

              <p className="product-part-2__grade-desc">{currentData.desc}</p>

              <div className="product-part-2__ideal-box">
                <span className="product-part-2__ideal-label">IDEAL FOR</span>
                <div className="product-part-2__ideal-list">
                  {currentData.idealFor.map((item, idx) => (
                    <div key={idx} className="product-part-2__ideal-item">
                      <div className="product-part-2__check-circle">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="product-part-2__ideal-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onNavigate ? onNavigate(`/contact?grade=${selectedGrade}`) : window.location.hash = `/contact?grade=${selectedGrade}`}
                className="product-part-2__cta-btn"
              >
                REQUEST THIS MIX →
              </button>
            </div>

            {/* RIGHT COLUMN: Pouring Image + Desktop Floating Premium Badge */}
            <div className="product-part-2__right-image-wrap">
              <img
                src={currentData.image}
                alt={currentData.altText}
                loading="lazy"
                className="product-part-2__site-img"
              />

              {/* Desktop / Tablet Floating Premium Badge */}
              <div className="product-part-2__desktop-premium-badge">
                <div className="product-part-2__badge-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <div className="product-part-2__badge-texts">
                  <span className="product-part-2__badge-title">Premium Grade</span>
                  <span className="product-part-2__badge-sub">Maximum Strength<br />Maximum Reliability</span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION: 4 Performance Feature Cards (Desktop 4-col with separators, Mobile 2x2 grid) */}
          <div className="product-part-2__features-strip">
            <div className="product-part-2__feature-card">
              <div className="product-part-2__feature-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="product-part-2__feature-info">
                <span className="product-part-2__feature-title">Consistency</span>
                <span className="product-part-2__feature-sub">Batch after batch uniform quality</span>
              </div>
            </div>

            <div className="product-part-2__feature-sep" aria-hidden="true" />

            <div className="product-part-2__feature-card">
              <div className="product-part-2__feature-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8M8 12h8" />
                </svg>
              </div>
              <div className="product-part-2__feature-info">
                <span className="product-part-2__feature-title">Workability</span>
                <span className="product-part-2__feature-sub">Excellent workability &amp; smooth finish</span>
              </div>
            </div>

            <div className="product-part-2__feature-sep" aria-hidden="true" />

            <div className="product-part-2__feature-card">
              <div className="product-part-2__feature-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="product-part-2__feature-info">
                <span className="product-part-2__feature-title">Strength</span>
                <span className="product-part-2__feature-sub">Ultra high strength for critical structures</span>
              </div>
            </div>

            <div className="product-part-2__feature-sep" aria-hidden="true" />

            <div className="product-part-2__feature-card">
              <div className="product-part-2__feature-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11" />
                </svg>
              </div>
              <div className="product-part-2__feature-info">
                <span className="product-part-2__feature-title">Applications</span>
                <span className="product-part-2__feature-sub">Engineered for the most demanding projects</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPart2;
