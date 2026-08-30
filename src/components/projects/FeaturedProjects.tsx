import React from 'react';
import { motion } from 'framer-motion';

interface FeaturedProjectsProps {
  onNavigate?: (path: string) => void;
}

export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  description: string;
  location: string;
  year: string;
  image: string;
  icon: React.ReactNode;
}

/* ── Custom Category Icons for Card Center Badges ── */
const IconBuildingBadge = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
  </svg>
);

const IconRoadBadge = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 22L8 2M16 2l4 20" />
    <path d="M12 4v4M12 12v4" strokeDasharray="2 2" />
  </svg>
);

const IconBridgeBadge = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18h18" strokeWidth="2.4" />
    <path d="M6 18V8a2 2 0 0 1 4 0v10" />
    <path d="M14 18V8a2 2 0 0 1 4 0v10" />
    <path d="M2 18c6-8 8-10 8-10s2 2 8 10" />
  </svg>
);

const IconFactoryBadge = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20h20M4 20V8l6 4V8l6 4V4h4v16H4z" />
    <circle cx="17" cy="8" r="1" fill="#0875D1" />
  </svg>
);

/* ── Value Strip Icons ── */
const IconValueProjects = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
  </svg>
);

const IconValueShield = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const IconValueHardhat = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 18h20" />
    <path d="M5 18v-4a7 7 0 0 1 14 0v4" />
    <path d="M10 7v7M14 7v7" />
    <path d="M12 4v3" />
  </svg>
);

const IconValueSprout = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 20h10" />
    <path d="M12 20v-8" />
    <path d="M12 12c0-4.5 3.5-7 8-7 0 4.5-2.5 8-8 7z" />
    <path d="M12 15c0-3.5-2.5-5.5-6-5.5 0 3.5 2 6 6 5.5z" />
  </svg>
);

export const FEATURED_PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    category: 'HIGH-RISE BUILDING',
    title: 'Residential Towers, Lucknow',
    description: 'Supplied M30 & M40 grade concrete for premium residential development.',
    location: 'Lucknow, Uttar Pradesh',
    year: '2024',
    image: '/high-rise-buildings.svg',
    icon: <IconBuildingBadge />
  },
  {
    id: 'proj-2',
    category: 'ROADS & HIGHWAYS',
    title: 'City Road Development Project',
    description: 'Delivered high-quality concrete for durable and long-lasting roads.',
    location: 'Lucknow, Uttar Pradesh',
    year: '2024',
    image: '/roads.svg',
    icon: <IconRoadBadge />
  },
  {
    id: 'proj-3',
    category: 'BRIDGES & FLYOVERS',
    title: 'Bridge Construction Project',
    description: 'Reliable concrete supply for strong and safe bridge infrastructure.',
    location: 'Uttar Pradesh',
    year: '2023',
    image: '/bridges.svg',
    icon: <IconBridgeBadge />
  },
  {
    id: 'proj-4',
    category: 'INDUSTRIAL CONSTRUCTION',
    title: 'Industrial Plant Construction',
    description: 'High-strength concrete for industrial structures and foundations.',
    location: 'Uttar Pradesh',
    year: '2023',
    image: '/industrial-construction.svg',
    icon: <IconFactoryBadge />
  }
];

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onNavigate }) => {
  const VALUES = [
    {
      icon: <IconValueProjects />,
      highlight: '500+',
      title: 'Projects Delivered',
      desc: 'Successfully completed across sectors'
    },
    {
      icon: <IconValueShield />,
      highlight: '18+',
      title: 'Years of Excellence',
      desc: 'Building trust through consistent quality'
    },
    {
      icon: <IconValueHardhat />,
      highlight: '100%',
      title: 'Quality Assured',
      desc: 'Tested, certified and engineered to last'
    },
    {
      icon: <IconValueSprout />,
      highlight: '',
      title: 'Sustainable Future',
      desc: 'Responsible construction for a better tomorrow'
    }
  ];

  const handleNavigateToContact = () => {
    if (onNavigate) {
      onNavigate('/contact?form=true');
    } else {
      window.location.hash = '/contact?form=true';
    }
  };

  return (
    <section id="featured-projects" className="feat-proj">
      <div className="feat-proj__container">
        {/* ── SECTION HEADER ── */}
        <div className="feat-proj__header">
          <div className="feat-proj__header-left">
            {/* Eyebrow with Building Icon */}
            <div className="feat-proj__eyebrow-wrap">
              <span className="feat-proj__eyebrow-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <path d="M9 22v-4h6v4" />
                  <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
                </svg>
              </span>
              <span className="feat-proj__eyebrow">FEATURED PROJECTS</span>
              <div className="feat-proj__eyebrow-line" />
            </div>

            {/* Main Headline */}
            <h2 className="feat-proj__title">
              DELIVERING STRENGTH,<br className="feat-proj__title-br" />
              <span className="feat-proj__title-blue"> EVERY</span> DAY
            </h2>

            {/* Description */}
            <p className="feat-proj__desc">
              From high-rise landmarks to critical infrastructure, we build with precision,
              quality and commitment that stands the test of time.
            </p>
          </div>

          {/* Top-Right CTA Button */}
          <div className="feat-proj__header-right">
            <button
              onClick={handleNavigateToContact}
              className="feat-proj__view-all-btn"
              aria-label="View All Projects"
            >
              <span>VIEW ALL PROJECTS</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── 4 FEATURED PROJECT CARDS ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="feat-proj__grid"
        >
          {FEATURED_PROJECTS_DATA.map((proj) => (
            <div
              key={proj.id}
              onClick={handleNavigateToContact}
              className="feat-proj__card"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleNavigateToContact();
                }
              }}
              aria-label={`View details for ${proj.title}`}
            >
              {/* Card Image Wrap */}
              <div className="feat-proj__card-img-wrap">
                <img
                  src={proj.image}
                  alt={proj.title}
                  loading="lazy"
                  className="feat-proj__card-img"
                />
              </div>

              {/* Overlapping Center Circular Badge */}
              <div className="feat-proj__card-badge">
                {proj.icon}
              </div>

              {/* Card Body */}
              <div className="feat-proj__card-body">
                <span className="feat-proj__card-cat">{proj.category}</span>
                <h3 className="feat-proj__card-title">{proj.title}</h3>
                <p className="feat-proj__card-desc">{proj.description}</p>

                {/* Card Meta Footer */}
                <div className="feat-proj__card-footer">
                  <div className="feat-proj__footer-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{proj.location}</span>
                  </div>

                  <div className="feat-proj__footer-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>{proj.year}</span>
                  </div>
                </div>
              </div>

              {/* Mobile Right Arrow */}
              <div className="feat-proj__mobile-arrow" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── BOTTOM STATS / VALUE STRIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="feat-proj__value-strip"
        >
          {VALUES.map((val, idx) => (
            <React.Fragment key={idx}>
              <div className="feat-proj__value-item">
                <div className="feat-proj__value-icon">
                  {val.icon}
                </div>
                <div className="feat-proj__value-texts">
                  <div className="feat-proj__value-heading-row">
                    {val.highlight && (
                      <span className="feat-proj__value-highlight">{val.highlight} </span>
                    )}
                    <span className="feat-proj__value-title">{val.title}</span>
                  </div>
                  <p className="feat-proj__value-desc">{val.desc}</p>
                </div>

                {/* Mobile Right Chevron */}
                <div className="feat-proj__value-chevron" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>

              {idx < VALUES.length - 1 && (
                <div className="feat-proj__value-sep" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
