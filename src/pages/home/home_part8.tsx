import React from 'react';
import { motion } from 'framer-motion';

const APPLICATIONS_DATA = [
  {
    title: 'High-Rise Buildings',
    desc: 'High strength, durable concrete for multi-story residential and commercial towers.',
    image: '/high-rise-buildings.svg'
  },
  {
    title: 'Roads & Highways',
    desc: 'Heavy-duty pavement quality concrete for durable transit corridors.',
    image: '/roads.svg'
  },
  {
    title: 'Bridges & Flyovers',
    desc: 'Engineered for high structural load, vibration resistance, and longevity.',
    image: '/bridges.svg'
  },
  {
    title: 'Commercial Structures',
    desc: 'Consistent mix designs for shopping malls, IT parks, and corporate hubs.',
    image: '/commercial-structures.svg'
  },
  {
    title: 'Infrastructure Projects',
    desc: 'Specialized mixes for drainage, utility tunnels, and urban development.',
    image: '/infrastructure-projects.svg'
  },
  {
    title: 'Industrial Construction',
    desc: 'Abrasion-resistant floor mixes for warehouses, factories, and plants.',
    image: '/industrial-construction.svg'
  }
];

export const HomePart8: React.FC = () => {
  return (
    <section id="home-part-8" className="concrete-builds-section home-snap-part">
      <div className="concrete-builds-container">
        <div className="concrete-builds-header text-center">
          <span className="concrete-builds-eyebrow">APPLICATIONS</span>
          <h2 className="concrete-builds-title">Where Our Concrete Builds</h2>
          <div className="concrete-builds-title-bar margin-auto" />
          <p className="concrete-builds-lead">
            Delivering high-performance concrete solutions across critical infrastructure and building sectors.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="concrete-builds-grid"
        >
          {APPLICATIONS_DATA.map((app, idx) => (
            <div key={idx} className="concrete-builds-card">
              <div className="concrete-builds-img-wrap">
                <img
                  src={app.image}
                  alt={app.title}
                  loading="lazy"
                  className="concrete-builds-img"
                />
              </div>
              <div className="concrete-builds-body">
                <h3 className="concrete-builds-card-title">{app.title}</h3>
                <p className="concrete-builds-card-desc">{app.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomePart8;
