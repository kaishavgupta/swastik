import React from 'react';

interface BlogFiltersProps {
  categories: string[];
  activeCategory: string;
  searchQuery: string;
  onCategoryChange: (cat: string) => void;
  onSearchChange: (query: string) => void;
}

export const BlogFilters: React.FC<BlogFiltersProps> = ({
  categories,
  activeCategory,
  searchQuery,
  onCategoryChange,
  onSearchChange
}) => {
  return (
    <div className="blog-filters-bar">
      {/* Category Pills */}
      <div className="blog-categories-pills">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`blog-cat-pill ${activeCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="blog-search-box">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="blog-search-icon">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search articles..."
          className="blog-search-input"
        />
        {searchQuery && (
          <button onClick={() => onSearchChange('')} className="blog-search-clear" aria-label="Clear search">
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogFilters;
