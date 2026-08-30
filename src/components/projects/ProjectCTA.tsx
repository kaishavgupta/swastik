import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCTAProps {
  onNavigate?: (path: string) => void;
}

export const ProjectCTA: React.FC<ProjectCTAProps> = ({ onNavigate }) => {
  const handleQuoteClick = () => {
    if (onNavigate) {
      onNavigate('/contact?form=true');
    } else {
      window.location.hash = '/contact?form=true';
    }
  };

  const handleTalkClick = () => {
    if (onNavigate) {
      onNavigate('/contact?form=true');
    } else {
      window.location.hash = '/contact?form=true';
    }
  };

  return (
    <section
      id="project-cta"
      className="proj-cta"
      aria-label="Project Inquiry Call to Action"
    >
      {/* ── FULL-BLEED SUBTLE LIGHT-BLUE CONSTRUCTION SVG BACKGROUND ── */}
      <div className="proj-cta__bg-layer" aria-hidden="true" />

      <div className="proj-cta__container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="proj-cta__card"
        >
          {/* ── TOP / MAIN ROW: LEFT CONTENT + RIGHT TRUCK IMAGE ── */}
          <div className="proj-cta__main-row">
            {/* LEFT CONTENT */}
            <div className="proj-cta__left">
              <div className="proj-cta__eyebrow-wrap">
                <span className="proj-cta__eyebrow-dash">—</span>
                <span className="proj-cta__eyebrow">LET'S BUILD SOMETHING GREAT</span>
                <span className="proj-cta__eyebrow-dash">—</span>
              </div>

              <h2 className="proj-cta__title">
                HAVE A PROJECT<br />IN MIND?
              </h2>

              <p className="proj-cta__desc">
                Whether it's a residential complex, infrastructure project or
                industrial structure, we have the concrete solution you can
                count on.
              </p>

              <div className="proj-cta__divider" />

              <div className="proj-cta__actions">
                <button
                  onClick={handleQuoteClick}
                  className="proj-cta__btn-primary"
                  aria-label="Request a quote"
                >
                  <span>REQUEST A QUOTE</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>

                <button
                  onClick={handleTalkClick}
                  className="proj-cta__btn-secondary"
                  aria-label="Talk to our team"
                >
                  <span>TALK TO OUR TEAM</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </button>
              </div>
            </div>

            {/* RIGHT TRUCK PHOTO (With Angled Transition & Highlight Border) */}
            <div className="proj-cta__right">
              <div className="proj-cta__truck-wrapper">
                <div className="proj-cta__angle-accent" aria-hidden="true" />
                <div className="proj-cta__image-frame">
                  <img
                    src="/01_transit_mixer_fleet.svg"
                    alt="Swastik Mixtures Ready Mix Concrete Transit Mixer Truck Fleet"
                    loading="lazy"
                    className="proj-cta__truck-img"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── BOTTOM ROW: 3-ITEM TRUST & STAT STRIP ── */}
          <div className="proj-cta__trust-bar">
            {/* Item 1: Shield */}
            <div className="proj-cta__trust-item">
              <div className="proj-cta__trust-icon-wrap" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <div className="proj-cta__trust-texts">
                <span className="proj-cta__trust-label">Trusted by</span>
                <span className="proj-cta__trust-val">Govt. &amp; PSUs</span>
              </div>
            </div>

            <div className="proj-cta__trust-sep" aria-hidden="true" />

            {/* Item 2: Worker Helmet */}
            <div className="proj-cta__trust-item">
              <div className="proj-cta__trust-icon-wrap" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 18h20" />
                  <path d="M5 18V11a7 7 0 0 1 14 0v7" />
                  <path d="M10 11V6a2 2 0 0 1 4 0v5" />
                </svg>
              </div>
              <div className="proj-cta__trust-texts">
                <span className="proj-cta__trust-label">Delivered</span>
                <span className="proj-cta__trust-val">1000+ Projects</span>
              </div>
            </div>

            <div className="proj-cta__trust-sep" aria-hidden="true" />

            {/* Item 3: Building */}
            <div className="proj-cta__trust-item">
              <div className="proj-cta__trust-icon-wrap" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="3" width="16" height="18" rx="2" />
                  <path d="M9 21v-4h6v4" />
                  <line x1="8" y1="7" x2="10" y2="7" />
                  <line x1="14" y1="7" x2="16" y2="7" />
                  <line x1="8" y1="11" x2="10" y2="11" />
                  <line x1="14" y1="11" x2="16" y2="11" />
                  <line x1="8" y1="15" x2="10" y2="15" />
                  <line x1="14" y1="15" x2="16" y2="15" />
                </svg>
              </div>
              <div className="proj-cta__trust-texts">
                <span className="proj-cta__trust-label">Built with</span>
                <span className="proj-cta__trust-val">Strength &amp; Quality</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectCTA;
