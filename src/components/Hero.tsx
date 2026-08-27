import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Smartphone, 
  PenTool, 
  Gift,
  Layers,
  Boxes,
  Users,
  Award
} from 'lucide-react';
import { Counter } from './Counter';
import { useQuote } from '../context/QuoteContext';
import { corporateEase } from './MotionWrappers';

interface HeroProps {
  onExploreProducts?: () => void;
  onNavigateToAbout?: () => void;
  onOpenLaserPreview?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onExploreProducts, 
  onNavigateToAbout,
  onOpenLaserPreview 
}) => {
  const { openQuoteModal, openLaserPreviewModal } = useQuote();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'mobile-stand' | 'pen-stand' | 'combo'>('mobile-stand');

  const handleExplore = () => {
    if (onExploreProducts) {
      onExploreProducts();
    } else {
      navigate('/products');
    }
  };

  const handleOpenLaser = () => {
    if (onOpenLaserPreview) {
      onOpenLaserPreview();
    } else {
      openLaserPreviewModal();
    }
  };

  const heroShowcaseItems = {
    'mobile-stand': {
      title: 'Executive Stainless Steel Mobile Stand',
      code: 'VT-MS-01',
      material: 'SS 304 Solid Stainless Steel',
      finish: 'Satin Brushed with Anti-Fingerprint Layer',
      readyStock: '1000+ Cartons Ready Stock',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=1200&auto=format&fit=crop',
      badge: 'Bestselling Corporate Gift'
    },
    'pen-stand': {
      title: 'Revolving MS Pen Caddy with Silent Bearing',
      code: 'VT-PS-01',
      material: 'Heavy Mild Steel + Brass Bearing Core',
      finish: 'Matte Anthracite Black',
      readyStock: '1200+ Cartons Ready Stock',
      image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=1200&auto=format&fit=crop',
      badge: 'Executive Desk Essential'
    },
    'combo': {
      title: '5-in-1 Master Steel Desktop Productivity Hub',
      code: 'VT-DO-01',
      material: 'AISI 304 Stainless Steel & MS Dual Core',
      finish: 'Dual-Tone Mirror & Brushed Finish',
      readyStock: '450+ Cartons Ready Stock',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop',
      badge: 'VIP Welcome Kit'
    }
  };

  const currentItem = heroShowcaseItems[activeTab];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/40 to-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-gray-100">
      {/* Subtle geometric structural grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Corporate Brand Pitch - Fade Up */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Manufacturing Tagline Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: corporateEase }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#DD2B1C] text-xs font-bold uppercase tracking-wider shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Rajkot Factory Manufacturer • 57+ Product Models</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: corporateEase }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#151616] leading-[1.08]"
            >
              Steel & MS Corporate Gifting Products with{' '}
              <span className="text-[#DD2B1C] inline-block relative">
                Industrial Precision
                <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-[#DD2B1C]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </motion.h1>

            {/* Corporate Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: corporateEase }}
              className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed font-normal"
            >
              VARAIA TRADERS engineers heavy-gauge Stainless Steel and Mild Steel mobile docks, revolving pen stands, executive trophies, and desk organizers for brand merchandising, dealer networks, and corporate events across India and worldwide.
            </motion.p>

            {/* Value Highlights Chips */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: corporateEase }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-white/80 backdrop-blur-xs p-2 rounded-xl border border-gray-200/80 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#DD2B1C] flex-shrink-0" />
                <span>Ready Stock: 1000+ Cartons</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-white/80 backdrop-blur-xs p-2 rounded-xl border border-gray-200/80 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#DD2B1C] flex-shrink-0" />
                <span>Laser Marking in Metal</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-white/80 backdrop-blur-xs p-2 rounded-xl border border-gray-200/80 shadow-2xs col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#DD2B1C] flex-shrink-0" />
                <span>PAN INDIA GLOBAL capital</span>
              </div>
            </motion.div>

            {/* CTAs Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: corporateEase }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleExplore}
                id="hero-explore-products-btn"
                className="bg-[#DD2B1C] hover:bg-[#b82215] text-white px-7 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-xl flex items-center gap-2.5 cursor-pointer group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openQuoteModal()}
                id="hero-quote-btn"
                className="bg-[#151616] hover:bg-black text-white px-7 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#DD2B1C]" />
                <span>Get Bulk Quote</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column: Interactive Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: corporateEase }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden p-5 relative">
              {/* Product Type Switcher Tabs */}
              <div className="flex items-center gap-1.5 p-1.5 bg-gray-100 rounded-xl mb-4 text-xs font-bold">
                <button
                  onClick={() => setActiveTab('mobile-stand')}
                  className={`flex-1 py-1.5 px-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer ${
                    activeTab === 'mobile-stand' ? 'bg-white text-[#DD2B1C] shadow-xs' : 'text-gray-600 hover:text-[#151616]'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Stand</span>
                </button>
                <button
                  onClick={() => setActiveTab('pen-stand')}
                  className={`flex-1 py-1.5 px-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer ${
                    activeTab === 'pen-stand' ? 'bg-white text-[#DD2B1C] shadow-xs' : 'text-gray-600 hover:text-[#151616]'
                  }`}
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span>Pen Caddy</span>
                </button>
              </div>

              {/* Dynamic Image & Specs Preview with AnimatePresence */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: corporateEase }}
                  className="space-y-4"
                >
                  {/* Hero Showcase Photo */}
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-gray-100 border border-gray-100">
                    <img 
                      src={currentItem.image} 
                      alt={currentItem.title}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute top-3 left-3 bg-[#151616]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {currentItem.badge}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-[#151616] text-[10px] font-bold px-2.5 py-1 rounded-md border border-gray-200 shadow-sm">
                      {currentItem.readyStock}
                    </div>
                  </div>

                  {/* <div>
                    <div className="flex items-center justify-between text-xs text-gray-500 font-medium mb-1">
                      <span className="font-mono bg-gray-100 px-2 py-0.5 rounded text-[11px] text-gray-700 font-bold">
                        {currentItem.code}
                      </span>
                      <span className="text-[#DD2B1C] font-bold">
                        Fiber Laser Logo Ready
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-[#151616]">
                      {currentItem.title}
                    </h3>
                  </div> */}

                  {/* <div className="grid grid-cols-2 gap-2 text-xs bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase font-bold">Material</span>
                      <span className="font-semibold text-gray-800 truncate block">{currentItem.material}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase font-bold">Finish</span>
                      <span className="font-semibold text-gray-800 truncate block">{currentItem.finish}</span>
                    </div>
                  </div> */}

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={handleExplore}
                      className="flex-1 bg-[#151616] hover:bg-[#DD2B1C] text-white py-2.5 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>Explore In Catalogue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Bottom Corporate Credibility Counters */}
        <div className="mt-14 pt-10 border-t border-gray-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            <Counter 
              value={57} 
              suffix="+" 
              label="Metal Products in Catalogue" 
              subtext="Mobile stands, pen stands, trophies & desk sets"
              icon={<Layers className="w-5 h-5" />}
            />
            <Counter 
              value={1000} 
              suffix="+ Cartons" 
              label="Ready Stock at Rajkot Plant" 
              subtext="Buffer stocks for immediate dispatch"
              icon={<Boxes className="w-5 h-5" />}
            />
            <Counter 
              value={50} 
              suffix="+" 
              label="Corporate Clients" 
              subtext="Pan India & Middle East direct supply"
              icon={<Users className="w-5 h-5" />}
            />
            <Counter 
              value={100} 
              suffix="% In-House" 
              label="Laser Marking & Tooling Facility" 
              subtext="Sub-millimeter branding precision"
              icon={<Sparkles className="w-5 h-5" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
