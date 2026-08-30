import React from 'react';
import { ProjectHero } from './ProjectHero';
import { ProjectCategories } from './ProjectCategories';
import { FeaturedProjects } from './FeaturedProjects';
import { TrustedClients } from './TrustedClients';
import { ProjectCTA } from './ProjectCTA';

interface Project1Props {
  onNavigate?: (path: string) => void;
}

export const Project1: React.FC<Project1Props> = ({ onNavigate }) => {
  return (
    <div className="projects-presentation-wrapper">
      {/* SECTION 1: Hero + Animated Stats Strip */}
      <ProjectHero onNavigate={onNavigate} />

      {/* SECTION 2: Project Categories */}
      <ProjectCategories onNavigate={onNavigate} />

      {/* SECTION 3: Featured Projects */}
      <FeaturedProjects onNavigate={onNavigate} />

      {/* SECTION 4: Trusted Clients */}
      <TrustedClients />

      {/* SECTION 5: Project CTA */}
      <ProjectCTA onNavigate={onNavigate} />
    </div>
  );
};

export default Project1;
