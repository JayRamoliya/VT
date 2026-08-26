import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { generateWhatsAppLink } = useQuote();

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = generateWhatsAppLink(
    "Thank you for contacting VARAIA TRADERS – Rajkot.\nI'm looking for premium Steel/MS corporate gifting products in bulk."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none no-print">
      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
            onClick={scrollToTop}
            id="scroll-to-top-btn"
            aria-label="Scroll to top"
            className="pointer-events-auto w-11 h-11 rounded-full bg-[#151616] text-white flex items-center justify-center shadow-lg hover:bg-black transition-colors duration-200 cursor-pointer border border-white/20"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Call Button */}
      <motion.a
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        href="tel:+917567999989"
        id="floating-call-btn"
        aria-label="Call Sales Desk"
        className="pointer-events-auto flex items-center gap-2 bg-[#151616] text-white pl-3.5 pr-4 py-2.5 rounded-full shadow-xl hover:bg-black transition-colors duration-200 border border-white/10 group cursor-pointer"
      >
        <div className="w-6 h-6 rounded-full bg-[#DD2B1C] flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-200">
          <Phone className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          75679 99989
        </span>
      </motion.a>

      {/* Floating WhatsApp Button */}
      <motion.a
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label="WhatsApp Corporate Enquiry"
        className="pointer-events-auto flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white pl-3.5 pr-4 py-2.5 rounded-full shadow-xl transition-colors duration-200 cursor-pointer"
      >
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
          <MessageSquare className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="text-xs font-bold tracking-wide">
          WhatsApp RFQ
        </span>
      </motion.a>
    </div>
  );
};
