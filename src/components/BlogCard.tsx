import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "../types";

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
      // initial={{ opacity: 0, y: 25 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      // whileHover={{ y: -8 }}
      // transition={{ duration: 0.4 }}
      onClick={handleClick}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <div className="overflow-hidden">
          <motion.img
            src={post.heroImage}
            alt={post.title}
            initial={{
              scale: 1.6,
              y: -40,
            }}
            whileInView={{
              scale: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-4 left-4">
          <span className="bg-white/95 backdrop-blur-md text-[#151616] text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#007BFF]" />
            {post.publishedDate}
          </span>

          <span className="w-1 h-1 rounded-full bg-gray-300"></span>

          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#151616] leading-snug line-clamp-2 group-hover:text-[#007BFF] transition-colors">
          {post.title}
        </h3>

        {/* Footer */}
        <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-500">
            Learn More
          </span>

          <div className="w-9 h-9 rounded-full bg-[#007BFF]/10 flex items-center justify-center group-hover:bg-[#007BFF] transition-all duration-300">
            <ArrowRight className="w-4 h-4 text-[#007BFF] group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
