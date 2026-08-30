import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact2: React.FC = () => {
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
  );
};

export default Contact2;
