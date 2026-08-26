import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Building2, 
  Target, 
  Eye, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Boxes, 
  Truck, 
  Globe, 
  Check, 
  FileCheck, 
  Download, 
  Users, 
  Smartphone, 
  PenTool, 
  Disc, 
  BookOpen, 
  LayoutGrid, 
  Briefcase 
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { CTA } from '../components/CTA';
import { Counter } from '../components/Counter';
import { useQuote } from '../context/QuoteContext';

interface AboutProps {
  onNavigateHome?: () => void;
  onExploreProducts?: () => void;
}

export const About: React.FC<AboutProps> = ({ onNavigateHome, onExploreProducts }) => {
  const { openQuoteModal, openCatalogueModal } = useQuote();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (onNavigateHome) onNavigateHome();
    else navigate('/');
  };

  const handleExploreClick = () => {
    if (onExploreProducts) onExploreProducts();
    else navigate('/products');
  };

  const specialisations = [
    { name: 'Mobile Stands', icon: <Smartphone className="w-5 h-5 text-[#DD2B1C]" />, desc: 'Ergonomic 304 stainless steel and mild steel smartphone & tablet holders.' },
    { name: 'Pen Stands', icon: <PenTool className="w-5 h-5 text-[#DD2B1C]" />, desc: '360° revolving executive caddies with brass bearings and felt bases.' },
    { name: 'Paper Weights', icon: <Disc className="w-5 h-5 text-[#DD2B1C]" />, desc: 'Solid 320g dome & geometric steel weights with mirror and brushed finishes.' },
    { name: 'Notepads & Memo Docks', icon: <BookOpen className="w-5 h-5 text-[#DD2B1C]" />, desc: 'Refillable steel-cased memo pads and desk sticky note dispensers.' },
    { name: 'Desk Accessories', icon: <LayoutGrid className="w-5 h-5 text-[#DD2B1C]" />, desc: '5-in-1 multi-productivity hubs, metal bookends, and perpetual calendars.' },
    { name: 'Business Gifts', icon: <Briefcase className="w-5 h-5 text-[#DD2B1C]" />, desc: 'Visiting card cases, steel coaster sets, and metal gift combos.' }
  ];

  const operationsHandled = [
    { title: 'Corporate Events & AGMs', count: '500+ Summits Supplied', desc: 'Custom laser engraved delegate sets and speaker mementos.' },
    { title: 'Employee Recognition', count: '100,000+ Awards Delivered', desc: 'Star performer monolith pillar awards and service tenure trophies.' },
    { title: 'Client Gifting & Festive Hampers', count: 'Pan-India Distribution', desc: 'Executive desk sets delivered to key decision-makers during Diwali and New Year.' },
    { title: 'Promotional Brand Campaigns', count: 'Lifetime Desk Presence', desc: 'High-utility desktop tools providing continuous brand recall.' },
    { title: 'Bulk Orders (100 to 10,000+ pcs)', count: '1000+ Cartons Ready Stock', desc: 'Direct-from-factory volume rate tiers with same-week dispatch.' }
  ];

  return (
    <div className="w-full bg-white">
      {/* Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <Breadcrumb
          items={[{ label: 'About Us', active: true }]}
          onNavigateHome={handleHomeClick}
        />
      </div>

      {/* Hero Brand Section */}
      <section className="py-16 sm:py-20 bg-gray-50/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#DD2B1C] block">
                Manufacturing Legacy & Precision Engineering
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151616] tracking-tight leading-tight">
                About VARAIA TRADERS
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                Varaia Traders is a leading Indian manufacturing firm based in the engineering hub of Rajkot, Gujarat. We specialize in precision-crafted Stainless Steel & Mild Steel (MS) corporate gifting utilities, desk accessories, and milestone trophies designed for long-lasting brand visibility.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Founded on the pillars of uncompromising metallurgical quality and high-speed execution, we bridge the gap between heavy industrial engineering and refined corporate aesthetics. From Fortune 500 corporate welcome kits to festive gifting for nationwide dealer networks, our products represent reliability and executive elegance.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => openQuoteModal()}
                  className="bg-[#DD2B1C] hover:bg-[#b82215] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  Request Bulk Quotation
                </button>
                <button
                  onClick={openCatalogueModal}
                  className="bg-[#151616] hover:bg-black text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#DD2B1C]" />
                  <span>Download Master Catalogue</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 aspect-4/3 group">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=900&auto=format&fit=crop"
                  alt="Varaia Traders Manufacturing Facility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#DD2B1C]">
                    Rajkot Central Facility
                  </span>
                  <h3 className="text-lg font-bold">
                    CNC Laser Cutting, Metal Bending & Fiber Laser Marking
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#DD2B1C] flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#DD2B1C] block mb-1">
              Long-Term Outlook
            </span>
            <h2 className="text-2xl font-black text-[#151616] mb-4">
              Our Vision
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              To be the most trusted global manufacturer for metal corporate gifting and executive desktop utilities—setting the global benchmark for metallurgical durability, sub-millimeter branding precision, and ethical volume supply chains.
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#DD2B1C] flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#DD2B1C] block mb-1">
              Our Daily Commitment
            </span>
            <h2 className="text-2xl font-black text-[#151616] mb-4">
              Our Mission
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              To engineer functional, beautiful metal products that solve everyday executive desk organization while delivering permanent, unyielding brand recall through high-speed in-house laser technology and direct factory economics.
            </p>
          </div>
        </div>
      </section>

      {/* Product Specialisations Grid */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#DD2B1C] block mb-2">
              Engineering Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#151616] tracking-tight">
              Our Product Specialisations
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Each product line is manufactured to exact dimensional tolerances using prime grade metals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialisations.map((spec) => (
              <div 
                key={spec.name}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                  {spec.icon}
                </div>
                <h3 className="font-bold text-base text-[#151616] mb-1.5">{spec.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Operations We Handle */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#DD2B1C] block mb-2">
            Execution Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#151616] tracking-tight">
            Corporate Operations & Campaigns We Power
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Equipped with high-capacity production lines to meet demanding corporate timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {operationsHandled.map((op) => (
            <div 
              key={op.title}
              className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#DD2B1C] transition-colors"
            >
              <span className="text-xs font-bold text-[#DD2B1C] block mb-1 uppercase tracking-wider">
                {op.count}
              </span>
              <h3 className="font-bold text-lg text-[#151616] mb-2">{op.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{op.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Plant Infrastructure & Ready Stock Assurance */}
      <section className="py-16 bg-[#151616] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#DD2B1C] block">
                Manufacturing Backbone • Rajkot
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                1000+ Cartons Ready Stock & Multi-Point Express Dispatch
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Our plant maintains continuous buffer stocks of all 57+ catalogued items. When last-minute corporate conferences, AGMs, or executive onboarding needs arise, we can laser-mark and dispatch bulk orders within 24 to 48 hours.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#DD2B1C]/50 transition-colors">
                  <div className="text-2xl font-black text-[#DD2B1C] flex items-baseline">
                    <Counter value={57} suffix="+" />
                  </div>
                  <span className="text-xs text-gray-300 font-semibold block mt-0.5">Active Metal Models</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#DD2B1C]/50 transition-colors">
                  <div className="text-2xl font-black text-[#DD2B1C] flex items-baseline">
                    <Counter value={1000} suffix="+" />
                  </div>
                  <span className="text-xs text-gray-300 font-semibold block mt-0.5">Cartons Ready in Stock</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#DD2B1C]/50 transition-colors">
                  <div className="text-2xl font-black text-[#DD2B1C] flex items-baseline">
                    <Counter value={100} suffix="%" />
                  </div>
                  <span className="text-xs text-gray-300 font-semibold block mt-0.5">In-House Laser Suite</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#DD2B1C]/50 transition-colors">
                  <div className="text-2xl font-black text-[#DD2B1C] flex items-baseline">
                    <Counter value={28} />
                  </div>
                  <span className="text-xs text-gray-300 font-semibold block mt-0.5">States Pan-India Delivery</span>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800 space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">
                Factory Address & Credentials
              </h3>
              <p className="text-xs text-gray-400">
                <strong className="text-white">Facility:</strong> Aji Industrial Area, GIDC Industrial Estate, Rajkot - 360003, Gujarat, India
              </p>
              <p className="text-xs text-gray-400">
                <strong className="text-white">UDYAM Certificate:</strong> UDYAM-GJ-20-0089421
              </p>
              <p className="text-xs text-gray-400">
                <strong className="text-white">GSTIN:</strong> 24AABCV9821M1ZT
              </p>
              <p className="text-xs text-gray-400">
                <strong className="text-white">Direct Factory Desk:</strong> +91 75679 99989 | jignesh@varaiatraders.com
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-block bg-[#DD2B1C] hover:bg-[#b82215] text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Contact Procurement Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <CTA />
    </div>
  );
};
export default About;
