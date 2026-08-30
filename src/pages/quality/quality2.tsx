import React from 'react';
import { motion } from 'framer-motion';

export const Quality2: React.FC = () => {
  const PROCESS_STEPS = [
    {
      num: '01',
      title: 'Raw Material Checks',
      mobileTitle: ['Raw', 'Material'],
      desc: 'Careful inspection of cement, aggregates, and admixtures.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    },
    {
      num: '02',
      title: 'Mix Design Control',
      mobileTitle: ['Mix', 'Design'],
      desc: 'Scientifically designed mixes for strength, durability & workability.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.31M14 2v7.31M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0" />
        </svg>
      )
    },
    {
      num: '03',
      title: 'Concrete Testing',
      mobileTitle: ['Concrete', 'Testing'],
      desc: 'Regular lab testing for slump, strength and durability.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="8" y1="10" x2="16" y2="10" />
          <line x1="8" y1="14" x2="16" y2="14" />
          <line x1="8" y1="18" x2="12" y2="18" />
        </svg>
      )
    },
    {
      num: '04',
      title: 'Slump Testing',
      mobileTitle: ['Slump', 'Testing'],
      desc: 'On-site slump checks to ensure workability meets standards.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 20 8 4 16 4 19 20 5 20" />
          <line x1="7" y1="12" x2="17" y2="12" />
        </svg>
      )
    },
    {
      num: '05',
      title: 'Strength Testing',
      mobileTitle: ['Strength', 'Testing'],
      desc: 'Compression tests to ensure concrete meets required grade.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      num: '06',
      title: 'Batch Consistency',
      mobileTitle: ['Batch', 'Consist.'],
      desc: 'Consistent batching for uniform quality in every load.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    },
    {
      num: '07',
      title: 'Quality Monitoring',
      mobileTitle: ['Quality', 'Monitor'],
      desc: 'Continuous monitoring at every stage of production.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      )
    },
    {
      num: '08',
      title: 'Site Support',
      mobileTitle: ['Site', 'Support'],
      desc: 'Expert support to ensure proper placing and performance.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      )
    }
  ];

  const STATS_PANEL = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      highlight: '100%',
      boldSub: 'Quality Focused',
      desc: 'Committed to delivering the highest quality concrete every time.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
      highlight: 'Advanced',
      boldSub: 'Testing Equipment',
      desc: 'Modern labs and equipment for accurate and reliable test results.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      highlight: 'Expert Team',
      boldSub: 'Skilled Professionals',
      desc: 'Experienced engineers and technicians ensuring consistent quality.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      highlight: 'On-Time',
      boldSub: 'Reliable Delivery',
      desc: 'Timely delivery with proper planning and real-time coordination.'
    }
  ];

  return (
    <section id="quality-part2" className="quality-part-2">
      {/* Deep Navy Gradient & Subtle Architectural Decorations */}
      <div className="quality-part-2__bg-dots" aria-hidden="true" />
      <div className="quality-part-2__bg-arcs-top" aria-hidden="true" />
      <div className="quality-part-2__bg-arcs-bottom" aria-hidden="true" />

      <div className="quality-part-2__inner">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="quality-part-2__header"
        >
          <span className="quality-part-2__eyebrow">OUR QUALITY PROCESS</span>
          <div className="quality-part-2__eyebrow-line" />
          <h2 className="quality-part-2__title">
            <span className="quality-part-2__title-white">QUALITY </span>
            <span className="quality-part-2__title-blue">BEHIND EVERY MIX</span>
          </h2>
          <p className="quality-part-2__desc">
            From raw material to final delivery, every step is carefully monitored
            to ensure superior concrete quality and consistent performance.
          </p>
        </motion.div>

        {/* ── DESKTOP & TABLET: Continuous 8-Step Horizontal Process Row ── */}
        <div className="quality-part-2__process-desktop-row">
          {PROCESS_STEPS.map((step, idx) => (
            <React.Fragment key={step.num}>
              <div className="quality-part-2__step-node">
                <span className="quality-part-2__step-num">{step.num}</span>
                <div className="quality-part-2__step-circle">
                  {step.icon}
                </div>
                <h3 className="quality-part-2__step-title">{step.title}</h3>
                <p className="quality-part-2__step-desc">{step.desc}</p>
              </div>

              {idx < PROCESS_STEPS.length - 1 && (
                <div className="quality-part-2__step-arrow" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ── TABLET (768–1199px) + SMALL MOBILE (≤ 767px): 4 × 2 Zig-Zag Snake Flow ── */}
        <div className="quality-part-2__process-mobile-snake">
          {/* Row 1: 01 → 02 → 03 → 04 */}
          <div className="quality-part-2__snake-row row-top">
            {PROCESS_STEPS.slice(0, 4).map((step, idx) => (
              <React.Fragment key={step.num}>
                <div className="quality-part-2__mobile-node">
                  <span className="quality-part-2__mobile-num">{step.num}</span>
                  <div className="quality-part-2__mobile-circle">{step.icon}</div>
                  <span className="quality-part-2__mobile-title">
                    {step.mobileTitle[0]}<br />{step.mobileTitle[1]}
                  </span>
                </div>
                {idx < 3 && (
                  <div className="quality-part-2__snake-arrow-h right" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(8, 117, 209, 0.75)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Snake Turn Connector: 04 ↓ 05 */}
          <div className="quality-part-2__snake-turn-wrap" aria-hidden="true">
            <div className="quality-part-2__snake-turn-down">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(8, 117, 209, 0.75)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          {/* Row 2: 08 ← 07 ← 06 ← 05 (Rendered in reverse visually: 08 on left, 05 on right) */}
          <div className="quality-part-2__snake-row row-bottom">
            {[PROCESS_STEPS[7], PROCESS_STEPS[6], PROCESS_STEPS[5], PROCESS_STEPS[4]].map((step, idx) => (
              <React.Fragment key={step.num}>
                <div className="quality-part-2__mobile-node">
                  <span className="quality-part-2__mobile-num">{step.num}</span>
                  <div className="quality-part-2__mobile-circle">{step.icon}</div>
                  <span className="quality-part-2__mobile-title">
                    {step.mobileTitle[0]}<br />{step.mobileTitle[1]}
                  </span>
                </div>
                {idx < 3 && (
                  <div className="quality-part-2__snake-arrow-h left" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(8, 117, 209, 0.75)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>


        {/* ── BOTTOM FEATURE / STATS PANEL (Shown only on Tablet/Medium ≤ 1199px & Mobile) ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="quality-part-2__stats-panel"
        >
          {STATS_PANEL.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className="quality-part-2__stat-col">
                <div className="quality-part-2__stat-icon-wrap">
                  {stat.icon}
                </div>
                <div className="quality-part-2__stat-texts">
                  <span className="quality-part-2__stat-highlight">{stat.highlight}</span>
                  <span className="quality-part-2__stat-bold">{stat.boldSub}</span>
                  <p className="quality-part-2__stat-desc">{stat.desc}</p>
                </div>
              </div>
              {idx < STATS_PANEL.length - 1 && (
                <div className="quality-part-2__stat-sep" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Quality2;
