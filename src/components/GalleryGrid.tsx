import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  ZoomIn, 
  MessageSquare, 
  Layers
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gallery';
import { GalleryItem } from '../types';
import { useQuote } from '../context/QuoteContext';
import { corporateEase } from './MotionWrappers';

export const GalleryGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const { openQuoteModal } = useQuote();

  const categories = [
    'All',
    'Corporate Gifts',
    'Awards',
    'Trophies',
    'Laser Marking',
    'Events',
    'Office Accessories'
  ];

  const filteredItems = selectedCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const handleWhatsAppInquiry = (item: GalleryItem) => {
    const phone = '917567999989';
    const text = `Hello VARAIA TRADERS, I saw this design in your Gallery showcase:\n*${item.title}*\nCategory: ${item.category}\nMaterial: ${item.materialUsed}\n\nPlease share quotation for bulk order with custom branding.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {categories.map((cat) => (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#151616] text-white shadow-md'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Masonry / Pinterest Style Grid with Fade In Animations */}
      <motion.div 
        layout
        className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: corporateEase }}
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="break-inside-avoid bg-white rounded-3xl border border-gray-200 shadow-xs hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer relative"
            >
              {/* Image Container with Hover Zoom 1.05 */}
              <div className="relative overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#151616]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-[#151616] flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Description Box */}
              <div className="p-4 sm:p-5">
                <h4 className="font-bold text-sm text-[#151616] group-hover:text-[#DD2B1C] transition-colors duration-200 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                  <span className="flex items-center gap-1 font-medium truncate">
                    <Layers className="w-3 h-3 text-[#DD2B1C]" />
                    {item.materialUsed}
                  </span>
                  {item.clientType && (
                    <span className="text-gray-400 truncate max-w-[120px]">
                      {item.clientType}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Smooth Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setActiveItem(null)}
            />

            {/* Lightbox Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.35, ease: corporateEase }}
              className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col md:flex-row"
            >
              {/* Modal Image */}
              <div className="md:w-3/5 bg-gray-900 flex items-center justify-center relative overflow-hidden">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full max-h-[500px] object-contain"
                />
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-3 right-3 md:hidden bg-black/60 text-white p-2 rounded-full cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Sidebar Content */}
              <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-red-50 text-[#DD2B1C] text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border border-red-100">
                      {activeItem.category}
                    </span>
                    <button
                      onClick={() => setActiveItem(null)}
                      className="hidden md:block text-gray-400 hover:text-gray-700 p-1 cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <h3 className="text-lg font-bold text-[#151616] leading-snug">
                    {activeItem.title}
                  </h3>

                  <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                    {activeItem.description}
                  </p>

                  <div className="mt-6 space-y-2.5 text-xs">
                    <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                      <span className="block text-[10px] font-bold text-gray-400 uppercase">Material Specification</span>
                      <span className="font-semibold text-gray-800">{activeItem.materialUsed}</span>
                    </div>

                    {activeItem.clientType && (
                      <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                        <span className="block text-[10px] font-bold text-gray-400 uppercase">Industry Deployment</span>
                        <span className="font-semibold text-gray-800">{activeItem.clientType}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 pt-4 border-t border-gray-100 space-y-2.5">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setActiveItem(null);
                      openQuoteModal();
                    }}
                    className="w-full bg-[#DD2B1C] hover:bg-[#b82215] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Enquire This Design in Bulk</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleWhatsAppInquiry(activeItem)}
                    className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 py-2.5 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Specification Query</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
