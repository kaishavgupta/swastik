import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export interface ClientLogo {
  id: string;
  name: string;
  subLabel?: string;
  logoUrl: string;
}

export const CLIENT_LOGOS: ClientLogo[] = [
  { id: 'pwd', name: 'PWD', subLabel: 'Uttar Pradesh', logoUrl: '/PWD_Lucknow.svg' },
  { id: 'lda', name: 'LDA', subLabel: 'Lucknow Development Authority', logoUrl: '/LDA_Lucknow.svg' },
  { id: 'nbcc', name: 'NBCC', subLabel: 'A Navratna CPSE', logoUrl: '/NBCC.svg' },
  { id: 'ircon', name: 'IRCON', subLabel: 'International Limited', logoUrl: '/IRCON_International.svg' },
  { id: 'cpwd', name: 'CPWD', subLabel: 'Central PWD', logoUrl: '/RERA.svg' },
  { id: 'uppcl', name: 'UPPCL', subLabel: 'Uttar Pradesh Power Corp.', logoUrl: '/HAL_Logo_HighQuality.svg' },
  { id: 'jaypee', name: 'Jaypee Group', subLabel: 'Infrastructure', logoUrl: '/Jaypee_Group_Logo_HighQuality.svg' },
  { id: 'mrc', name: 'MRC', subLabel: 'Construction', logoUrl: '/MRC_Logo_HighQuality.svg' }
];

export const TrustedClients: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="trusted-clients" className="project-snap-section trusted-clients-section">
      <div className="project-container trusted-clients-container">
        {/* HEADER */}
        <div className="project-section-header text-center">
          <span className="project-eyebrow block">TRUSTED BY</span>
          <h2 className="project-section-title">CLIENTS WHO BUILD THE NATION</h2>
          <div className="project-title-bar margin-auto" />
        </div>

        {/* LOGO CAROUSEL WITH PREV / NEXT CONTROLS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="clients-carousel-wrapper"
        >
          {/* Previous Button */}
          <button
            onClick={handleScrollLeft}
            className="clients-nav-btn clients-nav-prev"
            aria-label="Previous logos"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Scroll Container */}
          <div ref={scrollRef} className="clients-scroll-container">
            <div className="clients-logo-track">
              {CLIENT_LOGOS.map((client) => (
                <div key={client.id} className="client-logo-card">
                  <img
                    src={client.logoUrl}
                    alt={`${client.name} ${client.subLabel || ''}`}
                    loading="lazy"
                    width="140"
                    height="60"
                    className="client-logo-img"
                  />
                  {client.subLabel && (
                    <span className="client-logo-subtext">{client.subLabel}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleScrollRight}
            className="clients-nav-btn clients-nav-next"
            aria-label="Next logos"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
