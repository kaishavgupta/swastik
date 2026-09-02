import React from 'react';
import { motion } from 'framer-motion';

const WORKFLOW_STEPS = [
  { step: '01', title: 'Raw Material Checks', desc: 'Testing cement, aggregates, and water at source.', icon: 'shield' },
  { step: '02', title: 'Mix Design Control', desc: 'Computerized batching recipe control.', icon: 'sliders' },
  { step: '03', title: 'Concrete Testing', desc: 'Temperature and sampling during batching.', icon: 'flask' },
  { step: '04', title: 'Slump Testing', desc: 'Ensuring consistency & workability on-site.', icon: 'slump' },
  { step: '05', title: 'Strength Testing', desc: 'Cube testing at 7 and 28 days in QA lab.', icon: 'test' },
  { step: '06', title: 'Batch Consistency', desc: 'Automated sensor calibration checks.', icon: 'refresh' },
  { step: '07', title: 'Quality Monitoring', desc: 'Real-time performance audit reports.', icon: 'search' },
  { step: '08', title: 'Site Support', desc: 'Dedicated staff for pumping & placement.', icon: 'headset' }
];

const WorkflowIcon: React.FC<{ type: string }> = ({ type }) => {
  const common = {
    width: 30, height: 30, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 1.8,
    strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
    'aria-hidden': true
  };

  switch (type) {
    case 'shield':
      return <svg {...common}><path d="M12 3l7 3v5c0 4.7-3 8.3-7 10-4-1.7-7-5.3-7-10V6l7-3z"/><path d="m9 12 2 2 4-4"/></svg>;
    case 'sliders':
      return <svg {...common}><path d="M4 6h16M4 12h16M4 18h16"/><circle cx="8" cy="6" r="2"/><circle cx="15" cy="12" r="2"/><circle cx="10" cy="18" r="2"/></svg>;
    case 'flask':
      return <svg {...common}><path d="M9 3h6M10 3v6l-4.5 8.2A2 2 0 0 0 7.2 20h9.6a2 2 0 0 0 1.7-2.8L14 9V3"/><path d="M8 15h8"/></svg>;
    case 'slump':
      return <svg {...common}><path d="M7 4h10l-1.2 16H8.2L7 4z"/><path d="M8.5 8h7M8.8 12h6.4M9.2 16h5.6"/></svg>;
    case 'test':
      return <svg {...common}><path d="M7 4h10v16H7z"/><path d="M9 7h6M9 11h6M9 15h3"/><path d="M5 20h14"/></svg>;
    case 'refresh':
      return <svg {...common}><path d="M20 11a8 8 0 0 0-14.7-4L4 9"/><path d="M4 5v4h4"/><path d="M4 13a8 8 0 0 0 14.7 4L20 15"/><path d="M20 19v-4h-4"/></svg>;
    case 'search':
      return <svg {...common}><circle cx="10.8" cy="10.8" r="6.3"/><path d="m16 16 4 4M8.5 10.8l1.6 1.6 3.2-3.2"/></svg>;
    default:
      return <svg {...common}><path d="M4 5h16v11H4z"/><path d="M8 20h8M12 16v4"/><path d="M8 9h8M8 12h5"/></svg>;
  }
};

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

              <div className="process-workflow-icon" aria-hidden="true">
                <WorkflowIcon type={s.icon} />
              </div>

              <h3 className="process-workflow-card-title">{s.title}</h3>

              <div className="process-workflow-card-divider" aria-hidden="true">
                <span className="process-divider-light" />
              </div>

              <p className="process-workflow-card-desc">{s.desc}</p>

              {idx % 4 !== 3 && idx < WORKFLOW_STEPS.length - 1 && (
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
