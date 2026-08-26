import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { GalleryGrid } from '../components/GalleryGrid';
import { CTA } from '../components/CTA';
import { Sparkles, Camera, ShieldCheck } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

interface GalleryProps {
  onNavigateHome?: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onNavigateHome }) => {
  const { openQuoteModal } = useQuote();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (onNavigateHome) onNavigateHome();
    else navigate('/');
  };

  return (
    <div className="w-full bg-white">
      {/* Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <Breadcrumb
          items={[{ label: 'Showcase Gallery', active: true }]}
          onNavigateHome={handleHomeClick}
        />
      </div>

      {/* Page Header */}
      <div className="bg-gray-50 border-b border-gray-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#DD2B1C] block mb-2">
            Visual Portfolio & Craftsmanship
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151616] tracking-tight">
            Corporate Gifting & Trophy Showcase
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
            Explore finished production samples, fiber laser engraving precision, and custom executive desktop suites created for leading corporations across India and globally.
          </p>
        </div>
      </div>

      {/* Main Gallery Masonry */}
      <div className="py-12 sm:py-16">
        <GalleryGrid />
      </div>

      {/* Global CTA */}
      <CTA 
        title="Want Custom Metal Corporate Gifts for Your Brand?"
        subtitle="Share your project quantity and target delivery date to receive factory direct quotation and sample mockups."
      />
    </div>
  );
};
export default Gallery;
