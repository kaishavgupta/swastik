import React, { useState, useEffect, useRef } from 'react';
import { navigationLinks } from '../data/mockData';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

/* ─── Scroll behaviour ─── */
function useScroll() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden]     = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handler = () => {
      const cur  = window.scrollY;
      const diff = cur - lastY.current;
      setScrolled(cur > 10);
      if (Math.abs(diff) > 6) {
        if (diff > 0 && cur > 60) setHidden(true);
        else if (diff < 0)        setHidden(false);
      }
      if (cur <= 10) setHidden(false);
      lastY.current = cur;
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return { scrolled, hidden };
}

/* ─── Blue wave SVG (top accent of the floating card) ─── */
const BlueWave: React.FC = () => (
  <svg
    viewBox="0 0 1200 26"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ position: 'absolute', top: 0, left: 0, right: 0, width: '100%', height: '26px', display: 'block', pointerEvents: 'none' }}
  >
    {/* Flat left, gentle curve that deepens toward right */}
    <path d="M0,0 L0,14 Q300,18 600,14 Q900,10 1200,26 L1200,0 Z" fill="#0868C9" />
  </svg>
);

/* ─── Vertical divider between logo and nav ─── */
const Divider: React.FC = () => (
  <div style={{
    width: '1px',
    height: '56px',
    background: '#DCE5EF',
    flexShrink: 0,
    alignSelf: 'center',
  }} aria-hidden="true" />
);

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════ */
export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrolled, hidden } = useScroll();

  const go = (path: string) => {
    onNavigate(path);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* ─── nav link button ─── */
  const NavLink = ({ link }: { link: { path: string; name: string } }) => {
    const active = currentPath === link.path;
    return (
      <button
        onClick={() => go(link.path)}
        className={`nh-link${active ? ' nh-link--active' : ''}`}
      >
        {link.name}
        {active && <span className="nh-link-bar" />}
      </button>
    );
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          OUTER WRAPPER — fixed, full-width, transparent background
          padding creates the "floating card" margin from edges
      ═══════════════════════════════════════════════════════════ */}
      <div
        className={`nh-wrapper${hidden ? ' nh-wrapper--hidden' : ''}`}
        role="banner"
      >
        {/* ─── Floating card ─── */}
        <div className={`nh-card${scrolled ? ' nh-card--scrolled' : ''}`}>

          {/* Blue wave accent at top */}
          <BlueWave />

          {/* ═══ LARGE DESKTOP LAYOUT (≥ 1100px) ═══ */}
          <div className="nh-desktop-row">

            {/* Logo box */}
            <button
              onClick={() => go('/')}
              className="nh-logo-btn"
              aria-label="Swastik Mixtures – Home"
            >
              <img
                src="/swastik-mixtures-logo.svg"
                alt="Swastik Mixtures"
                className="nh-logo-img"
              />
            </button>

            <Divider />

            {/* Nav links */}
            <nav className="nh-nav" aria-label="Primary navigation">
              {navigationLinks.map(link => (
                <NavLink key={link.path} link={link} />
              ))}
            </nav>

            {/* Spacer pushes CTA to far right */}
            <div style={{ flex: 1 }} />

            {/* GET A QUOTE CTA */}
            <button
              onClick={() => go('/contact')}
              className="btn-primary nh-cta"
            >
              GET A QUOTE →
            </button>
          </div>

          {/* ═══ TABLET + MOBILE LAYOUT (< 1100px) ═══ */}
          <div className="nh-compact-row">

            {/* Logo */}
            <button
              onClick={() => go('/')}
              className="nh-logo-btn"
              aria-label="Swastik Mixtures – Home"
            >
              <img
                src="/swastik-mixtures-logo.svg"
                alt="Swastik Mixtures"
                className="nh-logo-img nh-logo-img--compact"
              />
            </button>

            {/* Hamburger */}
            <button
              className="nh-hamburger"
              onClick={() => setMobileOpen(o => !o)}
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation"
            >
              {mobileOpen
                ? <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                : <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
              }
            </button>
          </div>

        </div>{/* /nh-card */}

        {/* ─── Mobile drawer (outside the card, below it) ─── */}
        {mobileOpen && (
          <div className="nh-drawer">
            {navigationLinks.map(link => {
              const active = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => go(link.path)}
                  className={`nh-drawer-btn${active ? ' nh-drawer-btn--active' : ''}`}
                >
                  {link.name}
                </button>
              );
            })}
            <button
              onClick={() => go('/contact')}
              className="btn-primary"
              style={{ width: '100%', marginTop: '12px', justifyContent: 'center' }}
            >
              GET A QUOTE →
            </button>
          </div>
        )}
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SCOPED STYLES
      ═══════════════════════════════════════════════════════════ */}
      <style>{`
        /* ── Outer wrapper: fixed, transparent, provides floating margin ── */
        .nh-wrapper {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 200;
          padding: 14px 16px 0;
          pointer-events: none; /* clicks pass through padding area */
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nh-wrapper--hidden {
          transform: translateY(-120%);
        }

        /* ── Floating card ── */
        .nh-card {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 4px 24px rgba(7, 26, 54, 0.10);
          position: relative;
          overflow: visible; /* allow dropdowns to overflow */
          pointer-events: auto;
          transition: box-shadow 0.3s ease;
        }
        .nh-card::before {
          /* invisible top-left/top-right border-radius clip for wave */
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 14px;
          pointer-events: none;
          z-index: -1;
        }
        .nh-card--scrolled {
          box-shadow: 0 8px 40px rgba(7, 26, 54, 0.15);
        }

        /* ── Logo button ── */
        .nh-logo-btn {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .nh-logo-img {
          height: clamp(72px, 6vw, 92px);
          width: auto;
          display: block;
        }
        .nh-logo-img--compact {
          height: clamp(60px, 9vw, 80px);
        }

        /* ── Nav links ── */
        .nh-nav {
          display: flex;
          align-items: center;
          gap: 0;
          flex-wrap: nowrap;
        }
        .nh-link {
          position: relative;
          background: none;
          border: none;
          padding: 8px clamp(8px, 1.1vw, 16px);
          font-size: clamp(13px, 1.05vw, 15px);
          font-weight: 600;
          color: #0B1B35;
          cursor: pointer;
          border-radius: 4px;
          white-space: nowrap;
          transition: color 200ms ease;
        }
        .nh-link:hover { color: #0868C9; }
        .nh-link--active { color: #0868C9; font-weight: 700; }
        .nh-link-bar {
          position: absolute;
          bottom: 2px;
          left: clamp(8px, 1.1vw, 16px);
          right: clamp(8px, 1.1vw, 16px);
          height: 3px;
          background: #0868C9;
          border-radius: 2px;
        }

        /* ── CTA button override ── */
        .nh-cta {
          height: 48px;
          padding: 0 clamp(14px, 1.5vw, 28px);
          font-size: clamp(12px, 1vw, 14px);
          font-weight: 700;
          white-space: nowrap;
          border-radius: 10px;
          flex-shrink: 0;
        }

        /* ── Desktop row (≥ 1100px) ── */
        .nh-desktop-row {
          display: none;
          align-items: center;
          flex-wrap: nowrap;
          gap: clamp(8px, 1.2vw, 24px);
          padding: 30px clamp(12px, 2vw, 32px) 14px;
        }

        /* ── Compact row (< 1100px) ── */
        .nh-compact-row {
          display: none;
          align-items: center;
          justify-content: space-between;
          padding: 28px 20px 12px;
        }

        /* ── Hamburger ── */
        .nh-hamburger {
          background: none;
          border: none;
          padding: 8px;
          color: #071A36;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 8px;
          transition: background 150ms ease;
        }
        .nh-hamburger:hover { background: #EAF4FF; }

        /* ── Mobile drawer ── */
        .nh-drawer {
          background: #fff;
          border-radius: 0 0 14px 14px;
          margin-top: 2px;
          padding: 12px 20px 20px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          box-shadow: 0 8px 24px rgba(7, 26, 54, 0.10);
          pointer-events: auto;
        }
        .nh-drawer-btn {
          background: none;
          border: none;
          border-left: 3px solid transparent;
          padding: 12px 16px;
          text-align: left;
          font-size: 15px;
          font-weight: 500;
          color: #0B1B35;
          cursor: pointer;
          border-radius: 0 6px 6px 0;
          width: 100%;
          transition: background 150ms ease, color 150ms ease;
        }
        .nh-drawer-btn:hover { background: #EAF4FF; color: #0868C9; }
        .nh-drawer-btn--active {
          background: #EAF4FF;
          border-left-color: #0868C9;
          color: #0868C9;
          font-weight: 700;
        }

        /* ═══════════ BREAKPOINTS ═══════════ */

        /* Large desktop — full row */
        @media (min-width: 1100px) {
          .nh-desktop-row { display: flex !important; }
          .nh-compact-row { display: none !important; }
        }

        /* Tablet + mobile — compact row (logo + hamburger only) */
        @media (max-width: 1099px) {
          .nh-desktop-row { display: none !important; }
          .nh-compact-row { display: flex !important; }
        }

        /* Tablet (768px–1099px) */
        @media (min-width: 768px) and (max-width: 1099px) {
          .nh-logo-img--compact { height: clamp(64px, 8vw, 80px); }
          .nh-compact-row { padding: 26px 24px 12px; }
        }

        /* Mobile (≤ 767px): compact header, large clear logo */
        @media (max-width: 767px) {
          /* Tighten the outer wrapper so it never causes overflow */
          .nh-wrapper {
            padding: 8px 8px 0;
            /* Prevent it from ever exceeding the viewport */
            max-width: 100vw;
            box-sizing: border-box;
          }
          /* The floating card must not overflow */
          .nh-card {
            overflow: hidden;
            width: 100%;
            box-sizing: border-box;
          }
          .nh-compact-row {
            padding: 20px 16px 10px;
            /* Make sure it never overflows */
            width: 100%;
            box-sizing: border-box;
            overflow: hidden;
          }
          /* Logo: clearly readable on small screens */
          .nh-logo-img--compact {
            height: clamp(56px, 15vw, 76px);
            max-width: calc(100vw - 80px); /* leave room for hamburger */
          }
          /* Hamburger: large touch target, always visible */
          .nh-hamburger {
            flex-shrink: 0;
            padding: 10px;
            margin-left: auto;
          }
          /* Drawer must also not overflow */
          .nh-drawer {
            width: 100%;
            box-sizing: border-box;
            overflow-x: hidden;
          }
        }

        /* Very small phones (≤ 360px) */
        @media (max-width: 360px) {
          .nh-wrapper { padding: 6px 6px 0; }
          .nh-compact-row { padding: 18px 12px 8px; }
          .nh-logo-img--compact { height: clamp(48px, 14vw, 64px); }
        }
      `}</style>
    </>
  );
};

export default Navbar;
