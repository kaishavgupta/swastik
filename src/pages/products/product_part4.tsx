import React from 'react';
import { motion } from 'framer-motion';

export const ProductPart4: React.FC = () => {
  const STEPS = [
    {
      title: 'Raw Material',
      sub: 'Checks',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    },
    {
      title: 'Mix Design',
      sub: 'Control',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
          <path d="M10 2v7.5M14 2v7.5M8.5 2h7M14 9.5a5 5 0 1 1-4 0v-7.5" />
        </svg>
      )
    },
    {
      title: 'Concrete',
      sub: 'Testing',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
          <rect x="6" y="3" width="12" height="18" rx="2" />
          <line x1="6" y1="9" x2="18" y2="9" />
          <line x1="6" y1="15" x2="18" y2="15" />
        </svg>
      )
    },
    {
      title: 'Slump',
      sub: 'Testing',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
          <path d="M5 21h14L15 3H9L5 21z" />
        </svg>
      )
    },
    {
      title: 'Strength',
      sub: 'Testing',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: 'Batch',
      sub: 'Consistency',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      )
    },
    {
      title: 'Quality',
      sub: 'Monitoring',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Site',
      sub: 'Support',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>
      )
    }
  ];

  return (
    <section id="product-part4" className="product-snap-part product-quality-part">
      <div className="product-container product-quality-container">
        {/* HEADER */}
        <div className="product-section-header text-center">
          <h2 className="product-section-title text-white">QUALITY BEHIND EVERY MIX</h2>
          <div className="product-title-bar margin-auto bg-blue" />
        </div>

        {/* 8-STEP HORIZONTAL PROCESS WORKFLOW */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="product-quality-steps-wrap"
        >
          <div className="product-quality-steps-flex">
            {STEPS.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="product-quality-step-item">
                  <div className="product-quality-circle">
                    {step.icon}
                  </div>
                  <div className="product-quality-label">
                    <span>{step.title}</span>
                    <span>{step.sub}</span>
                  </div>
                </div>

                {idx < STEPS.length - 1 && (
                  <div className="product-quality-arrow" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6" />
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
