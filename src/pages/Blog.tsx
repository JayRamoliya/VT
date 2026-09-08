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

    {/* Blog Listing */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#151616]">
            Corporate Insights & Blog
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Latest articles, guides and industry insights.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
          <BookOpen className="w-4 h-4" />
          {BLOG_POSTS.length} Articles
        </div>
      </div>

      {BLOG_POSTS.length === 0 ? (
        <div className="text-center py-20">
          <BookOpen className="w-12 h-12 mx-auto text-gray-300 mb-3" />
          <h3 className="text-lg font-semibold text-gray-700">
            No Articles Available
          </h3>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              onReadMore={handlePostClick}
            />
          ))}
        </div>
      )}

    </section>

    <CTA />

  </div>
);
};
export default Blog;
