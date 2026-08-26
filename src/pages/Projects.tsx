import React, { useState } from 'react';
import { projects } from '../data/mockData';
import { SVGProjects } from '../icons/SVGIcons';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'High-Rise', 'Roads', 'Bridges', 'Commercial', 'Infrastructure', 'Industrial'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 text-left">
      
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#f4f5f7] to-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#0056b3] text-xs font-black tracking-widest uppercase">PORTFOLIO</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0b132b] mt-4 leading-tight">
            LUCKNOW'S CONCRETE<br />
            PROJECT LANDMARKS
          </h1>
          <div className="w-20 h-1 bg-[#0056b3] mt-6 rounded" />
        </div>
      </section>

      {/* Category Filter Strip */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-none justify-start lg:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-bold px-4.5 py-2.5 rounded-full transition-all duration-200 border shrink-0 ${
                  activeCategory === cat
                    ? 'bg-[#0b132b] text-white border-[#0b132b] shadow-sm'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              // Select matching SVG illustration
              let Comp = SVGProjects.HighRise;
              if (project.category === 'Roads') Comp = SVGProjects.Roads;
              if (project.category === 'Bridges') Comp = SVGProjects.Bridges;
              if (project.category === 'Commercial') Comp = SVGProjects.Commercial;
              if (project.category === 'Infrastructure') Comp = SVGProjects.Infrastructure;
              if (project.category === 'Industrial') Comp = SVGProjects.Industrial;

              return (
                <div
                  key={project.id}
                  className="bg-white rounded-lg border border-slate-200/60 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="space-y-4">
                    {/* SVG Project category illustration */}
                    <div className="bg-slate-50 p-6 rounded flex items-center justify-center min-h-[160px] text-[#0056b3] border border-slate-100">
                      <Comp className="h-28 w-auto" />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black tracking-widest text-[#0056b3] bg-blue-50 px-2.5 py-1.5 rounded uppercase">
                        {project.category}
                      </span>
                      {project.location && (
                        <span className="text-xs font-bold text-slate-400">
                          {project.location}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-[#0b132b] leading-snug">
                      {project.name}
                    </h3>
                    
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <span>STATUS: DELIVERED SUCCESSFUL</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Placeholder note section */}
      <section className="py-12 bg-white text-center border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-4 text-xs font-medium text-slate-400 uppercase tracking-wider">
          * Standard representation. Real project names and site logistics are subject to client approval and privacy policy.
        </div>
      </section>

    </div>
  );
};
