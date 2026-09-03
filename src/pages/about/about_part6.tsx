import React from 'react';
import { motion } from 'framer-motion';

interface AboutPart6Props {
  onNavigate?: (path: string) => void;
}

interface SafetyCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SafetyIcon = ({ children }: { children: React.ReactNode }) => (
  <span className="about-safety-feature-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  </span>
);

export const AboutPart6: React.FC<AboutPart6Props> = ({ onNavigate }) => {
  const SAFETY_CARDS: SafetyCard[] = [
    {
      title: 'Safety-first approach',
      description: 'We put safety above everything in every operation.',
      icon: <SafetyIcon><path d="M6 10h12M8 10V7a4 4 0 0 1 8 0v3M5 10h14v8H5z" /><path d="M9 18v2m6-2v2" /></SafetyIcon>
    },
    {
      title: 'Proper PPE for all team members',
      description: 'Ensuring the right protection for every individual.',
      icon: <SafetyIcon><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0M14 19a4 4 0 0 1 7 0" /></SafetyIcon>
    },
    {
      title: 'Safe concrete handling & operations',
      description: 'Following best practices at every stage.',
      icon: <SafetyIcon><path d="M4 9h9l3 3v5H4z" /><path d="M16 12h3l2 2v3h-5M7 17a2 2 0 1 0 4 0M17 17a2 2 0 1 0 4 0" /></SafetyIcon>
    },
    {
      title: 'On-time site coordination',
      description: 'Keeping operations smooth and safe.',
      icon: <SafetyIcon><circle cx="12" cy="12" r="8" /><path d="M12 7v5l3 2" /></SafetyIcon>
    },
    {
      title: 'Professional and trained workforce',
      description: 'Skilled people, safer processes, better results.',
      icon: <SafetyIcon><path d="M9 5a3 3 0 1 1 6 0v2a3 3 0 0 1-6 0z" /><path d="M5 20a7 7 0 0 1 14 0M12 10v6" /></SafetyIcon>
    },
    {
      title: 'Quality-controlled production',
      description: 'Consistent quality, maximum safety.',
      icon: <SafetyIcon><path d="m12 3 7 3v5c0 4.5-3 7.7-7 10-4-2.3-7-5.5-7-10V6z" /><path d="m9 12 2 2 4-4" /></SafetyIcon>
    },
    {
      title: 'Committed to a safer environment',
      description: 'Building a cleaner and safer future.',
      icon: <SafetyIcon><path d="M4 19h16M6 19v-7h4v7M12 19V8h4v11M18 19V5h2v14" /><path d="M7 9h2m4-4h2" /></SafetyIcon>
    },
    {
      title: 'Responsible execution of every project',
      description: 'Safety, quality and commitment in every step.',
      icon: <SafetyIcon><path d="M7 3h10v18H7z" /><path d="M9 7h6M9 11h6M9 15h3" /><path d="m15 15 1 1 2-2" /></SafetyIcon>
    },
    {
      title: 'Technical support at every step',
      description: 'Expert guidance, whenever you need it.',
      icon: <SafetyIcon><path d="M8 12a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4" /><path d="M6 14v3a2 2 0 0 0 2 2h2M18 14v3a2 2 0 0 1-2 2h-2" /><path d="M9 14h6" /></SafetyIcon>
    }
  ];

  const handleNav = (path: string) => {
    if (onNavigate) onNavigate(path);
    else window.location.hash = path;
  };

  return (
    <section id="about-part6" className="about-safety-responsibility-section">
      <div className="about-safety-pattern about-safety-pattern-left" aria-hidden="true" />
      <div className="about-safety-pattern about-safety-pattern-right" aria-hidden="true" />

      <div className="about-safety-resp-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="about-safety-main-layout"
        >
          <div className="about-safety-img-col">
            <div className="about-safety-photo-card">
              <img
                src="/07_Safety_Construction_Site.svg"
                alt="Swastik Mixtures Construction Site Safety"
                className="about-safety-photo"
              />
              <div className="about-safety-image-badge about-safety-image-badge-top">
                <span className="about-safety-badge-shield">✓</span>
                <span><strong>Safe People</strong><br />Strong Projects</span>
              </div>
              <div className="about-safety-image-badge about-safety-image-badge-bottom">
                <span className="about-safety-badge-shield">✓</span>
                <span><strong>Safety First</strong><br />Always</span>
              </div>
            </div>

            <div className="about-safety-mini-stats">
              <div><strong>0</strong><span>Accidents<br />Goal</span></div>
              <div><strong>100%</strong><span>Safety<br />Compliance</span></div>
              <div><strong>200+</strong><span>Trained<br />Workforce</span></div>
              <div><strong>24/7</strong><span>Site<br />Monitoring</span></div>
            </div>
          </div>

          <div className="about-safety-content-col">
            <span className="about-safety-eyebrow-label">SAFETY &amp; RESPONSIBILITY</span>
            <div className="about-safety-eyebrow-line" />
            <h2 className="about-safety-main-heading">
              Safety Is Not Just A Responsibility –<br className="safety-title-br" />
              It Is A <span className="text-blue-accent">Commitment.</span>
            </h2>
            <p className="about-safety-lead-paragraph">
              At Swastik Mixtures, safety is at the core of everything we do. We follow strict protocols,
              modern practices and continuous training to ensure a safe and secure environment at every site.
            </p>

            <div className="about-safety-feature-grid">
              {SAFETY_CARDS.map((card, idx) => (
                <motion.article
                  key={card.title}
                  className="about-safety-feature-card"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: idx * 0.04 }}
                >
                  {card.icon}
                  <div className="about-safety-feature-copy">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="about-safety-cta-banner"
        >
          <div className="about-safety-cta-left">
            <div className="about-safety-cta-icon-wrap" aria-hidden="true">
              <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <div className="about-safety-cta-texts">
              <h3 className="about-safety-cta-title">HAVE A PROJECT IN MIND?</h3>
              <p className="about-safety-cta-sub">Let's build something strong with Swastik Mixtures.</p>
            </div>
          </div>
          <button onClick={() => handleNav('/contact?form=true')} className="about-safety-cta-button">
            REQUEST A QUOTE <span aria-hidden="true">→</span>
          </button>
        </motion.div>
      </div>

      <div className="about-safety-wave-container" aria-hidden="true">
        <img src="/swastik-wave.svg" alt="" className="about-safety-wave-svg" />
      </div>
    </section>
  );
};

export default AboutPart6;
