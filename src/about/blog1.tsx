import React, { useState, useMemo } from 'react';
import { BlogHero } from './BlogHero';
import { BlogCategories } from './BlogCategories';
import { BlogFeatured } from './BlogFeatured';
import { BlogGrid } from './BlogGrid';
import { BlogSubscribe } from './BlogSubscribe';
import { BLOG_POSTS_DATA, type BlogPost } from './blog_data';

interface Blog1Props {
  onNavigate?: (path: string) => void;
}

export const Blog1: React.FC<Blog1Props> = ({ onNavigate }) => {
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
      <BlogHero />

      {/* PART 2: Search + Category Discovery */}
      <BlogCategories
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* PART 3: Featured Insights */}
      <BlogFeatured posts={BLOG_POSTS_DATA} onSelectPost={handleSelectPost} />

      {/* PART 4: More Articles / Blog Grid */}
      <BlogGrid
        posts={filteredPosts}
        allPosts={BLOG_POSTS_DATA}
        onSelectPost={handleSelectPost}
      />

      {/* PART 5: Blog CTA / Subscribe */}
      <BlogSubscribe onNavigate={onNavigate} />
    </div>
  );
};

export default Blog1;
