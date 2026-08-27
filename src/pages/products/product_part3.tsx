import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCT_IMAGES } from './product_assets';

interface ProductPart3Props {
  onNavigate?: (path: string) => void;
}

export const ProductPart3: React.FC<ProductPart3Props> = ({ onNavigate }) => {
  const SPECIALIZED = [
    {
      num: '01',
      title: 'M40+ SELF-COMPACTING CONCRETE (SCC)',
      desc: 'Flows and consolidates under its own weight without vibration.',
      image: PRODUCT_IMAGES.concretePouring,
      altText: 'Swastik Mixtures self-compacting concrete SCC',
      link: '/contact?solution=scc'
    },
    {
      num: '02',
      title: 'M30–M45 HIGH STRENGTH CONCRETE',
      desc: 'Formulated for demanding structural performance requirements.',
      image: PRODUCT_IMAGES.constructionSite,
      altText: 'Swastik Mixtures high strength concrete building project',
      link: '/contact?solution=high-strength'
    },
    {
      num: '03',
      title: 'WATERPROOF CONCRETE',
      desc: 'Engineered for reduced permeability in moisture-exposed structures.',
      image: PRODUCT_IMAGES.waterproofConcrete,
      altText: 'Swastik Mixtures waterproof concrete channel',
      link: '/contact?solution=waterproof'
    },
    {
      num: '04',
      title: 'FIBER REINFORCED CONCRETE (FRC)',
      desc: 'Enhanced with fibers for improved crack resistance and durability.',
      image: PRODUCT_IMAGES.fiberConcrete,
      altText: 'Swastik Mixtures fiber reinforced concrete FRC',
      link: '/contact?solution=frc'
    }
  ];

  return (
    <section id="product-part3" className="product-snap-part product-specialized-part">
      <div className="product-container product-specialized-container">
        {/* HEADER */}
        <div className="product-section-header text-center">
          <h2 className="product-section-title">SPECIALIZED CONCRETE SOLUTIONS</h2>
          <div className="product-title-bar margin-auto" />
        </div>

        {/* 4 CARDS GRID */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="product-specialized-grid"
        >
          {SPECIALIZED.map((item, idx) => (
            <div key={idx} className="product-spec-card">
              <div className="product-spec-img-wrap">
                <img
                  src={item.image}
                  alt={item.altText}
                  loading="lazy"
                  width="320"
                  height="160"
                  className="product-spec-img"
                />
                <div className="product-spec-num-badge">{item.num}</div>
              </div>

              <div className="product-spec-body">
                <h3 className="product-spec-title">{item.title}</h3>
                <p className="product-spec-desc">{item.desc}</p>
                <button
                  onClick={() => onNavigate && onNavigate(item.link)}
                  className="product-spec-cta"
                >
                  EXPLORE →
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
