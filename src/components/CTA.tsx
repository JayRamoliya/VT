import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, FileText, Sparkles, CheckCircle2 } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { corporateEase } from './MotionWrappers';

interface CTAProps {
  title?: string;
  subtitle?: string;
}

export const CTA: React.FC<CTAProps> = ({
  title = 'Looking for Bulk Corporate Gifts?',
  subtitle = 'Get direct factory pricing from our Rajkot manufacturing facility. Over 1000+ cartons in ready stock with high-speed fiber laser marking and pan-India express dispatch.'
}) => {
  const { openQuoteModal, generateWhatsAppLink } = useQuote();

  return (
    <section className="bg-[#007BFF] text-white py-16 sm:py-20 relative overflow-hidden">
      {/* Background Architectural Patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Mini Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: corporateEase }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/20 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-xs shadow-2xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          <span>Minimum Order Quantity: 100+ Pieces</span>
        </motion.div>

        {/* Big Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: corporateEase }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-4xl mx-auto leading-tight"
        >
          {title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: corporateEase }}
          className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mt-4 leading-relaxed font-medium"
        >
          {subtitle}
        </motion.p>

        {/* Core Assurances */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: corporateEase }}
          className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs font-semibold text-white/95"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-white" />
            1000+ Cartons Ready Stock
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-white" />
            Custom Laser Logo Marking
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-white" />
            Pan India & Global Supply
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-white" />
            Direct Factory Volume Rates
          </span>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.4, ease: corporateEase }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-whatsapp-btn"
            className="bg-[#151616] hover:bg-black text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center gap-2.5 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-green-400" />
            <span>WhatsApp Now</span>
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openQuoteModal()}
            id="cta-quote-btn"
            className="bg-white hover:bg-gray-100 text-[#151616] px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center gap-2.5 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#007BFF]" />
            <span>Request Quote</span>
          </motion.button>
        </motion.div>

        {/* Direct Phone Assistance */}
        <div className="mt-8 text-xs text-white/80">
          Prefer a direct phone conversation? Call our Rajkot sales desk at{' '}
          <a href="tel:+917567999989" className="font-bold underline hover:text-white transition-colors">
            +91 75679 99989
          </a>{' '}
          (Mon - Sat, 9:00 AM – 7:00 PM IST)
        </div>
      </div>
    </section>
  );
};
