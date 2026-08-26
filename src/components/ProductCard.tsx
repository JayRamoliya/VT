import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Check, 
  Sparkles, 
  Layers, 
  MessageSquare, 
  FileText, 
  Box,
  ArrowRight
} from 'lucide-react';
import { Product } from '../types';
import { useQuote } from '../context/QuoteContext';

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const { openQuoteModal } = useQuote();
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (onViewDetails) {
      onViewDetails(product);
    } else {
      navigate(`/products/${product.slug || product.id}`);
    }
  };

  const handleWhatsAppEnquiry = (e: React.MouseEvent) => {
    e.stopPropagation();
    const phone = '917567999989';
    const msg = `Hello VARAIA TRADERS, I'm interested in bulk enquiry for *${product.name}* (Item Code: ${product.itemCode}).\nMaterial: ${product.material}\nMOQ: ${product.minOrderQty} pcs.\nPlease share best bulk quotation & delivery schedule.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    openQuoteModal(product);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      onClick={handleCardClick}
      className="group bg-white rounded-2xl border border-gray-200/90 hover:border-gray-300 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer relative"
      id={`product-card-${product.id}`}
    >
      {/* Top Image Container */}
      <div className="relative w-full aspect-4/3 bg-gray-50 overflow-hidden flex items-center justify-center p-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center rounded-xl group-hover:scale-[1.04] transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Badges Over Image */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          <span className="bg-[#151616]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-xs">
            {product.category}
          </span>
          {product.laserMarkingAvailable && (
            <span className="bg-[#DD2B1C] text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-xs">
              <Sparkles className="w-2.5 h-2.5" /> Laser Marking
            </span>
          )}
        </div>

        {/* Ready Stock Indicator */}
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-[#151616] text-[10px] font-bold px-2.5 py-1 rounded-md border border-gray-200 shadow-xs flex items-center gap-1">
          <Box className="w-3 h-3 text-green-600" />
          <span>Ready Stock</span>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Item Code & MOQ */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2 font-medium">
            <span className="font-mono bg-gray-100 px-2 py-0.5 rounded text-[11px] text-gray-700 font-bold">
              {product.itemCode}
            </span>
            <span className="text-[#DD2B1C] font-bold">
              MOQ: {product.minOrderQty} pcs
            </span>
          </div>

          {/* Product Title */}
          <h3 className="font-bold text-sm sm:text-base text-[#151616] group-hover:text-[#DD2B1C] transition-colors duration-200 line-clamp-2 leading-snug">
            {product.name}
          </h3>

          {/* Material & Finish */}
          <div className="mt-3 space-y-1.5 text-xs text-gray-600">
            <p className="flex items-center gap-1.5 truncate">
              <Layers className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              <span className="font-medium text-gray-800">Material:</span> {product.material}
            </p>
            <p className="flex items-center gap-1.5 truncate text-[11px] text-gray-500">
              <Check className="w-3 h-3 text-green-600 flex-shrink-0" />
              <span className="truncate">{product.finish}</span>
            </p>
          </div>
        </div>

        {/* Card Actions */}
        <div className="mt-4 pt-3.5 border-t border-gray-100 grid grid-cols-2 gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleQuoteClick}
            className="w-full bg-[#151616] hover:bg-[#DD2B1C] text-white py-2 px-2.5 rounded-xl text-xs font-bold transition-colors duration-250 flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
            title="Add to Bulk RFQ"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Get Quote</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleWhatsAppEnquiry}
            className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 py-2 px-2.5 rounded-xl text-xs font-bold transition-colors duration-250 flex items-center justify-center gap-1.5 cursor-pointer"
            title="Instant WhatsApp Enquiry"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
