import React from 'react';
import { motion } from 'framer-motion';

export const ProductPart4: React.FC = () => {
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
      desc: 'Compressive strength verification for safety and load capability.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      )
    },
    {
      num: '06',
      title: 'Batch Consistency',
      mobileTitle: ['Batch', 'Consistency'],
      desc: 'Automated batching plants guarantee uniform mix proportions.',
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
      mobileTitle: ['Quality', 'Monitoring'],
      desc: 'End-to-end QC surveillance from batching to discharge.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    },
    {
      num: '08',
      title: 'Site Support',
      mobileTitle: ['Site', 'Support'],
      desc: 'Technical experts on-site to assist placement and testing.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  const row1 = PROCESS_STEPS.slice(0, 4); // 01, 02, 03, 04 (left-to-right)
  const row2 = PROCESS_STEPS.slice(4, 8).reverse(); // 08, 07, 06, 05 (right-to-left snake)

  return (
    <section id="product-part4" className="product-part-4">
      {/* Subtle Architectural Dotted Pattern */}
      <div className="product-part-4__bg-dots" aria-hidden="true" />
      <div className="product-part-4__bg-arcs-top" aria-hidden="true" />
      <div className="product-part-4__bg-arcs-bottom" aria-hidden="true" />

      <div className="product-part-4__inner">
        {/* Section Header */}
        <div className="product-part-4__header">
          <span className="product-part-4__eyebrow">OUR QUALITY PROCESS</span>
          <div className="product-part-4__eyebrow-line" />
          <h2 className="product-part-4__title">
            <span className="product-part-4__title-white">QUALITY </span>
            <span className="product-part-4__title-blue">BEHIND EVERY MIX</span>
          </h2>
          <p className="product-part-4__desc">
            From raw materials to on-site delivery, every batch undergoes stringent testing and computerized monitoring for certified durability.
          </p>
        </div>

        {/* ── 1. DESKTOP HORIZONTAL PROCESS ROW (8 Steps) ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="product-part-4__process-desktop-row"
        >
          {PROCESS_STEPS.map((step, idx) => (
            <React.Fragment key={step.num}>
              <div className="product-part-4__step-node">
                <span className="product-part-4__step-num">{step.num}</span>
                <div className="product-part-4__step-circle">
                  {step.icon}
                </div>
                <h3 className="product-part-4__step-title">{step.title}</h3>
                <p className="product-part-4__step-desc">{step.desc}</p>
              </div>

              {idx < PROCESS_STEPS.length - 1 && (
                <div className="product-part-4__step-arrow" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* ── 2. TABLET & MOBILE (4 × 2 SNAKE FLOW) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="product-part-4__process-mobile-snake"
        >
          {/* Top Row: 01 → 02 → 03 → 04 */}
          <div className="product-part-4__snake-row">
            {row1.map((step, idx) => (
              <React.Fragment key={step.num}>
                <div className="product-part-4__mobile-node">
                  <span className="product-part-4__mobile-num">{step.num}</span>
                  <div className="product-part-4__mobile-circle">
                    {step.icon}
                  </div>
                  <span className="product-part-4__mobile-title">
                    {step.mobileTitle[0]}<br />{step.mobileTitle[1]}
                  </span>
                </div>

                {idx < row1.length - 1 && (
                  <div className="product-part-4__snake-arrow-h" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Turn Arrow (04 ↓ 05) */}
          <div className="product-part-4__snake-turn-wrap" aria-hidden="true">
            <div className="product-part-4__snake-turn-down">
              <svg width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          {/* Bottom Row: 08 ← 07 ← 06 ← 05 */}
          <div className="product-part-4__snake-row">
            {row2.map((step, idx) => (
              <React.Fragment key={step.num}>
                <div className="product-part-4__mobile-node">
                  <span className="product-part-4__mobile-num">{step.num}</span>
                  <div className="product-part-4__mobile-circle">
                    {step.icon}
                  </div>
                  <span className="product-part-4__mobile-title">
                    {step.mobileTitle[0]}<br />{step.mobileTitle[1]}
                  </span>
                </div>

                {idx < row2.length - 1 && (
                  <div className="product-part-4__snake-arrow-h" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* ── 3. BOTTOM QUALITY STATS / FEATURES PANEL ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="product-part-4__stats-panel"
        >
          {/* Stat 1 */}
          <div className="product-part-4__stat-col">
            <div className="product-part-4__stat-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <div className="product-part-4__stat-texts">
              <span className="product-part-4__stat-highlight">100%</span>
              <span className="product-part-4__stat-bold">Lab Tested Quality</span>
              <p className="product-part-4__stat-desc">Every batch tested for slump, workability, and cube compressive strength.</p>
            </div>
          </div>

          <div className="product-part-4__stat-sep" aria-hidden="true" />

          {/* Stat 2 */}
          <div className="product-part-4__stat-col">
            <div className="product-part-4__stat-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div className="product-part-4__stat-texts">
              <span className="product-part-4__stat-highlight">ISO &amp; IS</span>
              <span className="product-part-4__stat-bold">Certified Compliance</span>
              <p className="product-part-4__stat-desc">Manufactured strictly conforming to IS 456 &amp; IS 4926 national standards.</p>
            </div>
          </div>

          <div className="product-part-4__stat-sep" aria-hidden="true" />

          {/* Stat 3 */}
          <div className="product-part-4__stat-col">
            <div className="product-part-4__stat-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="14" width="20" height="8" rx="2" />
                <path d="M6 14V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8" />
                <line x1="12" y1="4" x2="12" y2="14" />
              </svg>
            </div>
            <div className="product-part-4__stat-texts">
              <span className="product-part-4__stat-highlight">Automated</span>
              <span className="product-part-4__stat-bold">Precision Batching</span>
              <p className="product-part-4__stat-desc">Microprocessor-controlled weighing ensuring 100% consistent water-cement ratio.</p>
            </div>
          </div>

          <div className="product-part-4__stat-sep" aria-hidden="true" />

          {/* Stat 4 */}
          <div className="product-part-4__stat-col">
            <div className="product-part-4__stat-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div className="product-part-4__stat-texts">
              <span className="product-part-4__stat-highlight">Transit GPS</span>
              <span className="product-part-4__stat-bold">Timed Site Delivery</span>
              <p className="product-part-4__stat-desc">Live monitored fleet ensuring fresh concrete arrives within initial setting limits.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPart4;
