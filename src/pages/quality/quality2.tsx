import React from 'react';
import { motion } from 'framer-motion';

export const Quality2: React.FC = () => {
  const PROCESS_STEPS = [
    {
      num: '01',
      title: 'RAW MATERIAL INSPECTION',
      desc: 'Careful checking of all incoming materials.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    },
    {
      num: '02',
      title: 'MIX DESIGN CONTROL',
      desc: 'Engineered mix designs for strength and durability.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
          <path d="M10 2v7.5M14 2v7.5M8.5 2h7M14 9.5a5 5 0 1 1-4 0v-7.5" />
        </svg>
      )
    },
    {
      num: '03',
      title: 'BATCHING PROCESS',
      desc: 'Automated batching for accurate proportions.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    },
    {
      num: '04',
      title: 'SLUMP TESTING',
      desc: 'Workability test conducted for every batch.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    },
    {
      num: '05',
      title: 'SAMPLE COLLECTION',
      desc: 'Samples collected as per standard procedures.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>
      )
    },
    {
      num: '06',
      title: 'STRENGTH TESTING',
      desc: 'Regular compressive strength tests at our lab.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M8 12h8M8 16h8" />
        </svg>
      )
    },
    {
      num: '07',
      title: 'BATCH CONSISTENCY',
      desc: 'Ensuring uniformity, reliability and repeatability.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    },
    {
      num: '08',
      title: 'SITE SUPPORT',
      desc: 'Technical support and guidance at your site.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      )
    }
  ];

  return (
    <section id="quality-part2" className="quality-snap-part quality-process-part">
      <div className="quality-container quality-process-container">
        {/* HEADER */}
        <div className="quality-section-header text-center">
          <span className="quality-eyebrow block">OUR QUALITY PROCESS</span>
          <h2 className="quality-section-title">A STRICT 8-STEP QUALITY ASSURANCE PROCESS</h2>
          <div className="quality-title-bar margin-auto" />
        </div>

        {/* 8 CONNECTED CARDS TRACK */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="quality-process-grid-wrap"
        >
          <div className="quality-process-grid">
            {PROCESS_STEPS.map((step, idx) => (
              <React.Fragment key={step.num}>
                <div className="quality-process-card">
                  <div className="quality-process-circle">{step.icon}</div>
                  <span className="quality-process-num">{step.num}</span>
                  <h3 className="quality-process-card-title">{step.title}</h3>
                  <p className="quality-process-card-desc">{step.desc}</p>
                </div>

                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="quality-process-arrow" aria-hidden="true">
                    <svg width="18" height="12" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2" strokeDasharray="3 3">
                      <line x1="1" y1="12" x2="20" y2="12" />
                      <polyline points="15 7 20 12 15 17" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
