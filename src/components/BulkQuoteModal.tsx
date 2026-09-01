import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  FileText, 
  Building, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { PRODUCTS } from '../data/products';
import { corporateEase } from './MotionWrappers';

export const BulkQuoteModal: React.FC = () => {
  const { 
    isQuoteModalOpen, 
    closeQuoteModal, 
    quoteItems, 
    removeFromQuote, 
    updateQuantity, 
    clearQuote,
    addToQuote 
  } = useQuote();

  const [companyName, setCompanyName] = useState('');
  const [buyerName, setBuyerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [laserMarking, setLaserMarking] = useState('Yes, need company logo laser marked');
  const [specialNotes, setSpecialNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const basePhone = '917567999989';
    let msg = `*BULK CORPORATE QUOTE REQUEST - VARAIA TRADERS*\n` +
      `----------------------------------------\n` +
      `• *Company:* ${companyName || 'Corporate Client'}\n` +
      `• *Contact Person:* ${buyerName || 'Procurement Executive'}\n` +
      `• *Phone:* ${phone}\n` +
      `• *Email:* ${email}\n` +
      `• *Location:* ${city}\n` +
      `• *Laser Marking:* ${laserMarking}\n\n` +
      `*Selected Products List:*`;

    if (quoteItems.length === 0) {
      msg += `\n- General Bulk Enquiry across 57+ Steel/MS Catalogue`;
    } else {
      quoteItems.forEach((item, index) => {
        msg += `\n${index + 1}. *${item.product.name}* (Code: ${item.product.itemCode})`;
        msg += `\n   Qty: ${item.quantity} pcs | Material: ${item.product.material}`;
      });
    }

    if (specialNotes) {
      msg += `\n\n*Special Instructions:* ${specialNotes}`;
    }

    msg += `\n\n_Generated via Varaia Traders Portal (Office Rajkot)_`;

    window.open(`https://wa.me/${basePhone}?text=${encodeURIComponent(msg)}`, '_blank');
    setIsSubmitted(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleAddPopularItem = (productId: string) => {
    const p = PRODUCTS.find(prod => prod.id === productId);
    if (p) addToQuote(p, 100);
  };

  return (
    <AnimatePresence>
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-xs"
            onClick={closeQuoteModal}
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.35, ease: corporateEase }}
            className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl z-10 max-h-[92vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="bg-[#151616] text-white p-5 sm:p-6 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#DD2B1C] flex items-center justify-center text-white font-bold shadow-xs">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                    Request Bulk Quotation
                    <span className="bg-red-500/20 text-red-400 text-xs px-2 py-0.5 rounded font-mono border border-red-500/30">
                      MOQ 100+ pcs
                    </span>
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Direct factory pricing from Rajkot plant • 1000+ cartons ready stock
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeQuoteModal}
                className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
              {/* Selected Products List */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    1. Products in Your RFQ List ({quoteItems.length})
                  </h4>
                  {quoteItems.length > 0 && (
                    <button
                      onClick={clearQuote}
                      className="text-xs text-red-600 hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Clear List
                    </button>
                  )}
                </div>

                {quoteItems.length === 0 ? (
                  <div className="bg-gray-50 rounded-2xl p-6 text-center border border-dashed border-gray-300">
                    <p className="text-sm text-gray-600 font-medium">Your quote list is currently empty.</p>
                    <p className="text-xs text-gray-500 mt-1">Add items from catalogue or quick-add popular items below:</p>
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                      {PRODUCTS.slice(0, 3).map((prod) => (
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          key={prod.id}
                          onClick={() => handleAddPopularItem(prod.id)}
                          className="bg-white border border-gray-200 hover:border-[#DD2B1C] px-3 py-1.5 rounded-lg text-xs font-bold text-gray-700 hover:text-[#DD2B1C] transition-colors flex items-center gap-1 cursor-pointer shadow-2xs"
                        >
                          <Plus className="w-3.5 h-3.5" /> + {prod.name}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                    {quoteItems.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex items-center justify-between p-3 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-12 h-12 object-cover rounded-lg border border-gray-200 flex-shrink-0"
                          />
                          <div className="min-w-0">
                            <span className="block text-xs font-bold text-[#151616] truncate">
                              {item.product.name}
                            </span>
                            <span className="block text-[11px] text-gray-500 font-mono">
                              Code: {item.product.itemCode} • Material: {item.product.material}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 flex-shrink-0">
                          <div className="flex items-center border border-gray-300 rounded-lg bg-white overflow-hidden">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 50)}
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 text-xs font-bold font-mono">
                              {item.quantity} pcs
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 50)}
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromQuote(item.product.id)}
                            className="text-gray-400 hover:text-red-600 p-1 cursor-pointer"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Form Section */}
              <form onSubmit={handleSendWhatsApp} className="space-y-4 pt-2 border-t border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  2. Corporate Procurement & Delivery Information
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Company / Organization Name *</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        required
                        placeholder="e.g., Tata Motors, L&T, HDFC"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#DD2B1C] focus:border-transparent outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Contact Person Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Rajesh Sharma (Procurement)"
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#DD2B1C] focus:border-transparent outline-hidden transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Mobile / WhatsApp Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#DD2B1C] focus:border-transparent outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Corporate Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        placeholder="rajesh@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#DD2B1C] focus:border-transparent outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Delivery City / State / Country *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        required
                        placeholder="e.g., Mumbai, Delhi, Bengaluru, Dubai"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#DD2B1C] focus:border-transparent outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Laser Logo Branding Requirement</label>
                    <select
                      value={laserMarking}
                      onChange={(e) => setLaserMarking(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#DD2B1C] focus:border-transparent outline-hidden bg-white"
                    >
                      <option>Yes, need company logo laser marked</option>
                      <option>Yes, need logo + individual recipient names</option>
                      <option>No, plain blank metal products</option>
                      <option>Undecided / Please recommend</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Additional Project Specifications / Target Date</label>
                  <textarea
                    rows={2}
                    placeholder="Specific packaging requirement, split shipping to multiple branches, or required dispatch deadline..."
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#DD2B1C] focus:border-transparent outline-hidden"
                  />
                </div>

                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-green-50 border border-green-200 rounded-xl flex items-center gap-2 text-xs font-semibold text-green-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Inquiry processed! Our B2B sales team is generating your tailored estimate.</span>
                  </motion.div>
                )}

                {/* Submit Buttons */}
                <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                    <span>GST B2B Tax Invoice • Direct Factory Pricing</span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send WhatsApp RFQ</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={handleEmailSubmit}
                      className="flex-1 sm:flex-initial bg-[#151616] hover:bg-[#DD2B1C] text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>Email RFP</span>
                    </motion.button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
