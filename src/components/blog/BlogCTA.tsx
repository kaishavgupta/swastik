import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const BlogCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section id="blog-part5" className="blog-cta-section blog-snap-part">
      <div className="blog-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="blog-cta-card"
        >
          <div className="blog-cta-left">
            <span className="blog-cta-eyebrow">STAY CONNECTED</span>
            <h2 className="blog-cta-title">STAY CONNECTED WITH SWASTIK MIXTURES</h2>
            <p className="blog-cta-lead">
              Stay updated with our latest insights, construction knowledge, project stories and company updates.
            </p>

            {submitted ? (
              <div className="blog-subscribe-success">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>THANK YOU FOR SUBSCRIBING TO OUR INSIGHTS!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="blog-subscribe-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address *"
                  required
                  className="blog-subscribe-input"
                />
                <button type="submit" className="btn-primary blog-subscribe-btn">
                  SUBSCRIBE →
                </button>
              </form>
            )}
          </div>

          <div className="blog-cta-right">
            <div className="blog-social-block">
              <span className="blog-social-heading">FOLLOW OUR JOURNEY</span>
              <div className="blog-social-links">
                <a href="#instagram" aria-label="Instagram" className="blog-social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="#facebook" aria-label="Facebook" className="blog-social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#linkedin" aria-label="LinkedIn" className="blog-social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="#youtube" aria-label="YouTube" className="blog-social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="blog-cta-graphic">
              <img
                src="/swastik_ready_mix_truck.svg"
                alt="Swastik Mixtures Truck Visual"
                className="blog-cta-truck-img"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogCTA;
