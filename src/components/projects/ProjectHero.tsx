import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectHeroProps {
  onNavigate?: (path: string) => void;
}

/* ── SVG Icons for Statistics ── */
const IconBuilding = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
  </svg>
);

const IconTruck = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const IconLocation = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconQuality = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 12 15 15 9" />
  </svg>
);

const IconDownload = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const IconPlay = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#0875D1">
    <polygon points="6 3 20 12 6 21 6 3" />
  </svg>
);

/* ── Curved Annotation Arrow ── */
const AnnotationArrow = () => (
  <svg width="38" height="34" viewBox="0 0 45 40" fill="none" className="proj-hero__arrow-svg">
    <path
      d="M8 6 C18 18, 30 22, 38 32"
      stroke="#1E293B"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeDasharray="2.5 2.5"
    />
    <path
      d="M32 32 L39 34 L38 27"
      stroke="#1E293B"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ProjectHero: React.FC<ProjectHeroProps> = ({ onNavigate }) => {
  const [yearsCount, setYearsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;

          // 0 -> 18
          let startYears = 0;
          const endYears = 18;
          const yearsTimer = setInterval(() => {
            startYears += 1;
            setYearsCount(startYears);
            if (startYears >= endYears) clearInterval(yearsTimer);
          }, 50);

          // 0 -> 500
          let startProjects = 0;
          const endProjects = 500;
          const projectsTimer = setInterval(() => {
            startProjects += 25;
            setProjectsCount(startProjects);
            if (startProjects >= endProjects) clearInterval(projectsTimer);
          }, 35);
        }
      },
      { threshold: 0.25 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownloadProfile = () => {
    if (onNavigate) {
      onNavigate('/contact?form=true');
    } else {
      window.location.hash = '/contact?form=true';
    }
  };

  return (
    <section id="project-hero" className="proj-hero">
      {/* Background Decorative Grid and Blue Shapes */}
      <div className="proj-hero__bg-dots-top-left" aria-hidden="true" />
      <div className="proj-hero__bg-dots-bottom" aria-hidden="true" />
      <div className="proj-hero__bg-blue-shape-top" aria-hidden="true" />
      <div className="proj-hero__bg-blue-shape-bottom" aria-hidden="true" />

      <div className="proj-hero__container">
        {/* ═══ TWO-COLUMN HERO COMPOSITION ═══ */}
        <div className="proj-hero__layout">
          {/* LEFT COLUMN: Hero Typography & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="proj-hero__left"
          >
            {/* Eyebrow */}
            <div className="proj-hero__eyebrow-wrap">
              <span className="proj-hero__eyebrow">OUR PROJECTS</span>
              <div className="proj-hero__eyebrow-line" />
            </div>

            {/* Large Bold Industrial Heading */}
            <h1 className="proj-hero__title">
              BUILDING<br />
              STRUCTURES.<br />
              <span className="proj-hero__title-blue">
                BUILDING<br />
                TRUST.
              </span>
            </h1>

            {/* Blue Divider Accent */}
            <div className="proj-hero__divider" />

            {/* Lead Description */}
            <p className="proj-hero__desc">
              From high-rises to infrastructure, Swastik Mixtures has delivered quality
              concrete solutions for projects that shape communities and last for generations.
            </p>

            {/* Primary Download CTA */}
            <button
              onClick={handleDownloadProfile}
              className="proj-hero__download-btn"
              aria-label="Download Swastik Mixtures Project Profile"
            >
              <IconDownload />
              <span>DOWNLOAD PROJECT PROFILE</span>
            </button>
          </motion.div>

          {/* RIGHT COLUMN: Project / Plant Visual with Custom Curve & Play Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="proj-hero__right"
          >
            {/* Background Blue Geometry Behind Image */}
            <div className="proj-hero__img-backdrop-accent" aria-hidden="true" />

            {/* Organic Curved Image Container */}
            <div className="proj-hero__img-frame">
              <img
                src="/08_Swastik_RMC_Plant.svg"
                alt="Swastik Mixtures Ready Mix Concrete Batching Plant & Transit Mixer Fleet"
                loading="eager"
                className="proj-hero__plant-img"
              />
            </div>

            {/* Interactive Play Button + Handwritten Annotation */}
            <div className="proj-hero__play-wrapper">
              <div className="proj-hero__annotation">
                <span className="proj-hero__annotation-text">
                  See Our Plant<br />in Action
                </span>
                <AnnotationArrow />
              </div>

              <button
                onClick={() => setVideoModalOpen(true)}
                className="proj-hero__play-btn"
                aria-label="Watch Swastik Mixtures Plant in Action Video"
              >
                <div className="proj-hero__play-icon-wrap">
                  <IconPlay />
                </div>
              </button>
            </div>
          </motion.div>
        </div>

        {/* ═══ FLOATING WHITE EXPERIENCE / TRUST STATS CARD ═══ */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          className="proj-hero__stats-card"
        >
          {/* Stat 1: 18+ Years */}
          <div className="proj-hero__stat-item">
            <div className="proj-hero__stat-icon">
              <IconBuilding />
            </div>
            <div className="proj-hero__stat-content">
              <div className="proj-hero__stat-number">{yearsCount}+</div>
              <div className="proj-hero__stat-label">YEARS</div>
              <div className="proj-hero__stat-sub">OF EXPERIENCE</div>
            </div>
          </div>

          <div className="proj-hero__stat-sep" aria-hidden="true" />

          {/* Stat 2: 500+ Projects */}
          <div className="proj-hero__stat-item">
            <div className="proj-hero__stat-icon">
              <IconTruck />
            </div>
            <div className="proj-hero__stat-content">
              <div className="proj-hero__stat-number">{projectsCount}+</div>
              <div className="proj-hero__stat-label">PROJECTS</div>
              <div className="proj-hero__stat-sub">DELIVERED</div>
            </div>
          </div>

          <div className="proj-hero__stat-sep" aria-hidden="true" />

          {/* Stat 3: Across Lucknow & UP */}
          <div className="proj-hero__stat-item">
            <div className="proj-hero__stat-icon">
              <IconLocation />
            </div>
            <div className="proj-hero__stat-content">
              <div className="proj-hero__stat-eyebrow">ACROSS</div>
              <div className="proj-hero__stat-label-large">LUCKNOW</div>
              <div className="proj-hero__stat-sub">&amp; UTTAR PRADESH</div>
            </div>
          </div>

          <div className="proj-hero__stat-sep" aria-hidden="true" />

          {/* Stat 4: Quality You Can Build On */}
          <div className="proj-hero__stat-item">
            <div className="proj-hero__stat-icon">
              <IconQuality />
            </div>
            <div className="proj-hero__stat-content">
              <div className="proj-hero__stat-eyebrow">QUALITY</div>
              <div className="proj-hero__stat-label-large">YOU CAN</div>
              <div className="proj-hero__stat-sub">BUILD ON</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ═══ PLANT VIDEO MODAL ═══ */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="proj-hero__modal-backdrop"
            onClick={() => setVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="proj-hero__modal-box"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="proj-hero__modal-close"
                onClick={() => setVideoModalOpen(false)}
                aria-label="Close Video Modal"
              >
                ✕
              </button>
              <div className="proj-hero__modal-header">
                <h3>Swastik Mixtures Plant &amp; Operations</h3>
                <p>State-of-the-art automated batching and modern transit delivery.</p>
              </div>
              <div className="proj-hero__modal-video-wrap">
                <img
                  src="/08_Swastik_RMC_Plant.svg"
                  alt="Swastik Mixtures Plant Showcase"
                  className="proj-hero__modal-poster"
                />
                <div className="proj-hero__modal-overlay">
                  <div className="proj-hero__modal-badge">
                    <span>⚡ LIVE OPERATIONS SHOWCASE</span>
                  </div>
                  <p className="proj-hero__modal-note">
                    High-definition plant operations footage and testing standards video.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectHero;
