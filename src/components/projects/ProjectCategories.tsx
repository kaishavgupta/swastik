import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCategoriesProps {
  onNavigate?: (path: string) => void;
}

/* ── Custom High-Precision Blue Construction Line Icons ── */

// 1. High-Rise Buildings
const IconHighRise = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="14" y="6" width="20" height="36" rx="2" />
    <path d="M6 20h8v22H6z" />
    <path d="M34 24h8v18h-8z" />
    <line x1="24" y1="2" x2="24" y2="6" />
    <path d="M19 12h2M27 12h2M19 18h2M27 18h2M19 24h2M27 24h2M19 30h2M27 30h2M19 36h2M27 36h2" strokeWidth="2" />
    <line x1="2" y1="42" x2="46" y2="42" />
  </svg>
);

// 2. Roads & Highways
const IconHighways = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 42L18 6" />
    <path d="M38 42L30 6" />
    <line x1="24" y1="8" x2="24" y2="13" strokeDasharray="3 3" />
    <line x1="24" y1="19" x2="24" y2="26" strokeDasharray="4 4" strokeWidth="2.5" />
    <line x1="24" y1="32" x2="24" y2="40" strokeWidth="3" />
    <line x1="4" y1="42" x2="44" y2="42" />
  </svg>
);

// 3. Bridges & Flyovers
const IconBridges = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 28h40" strokeWidth="2.5" />
    <line x1="14" y1="12" x2="14" y2="40" strokeWidth="2.5" />
    <line x1="34" y1="12" x2="34" y2="40" strokeWidth="2.5" />
    <path d="M4 28c8-14 10-16 10-16s10 12 20 0c0 0 2 2 10 16" />
    <line x1="8" y1="23" x2="8" y2="28" />
    <line x1="20" y1="20" x2="20" y2="28" />
    <line x1="24" y1="22" x2="24" y2="28" />
    <line x1="28" y1="20" x2="28" y2="28" />
    <line x1="40" y1="23" x2="40" y2="28" />
    <line x1="2" y1="40" x2="46" y2="40" />
  </svg>
);

// 4. Commercial Structures
const IconCommercial = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 18l18-10 18 10v22H6V18z" />
    <path d="M12 18v22" />
    <path d="M36 18v22" />
    <rect x="18" y="24" width="12" height="16" />
    <line x1="24" y1="24" x2="24" y2="40" />
    <line x1="2" y1="40" x2="46" y2="40" />
  </svg>
);

// 5. Industrial Construction
const IconIndustrial = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 40V22l10 6v-6l10 6V14h14v26H6z" />
    <rect x="32" y="6" width="6" height="8" />
    <path d="M34 6c0-2 2-3 4-4" strokeDasharray="2 2" />
    <rect x="30" y="24" width="6" height="6" />
    <rect x="18" y="30" width="6" height="6" />
    <line x1="2" y1="40" x2="46" y2="40" />
  </svg>
);

// 6. Infrastructure Projects (Dam / Utilities)
const IconInfrastructure = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 12h32v24H8z" />
    <line x1="16" y1="12" x2="16" y2="36" />
    <line x1="24" y1="12" x2="24" y2="36" />
    <line x1="32" y1="12" x2="32" y2="36" />
    <path d="M4 36c4 0 6 2 10 2s6-2 10-2 6 2 10 2 6-2 10-2" strokeWidth="2.5" />
    <path d="M4 42c4 0 6 2 10 2s6-2 10-2 6 2 10 2 6-2 10-2" strokeWidth="2" />
    <line x1="4" y1="12" x2="44" y2="12" />
  </svg>
);

// Value Strip Icons
const IconShieldCheck = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const IconHardhat = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 18h20" />
    <path d="M5 18v-4a7 7 0 0 1 14 0v4" />
    <path d="M10 7v7M14 7v7" />
    <path d="M12 4v3" />
  </svg>
);

const IconTeam = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconSprout = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 20h10" />
    <path d="M12 20v-8" />
    <path d="M12 12c0-4.5 3.5-7 8-7 0 4.5-2.5 8-8 7z" />
    <path d="M12 15c0-3.5-2.5-5.5-6-5.5 0 3.5 2 6 6 5.5z" />
  </svg>
);

const IconRightArrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const IconChevron = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const ProjectCategories: React.FC<ProjectCategoriesProps> = ({ onNavigate }) => {
  const CATEGORIES = [
    {
      id: 'high-rise',
      title: 'High-Rise Buildings',
      desc: 'Concrete solutions for residential and commercial high-rise structures.',
      icon: <IconHighRise />
    },
    {
      id: 'highways',
      title: 'Roads & Highways',
      desc: 'Durable concrete for roads, expressways and urban infrastructure.',
      icon: <IconHighways />
    },
    {
      id: 'bridges',
      title: 'Bridges & Flyovers',
      desc: 'Strong and reliable concrete for bridges, flyovers and overpasses.',
      icon: <IconBridges />
    },
    {
      id: 'commercial',
      title: 'Commercial Structures',
      desc: 'High-performance concrete for offices, malls and commercial spaces.',
      icon: <IconCommercial />
    },
    {
      id: 'industrial',
      title: 'Industrial Construction',
      desc: 'Concrete that meets the demands of industrial plants and facilities.',
      icon: <IconIndustrial />
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure Projects',
      desc: 'Supporting dams, tunnels, utilities and large-scale infrastructure.',
      icon: <IconInfrastructure />
    }
  ];

  const VALUES = [
    {
      icon: <IconShieldCheck />,
      title: 'Trusted Quality',
      subtitle: 'Consistent. Reliable. Certified.'
    },
    {
      icon: <IconHardhat />,
      title: 'Advanced Technology',
      subtitle: 'Modern equipment & processes'
    },
    {
      icon: <IconTeam />,
      title: 'Expert Team',
      subtitle: 'Experienced professionals'
    },
    {
      icon: <IconSprout />,
      title: 'Sustainable Growth',
      subtitle: 'Building a better tomorrow'
    }
  ];

  const handleCardClick = (catId: string) => {
    if (onNavigate) {
      onNavigate(`/contact?form=true&category=${catId}`);
    } else {
      window.location.hash = `/contact?form=true&category=${catId}`;
    }
  };

  return (
    <section id="project-categories" className="proj-cat">
      <div className="proj-cat__container">
        {/* ── SECTION HEADER ── */}
        <div className="proj-cat__header">
          {/* Eyebrow with Building Icon */}
          <div className="proj-cat__eyebrow-wrap">
            <span className="proj-cat__eyebrow-dash">—</span>
            <span className="proj-cat__eyebrow-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <path d="M9 22v-4h6v4" />
                <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
              </svg>
            </span>
            <span className="proj-cat__eyebrow">PROJECT CATEGORIES</span>
            <span className="proj-cat__eyebrow-dash">—</span>
          </div>

          {/* Main Headline */}
          <h2 className="proj-cat__title">
            WHERE OUR <span className="proj-cat__title-blue">CONCRETE</span> BUILDS
          </h2>

          {/* Section Description */}
          <p className="proj-cat__desc">
            From high-rises and highways to industrial plants and infrastructure,
            our concrete powers the projects that build better communities.
          </p>

          {/* Decorative Center Blue Bar */}
          <div className="proj-cat__divider" />
        </div>

        {/* ── 6 PROJECT CATEGORY CARDS (Desktop: 1 Row, Tablet: 3x2, Mobile: Stacked List) ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="proj-cat__grid"
        >
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCardClick(cat.id)}
              className="proj-cat__card"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(cat.id);
                }
              }}
              aria-label={`Explore ${cat.title} category`}
            >
              {/* Card Icon */}
              <div className="proj-cat__card-icon-wrap">
                {cat.icon}
              </div>

              {/* Card Mini Divider */}
              <div className="proj-cat__card-divider" />

              {/* Card Text Content */}
              <div className="proj-cat__card-content">
                <h3 className="proj-cat__card-title">{cat.title}</h3>
                <p className="proj-cat__card-desc">{cat.desc}</p>
              </div>

              {/* Card Action Arrow Button */}
              <div className="proj-cat__card-btn" aria-hidden="true">
                <IconRightArrow />
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── BOTTOM VALUE STRIP (Desktop: 4-col Bar, Mobile: Stacked List) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="proj-cat__value-strip"
        >
          {VALUES.map((val, idx) => (
            <React.Fragment key={idx}>
              <div className="proj-cat__value-item">
                <div className="proj-cat__value-icon">
                  {val.icon}
                </div>
                <div className="proj-cat__value-texts">
                  <span className="proj-cat__value-title">{val.title}</span>
                  <span className="proj-cat__value-sub">{val.subtitle}</span>
                </div>
                {/* Mobile Chevron */}
                <div className="proj-cat__value-chevron" aria-hidden="true">
                  <IconChevron />
                </div>
              </div>

              {idx < VALUES.length - 1 && (
                <div className="proj-cat__value-sep" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectCategories;
