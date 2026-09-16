import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  Check,
  Sparkles,
  Layers,
  MessageSquare,
  FileText,
  Box,
  ArrowRight,
} from "lucide-react";
import { Product } from "../types";
import { useQuote } from "../context/QuoteContext";

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
}) => {
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
    const phone = "917567999989";
    const msg = `Hello VARAIA TRADERS, I'm interested in bulk enquiry for *${product.name}* (Item Code: ${product.itemCode}).\nMaterial: ${product.material}\nPlease share best bulk quotation & delivery schedule.`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    openQuoteModal(product);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-2xl border border-gray-200/90 hover:border-gray-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer relative"
      id={`product-card-${product.id}`}
    >
      <div className="relative w-full aspect-[4/3] bg-gray-50 overflow-hidden flex items-center justify-center p-4">
        <div className="relative w-full h-full overflow-hidden rounded-xl">
          <motion.img
            src={product.images[0]}
            alt={product.name}
            initial={{
              clipPath: "inset(0 0 0 100%)",
            }}
            whileInView={{
              clipPath: "inset(0 0 0 0%)",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 3.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute bottom-2 right-2 flex flex-col gap-1 z-10">
          <span className="bg-[#151616]/90 text-white text-[9px] font-semibold px-2 py-0.5 rounded uppercase tracking-wide">
            {product.category}
          </span>

          {product.laserMarkingAvailable && (
            <span className="bg-[#007BFF] text-white text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
              <Sparkles className="w-2 h-2" />
              Laser Marking
            </span>
          )}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2 font-medium">
            <span className="font-mono bg-gray-100 px-2 py-0.5 rounded text-[11px] text-gray-700 font-bold">
              {product.itemCode}
            </span>
            {/* <span className="text-[#007BFF] font-bold">
              MOQ: {product.minOrderQty} pcs
            </span> */}
          </div>

          <h3 className="font-bold text-sm sm:text-base text-[#151616] group-hover:text-[#007BFF] transition-colors duration-200 line-clamp-2 leading-snug">
            {product.name}
          </h3>
          <div className="mt-3 space-y-1.5 text-xs text-gray-600">
            <p className="flex items-center gap-1.5 truncate">
              <Layers className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              <span className="font-medium text-gray-800">Material:</span>{" "}
              {product.material}
            </p>
            <p className="flex items-center gap-1.5 truncate text-[11px] text-gray-500">
              <Check className="w-3 h-3 text-green-600 flex-shrink-0" />
              <span className="truncate">{product.finish}</span>
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-[11px] font-bold text-center py-2 px-3 rounded-lg shadow-sm">
            MOQ: 100 - 10000+ Qty Depends on Model
          </div>
        </div>

        <div className="pt-3.5 border-t border-gray-100 grid grid-cols-2 gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleQuoteClick}
            className="w-full bg-[#151616] hover:bg-[#007BFF] text-white py-2 px-2.5 rounded-xl text-xs font-bold transition-colors duration-250 flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
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
    </div>
  );
};
