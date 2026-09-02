import React from 'react';
import { SVGIcons } from '../icons/SVGIcons';
import { navigationLinks } from '../data/mockData';
import { useContactInfo } from '../config/contact';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { phoneDisplay, telUrl, mailtoUrl, email, facebook, instagram, linkedin, youtube } = useContactInfo();

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

  const SocialBtn = ({ label, href = '#', children }: { label: string; href?: string; children: React.ReactNode }) => (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="footer-social-btn"
    >
      {children}
    </a>
  );

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Main grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col">
            <div className="footer-logo-box">
              <img
                src="/swastik-mixtures-logo.svg"
                alt="Swastik Mixtures Logo"
                className="footer-logo-img"
              />
            </div>
            <p className="footer-brand-desc">
              Concreting Trust Since 18 Years. Providing premium ready mix
              concrete solutions for Lucknow's infrastructure since 2009.
            </p>
            <div className="footer-social-row">
              <SocialBtn label="Facebook" href={facebook}><SVGIcons.Facebook size={18} /></SocialBtn>
              <SocialBtn label="Instagram" href={instagram}><SVGIcons.Instagram size={18} /></SocialBtn>
              <SocialBtn label="LinkedIn" href={linkedin}><SVGIcons.LinkedIn size={18} /></SocialBtn>
              <SocialBtn label="YouTube" href={youtube}><SVGIcons.YouTube size={18} /></SocialBtn>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-col-heading">QUICK LINKS</h4>
            <ul className="footer-links-list">
              {navigationLinks.map(link => (
                <li key={link.path}>
                  <button
                    onClick={() => go(link.path)}
                    className="footer-link-btn"
                  >
                    <span className="footer-link-arrow">›</span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div className="footer-col">
            <h4 className="footer-col-heading">PRODUCTS</h4>
            <ul className="footer-links-list">
              {products.map(p => (
                <li key={p}>
                  <button
                    onClick={() => go('/products')}
                    className="footer-link-btn"
                  >
                    <span className="footer-link-arrow">›</span>
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us + Opening Hours Column */}
          <div className="footer-col">
            <h4 className="footer-col-heading">CONTACT US</h4>
            <div className="footer-contact-list">
              <a href={telUrl} className="footer-contact-item">
                <span className="footer-contact-icon"><SVGIcons.Phone size={15} /></span>
                <span>{phoneDisplay}</span>
              </a>
              <a href={mailtoUrl()} className="footer-contact-item">
                <span className="footer-contact-icon"><SVGIcons.Mail size={15} /></span>
                <span>{email}</span>
              </a>
              <div className="footer-contact-item">
                <span className="footer-contact-icon"><SVGIcons.MapPin size={15} /></span>
                <span>Lucknow, Uttar Pradesh, India</span>
              </div>
            </div>

            <div className="footer-hours-card">
              <span className="footer-hours-title">OPENING HOURS</span>
              <p className="footer-hours-time">
                Mon – Sat: <strong>8:00 AM – 6:00 PM</strong><br />
                Sunday — Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-bottom-text">
            © {new Date().getFullYear()} Swastik Mixtures. All rights reserved.
          </p>
          <p className="footer-bottom-text">
            Ready Mix Concrete · Lucknow, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
