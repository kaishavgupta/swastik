import React from 'react';

const PROCESS_STEPS_DATA = [
  {
    step: 'STEP 01',
    title: 'Raw Material Check',
    desc: 'Rigorous testing of cement, aggregates, sand, and water at every source.',
    iconKey: 'Verify'
  },
  {
    step: 'STEP 02',
    title: 'Mix Design Control',
    desc: 'Advanced computerized batching controlled to exact recipe requirements.',
    iconKey: 'Sliders'
  },
  {
    step: 'STEP 03',
    title: 'Concrete Testing',
    desc: 'Regular sampling and temperature checks during production and mix stages.',
    iconKey: 'Flask'
  },
  {
    step: 'STEP 04',
    title: 'Slump Testing',
    desc: 'Ensuring consistency, flowability, and workability properties on-site.',
    iconKey: 'Slump'
  },
  {
    step: 'STEP 05',
    title: 'Strength Testing',
    desc: 'Compression testing of cubes at 7 and 28 days in our quality control labs.',
    iconKey: 'Strength'
  },
  {
    step: 'STEP 06',
    title: 'Batch Consistency',
    desc: 'Continuous automatic calibration checks on batching sensors.',
    iconKey: 'Sync'
  },
  {
    step: 'STEP 07',
    title: 'Quality Monitoring',
    desc: 'Real-time surveys and performance audit reports.',
    iconKey: 'Monitor'
  },
  {
    step: 'STEP 08',
    title: 'Site Support',
    desc: 'Dedicated technical staff on-site to assist with pumping and placement.',
    iconKey: 'Support'
  }
];

const BOTTOM_STATS_DATA = [
  { iconKey: 'Verify', value: '100%', label: 'QUALITY ASSURED' },
  { iconKey: 'Award', value: '18+', label: 'YEARS OF EXPERIENCE' },
  { iconKey: 'Building', value: '1000+', label: 'PROJECTS DELIVERED' },
  { iconKey: 'Users', value: '500+', label: 'SATISFIED CLIENTS' }
];

const ProcessStepIcon = ({ iconKey }: { iconKey: string }) => {
  const props = { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "#0875D1", strokeWidth: "2", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (iconKey) {
    case 'Verify':
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 11 2 2 4-4" />
        </svg>
      );
    case 'Sliders':
      return (
        <svg {...props}>
          <line x1="6" y1="3" x2="6" y2="21" />
          <circle cx="6" cy="15" r="2.5" fill="#EEF6FF" stroke="#0875D1" strokeWidth="2" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <circle cx="12" cy="9" r="2.5" fill="#EEF6FF" stroke="#0875D1" strokeWidth="2" />
          <line x1="18" y1="3" x2="18" y2="21" />
          <circle cx="18" cy="14" r="2.5" fill="#EEF6FF" stroke="#0875D1" strokeWidth="2" />
        </svg>
      );
    case 'Flask':
      return (
        <svg {...props}>
          <path d="M10 2h4M10 2v6L5.5 17.5a2 2 0 0 0 1.8 2.5h9.4a2 2 0 0 0 1.8-2.5L14 8V2" />
          <path d="M7.8 15h8.4" />
        </svg>
      );
    case 'Slump':
      return (
        <svg {...props}>
          <path d="M6 3h12l-2 15H8L6 3z" />
          <path d="M7 8h10" />
          <path d="M7.5 13h9" />
          <path d="M12 3v15" />
        </svg>
      );
    case 'Strength':
      return (
        <svg {...props}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="16" x2="20" y2="16" />
          <rect x="9" y="10" width="6" height="4" rx="1" fill="#EEF6FF" stroke="#0875D1" strokeWidth="2" />
          <path d="M12 5v3" />
        </svg>
      );
    case 'Sync':
      return (
        <svg {...props}>
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l.73-.73" />
        </svg>
      );
    case 'Monitor':
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="6" />
          <path d="m21 21-4.3-4.3" />
          <path d="m9 11 1.5 1.5 2.5-2.5" />
        </svg>
      );
    case 'Support':
      return (
        <svg {...props}>
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      );
    default:
      return null;
  }
};

const StatsBarIcon = ({ iconKey }: { iconKey: string }) => {
  const props = { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#0875D1", strokeWidth: "2", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (iconKey) {
    case 'Verify':
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 11 2 2 4-4" />
        </svg>
      );
    case 'Award':
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      );
    case 'Building':
      return (
        <svg {...props}>
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="9" y1="22" x2="9" y2="16" />
          <line x1="9" y1="16" x2="15" y2="16" />
          <line x1="15" y1="16" x2="15" y2="22" />
        </svg>
      );
    case 'Users':
      return (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M21 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      );
    default:
      return null;
  }
};

export const HomePart5: React.FC = () => {
  return (
    <section id="home-part-5" className="quality-section home-snap-part">
      <div className="quality-bg-pattern-left" aria-hidden="true">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <circle cx="50" cy="50" r="100" stroke="#0875D1" strokeOpacity="0.08" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="140" stroke="#0875D1" strokeOpacity="0.08" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="180" stroke="#0875D1" strokeOpacity="0.08" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="quality-bg-pattern-right" aria-hidden="true">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
          <circle cx="350" cy="350" r="120" stroke="#0875D1" strokeOpacity="0.08" strokeWidth="1.5" />
          <circle cx="350" cy="350" r="160" stroke="#0875D1" strokeOpacity="0.08" strokeWidth="1.5" />
          <circle cx="350" cy="350" r="200" stroke="#0875D1" strokeOpacity="0.08" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="quality-container">
        <div className="quality-header">
          <span className="quality-eyebrow">OUR PROCESS</span>
          <h2 className="quality-heading">Quality That Builds Confidence</h2>
          <div className="quality-header-line" aria-hidden="true" />
          <p className="quality-paragraph">
            From the finest raw materials to timely delivery, every step in our process is designed to ensure superior strength, durability, and complete reliability.
          </p>
        </div>

        <div className="quality-grid">
          {PROCESS_STEPS_DATA.map((step, i) => (
            <div key={i} className="quality-card">
              <div className="quality-card-icon-wrap">
                <ProcessStepIcon iconKey={step.iconKey} />
              </div>
              <span className="quality-card-step">{step.step}</span>
              <h3 className="quality-card-title">{step.title}</h3>
              <div className="quality-card-line" aria-hidden="true" />
              <p className="quality-card-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="quality-stats-bar">
          {BOTTOM_STATS_DATA.map((stat, i) => (
            <React.Fragment key={i}>
              <div className="quality-stat-block">
                <div className="quality-stat-icon">
                  <StatsBarIcon iconKey={stat.iconKey} />
                </div>
                <div className="quality-stat-text">
                  <span className="quality-stat-value">{stat.value}</span>
                  <span className="quality-stat-label">{stat.label}</span>
                </div>
              </div>
              {i < BOTTOM_STATS_DATA.length - 1 && (
                <div className="quality-stat-divider" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="quality-wave-container" aria-hidden="true">
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="quality-wave-svg">
          <path d="M0,80 C240,20 480,140 720,80 C960,20 1200,130 1440,70 L1440,160 L0,160 Z" fill="#071D41" />
          <path d="M0,100 C200,48 440,150 720,95 C960,48 1220,140 1440,88 L1440,160 L0,160 Z" fill="#0875D1" fillOpacity="0.75" />
        </svg>
      </div>
    </section>
  );
};

export default HomePart5;
