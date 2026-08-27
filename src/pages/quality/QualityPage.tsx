import React from 'react';
import { Quality1 } from './quality1';
import { Quality2 } from './quality2';
import { Quality3 } from './quality3';
import { Quality4 } from './quality4';
import { Quality5 } from './quality5';

interface QualityPageProps {
  onNavigate?: (path: string) => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ onNavigate }) => {
  return (
    <div className="quality-presentation-wrapper">
      <Quality1 />
      <Quality2 />
      <Quality3 />
      <Quality4 />
      <Quality5 onNavigate={onNavigate} />
    </div>
  );
};

export default QualityPage;
