import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface ProjectHeroProps {
  onNavigate?: (path: string) => void;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ onNavigate }) => {
  const [yearsCount, setYearsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          
          // Animate 0 -> 18
          let startYears = 0;
          const endYears = 18;
          const yearsTimer = setInterval(() => {
            startYears += 1;
            setYearsCount(startYears);
            if (startYears >= endYears) clearInterval(yearsTimer);
          }, 60);

          // Animate 0 -> 500
          let startProjects = 0;
          const endProjects = 500;
          const projectsTimer = setInterval(() => {
            startProjects += 25;
            setProjectsCount(startProjects);
            if (startProjects >= endProjects) clearInterval(projectsTimer);
          }, 40);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownloadProfile = () => {
    // Trigger download or navigate to contact
    if (onNavigate) {
      onNavigate('/contact');
    } else {
      window.location.hash = '/contact';
    }
  };

  return (
    <section id="project-hero" className="project-snap-section project-hero-section">
      <div className="project-hero-bg-gradient" aria-hidden="true" />

      <div className="project-container project-hero-container">
        {/* LEFT COLUMN: Hero Typography */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="project-hero-left"
        >
          <span className="project-eyebrow">OUR PROJECTS</span>

          <h1 className="project-hero-title">
            BUILDING STRUCTURES.<br />
            <span className="project-title-blue">BUILDING TRUST.</span>
          </h1>

          <div className="project-title-accent-line" />

          <p className="project-hero-lead">
            From high-rises to infrastructure, Swastik Mixtures has delivered quality
            concrete solutions for projects that shape communities and last for generations.
          </p>

          <button onClick={handleDownloadProfile} className="btn-primary project-hero-download-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            DOWNLOAD PROJECT PROFILE
          </button>
        </motion.div>

        {/* RIGHT COLUMN: Swastik RMC Plant Photograph Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="project-hero-right"
        >
          <div className="project-hero-img-wrap">
            <img
              src="/08_Swastik_RMC_Plant.svg"
              alt="Swastik Mixtures Ready Mix Concrete Plant"
              loading="eager"
              width="720"
              height="480"
              className="project-hero-plant-img"
            />
            <div className="project-hero-img-overlay" />
          </div>
        </motion.div>
      </div>

      {/* BOTTOM ANIMATED STATISTICS STRIP */}
      <div ref={statsRef} className="project-stats-strip-wrap">
        <div className="project-container project-stats-container">
          <div className="project-stats-grid">
            {/* Stat 1 */}
            <div className="project-stat-card">
              <div className="project-stat-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <path d="M9 22v-4h6v4" />
                  <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
                </svg>
              </div>
              <div className="project-stat-text">
                <span className="project-stat-number">{yearsCount}+</span>
                <span className="project-stat-label">YEARS</span>
                <span className="project-stat-sub">OF EXPERIENCE</span>
              </div>
            </div>

            <div className="project-stat-divider" aria-hidden="true" />

            {/* Stat 2 */}
            <div className="project-stat-card">
              <div className="project-stat-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                  <path d="M1 14h22v4a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-4z" />
                  <path d="M4 14l2-8h12l2 8" />
                  <circle cx="7" cy="18" r="1.5" />
                  <circle cx="17" cy="18" r="1.5" />
                </svg>
              </div>
              <div className="project-stat-text">
                <span className="project-stat-number">{projectsCount}+</span>
                <span className="project-stat-label">PROJECTS</span>
                <span className="project-stat-sub">DELIVERED</span>
              </div>
            </div>

            <div className="project-stat-divider" aria-hidden="true" />

            {/* Stat 3 */}
            <div className="project-stat-card">
              <div className="project-stat-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                  <path d="M2 20h20" />
                  <path d="M6 20a6 6 0 0 1 12 0" />
                  <path d="M12 4v10" />
                </svg>
              </div>
              <div className="project-stat-text">
                <span className="project-stat-number text-sm">ACROSS</span>
                <span className="project-stat-label">LUCKNOW</span>
                <span className="project-stat-sub">& UTTAR PRADESH</span>
              </div>
            </div>

            <div className="project-stat-divider" aria-hidden="true" />

            {/* Stat 4 */}
            <div className="project-stat-card">
              <div className="project-stat-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div className="project-stat-text">
                <span className="project-stat-number text-sm">QUALITY</span>
                <span className="project-stat-label">YOU CAN</span>
                <span className="project-stat-sub">BUILD ON</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
