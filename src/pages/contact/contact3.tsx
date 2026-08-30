import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact3: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 1.6));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.8));
  };

  return (
    <section id="contact-part3" className="contact-snap-part contact-find-section" aria-label="Find Us">
      {/* Background Decorative Matrix Grid */}
      <div className="contact-find-bg-dots" aria-hidden="true" />

      <div className="contact-find-container">
        {/* ── 1. SECTION HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="contact-find-header"
        >
          <span className="contact-find-eyebrow">FIND US</span>
          <h2 className="contact-find-title">
            VISIT OUR PLANT OR<br />
            CONNECT WITH <span className="contact-find-blue">OUR TEAM</span>
          </h2>
          <div className="contact-find-title-line" aria-hidden="true" />
          <p className="contact-find-desc">
            We're here to help with your concrete needs. Visit our plant or reach out to our team for any enquiries.
          </p>
        </motion.div>

        {/* ── 2. MAP AREA CONTAINER ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="contact-find-map-box"
        >
          {/* Map View Frame / Vector Road Network & Geography */}
          <div className="contact-find-map-viewport">
            {/* Styled Map Background Canvas */}
            <div
              className="contact-find-map-canvas"
              style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.3s ease-out' }}
            >
              {/* Detailed Road & River Vector Map of Lucknow */}
              <svg
                viewBox="0 0 1200 650"
                className="contact-find-map-svg"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
              >
                {/* Base Land Fill */}
                <rect width="1200" height="650" fill="#E8ECE9" />

                {/* Parks and Green Areas */}
                <path d="M 680,180 Q 750,220 820,180 T 960,240 L 980,380 Q 880,360 820,400 Z" fill="#D4E8D1" opacity="0.8" />
                <path d="M 420,380 Q 520,340 600,420 T 700,560 L 520,620 Z" fill="#D4E8D1" opacity="0.75" />
                <path d="M 720,460 Q 820,440 920,480 T 1060,540 L 980,640 L 740,640 Z" fill="#D4E8D1" opacity="0.85" />
                <path d="M 120,420 Q 240,400 300,480 L 220,600 L 80,560 Z" fill="#D4E8D1" opacity="0.6" />

                {/* River Gomti */}
                <path
                  d="M 380,-20 Q 420,120 480,180 T 640,260 T 780,320 T 760,440 T 720,540 T 680,670"
                  fill="none"
                  stroke="#A5D4E6"
                  strokeWidth="28"
                  strokeLinecap="round"
                />
                <path
                  d="M 380,-20 Q 420,120 480,180 T 640,260 T 780,320 T 760,440 T 720,540 T 680,670"
                  fill="none"
                  stroke="#7FC2DE"
                  strokeWidth="14"
                  strokeLinecap="round"
                />

                {/* Secondary Minor Roads */}
                <g stroke="#FFFFFF" strokeWidth="6" fill="none" opacity="0.95">
                  <line x1="0" y1="180" x2="1200" y2="160" />
                  <line x1="0" y1="360" x2="1200" y2="340" />
                  <line x1="0" y1="520" x2="1200" y2="500" />
                  <line x1="320" y1="0" x2="360" y2="650" />
                  <line x1="560" y1="0" x2="520" y2="650" />
                  <line x1="880" y1="0" x2="920" y2="650" />
                  <line x1="1040" y1="0" x2="1080" y2="650" />
                  {/* Diagonals */}
                  <line x1="180" y1="0" x2="680" y2="650" />
                  <line x1="900" y1="0" x2="400" y2="650" />
                  <line x1="600" y1="100" x2="1100" y2="450" />
                </g>

                {/* Major Primary Expressways / Highways (Yellow/Orange) */}
                <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 0,240 Q 350,230 600,280 T 1200,260" stroke="#FDE68A" strokeWidth="12" />
                  <path d="M 0,240 Q 350,230 600,280 T 1200,260" stroke="#F59E0B" strokeWidth="8" />

                  <path d="M 450,0 Q 550,220 580,360 T 640,650" stroke="#FDE68A" strokeWidth="12" />
                  <path d="M 450,0 Q 550,220 580,360 T 640,650" stroke="#F59E0B" strokeWidth="8" />

                  <path d="M 200,650 Q 500,480 850,380 T 1200,420" stroke="#FDE68A" strokeWidth="10" />
                  <path d="M 200,650 Q 500,480 850,380 T 1200,420" stroke="#F59E0B" strokeWidth="6" />
                </g>

                {/* Landmark Labels (Lucknow, Gomti Riverfront, Hazratganj, etc.) */}
                <g fontFamily="Inter, Arial, sans-serif" fontSize="11" fontWeight="700" fill="#475569">
                  <text x="440" y="140" fill="#7C3AED">The Residency, Lucknow</text>
                  <text x="560" y="190" fill="#0D9488">Hanumant Dham</text>
                  <text x="320" y="270" fill="#334155">Kaiserbagh Bus Station</text>
                  <text x="580" y="290" fill="#0284C7">Hazratganj Metro Station</text>
                  <text x="660" y="260" fill="#059669">Gomti Riverfront Park</text>
                  <text x="740" y="320" fill="#64748B">Fun Republic Mall</text>
                  <text x="820" y="380" fill="#475569">Dr. BR Ambedkar Memorial</text>
                  <text x="880" y="280" fill="#64748B">VIJAY KHAND</text>
                  <text x="890" y="370" fill="#64748B">VISHAL KHAND</text>
                  <text x="910" y="420" fill="#64748B">VIKAS KHAND</text>
                  <text x="800" y="520" fill="#64748B">VIPUL KHAND</text>
                  <text x="860" y="580" fill="#059669">Janeshwar Mishra Park</text>
                  <text x="520" y="630" fill="#475569">Samajwadi Party Office</text>
                  <text x="360" y="390" fill="#EA580C">Tunday Kababi, Aminabad</text>
                  <text x="410" y="490" fill="#334155">LALKUAN</text>
                </g>

                {/* Lucknow Center Name */}
                <text x="575" y="445" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="18" fontWeight="900" fill="#DC2626" letterSpacing="0.5">Lucknow</text>
                <text x="575" y="466" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="15" fontWeight="800" fill="#DC2626">लखनऊ</text>
              </svg>
            </div>

            {/* ── Top-Right Location Control Pill ── */}
            <div className="contact-find-top-pill">
              <span className="contact-find-pill-pin" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#006FE6" stroke="#006FE6" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" fill="#FFFFFF" />
                </svg>
              </span>
              <span className="contact-find-pill-title">Lucknow, Uttar Pradesh</span>
              <button
                type="button"
                onClick={() => window.open('https://maps.google.com/?q=Lucknow+Uttar+Pradesh', '_blank')}
                className="contact-find-pill-action-btn"
                aria-label="Share Location"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#526887" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => window.open('https://maps.google.com/?q=Lucknow+Uttar+Pradesh', '_blank')}
                className="contact-find-pill-action-btn"
                aria-label="Navigate"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
              </button>
            </div>

            {/* ── Branded Swastik Mixtures Center Marker Pin ── */}
            <div className="contact-find-center-marker" aria-label="Swastik Mixtures Plant Location">
              <div className="contact-find-marker-pulse" aria-hidden="true" />
              <div className="contact-find-marker-pin">
                <div className="contact-find-marker-head">
                  <div className="contact-find-marker-logo">
                    <svg width="22" height="16" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="3" width="15" height="13" />
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                  </div>
                  <span className="contact-find-marker-label">SWASTIK</span>
                  <span className="contact-find-marker-sub">MIXTURES</span>
                </div>
                <div className="contact-find-marker-point" aria-hidden="true" />
              </div>
            </div>

            {/* ── Bottom-Right Zoom Controls ── */}
            <div className="contact-find-zoom-controls" aria-label="Map Zoom Controls">
              <button
                type="button"
                onClick={handleZoomIn}
                className="contact-find-zoom-btn"
                aria-label="Zoom In"
              >
                +
              </button>
              <button
                type="button"
                onClick={handleZoomOut}
                className="contact-find-zoom-btn"
                aria-label="Zoom Out"
              >
                –
              </button>
            </div>

            {/* ── Floating White Location Card (Left Overlay) ── */}
            <div className="contact-find-location-card">
              {/* Header */}
              <div className="contact-find-card-top">
                <div className="contact-find-card-icon-circle" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-find-card-header-text">
                  <span className="contact-find-card-eyebrow">OUR LOCATION</span>
                  <h3 className="contact-find-card-brand">SWASTIK MIXTURES</h3>
                  <span className="contact-find-card-address">Lucknow, Uttar Pradesh, India</span>
                </div>
              </div>

              <div className="contact-find-card-sep" aria-hidden="true" />

              {/* Item 1: Accessibility */}
              <div className="contact-find-card-row">
                <div className="contact-find-row-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="5" r="3" />
                    <path d="M9 20l3-6 3 6" />
                    <path d="M6 8h12" />
                    <path d="M12 8v6" />
                  </svg>
                </div>
                <p className="contact-find-row-text">
                  Easily accessible for site visits, mix testing, and project coordination.
                </p>
              </div>

              {/* Item 2: Working Hours */}
              <div className="contact-find-card-row">
                <div className="contact-find-row-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="contact-find-row-text">
                  <strong>WORKING HOURS</strong>
                  <span>Monday – Saturday | 8:00 AM – 6:00 PM</span>
                </div>
              </div>

              {/* Item 3: Need Assistance */}
              <div className="contact-find-card-row">
                <div className="contact-find-row-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="contact-find-row-text">
                  <strong>NEED ASSISTANCE?</strong>
                  <span>Call or message us anytime.</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://maps.google.com/?q=Lucknow+Uttar+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-find-directions-btn"
                aria-label="Get directions to Swastik Mixtures plant in Google Maps"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                <span>GET DIRECTIONS &rarr;</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── 3. FOUR FEATURE ITEMS STRIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="contact-find-features-strip"
        >
          {/* Feature 1 */}
          <div className="contact-find-feature-col">
            <div className="contact-find-feature-icon-box" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="contact-find-feature-info">
              <h4 className="contact-find-feature-name">STRATEGIC LOCATION</h4>
              <p className="contact-find-feature-detail">Well-connected for easy access and site visits.</p>
            </div>
            <span className="contact-find-mobile-arrow" aria-hidden="true">&rsaquo;</span>
          </div>

          <div className="contact-find-strip-divider" aria-hidden="true" />

          {/* Feature 2 */}
          <div className="contact-find-feature-col">
            <div className="contact-find-feature-icon-box" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <div className="contact-find-feature-info">
              <h4 className="contact-find-feature-name">QUALITY ASSURED</h4>
              <p className="contact-find-feature-detail">State-of-the-art plant with quality control.</p>
            </div>
            <span className="contact-find-mobile-arrow" aria-hidden="true">&rsaquo;</span>
          </div>

          <div className="contact-find-strip-divider" aria-hidden="true" />

          {/* Feature 3 */}
          <div className="contact-find-feature-col">
            <div className="contact-find-feature-icon-box" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="contact-find-feature-info">
              <h4 className="contact-find-feature-name">EXPERT TEAM</h4>
              <p className="contact-find-feature-detail">Experienced professionals ready to support you.</p>
            </div>
            <span className="contact-find-mobile-arrow" aria-hidden="true">&rsaquo;</span>
          </div>

          <div className="contact-find-strip-divider" aria-hidden="true" />

          {/* Feature 4 */}
          <div className="contact-find-feature-col">
            <div className="contact-find-feature-icon-box" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            </div>
            <div className="contact-find-feature-info">
              <h4 className="contact-find-feature-name">QUICK SUPPORT</h4>
              <p className="contact-find-feature-detail">We are just a call or message away!</p>
            </div>
            <span className="contact-find-mobile-arrow" aria-hidden="true">&rsaquo;</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact3;
