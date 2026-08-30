import React from 'react';
import { motion } from 'framer-motion';

export const Contact3: React.FC = () => {
  return (
    <section id="contact-part3" className="contact-snap-part contact-map-part">
      <div className="contact-container contact-map-container">
        <div className="contact-section-header">
          <span className="contact-eyebrow">FIND US</span>
          <h2 className="contact-section-title">VISIT OUR PLANT OR CONNECT WITH OUR TEAM</h2>
          <div className="contact-title-bar" />
        </div>

        <div className="contact-map-wrapper">
          {/* Styled Clean Map View */}
          <iframe
            title="Swastik Mixtures Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14238.163914842!2d80.946158!3d26.846708!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd081f9b33ad%3A0x6b403e07f45c755c!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="contact-map-iframe"
          />

          {/* Floating Location Card Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-map-overlay-card"
          >
            <div className="contact-overlay-header">
              <div className="contact-overlay-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-overlay-titles">
                <span className="contact-overlay-name">SWASTIK MIXTURES</span>
                <span className="contact-overlay-sub">Lucknow, Uttar Pradesh, India</span>
              </div>
            </div>

            <p className="contact-overlay-desc">
              Easily accessible for site visits, mix testing, and project coordination.
            </p>

            <a
              href="https://maps.google.com/?q=Lucknow+Uttar+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary contact-overlay-btn"
            >
              GET DIRECTIONS →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact3;
