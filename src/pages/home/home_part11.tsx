import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface StatCounterProps {
  target: number;
  suffix: string;
  duration?: number;
  delay?: number;
}

const StatCounter: React.FC<StatCounterProps> = ({ target, suffix, duration = 2000, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          setTimeout(() => {
            let startTimestamp: number | null = null;
            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              const easedProgress = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(easedProgress * target));

              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                setCount(target);
              }
            };
            window.requestAnimationFrame(step);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, [target, duration, delay]);

  return (
    <span ref={elementRef} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {count}{suffix}
    </span>
  );
};

const CLIENTS_DETAILED_DATA = [
  {
    id: 'c-1',
    name: 'PWD',
    subtitle: 'Lucknow',
    desc: 'Public Works Department\nGovernment of Uttar Pradesh',
    logo: '/PWD_Lucknow.svg',
    alt: 'PWD Lucknow logo'
  },
  {
    id: 'c-2',
    name: 'RERA',
    subtitle: 'Approved Projects',
    desc: 'RERA Registered\nApproved Projects',
    logo: '/RERA.svg',
    alt: 'RERA logo'
  },
  {
    id: 'c-3',
    name: 'NBCC',
    subtitle: 'India',
    desc: 'A Navratna CPSE\nGovernment of India',
    logo: '/NBCC.svg',
    alt: 'NBCC India logo'
  },
  {
    id: 'c-4',
    name: 'LDA',
    subtitle: 'Lucknow Development Authority',
    desc: 'Building a Better\nLucknow Together',
    logo: '/LDA_Lucknow.svg',
    alt: 'Lucknow Development Authority logo'
  },
  {
    id: 'c-5',
    name: 'IRCON',
    subtitle: 'International',
    desc: 'Engineering the Nation\nBuilding the Future',
    logo: '/IRCON_International.svg',
    alt: 'IRCON International logo'
  },
  {
    id: 'c-6',
    name: 'HAL',
    subtitle: 'Hindustan Aeronautics Limited',
    desc: 'A Maharatna CPSE\nGovernment of India',
    logo: '/HAL_Logo_HighQuality.svg',
    alt: 'Hindustan Aeronautics Limited logo'
  },
  {
    id: 'c-7',
    name: 'MRC',
    subtitle: 'Construction',
    desc: 'Building Values\nBuilding Trust',
    logo: '/MRC_Logo_HighQuality.svg',
    alt: 'MRC Construction logo'
  },
  {
    id: 'c-8',
    name: 'JAYPEE',
    subtitle: 'Group',
    desc: 'No Dream Too Big\nNo Challenge Too Great',
    logo: '/Jaypee_Group_Logo_HighQuality.svg',
    alt: 'JAYPEE Group logo'
  }
];

export const HomePart11: React.FC = () => {
  return (
    <section id="home-part-11" className="clients-outer-section home-snap-part">
      <div className="clients-bg-decorations" aria-hidden="true">
        <div className="clients-bg-dots-left">
          <svg width="160" height="240" viewBox="0 0 160 240" fill="none">
            <pattern id="clientsDotGrid" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#0875D1" fillOpacity="0.04" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#clientsDotGrid)" />
          </svg>
        </div>

        <div className="clients-bg-building-right">
          <svg width="220" height="420" viewBox="0 0 100 200" fill="none" stroke="#0875D1" strokeOpacity="0.03" strokeWidth="0.8">
            <line x1="10" y1="200" x2="10" y2="10" />
            <line x1="30" y1="200" x2="30" y2="30" />
            <line x1="50" y1="200" x2="50" y2="50" />
            <line x1="80" y1="200" x2="80" y2="80" />
            <line x1="10" y1="40" x2="80" y2="40" />
            <line x1="10" y1="80" x2="80" y2="80" />
            <line x1="10" y1="120" x2="80" y2="120" />
            <line x1="10" y1="160" x2="80" y2="160" />
          </svg>
        </div>

        <div className="clients-bg-building-left">
          <svg width="220" height="380" viewBox="0 0 100 200" fill="none" stroke="#0875D1" strokeOpacity="0.03" strokeWidth="0.8">
            <line x1="90" y1="200" x2="90" y2="10" />
            <line x1="70" y1="200" x2="70" y2="40" />
            <line x1="50" y1="200" x2="50" y2="80" />
            <line x1="50" y1="60" x2="90" y2="60" />
            <line x1="50" y1="100" x2="90" y2="100" />
            <line x1="50" y1="140" x2="90" y2="140" />
          </svg>
        </div>
      </div>

      <div className="clients-container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="clients-header"
        >
          <div className="clients-eyebrow-container">
            <div className="clients-eyebrow-line" />
            <span className="clients-eyebrow">OUR CLIENTS</span>
            <div className="clients-eyebrow-line" />
          </div>
          <h2 className="clients-heading">Trusted by Industry Leaders</h2>
          <p className="clients-supporting">
            We take pride in partnering with India's most reputed organizations to build a stronger tomorrow.
          </p>
        </motion.div>

        <div className="clients-grid">
          {CLIENTS_DETAILED_DATA.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="client-card"
            >
              <div className="client-card-top">
                <div className="client-logo-wrapper">
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className="client-logo-img"
                    loading="lazy"
                  />
                </div>
                <div className="client-title-block">
                  <h3 className="client-company-name">{client.name}</h3>
                  <span className="client-subtitle">{client.subtitle}</span>
                </div>
              </div>

              <div className="client-card-body">
                <div className="client-accent-line" aria-hidden="true" />
                <p className="client-description">{client.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="many-more-row"
        >
          <div className="many-more-line-wrapper">
            <div className="many-more-line" />
            <div className="many-more-dot" />
          </div>
          <div className="client-card-many-more">
            <div className="many-more-icon-circle">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <span className="many-more-title">& Many More</span>
          </div>
          <div className="many-more-line-wrapper">
            <div className="many-more-line" />
            <div className="many-more-dot" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="clients-stats-bar"
        >
          <div className="clients-stat-item">
            <div className="clients-stat-icon-circle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8L3 21" />
                <path d="M9 12h.01M15 12h.01" />
              </svg>
            </div>
            <div className="clients-stat-data">
              <span className="clients-stat-number">
                <StatCounter target={500} suffix="+" delay={0} />
              </span>
              <span className="clients-stat-label">Happy Clients</span>
            </div>
          </div>

          <div className="clients-stat-divider" aria-hidden="true" />

          <div className="clients-stat-item">
            <div className="clients-stat-icon-circle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                <line x1="9" y1="22" x2="9" y2="16" />
                <line x1="9" y1="16" x2="15" y2="16" />
                <line x1="15" y1="16" x2="15" y2="22" />
              </svg>
            </div>
            <div className="clients-stat-data">
              <span className="clients-stat-number">
                <StatCounter target={1000} suffix="+" delay={120} />
              </span>
              <span className="clients-stat-label">Projects Delivered</span>
            </div>
          </div>

          <div className="clients-stat-divider" aria-hidden="true" />

          <div className="clients-stat-item">
            <div className="clients-stat-icon-circle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 11 2 2 4-4" />
              </svg>
            </div>
            <div className="clients-stat-data">
              <span className="clients-stat-number">
                <StatCounter target={30} suffix="+" delay={240} />
              </span>
              <span className="clients-stat-label">Years of Experience</span>
            </div>
          </div>

          <div className="clients-stat-divider" aria-hidden="true" />

          <div className="clients-stat-item">
            <div className="clients-stat-icon-circle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            </div>
            <div className="clients-stat-data">
              <span className="clients-stat-number">
                <StatCounter target={100} suffix="%" delay={360} />
              </span>
              <span className="clients-stat-label">Client Satisfaction</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePart11;
