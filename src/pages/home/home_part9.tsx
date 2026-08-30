import React from 'react';
import { motion } from 'framer-motion';

const WORKFLOW_STEPS = [
  { step: '01', title: 'Raw Material Checks', desc: 'Testing cement, aggregates, and water at source.' },
  { step: '02', title: 'Mix Design Control', desc: 'Computerized batching recipe control.' },
  { step: '03', title: 'Concrete Testing', desc: 'Temperature and sampling during batching.' },
  { step: '04', title: 'Slump Testing', desc: 'Ensuring consistency & workability on-site.' },
  { step: '05', title: 'Strength Testing', desc: 'Cube testing at 7 and 28 days in QA lab.' },
  { step: '06', title: 'Batch Consistency', desc: 'Automated sensor calibration checks.' },
  { step: '07', title: 'Quality Monitoring', desc: 'Real-time performance audit reports.' },
  { step: '08', title: 'Site Support', desc: 'Dedicated staff for pumping & placement.' }
];

export const HomePart9: React.FC = () => {
  return (
    <section id="home-part-9" className="process-workflow-section home-snap-part">
      <div className="process-workflow-container">
        <div className="process-workflow-header text-center">
          <span className="process-workflow-eyebrow">OUR PROCESS</span>
          <h2 className="process-workflow-title">8-Step Quality Concrete Workflow</h2>
          <div className="process-workflow-title-bar margin-auto" />
          <p className="process-workflow-lead">
            From raw material testing to final site placement support, every step is rigorously controlled.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="process-workflow-grid"
        >
          {WORKFLOW_STEPS.map((s, idx) => (
            <div key={idx} className="process-workflow-card">
              <span className="process-step-badge">STEP {s.step}</span>
              <h3 className="process-workflow-card-title">{s.title}</h3>
              <p className="process-workflow-card-desc">{s.desc}</p>
              {idx < WORKFLOW_STEPS.length - 1 && (
                <div className="process-arrow-indicator" aria-hidden="true">→</div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomePart9;
