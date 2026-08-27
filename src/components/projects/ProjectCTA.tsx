import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCTAProps {
  onNavigate?: (path: string) => void;
}

export const ProjectCTA: React.FC<ProjectCTAProps> = ({ onNavigate }) => {
  const handleQuoteClick = () => {
    if (onNavigate) {
      onNavigate('/contact');
    } else {
      window.location.hash = '/contact';
    }
  };

  const handleTalkClick = () => {
    if (onNavigate) {
      onNavigate('/contact');
    } else {
      window.location.hash = '/contact';
    }
  };

  return (
    <section id="project-cta" className="project-snap-section project-cta-section">
      <div className="project-container project-cta-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="project-cta-banner-card"
        >
          {/* LEFT: Text & Dual Action Buttons */}
          <div className="project-cta-left">
            <h2 className="project-cta-title">HAVE A PROJECT IN MIND?</h2>

            <p className="project-cta-lead">
              Whether it's a residential complex, infrastructure project or industrial
              structure, we have the concrete solution you can count on.
            </p>

            <div className="project-cta-buttons">
              <button onClick={handleQuoteClick} className="btn-primary project-cta-primary-btn">
                REQUEST A QUOTE →
              </button>

              <button onClick={handleTalkClick} className="btn-secondary project-cta-secondary-btn">
                TALK TO OUR TEAM ↗
              </button>
            </div>
          </div>

          {/* RIGHT: Transit Mixer Closeup Truck SVG */}
          <div className="project-cta-right">
            <img
              src="/05_transit_mixer_closeup.svg"
              alt="Swastik Mixtures Ready Mix Concrete Truck"
              loading="lazy"
              width="440"
              height="200"
              className="project-cta-truck-img"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
