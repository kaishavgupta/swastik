import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SVGProjects } from '../icons/SVGIcons';
import { clients } from '../data/mockData';


interface HomeProps {
  onNavigate: (path: string) => void;
}

/* ─── small inline helpers ─────────────────────────────── */
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
    <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
      stroke="#0868C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── STAT column data ─────────────────────────────────── */
const STATS = [
  {
    iconUrl: '/icons/experience.svg',
    main: '18+',
    sub1: 'YEARS OF',
    sub2: 'EXPERIENCE',
    big: true,
  },
  {
    iconUrl: '/icons/established.svg',
    label: 'SINCE',
    main: '2009',
    sub1: 'ESTABLISHED',
    big: true,
    hasLabel: true,
  },
  {
    iconUrl: '/icons/location.svg',
    main: 'LUCKNOW',
    sub1: 'UTTAR PRADESH,',
    sub2: 'INDIA',
    blue: true,
  },
  {
    iconUrl: '/icons/ready-mix.svg',
    main: 'READY MIX',
    sub1: 'CONCRETE',
    sub2: 'SOLUTIONS',
    blue: true,
  },
  {
    iconUrl: '/icons/quality.svg',
    main: 'QUALITY',
    sub1: 'YOU CAN',
    sub2: 'TRUST',
    blue: true,
  },
];



/* ─── PROCESS steps outline icons ─────────────────────── */
const ProcessStepIcon = ({ iconKey }: { iconKey: string }) => {
  const props = { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "#0875D1", strokeWidth: "2", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (iconKey) {
    case 'Verify': // Shield with check mark / quality verification
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 11 2 2 4-4" />
        </svg>
      );
    case 'Sliders': // Three vertical slider tracks
      return (
        <svg {...props}>
          <line x1="6" y1="3" x2="6" y2="21" />
          <circle cx="6" cy="15" r="2.5" fill="#EEF6FF" stroke="#0875D1" strokeWidth="2" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <circle cx="12" cy="9" r="2.5" fill="#EEF6FF" stroke="#0875D1" strokeWidth="2" />
          <line x1="18" y1="3" x2="18" y2="21" />
          <circle cx="18" cy="14" r="2.5" fill="#EEF6FF" stroke="#0875D1" strokeWidth="2" />
        </svg>
      );
    case 'Flask': // Chemistry flask with liquid line
      return (
        <svg {...props}>
          <path d="M10 2h4M10 2v6L5.5 17.5a2 2 0 0 0 1.8 2.5h9.4a2 2 0 0 0 1.8-2.5L14 8V2" />
          <path d="M7.8 15h8.4" />
        </svg>
      );
    case 'Slump': // Slump cone testing bucket with horizontal rings and line
      return (
        <svg {...props}>
          <path d="M6 3h12l-2 15H8L6 3z" />
          <path d="M7 8h10" />
          <path d="M7.5 13h9" />
          <path d="M12 3v15" />
        </svg>
      );
    case 'Strength': // Compression testing frame with piston pressing cube block
      return (
        <svg {...props}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="16" x2="20" y2="16" />
          <rect x="9" y="10" width="6" height="4" rx="1" fill="#EEF6FF" stroke="#0875D1" strokeWidth="2" />
          <path d="M12 5v3" />
        </svg>
      );
    case 'Sync': // Circular arrows
      return (
        <svg {...props}>
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l.73-.73" />
        </svg>
      );
    case 'Monitor': // Magnifying glass with centered checkmark
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="6" />
          <path d="m21 21-4.3-4.3" />
          <path d="m9 11 1.5 1.5 2.5-2.5" />
        </svg>
      );
    case 'Support': // Support headset
      return (
        <svg {...props}>
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      );
    default:
      return null;
  }
};

const StatsBarIcon = ({ iconKey }: { iconKey: string }) => {
  const props = { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#0875D1", strokeWidth: "2", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (iconKey) {
    case 'Verify':
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 11 2 2 4-4" />
        </svg>
      );
    case 'Award': // Medal with ribbon tails
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      );
    case 'Building': // High-rise office building
      return (
        <svg {...props}>
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="9" y1="22" x2="9" y2="16" />
          <line x1="9" y1="16" x2="15" y2="16" />
          <line x1="15" y1="16" x2="15" y2="22" />
          <line x1="9" y1="6" x2="9" y2="6.01" />
          <line x1="15" y1="6" x2="15" y2="6.01" />
          <line x1="9" y1="10" x2="9" y2="10.01" />
          <line x1="15" y1="10" x2="15" y2="10.01" />
        </svg>
      );
    case 'Users': // Group of users
      return (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M21 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      );
    default:
      return null;
  }
};

const ProductCardIcon = ({ iconKey }: { iconKey: string }) => {
  const props = { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "#0875D1", strokeWidth: "2.2", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (iconKey) {
    case 'Verify': // ShieldCheck
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 11 2 2 4-4" />
        </svg>
      );
    case 'Sliders': // SlidersHorizontal
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
    case 'Flask': // FlaskConical
      return (
        <svg {...props}>
          <path d="M10 2h4M10 2v6L5.5 17.5a2 2 0 0 0 1.8 2.5h9.4a2 2 0 0 0 1.8-2.5L14 8V2" />
          <path d="M7.8 15h8.4" />
        </svg>
      );
    case 'Waterproof': // Shield + Droplet
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 10a2.5 2.5 0 0 0-2.5 2.5c0 1.5 2.5 3.5 2.5 3.5s2.5-2 2.5-3.5A2.5 2.5 0 0 0 12 10z" />
        </svg>
      );
    case 'Fiber': // Layers / Hexagon structure
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

/* ─── STRENGTHS features data ────────────────────────── */
const FEATURE_CARDS = [
  {
    title: '18+ Years Experience',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    )
  },
  {
    title: 'Premium Quality',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    title: 'High Strength Concrete',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    )
  },
  {
    title: 'Reliable Delivery',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    )
  },
  {
    title: 'Technical Expertise',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  },
  {
    title: 'Customer-Focused Service',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    )
  },
  {
    title: 'Consistent Quality',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  },
  {
    title: 'Professional Support',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
];

/* ─── LEGACY timeline milestones data ────────────────── */
const TIMELINE_MILESTONES = [
  {
    label: '2009',
    title: 'Company Founded',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    )
  },
  {
    label: 'Early Mover',
    title: 'One of the first 4 RMC plants in Lucknow',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    label: 'Culture Builder',
    title: 'Started the culture of RMC in the city',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  },
  {
    label: 'Today',
    title: '18+ Years of Trusted Concrete Solutions',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }
];

/* ─── PRODUCTS cards definition ──────────────────────── */
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

/* ─── PROCESS steps definition ───────────────────────── */
const PROCESS_STEPS_DATA = [
  {
    step: 'STEP 01',
    title: 'Raw Material Check',
    desc: 'Rigorous testing of cement, aggregates, sand, and water at every source.',
    iconKey: 'Verify'
  },
  {
    step: 'STEP 02',
    title: 'Mix Design Control',
    desc: 'Advanced computerized batching controlled to exact recipe requirements.',
    iconKey: 'Sliders'
  },
  {
    step: 'STEP 03',
    title: 'Concrete Testing',
    desc: 'Regular sampling and temperature checks during production and mix stages.',
    iconKey: 'Flask'
  },
  {
    step: 'STEP 04',
    title: 'Slump Testing',
    desc: 'Ensuring consistency, flowability, and workability properties on-site.',
    iconKey: 'Slump'
  },
  {
    step: 'STEP 05',
    title: 'Strength Testing',
    desc: 'Compression testing of cubes at 7 and 28 days in our quality control labs.',
    iconKey: 'Strength'
  },
  {
    step: 'STEP 06',
    title: 'Batch Consistency',
    desc: 'Continuous automatic calibration checks on batching sensors.',
    iconKey: 'Sync'
  },
  {
    step: 'STEP 07',
    title: 'Quality Monitoring',
    desc: 'Real-time surveys and performance audit reports.',
    iconKey: 'Monitor'
  },
  {
    step: 'STEP 08',
    title: 'Site Support',
    desc: 'Dedicated technical staff on-site to assist with pumping and placement.',
    iconKey: 'Support'
  }
];

const BOTTOM_STATS_DATA = [
  {
    iconKey: 'Verify',
    value: '100%',
    label: 'QUALITY ASSURED'
  },
  {
    iconKey: 'Award',
    value: '18+',
    label: 'YEARS OF EXPERIENCE'
  },
  {
    iconKey: 'Building',
    value: '1000+',
    label: 'PROJECTS DELIVERED'
  },
  {
    iconKey: 'Users',
    value: '500+',
    label: 'SATISFIED CLIENTS'
  }
];



/* ══════════════════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════════════════ */
export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { scrollY } = useScroll();
  const truckY = useTransform(scrollY, [0, 600], [0, 40]);
  const waveY = useTransform(scrollY, [0, 600], [0, 15]);
  const textY = useTransform(scrollY, [0, 600], [0, -15]);
  const statsY = useTransform(scrollY, [0, 600], [0, -10]);



  return (
    <div style={{ width: '100%', overflowX: 'hidden', color: 'var(--text)' }}>

      {/* ══════════════════════════════════════════════════════
          §1  HERO
      ══════════════════════════════════════════════════════ */}
      {/* ── Desktop/Tablet Hero (≥ 752px) ── */}
      <section id="hero-desktop" className="hero-section desktop-only-block">
        <div className="hero-flex-layout">
          <div className="hero-left-col">
            <motion.div style={{ y: textY }} className="hero-left-content">
              <p className="hero-label">READY MIX CONCRETE</p>
              <h1 className="hero-title">
                BUILDING<br />
                STRENGTH.<br />
                DELIVERING<br />
                <span className="hero-title-accent">TRUST.</span>
              </h1>
              <p className="hero-paragraph">
                18+ years of dependable Ready Mix Concrete solutions for
                construction and infrastructure across Lucknow.
              </p>

              <div className="hero-buttons">
                <button className="btn-primary" onClick={() => onNavigate('/contact')}>
                  REQUEST A QUOTE <ArrowRight />
                </button>
                <button className="btn-secondary" onClick={() => onNavigate('/products')}>
                  EXPLORE PRODUCTS
                </button>
              </div>

              <div className="hero-location">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="var(--blue)" style={{ flexShrink: 0 }}>
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 1 1 9.9 9.9L10 18.9l-4.95-4.95a7 7 0 0 1 0-9.9zM10 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" clipRule="evenodd"/>
                </svg>
                <span>
                  <strong style={{ color: 'var(--navy)', fontWeight: 700 }}>LOCATION:</strong> LUCKNOW, UTTAR PRADESH, INDIA
                </span>
              </div>
            </motion.div>
          </div>

          <div className="hero-right-col">
            <motion.img
              style={{ y: truckY }}
              src="/swastik_ready_mix_truck.svg"
              alt="Swastik Mixtures Ready Mix Concrete Truck"
              className="hero-truck-visual"
            />
          </div>
        </div>

        {/* BLUE DECORATIVE WAVE */}
        <motion.div style={{ y: waveY }} className="hero-wave-container">
          <img src="/swastik-wave.svg" alt="" className="hero-wave-svg" />
        </motion.div>

        {/* BOTTOM STATISTICS CARD (contained inside hero viewport wrapper) */}
        <div className="hero-stats-wrapper">
          <motion.div style={{ y: statsY }} className="stats-card">
            <div className="stats-grid">
              {STATS.map((s, i) => (
                <div key={i} className="stats-item">
                  {/* Icon circle */}
                  <div className="stats-icon-wrap">
                    <img src={s.iconUrl} alt="" className="stats-icon-img" />
                  </div>
                  {/* Text */}
                  <div className="stats-text-wrap">
                    {s.hasLabel && (
                      <p className="stats-label">{s.label}</p>
                    )}
                    <p className={`stats-main ${s.blue ? 'color-blue' : 'color-navy'} ${s.big ? 'size-big' : 'size-normal'}`}>
                      {s.main}
                    </p>
                    <p className="stats-sub">
                      {s.sub1}<br />{s.sub2}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Mobile Hero (≤ 767px) ── */}
      <section id="hero-mobile" className="hero-section-mobile mobile-only-block">

        {/* ── Hero Card: truck SVG is the full scene (sky + cranes + ground + truck) ── */}
        <div className="mob-hero-card">

          {/* Full-bleed scene image — the SVG contains the complete construction background */}
          <img
            src="/swastik_ready_mix_truck.svg"
            alt="Swastik Mixtures Ready Mix Concrete Truck on construction site"
            className="mob-hero-scene-img"
          />

          {/* Text overlay — absolutely positioned top-left over the scene */}
          <div className="mob-hero-overlay">
            <h1 className="mob-hero-title">
              <span className="mob-hero-title-dark">BUILD WITH</span>
              <span className="mob-hero-title-blue">RESPECT</span>
            </h1>
            <p className="mob-hero-desc">
              For your vision, our materials, and Lucknow's
              infrastructure. 18+ years of dependable service.
            </p>
          </div>
        </div>

        {/* CTA buttons — below the card */}
        <div className="mob-cta-section">
          <button className="mob-btn-primary" onClick={() => onNavigate('/contact')}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              REQUEST A QUOTE
            </span>
            <span>→</span>
          </button>
          <button className="mob-btn-secondary" onClick={() => onNavigate('/products')}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
              EXPLORE PRODUCTS
            </span>
            <span>→</span>
          </button>
        </div>

        {/* Service area */}
        <div className="mob-service-area">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="var(--blue)" style={{ flexShrink: 0 }}>
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 1 1 9.9 9.9L10 18.9l-4.95-4.95a7 7 0 0 1 0-9.9zM10 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" clipRule="evenodd"/>
          </svg>
          <span>
            <strong style={{ color: 'var(--navy)', fontWeight: 700 }}>SERVICE AREA:</strong>{' '}
            LUCKNOW, UTTAR PRADESH
          </span>
        </div>

        {/* BLUE DECORATIVE WAVE */}
        <div className="hero-wave-container">
          <img src="/swastik-wave.svg" alt="" className="hero-wave-svg" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §2  STATISTICS CARD
      ══════════════════════════════════════════════════════ */}
      <section id="stats" className="stats-section mobile-only-block">
        <div className="container">
          <div className="stats-card">
            <div className="stats-grid">
              {STATS.map((s, i) => (
                <div key={i} className="stats-item">
                  {/* Icon circle */}
                  <div className="stats-icon-wrap">
                    <img src={s.iconUrl} alt="" className="stats-icon-img" />
                  </div>
                  {/* Text */}
                  <div className="stats-text-wrap">
                    {s.hasLabel && (
                      <p className="stats-label">{s.label}</p>
                    )}
                    <p className={`stats-main ${s.blue ? 'color-blue' : 'color-navy'} ${s.big ? 'size-big' : 'size-normal'}`}>
                      {s.main}
                    </p>
                    <p className="stats-sub">
                      {s.sub1}<br />{s.sub2}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §3  ABOUT SWASTIK MIXTURES
      ══════════════════════════════════════════════════════ */}
      <section id="about" className="about-section-fullscreen">

        {/* ── Full-bleed right-side image ── */}
        <div className="about-bg-img-col" aria-hidden="true">
          <img
            src="/swastik-concrete-batching-plant.svg"
            alt=""
            className="about-bg-img"
          />
          {/* Gradient: white → transparent from left edge into image */}
          <div className="about-img-fade" />
        </div>

        {/* ── Left text content ── */}
        <div className="about-left-col">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="about-left-content"
          >
            <span className="about-eyebrow">ABOUT SWASTIK MIXTURES</span>
            <h2 className="about-heading">
              18 Years of<br />Concreting{' '}
              <span className="about-heading-accent">Trust</span>
            </h2>
            <span className="about-divider" />
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
            <button className="about-cta" onClick={() => onNavigate('/about')}>
              DISCOVER OUR STORY &rarr;
            </button>
          </motion.div>
        </div>

        {/* ── 18+ Floating Badge at the text/image seam ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.35, duration: 0.75, ease: "easeOut" }}
          className="about-floating-badge"
        >
          <div className="about-badge-icon">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
          </div>
          <p className="about-badge-num">18+</p>
          <p className="about-badge-txt">YEARS OF<br />CONCRETING TRUST</p>
        </motion.div>

        {/* ── Bottom Wave ── */}
        <div className="about-wave-container" aria-hidden="true">
          <svg
            viewBox="0 0 1440 130"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="about-wave-svg"
          >
            {/* Deep navy base wave */}
            <path
              d="M0,65 C180,10 360,110 540,60 C720,10 900,100 1080,55 C1260,10 1380,70 1440,55 L1440,130 L0,130 Z"
              fill="#071A36"
            />
            {/* Blue accent wave layered on top */}
            <path
              d="M0,85 C200,40 400,115 600,75 C800,35 1000,105 1200,70 C1320,50 1390,85 1440,80 L1440,130 L0,130 Z"
              fill="#0868C9"
              fillOpacity="0.45"
            />
          </svg>
        </div>

        {/* ── Bottom 3-column Info Panel ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
          className="about-info-panel"
        >
          {/* Lucknow */}
          <div className="about-info-item">
            <div className="about-info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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

          {/* Ready Mix */}
          <div className="about-info-item">
            <div className="about-info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="about-info-text">
              <p className="about-info-main">READY MIX</p>
              <p className="about-info-sub">CONCRETE</p>
            </div>
          </div>

          <div className="about-info-sep" />

          {/* Quality */}
          <div className="about-info-item">
            <div className="about-info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="about-info-text">
              <p className="about-info-main">QUALITY</p>
              <p className="about-info-sub">YOU CAN TRUST</p>
            </div>
          </div>
        </motion.div>

      </section>


      {/* ══════════════════════════════════════════════════════
          §4  OUR LEGACY — FULL-SCREEN SECTION
      ══════════════════════════════════════════════════════ */}
      <section id="legacy" className="legacy-section">

        {/* ── z-index 1: Blurred factory background ── */}
        <div className="legacy-factory-bg" aria-hidden="true" />

        {/* ── z-index 2: White gradient overlay (left clean, right reveals factory) ── */}
        <div className="legacy-factory-fade" aria-hidden="true" />

        {/* ── z-index 3: Main content grid ── */}
        <div className="legacy-content-grid">

          {/* LEFT — Feature Panel (4×2 grid) */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="legacy-features-panel"
          >
            <div className="legacy-features-grid">
              {FEATURE_CARDS.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.055, duration: 0.5, ease: "easeOut" }}
                  className="legacy-feature-card"
                >
                  <div className="legacy-feature-icon">{card.icon}</div>
                  <h4 className="legacy-feature-title">{card.title}</h4>
                  <span className="legacy-feature-accent" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Our Legacy heading + timeline */}
          <div className="legacy-right-col">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="legacy-eyebrow"
            >
              OUR LEGACY
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1, duration: 0.75, ease: "easeOut" }}
              className="legacy-heading"
            >
              Building Lucknow's RMC<br />
              Culture Since{' '}
              <span className="legacy-heading-accent">2009</span>
            </motion.h2>

            {/* Blue accent divider */}
            <span className="legacy-divider" />

            {/* Horizontal timeline */}
            <div className="legacy-timeline">
              {/* Dashed connector track */}
              <div className="legacy-timeline-track" aria-hidden="true" />

              {TIMELINE_MILESTONES.map((item, i) => (
                <div key={item.label} className="legacy-milestone">
                  {/* Year/label above node */}
                  <span className="legacy-milestone-label">{item.label}</span>

                  {/* Blue ring + filled circle with icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.75 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: 0.25 + i * 0.12, duration: 0.55, ease: "easeOut" }}
                    className="legacy-milestone-node"
                  >
                    {item.icon}
                  </motion.div>

                  {/* Small dot connector below node */}
                  <div className="legacy-milestone-dot" aria-hidden="true" />

                  {/* Description below */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: 0.45 + i * 0.12, duration: 0.55 }}
                    className="legacy-milestone-desc"
                  >
                    {item.title}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>

        </div>{/* /legacy-content-grid */}

        {/* ── z-index 4: Bottom wave SVG ── */}
        <div className="legacy-wave-container" aria-hidden="true">
          <svg
            viewBox="0 0 1440 160"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="legacy-wave-svg"
          >
            {/* Dark navy base — solid fill to bottom */}
            <path
              d="M0,80 C240,20 480,140 720,80 C960,20 1200,130 1440,70 L1440,160 L0,160 Z"
              fill="#071A36"
            />
            {/* Bright blue accent wave on top */}
            <path
              d="M0,100 C200,48 440,150 720,95 C960,48 1220,140 1440,88 L1440,160 L0,160 Z"
              fill="#0868C9"
              fillOpacity="0.7"
            />
          </svg>
        </div>

      </section>

      {/* ══════════════════════════════════════════════════════
          §5  PRODUCTS
      ══════════════════════════════════════════════════════ */}
      <section id="products" className="products-outer-section">
        {/* Subtle Dotted Pattern - Upper Left */}
        <div className="products-bg-dots" aria-hidden="true">
          <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#0875D1" fillOpacity="0.08" />
              </pattern>
            </defs>
            <rect width="240" height="240" fill="url(#dotPattern)" />
          </svg>
        </div>

        {/* Subtle Curved Lines - Bottom Left */}
        <div className="products-bg-curve-left" aria-hidden="true">
          <svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="-50" cy="400" r="150" stroke="#0875D1" strokeOpacity="0.05" strokeWidth="1.5" />
            <circle cx="-50" cy="400" r="200" stroke="#0875D1" strokeOpacity="0.05" strokeWidth="1.5" />
            <circle cx="-50" cy="400" r="250" stroke="#0875D1" strokeOpacity="0.05" strokeWidth="1.5" />
            <circle cx="-50" cy="400" r="300" stroke="#0875D1" strokeOpacity="0.05" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Subtle Curved Lines - Right/Bottom */}
        <div className="products-bg-curve-right" aria-hidden="true">
          <svg width="450" height="450" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="500" cy="500" r="180" stroke="#0875D1" strokeOpacity="0.05" strokeWidth="1.5" />
            <circle cx="500" cy="500" r="230" stroke="#0875D1" strokeOpacity="0.05" strokeWidth="1.5" />
            <circle cx="500" cy="500" r="280" stroke="#0875D1" strokeOpacity="0.05" strokeWidth="1.5" />
            <circle cx="500" cy="500" r="330" stroke="#0875D1" strokeOpacity="0.05" strokeWidth="1.5" />
            <circle cx="500" cy="500" r="380" stroke="#0875D1" strokeOpacity="0.05" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="products-container">
          <div className="products-main-layout">
            
            {/* Left Block — Heading & Introduction */}
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
                <button className="products-view-all-btn" onClick={() => onNavigate('/products')}>
                  VIEW ALL PRODUCTS <ArrowRight />
                </button>
              </div>

              {/* Trust Feature List */}
              <div className="products-feature-list">
                <div className="products-feature-line-connector" aria-hidden="true" />
                
                <div className="products-feature-item">
                  <div className="products-feature-icon-circle">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 11 2 2 4-4" />
                    </svg>
                  </div>
                  <span className="products-feature-text">Advanced Technology</span>
                </div>
                
                <div className="products-feature-item">
                  <div className="products-feature-icon-circle">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <span className="products-feature-text">Consistent Quality</span>
                </div>
                
                <div className="products-feature-item">
                  <div className="products-feature-icon-circle">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                    </svg>
                  </div>
                  <span className="products-feature-text">Reliable Support</span>
                </div>
              </div>
            </div>

            {/* Right Block — Product Cards Grid */}
            <div className="products-grid-wrapper">
              <div className="products-cards-grid">
                {PRODUCT_CARDS_DATA.map((card) => (
                  <div key={card.id} className="product-card">
                    {/* Card Image */}
                    <div className="product-card-image-wrap">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="product-card-image"
                      />
                    </div>
                    
                    {/* Meta Row: Icon Circle (Left) & Badge (Right) */}
                    <div className="product-card-meta-row">
                      <div className="product-card-icon-wrap">
                        <ProductCardIcon iconKey={card.iconKey} />
                      </div>
                      <span className="product-card-badge">{card.badge}</span>
                    </div>

                    {/* Card Body Content */}
                    <div className="product-card-content">
                      <h3 className="product-card-title">{card.title}</h3>
                      <div className="product-card-line" aria-hidden="true" />
                      <p className="product-card-description">{card.desc}</p>
                      
                      {/* Bottom-left Arrow Button */}
                      <div className="product-card-arrow-wrap">
                        <div className="product-card-circle-arrow">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

        {/* Bottom Navy Wave Transition */}
        <div className="products-wave-container" aria-hidden="true">
          <svg
            viewBox="0 0 1440 160"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="products-wave-svg"
          >
            {/* Primary Blue wave layer */}
            <path
              d="M0,90 C260,30 460,150 720,95 C980,40 1200,120 1440,80 L1440,160 L0,160 Z"
              fill="#0875D1"
            />
            {/* Dark Navy wave layer on top */}
            <path
              d="M0,110 C240,55 480,165 720,110 C960,55 1200,145 1440,95 L1440,160 L0,160 Z"
              fill="#071B3A"
            />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §6  QUALITY PROCESS
      ══════════════════════════════════════════════════════ */}
      <section id="quality" className="quality-section">
        {/* Abstract Concentric Curved Lines - Top Left */}
        <div className="quality-bg-pattern-left" aria-hidden="true">
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="100" stroke="#0875D1" strokeOpacity="0.08" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="140" stroke="#0875D1" strokeOpacity="0.08" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="180" stroke="#0875D1" strokeOpacity="0.08" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="220" stroke="#0875D1" strokeOpacity="0.08" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="260" stroke="#0875D1" strokeOpacity="0.08" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Abstract Concentric Curved Lines - Bottom Right */}
        <div className="quality-bg-pattern-right" aria-hidden="true">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="350" cy="350" r="120" stroke="#0875D1" strokeOpacity="0.08" strokeWidth="1.5" />
            <circle cx="350" cy="350" r="160" stroke="#0875D1" strokeOpacity="0.08" strokeWidth="1.5" />
            <circle cx="350" cy="350" r="200" stroke="#0875D1" strokeOpacity="0.08" strokeWidth="1.5" />
            <circle cx="350" cy="350" r="240" stroke="#0875D1" strokeOpacity="0.08" strokeWidth="1.5" />
            <circle cx="350" cy="350" r="280" stroke="#0875D1" strokeOpacity="0.08" strokeWidth="1.5" />
            <circle cx="350" cy="350" r="320" stroke="#0875D1" strokeOpacity="0.08" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="quality-container">
          {/* Header block */}
          <div className="quality-header">
            <span className="quality-eyebrow">OUR PROCESS</span>
            <h2 className="quality-heading">Quality That Builds Confidence</h2>
            <div className="quality-header-line" aria-hidden="true" />
            <p className="quality-paragraph">
              From the finest raw materials to timely delivery, every step in our process is designed to ensure superior strength, durability, and complete reliability.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="quality-grid">
            {PROCESS_STEPS_DATA.map((step, i) => (
              <div key={i} className="quality-card">
                <div className="quality-card-icon-wrap">
                  <ProcessStepIcon iconKey={step.iconKey} />
                </div>
                <span className="quality-card-step">{step.step}</span>
                <h3 className="quality-card-title">{step.title}</h3>
                <div className="quality-card-line" aria-hidden="true" />
                <p className="quality-card-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom Stats Bar */}
          <div className="quality-stats-bar">
            {BOTTOM_STATS_DATA.map((stat, i) => (
              <React.Fragment key={i}>
                <div className="quality-stat-block">
                  <div className="quality-stat-icon">
                    <StatsBarIcon iconKey={stat.iconKey} />
                  </div>
                  <div className="quality-stat-text">
                    <span className="quality-stat-value">{stat.value}</span>
                    <span className="quality-stat-label">{stat.label}</span>
                  </div>
                </div>
                {i < BOTTOM_STATS_DATA.length - 1 && (
                  <div className="quality-stat-divider" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom layered blue wave */}
        <div className="quality-wave-container" aria-hidden="true">
          <svg
            viewBox="0 0 1440 160"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="quality-wave-svg"
          >
            {/* Dark navy base — solid fill to bottom */}
            <path
              d="M0,80 C240,20 480,140 720,80 C960,20 1200,130 1440,70 L1440,160 L0,160 Z"
              fill="#071D41"
            />
            {/* Bright blue accent wave on top */}
            <path
              d="M0,100 C200,48 440,150 720,95 C960,48 1220,140 1440,88 L1440,160 L0,160 Z"
              fill="#0875D1"
              fillOpacity="0.75"
            />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §7  WHERE CONCRETE BUILDS
      ══════════════════════════════════════════════════════ */}
      <section id="projects" className="section-py" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">PROJECT TYPES</span>
            <h2 className="section-heading">Where Our Concrete Builds</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}
          >
            {Object.entries(SVGProjects).map(([key, SvgCompRaw], i) => {
              const SvgComp = SvgCompRaw as any;
              const labels: Record<string, string> = {
                HighRise: 'High-Rise Buildings',
                Roads: 'Roads & Highways',
                Bridges: 'Bridges',
                Commercial: 'Commercial Structures',
                Infrastructure: 'Infrastructure',
                Industrial: 'Industrial Construction',
              };
              return (
                <div
                  key={key}
                  style={{
                    background: '#fff',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'transform var(--transition), box-shadow var(--transition)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-sm)';
                  }}
                >
                  <div
                    style={{
                      background: `hsl(${210 + i * 10}, 60%, 96%)`,
                      padding: '32px',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <SvgComp style={{ width: '80px', height: '80px' }} />
                  </div>
                  <div style={{ padding: '16px 20px' }}>
                    <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)' }}>
                      {labels[key] || key}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §8  CLIENTS
      ══════════════════════════════════════════════════════ */}
      <section id="clients" className="section-py" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">OUR CLIENTS</span>
            <h2 className="section-heading">Trusted by Industry Leaders</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
            }}
          >
            {clients.map(client => (
              <div key={client.id} className="client-logo-item">
                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    textAlign: 'center',
                  }}
                >
                  {client.name}
                </p>
              </div>
            ))}
            <div className="client-logo-item">
              <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-muted)', textAlign: 'center' }}>
                & Many More
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §9  SAFETY & RESPONSIBILITY
      ══════════════════════════════════════════════════════ */}
      <section id="safety" className="section-py" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'center',
            }}
          >
            {/* Image */}
            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                aspectRatio: '4/3',
                background: 'var(--navy)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #0868C9 0%, #071A36 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" opacity="0.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="section-label">SAFETY & RESPONSIBILITY</span>
              <h2 className="section-heading" style={{ marginBottom: '20px' }}>
                Building with Safety<br />as Foundation
              </h2>
              <span className="blue-divider" />
              <ul
                style={{
                  listStyle: 'none',
                  marginTop: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                }}
              >
                {[
                  'Safety-first approach on all project sites',
                  'Proper PPE for all team members',
                  'Safe concrete handling & operations',
                  'Professional and trained workforce',
                  'Quality-controlled production',
                  'On-time site coordination',
                  'Committed to a safer construction environment',
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontSize: '15px',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                      paddingBlock: '5px',
                    }}
                  >
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §10  CTA BANNER
      ══════════════════════════════════════════════════════ */}
      <section
        id="cta"
        style={{
          background: `linear-gradient(135deg, #071A36 0%, #0868C9 100%)`,
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: '#6DB4F5',
              marginBottom: '16px',
            }}
          >
            START YOUR PROJECT
          </p>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 50px)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Have a Project in Mind?
          </h2>
          <p
            style={{
              fontSize: '17px',
              color: 'rgba(255,255,255,.72)',
              marginBottom: '36px',
              lineHeight: 1.7,
            }}
          >
            Let's build something strong with Swastik Mixtures.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('/contact')}
              style={{
                background: '#fff',
                color: 'var(--blue)',
                border: '2px solid #fff',
                borderRadius: 'var(--radius-sm)',
                padding: '14px 32px',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '.06em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'transform var(--transition)',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'none')}
            >
              REQUEST A QUOTE <ArrowRight />
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              style={{
                background: 'transparent',
                color: '#fff',
                border: '2px solid rgba(255,255,255,.5)',
                borderRadius: 'var(--radius-sm)',
                padding: '14px 32px',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '.06em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'border-color var(--transition), transform var(--transition)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#fff';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,.5)';
                (e.currentTarget as HTMLElement).style.transform = 'none';
              }}
            >
              CONTACT OUR TEAM
            </button>
          </div>
        </div>
      </section>

      {/* ── Responsive overrides ── */}
      <style>{`
        /* Hero responsive logic */
        @media (max-width: 900px) {
          #hero {
            min-height: auto !important;
          }
          #hero > div:first-child {
            position: relative !important;
            width: 100% !important;
            height: 320px !important;
            order: 2;
          }
          #hero > div:nth-child(2) {
            display: none !important; /* Hide left gradient on stacked layout */
          }
          #hero > .container {
            padding-block: 40px 20px !important;
            order: 1;
          }
        }
        @media (max-width: 479px) {
          #hero > div:first-child {
            height: 220px !important;
          }
        }

        /* Stats card */
        #stats .stats-card > div {
          grid-template-columns: repeat(5, 1fr);
        }
        @media (max-width: 1023px) {
          #stats .stats-card > div {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 639px) {
          #stats .stats-card > div {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* About grid */
        #about > .container > div {
          grid-template-columns: 1fr 1.4fr;
        }
        @media (max-width: 1023px) {
          #about > .container > div {
            grid-template-columns: 1fr;
          }
          #about > .container > div > div:last-child {
            display: none;
          }
        }

        /* Legacy timeline */
        #legacy > .container > div:last-child {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 1023px) {
          #legacy > .container > div:last-child {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 639px) {
          #legacy > .container > div:last-child {
            grid-template-columns: 1fr;
          }
        }

        /* Products */
        #products > .container > div:last-child {
          grid-template-columns: repeat(5, 1fr);
        }
        @media (max-width: 1200px) {
          #products > .container > div:last-child {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 767px) {
          #products > .container > div:last-child {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          #products > .container > div:last-child {
            grid-template-columns: 1fr;
          }
        }

        /* Quality */
        #quality > .container > div:last-child {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 1023px) {
          #quality > .container > div:last-child {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          #quality > .container > div:last-child {
            grid-template-columns: 1fr;
          }
        }

        /* Projects */
        #projects > .container > div:last-child {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 1023px) {
          #projects > .container > div:last-child {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 639px) {
          #projects > .container > div:last-child {
            grid-template-columns: 1fr;
          }
        }

        /* Clients */
        #clients > .container > div:last-child {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 1023px) {
          #clients > .container > div:last-child {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 639px) {
          #clients > .container > div:last-child {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Safety */
        #safety > .container > div {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 1023px) {
          #safety > .container > div {
            grid-template-columns: 1fr;
          }
          #safety > .container > div > div:first-child {
            display: none;
          }
        }

        /* Stats card borders on mobile */
        @media (max-width: 1023px) {
          #stats .stats-card > div > div {
            border-right: none !important;
            border-bottom: 1px solid var(--border);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
