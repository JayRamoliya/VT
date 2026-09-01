import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, ZoomIn, MessageSquare, Layers } from "lucide-react";
import { PRODUCTS } from "../data/products";
import { GalleryItem } from "../types";
import { useQuote } from "../context/QuoteContext";
import { corporateEase } from "./MotionWrappers";
import { useNavigate } from "react-router-dom";

export const GalleryGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const { openQuoteModal } = useQuote();
  const navigate = useNavigate();

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
    materialUsed: product.material,
    clientType: product.itemCode,
    slug: product.slug,
    height: product.height,
    length: product.length,
    width: product.width,
    diameter: product.diameter,
    plate: product.plate,
    weight: product.weight,
    ss: product.ss,
    thickness: product.thickness,
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
              <div className="relative overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
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

      {/* <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setActiveItem(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.35, ease: corporateEase }}
              className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col md:flex-row"
            >
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

              <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-red-50 text-[#007BFF] text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border border-red-100">
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

                  <div className="mt-5 space-y-2">
                    {[
                      { label: "Height", value: activeItem.height },
                      { label: "Length", value: activeItem.length },
                      { label: "Width", value: activeItem.width },
                      { label: "Diameter", value: activeItem.diameter },
                      { label: "Plate", value: activeItem.plate },
                      { label: "Weight", value: activeItem.weight },
                      { label: "S.S. Weight", value: activeItem.ss },
                      { label: "Material", value: activeItem.material },
                      { label: "Thickness", value: activeItem.thickness },
                    ]
                      .filter(
                        (item) =>
                          item.value &&
                          item.value !== "-" &&
                          item.value.trim() !== "",
                      )
                      .map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                        >
                          <span className="text-xs text-gray-500">
                            {item.label}
                          </span>

                          <span className="text-xs font-semibold text-[#151616] text-right">
                            {item.value}
                          </span>
                        </div>
                      ))}
                  </div>

                  <div className="mt-6 space-y-2.5 text-xs">
                    <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                      <span className="block text-[10px] font-bold text-gray-400 uppercase">
                        Material Specification
                      </span>
                      <span className="font-semibold text-gray-800">
                        {activeItem.materialUsed}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 space-y-2.5">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setActiveItem(null);
                      navigate(`/products/${activeItem.slug}`);
                    }}
                    className="w-full bg-[#007BFF] hover:bg-[#005fd1] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>View Product Details</span>
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
      </AnimatePresence> */}

      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
              onClick={() => setActiveItem(null)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-2xl"
            >
              {/* Close */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur p-2 rounded-full shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="bg-gray-50 p-6 sm:p-10">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full max-h-[450px] object-contain mx-auto"
                />
              </div>

              {/* Info */}
              <div className="p-6 text-center border-t border-gray-100">
                <h3 className="text-xl sm:text-2xl font-bold text-[#151616]">
                  {activeItem.title}
                </h3>

                {activeItem.itemCode && (
                  <p className="mt-2 text-sm text-gray-500">
                    {activeItem.itemCode}
                  </p>
                )}

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setActiveItem(null);
                      navigate(`/products/${activeItem.slug}`);
                    }}
                    className="flex-1 bg-[#007BFF] hover:bg-[#0069db] text-white py-3 rounded-xl font-semibold"
                  >
                    View Product Details
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleWhatsAppInquiry(activeItem)}
                    className="flex-1 border border-green-200 bg-green-50 hover:bg-green-100 text-green-700 py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
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
