import React from 'react';
import { motion } from 'framer-motion';

interface Contact5Props {
  onScrollToPart?: (index: number) => void;
}

export const Contact5: React.FC<Contact5Props> = ({ onScrollToPart }) => {
  const handleScrollToQuote = () => {
    if (onScrollToPart) {
      onScrollToPart(1); // Scrolls to Contact Part 2 (Get in Touch / Request Quote form)
    } else {
      const el = document.getElementById('contact-part2');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleScrollToContact = () => {
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
    <section id="contact-part5" className="contact-snap-part contact-ready-section" aria-label="Ready to Start Your Project">
      <div className="contact-ready-container">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="contact-ready-card"
        >
          {/* Decorative Dot Matrices */}
          <div className="contact-ready-dots-left" aria-hidden="true" />
          <div className="contact-ready-dots-top" aria-hidden="true" />

          {/* ── LEFT COLUMN: Textual CTA Content ── */}
          <div className="contact-ready-left-col">
            {/* Eyebrow Badge */}
            <div className="contact-ready-eyebrow-pill">
              <span className="contact-ready-eyebrow-icon" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.77.78L12 20.67l7.65-7.66.77-.78a5.4 5.4 0 0 0 0-7.65z" />
                </svg>
              </span>
              <span className="contact-ready-eyebrow-text">LET’S BUILD TOGETHER</span>
            </div>

            {/* Main Headline */}
            <h2 className="contact-ready-title">
              READY TO START<br />
              YOUR <span className="contact-ready-title-accent">PROJECT?</span>
            </h2>

            {/* Supporting Description */}
            <p className="contact-ready-desc">
              Let's discuss how we can deliver the right concrete solution for your project.
            </p>

            {/* 3 Trust & Benefit Items */}
            <div className="contact-ready-benefits-row">
              {/* Benefit 1 */}
              <div className="contact-ready-benefit-item">
                <div className="contact-ready-benefit-icon-circle" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="contact-ready-benefit-info">
                  <h4 className="contact-ready-benefit-heading">Expert Team</h4>
                  <p className="contact-ready-benefit-sub">Experienced professionals</p>
                </div>
              </div>

              <div className="contact-ready-benefit-divider" aria-hidden="true" />

              {/* Benefit 2 */}
              <div className="contact-ready-benefit-item">
                <div className="contact-ready-benefit-icon-circle" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <div className="contact-ready-benefit-info">
                  <h4 className="contact-ready-benefit-heading">Quality Assured</h4>
                  <p className="contact-ready-benefit-sub">High quality concrete solutions</p>
                </div>
              </div>

              <div className="contact-ready-benefit-divider" aria-hidden="true" />

              {/* Benefit 3 */}
              <div className="contact-ready-benefit-item">
                <div className="contact-ready-benefit-icon-circle" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="contact-ready-benefit-info">
                  <h4 className="contact-ready-benefit-heading">On-Time Delivery</h4>
                  <p className="contact-ready-benefit-sub">Committed to your schedule</p>
                </div>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="contact-ready-cta-buttons">
              <button
                type="button"
                onClick={handleScrollToQuote}
                className="contact-ready-btn-primary"
                aria-label="Request a customized quote"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span>REQUEST A QUOTE &rarr;</span>
              </button>

              <button
                type="button"
                onClick={handleScrollToContact}
                className="contact-ready-btn-secondary"
                aria-label="Contact our team"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span>CONTACT OUR TEAM &rarr;</span>
              </button>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Truck Fleet Visual with Location Badge ── */}
          <div className="contact-ready-right-col">
            <div className="contact-ready-image-wrapper">
              <div className="contact-ready-image-frame">
                <img
                  src="/01_transit_mixer_fleet.svg"
                  alt="Swastik Mixtures Ready Mix Concrete Transit Mixer Truck Fleet with Batching Plant"
                  loading="lazy"
                  className="contact-ready-fleet-img"
                />
              </div>

              {/* Blue Geometric Frame Accent */}
              <div className="contact-ready-blue-frame-accent" aria-hidden="true" />

              {/* Lower-Right Location Badge */}
              <div className="contact-ready-location-badge">
                <div className="contact-ready-badge-pin" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-ready-badge-text">
                  <strong>Swastik Mixtures Plant</strong>
                  <span>Lucknow, Uttar Pradesh</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact5;
