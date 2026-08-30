import React from 'react';
import BlogPage from './blog/index';

interface BlogProps {
  onNavigate?: (path: string) => void;
}

export const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  return <BlogPage onNavigate={onNavigate} />;
};

export default Blog;
