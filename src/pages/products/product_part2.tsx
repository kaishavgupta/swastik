import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProductPart2Props {
  onNavigate?: (path: string) => void;
}

interface GradeData {
  grade: string;
  desc: string;
  idealFor: string[];
  image: string;
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
    image: '/concrete-floor-finishing.svg'
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
    image: '/concrete-pour.svg'
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
    image: '/concrete-pour.svg'
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
    image: '/concrete-pour.svg'
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
    image: '/industrial-construction.svg'
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
    image: '/infrastructure-projects.svg'
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
    image: '/bridges.svg'
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
    image: '/high-rise-buildings.svg'
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
    image: '/commercial-structures.svg'
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
    image: '/high-rise-buildings.svg'
  }
};

const GRADE_LIST = ['M10', 'M20', 'M25', 'M30', 'M35', 'M40', 'M45', 'M50', 'M55', 'M60'];

export const ProductPart2: React.FC<ProductPart2Props> = ({ onNavigate }) => {
  const [selectedGrade, setSelectedGrade] = useState<string>('M30');
  const currentData = GRADES_DATA[selectedGrade] || GRADES_DATA['M30'];

  return (
    <section id="product-part2" className="product-snap-part product-grades-part">
      <div className="product-container product-grades-container">
        {/* SECTION HEADER */}
        <div className="product-section-header text-center">
          <h2 className="product-section-title">CONCRETE GRADE RANGE</h2>
          <div className="product-title-bar margin-auto" />
        </div>

        {/* HORIZONTAL GRADE SELECTOR STRIP */}
        <div className="product-grade-scroll-wrap">
          <div className="product-grade-strip">
            {GRADE_LIST.map(g => {
              const isActive = g === selectedGrade;
              return (
                <button
                  key={g}
                  onClick={() => setSelectedGrade(g)}
                  className={`product-grade-btn ${isActive ? 'active' : ''}`}
                >
                  <div className="product-grade-btn-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 14h22v4a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-4z" />
                      <path d="M4 14l2-8h12l2 8" />
                      <circle cx="7" cy="18" r="1.5" />
                      <circle cx="17" cy="18" r="1.5" />
                    </svg>
                  </div>
                  <span className="product-grade-btn-label">{g}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* SELECTED GRADE MAIN PANEL */}
        <motion.div
          key={selectedGrade}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="product-selected-panel"
        >
          {/* LEFT: Grade details & bullets */}
          <div className="product-selected-left">
            <div className="product-selected-header">
              <span className="product-selected-big">{currentData.grade}</span>
              <span className="product-selected-tag">CONCRETE GRADE</span>
            </div>

            <p className="product-selected-desc">{currentData.desc}</p>

            <div className="product-selected-ideal">
              <span className="product-ideal-title">IDEAL FOR</span>
              <div className="product-ideal-list">
                {currentData.idealFor.map((item, idx) => (
                  <div key={idx} className="product-ideal-item">
                    <span className="product-ideal-check">✓</span>
                    <span className="product-ideal-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onNavigate && onNavigate(`/contact?grade=${selectedGrade}`)}
              className="btn-primary product-request-mix-btn"
            >
              REQUEST THIS MIX →
            </button>
          </div>

          {/* RIGHT: Image visual + 4 mini cards */}
          <div className="product-selected-right">
            <div className="product-selected-img-wrap">
              <img
                src={currentData.image}
                alt={`${currentData.grade} Concrete Grade`}
                className="product-selected-img"
              />

              {/* 4 Mini Cards Strip Overlay Below/Inside Image */}
              <div className="product-mini-cards-grid">
                <div className="product-mini-card">
                  <div className="product-mini-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="product-mini-info">
                    <span className="product-mini-title">Consistency</span>
                    <span className="product-mini-sub">Batch after batch uniform quality</span>
                  </div>
                </div>

                <div className="product-mini-card">
                  <div className="product-mini-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v8M8 12h8" />
                    </svg>
                  </div>
                  <div className="product-mini-info">
                    <span className="product-mini-title">Workability</span>
                    <span className="product-mini-sub">Good workability & finish</span>
                  </div>
                </div>

                <div className="product-mini-card">
                  <div className="product-mini-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div className="product-mini-info">
                    <span className="product-mini-title">Strength</span>
                    <span className="product-mini-sub">Reliable strength for structures</span>
                  </div>
                </div>

                <div className="product-mini-card">
                  <div className="product-mini-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                      <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11" />
                    </svg>
                  </div>
                  <div className="product-mini-info">
                    <span className="product-mini-title">Applications</span>
                    <span className="product-mini-sub">Wide range of structural use</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
