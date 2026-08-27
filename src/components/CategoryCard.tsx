import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  Smartphone, 
  PenTool, 
  LayoutGrid, 
  Disc, 
  Award, 
  Gift, 
  Calendar, 
  BookOpen, 
  Layers, 
  Briefcase 
} from 'lucide-react';
import { CategoryType } from '../types';
import { CATEGORY_DETAILS } from '../data/products';

interface CategoryCardProps {
  category: CategoryType;
  onClick?: (category: CategoryType) => void;
  index?: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick, index = 0 }) => {
  const navigate = useNavigate();

  const details = CATEGORY_DETAILS[category] || {
    title: category,
    subtitle: 'Steel & MS Corporate Utilities',
    description: 'Precision manufactured corporate gifts with ready stock availability.',
    count: 6,
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=900&auto=format&fit=crop'
  };

  const getCategoryIcon = (cat: CategoryType) => {
    switch (cat) {
      case 'Mobile Stand':
        return <Smartphone className="w-5 h-5" />;
      case 'Pen Stand':
        return <PenTool className="w-5 h-5" />;
      case 'Desk Organiser':
        return <LayoutGrid className="w-5 h-5" />;
      case 'Paper Weight':
        return <Disc className="w-5 h-5" />;
      case 'Corporate Gifts in Metal':
        return <Gift className="w-5 h-5" />;
      case 'Table Calendar':
        return <Calendar className="w-5 h-5" />;
      case 'Notepad':
        return <BookOpen className="w-5 h-5" />;
      case 'Premium Office Accessories':
        return <Briefcase className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  const getCategoryHighlights = (cat: CategoryType) => {
    switch (cat) {
      case 'Mobile Stand':
        return ['AISI 304 Steel', 'Multi-Angle MS', 'Laser Area'];
      case 'Pen Stand':
        return ['360° Silent Bearing', 'Solid Barrels', 'Card Slot'];
      case 'Desk Organiser':
        return ['Dual-Tone Finish', 'Modular Trays'];
      case 'Paper Weight':
        return ['Solid 320g Dome', 'Mirror Finish', 'Hexagonal MS'];
      case 'Corporate Gifts in Metal':
        return ['Steel Coasters', 'Card Cases', 'VIP Hampers'];
      case 'Table Calendar':
        return ['Perpetual Steel', '365-Day Recall', 'Standing Docks'];
      default:
        return ['Precision Tooling', 'Laser Logo Ready', 'Buffer Stock'];
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick(category);
    } else {
      navigate(`/products?category=${encodeURIComponent(category)}`);
    }
  };

  const highlights = getCategoryHighlights(category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onClick={handleClick}
      className="group relative h-[360px] sm:h-[380px] rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-200/90 hover:border-[#DD2B1C]/50 flex flex-col justify-between p-6 sm:p-7"
      id={`category-card-${category.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Background Image with Zoom & Dark Vignette */}
      <img
        src={details.image}
        alt={details.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
        loading="lazy"
      />

      {/* Multi-Stop Cinematic Gradient Overlay for crisp text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111212] via-[#151616]/75 to-[#151616]/35 group-hover:via-[#151616]/85 transition-colors duration-300" />

      {/* Top Bar: Icon Badge + Ready Stock Count Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-white flex items-center justify-center group-hover:bg-[#DD2B1C] group-hover:border-[#DD2B1C] transition-all duration-300 shadow-sm">
          {getCategoryIcon(category)}
        </div>

        <span className="bg-white/95 backdrop-blur-md text-[#151616] text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[#DD2B1C]" />
          <span>{details.count}+ Models Ready</span>
        </span>
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 text-white flex flex-col justify-end space-y-3">
        <div>
          <span className="text-[11px] font-bold tracking-widest text-red-400 uppercase block mb-1">
            {details.subtitle}
          </span>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-white transition-colors">
            {details.title}
          </h3>
          <p className="text-xs text-gray-300 line-clamp-2 mt-1.5 leading-relaxed font-normal">
            {details.description}
          </p>
        </div>

        {/* Feature Micro-Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {highlights.map((chip, idx) => (
            <span
              key={idx}
              className="bg-white/10 backdrop-blur-xs text-white/90 text-[10px] font-medium px-2 py-0.5 rounded-md border border-white/10"
            >
              {chip}
            </span>
          ))}
        </div>

        {/* Action Link Button */}
        <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs font-bold text-white group-hover:text-[#DD2B1C] transition-colors duration-200">
          <span>Explore Full Range</span>
          <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#DD2B1C] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default CategoryCard;
