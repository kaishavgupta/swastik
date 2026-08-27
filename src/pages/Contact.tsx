import React from 'react';
import { Contact1 } from '../about/contact1';

interface ContactProps {
  onNavigate?: (path: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  return <Contact1 onNavigate={onNavigate} />;
};

export default Contact;
