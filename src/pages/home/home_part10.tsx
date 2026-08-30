import React from 'react';

const PROJECT_TYPES_DATA = [
  {
    title: 'High-Rise Buildings',
    desc: 'Durable concrete solutions for safe, strong and sustainable vertical living.',
    image: '/high-rise-buildings.svg',
    iconKey: 'HighRise'
  },
  {
    title: 'Roads & Highways',
    desc: 'Engineered for strength, smoothness and long-term performance.',
    image: '/roads.svg',
    iconKey: 'Roads'
  },
  {
    title: 'Bridges',
    desc: 'Built to endure heavy loads and withstand every condition.',
    image: '/bridges.svg',
    iconKey: 'Bridges'
  },
  {
    title: 'Commercial Structures',
    desc: 'Reliable concrete for offices, malls and commercial complexes.',
    image: '/commercial-structures.svg',
    iconKey: 'Commercial'
  },
  {
    title: 'Infrastructure Projects',
    desc: 'Supporting progress with robust concrete infrastructure.',
    image: '/infrastructure-projects.svg',
    iconKey: 'Infrastructure'
  },
  {
    title: 'Industrial Construction',
    desc: 'High-performance concrete for industrial strength and efficiency.',
    image: '/industrial-construction.svg',
    iconKey: 'Industrial'
  }
];

const ProjectCardIcon = ({ iconKey }: { iconKey: string }) => {
  const props = { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "#0875D1", strokeWidth: "2.2", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (iconKey) {
    case 'HighRise':
      return (
        <svg {...props}>
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="9" y1="22" x2="9" y2="16" />
          <line x1="9" y1="16" x2="15" y2="16" />
          <line x1="15" y1="16" x2="15" y2="22" />
        </svg>
      );
    case 'Roads':
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="12" y1="3" x2="12" y2="21" />
        </svg>
      );
    case 'Bridges':
      return (
        <svg {...props}>
          <path d="M3 20c4-4 14-4 18 0" />
          <path d="M3 12c4-4 14-4 18 0" />
        </svg>
      );
    case 'Commercial':
      return (
        <svg {...props}>
          <path d="M3 21h18" />
          <path d="M5 21V10h14v11" />
        </svg>
      );
    case 'Infrastructure':
      return (
        <svg {...props}>
          <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h16Z" />
        </svg>
      );
    case 'Industrial':
      return (
        <svg {...props}>
          <path d="M22 21H2V3l7 4V3l7 4V3l6 4v14Z" />
        </svg>
      );
    default:
      return null;
  }
};

export const HomePart10: React.FC = () => {
  return (
    <section id="home-part-10" className="projects-types-section home-snap-part">
      <div className="projects-types-bg-lines" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0875D1" strokeOpacity="0.03" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
        </svg>
      </div>

      <div className="projects-types-container">
        <div className="projects-types-header">
          <span className="projects-types-eyebrow">PROJECT TYPES</span>
          <h2 className="projects-types-heading">Where Our Concrete Builds</h2>
          <p className="projects-types-supporting">
            Strong foundations for every structure. Built with precision, built to last.
          </p>
        </div>

        <div className="projects-types-grid">
          {PROJECT_TYPES_DATA.map((proj, i) => (
            <div key={i} className="project-type-card">
              <div className="project-type-card-image-wrap">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="project-type-card-image"
                  loading="lazy"
                />
              </div>

              <div className="project-type-card-body">
                <div className="project-type-card-left">
                  <div className="project-type-card-icon-circle">
                    <ProjectCardIcon iconKey={proj.iconKey} />
                  </div>
                  <div className="project-type-card-text">
                    <h3 className="project-type-card-title">{proj.title}</h3>
                    <p className="project-type-card-description">{proj.desc}</p>
                  </div>
                </div>

                <div className="project-type-card-circle-arrow" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePart10;
