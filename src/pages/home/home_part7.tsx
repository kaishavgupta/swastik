import React from 'react';
import { motion } from 'framer-motion';

const FLEET_CARDS = [
  {
    title: 'Transit Mixers',
    desc: 'Large capacity mixers for continuous agitation and temperature-controlled transport.',
    image: '/02_Transit_Mixers.svg',
    count: 'Dedicated Fleet'
  },
  {
    title: 'Concrete Pumps',
    desc: 'Long-reach boom and line pumps for vertical high-rise placement.',
    image: '/03_Concrete_Pumps.svg',
    count: 'High-Reach Boom'
  },
  {
    title: 'JCB & Material Handling',
    desc: 'Heavy loaders and excavators for efficient raw material management.',
    image: '/04_Material_Handling.svg',
    count: 'Heavy Machinery'
  },
  {
    title: 'RMC Plant & Other Equipment',
    desc: 'Fully automated batching towers with digital weighing sensors.',
    image: '/08_Swastik_RMC_Plant.svg',
    count: 'Automated Towers'
  }
];

export const HomePart7: React.FC = () => {
  return (
    <section id="home-part-7" className="equipment-fleet-section home-snap-part">
      <div className="equipment-fleet-container">
        <div className="equipment-fleet-header">
          <span className="equipment-fleet-eyebrow">EQUIPMENT & FLEET</span>
          <h2 className="equipment-fleet-title">High-Capacity Fleet & Pumping Machinery</h2>
          <div className="equipment-fleet-title-bar" />
          <p className="equipment-fleet-lead">
            Our state-of-the-art logistics and heavy equipment ensure uninterrupted concrete supply across all major construction sites in Lucknow.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="equipment-fleet-grid"
        >
          {FLEET_CARDS.map((card, idx) => (
            <div key={idx} className="equipment-fleet-card">
              <div className="equipment-fleet-img-wrap">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="equipment-fleet-img"
                />
                <span className="equipment-fleet-count">{card.count}</span>
              </div>
              <div className="equipment-fleet-card-body">
                <h3 className="equipment-fleet-card-title">{card.title}</h3>
                <p className="equipment-fleet-card-desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomePart7;
