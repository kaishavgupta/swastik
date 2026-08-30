import React from 'react';
import { motion } from 'framer-motion';

interface Contact4Props {
  onScrollToPart?: (index: number) => void;
}

export const Contact4: React.FC<Contact4Props> = ({ onScrollToPart }) => {
  const handleScrollToQuote = () => {
    if (onScrollToPart) {
      onScrollToPart(1); // Scrolls to Contact2 (Get in Touch / Request Quote Form)
    } else {
      const el = document.getElementById('contact-part2');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="contact-part4" className="contact-snap-part contact-project-section" aria-label="Let's Talk About Your Next Project">
      {/* Background Decorative Dots Matrix */}
      <div className="contact-project-bg-dots-left" aria-hidden="true" />
      <div className="contact-project-bg-dots-right" aria-hidden="true" />

      {/* Industrial Plant SVG Background with Bright Center Fade */}
      <div className="contact-project-bg-industrial" aria-hidden="true" />

      {/* Blue Wave / Geometric Accent Ribbon Behind Lower Area */}
      <div className="contact-project-blue-ribbon" aria-hidden="true" />

      <div className="contact-project-container">
        {/* ── SECTION HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="contact-project-header"
        >
          <span className="contact-project-eyebrow">LET'S CONNECT</span>
          <div className="contact-project-eyebrow-line" aria-hidden="true" />

          <h2 className="contact-project-title">
            LET'S TALK ABOUT<br />
            YOUR NEXT <span className="contact-project-title-accent">PROJECT.</span>
          </h2>

          <div className="contact-project-title-line" aria-hidden="true" />

          <p className="contact-project-desc">
            Have a project in mind or need expert advice on concrete solutions?<br className="contact-project-desc-br" />
            Our team is ready to help you build better, together.
          </p>
        </motion.div>

        {/* ── THREE CONTACT ACTION CARDS ── */}
        <div className="contact-project-cards-grid">
          {/* CARD 1: CALL US */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="contact-project-card"
          >
            <div className="contact-project-icon-outer-ring" aria-hidden="true">
              <div className="contact-project-icon-circle">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
            </div>

            <h3 className="contact-project-card-title">CALL US</h3>
            <p className="contact-project-card-text">
              Speak directly with our team<br />
              for quick assistance.
            </p>

            <a
              href="tel:+918076439354"
              className="contact-project-card-btn contact-project-btn-outline"
              aria-label="Call Swastik Mixtures team"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>CALL NOW &rarr;</span>
            </a>
          </motion.div>

          {/* CARD 2: SEND AN EMAIL */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="contact-project-card"
          >
            <div className="contact-project-icon-outer-ring" aria-hidden="true">
              <div className="contact-project-icon-circle">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
            </div>

            <h3 className="contact-project-card-title">SEND AN EMAIL</h3>
            <p className="contact-project-card-text">
              Email us your requirements<br />
              and we'll get back to you.
            </p>

            <a
              href="mailto:info@swastikmixtures.com"
              className="contact-project-card-btn contact-project-btn-outline"
              aria-label="Send email to Swastik Mixtures"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>EMAIL US &rarr;</span>
            </a>
          </motion.div>

          {/* CARD 3: REQUEST A QUOTE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="contact-project-card"
          >
            <div className="contact-project-icon-outer-ring" aria-hidden="true">
              <div className="contact-project-icon-circle">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            </div>

            <h3 className="contact-project-card-title">REQUEST A QUOTE</h3>
            <p className="contact-project-card-text">
              Get a customized concrete solution<br />
              tailored to your project needs.
            </p>

            <button
              type="button"
              onClick={handleScrollToQuote}
              className="contact-project-card-btn contact-project-btn-solid"
              aria-label="Request a customized quote"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <span>REQUEST QUOTE &rarr;</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact4;
