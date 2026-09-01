import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { corporateEase } from './MotionWrappers';

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

const DEFAULT_FAQS: FAQItem[] = [
  {
    question: 'What is the Minimum Order Quantity (MOQ) for corporate gifts?',
    answer: 'Our standard MOQ across stainless steel and mild steel corporate gifts is 100 pieces per design. For high-value custom mementos and monolithic metal awards, we also accept tiered project batches starting at 50–100 units with individualized recipient laser names.',
    category: 'Ordering & MOQ'
  },
  {
    question: 'How fast can you dispatch ready stock orders from Rajkot?',
    answer: 'We maintain over 1,000+ cartons of ready buffer stock in our Rajkot warehouse for all standard models (Mobile Stands, Pen Caddies, Paper Weights, Desk Hubs). Standard orders with custom laser logo marking are processed and dispatched within 48 to 72 business hours.',
    category: 'Lead Times & Stock'
  },
  {
    question: 'What type of laser marking technology is used for corporate branding?',
    answer: 'We deploy in-house 50W MOPA and CW Fiber Laser systems. Fiber laser annealing creates a permanent, high-contrast, indelible dark or silver oxidation mark flush with the metal surface. Unlike screen printing, it never peels, fades, or scratches off over the life of the product.',
    category: 'Customization'
  },
  {
    question: 'Do you offer Pan-India multi-location split dispatch and export shipping?',
    answer: 'Yes. We routinely handle multi-location split dispatches for corporate clients across India—delivering individual carton batches directly to regional offices, plants, or dealer branches in Mumbai, Delhi NCR, Bengaluru, Chennai, Hyderabad, Kolkata, and Pune. We also arrange sea/air export shipments to the UAE, Middle East, and East Africa with complete export documentation.',
    category: 'Logistics'
  },
  {
    question: 'What packaging options are available for corporate presentation?',
    answer: 'All products are supplied with premium presentation packaging. Options include rigid magnetic gift boxes, royal blue/red velvet-lined caskets with brass locks (for awards & trophies), and eco-luxury kraft presentation sleeves. Custom-printed outer sleeves with company branding are also available for bulk volumes.',
    category: 'Packaging'
  },
  {
    question: 'Are GST invoices provided for corporate tax credit?',
    answer: 'Yes, 100%. Varaia Traders is a registered manufacturer with GST (24DSPPS1285F1ZD) and UDYAM certification (UDYAM-GJ-20-0040020). All corporate transactions include 100% compliant GST B2B tax invoices with appropriate HSN codes for full input tax credit.',
    category: 'Billing & Compliance'
  }
];

interface FAQProps {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
}

export const FAQ: React.FC<FAQProps> = ({
  faqs = DEFAULT_FAQS,
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about manufacturing, bulk ordering, laser marking, and Pan-India delivery.'
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: corporateEase }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#007BFF] text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Corporate Buyer Guidance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#151616] tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Accordion List with Smooth Height Animation */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: corporateEase }}
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-[#007BFF]/40 bg-gray-50/50 shadow-sm' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#151616] leading-snug">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: corporateEase }}
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? 'bg-[#007BFF] text-white' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: corporateEase }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100/60 pt-3">
                        <p>{faq.answer}</p>
                        {faq.category && (
                          <span className="inline-block mt-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-gray-200">
                            {faq.category}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
