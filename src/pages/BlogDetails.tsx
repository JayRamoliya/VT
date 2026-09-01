import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  ArrowLeft, 
  Quote, 
  CheckCircle2, 
  Tag, 
  MessageSquare, 
  Sparkles, 
  BookOpen 
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { BlogCard } from '../components/BlogCard';
import { CTA } from '../components/CTA';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data/blogs';
import { useQuote } from '../context/QuoteContext';

interface BlogDetailsProps {
  post?: BlogPost;
  onNavigateHome?: () => void;
  onNavigateBlog?: () => void;
  onSelectPost?: (post: BlogPost) => void;
}

export const BlogDetails: React.FC<BlogDetailsProps> = ({
  post: directPost,
  onNavigateHome,
  onNavigateBlog,
  onSelectPost
}) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { openQuoteModal, generateWhatsAppLink } = useQuote();

  const post = directPost || BLOG_POSTS.find(
    p => p.slug === slug || p.id === slug
  );

  if (!post) {
    return (
      <div className="min-h-[60vh] max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="bg-gray-50 border border-dashed border-gray-300 rounded-3xl p-12 max-w-xl mx-auto">
          <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-[#151616]">Article Not Found</h1>
          <p className="text-xs sm:text-sm text-gray-600 mt-2 mb-6">
            The blog article you requested does not exist or may have been relocated.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/blog"
              className="bg-[#007BFF] hover:bg-[#b82215] text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              Browse All Articles
            </Link>
            <Link
              to="/"
              className="bg-[#151616] hover:bg-black text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  const handleSelectRelated = (p: BlogPost) => {
    if (onSelectPost) {
      onSelectPost(p);
    } else {
      navigate(`/blog/${p.slug || p.id}`);
    }
  };

  return (
    <div className="w-full bg-white">
      {/* Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <Breadcrumb
          items={[
            { label: 'Corporate Insights', to: '/blog' },
            { label: post.category, to: '/blog' },
            { label: post.title, active: true }
          ]}
          onNavigateHome={onNavigateHome}
        />
      </div>

      {/* Article Header Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-[#007BFF] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Insights</span>
        </Link>

        {/* Category & Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
          <span className="bg-red-50 text-[#007BFF] font-bold px-3 py-1 rounded-md uppercase tracking-wider text-[11px]">
            {post.category}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#007BFF]" />
            {post.publishedDate}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-gray-400" />
            {post.readTime}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#151616] tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        {/* Author Card & Share Actions */}
        <div className="flex items-center justify-between py-4 border-t border-b border-gray-100 mb-8">
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-11 h-11 rounded-full object-cover border-2 border-[#007BFF]"
            />
            <div>
              <span className="font-bold text-sm text-[#151616] block leading-none mb-1">
                {post.author.name}
              </span>
              <span className="text-xs text-gray-500">
                {post.author.role} • Varaia Traders Industrial Desk
              </span>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-700 hover:text-[#007BFF] hover:border-[#007BFF] transition-all cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        </div>

        {/* Hero Photo */}
        <div className="relative aspect-16/9 rounded-3xl overflow-hidden shadow-xl mb-10 bg-gray-100">
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Key Takeaways Highlight Box */}
        <div className="bg-red-50/70 border border-red-200/80 rounded-2xl p-6 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#007BFF] block mb-2 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> Executive Summary & Key Takeaways
          </span>
          <p className="text-sm font-semibold text-gray-800 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Article Body Sections */}
        <div className="space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
          {post.sections.map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#151616] tracking-tight pt-2">
                {section.heading}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* Article Tags */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2 flex items-center gap-1">
            <Tag className="w-3.5 h-3.5" /> Tags:
          </span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-lg"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Direct WhatsApp Callout from Article */}
        <div className="mt-10 p-6 bg-[#151616] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-base text-white">Have questions regarding metal merchandise for your company?</h4>
            <p className="text-xs text-gray-400 mt-1">Chat directly with our manufacturing consultants for immediate answers.</p>
          </div>
          <button
            onClick={() => {
              const url = generateWhatsAppLink(`Hello VARAIA TRADERS, I read your article "${post.title}" and would like to discuss metal corporate gifts.`);
              window.open(url, '_blank');
            }}
            className="bg-[#007BFF] hover:bg-[#b82215] text-white px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

      </article>

      {/* Related Articles Strip */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 border-t border-gray-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#007BFF] block mb-1">
                More Reading
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#151616]">
                Related Corporate Insights
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((relPost) => (
                <BlogCard
                  key={relPost.id}
                  post={relPost}
                  onReadMore={handleSelectRelated}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Global CTA */}
      <CTA />
    </div>
  );
};
export default BlogDetails;
