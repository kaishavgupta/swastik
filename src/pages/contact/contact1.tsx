import React from 'react';
import { motion } from 'framer-motion';

interface Contact1Props {
  onScrollToPart?: (index: number) => void;
}

export const Contact1: React.FC<Contact1Props> = ({ onScrollToPart }) => {
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
    <section id="contact-part1" className="contact-snap-part contact-hero-part">
      <div className="contact-container contact-hero-container">
        {/* LEFT: Headline & Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="contact-hero-left"
        >
          <span className="contact-eyebrow">CONTACT US</span>

          <h1 className="contact-hero-title">
            WE'RE HERE TO<br />
            <span className="contact-title-blue">BUILD TOGETHER.</span>
          </h1>

          <p className="contact-hero-lead">
            Have a project in mind or need expert advice on concrete solutions?
            Get in touch with the Swastik Mixtures team today.
          </p>

          <div className="contact-hero-trust-strip">
            <div className="contact-trust-item">
              <div className="contact-trust-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
              </div>
              <div className="contact-trust-text">
                <span className="contact-trust-title">QUICK RESPONSE</span>
                <span className="contact-trust-sub">We respond quickly to all enquiries</span>
              </div>
            </div>

            <div className="contact-trust-item">
              <div className="contact-trust-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="contact-trust-text">
                <span className="contact-trust-title">EXPERT SUPPORT</span>
                <span className="contact-trust-sub">Our team is here to help you at every step</span>
              </div>
            </div>
          </div>

          <button onClick={() => handleScroll(1)} className="btn-primary contact-hero-btn">
            REQUEST A QUOTE →
          </button>
        </motion.div>

        {/* RIGHT: Swastik RMC Plant Imagery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="contact-hero-right"
        >
          <div className="contact-hero-img-wrap">
            <img
              src="/08_Swastik_RMC_Plant.svg"
              alt="Swastik Mixtures Ready Mix Concrete Plant"
              loading="eager"
              width="720"
              height="480"
              className="contact-hero-plant-img"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact1;
