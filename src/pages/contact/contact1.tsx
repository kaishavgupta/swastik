import React from 'react';
import { motion } from 'framer-motion';

interface Contact1Props {
  onScrollToPart?: (index: number) => void;
}

export const Contact1: React.FC<Contact1Props> = ({ onScrollToPart }) => {
  const handleScrollToQuote = () => {
    if (onScrollToPart) {
      onScrollToPart(1);
    } else {
      const el = document.getElementById('contact-part2');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="contact-part1" className="contact-snap-part contact-hero-section" aria-label="Contact Us Hero">
      {/* Background Decorative Matrix & Watermark */}
      <div className="contact-hero-bg-dots" aria-hidden="true" />
      <div className="contact-hero-bg-mixer-watermark" aria-hidden="true" />

      <div className="contact-hero-main-container">
        {/* ── TOP HERO ROW (Left Content & Right Angled Image) ── */}
        <div className="contact-hero-top-row">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="contact-hero-left-content"
          >
            {/* Eyebrow: Phone icon + CONTACT US */}
            <div className="contact-hero-eyebrow">
              <span className="contact-hero-eyebrow-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span className="contact-hero-eyebrow-title">CONTACT US</span>
            </div>

            {/* Main Headline */}
            <h1 className="contact-hero-main-title">
              WE’RE HERE TO<br />
              <span className="contact-hero-title-accent">BUILD TOGETHER.</span>
            </h1>

            {/* Supporting Description */}
            <p className="contact-hero-lead-text">
              Have a project in mind or need expert advice on concrete solutions? Get in touch with the Swastik Mixtures team today.
            </p>

            {/* Short Blue Decorative Line */}
            <div className="contact-hero-blue-accent-bar" aria-hidden="true" />

            {/* Quick Response & Expert Support Cards */}
            <div className="contact-hero-cards-wrapper">
              {/* Card 1: Quick Response */}
              <div className="contact-hero-card-item">
                <div className="contact-hero-card-icon-box" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                </div>
                <div className="contact-hero-card-info">
                  <h3 className="contact-hero-card-heading">QUICK RESPONSE</h3>
                  <p className="contact-hero-card-subtext">We respond quickly to all enquiries</p>
                </div>
              </div>

              {/* Card 2: Expert Support */}
              <div className="contact-hero-card-item">
                <div className="contact-hero-card-icon-box" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="contact-hero-card-info">
                  <h3 className="contact-hero-card-heading">EXPERT SUPPORT</h3>
                  <p className="contact-hero-card-subtext">Our team is here to help you at every step</p>
                </div>
              </div>
            </div>

            {/* Request a Quote CTA */}
            <div className="contact-hero-action-box">
              <button
                type="button"
                onClick={handleScrollToQuote}
                className="contact-hero-cta-btn"
                aria-label="Request a Quote"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                <span>REQUEST A QUOTE &rarr;</span>
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE: Angled Geometric Frame with Swastik RMC Plant */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="contact-hero-right-image-col"
          >
            <div className="contact-hero-angled-frame-wrapper">
              <div className="contact-hero-angled-inner-frame">
                <img
                  src="/08_Swastik_RMC_Plant.svg"
                  alt="Swastik Mixtures Ready Mix Concrete Plant with Transit Mixer"
                  loading="eager"
                  className="contact-hero-plant-photo"
                />
              </div>
              {/* Outer Blue Geometric Border Outline */}
              <div className="contact-hero-angled-border-accent" aria-hidden="true" />
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM TRUST & STATISTICS BAR (Dark Navy with Angled Cut) ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="contact-hero-bottom-stats-strip"
        >
          {/* Stat 1: 18+ Years of Trust */}
          <div className="contact-stat-block">
            <div className="contact-stat-badge-circle" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </div>
            <div className="contact-stat-info-group">
              <span className="contact-stat-digits">18+</span>
              <span className="contact-stat-tagline">YEARS OF TRUST</span>
            </div>
          </div>

          <div className="contact-stat-strip-divider" aria-hidden="true" />

          {/* Stat 2: 500+ Projects Delivered */}
          <div className="contact-stat-block">
            <div className="contact-stat-badge-circle" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="9" y1="22" x2="9" y2="22.01" />
                <line x1="15" y1="22" x2="15" y2="22.01" />
                <line x1="8" y1="6" x2="16" y2="6" />
                <line x1="8" y1="10" x2="16" y2="10" />
                <line x1="8" y1="14" x2="16" y2="14" />
              </svg>
            </div>
            <div className="contact-stat-info-group">
              <span className="contact-stat-digits">500+</span>
              <span className="contact-stat-tagline">PROJECTS DELIVERED</span>
            </div>
          </div>

          <div className="contact-stat-strip-divider" aria-hidden="true" />

          {/* Stat 3: 100% Quality Assured */}
          <div className="contact-stat-block">
            <div className="contact-stat-badge-circle" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <div className="contact-stat-info-group">
              <span className="contact-stat-digits">100%</span>
              <span className="contact-stat-tagline">QUALITY ASSURED</span>
            </div>
          </div>

          <div className="contact-stat-strip-divider" aria-hidden="true" />

          {/* Stat 4: On-Time Delivery */}
          <div className="contact-stat-block">
            <div className="contact-stat-badge-circle" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div className="contact-stat-info-group">
              <span className="contact-stat-digits">ON-TIME</span>
              <span className="contact-stat-tagline">DELIVERY</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact1;
