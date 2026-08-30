import React from 'react';
import { motion } from 'framer-motion';

interface Contact5Props {
  onScrollToPart?: (index: number) => void;
}

export const Contact5: React.FC<Contact5Props> = ({ onScrollToPart }) => {
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
    <section id="contact-part5" className="contact-snap-part contact-final-cta-part">
      <div className="contact-container contact-final-cta-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="contact-cta-banner-card"
        >
          <div className="contact-final-left">
            <h2 className="contact-final-title">
              READY TO START<br />YOUR PROJECT?
            </h2>
            <p className="contact-final-lead">
              Let's discuss how we can deliver the right concrete solution for your project.
            </p>
            <div className="contact-final-buttons">
              <button onClick={() => handleScroll(0)} className="btn-primary contact-final-primary-btn">
                REQUEST A QUOTE →
              </button>
              <a href="tel:+919307381838" className="btn-secondary contact-final-secondary-btn">
                CONTACT OUR TEAM ↗
              </a>
            </div>
          </div>

          <div className="contact-final-right">
            <img
              src="/05_transit_mixer_closeup.svg"
              alt="Swastik Mixtures Ready Mix Concrete Truck"
              loading="lazy"
              width="400"
              height="220"
              className="contact-final-truck-img"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact5;
