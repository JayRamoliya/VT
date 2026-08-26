import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Boxes, 
  ArrowRight, 
  Home, 
  Search, 
  MessageSquare, 
  Download, 
  Phone 
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export const NotFound: React.FC = () => {
  const { openCatalogueModal, generateWhatsAppLink } = useQuote();

  const quickLinks = [
    { title: 'Home Page', path: '/', desc: 'Return to the main factory presentation' },
    { title: 'Product Catalogue', path: '/products', desc: 'Explore all 57+ metal items' },
    { title: 'Mobile Stands', path: '/products?category=Mobile%20Stand', desc: 'SS & MS desktop phone cradles' },
    { title: 'Pen Stands', path: '/products?category=Pen%20Stand', desc: 'Revolving and monolith pen caddies' },
    { title: 'Corporate Showcase', path: '/gallery', desc: 'Finished laser engraving gallery' },
    { title: 'Contact Factory Desk', path: '/contact', desc: 'Connect with Rajkot sales team' }
  ];

  return (
    <div className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Animated 404 Header Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-red-50 text-[#DD2B1C] mb-6 border border-red-100 shadow-sm"
        >
          <span className="text-2xl font-black">404</span>
        </motion.div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151616] tracking-tight">
          Page Not Found
        </h1>

        <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto mt-3 leading-relaxed">
          The link you followed may be broken or the product/page has been moved to a new section in our updated catalogue.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
          <Link
            to="/"
            className="bg-[#DD2B1C] hover:bg-[#b82215] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>

          <Link
            to="/products"
            className="bg-[#151616] hover:bg-black text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
          >
            <Boxes className="w-4 h-4 text-[#DD2B1C]" />
            <span>Browse Products</span>
          </Link>

          <button
            onClick={openCatalogueModal}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#DD2B1C]" />
            <span>Download Master PDF</span>
          </button>
        </div>

        {/* Quick Nav Directory Grid */}
        <div className="mt-16 pt-12 border-t border-gray-100 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#DD2B1C] block mb-4 text-center">
            Or Jump Directly to Popular Sections
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="p-4 rounded-2xl border border-gray-200 hover:border-[#DD2B1C] hover:shadow-md transition-all group bg-gray-50/50 hover:bg-white"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#151616] group-hover:text-[#DD2B1C] transition-colors">
                    {link.title}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#DD2B1C] group-hover:translate-x-1 transition-all" />
                </div>
                <span className="text-xs text-gray-500 block mt-1">
                  {link.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Instant Support Banner */}
        <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div>
            <span className="text-xs font-bold text-[#151616] block">Need assistance finding a specific metal item?</span>
            <span className="text-xs text-gray-500">Our sales desk is available on WhatsApp & direct phone for instant catalogue help.</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="tel:+917567999989"
              className="bg-white border border-gray-300 text-gray-800 text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 hover:border-gray-400"
            >
              <Phone className="w-3.5 h-3.5 text-[#DD2B1C]" />
              <span>Call Desk</span>
            </a>
            <a
              href={generateWhatsAppLink("Hello VARAIA TRADERS, I'm looking for a product in your catalogue.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
export default NotFound;
