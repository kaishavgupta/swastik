import React from 'react';
import { motion } from 'framer-motion';

interface Blog1Props {
  onNavigate?: (path: string) => void;
}

export const Blog1: React.FC<Blog1Props> = ({ onNavigate }) => {
  const scrollToArticles = () => {
    const el = document.getElementById('blog-part2') || document.getElementById('blog-part3');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsClick = () => {
    if (onNavigate) {
      onNavigate('/projects');
    } else {
      window.location.hash = '/projects';
    }
  };

  const FEATURES = [
    {
      id: '01',
      title: 'Expert Insights',
      desc: 'Actionable knowledge from industry professionals.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      )
    },
    {
      id: '02',
      title: 'Industry Updates',
      desc: 'Latest trends, technologies and innovations.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="8" y1="6" x2="10" y2="6" />
          <line x1="14" y1="6" x2="16" y2="6" />
          <line x1="8" y1="10" x2="10" y2="10" />
          <line x1="14" y1="10" x2="16" y2="10" />
          <line x1="8" y1="14" x2="10" y2="14" />
          <line x1="14" y1="14" x2="16" y2="14" />
          <line x1="10" y1="18" x2="14" y2="18" />
        </svg>
      )
    },
    {
      id: '03',
      title: 'Quality Focused',
      desc: 'Committed to delivering quality and trust.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      )
    },
    {
      id: '04',
      title: 'Built for Builders',
      desc: 'Insights that empower every construction professional.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 18h20" />
          <path d="M5 18v-4a7 7 0 0 1 14 0v4" />
          <path d="M10 10V6a2 2 0 0 1 4 0v4" />
        </svg>
      )
    }
  ];

  return (
    <section id="blog-part1" className="blog-snap-part blog-hero-section" aria-label="Blog & Insights Hero">
      <div className="blog-hero-main-container">
        {/* ── 1. MAIN HERO BANNER (670px Desktop Height) ── */}
        <div className="blog-hero-banner-wrapper">
          {/* Background Right: RMC Industrial Scene Image Asset */}
          <div className="blog-hero-image-bg-layer" aria-hidden="true">
            <img
              src="/swastik_mixtures_industrial_scene.svg"
              alt="Swastik Mixtures Ready Mix Concrete Plant Industrial Scene"
              className="blog-hero-bg-plant-img"
            />
          </div>

          {/* Precision Diagonal SVG Split Layer (Navy Fill + White Line + Blue Line) */}
          <div className="blog-hero-diagonal-svg-layer" aria-hidden="true">
            <svg
              className="blog-hero-diagonal-svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* Navy Polygon Shape Covering the Left 40-42% */}
              <polygon
                points="0,0 53,0 39,100 0,100"
                fill="#071F42"
              />
              {/* Crisp White Separator Line */}
              <line
                x1="53"
                y1="0"
                x2="39"
                y2="100"
                stroke="#FFFFFF"
                strokeWidth="0.8"
                vectorEffect="non-scaling-stroke"
              />
              {/* Crisp Swastik Blue Accent Separator Line */}
              <line
                x1="53.8"
                y1="0"
                x2="39.8"
                y2="100"
                stroke="#006FE6"
                strokeWidth="0.6"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {/* Blueprint Truck Vector Background in Left Corner */}
          <div className="blog-hero-blueprint-bg" aria-hidden="true">
            <svg width="280" height="150" viewBox="0 0 280 150" fill="none" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1.2">
              <rect x="20" y="45" width="140" height="65" rx="8" />
              <path d="M160 65h55l35 45H160V65z" />
              <circle cx="65" cy="115" r="20" />
              <circle cx="120" cy="120" r="20" />
              <circle cx="210" cy="120" r="20" />
              <path d="M20 65h140M20 90h140" />
              <line x1="30" y1="15" x2="30" y2="45" />
              <line x1="85" y1="15" x2="85" y2="45" />
              <line x1="140" y1="15" x2="140" y2="45" />
              <path d="M10 15h150" />
            </svg>
          </div>

          {/* Top-Left Decorative 6x4 Dot Matrix */}
          <div className="blog-hero-dot-matrix" aria-hidden="true">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="blog-hero-dot" />
            ))}
          </div>

          {/* Left Foreground Content Panel */}
          <div className="blog-hero-content-panel">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="blog-hero-text-block"
            >
              {/* Eyebrow */}
              <div className="blog-hero-eyebrow-wrap">
                <span className="blog-hero-eyebrow">OUR BLOG</span>
              </div>

              {/* Main Heading (2 Lines) */}
              <h1 className="blog-hero-heading">
                BLOG &<br />
                <span>INSIGHTS</span>
              </h1>

              {/* Small horizontal accent line */}
              <div className="blog-hero-title-line" aria-hidden="true" />

              {/* Lead Paragraph */}
              <p className="blog-hero-lead-text">
                News, updates and expert insights from the world of ready mix concrete, construction and infrastructure.
              </p>

              {/* Buttons Row */}
              <div className="blog-hero-btn-group">
                <button
                  onClick={scrollToArticles}
                  className="blog-hero-primary-btn"
                  aria-label="Explore Articles"
                >
                  <span>EXPLORE ARTICLES &rarr;</span>
                </button>

                <button
                  onClick={handleProjectsClick}
                  className="blog-hero-secondary-btn"
                  aria-label="View Projects"
                >
                  <span>VIEW PROJECTS &rarr;</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* ── KNOWLEDGE BADGE (Overlapping at the bottom intersection) ── */}
          <div className="blog-knowledge-badge">
            <div className="blog-badge-icon-circle" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <div className="blog-badge-text-wrap">
              <span className="blog-badge-title">Knowledge. Quality.</span>
              <span className="blog-badge-sub">Concrete Solutions.</span>
            </div>
          </div>
        </div>

        {/* ── 2. FEATURE HIGHLIGHTS STRIP (Immediately Below the Hero) ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="blog-features-strip"
        >
          {FEATURES.map((item, idx) => (
            <React.Fragment key={item.id}>
              <div className="blog-feature-item">
                <div className="blog-feature-icon-circle" aria-hidden="true">
                  {item.icon}
                </div>
                <div className="blog-feature-info">
                  <h3 className="blog-feature-title">{item.title}</h3>
                  <p className="blog-feature-desc">{item.desc}</p>
                </div>
              </div>
              {idx < FEATURES.length - 1 && (
                <div className="blog-feature-divider" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog1;
