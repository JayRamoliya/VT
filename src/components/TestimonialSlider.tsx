import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, Building, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, CLIENT_LOGOS } from '../data/testimonials';
import { corporateEase } from './MotionWrappers';

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: corporateEase }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#DD2B1C] block mb-2">
            Corporate Trust & Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#151616] tracking-tight">
            What Procurement Leaders Say About Varaia Traders
          </h2>
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            Supplying over 500+ enterprises, institutions, and B2B corporate distributors across India, the Middle East, and overseas.
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: corporateEase }}
          className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-xl p-8 sm:p-12 relative"
        >
          <Quote className="absolute top-6 right-8 w-16 h-16 text-gray-100 pointer-events-none" />

          {/* Rating Stars */}
          <div className="flex items-center gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-xs font-bold text-gray-500">5.0 Verified Corporate Feedback</span>
          </div>

          {/* Animated Quote Text & Author */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: corporateEase }}
            >
              {/* Quote Text */}
              <blockquote className="text-base sm:text-xl font-medium text-[#151616] leading-relaxed italic mb-8 min-h-[70px]">
                "{current.quote}"
              </blockquote>

              {/* Author Details & Supplied Product */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-100">
                <div>
                  <h4 className="font-bold text-base text-[#151616] flex items-center gap-1.5">
                    {current.clientName}
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">
                    {current.designation} • <span className="text-gray-800 font-semibold">{current.company}</span>
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    {current.location}
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-left sm:text-right shadow-2xs">
                  <span className="block text-[10px] font-bold text-gray-500 uppercase">Product Supplied</span>
                  <span className="block text-xs font-bold text-[#151616]">{current.productSupplied}</span>
                  <span className="block text-[11px] font-bold text-[#DD2B1C] mt-0.5">Order Batch: {current.orderVolume}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === i ? 'w-8 bg-[#DD2B1C]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-gray-300 hover:border-[#151616] flex items-center justify-center text-gray-700 hover:text-[#151616] transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-[#151616] hover:bg-[#DD2B1C] flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Corporate Trust Badge Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: corporateEase }}
          className="mt-14 pt-8 border-t border-gray-200"
        >
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
            Supplying Vendors & Corporates Across Leading Industry Verticals
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {CLIENT_LOGOS.map((name, idx) => (
              <motion.div 
                whileHover={{ y: -2 }}
                key={idx}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-xs font-bold text-gray-600 shadow-2xs hover:border-gray-300 transition-colors"
              >
                <Building className="w-3.5 h-3.5 text-[#DD2B1C]" />
                <span>{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
