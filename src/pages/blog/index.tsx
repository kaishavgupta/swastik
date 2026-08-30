import React, { useState, useMemo } from 'react';
import Blog1 from './blog1';
import Blog2 from './blog2';
import Blog3 from './blog3';
import Blog4 from './blog4';
import Blog5 from './blog5';
import { BLOG_POSTS_DATA, type BlogPost } from './blog_data';

interface BlogPageProps {
  onNavigate?: (path: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  // Filter posts based on search query and selected category
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS_DATA.filter(post => {
      const matchesCategory = selectedCategory === 'ALL' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleSelectPost = (post: BlogPost) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('Selected Post:', post.title);
  };

  return (
    <div className="blog-presentation-wrapper">
      {/* PART 1: Blog Hero */}
      <Blog1 onNavigate={onNavigate} />

      {/* PART 2: Search + Category Discovery */}
      <Blog2
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* PART 3: Featured Insights */}
      <Blog3 posts={BLOG_POSTS_DATA} onSelectPost={handleSelectPost} />

      {/* PART 4: More Articles / Blog Grid */}
      <Blog4
        posts={filteredPosts}
        allPosts={BLOG_POSTS_DATA}
        onSelectPost={handleSelectPost}
      />

      {/* PART 5: Blog CTA / Subscribe */}
      <Blog5 onNavigate={onNavigate} />
    </div>
  );
};

export default BlogPage;
