import React from 'react';
import { motion } from 'framer-motion';

interface Quality5Props {
  onNavigate?: (path: string) => void;
}

export const Quality5: React.FC<Quality5Props> = ({ onNavigate }) => {
  const handleQuoteClick = () => {
    if (onNavigate) {
      onNavigate('/contact');
    } else {
      window.location.hash = '/contact';
    }
  };

  return (
    <section id="quality-part5" className="quality-snap-part quality-cta-part">
      <div className="quality-container quality-cta-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="quality-cta-banner-card"
        >
          {/* LEFT: Swastik Branded Transit Mixer Truck Visual */}
          <div className="quality-cta-truck-col">
            <img
              src="/05_transit_mixer_closeup.svg"
              alt="Swastik Mixtures Ready Mix Concrete Truck"
              loading="lazy"
              width="380"
              height="220"
              className="quality-cta-truck-img"
            />
          </div>

          {/* CENTER: Title, Paragraph & Request Quote Button */}
          <div className="quality-cta-center-col">
            <h2 className="quality-cta-title">BUILD WITH CONFIDENCE</h2>
            <p className="quality-cta-lead">
              When you choose Swastik Mixtures, you choose quality,
              reliability and a partner who cares about your project.
            </p>
            <button onClick={handleQuoteClick} className="btn-primary quality-cta-btn">
              REQUEST A QUOTE &gt;
            </button>
          </div>

          {/* RIGHT: Direct Contact Info (Phone, Email, Location) */}
          <div className="quality-cta-contact-col">
            <div className="quality-contact-row">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div className="quality-contact-text">
                <span>+91 9307381838</span>
                <span>+91 7619906200</span>
              </div>
            </div>

            <div className="quality-contact-row">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <div className="quality-contact-text">
                <span>info@swastikmixtures.com</span>
              </div>
            </div>

            <div className="quality-contact-row">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="quality-contact-text">
                <span>Lucknow,</span>
                <span>Uttar Pradesh, India</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
