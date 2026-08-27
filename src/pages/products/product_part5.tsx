import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCT_IMAGES } from './product_assets';

interface ProductPart5Props {
  onNavigate?: (path: string) => void;
}

export const ProductPart5: React.FC<ProductPart5Props> = ({ onNavigate }) => {
  const INFRA_GRID = [
    { title: 'RMC BATCHING PLANT', img: PRODUCT_IMAGES.batchingPlant, alt: 'Swastik Mixtures RMC batching plant' },
    { title: 'TRANSIT MIXERS', img: PRODUCT_IMAGES.transitMixerCloseup, alt: 'Swastik Mixtures transit mixer closeup' },
    { title: 'CONCRETE PUMPS', img: PRODUCT_IMAGES.concretePump, alt: 'Swastik Mixtures concrete pump' },
    { title: 'MATERIAL HANDLING', img: PRODUCT_IMAGES.materialHandling, alt: 'Swastik Mixtures material handling equipment' },
    { title: 'QUALITY-CONTROL LAB', img: PRODUCT_IMAGES.qualityControlLab, alt: 'Swastik Mixtures quality control laboratory' },
    { title: 'MODERN EQUIPMENT', img: PRODUCT_IMAGES.transitMixerFleet, alt: 'Swastik Mixtures transit mixer fleet' },
  ];

  return (
    <section id="product-part5" className="product-snap-part product-tech-part">
      <div className="product-container product-tech-container">
        {/* TOP HALF: TECHNOLOGY & PRODUCTION + ENQUIRY PANEL */}
        <div className="product-tech-layout">
          {/* LEFT: 2x3 Grid + Infrastructure CTA */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="product-tech-left-col"
          >
            <div className="product-section-header">
              <h2 className="product-section-title">TECHNOLOGY & PRODUCTION</h2>
              <div className="product-title-bar" />
            </div>

            <div className="product-tech-grid-2x3">
              {INFRA_GRID.map((item, idx) => (
                <div key={idx} className="product-infra-card">
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    width="240"
                    height="180"
                    className="product-infra-img"
                  />
                  <div className="product-infra-label">{item.title}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate && onNavigate('/about')}
              className="btn-secondary product-infra-btn"
            >
              OUR INFRASTRUCTURE →
            </button>
          </motion.div>

          {/* RIGHT: Enquiry Panel & Mixer Truck Closeup Visual */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="product-enquiry-right-col"
          >
            <div className="product-enquiry-card">
              <div className="product-enquiry-content">
                <h3 className="product-enquiry-title">
                  NOT SURE WHICH MIX<br />YOU NEED?
                </h3>
                <p className="product-enquiry-desc">
                  Share your project requirement and our experts will help you choose
                  the right concrete solution.
                </p>

                <div className="product-enquiry-checklist">
                  <div className="product-enquiry-item">
                    <span className="product-enquiry-check">✓</span>
                    <span>Expert Guidance</span>
                  </div>
                  <div className="product-enquiry-item">
                    <span className="product-enquiry-check">✓</span>
                    <span>Right Mix Selection</span>
                  </div>
                  <div className="product-enquiry-item">
                    <span className="product-enquiry-check">✓</span>
                    <span>Timely Delivery</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate && onNavigate('/contact')}
                  className="btn-primary product-enquiry-btn"
                >
                  REQUEST A QUOTE →
                </button>
              </div>

              {/* Transit Mixer Closeup SVG Visual */}
              <div className="product-enquiry-truck-wrap">
                <img
                  src={PRODUCT_IMAGES.transitMixerCloseup}
                  alt="Swastik Mixtures transit mixer truck closeup"
                  loading="lazy"
                  width="400"
                  height="160"
                  className="product-enquiry-truck-img"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM HALF: FINAL CALL TO ACTION BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="product-final-cta-banner"
        >
          <div className="product-final-cta-text">
            <h3 className="product-final-cta-heading">
              NOT SURE WHICH MIX YOU NEED? TALK TO THE SWASTIK MIXTURES TEAM.
            </h3>
          </div>
          <button
            onClick={() => onNavigate && onNavigate('/contact')}
            className="btn-primary product-final-cta-btn"
          >
            REQUEST A QUOTE →
          </button>
        </motion.div>
      </div>
    </section>
  );
};
