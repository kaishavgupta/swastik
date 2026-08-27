import React from 'react';
import { QualityPage } from './quality/QualityPage';

interface QualityProps {
  onNavigate?: (path: string) => void;
}

export const Quality: React.FC<QualityProps> = ({ onNavigate }) => {
  return <QualityPage onNavigate={onNavigate} />;
};

export default Quality;
