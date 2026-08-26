import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  Type, 
  Upload, 
  MessageSquare, 
  FileText, 
  Check,
  RotateCcw,
  Sliders
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { corporateEase } from './MotionWrappers';

export const LaserMarkingPreview: React.FC = () => {
  const { 
    isLaserPreviewModalOpen, 
    closeLaserPreviewModal, 
    selectedPreviewProduct, 
    openQuoteModal 
  } = useQuote();

  const [companyText, setCompanyText] = useState('TECHNO CORP');
  const [taglineText, setTaglineText] = useState('ENGINEERED FOR EXCELLENCE');
  const [selectedFont, setSelectedFont] = useState<'font-sans' | 'font-serif' | 'font-mono'>('font-sans');
  const [contrastStyle, setContrastStyle] = useState<'black-anneal' | 'frosty-silver'>('black-anneal');
  const [previewProduct, setPreviewProduct] = useState<Product>(
    selectedPreviewProduct || PRODUCTS[0]
  );

  const handleSendToWhatsApp = () => {
    const phone = '917567999989';
    const text = `*Laser Marking Mockup Enquiry - VARAIA TRADERS*\n` +
      `• *Product:* ${previewProduct.name} (${previewProduct.itemCode})\n` +
      `• *Company Text:* "${companyText}"\n` +
      `• *Tagline:* "${taglineText}"\n` +
      `• *Style:* ${contrastStyle}\n\n` +
      `Please provide sample digital CDR layout and bulk quotation for 100+ pcs.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isLaserPreviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xs"
            onClick={closeLaserPreviewModal}
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.35, ease: corporateEase }}
            className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl z-10 max-h-[92vh] flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#151616] text-white p-5 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#DD2B1C] flex items-center justify-center text-white font-bold shadow-xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                    Interactive Fiber Laser Marking Simulator
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Preview your corporate typography & logo annealing on stainless steel/MS surfaces
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeLaserPreviewModal}
                className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
              {/* Left Column: Visual Mockup Canvas */}
              <div className="lg:col-span-7 bg-gray-950 p-6 sm:p-10 flex flex-col items-center justify-center relative min-h-[340px]">
                {/* Product Surface Background */}
                <div className="relative w-full max-w-md aspect-4/3 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl flex items-center justify-center group bg-gray-900">
                  <img
                    src={previewProduct.images[0]}
                    alt={previewProduct.name}
                    className="w-full h-full object-cover opacity-85"
                  />

                  {/* Simulated Laser Marking Overlay Area */}
                  <div className="absolute inset-0 flex items-center justify-center p-6 bg-black/25">
                    <motion.div 
                      key={`${companyText}-${taglineText}-${contrastStyle}-${selectedFont}`}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`text-center p-4 rounded-lg backdrop-blur-2xs border border-dashed ${
                        contrastStyle === 'black-anneal'
                          ? 'border-black/50 text-[#151616] bg-white/20 drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]'
                          : 'border-white/50 text-gray-100 bg-black/40 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                      }`}
                    >
                      <div className="w-8 h-8 mx-auto mb-2 border-2 border-current rounded flex items-center justify-center font-black text-xs">
                        LOGO
                      </div>
                      <h4 className={`text-base sm:text-xl font-black uppercase tracking-wider ${selectedFont}`}>
                        {companyText || 'COMPANY NAME'}
                      </h4>
                      {taglineText && (
                        <p className={`text-[10px] sm:text-xs font-semibold tracking-widest mt-1 uppercase ${selectedFont}`}>
                          {taglineText}
                        </p>
                      )}
                      <span className="block text-[8px] opacity-70 tracking-widest mt-2 uppercase">
                        • PERMANENT FIBER LASER ANNEAL •
                      </span>
                    </motion.div>
                  </div>

                  {/* Laser Beam Indicator Effect */}
                  <div className="absolute top-3 left-3 bg-[#DD2B1C]/90 text-white text-[9px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                    50W MOPA Laser Active
                  </div>
                </div>

                <div className="text-center mt-4 text-[11px] text-gray-400">
                  Showing simulation on: <span className="text-white font-bold">{previewProduct.name}</span> ({previewProduct.material})
                </div>
              </div>

              {/* Right Column: Customization Controls */}
              <div className="lg:col-span-5 p-6 sm:p-8 space-y-5 bg-white">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    1. Select Product Model
                  </label>
                  <select
                    value={previewProduct.id}
                    onChange={(e) => {
                      const found = PRODUCTS.find(p => p.id === e.target.value);
                      if (found) setPreviewProduct(found);
                    }}
                    className="w-full text-xs font-semibold p-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#DD2B1C] outline-hidden bg-white"
                  >
                    {PRODUCTS.map(p => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.itemCode})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    2. Company Name / Brand Text
                  </label>
                  <input
                    type="text"
                    value={companyText}
                    onChange={(e) => setCompanyText(e.target.value)}
                    maxLength={30}
                    className="w-full text-xs font-bold p-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#DD2B1C] outline-hidden uppercase"
                    placeholder="ENTER COMPANY NAME"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    3. Sub-text / Tagline / Recipient Name
                  </label>
                  <input
                    type="text"
                    value={taglineText}
                    onChange={(e) => setTaglineText(e.target.value)}
                    maxLength={40}
                    className="w-full text-xs font-medium p-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#DD2B1C] outline-hidden uppercase"
                    placeholder="SLOGAN / INDIVIDUAL NAME"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    4. Font Family Style
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs font-bold">
                    <button
                      onClick={() => setSelectedFont('font-sans')}
                      className={`p-2 rounded-lg border text-center transition-colors cursor-pointer ${
                        selectedFont === 'font-sans' ? 'border-[#DD2B1C] bg-red-50 text-[#DD2B1C]' : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Sans-Serif
                    </button>
                    <button
                      onClick={() => setSelectedFont('font-serif')}
                      className={`p-2 rounded-lg border text-center transition-colors cursor-pointer font-serif ${
                        selectedFont === 'font-serif' ? 'border-[#DD2B1C] bg-red-50 text-[#DD2B1C]' : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Serif
                    </button>
                    <button
                      onClick={() => setSelectedFont('font-mono')}
                      className={`p-2 rounded-lg border text-center transition-colors cursor-pointer font-mono ${
                        selectedFont === 'font-mono' ? 'border-[#DD2B1C] bg-red-50 text-[#DD2B1C]' : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Monospace
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    5. Laser Annealing Finish Contrast
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                    <button
                      onClick={() => setContrastStyle('black-anneal')}
                      className={`p-2 rounded-lg border text-left transition-colors cursor-pointer ${
                        contrastStyle === 'black-anneal' ? 'border-[#DD2B1C] bg-red-50 text-[#DD2B1C]' : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="block text-xs font-bold">Dark Anneal</span>
                      <span className="block text-[10px] font-normal text-gray-500">High-contrast permanent oxidation</span>
                    </button>
                    <button
                      onClick={() => setContrastStyle('frosty-silver')}
                      className={`p-2 rounded-lg border text-left transition-colors cursor-pointer ${
                        contrastStyle === 'frosty-silver' ? 'border-[#DD2B1C] bg-red-50 text-[#DD2B1C]' : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="block text-xs font-bold">Frosted Silver</span>
                      <span className="block text-[10px] font-normal text-gray-500">Satin matte surface ablation</span>
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-gray-100 space-y-2.5">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSendToWhatsApp}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Laser Mockup on WhatsApp</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      closeLaserPreviewModal();
                      openQuoteModal(previewProduct);
                    }}
                    className="w-full bg-[#151616] hover:bg-[#DD2B1C] text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Add to RFQ with Laser Notes</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
