import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getWhatsAppUrl, getTelUrl, CONTACT_NUMBER_DISPLAY } from '../../config/contact';

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

    // 1. Validation
    if (!formData.name.trim()) {
      setFormError('Please enter your name.');
      return;
    }

    if (!formData.phone.trim()) {
      setFormError('Please enter your phone number.');
      return;
    }

    if (!formData.email.trim()) {
      setFormError('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormError('Please enter a valid email address.');
      return;
    }

    if (!formData.message.trim()) {
      setFormError('Please enter your message.');
      return;
    }

    if (!formData.agree) {
      setFormError('Please agree to the Privacy Policy before submitting.');
      return;
    }

    // 2. Format WhatsApp Message
    const formattedMessage = `Hello Swastik Mixtures,

I would like to make an enquiry regarding my concrete requirement.

━━━━━━━━━━━━━━━━━━
CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━

Name: ${formData.name.trim()}

Phone: ${formData.phone.trim()}

Email: ${formData.email.trim()}

Project Location: ${formData.location.trim() || 'N/A'}

Type of Requirement: ${formData.requirement}

Message:
${formData.message.trim()}

━━━━━━━━━━━━━━━━━━

This enquiry was submitted through the Swastik Mixtures website.

Thank you.`;

    // 3. Open WhatsApp Web/App dynamically with configured contact number
    const whatsappUrl = getWhatsAppUrl(formattedMessage);

    setFormStatus('loading');

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setFormStatus('success');
    }, 600);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      location: '',
      requirement: 'Select Requirement',
      message: '',
      agree: false
    });
    setFormStatus('idle');
    setFormError('');
  };

  return (
    <section id="contact-part2" className="contact-snap-part contact-touch-section" aria-label="Get In Touch Form">
      {/* Decorative Dot Matrix in top left */}
      <div className="contact-touch-bg-dots" aria-hidden="true" />

      <div className="contact-touch-container">
        <div className="contact-touch-split-grid">
          {/* ── LEFT COLUMN (~36%): GET IN TOUCH PANEL ── */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="contact-touch-left-panel"
          >
            {/* Top Visual Portion with RMC Plant SVG Background & Title */}
            <div className="contact-touch-header-visual">
              <div className="contact-touch-header-bg-overlay" aria-hidden="true" />
              <div className="contact-touch-header-content">
                <h2 className="contact-touch-header-title">GET IN TOUCH</h2>
                <div className="contact-touch-header-line" aria-hidden="true" />
              </div>
            </div>

            {/* White Contact Info Card overlapping the header */}
            <div className="contact-touch-info-card">
              {/* 1. Our Office */}
              <div className="contact-touch-info-row">
                <div className="contact-touch-info-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-touch-info-details">
                  <span className="contact-touch-info-label">OUR OFFICE</span>
                  <div className="contact-touch-info-text">
                    <strong>Swastik Mixtures</strong>
                    <span>Ready Mix Concrete</span>
                    <span>Lucknow, Uttar Pradesh, India</span>
                  </div>
                </div>
              </div>

              <div className="contact-touch-card-divider" aria-hidden="true" />

              {/* 2. Phone */}
              <div className="contact-touch-info-row">
                <div className="contact-touch-info-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="contact-touch-info-details">
                  <span className="contact-touch-info-label">PHONE</span>
                  <div className="contact-touch-info-text">
                    <a href={getTelUrl()} className="contact-touch-link">{CONTACT_NUMBER_DISPLAY}</a>
                  </div>
                </div>
              </div>

              <div className="contact-touch-card-divider" aria-hidden="true" />

              {/* 3. Email */}
              <div className="contact-touch-info-row">
                <div className="contact-touch-info-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="contact-touch-info-details">
                  <span className="contact-touch-info-label">EMAIL</span>
                  <div className="contact-touch-info-text">
                    <a href="mailto:info@swastikmixtures.com" className="contact-touch-link">info@swastikmixtures.com</a>
                    <a href="mailto:sales@swastikmixtures.com" className="contact-touch-link">sales@swastikmixtures.com</a>
                  </div>
                </div>
              </div>

              <div className="contact-touch-card-divider" aria-hidden="true" />

              {/* 4. Working Hours */}
              <div className="contact-touch-info-row">
                <div className="contact-touch-info-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="contact-touch-info-details">
                  <span className="contact-touch-info-label">WORKING HOURS</span>
                  <div className="contact-touch-info-text">
                    <span>Monday – Saturday</span>
                    <span>8:00 AM – 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Urgent Enquiry Strip */}
            <div className="contact-touch-urgent-strip">
              <div className="contact-touch-urgent-icon-wrap" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
              </div>
              <div className="contact-touch-urgent-text">
                <strong>Have any urgent enquiries?</strong>
                <span>We are just a call or message away!</span>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN (~64%): SEND US A MESSAGE FORM ── */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="contact-touch-form-card"
          >
            <div className="contact-touch-form-header">
              <h2 className="contact-touch-form-title">SEND US A MESSAGE</h2>
              <div className="contact-touch-form-title-line" aria-hidden="true" />
            </div>

            {formStatus === 'success' ? (
              <div className="contact-touch-success-box">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h3>ENQUIRY READY IN WHATSAPP!</h3>
                <p>Your complete enquiry has been formatted. Please click <strong>Send</strong> inside WhatsApp to transmit your message directly to the Swastik Mixtures team.</p>
                <button type="button" onClick={handleResetForm} className="contact-touch-reset-btn">
                  SEND ANOTHER ENQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-touch-form">
                {formError && <div className="contact-touch-error-alert">{formError}</div>}

                {/* ROW 1: Name & Phone */}
                <div className="contact-touch-grid-2col">
                  <div className="contact-touch-input-wrapper">
                    <span className="contact-touch-field-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name *"
                      required
                      className="contact-touch-field-input"
                      aria-label="Your Name"
                    />
                  </div>

                  <div className="contact-touch-input-wrapper">
                    <span className="contact-touch-field-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number *"
                      required
                      className="contact-touch-field-input"
                      aria-label="Phone Number"
                    />
                  </div>
                </div>

                {/* ROW 2: Email & Project Location */}
                <div className="contact-touch-grid-2col">
                  <div className="contact-touch-input-wrapper">
                    <span className="contact-touch-field-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address *"
                      required
                      className="contact-touch-field-input"
                      aria-label="Email Address"
                    />
                  </div>

                  <div className="contact-touch-input-wrapper">
                    <span className="contact-touch-field-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Project Location"
                      className="contact-touch-field-input"
                      aria-label="Project Location"
                    />
                  </div>
                </div>

                {/* ROW 3: Select Requirement (Full Width) */}
                <div className="contact-touch-input-wrapper contact-touch-select-wrapper">
                  <span className="contact-touch-field-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <line x1="9" y1="9" x2="15" y2="9" />
                      <line x1="9" y1="13" x2="15" y2="13" />
                      <line x1="9" y1="17" x2="13" y2="17" />
                    </svg>
                  </span>
                  <select
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleInputChange}
                    className="contact-touch-field-select"
                    aria-label="Select Requirement"
                  >
                    <option value="Select Requirement">Select Requirement</option>
                    <option value="Ready Mix Concrete">Ready Mix Concrete</option>
                    <option value="Concrete Supply">Concrete Supply</option>
                    <option value="Project Requirement">Project Requirement</option>
                    <option value="Bulk Concrete Requirement">Bulk Concrete Requirement</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* ROW 4: Your Message (Full Width Textarea) */}
                <div className="contact-touch-input-wrapper contact-touch-textarea-wrapper">
                  <span className="contact-touch-field-icon contact-touch-textarea-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message *"
                    rows={4}
                    required
                    className="contact-touch-field-textarea"
                    aria-label="Your Message"
                  />
                </div>

                {/* ROW 5: Privacy Policy Checkbox */}
                <div className="contact-touch-checkbox-row">
                  <label className="contact-touch-checkbox-label">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={formData.agree}
                      onChange={e => setFormData(prev => ({ ...prev, agree: e.target.checked }))}
                      className="contact-touch-checkbox-input"
                    />
                    <span>
                      I agree to the <a href="/privacy" onClick={e => e.preventDefault()} className="contact-touch-privacy-link">Privacy Policy</a>
                    </span>
                  </label>
                </div>

                {/* ROW 6: Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="contact-touch-submit-btn"
                  aria-label="Send Message"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  <span>{formStatus === 'loading' ? 'OPENING WHATSAPP...' : 'SEND MESSAGE \u2192'}</span>
                </button>

                {/* ROW 7: Secure Information Notice */}
                <div className="contact-touch-security-strip">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#006FE6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                  <span>Your information is secure and will only be used to respond to your enquiry.</span>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact2;
