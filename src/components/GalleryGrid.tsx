import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, ZoomIn, MessageSquare, Layers } from "lucide-react";
import { PRODUCTS } from "../data/products";
import { GalleryItem } from "../types";
import { useQuote } from "../context/QuoteContext";
import { corporateEase } from "./MotionWrappers";

export const GalleryGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const { openQuoteModal } = useQuote();

  const categories = [
    "All",
    "Mobile Stand",
    "Coaster Set",
    "Desk Holder",
    "Card Holder",
    "Noteped & Pen Holder",
    "Noteped Holder",
    "Paper Weight",
    "Charging Stand",
    "Calendar",
  ];

  const galleryItems = PRODUCTS.map((product) => ({
    id: product.id,
    title: product.name,
    image: product.images?.[0] || "",
    category: product.category,
    description:
      product.shortDescription ||
      product.description ||
      `${product.material} • ${product.finish}`,
    materialUsed: product.material,
    clientType: product.itemCode,
  }));

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const handleWhatsAppInquiry = (item: GalleryItem) => {
    const phone = "917567999989";
    const text = `Hello VARAIA TRADERS, I saw this design in your Gallery showcase:\n*${item.title}*\nCategory: ${item.category}\nMaterial: ${item.materialUsed}\n\nPlease share quotation for bulk order with custom branding.`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
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
                ? "bg-[#151616] text-white shadow-md"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Masonry / Pinterest Style Grid with Fade In Animations */}
      {/* <motion.div
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
              <div className="relative overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#151616]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-[#151616] flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <h4 className="font-bold text-sm text-[#151616] group-hover:text-[#007BFF] transition-colors duration-200 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                  <span className="flex items-center gap-1 font-medium truncate">
                    <Layers className="w-3 h-3 text-[#007BFF]" />
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
      </motion.div> */}

      {/* Masonry / Pinterest Style Grid */}
      <motion.div
        layout
        className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 px-2 sm:px-4 max-w-7xl mx-auto"
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
              className="break-inside-avoid bg-white rounded-2xl border border-gray-200 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer relative mb-4"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#151616]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-white text-[#151616] flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4">
                <h4 className="font-bold text-xs sm:text-sm text-[#151616] group-hover:text-[#007BFF] transition-colors duration-200 leading-snug">
                  {item.title}
                </h4>

                <div className="mt-2.5 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-500">
                  <span className="flex items-center gap-1 font-medium truncate">
                    <Layers className="w-3 h-3 text-[#007BFF]" />
                    {item.materialUsed}
                  </span>

                  {item.clientType && (
                    <span className="text-gray-400 truncate max-w-[80px]">
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
          // <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          //   <motion.div
          //     initial={{ opacity: 0 }}
          //     animate={{ opacity: 1 }}
          //     exit={{ opacity: 0 }}
          //     transition={{ duration: 0.3 }}
          //     className="fixed inset-0 bg-black/80 backdrop-blur-md"
          //     onClick={() => setActiveItem(null)}
          //   />

          //   <motion.div
          //     initial={{ opacity: 0, scale: 0.92, y: 20 }}
          //     animate={{ opacity: 1, scale: 1, y: 0 }}
          //     exit={{ opacity: 0, scale: 0.92, y: 20 }}
          //     transition={{ duration: 0.35, ease: corporateEase }}
          //     className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col md:flex-row"
          //   >
          //     <div className="md:w-3/5 bg-gray-900 flex items-center justify-center relative overflow-hidden">
          //       <img
          //         src={activeItem.image}
          //         alt={activeItem.title}
          //         className="w-full h-full max-h-[500px] object-contain"
          //       />
          //       <button
          //         onClick={() => setActiveItem(null)}
          //         className="absolute top-3 right-3 md:hidden bg-black/60 text-white p-2 rounded-full cursor-pointer"
          //       >
          //         <X className="w-5 h-5" />
          //       </button>
          //     </div>

          //     <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          //       <div>
          //         <div className="flex items-center justify-between mb-3">
          //           <span className="bg-red-50 text-[#007BFF] text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border border-red-100">
          //             {activeItem.category}
          //           </span>
          //           <button
          //             onClick={() => setActiveItem(null)}
          //             className="hidden md:block text-gray-400 hover:text-gray-700 p-1 cursor-pointer"
          //           >
          //             <X className="w-5 h-5" />
          //           </button>
          //         </div>

          //         <h3 className="text-lg font-bold text-[#151616] leading-snug">
          //           {activeItem.title}
          //         </h3>

          //         <div className="mt-6 space-y-2.5 text-xs">
          //           <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
          //             <span className="block text-[10px] font-bold text-gray-400 uppercase">
          //               Material Specification
          //             </span>
          //             <span className="font-semibold text-gray-800">
          //               {activeItem.materialUsed}
          //             </span>
          //           </div>
          //         </div>
          //       </div>

          //       <div className="mt-6 pt-4 border-t border-gray-100 space-y-2.5">
          //         <motion.button
          //           whileHover={{ scale: 1.02 }}
          //           whileTap={{ scale: 0.98 }}
          //           onClick={() => {
          //             setActiveItem(null);
          //             openQuoteModal();
          //           }}
          //           className="w-full bg-[#007BFF] hover:bg-[#b82215] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          //         >
          //           <Sparkles className="w-3.5 h-3.5" />
          //           <span>Enquire This Design in Bulk</span>
          //         </motion.button>

          //         <motion.button
          //           whileHover={{ scale: 1.02 }}
          //           whileTap={{ scale: 0.98 }}
          //           onClick={() => handleWhatsAppInquiry(activeItem)}
          //           className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 py-2.5 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
          //         >
          //           <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
          //           <span>WhatsApp Specification Query</span>
          //         </motion.button>
          //       </div>
          //     </div>
          //   </motion.div>
          // </div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.35, ease: corporateEase }}
              className="relative bg-white rounded-3xl max-w-6xl w-full overflow-hidden shadow-2xl z-10 max-h-[92vh] flex flex-col lg:flex-row"
            >
              {/* Product Image */}
              <div className="lg:w-[55%] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative p-6">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-auto max-h-[600px] object-contain"
                />

                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 bg-white shadow-lg text-gray-700 hover:text-red-600 p-2 rounded-full cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Product Details */}
              <div className="lg:w-[45%] p-5 sm:p-7 overflow-y-auto">
                {/* Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-red-50 text-[#007BFF] border border-red-100 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                    {activeItem.category}
                  </span>

                  {activeItem.inStock && (
                    <span className="bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full text-[11px] font-semibold">
                      In Stock
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-2xl font-black text-[#151616] leading-tight">
                  {activeItem.name || activeItem.title}
                </h2>

                {/* Item Code */}
                {activeItem.itemCode && (
                  <p className="text-sm text-gray-500 mt-2">
                    Item Code:{" "}
                    <span className="font-semibold">{activeItem.itemCode}</span>
                  </p>
                )}

                {/* Description */}
                {activeItem.description && (
                  <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                    {activeItem.description}
                  </p>
                )}

                {/* Specifications */}
                <div className="mt-6">
                  <h3 className="font-bold text-[#151616] mb-3">
                    Product Specifications
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    {activeItem.material && (
                      <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                        <div className="text-[10px] uppercase text-gray-400 font-bold">
                          Material
                        </div>
                        <div className="text-sm font-semibold mt-1">
                          {activeItem.material}
                        </div>
                      </div>
                    )}

                    {activeItem.weight && (
                      <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                        <div className="text-[10px] uppercase text-gray-400 font-bold">
                          Weight
                        </div>
                        <div className="text-sm font-semibold mt-1">
                          {activeItem.weight}
                        </div>
                      </div>
                    )}

                    {activeItem.finish && (
                      <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 col-span-2">
                        <div className="text-[10px] uppercase text-gray-400 font-bold">
                          Finish
                        </div>
                        <div className="text-sm font-semibold mt-1">
                          {activeItem.finish}
                        </div>
                      </div>
                    )}

                    {activeItem.minOrderQty && (
                      <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                        <div className="text-[10px] uppercase text-gray-400 font-bold">
                          MOQ
                        </div>
                        <div className="text-sm font-semibold mt-1">
                          {activeItem.minOrderQty} Pcs
                        </div>
                      </div>
                    )}

                    {activeItem.estimatedLeadTime && (
                      <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                        <div className="text-[10px] uppercase text-gray-400 font-bold">
                          Lead Time
                        </div>
                        <div className="text-sm font-semibold mt-1">
                          {activeItem.estimatedLeadTime}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Color Options */}
                {activeItem.colorOptions?.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-bold text-[#151616] mb-3">
                      Available Finishes
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {activeItem.colorOptions.map((color: string) => (
                        <span
                          key={color}
                          className="px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-700"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                <div className="mt-6 space-y-2">
                  {activeItem.laserMarkingAvailable && (
                    <div className="flex items-center gap-2 text-sm text-green-700">
                      ✓ Custom Laser Marking Available
                    </div>
                  )}

                  {activeItem.readyStockCount && (
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      📦 {activeItem.readyStockCount}
                    </div>
                  )}

                  {activeItem.packaging && (
                    <div className="flex items-start gap-2 text-sm text-gray-700">
                      🎁 {activeItem.packaging}
                    </div>
                  )}
                </div>

                {/* Buttons */}
                <div className="mt-8 space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setActiveItem(null);
                      openQuoteModal();
                    }}
                    className="w-full bg-[#007BFF] hover:bg-[#c52417] text-white py-3.5 rounded-xl font-bold text-sm transition-all cursor-pointer"
                  >
                    Request Bulk Quotation
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleWhatsAppInquiry(activeItem)}
                    className="w-full bg-green-50 border border-green-200 text-green-700 py-3.5 rounded-xl font-bold text-sm transition-all cursor-pointer"
                  >
                    WhatsApp Inquiry
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
