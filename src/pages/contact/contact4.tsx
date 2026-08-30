import React from 'react';
import { motion } from 'framer-motion';

interface Contact4Props {
  onScrollToPart?: (index: number) => void;
}

export const Contact4: React.FC<Contact4Props> = ({ onScrollToPart }) => {
  const handleScroll = (index: number) => {
    if (onScrollToPart) {
      onScrollToPart(index);
    } else {
      const el = document.getElementById(`contact-part${index + 1}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="contact-part4" className="contact-snap-part contact-actions-part">
      <div className="contact-actions-bg-overlay" aria-hidden="true" />

      <div className="contact-container contact-actions-container">
        <div className="contact-section-header text-center">
          <h2 className="contact-section-title text-white">
            LET'S TALK ABOUT<br />YOUR NEXT PROJECT.
          </h2>
          <div className="contact-title-bar margin-auto bg-blue" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="contact-actions-grid"
        >
          {/* Card 1: Call Us */}
          <div className="contact-action-card">
            <div className="contact-action-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className="contact-action-title">CALL US</h3>
            <p className="contact-action-desc">Speak directly with our team</p>
            <a href="tel:+919307381838" className="btn-secondary contact-action-btn">
              CALL NOW →
            </a>
          </div>

          {/* Card 2: Send an Email */}
          <div className="contact-action-card">
            <div className="contact-action-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3 className="contact-action-title">SEND AN EMAIL</h3>
            <p className="contact-action-desc">Tell us about your requirement</p>
            <a href="mailto:info@swastikmixtures.com" className="btn-secondary contact-action-btn">
              EMAIL US →
            </a>
          </div>

          {/* Card 3: Request a Quote */}
          <div className="contact-action-card">
            <div className="contact-action-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3 className="contact-action-title">REQUEST A QUOTE</h3>
            <p className="contact-action-desc">Get a concrete solution for your project</p>
            <button onClick={() => handleScroll(0)} className="btn-primary contact-action-btn">
              REQUEST QUOTE →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact4;
