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
      onNavigate('/contact');
    } else {
      window.location.hash = '/contact';
    }
  };

  return (
    <section id="blog-part5" className="blog-snap-part blog-subscribe-part">
      <div className="blog-container blog-subscribe-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="blog-subscribe-banner-card"
        >
          {/* LEFT: Envelope Icon & Copy */}
          <div className="blog-subscribe-left">
            <div className="blog-subscribe-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>

            <div className="blog-subscribe-text">
              <h2 className="blog-subscribe-title">STAY INFORMED. BUILD BETTER.</h2>
              <p className="blog-subscribe-lead">
                Get the latest construction insights, RMC updates, project stories and company news
                from Swastik Mixtures.
              </p>
            </div>
          </div>

          {/* RIGHT: Email Form & Contact CTA */}
          <div className="blog-subscribe-right">
            {subscribed ? (
              <div className="blog-subscribe-success">
                <span>✓ THANK YOU FOR SUBSCRIBING TO OUR NEWSLETTER!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="blog-subscribe-form">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="blog-subscribe-input"
                />
                <button type="submit" className="btn-primary blog-subscribe-btn">
                  SUBSCRIBE
                </button>
              </form>
            )}

            <button onClick={handleTalkClick} className="btn-secondary blog-talk-btn">
              TALK TO OUR TEAM →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog5;
