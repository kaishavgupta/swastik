import React from 'react';
import { SwastikLogo, SVGIcons } from '../icons/SVGIcons';
import { navigationLinks } from '../data/mockData';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const go = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const products = [
    'M10 – M60 Concrete',
    'SCC Concrete',
    'High Strength Concrete',
    'Waterproof Concrete',
    'Fiber Reinforced Concrete',
  ];

  const SocialBtn = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <a
      href="#"
      aria-label={label}
      style={{
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,.08)',
        border: '1px solid rgba(255,255,255,.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(255,255,255,.7)',
        transition: 'background 200ms ease, color 200ms ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.background = 'var(--blue)';
        (e.currentTarget as HTMLElement).style.color = '#fff';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.08)';
        (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,.7)';
      }}
    >
      {children}
    </a>
  );

  return (
    <footer style={{ background: 'var(--navy)', color: '#fff', borderTop: '4px solid var(--blue)' }}>
      {/* Main grid */}
      <div className="container" style={{ paddingBlock: '64px 48px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
            gap: '48px',
            paddingBottom: '48px',
            borderBottom: '1px solid rgba(255,255,255,.10)',
          }}
        >
          {/* Brand column */}
          <div>
            {/* Logo on dark bg — white box */}
            <div
              style={{
                background: '#fff',
                borderRadius: 'var(--radius-sm)',
                padding: '10px 14px',
                display: 'inline-block',
                marginBottom: '20px',
              }}
            >
              <SwastikLogo size={180} />
            </div>
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,.60)',
                lineHeight: 1.75,
                marginBottom: '24px',
                maxWidth: '280px',
              }}
            >
              Concreting Trust Since 18 Years. Providing premium ready mix
              concrete solutions for Lucknow's infrastructure since 2009.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <SocialBtn label="Facebook"><SVGIcons.Facebook size={16} /></SocialBtn>
              <SocialBtn label="Instagram"><SVGIcons.Instagram size={16} /></SocialBtn>
              <SocialBtn label="LinkedIn"><SVGIcons.LinkedIn size={16} /></SocialBtn>
              <SocialBtn label="YouTube"><SVGIcons.YouTube size={16} /></SocialBtn>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="footer-col-heading">QUICK LINKS</h4>
            <ul style={{ listStyle: 'none' }}>
              {navigationLinks.map(link => (
                <li key={link.path}>
                  <button
                    onClick={() => go(link.path)}
                    className="footer-link"
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '3px 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span style={{ color: 'var(--blue)', fontSize: '10px' }}>›</span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="footer-col-heading">PRODUCTS</h4>
            <ul style={{ listStyle: 'none' }}>
              {products.map(p => (
                <li key={p}>
                  <button
                    onClick={() => go('/products')}
                    className="footer-link"
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '3px 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span style={{ color: 'var(--blue)', fontSize: '10px' }}>›</span>
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Hours */}
          <div>
            <h4 className="footer-col-heading">CONTACT US</h4>
            {[
              { icon: <SVGIcons.Phone size={14} />, text: '+91 98765 43210' },
              { icon: <SVGIcons.Mail size={14} />, text: 'info@swastikmixtures.com' },
              { icon: <SVGIcons.MapPin size={14} />, text: 'Lucknow, Uttar Pradesh, India' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  marginBottom: '12px',
                  color: 'rgba(255,255,255,.65)',
                  fontSize: '14px',
                }}
              >
                <span style={{ color: 'var(--blue)', marginTop: '3px', flexShrink: 0 }}>{item.icon}</span>
                {item.text}
              </div>
            ))}

            <h4 className="footer-col-heading" style={{ marginTop: '28px' }}>OPENING HOURS</h4>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,.65)', lineHeight: 1.7 }}>
              Mon – Sat<br />
              <span style={{ color: '#fff', fontWeight: 600 }}>8:00 AM – 6:00 PM</span>
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,.45)', marginTop: '8px' }}>
              Sunday — Closed
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.40)' }}>
            © {new Date().getFullYear()} Swastik Mixtures. All rights reserved.
          </p>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.40)' }}>
            Ready Mix Concrete · Lucknow, India
          </p>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        footer .container > div:first-child {
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
        }
        @media (max-width: 1023px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 639px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
