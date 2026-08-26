import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Download, 
  CheckCircle2, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  Building, 
  Phone, 
  Mail,
  ArrowRight
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { corporateEase } from './MotionWrappers';

export const CatalogueDownloadModal: React.FC = () => {
  const { isCatalogueModalOpen, closeCatalogueModal } = useQuote();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDownloaded(true);

    const basePhone = '917567999989';
    const text = `Hello VARAIA TRADERS, I downloaded your corporate PDF catalogue for ${company || 'our company'}.\nBuyer: ${name} (${phone}, ${email}).\nPlease share current bulk pricing sheet.`;
    
    // Simulate instant download notification
    setTimeout(() => {
      window.open(`https://wa.me/${basePhone}?text=${encodeURIComponent(text)}`, '_blank');
    }, 800);
  };

  return (
    <AnimatePresence>
      {isCatalogueModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-xs"
            onClick={closeCatalogueModal}
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.35, ease: corporateEase }}
            className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl z-10"
          >
            {/* Header */}
            <div className="bg-[#151616] text-white p-6 relative">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 bg-[#DD2B1C] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                  <Sparkles className="w-3 h-3" />
                  <span>2026 Master Catalogue</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeCatalogueModal}
                  className="text-gray-400 hover:text-white p-1 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              <h3 className="text-xl font-bold mt-3 text-white">
                Download Complete Product PDF
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                Access technical dimensions, material grades (SS 304/MS), laser branding zones, and carton packaging standards.
              </p>
            </div>

            {/* Form */}
            <div className="p-6 sm:p-8">
              {isDownloaded ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-[#151616]">
                    Catalogue Prepared for Download
                  </h4>
                  <p className="text-xs text-gray-600 max-w-xs mx-auto">
                    Thank you {name}. A direct PDF link and B2B volume pricing guide is also shared to your WhatsApp/Email.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={closeCatalogueModal}
                    className="bg-[#151616] text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Close Window
                  </motion.button>
                </div>
              ) : (
                <form onSubmit={handleDownload} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Mehta"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#DD2B1C] focus:border-transparent outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Company / Organization Name *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Reliance Industries, Infosys"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#DD2B1C] focus:border-transparent outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        WhatsApp Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#DD2B1C] focus:border-transparent outline-hidden"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          placeholder="vikram@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#DD2B1C] focus:border-transparent outline-hidden"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-[#DD2B1C] hover:bg-[#b82215] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF Brochure (57+ Items)</span>
                    </motion.button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                    <span>Direct Factory Price List • No spam guarantee</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
