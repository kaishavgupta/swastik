import React, { useState } from 'react';
import { products } from '../data/mockData';
import { SVGIcons } from '../icons/SVGIcons';

export const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [gradeFilter, setGradeFilter] = useState('All');

  // Grades list for interactive selector
  const gradeOptions = ['All', 'M10 – M20', 'M25 – M40', 'M45 – M60', 'Special Mixes'];

  const filteredProducts = products.filter(prod => {
    if (gradeFilter === 'All') return true;
    if (gradeFilter === 'Special Mixes') {
      return prod.category === 'Specialized Concrete' || prod.category === 'High Performance';
    }
    if (gradeFilter === 'M10 – M20') {
      return prod.id === 'concrete-grades'; // Standard grade range cover
    }
    if (gradeFilter === 'M25 – M40') {
      return prod.id === 'high-strength' || prod.id === 'concrete-grades';
    }
    if (gradeFilter === 'M45 – M60') {
      return prod.id === 'scc' || prod.id === 'concrete-grades';
    }
    return true;
  });

  return (
    <div className="pt-24 text-left">
      
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#f4f5f7] to-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#0056b3] text-xs font-black tracking-widest uppercase">CATALOG</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0b132b] mt-4 leading-tight">
            CONCRETE ENGINEERED<br />
            FOR EVERY STRUCTURE
          </h1>
          <div className="w-20 h-1 bg-[#0056b3] mt-6 rounded" />
        </div>
      </section>

      {/* Grade Selector Strip */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm font-bold text-[#0b132b] uppercase tracking-wider">Interactive Grade Selector:</span>
            <div className="flex flex-wrap gap-2.5">
              {gradeOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setGradeFilter(opt)}
                  className={`text-xs font-bold px-4 py-2 rounded transition-all duration-200 border ${
                    gradeFilter === opt
                      ? 'bg-[#0056b3] text-white border-[#0056b3] shadow'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-lg border border-slate-200/60 shadow-sm p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="bg-slate-50 p-6 rounded flex items-center justify-center text-slate-400">
                    {/* SVG product illustrations */}
                    <SVGIcons.Layers size={48} className="text-[#0056b3] opacity-85" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-widest text-[#0056b3] bg-blue-50 px-2.5 py-1 rounded uppercase">
                      {prod.category}
                    </span>
                    {prod.grade && (
                      <span className="text-xs font-bold text-[#0b132b] bg-slate-100 px-2 py-0.5 rounded">
                        {prod.grade}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0b132b] leading-tight">{prod.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{prod.description}</p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center">
                  <button
                    onClick={() => setSelectedProduct(prod)}
                    className="text-[#0056b3] hover:text-[#004085] text-xs font-black uppercase tracking-wider flex items-center space-x-1"
                  >
                    <span>View Details</span>
                    <span>&rsaquo;</span>
                  </button>
                  
                  <a
                    href="#quote-contact"
                    onClick={() => {
                      setSelectedProduct(prod);
                    }}
                    className="bg-blue-50 hover:bg-[#0056b3] text-[#0056b3] hover:text-white text-xs font-bold px-3 py-1.5 rounded transition-all duration-200"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Section (dynamic detail display) */}
      {selectedProduct && (
        <section id="quote-contact" className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 p-8 rounded-xl border border-slate-200">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-[#0056b3] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded">
                  {selectedProduct.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0b132b] mt-3">
                  {selectedProduct.name}
                </h2>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-slate-400 hover:text-slate-600 font-bold text-lg p-2"
                aria-label="Close details"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-6 text-slate-600 leading-relaxed">
              <p>{selectedProduct.longDescription || selectedProduct.description}</p>
              
              {selectedProduct.specifications && (
                <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0b132b]">Approved Specifications</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProduct.specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="text-sm font-semibold text-slate-400">{spec.label}</span>
                        <span className="text-sm font-bold text-[#0b132b]">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 flex items-center space-x-4">
                <a
                  href="#contact-form-anchor"
                  className="bg-[#0056b3] hover:bg-[#004085] text-white font-bold text-sm px-6 py-3 rounded transition-all duration-200 inline-flex items-center space-x-2"
                >
                  <span>REQUEST THIS PRODUCT</span>
                  <SVGIcons.ArrowRight size={14} />
                </a>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-slate-400 hover:text-slate-600 text-sm font-bold uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
};
