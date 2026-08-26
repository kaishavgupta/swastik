import React from 'react';
import { SVGIcons, SVGBatchingPlant } from '../icons/SVGIcons';
import { legacyTimeline, leadershipMembers } from '../data/mockData';

export const About: React.FC = () => {
  return (
    <div className="pt-24 text-left">
      
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#f4f5f7] to-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#0056b3] text-xs font-black tracking-widest uppercase">ABOUT SWASTIK</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0b132b] mt-4 leading-tight">
            BUILDING LUCKNOW'S<br />
            RMC CULTURE SINCE 2009
          </h1>
          <div className="w-20 h-1 bg-[#0056b3] mt-6 rounded" />
        </div>
      </section>

      {/* Main Statement Banner */}
      <section className="bg-[#0b132b] text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-2xl sm:text-3xl font-black tracking-widest uppercase text-slate-100">
            STRONG MIX. <span className="text-[#0056b3]">SOLID STRUCTURE.</span> SAFE FUTURE.
          </p>
        </div>
      </section>

      {/* Company Story & Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-black text-[#0b132b]">Our History & Journey</h2>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  Established in 2009, Swastik Mixtures emerged as one of the early pioneers of automated Ready Mix Concrete in Lucknow. In a market dominated by traditional site-mixed concrete, we introduced computerized accuracy, grade consistency, and systematic quality assurance.
                </p>
                <p>
                  Over the past 18+ years, we have built a reputation for high-performance concrete, serving landmark residential developments, industrial warehouses, commercial hubs, and government infrastructure projects.
                </p>
                <p>
                  Our batching plants utilize automated weighing and dosing systems, ensuring that every batch matches the precise grade requirements. Under the supervision of our experienced engineering team, we continue to shape Lucknow's growing skyline with strength and trust.
                </p>
              </div>
            </div>

            {/* Side Illustration */}
            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-inner">
              <SVGBatchingPlant className="w-full h-auto" />
            </div>

          </div>
        </div>
      </section>

      {/* Mission / Vision / Values Cards */}
      <section className="py-16 bg-[#f8fafc] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg border border-slate-100 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-blue-50 text-[#0056b3] rounded-full flex items-center justify-center">
                <SVGIcons.TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0b132b]">Our Mission</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                To deliver premium-quality concrete solutions through technical innovation, computerized precision, and prompt logistics, supporting safer and stronger structures across Uttar Pradesh.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg border border-slate-100 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-blue-50 text-[#0056b3] rounded-full flex items-center justify-center">
                <SVGIcons.Eye size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0b132b]">Our Vision</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                To lead the regional construction materials category by setting benchmarks in automated production, client relationship satisfaction, and environmentally responsible batching practices.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-white p-8 rounded-lg border border-slate-100 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-blue-50 text-[#0056b3] rounded-full flex items-center justify-center">
                <SVGIcons.Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#0b132b]">Core Pillars</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our operations stand on integrity, technical rigor, raw material excellence, customer feedback responsiveness, and absolute safety for our personnel and clients.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Legacy Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[#0056b3] text-xs font-black tracking-widest uppercase">CHRONOLOGY</span>
            <h2 className="text-3xl font-black text-[#0b132b]">Our Evolution</h2>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {legacyTimeline.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-1/4">
                  <span className="inline-block bg-[#0b132b] text-white text-sm font-black px-4 py-1.5 rounded">
                    {item.year}
                  </span>
                </div>
                <div className="w-full md:w-3/4 bg-slate-50 p-6 rounded border border-slate-100">
                  <h3 className="text-lg font-bold text-[#0b132b] mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-[#f8fafc] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[#0056b3] text-xs font-black tracking-widest uppercase">LEADERSHIP TEAM</span>
            <h2 className="text-3xl font-black text-[#0b132b]">Our Founding Members & Directors</h2>
          </div>

          {/* Grid showing initials/SVG placeholders as instructed */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipMembers.map((member) => (
              <div key={member.id} className="bg-white p-8 rounded-lg border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow duration-200">
                <div className="w-24 h-24 rounded-full bg-blue-50 border-2 border-[#0056b3] flex items-center justify-center text-2xl font-black text-[#0056b3] tracking-wider shadow-inner">
                  {member.initials}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#0b132b]">{member.name}</h3>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
