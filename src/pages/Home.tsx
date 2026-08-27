import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SVGProjects } from '../icons/SVGIcons';
import { products, legacyTimeline, qualitySteps, clients } from '../data/mockData';
import heroTruck from '../assets/hero_truck_right.jpg';

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

/* ─── PRODUCT cards data ───────────────────────────────── */
const PRODUCT_COLORS = ['#0868C9', '#1677D2', '#0554a8', '#0775DB', '#0549A0'];

/* ─── QUALITY steps icon ───────────────────────────────── */
const QualityIcon = ({ idx }: { idx: number }) => {
  const icons = [
    <path key={0} strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
    <path key={1} strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />,
    <path key={2} strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />,
    <path key={3} strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />,
    <path key={4} strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />,
    <path key={5} strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />,
    <path key={6} strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />,
    <path key={7} strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197" />,
  ];
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
      {icons[idx % icons.length]}
    </svg>
  );
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

/* ══════════════════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════════════════ */
export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { scrollY } = useScroll();
  const truckY = useTransform(scrollY, [0, 600], [0, 40]);
  const waveY = useTransform(scrollY, [0, 600], [0, 15]);
  const textY = useTransform(scrollY, [0, 600], [0, -15]);
  const statsY = useTransform(scrollY, [0, 600], [0, -10]);

  // Window size tracking to conditionally apply styles if needed
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ width: '100%', overflowX: 'hidden', color: 'var(--text)' }}>

      {/* ══════════════════════════════════════════════════════
          §1  HERO
      ══════════════════════════════════════════════════════ */}
      {/* ── Desktop/Tablet Hero (≥ 752px) ── */}
      <section id="hero-desktop" className="hero-section desktop-only-block">
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

        {/* BLUE DECORATIVE WAVE */}
        <motion.div style={{ y: waveY }} className="hero-wave-container">
          <img src="/swastik-wave.svg" alt="" className="hero-wave-svg" />
        </motion.div>

        {/* BOTTOM STATISTICS CARD (contained inside hero viewport wrapper) */}
        <motion.div style={{ y: statsY }} className="hero-stats-wrapper">
          <div className="container" style={{ maxWidth: '1440px' }}>
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
        </motion.div>
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
      <section id="products" className="section-py" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">OUR PRODUCTS</span>
            <h2 className="section-heading">
              Concrete Engineered<br />for Every Requirement
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '20px',
            }}
          >
            {products.map((p, i) => (
              <div
                key={p.id}
                className="card"
                style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
              >
                {/* Color banner */}
                <div
                  style={{
                    height: '6px',
                    background: PRODUCT_COLORS[i % PRODUCT_COLORS.length],
                  }}
                />
                <div style={{ padding: '20px' }}>
                  <p
                    style={{
                      fontSize: '10.5px',
                      fontWeight: 700,
                      color: PRODUCT_COLORS[i % PRODUCT_COLORS.length],
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      marginBottom: '8px',
                    }}
                  >
                    {p.category}
                  </p>
                  {p.grade && (
                    <p
                      style={{
                        fontSize: '22px',
                        fontWeight: 800,
                        color: 'var(--navy)',
                        marginBottom: '4px',
                        lineHeight: 1.1,
                      }}
                    >
                      {p.grade}
                    </p>
                  )}
                  <h3
                    style={{
                      fontSize: '15px',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      marginBottom: '10px',
                      lineHeight: 1.3,
                    }}
                  >
                    {p.name}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                    {p.description}
                  </p>
                </div>
                <div style={{ padding: '14px 20px', marginTop: 'auto', borderTop: '1px solid var(--border)' }}>
                  <button
                    onClick={() => onNavigate('/products')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--blue)',
                      fontSize: '12.5px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    LEARN MORE <ArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §6  QUALITY
      ══════════════════════════════════════════════════════ */}
      <section id="quality" className="section-py" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: '11.5px',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#6DB4F5',
                marginBottom: '14px',
              }}
            >
              OUR PROCESS
            </span>
            <h2
              style={{
                fontSize: 'clamp(26px, 3vw, 40px)',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '-0.02em',
              }}
            >
              Quality That Builds Confidence
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
            }}
          >
            {qualitySteps.map((step, i) => (
              <div
                key={step.id}
                style={{
                  background: 'rgba(255,255,255,.06)',
                  border: '1px solid rgba(255,255,255,.10)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px',
                  transition: 'background var(--transition)',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,.10)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,.06)')}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,.12)',
                    border: '1.5px solid rgba(255,255,255,.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <QualityIcon idx={i} />
                </div>
                <p
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    color: '#6DB4F5',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    marginBottom: '6px',
                  }}
                >
                  STEP {String(i + 1).padStart(2, '0')}
                </p>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,.60)', lineHeight: 1.65 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
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
            {Object.entries(SVGProjects).map(([key, SvgComp], i) => {
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
