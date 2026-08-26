import React, { useState } from 'react';
import { blogPosts } from '../data/mockData';
import { SVGIcons } from '../icons/SVGIcons';

// Reusable BlogCard Component inside the file (or as separate export)
export const BlogCard: React.FC<{
  post: typeof blogPosts[0];
  onRead: () => void;
}> = ({ post, onRead }) => {
  return (
    <div className="bg-white rounded-lg border border-slate-200/60 p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
      <div className="space-y-4">
        {/* Placeholder SVG Thumbnail for blogs */}
        <div className="bg-slate-50 p-6 rounded flex items-center justify-center text-[#0056b3] border border-slate-100 min-h-[140px]">
          <SVGIcons.Layers size={48} className="opacity-80" />
        </div>

        <div className="flex items-center justify-between text-xs font-bold text-slate-400">
          <span className="text-[#0056b3] bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider">
            {post.category}
          </span>
          <span>{post.date}</span>
        </div>

        <h3 className="text-lg font-bold text-[#0b132b] leading-snug hover:text-[#0056b3] cursor-pointer" onClick={onRead}>
          {post.title}
        </h3>
        
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center text-xs">
        <button
          onClick={onRead}
          className="text-[#0056b3] hover:text-[#004085] font-black uppercase tracking-wider flex items-center space-x-1"
        >
          <span>READ ARTICLE</span>
          <span>&rsaquo;</span>
        </button>
        <span className="text-slate-400 font-semibold">{post.readTime}</span>
      </div>
    </div>
  );
};

export const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'RMC', 'Technology', 'Concrete'];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 text-left">
      
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-[#f4f5f7] to-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#0056b3] text-xs font-black tracking-widest uppercase">KNOWLEDGE BASE</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0b132b] mt-4 leading-tight">
            INSIGHTS FROM THE<br />
            WORLD OF CONCRETE
          </h1>
          <div className="w-20 h-1 bg-[#0056b3] mt-6 rounded" />
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-2 justify-start lg:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-bold px-4 py-2 rounded transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-[#0b132b] text-white border-[#0b132b] shadow-sm'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                onRead={() => setSelectedPost(post)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Post Detail View Modal/Section */}
      {selectedPost && (
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 p-8 rounded-xl border border-slate-200">
            <div className="flex justify-between items-start border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-bold text-[#0056b3] uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded">
                  {selectedPost.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0b132b] mt-3">
                  {selectedPost.title}
                </h2>
                <div className="flex items-center space-x-4 text-xs font-bold text-slate-400 mt-2">
                  <span>{selectedPost.date}</span>
                  <span>&bull;</span>
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-slate-400 hover:text-slate-600 font-bold text-lg p-2"
                aria-label="Close article"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed text-base">
              <p className="font-semibold text-slate-700 text-lg">
                {selectedPost.excerpt}
              </p>
              <p>
                {selectedPost.content || 'Detailed content placeholder. Real construction insights and CMS integration details will be loaded here later.'}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="bg-[#0056b3] hover:bg-[#004085] text-white font-bold text-xs px-5 py-2.5 rounded transition-all duration-200"
              >
                Back to Blog list
              </button>
            </div>
          </div>
        </section>
      )}

    </div>
  );
};
export default Blog;
