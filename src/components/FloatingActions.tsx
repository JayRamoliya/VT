import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
  FaTimes,
} from "react-icons/fa";
import { useQuote } from "../context/QuoteContext";

const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { generateWhatsAppLink } = useQuote();

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", checkScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappUrl = generateWhatsAppLink(
    "Hello, I'm interested in your corporate gifting products."
  );

  const icons = [
  <FaWhatsapp size={28} />,
  <FaPhoneAlt size={24} />,
  <FaEnvelope size={24} />,
];

const [iconIndex, setIconIndex] = useState(0);

useEffect(() => {
  if (isOpen) return;

  const interval = setInterval(() => {
    setIconIndex((prev) => (prev + 1) % icons.length);
  }, 2500);

  return () => clearInterval(interval);
}, [isOpen]);

  return (
    <>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-50 w-11 h-11 rounded-full bg-[#151616] text-white flex items-center justify-center shadow-xl"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
      <div className="fixed bottom-6 right-6 z-[999] flex items-center">

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 120 }}
              transition={{ duration: 0.25 }}
              className="mr-3 flex items-center gap-3 bg-white rounded-full px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-slate-200"
            >
              {/* WhatsApp */}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-md transition-all duration-200 group-hover:scale-110">
                  <FaWhatsapp size={22} />
                </div>
              </a>

              {/* Call */}

              <a
                href="tel:+917567999989"
                className="group"
              >
                <div className="w-10 h-10 rounded-full bg-[#007BFF] text-white flex items-center justify-center shadow-md transition-all duration-200 group-hover:scale-110">
                  <FaPhoneAlt size={18} />
                </div>
              </a>

              {/* Email */}

              <a
                href="mailto:jignesh@varaiatraders.com"
                className="group"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 text-[#007BFF] border border-blue-100 flex items-center justify-center shadow-md transition-all duration-200 group-hover:scale-110">
                  <FaEnvelope size={18} />
                </div>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Button */}

        {/* <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#007BFF] text-white shadow-[0_10px_35px_rgba(0,123,255,0.45)] flex items-center justify-center"
        >
          {isOpen ? (
            <FaTimes size={24} />
          ) : (
            <FaWhatsapp size={32} />
          )}
        </motion.button> */}

        <motion.button
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => setIsOpen(!isOpen)}
  className="w-14 h-14 rounded-full bg-[#007BFF] text-white shadow-[0_10px_35px_rgba(0,123,255,0.45)] flex items-center justify-center overflow-hidden"
>
  {isOpen ? (
    <FaTimes size={24} />
  ) : (
    <AnimatePresence mode="wait">
      <motion.div
        key={iconIndex}
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -15 }}
        transition={{ duration: 0.35 }}
      >
        {icons[iconIndex]}
      </motion.div>
    </AnimatePresence>
  )}
</motion.button>
      </div>
    </>
  );
};

export default FloatingActions;