import React from 'react';
import { Project1 } from '../components/projects/project1';

interface ProjectsProps {
  onNavigate?: (path: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  return <Project1 onNavigate={onNavigate} />;
};

export default Projects;
