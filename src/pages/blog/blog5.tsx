import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Blog5Props {
  onNavigate?: (path: string) => void;
}

export const Blog5: React.FC<Blog5Props> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleTalkClick = () => {
    if (onNavigate) {
      onNavigate('/contact?form=true');
    } else {
      window.location.hash = '/contact?form=true';
    }
  };

  return (
    <section id="blog-part5" className="blog-snap-part blog-newsletter-section" aria-label="Newsletter Subscription">
      <div className="blog-newsletter-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="blog-newsletter-card"
        >
          {/* Subtle Decorative SVG Background Layer */}
          <div className="blog-newsletter-bg-layer" aria-hidden="true" />

          <div className="blog-newsletter-inner-layout">
            {/* ── LEFT COLUMN: Circular White Email Icon & Content ── */}
            <div className="blog-newsletter-left-col">
              <div className="blog-newsletter-icon-circle" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>

              <div className="blog-newsletter-text-block">
                <h2 className="blog-newsletter-title">STAY INFORMED. BUILD BETTER.</h2>
                <div className="blog-newsletter-title-line" aria-hidden="true" />
                <p className="blog-newsletter-desc">
                  Get the latest construction insights, RMC updates, project stories and company news from Swastik Mixtures.
                </p>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Email Form & Talk To Our Team CTA ── */}
            <div className="blog-newsletter-right-col">
              {subscribed ? (
                <div className="blog-newsletter-success-box" role="status">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Thank you for subscribing to our newsletter!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="blog-newsletter-form">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="blog-newsletter-input"
                    aria-label="Email address for newsletter"
                  />
                  <button type="submit" className="blog-newsletter-subscribe-btn" aria-label="Subscribe to newsletter">
                    <span>SUBSCRIBE</span>
                  </button>
                </form>
              )}

              {/* Talk to Our Team Outlined Button */}
              <button
                type="button"
                onClick={handleTalkClick}
                className="blog-newsletter-talk-btn"
                aria-label="Talk to our team"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
                <span>TALK TO OUR TEAM &rarr;</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog5;
