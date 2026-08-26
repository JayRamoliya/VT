import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Upload, 
  MessageSquare, 
  Phone, 
  Building, 
  Sparkles, 
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { CategoryType } from '../types';

interface ContactFormProps {
  initialCategory?: CategoryType;
  initialProductCode?: string;
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialCategory = 'All',
  initialProductCode = '',
  onSuccess
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    category: initialCategory === 'All' ? 'Mobile Stand' : initialCategory,
    productCode: initialProductCode,
    quantity: '100 - 250 pcs',
    laserMarking: 'Yes, need company logo laser marked',
    packaging: 'Standard Executive Velvet Box',
    message: ''
  });

  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogoFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 1000);
  };

  const handleWhatsAppDirect = () => {
    const phone = '917567999989';
    const text = `*New Bulk Quote Request - VARAIA TRADERS*\n` +
      `• *Name:* ${formData.name || 'Corporate Buyer'}\n` +
      `• *Company:* ${formData.company || 'Not specified'}\n` +
      `• *Phone:* ${formData.phone}\n` +
      `• *Email:* ${formData.email}\n` +
      `• *Location:* ${formData.city}\n` +
      `• *Category:* ${formData.category}\n` +
      `• *Item Code / Notes:* ${formData.productCode || 'Standard Catalogue Item'}\n` +
      `• *Quantity Range:* ${formData.quantity}\n` +
      `• *Laser Marking:* ${formData.laserMarking}\n` +
      `• *Requirements:* ${formData.message || 'Please send direct factory rate quotation.'}`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 text-center shadow-lg">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-[#151616]">Quotation Request Received</h3>
        <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto leading-relaxed">
          Thank you, <strong>{formData.name}</strong>. Our Rajkot corporate sales desk will review your bulk order specifications and provide an official quotation within 2 to 4 business hours.
        </p>

        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleWhatsAppDirect}
            className="bg-[#DD2B1C] hover:bg-[#b82215] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Connect on WhatsApp for Instant Rate</span>
          </button>

          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-10 shadow-xl" id="corporate-contact-form">
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-100">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#151616]">
            Request Bulk Quotation
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Factory-direct pricing on orders from 100 to 10,000+ pieces with custom laser branding.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>Verified Manufacturer</span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
              Your Full Name <span className="text-[#DD2B1C]">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Rajesh Sharma"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#DD2B1C] focus:ring-2 focus:ring-red-100 text-sm outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
              Company / Organisation <span className="text-[#DD2B1C]">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. Acme Technologies Pvt Ltd"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#DD2B1C] focus:ring-2 focus:ring-red-100 text-sm outline-none transition-all"
            />
          </div>
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
              Phone / WhatsApp Number <span className="text-[#DD2B1C]">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. +91 98765 43210"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#DD2B1C] focus:ring-2 focus:ring-red-100 text-sm outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
              Corporate Email Address <span className="text-[#DD2B1C]">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. procurement@acme.com"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#DD2B1C] focus:ring-2 focus:ring-red-100 text-sm outline-none transition-all"
            />
          </div>
        </div>

        {/* Delivery Location & Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
              Delivery City / State / Country <span className="text-[#DD2B1C]">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder="e.g. Mumbai, Bengaluru, Dubai, etc."
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#DD2B1C] focus:ring-2 focus:ring-red-100 text-sm outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
              Product Category
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#DD2B1C] focus:ring-2 focus:ring-red-100 text-sm outline-none transition-all bg-white"
            >
              {CATEGORIES.filter(c => c !== 'All').map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Quantity Tier & Laser Marking Requirement */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
              Required Order Volume (MOQ 100+ pcs)
            </label>
            <select
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#DD2B1C] focus:ring-2 focus:ring-red-100 text-sm outline-none transition-all bg-white"
            >
              <option value="100 - 250 pcs">100 - 250 pcs (Standard Tier)</option>
              <option value="250 - 500 pcs">250 - 500 pcs (Executive Tier)</option>
              <option value="500 - 1000 pcs">500 - 1,000 pcs (Volume Tier)</option>
              <option value="1000+ pcs">1,000 - 5,000 pcs (Mega Tier)</option>
              <option value="5000+ pcs">5,000+ pcs (Enterprise / Export Rate)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
              Laser Logo Marking Required?
            </label>
            <select
              value={formData.laserMarking}
              onChange={(e) => setFormData({ ...formData, laserMarking: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#DD2B1C] focus:ring-2 focus:ring-red-100 text-sm outline-none transition-all bg-white"
            >
              <option value="Yes, need company logo laser marked">Yes, need Company Logo Laser Marked</option>
              <option value="Yes, logo + individual recipient names">Yes, Logo + Individual Employee Names</option>
              <option value="Plain products without marking">Plain Products (No Customization)</option>
            </select>
          </div>
        </div>

        {/* Optional Logo File Upload */}
        <div>
          <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
            Upload Logo for Mockup (Optional - AI, CDR, PDF, PNG, JPG)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-[#DD2B1C] transition-colors cursor-pointer relative bg-gray-50/50">
            <input
              type="file"
              accept=".png,.jpg,.jpeg,.svg,.pdf,.ai,.cdr"
              onChange={handleLogoChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            {logoPreview ? (
              <div className="flex items-center justify-center gap-3">
                <img src={logoPreview} alt="Logo preview" className="w-10 h-10 object-contain rounded bg-white p-1 border border-gray-200" />
                <div className="text-left text-xs">
                  <span className="font-bold text-gray-800 block truncate max-w-xs">{logoFile?.name}</span>
                  <span className="text-green-600 font-semibold text-[11px]">Ready for laser engraving mockup</span>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                <Upload className="w-4 h-4 text-gray-400" />
                <span>Click or drag logo vector / graphic file here</span>
              </div>
            )}
          </div>
        </div>

        {/* Requirements Message */}
        <div>
          <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
            Event Date / Packaging / Specific Instructions
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="e.g. Required by Oct 15 for Annual Dealer Meet in Goa. Please include individual gift box packaging."
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#DD2B1C] focus:ring-2 focus:ring-red-100 text-sm outline-none transition-all resize-none"
          />
        </div>
      </div>

      {/* Form Action Buttons */}
      <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          id="submit-rfq-btn"
          className="w-full sm:w-auto bg-[#DD2B1C] hover:bg-[#b82215] text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
        >
          {isSubmitting ? (
            <span>Processing Quotation...</span>
          ) : (
            <>
              <Send className="w-3.5 h-3.5" />
              <span>Submit RFQ to Rajkot Factory</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleWhatsAppDirect}
          className="w-full sm:w-auto bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600" />
          <span>Direct WhatsApp Quote (+91 75679 99989)</span>
        </button>
      </div>
    </form>
  );
};
