import React from 'react';

interface HomePart2Props {
  onNavigate?: (path: string) => void;
}

export const HomePart2: React.FC<HomePart2Props> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.hash = path;
    }
  };

  return (
    <section id="home-part-2" className="about-section-fullscreen home-snap-part" aria-label="About Swastik Mixtures">
      <div className="about-main-container">
        {/* Top / Left Narrative Column */}
        <div className="about-left-col">
          <div className="about-left-content">
            <span className="about-eyebrow">ABOUT SWASTIK MIXTURES</span>
            <span className="about-divider" />
            <h2 className="about-heading">
              18 Years of<br />Concreting{' '}
              <span className="about-heading-accent">Trust</span>
            </h2>
            <p className="about-paragraph">
              Swastik Mixtures is a trusted Ready Mix Concrete company based
              in Lucknow, Uttar Pradesh, bringing 18+ years of dedicated
              experience to the construction and infrastructure sector.
            </p>
            <p className="about-paragraph">
              From residential builders to large infrastructure contractors,
              we work closely with our customers to understand their
              requirements and deliver concrete solutions suited to their
              project.
            </p>

            {/* Action Buttons */}
            <div className="about-buttons">
              <button
                type="button"
                className="about-btn-quote"
                onClick={() => handleNav('/contact?form=true')}
                aria-label="Request a quote for ready mix concrete"
              >
                <span className="about-btn-icon-left" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
                <span>REQUEST A QUOTE</span>
                <span className="about-btn-icon-right" aria-hidden="true">&rarr;</span>
              </button>

              <button
                type="button"
                className="about-btn-products"
                onClick={() => handleNav('/products')}
                aria-label="Explore ready mix concrete products"
              >
                <span className="about-btn-icon-left" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </span>
                <span>EXPLORE PRODUCTS</span>
                <span className="about-btn-icon-right" aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>

        {/* Concrete Plant Image & Floating 18+ Badge Wrapper */}
        <div className="about-image-wrapper">
          <div className="about-bg-img-col" aria-hidden="true">
            <img
              src="/swastik-concrete-batching-plant.svg"
              alt="Swastik Mixtures Ready Mix Concrete Batching Plant"
              className="about-bg-img"
            />
            <div className="about-img-fade" />
          </div>

          {/* 18+ Floating Badge */}
          <div className="about-floating-badge">
            <div className="about-badge-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>
            <p className="about-badge-num">18+</p>
            <p className="about-badge-txt">YEARS OF<br />CONCRETING TRUST</p>
          </div>
        </div>

        {/* 3 Feature Items / Bubbles */}
        <div className="about-info-panel">
          <div className="about-info-item">
            <div className="about-info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="about-info-text">
              <p className="about-info-main">LUCKNOW</p>
              <p className="about-info-sub">UTTAR PRADESH, INDIA</p>
            </div>
          </div>

          <div className="about-info-sep" />

          <div className="about-info-item">
            <div className="about-info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="about-info-text">
              <p className="about-info-main">READY MIX</p>
              <p className="about-info-sub">CONCRETE</p>
            </div>
          </div>

          <div className="about-info-sep" />

          <div className="about-info-item">
            <div className="about-info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="about-info-text">
              <p className="about-info-main">QUALITY</p>
              <p className="about-info-sub">YOU CAN TRUST</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="about-wave-container" aria-hidden="true">
        <svg
          viewBox="0 0 1440 130"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="about-wave-svg"
        >
          <path
            d="M0,65 C180,10 360,110 540,60 C720,10 900,100 1080,55 C1260,10 1380,70 1440,55 L1440,130 L0,130 Z"
            fill="#071A36"
          />
          <path
            d="M0,85 C200,40 400,115 600,75 C800,35 1000,105 1200,70 C1320,50 1390,85 1440,80 L1440,130 L0,130 Z"
            fill="#0868C9"
            fillOpacity="0.45"
          />
        </svg>
      </div>
    </section>
  );
};

export default HomePart2;
