import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCT_IMAGES } from './product_assets';

interface ProductPart5Props {
  onNavigate?: (path: string) => void;
}

/* ── SVG Card Icons ── */
const IconBatching = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <path d="M6 14V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8" />
    <line x1="12" y1="4" x2="12" y2="14" />
    <line x1="6" y1="9" x2="18" y2="9" />
  </svg>
);

const IconTruck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const IconPump = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 12 15 15 9" />
  </svg>
);

const IconForklift = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const IconLab = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 2v7.31M14 2v7.31M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0" />
  </svg>
);

const IconGear = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const IconHeadset = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#0875D1" />
    <polyline points="7 12.5 10.5 16 17 9" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ── Equipment Card Data ── */
const EQUIPMENT_CARDS = [
  {
    title: 'RMC BATCHING PLANT',
    desc: 'State-of-the-art batching for consistent quality.',
    img: PRODUCT_IMAGES.batchingPlant,
    alt: 'Swastik Mixtures RMC batching plant',
    icon: <IconBatching />,
  },
  {
    title: 'TRANSIT MIXERS',
    desc: 'Modern fleet for safe and timely concrete delivery.',
    img: PRODUCT_IMAGES.transitMixerCloseup,
    alt: 'Swastik Mixtures transit mixer trucks',
    icon: <IconTruck />,
  },
  {
    title: 'CONCRETE PUMPS',
    desc: 'High-performance pumps for seamless concrete placement.',
    img: PRODUCT_IMAGES.concretePump,
    alt: 'Swastik Mixtures concrete pump truck',
    icon: <IconPump />,
  },
  {
    title: 'MATERIAL HANDLING',
    desc: 'Efficient material handling for smooth operations.',
    img: PRODUCT_IMAGES.materialHandling,
    alt: 'Swastik Mixtures material handling equipment',
    icon: <IconForklift />,
  },
  {
    title: 'QUALITY-CONTROL LAB',
    desc: 'Advanced lab testing to ensure strength and durability.',
    img: PRODUCT_IMAGES.qualityControlLab,
    alt: 'Swastik Mixtures quality control laboratory',
    icon: <IconLab />,
  },
  {
    title: 'MODERN EQUIPMENT',
    desc: 'Reliable and well-maintained equipment for every need.',
    img: PRODUCT_IMAGES.transitMixerFleet,
    alt: 'Swastik Mixtures modern equipment fleet',
    icon: <IconGear />,
  },
];

export const ProductPart5: React.FC<ProductPart5Props> = ({ onNavigate }) => {
  return (
    <section id="product-part5" className="pp5">
      {/* Subtle decorative background */}
      <div className="pp5__bg-dots" aria-hidden="true" />
      <div className="pp5__bg-arc" aria-hidden="true" />

      <div className="pp5__container">
        {/* ═══ MAIN TWO-COLUMN LAYOUT ═══ */}
        <div className="pp5__layout">
          {/* LEFT COLUMN: Header + Grid + Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="pp5__left"
          >
            {/* Section Header */}
            <div className="pp5__header">
              <h2 className="pp5__title">
                TECHNOLOGY &<br />
                <span className="pp5__title-blue">PRODUCTION</span>
              </h2>
              <div className="pp5__divider" />
              <p className="pp5__subtitle">
                Advanced technology, modern equipment and expert processes
                powering high-quality concrete every time.
              </p>
            </div>

            {/* 3 × 2 Equipment Grid */}
            <div className="pp5__grid">
              {EQUIPMENT_CARDS.map((card, idx) => (
                <div key={idx} className="pp5__card">
                  <div className="pp5__card-img-wrap">
                    <img
                      src={card.img}
                      alt={card.alt}
                      loading="lazy"
                      className="pp5__card-img"
                    />
                    {/* Blue circle icon at bottom-left of image */}
                    <div className="pp5__card-icon">{card.icon}</div>
                  </div>
                  <div className="pp5__card-body">
                    <h3 className="pp5__card-title">{card.title}</h3>
                    <p className="pp5__card-desc">{card.desc}</p>
                    <div className="pp5__card-arrow" aria-hidden="true">
                      <ArrowRight />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Infrastructure Button */}
            <button
              onClick={() => onNavigate && onNavigate('/about')}
              className="pp5__infra-btn"
            >
              OUR INFRASTRUCTURE →
            </button>
          </motion.div>

          {/* RIGHT COLUMN: Consultation Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="pp5__right"
          >
            <div className="pp5__consult">
              {/* Subtle decorative inside the card */}
              <div className="pp5__consult-dots" aria-hidden="true" />

              <div className="pp5__consult-content">
                <h3 className="pp5__consult-title">
                  <span className="pp5__consult-title-navy">NOT SURE WHICH</span>
                  <br />
                  <span className="pp5__consult-title-blue">MIX YOU NEED?</span>
                </h3>
                <div className="pp5__consult-line" />
                <p className="pp5__consult-desc">
                  Share your project requirement and our experts
                  will help you choose the right concrete solution.
                </p>

                {/* Checklist */}
                <div className="pp5__checklist">
                  {['Expert Guidance', 'Right Mix Selection', 'Timely Delivery'].map((item) => (
                    <div key={item} className="pp5__check-item">
                      <IconCheck />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate && onNavigate('/contact?form=true')}
                  className="pp5__consult-btn"
                >
                  REQUEST A QUOTE →
                </button>
              </div>

              {/* Transit Mixer Image */}
              <div className="pp5__consult-truck">
                <img
                  src={PRODUCT_IMAGES.transitMixerCloseup}
                  alt="Swastik Mixtures transit mixer truck"
                  loading="lazy"
                  className="pp5__consult-truck-img"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══ BOTTOM CTA BANNER ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="pp5__cta"
        >
          <div className="pp5__cta-icon-wrap">
            <IconHeadset />
          </div>
          <div className="pp5__cta-text">
            <h3 className="pp5__cta-heading">
              NOT SURE WHICH MIX YOU NEED?
              <br />
              <span className="pp5__cta-heading-blue">TALK TO THE SWASTIK MIXTURES TEAM.</span>
            </h3>
            <p className="pp5__cta-desc">
              We're here to help you find the right solution for your project.
            </p>
          </div>
          <button
            onClick={() => onNavigate && onNavigate('/contact?form=true')}
            className="pp5__cta-btn"
          >
            REQUEST A QUOTE →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

