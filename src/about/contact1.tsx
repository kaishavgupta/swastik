import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Contact1Props {
  onNavigate?: (path: string) => void;
}

export const Contact1: React.FC<Contact1Props> = () => {
  const [activeDot, setActiveDot] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    requirement: 'Select Requirement',
    message: '',
    agree: false
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['contact-part1', 'contact-part2', 'contact-part3', 'contact-part4', 'contact-part5'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id, index) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveDot(index);
            }
          },
          { threshold: 0.4 }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, []);

  const scrollToPart = (index: number) => {
    const el = document.getElementById(`contact-part${index + 1}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill in all required fields (*).');
      return;
    }

    if (!formData.agree) {
      setFormError('Please agree to the Privacy Policy before submitting.');
      return;
    }

    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        requirement: 'Select Requirement',
        message: '',
        agree: false
      });
    }, 1200);
  };

  return (
    <div className="contact-presentation-wrapper">
      {/* DESKTOP VERTICAL SECTION INDICATOR DOTS */}
      <div className="contact-side-dots" aria-label="Section navigation">
        {[0, 1, 2, 3, 4].map(idx => (
          <button
            key={idx}
            onClick={() => scrollToPart(idx)}
            className={`contact-dot ${activeDot === idx ? 'active' : ''}`}
            aria-label={`Scroll to part ${idx + 1}`}
          />
        ))}
      </div>

      {/* ── PART 1: CONTACT HERO ── */}
      <section id="contact-part1" className="contact-snap-part contact-hero-part">
        <div className="contact-container contact-hero-container">
          {/* LEFT: Headline & Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="contact-hero-left"
          >
            <span className="contact-eyebrow">CONTACT US</span>

            <h1 className="contact-hero-title">
              WE'RE HERE TO<br />
              <span className="contact-title-blue">BUILD TOGETHER.</span>
            </h1>

            <p className="contact-hero-lead">
              Have a project in mind or need expert advice on concrete solutions?
              Get in touch with the Swastik Mixtures team today.
            </p>

            <div className="contact-hero-trust-strip">
              <div className="contact-trust-item">
                <div className="contact-trust-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                </div>
                <div className="contact-trust-text">
                  <span className="contact-trust-title">QUICK RESPONSE</span>
                  <span className="contact-trust-sub">We respond quickly to all enquiries</span>
                </div>
              </div>

              <div className="contact-trust-item">
                <div className="contact-trust-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="contact-trust-text">
                  <span className="contact-trust-title">EXPERT SUPPORT</span>
                  <span className="contact-trust-sub">Our team is here to help you at every step</span>
                </div>
              </div>
            </div>

            <button onClick={() => scrollToPart(1)} className="btn-primary contact-hero-btn">
              REQUEST A QUOTE →
            </button>
          </motion.div>

          {/* RIGHT: Swastik RMC Plant Imagery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="contact-hero-right"
          >
            <div className="contact-hero-img-wrap">
              <img
                src="/08_Swastik_RMC_Plant.svg"
                alt="Swastik Mixtures Ready Mix Concrete Plant"
                loading="eager"
                width="720"
                height="480"
                className="contact-hero-plant-img"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PART 2: GET IN TOUCH + CONTACT FORM ── */}
      <section id="contact-part2" className="contact-snap-part contact-form-part">
        <div className="contact-container contact-form-container">
          <div className="contact-split-layout">
            {/* LEFT 38%: Contact Information Panel */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="contact-info-panel"
            >
              <div className="contact-panel-header">
                <span className="contact-eyebrow">GET IN TOUCH</span>
                <div className="contact-title-bar" />
              </div>

              <div className="contact-info-list">
                {/* Office */}
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <span className="contact-info-label">OUR OFFICE</span>
                    <p className="contact-info-text">
                      <strong>Swastik Mixtures</strong><br />
                      Ready Mix Concrete<br />
                      Lucknow, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <span className="contact-info-label">PHONE</span>
                    <p className="contact-info-text">
                      +91 9307381838<br />
                      +91 7619906200
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <span className="contact-info-label">EMAIL</span>
                    <p className="contact-info-text">
                      info@swastikmixtures.com<br />
                      sales@swastikmixtures.com
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <span className="contact-info-label">WORKING HOURS</span>
                    <p className="contact-info-text">
                      Monday – Saturday<br />
                      8:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT 62%: Interactive Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="contact-form-panel"
            >
              <h2 className="contact-form-heading">SEND US A MESSAGE</h2>

              {formStatus === 'success' ? (
                <div className="contact-form-success-box">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h3>THANK YOU FOR YOUR MESSAGE!</h3>
                  <p>Our team will contact you shortly regarding your concrete requirement.</p>
                  <button onClick={() => setFormStatus('idle')} className="btn-secondary">
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-element">
                  {formError && <div className="contact-form-error-msg">{formError}</div>}

                  <div className="contact-form-grid-2col">
                    <div className="contact-form-field">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name *"
                        required
                        className="contact-input"
                      />
                    </div>

                    <div className="contact-form-field">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number *"
                        required
                        className="contact-input"
                      />
                    </div>
                  </div>

                  <div className="contact-form-grid-2col">
                    <div className="contact-form-field">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address *"
                        required
                        className="contact-input"
                      />
                    </div>

                    <div className="contact-form-field">
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Project Location"
                        className="contact-input"
                      />
                    </div>
                  </div>

                  <div className="contact-form-field">
                    <select
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleInputChange}
                      className="contact-select"
                    >
                      <option value="Select Requirement">Select Requirement</option>
                      <option value="Ready Mix Concrete">Ready Mix Concrete</option>
                      <option value="Concrete Pumping">Concrete Pumping</option>
                      <option value="Bulk Requirement">Bulk Requirement</option>
                      <option value="Project Enquiry">Project Enquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="contact-form-field">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message *"
                      rows={4}
                      required
                      className="contact-textarea"
                    />
                  </div>

                  <div className="contact-checkbox-row">
                    <label className="contact-checkbox-label">
                      <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={e => setFormData(prev => ({ ...prev, agree: e.target.checked }))}
                      />
                      <span>I agree to the Privacy Policy</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="btn-primary contact-submit-btn"
                  >
                    {formStatus === 'loading' ? 'SENDING...' : 'SEND MESSAGE →'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PART 3: FIND OUR LOCATION ── */}
      <section id="contact-part3" className="contact-snap-part contact-map-part">
        <div className="contact-container contact-map-container">
          <div className="contact-section-header">
            <span className="contact-eyebrow">FIND US</span>
            <h2 className="contact-section-title">VISIT OUR PLANT OR CONNECT WITH OUR TEAM</h2>
            <div className="contact-title-bar" />
          </div>

          <div className="contact-map-wrapper">
            {/* Styled Clean Map View */}
            <iframe
              title="Swastik Mixtures Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14238.163914842!2d80.946158!3d26.846708!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd081f9b33ad%3A0x6b403e07f45c755c!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="contact-map-iframe"
            />

            {/* Floating Location Card Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="contact-map-overlay-card"
            >
              <div className="contact-overlay-header">
                <div className="contact-overlay-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-overlay-titles">
                  <span className="contact-overlay-name">SWASTIK MIXTURES</span>
                  <span className="contact-overlay-sub">Lucknow, Uttar Pradesh, India</span>
                </div>
              </div>

              <p className="contact-overlay-desc">
                Easily accessible for site visits, mix testing, and project coordination.
              </p>

              <a
                href="https://maps.google.com/?q=Lucknow+Uttar+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary contact-overlay-btn"
              >
                GET DIRECTIONS →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PART 4: DIRECT CONTACT / QUICK ACTIONS ── */}
      <section id="contact-part4" className="contact-snap-part contact-actions-part">
        <div className="contact-actions-bg-overlay" aria-hidden="true" />
        
        <div className="contact-container contact-actions-container">
          <div className="contact-section-header text-center">
            <h2 className="contact-section-title text-white">
              LET'S TALK ABOUT<br />YOUR NEXT PROJECT.
            </h2>
            <div className="contact-title-bar margin-auto bg-blue" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="contact-actions-grid"
          >
            {/* Card 1: Call Us */}
            <div className="contact-action-card">
              <div className="contact-action-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="contact-action-title">CALL US</h3>
              <p className="contact-action-desc">Speak directly with our team</p>
              <a href="tel:+919307381838" className="btn-secondary contact-action-btn">
                CALL NOW →
              </a>
            </div>

            {/* Card 2: Send an Email */}
            <div className="contact-action-card">
              <div className="contact-action-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="contact-action-title">SEND AN EMAIL</h3>
              <p className="contact-action-desc">Tell us about your requirement</p>
              <a href="mailto:info@swastikmixtures.com" className="btn-secondary contact-action-btn">
                EMAIL US →
              </a>
            </div>

            {/* Card 3: Request a Quote */}
            <div className="contact-action-card">
              <div className="contact-action-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 className="contact-action-title">REQUEST A QUOTE</h3>
              <p className="contact-action-desc">Get a concrete solution for your project</p>
              <button onClick={() => scrollToPart(1)} className="btn-primary contact-action-btn">
                REQUEST QUOTE →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PART 5: FINAL CTA ── */}
      <section id="contact-part5" className="contact-snap-part contact-final-cta-part">
        <div className="contact-container contact-final-cta-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="contact-cta-banner-card"
          >
            <div className="contact-final-left">
              <h2 className="contact-final-title">
                READY TO START<br />YOUR PROJECT?
              </h2>
              <p className="contact-final-lead">
                Let's discuss how we can deliver the right concrete solution for your project.
              </p>
              <div className="contact-final-buttons">
                <button onClick={() => scrollToPart(1)} className="btn-primary contact-final-primary-btn">
                  REQUEST A QUOTE →
                </button>
                <a href="tel:+919307381838" className="btn-secondary contact-final-secondary-btn">
                  CONTACT OUR TEAM ↗
                </a>
              </div>
            </div>

            <div className="contact-final-right">
              <img
                src="/05_transit_mixer_closeup.svg"
                alt="Swastik Mixtures Ready Mix Concrete Truck"
                loading="lazy"
                width="400"
                height="220"
                className="contact-final-truck-img"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact1;
