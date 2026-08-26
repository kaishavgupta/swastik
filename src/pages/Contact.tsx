import React, { useState } from 'react';
import { SVGIcons } from '../icons/SVGIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    projectType: 'Residential',
    concreteProduct: 'M25 Concrete',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when editing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormStatus('loading');
    
    // Simulate API delivery
    setTimeout(() => {
      setFormStatus('success');
      // Reset form
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        projectType: 'Residential',
        concreteProduct: 'M25 Concrete',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="pt-24 text-left">
      
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#f4f5f7] to-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#0056b3] text-xs font-black tracking-widest uppercase">GET IN TOUCH</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0b132b] mt-4 leading-tight">
            LET'S BUILD<br />
            SOMETHING STRONG
          </h1>
          <div className="w-20 h-1 bg-[#0056b3] mt-6 rounded" />
        </div>
      </section>

      {/* Main Form & details section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left form panel */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-10 rounded-xl border border-slate-200">
              <h2 className="text-2xl font-black text-[#0b132b] mb-6">Send Concrete Enquiry</h2>
              
              {formStatus === 'success' ? (
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded text-emerald-800 space-y-2">
                  <p className="font-bold text-lg">Thank you for contacting Swastik Mixtures!</p>
                  <p className="text-sm">Your concrete enquiry has been logged successfully. Our sales team will get back to you shortly.</p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="text-xs font-bold underline mt-2 hover:text-emerald-950 uppercase tracking-wider"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Name */}
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wide">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded border bg-white focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 ${
                          errors.name ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-[#0056b3]'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-xs text-rose-500 font-semibold">{errors.name}</p>}
                    </div>

                    {/* Company */}
                    <div className="space-y-1">
                      <label htmlFor="company" className="text-xs font-bold text-slate-500 uppercase tracking-wide">Company (Optional)</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3]"
                        placeholder="e.g. Buildcon India"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div className="space-y-1">
                      <label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase tracking-wide">Phone Number *</label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded border bg-white focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 ${
                          errors.phone ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-[#0056b3]'
                        }`}
                        placeholder="e.g. +91 9999999999"
                      />
                      {errors.phone && <p className="text-xs text-rose-500 font-semibold">{errors.phone}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wide">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded border bg-white focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 ${
                          errors.email ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-[#0056b3]'
                        }`}
                        placeholder="johndoe@example.com"
                      />
                      {errors.email && <p className="text-xs text-rose-500 font-semibold">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Project Type */}
                    <div className="space-y-1">
                      <label htmlFor="projectType" className="text-xs font-bold text-slate-500 uppercase tracking-wide">Project Category</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3] font-semibold text-slate-700 text-sm"
                      >
                        <option value="Residential">High-Rise / Residential</option>
                        <option value="Roads">Pavement / Roads</option>
                        <option value="Bridges">Bridge / Metro</option>
                        <option value="Commercial">Commercial Infrastructure</option>
                        <option value="Industrial">Industrial Warehouse</option>
                      </select>
                    </div>

                    {/* Required Concrete */}
                    <div className="space-y-1">
                      <label htmlFor="concreteProduct" className="text-xs font-bold text-slate-500 uppercase tracking-wide">Requested Concrete Product</label>
                      <select
                        id="concreteProduct"
                        name="concreteProduct"
                        value={formData.concreteProduct}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 focus:border-[#0056b3] font-semibold text-slate-700 text-sm"
                      >
                        <option value="Standard Grades">M10 - M20 lean concrete</option>
                        <option value="M25 Concrete">M25 - M30 standard grade</option>
                        <option value="High Strength">M35 - M45 high strength</option>
                        <option value="Self Compacting">M40+ Self Compacting (SCC)</option>
                        <option value="Waterproof">Waterproof concrete</option>
                        <option value="Fiber Reinforced">Fiber Reinforced (FRC)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wide">Enquiry Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded border bg-white focus:outline-none focus:ring-2 focus:ring-[#0056b3]/20 ${
                        errors.message ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-[#0056b3]'
                      }`}
                      placeholder="Specify your concrete volume requirements and scheduled pouring date..."
                    />
                    {errors.message && <p className="text-xs text-rose-500 font-semibold">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full bg-[#0056b3] hover:bg-[#004085] text-white font-bold text-base py-4 rounded transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 active:scale-95 disabled:bg-slate-400"
                  >
                    <span>{formStatus === 'loading' ? 'SENDING ENQUIRY...' : 'SEND ENQUIRY'}</span>
                    {formStatus !== 'loading' && <SVGIcons.ArrowRight size={18} />}
                  </button>
                </form>
              )}
            </div>

            {/* Right side contact info + SVG Location map placeholder */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-[#0b132b]">Company Information</h3>
                
                <div className="space-y-4 text-slate-600">
                  <div className="flex items-start space-x-3">
                    <SVGIcons.MapPin size={20} className="text-[#0056b3] mt-1 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Office Address</h4>
                      <p className="font-bold text-slate-800 mt-1 not-italic">
                        H. No. 80/1, Kaili Paschim, Jitimbagh, Lucknow, Uttar Pradesh - 226005
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <SVGIcons.Phone size={20} className="text-[#0056b3] mt-1 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Contacts</h4>
                      <p className="font-bold text-slate-800 mt-1">
                        +91 9919601643, +91 9839020007
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <SVGIcons.Mail size={20} className="text-[#0056b3] mt-1 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Channels</h4>
                      <p className="font-bold text-slate-800 mt-1">
                        info@swastikmixtures.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location map SVG representation as specified */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Plant Location Mapping</h4>
                <svg viewBox="0 0 300 160" className="w-full h-auto bg-white rounded border border-slate-100 shadow-sm" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="0" width="300" height="160" fill="#f8fafc" />
                  
                  {/* Grid Lines representing roads */}
                  <line x1="20" y1="0" x2="60" y2="160" stroke="#cbd5e1" strokeWidth="4" />
                  <line x1="200" y1="0" x2="160" y2="160" stroke="#cbd5e1" strokeWidth="6" />
                  <line x1="0" y1="70" x2="300" y2="100" stroke="#cbd5e1" strokeWidth="8" />
                  
                  {/* Gomti River flow representation */}
                  <path d="M 0 130 Q 150 150 300 110" fill="none" stroke="#93c5fd" strokeWidth="12" opacity="0.5" />
                  <text x="250" y="145" fontFamily="sans-serif" fontSize="7" fontWeight="bold" fill="#3b82f6" opacity="0.7">GOMTI RIVER</text>

                  {/* Marker Pin */}
                  <g transform="translate(180, 85)">
                    <circle cx="0" cy="0" r="14" fill="#0056b3" opacity="0.2" />
                    <circle cx="0" cy="0" r="6" fill="#0056b3" />
                    <path d="M 0 0 L -8 -15 Q 0 -24 8 -15 Z" fill="#0b132b" />
                    <circle cx="0" cy="-14" r="3" fill="#ffffff" />
                  </g>
                  
                  <text x="180" y="112" fontFamily="sans-serif" fontSize="8" fontWeight="black" fill="#0b132b" textAnchor="middle">
                    SWASTIK PLANT
                  </text>
                  <text x="180" y="122" fontFamily="sans-serif" fontSize="6" fontWeight="bold" fill="#64748b" textAnchor="middle">
                    Kaili Paschim, Lucknow
                  </text>
                </svg>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
