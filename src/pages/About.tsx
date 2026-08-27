import React from 'react';
import { AboutPage } from './about/About';

interface AboutProps {
  onNavigate?: (path: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return <AboutPage onNavigate={onNavigate} />;
};

export default About;
