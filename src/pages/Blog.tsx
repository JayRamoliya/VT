import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight, Tag, BookOpen } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { BlogCard } from '../components/BlogCard';
import { CTA } from '../components/CTA';
import { BLOG_POSTS } from '../data/blogs';
import { BlogPost } from '../types';

interface BlogProps {
  onNavigateHome?: () => void;
  onSelectPost?: (post: BlogPost) => void;
}

export const Blog: React.FC<BlogProps> = ({ onNavigateHome, onSelectPost }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (onNavigateHome) onNavigateHome();
    else navigate('/');
  };

  const handlePostClick = (post: BlogPost) => {
    if (onSelectPost) {
      onSelectPost(post);
    } else {
      navigate(`/blog/${post.slug || post.id}`);
    }
  };

  const categories = [
    'All',
    'Trends & Insights',
    'Customisation Guide',
    'Corporate Gifting Trends',
    'Event Gifting',
    'Packaging & Presentation'
  ];

  const filteredPosts = BLOG_POSTS.filter(post => {
    if (selectedCategory !== 'All' && post.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = post.title.toLowerCase().includes(q);
      const matchExcerpt = post.excerpt.toLowerCase().includes(q);
      const matchTags = post.tags.some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchExcerpt && !matchTags) return false;
    }
    return true;
  });

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="w-full bg-white">
      {/* Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <Breadcrumb
          items={[{ label: 'Corporate Insights & Blog', active: true }]}
          onNavigateHome={handleHomeClick}
        />
      </div>

      {/* Hero Header */}
      <section className="py-12 sm:py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#007BFF] block mb-2">
              Knowledge Hub & Industry Trends
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151616] tracking-tight">
              Corporate Gifting & Metal Manufacturing Insights
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
              Expert guides on fiber laser marking in metal, corporate gifting ROI, executive desk ergonomics, and sustainable metal merchandise strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Blog Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* Featured Post Banner */}
        {featuredPost && selectedCategory === 'All' && !searchQuery && (
          <div 
            onClick={() => handlePostClick(featuredPost)}
            className="mb-14 bg-[#151616] text-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 cursor-pointer group"
          >
            <div className="lg:col-span-7 relative aspect-16/10 lg:aspect-auto overflow-hidden">
              <img
                src={featuredPost.heroImage}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#007BFF] text-white text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-wider shadow-sm">
                  Featured Guide
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 text-xs text-gray-400 font-medium mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#007BFF]" />
                    {featuredPost.publishedDate}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#007BFF] transition-colors leading-snug">
                  {featuredPost.title}
                </h2>

                <p className="text-xs sm:text-sm text-gray-300 mt-3 line-clamp-3 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-8 h-8 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">{featuredPost.author.name}</span>
                    <span className="text-[10px] text-gray-400">{featuredPost.author.role}</span>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#007BFF] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Full Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Filter Categories and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 mb-8 border-b border-gray-100">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#151616] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by topic..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#007BFF]"
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl p-8">
            <BookOpen className="w-10 h-10 text-gray-400 mx-auto mb-2" />
            <h3 className="text-base font-bold text-gray-800">No articles found</h3>
            <p className="text-xs text-gray-500 mt-1">Try searching for other keywords like "laser marking" or "stainless steel".</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                onReadMore={handlePostClick}
              />
            ))}
          </div>
        )}

      </div>

      {/* Global CTA */}
      <CTA />
    </div>
  );
};
export default Blog;
