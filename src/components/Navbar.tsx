import React, { useState, useEffect, useRef } from 'react';
import { navigationLinks } from '../data/mockData';
import { SwastikLogo } from '../icons/SVGIcons';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [visible, setVisible]        = useState(true);
  const lastScrollY                  = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const cur = window.scrollY;
      setScrolled(cur > 8);
      if (Math.abs(cur - lastScrollY.current) > 6) {
        if (cur > lastScrollY.current && cur > 80) {
          setVisible(false);
          setMobileOpen(false);
        } else {
          setVisible(true);
        }
      }
      lastScrollY.current = cur;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (path: string) => {
    onNavigate(path);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={[
        'navbar-root',
        !visible ? 'hidden' : '',
      ].join(' ')}
      style={{
        background: '#fff',
        borderBottom: scrolled ? '1px solid #DCE5EF' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 12px rgba(7,26,54,.07)' : 'none',
      }}
    >
      {/* ── Main bar ── */}
      <div
        className="container"
        style={{
          height: 'var(--navbar-h)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => go('/')}
          style={{ background: 'none', border: 'none', padding: 0, flexShrink: 0 }}
          aria-label="Swastik Mixtures – Home"
        >
          <SwastikLogo size={220} />
        </button>

        {/* Desktop nav */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
          aria-label="Main navigation"
        >
          {navigationLinks.map(link => {
            const active = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => go(link.path)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '10px 18px',
                  position: 'relative',
                  fontSize: '16px',
                  fontWeight: active ? 700 : 600,
                  color: active ? 'var(--blue)' : 'var(--text)',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  transition: 'color 200ms ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--blue)';
                }}
                onMouseLeave={e => {
                  if (!active) (e.currentTarget as HTMLElement).style.color = 'var(--text)';
                }}
              >
                {link.name}
                {active && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '18px',
                      right: '18px',
                      height: '3px',
                      background: 'var(--blue)',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA */}
        <button
          onClick={() => go('/contact')}
          className="btn-primary desktop-cta"
          style={{
            flexShrink: 0,
            width: '180px',
            height: '52px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: 700,
            padding: 0,
          }}
        >
          GET A QUOTE →
        </button>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            padding: '6px',
            color: 'var(--navy)',
            cursor: 'pointer',
          }}
        >
          {mobileOpen
            ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          }
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div
          style={{
            background: '#fff',
            borderTop: '1px solid var(--border)',
            padding: '12px 0 20px',
          }}
        >
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {navigationLinks.map(link => {
              const active = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => go(link.path)}
                  style={{
                    background: active ? 'var(--blue-light)' : 'none',
                    border: 'none',
                    borderLeft: active ? '3px solid var(--blue)' : '3px solid transparent',
                    padding: '12px 16px',
                    textAlign: 'left',
                    fontSize: '15px',
                    fontWeight: active ? 700 : 500,
                    color: active ? 'var(--blue)' : 'var(--text)',
                    cursor: 'pointer',
                    borderRadius: '0 6px 6px 0',
                    width: '100%',
                  }}
                >
                  {link.name}
                </button>
              );
            })}
            <div style={{ marginTop: '12px' }}>
              <button
                onClick={() => go('/contact')}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                GET A QUOTE →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        .desktop-nav  { display: flex; }
        .desktop-cta  { display: inline-flex; }
        .hamburger    { display: none; }

        @media (max-width: 1023px) {
          .desktop-nav  { display: none; }
          .desktop-cta  { display: none; }
          .hamburger    { display: flex; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
