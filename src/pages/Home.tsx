import React from 'react';
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
      stroke="var(--blue)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
    <path key={0} strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>,
    <path key={1} strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"/>,
    <path key={2} strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>,
    <path key={3} strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"/>,
    <path key={4} strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"/>,
    <path key={5} strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/>,
    <path key={6} strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>,
    <path key={7} strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197"/>,
  ];
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
      {icons[idx % icons.length]}
    </svg>
  );
};

/* ══════════════════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════════════════ */
export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div style={{ width: '100%', overflowX: 'hidden', color: 'var(--text)' }}>

      {/* ══════════════════════════════════════════════════════
          §1  HERO
      ══════════════════════════════════════════════════════ */}
      <section id="hero" className="hero-section">
        <div className="hero-left-col">
          <div className="hero-left-content">
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
          </div>
        </div>

        <div className="hero-right-col">
          <img
            src="/swastik-hero-visual.svg"
            alt="Swastik Mixtures Ready Mix Concrete Truck"
            className="hero-truck-visual"
          />
        </div>

        {/* BLUE DECORATIVE WAVE */}
        <div className="hero-wave-container">
          <img src="/swastik-wave.svg" alt="" className="hero-wave-svg" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §2  STATISTICS CARD
      ══════════════════════════════════════════════════════ */}
      <section id="stats" className="stats-section">
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
      <section id="about" className="section-py" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.4fr',
              gap: '72px',
              alignItems: 'center',
            }}
          >
            {/* Left text */}
            <div>
              <span className="section-label">ABOUT SWASTIK MIXTURES</span>
              <h2 className="section-heading" style={{ marginBottom: '20px' }}>
                18 Years of<br />Concreting Trust
              </h2>
              <span className="blue-divider" />
              <p className="body-text" style={{ marginTop: '24px' }}>
                Swastik Mixtures is a trusted Ready Mix Concrete company based in Lucknow, Uttar Pradesh,
                bringing 18+ years of dedicated experience to the construction and infrastructure sector.
              </p>
              <p className="body-text" style={{ marginTop: '16px' }}>
                From residential builders to large infrastructure contractors, we work closely with our
                customers to understand their requirements and deliver concrete solutions suited to their project.
              </p>
              <div style={{ marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button className="btn-primary" onClick={() => onNavigate('/about')}>
                  DISCOVER OUR STORY <ArrowRight />
                </button>
              </div>
            </div>

            {/* Right image with floating badge */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                  background: 'var(--bg-alt)',
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                <img
                  src={heroTruck}
                  alt="Swastik Mixtures RMC Plant and Construction Site"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center left' }}
                />
              </div>
              {/* Floating experience badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '-24px',
                  background: 'var(--blue)',
                  color: '#fff',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px 20px',
                  boxShadow: 'var(--shadow-md)',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontSize: '30px', fontWeight: 900, lineHeight: 1 }}>18+</p>
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px', opacity: .85 }}>YEARS OF TRUST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §4  LEGACY / TIMELINE
      ══════════════════════════════════════════════════════ */}
      <section id="legacy" className="section-py" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">OUR LEGACY</span>
            <h2 className="section-heading">
              Building Lucknow's RMC<br />Culture Since 2009
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0',
              position: 'relative',
            }}
          >
            {/* Connector line */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '23px',
                left: '12.5%',
                right: '12.5%',
                height: '2px',
                background: 'linear-gradient(to right, var(--blue) 0%, var(--blue) 100%)',
                opacity: .2,
                zIndex: 0,
              }}
            />

            {legacyTimeline.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '0 24px',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* Step circle */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'var(--blue)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: 800,
                    boxShadow: '0 0 0 6px white, 0 0 0 8px rgba(8,104,201,.18)',
                    marginBottom: '24px',
                  }}
                >
                  {i + 1}
                </div>
                <p
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--blue)',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    marginBottom: '6px',
                  }}
                >
                  {item.year}
                </p>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
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
