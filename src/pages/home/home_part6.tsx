import React from 'react';
import { motion } from 'framer-motion';

const INFRASTRUCTURE_DATA = [
  {
    title: 'Automated RMC Batching Plant',
    desc: 'Fully computer-controlled batching towers ensuring precise recipe dosing and zero material variance.',
    image: '/01_RMC_Batching_Plant.svg',
    tag: 'PRODUCTION'
  },
  {
    title: 'Transit Mixer Fleet',
    desc: 'High-capacity transit mixers equipped with GPS tracking for temperature control and timely site delivery.',
    image: '/01_transit_mixer_fleet.svg',
    tag: 'LOGISTICS'
  },
  {
    title: 'Concrete Boom Pumps',
    desc: 'Long-reach concrete boom and line pumps capable of high-rise vertical placement and bridge deck pours.',
    image: '/04_concrete_pump.svg',
    tag: 'PLACEMENT'
  },
  {
    title: 'Automated Material Handling',
    desc: 'High-capacity aggregate bins and cement silos with digital moisture sensors and pneumatic feeding.',
    image: '/03_material_handling.svg',
    tag: 'RAW MATERIALS'
  },
  {
    title: 'Quality Control Laboratory',
    desc: 'NABL-standard testing facility with digital compression testing machines, slump cones, and sieve shakers.',
    image: '/02_quality_control_lab.svg',
    tag: 'TESTING & QA'
  },
  {
    title: 'Modern Equipment & Power Backup',
    desc: 'Heavy duty diesel generators and automated washing systems ensuring 24/7 continuous plant operations.',
    image: '/06_Modern_Equipment.svg',
    tag: 'EQUIPMENT'
  }
];

export const HomePart6: React.FC = () => {
  return (
    <section id="home-part-6" className="tech-infra-section home-snap-part">
      <div className="tech-infra-container">
        <div className="tech-infra-header text-center">
          <span className="tech-infra-eyebrow">TECHNOLOGY & INFRASTRUCTURE</span>
          <h2 className="tech-infra-title">Modern Plant & Advanced Batching Technology</h2>
          <div className="tech-infra-title-bar margin-auto" />
          <p className="tech-infra-lead">
            State-of-the-art infrastructure engineered to deliver high-performance, consistent Ready Mix Concrete across Lucknow.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="tech-infra-grid"
        >
          {INFRASTRUCTURE_DATA.map((item, idx) => (
            <div key={idx} className="tech-infra-card">
              <div className="tech-infra-img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="tech-infra-img"
                />
                <span className="tech-infra-tag">{item.tag}</span>
              </div>
              <div className="tech-infra-body">
                <h3 className="tech-infra-card-title">{item.title}</h3>
                <p className="tech-infra-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomePart6;
