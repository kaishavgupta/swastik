import React from 'react';
import { motion } from 'framer-motion';

interface FeaturedProjectsProps {
  onNavigate?: (path: string) => void;
}

export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  description: string;
  location: string;
  year: string;
  image: string;
}

export const FEATURED_PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    category: 'HIGH-RISE BUILDING',
    title: 'Residential Towers, Lucknow',
    description: 'Supplied M30 & M40 grade concrete for premium residential development.',
    location: 'Lucknow, Uttar Pradesh',
    year: '2024',
    image: '/high-rise-buildings.svg'
  },
  {
    id: 'proj-2',
    category: 'ROADS & HIGHWAYS',
    title: 'City Road Development Project',
    description: 'Delivered high-quality concrete for durable and long-lasting roads.',
    location: 'Lucknow, Uttar Pradesh',
    year: '2024',
    image: '/roads.svg'
  },
  {
    id: 'proj-3',
    category: 'BRIDGES & FLYOVERS',
    title: 'Bridge Construction Project',
    description: 'Reliable concrete supply for strong and safe bridge infrastructure.',
    location: 'Uttar Pradesh',
    year: '2023',
    image: '/bridges.svg'
  },
  {
    id: 'proj-4',
    category: 'INDUSTRIAL CONSTRUCTION',
    title: 'Industrial Plant Construction',
    description: 'High-strength concrete for industrial structures and foundations.',
    location: 'Uttar Pradesh',
    year: '2023',
    image: '/industrial-construction.svg'
  }
];

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onNavigate }) => {
  return (
    <section id="featured-projects" className="project-snap-section featured-projects-section">
      <div className="project-container featured-projects-container">
        {/* TOP HEADER */}
        <div className="featured-projects-header">
          <div className="featured-header-left">
            <span className="project-eyebrow block">FEATURED PROJECTS</span>
            <h2 className="project-section-title">DELIVERING STRENGTH, EVERY DAY</h2>
          </div>

          <button
            onClick={() => onNavigate && onNavigate('/projects')}
            className="btn-secondary featured-view-all-btn"
          >
            VIEW ALL PROJECTS →
          </button>
        </div>

        {/* 4 CARDS GRID */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="featured-projects-grid"
        >
          {FEATURED_PROJECTS_DATA.map((proj) => (
            <div key={proj.id} className="project-card">
              <div className="project-card-img-wrap">
                <img
                  src={proj.image}
                  alt={proj.title}
                  loading="lazy"
                  width="360"
                  height="225"
                  className="project-card-img"
                />
              </div>

              <div className="project-card-body">
                <span className="project-card-category">{proj.category}</span>
                <h3 className="project-card-title">{proj.title}</h3>
                <p className="project-card-desc">{proj.description}</p>

                <div className="project-card-footer">
                  <div className="project-footer-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{proj.location}</span>
                  </div>

                  <div className="project-footer-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0875D1" strokeWidth="2.2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>{proj.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
