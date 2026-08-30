import React from 'react';

interface HomePart4Props {
  onNavigate?: (path: string) => void;
}

const PRODUCT_CARDS_DATA = [
  {
    image: '/concrete-texture.svg',
    badge: 'M10 – M60',
    title: 'Concrete Grades',
    desc: 'Wide range of grades for all construction requirements.',
    id: 'concrete-grades',
    iconKey: 'Verify'
  },
  {
    image: '/concrete-pour.svg',
    badge: 'M40+',
    title: 'Self Compacting Concrete (SCC)',
    desc: 'High flowability, self-leveling and excellent finish.',
    id: 'scc',
    iconKey: 'Sliders'
  },
  {
    image: '/construction-workers.svg',
    badge: 'M30 – M45',
    title: 'High Strength Concrete',
    desc: 'Engineered for high rise and heavy load structures.',
    id: 'high-strength',
    iconKey: 'Flask'
  },
  {
    image: '/concrete-floor-finishing.svg',
    badge: 'WATERPROOF',
    title: 'Waterproof Concrete',
    desc: 'Specially designed to resist water penetration.',
    id: 'waterproof',
    iconKey: 'Waterproof'
  },
  {
    image: '/concrete-fiber-material.svg',
    badge: 'FIBER REINFORCED',
    title: 'Fiber Reinforced Concrete (FRC)',
    desc: 'Improved durability, crack resistance & toughness.',
    id: 'frc',
    iconKey: 'Fiber'
  },
];

const ProductCardIcon = ({ iconKey }: { iconKey: string }) => {
  const props = { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "#0875D1", strokeWidth: "2.2", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (iconKey) {
    case 'Verify':
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 11 2 2 4-4" />
        </svg>
      );
    case 'Sliders':
      return (
        <svg {...props}>
          <line x1="4" y1="21" x2="4" y2="14" />
          <line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" />
          <line x1="20" y1="12" x2="20" y2="3" />
          <line x1="2" y1="14" x2="6" y2="14" />
          <line x1="10" y1="8" x2="14" y2="8" />
          <line x1="18" y1="16" x2="22" y2="16" />
        </svg>
      );
    case 'Flask':
      return (
        <svg {...props}>
          <path d="M10 2h4M10 2v6L5.5 17.5a2 2 0 0 0 1.8 2.5h9.4a2 2 0 0 0 1.8-2.5L14 8V2" />
          <path d="M7.8 15h8.4" />
        </svg>
      );
    case 'Waterproof':
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 10a2.5 2.5 0 0 0-2.5 2.5c0 1.5 2.5 3.5 2.5 3.5s2.5-2 2.5-3.5A2.5 2.5 0 0 0 12 10z" />
        </svg>
      );
    case 'Fiber':
      return (
        <svg {...props}>
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    default:
      return null;
  }
};

export const HomePart4: React.FC<HomePart4Props> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.hash = path;
    }
  };

  return (
    <section id="home-part-4" className="products-outer-section home-snap-part">
      <div className="products-bg-dots" aria-hidden="true">
        <svg width="240" height="240" viewBox="0 0 240 240" fill="none">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#0875D1" fillOpacity="0.08" />
            </pattern>
          </defs>
          <rect width="240" height="240" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="products-bg-curve-left" aria-hidden="true">
        <svg width="350" height="350" viewBox="0 0 350 350" fill="none">
          <circle cx="-50" cy="400" r="150" stroke="#0875D1" strokeOpacity="0.05" strokeWidth="1.5" />
          <circle cx="-50" cy="400" r="200" stroke="#0875D1" strokeOpacity="0.05" strokeWidth="1.5" />
          <circle cx="-50" cy="400" r="250" stroke="#0875D1" strokeOpacity="0.05" strokeWidth="1.5" />
          <circle cx="-50" cy="400" r="300" stroke="#0875D1" strokeOpacity="0.05" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="products-bg-curve-right" aria-hidden="true">
        <svg width="450" height="450" viewBox="0 0 450 450" fill="none">
          <circle cx="500" cy="500" r="180" stroke="#0875D1" strokeOpacity="0.05" strokeWidth="1.5" />
          <circle cx="500" cy="500" r="230" stroke="#0875D1" strokeOpacity="0.05" strokeWidth="1.5" />
          <circle cx="500" cy="500" r="280" stroke="#0875D1" strokeOpacity="0.05" strokeWidth="1.5" />
          <circle cx="500" cy="500" r="330" stroke="#0875D1" strokeOpacity="0.05" strokeWidth="1.5" />
          <circle cx="500" cy="500" r="380" stroke="#0875D1" strokeOpacity="0.05" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="products-container">
        <div className="products-main-layout">
          {/* Left Block */}
          <div className="products-intro">
            <span className="products-eyebrow">OUR PRODUCTS</span>
            <h2 className="products-main-title">
              Concrete<br />
              Engineered<br />
              for <span className="text-accent-blue">Every</span><br />
              Requirement
            </h2>
            <div className="products-heading-line" aria-hidden="true" />
            <p className="products-description">
              High performance concrete solutions designed to meet diverse construction needs with strength, durability and unmatched reliability.
            </p>

            <div className="products-cta-wrap">
              <button className="products-view-all-btn" onClick={() => handleNav('/products')}>
                VIEW ALL PRODUCTS &rarr;
              </button>
            </div>

            <div className="products-feature-list">
              <div className="products-feature-line-connector" aria-hidden="true" />
              <div className="products-feature-item">
                <div className="products-feature-icon-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 11 2 2 4-4" />
                  </svg>
                </div>
                <span className="products-feature-text">Advanced Technology</span>
              </div>
              <div className="products-feature-item">
                <div className="products-feature-icon-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.5">
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <span className="products-feature-text">Consistent Quality</span>
              </div>
              <div className="products-feature-item">
                <div className="products-feature-icon-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.5">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                </div>
                <span className="products-feature-text">Reliable Support</span>
              </div>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="products-grid-wrapper">
            <div className="products-cards-grid">
              {PRODUCT_CARDS_DATA.map((card) => (
                <div key={card.id} className="product-card">
                  <div className="product-card-image-wrap">
                    <img src={card.image} alt={card.title} className="product-card-image" />
                  </div>
                  <div className="product-card-meta-row">
                    <div className="product-card-icon-wrap">
                      <ProductCardIcon iconKey={card.iconKey} />
                    </div>
                    <span className="product-card-badge">{card.badge}</span>
                  </div>
                  <div className="product-card-content">
                    <h3 className="product-card-title">{card.title}</h3>
                    <div className="product-card-line" aria-hidden="true" />
                    <p className="product-card-description">{card.desc}</p>
                    <div className="product-card-arrow-wrap">
                      <div className="product-card-circle-arrow">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="products-wave-container" aria-hidden="true">
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="products-wave-svg">
          <path d="M0,90 C260,30 460,150 720,95 C980,40 1200,120 1440,80 L1440,160 L0,160 Z" fill="#0875D1" />
          <path d="M0,110 C240,55 480,165 720,110 C960,55 1200,145 1440,95 L1440,160 L0,160 Z" fill="#071B3A" />
        </svg>
      </div>
    </section>
  );
};

export default HomePart4;
