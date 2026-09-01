import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  onReadMore?: (post: BlogPost) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onReadMore }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onReadMore) {
      onReadMore(post);
    } else {
      navigate(`/blog/${post.slug || post.id}`);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      onClick={handleClick}
      className="group bg-white rounded-3xl border border-gray-200 hover:border-gray-300 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
      id={`blog-card-${post.id}`}
    >
      {/* Blog Image */}
      <div className="relative aspect-16/10 bg-gray-100 overflow-hidden">
        <img
          src={post.heroImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        <div className="absolute top-3 left-3">
          <span className="bg-[#151616]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-xs">
            {post.category}
          </span>
        </div>
      </div>

      {/* Blog Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Date & Read Time */}
          <div className="flex items-center gap-4 text-[11px] text-gray-500 font-medium mb-3">
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

          {/* Title */}
          <h3 className="font-bold text-base sm:text-lg text-[#151616] group-hover:text-[#007BFF] transition-colors duration-200 leading-snug line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-xs text-gray-600 mt-2.5 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Card Footer: Author & Read More */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-7 h-7 rounded-full object-cover border border-gray-200"
            />
            <span className="text-xs font-semibold text-gray-700 truncate max-w-[120px]">
              {post.author.name}
            </span>
          </div>

          <span className="text-xs font-bold text-[#007BFF] flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-200">
            Read Article <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.article>
  );
};
