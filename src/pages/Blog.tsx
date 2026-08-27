import React from 'react';
import { Blog1 } from '../about/blog1';

interface BlogProps {
  onNavigate?: (path: string) => void;
}

export const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  return <Blog1 onNavigate={onNavigate} />;
};

export default Blog;
