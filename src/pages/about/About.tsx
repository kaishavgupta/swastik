import React from 'react';
import { AboutPart1 } from './about_part1';
import { AboutPart2 } from './about_part2';
import { AboutPart3 } from './about_part3';
import { AboutPart4 } from './about_part4';
import { AboutPart5 } from './about_part5';

interface AboutProps {
  onNavigate?: (path: string) => void;
}

export const AboutPage: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="about-presentation-wrapper">
      <AboutPart1 />
      <AboutPart2 />
      <AboutPart3 />
      <AboutPart4 />
      <AboutPart5 onNavigate={onNavigate} />
    </div>
  );
};

export default AboutPage;
