import React from 'react';
import { SVGIcons, SVGBatchingPlant } from '../icons/SVGIcons';
import { qualitySteps } from '../data/mockData';

export const Quality: React.FC = () => {
  return (
    <div className="pt-24 text-left">
      
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#f4f5f7] to-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#0056b3] text-xs font-black tracking-widest uppercase">STANDARDS</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0b132b] mt-4 leading-tight">
            CONCRETE QUALITY<br />
            & RIGOROUS TESTING
          </h1>
          <div className="w-20 h-1 bg-[#0056b3] mt-6 rounded" />
        </div>
      </section>

      {/* Intro Process Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-black text-[#0b132b]">Quality Control Architecture</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Ready Mix Concrete depends heavily on material homogeneity, precise ratios, and time-sensitive placing. At Swastik Mixtures, our quality process is a continuous loop starting from raw source quarries and terminating at site-pouring compaction control.
              </p>
              <div className="bg-blue-50 border-l-4 border-[#0056b3] p-6 rounded shadow-sm">
                <p className="text-sm font-semibold text-[#0056b3] uppercase tracking-wider mb-2">Our Principle</p>
                <p className="text-sm text-slate-700 italic">
                  "Compromise is not in our mix. We maintain zero-tolerance guidelines on aggregate moisture corrections, dry-batch weights, and slump parameters."
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-100">
              <SVGBatchingPlant className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Process Timeline Details */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[#0056b3] text-xs font-black tracking-widest uppercase">CHRONOLOGY</span>
            <h2 className="text-3xl font-black text-[#0b132b]">Our 8-Step Quality Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualitySteps.map((step, idx) => (
              <div
                key={step.id}
                className="bg-white p-8 rounded-lg border border-slate-200/60 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0056b3] shrink-0 font-black">
                  {idx === 0 && <SVGIcons.ShieldCheck size={20} />}
                  {idx === 1 && <SVGIcons.Flask size={20} />}
                  {idx === 2 && <SVGIcons.Layers size={20} />}
                  {idx === 3 && <SVGIcons.Filter size={20} />}
                  {idx === 4 && <SVGIcons.TrendingUp size={20} />}
                  {idx === 5 && <SVGIcons.Settings size={20} />}
                  {idx === 6 && <SVGIcons.Eye size={20} />}
                  {idx === 7 && <SVGIcons.Users size={20} />}
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-[#0056b3] uppercase tracking-widest">STEP 0{step.id}</span>
                  <h3 className="text-lg font-bold text-[#0b132b]">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab details & site support section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="space-y-4 bg-slate-50 p-8 rounded-xl border border-slate-100">
              <div className="w-10 h-10 bg-blue-50 text-[#0056b3] rounded-full flex items-center justify-center">
                <SVGIcons.Flask size={20} />
              </div>
              <h3 className="text-xl font-bold text-[#0b132b] uppercase tracking-wider">QUALITY CONTROL LAB</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our plant is supported by a fully equipped, on-site testing facility dedicated to aggregate size sieving, concrete moisture absorption ratios, chemical admixtures assessment, and compression testing.
              </p>
            </div>

            <div className="space-y-4 bg-slate-50 p-8 rounded-xl border border-slate-100">
              <div className="w-10 h-10 bg-blue-50 text-[#0056b3] rounded-full flex items-center justify-center">
                <SVGIcons.Users size={20} />
              </div>
              <h3 className="text-xl font-bold text-[#0b132b] uppercase tracking-wider">ON-SITE TECHNICAL SUPPORT</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Quality doesn't stop once the truck leaves the batch plant. Our service includes on-site slump tests and technical assistance to confirm concrete works match structural expectations during critical pouring.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
