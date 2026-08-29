import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Sparkles,
  Layers,
  Truck,
  Clock,
  DollarSign,
  Globe,
  Boxes,
  CheckCircle2,
  ArrowRight,
  Users,
  Briefcase,
  Award,
  Gift,
  Calendar,
  Check,
} from "lucide-react";
import { Hero } from "../components/Hero";
import { ProductCard } from "../components/ProductCard";
import { CategoryCard } from "../components/CategoryCard";
import { TestimonialSlider } from "../components/TestimonialSlider";
import { CTA } from "../components/CTA";
import { FAQ } from "../components/FAQ";
import { PRODUCTS } from "../data/products";
import { Product, CategoryType } from "../types";
import { useQuote } from "../context/QuoteContext";
import {
  FadeUp,
  SectionDivider,
  corporateEase,
} from "../components/MotionWrappers";

interface HomeProps {
  onNavigate?: (page: string, params?: Record<string, unknown>) => void;
  onSelectProduct?: (product: Product) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onSelectProduct }) => {
  const { openQuoteModal, openLaserPreviewModal } = useQuote();
  const navigate = useNavigate();

  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 6);

  const whyChooseUsCards = [
    {
      title: "Premium Quality",
      description:
        "Forged from certified AISI 304 Stainless Steel & heavy gauge CRCA Mild Steel with immaculate satin and mirror finishes.",
      icon: <ShieldCheck className="w-6 h-6 text-[#DD2B1C]" />,
    },
    {
      title: "Bulk Order Specialists",
      description:
        "Engineered high-speed manufacturing lines optimized for corporate volumes ranging from 100 to 10,000+ pieces.",
      icon: <Boxes className="w-6 h-6 text-[#DD2B1C]" />,
    },
    {
      title: "Custom Branding & Laser Marking",
      description:
        "Permanent fiber laser annealing of corporate logos, taglines, QR codes, and individual employee names with 0.01mm precision.",
      icon: <Sparkles className="w-6 h-6 text-[#DD2B1C]" />,
    },
    {
      title: "Timely Delivery",
      description:
        "Strict commitment to conference and event deadlines with guaranteed same-week dispatch from our Rajkot plant.",
      icon: <Clock className="w-6 h-6 text-[#DD2B1C]" />,
    },
    {
      title: "Competitive Factory Pricing",
      description:
        "Zero broker markups. Direct-from-manufacturer transparent tier pricing providing 30-40% savings on corporate budgets.",
      icon: <DollarSign className="w-6 h-6 text-[#DD2B1C]" />,
    },
    {
      title: "Pan India Supply",
      description:
        "Express multi-city dispatch network servicing corporate HQs, regional branches, and dealerships in all 28 states.",
      icon: <Globe className="w-6 h-6 text-[#DD2B1C]" />,
    },
  ];

  const clients = [
    {
      name: "01 hdfc bank",
      logo: "/clients/01 hdfc bank.webp",
    },
    {
      name: "02",
      logo: "/clients/02.webp",
    },
    {
      name: "03 shell pump",
      logo: "/clients/03 shell pump.webp",
    },
    {
      name: "04 ucb",
      logo: "/clients/04 ucb.webp",
    },
    {
      name: "05",
      logo: "/clients/05.webp",
    },
    {
      name: "06",
      logo: "/clients/06.webp",
    },
    {
      name: "07",
      logo: "/clients/07.webp",
    },
    {
      name: "08",
      logo: "/clients/08.webp",
    },
    {
      name: "09",
      logo: "/clients/09.webp",
    },
    {
      name: "10",
      logo: "/clients/10.webp",
    },
    {
      name: "11 lioli granito",
      logo: "/clients/11 lioli granito.webp",
    },
    {
      name: "12",
      logo: "/clients/12.webp",
    },
    {
      name: "13",
      logo: "/clients/13.webp",
    },
    {
      name: "14",
      logo: "/clients/14.webp",
    },
    {
      name: "15",
      logo: "/clients/15.webp",
    },
    {
      name: "16",
      logo: "/clients/16.webp",
    },
    {
      name: "17",
      logo: "/clients/17.webp",
    },
  ];

  const categoriesToShow: CategoryType[] = [
    "Mobile Stand",
    "Pen Stand",
    "Desk Organiser",
    "Paper Weight",
    "Corporate Gifts in Metal",
  ];

  const handleCategoryClick = (category: CategoryType) => {
    if (onNavigate) {
      onNavigate("products", { category });
    } else {
      navigate(`/products?category=${encodeURIComponent(category)}`);
    }
  };

  const handleProductSelect = (product: Product) => {
    if (onSelectProduct) {
      onSelectProduct(product);
    } else {
      navigate(`/products/${product.slug || product.id}`);
    }
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* 1. Hero Section with Interactive Carousel & Key Metrics */}
      <Hero
        onExploreProducts={() => navigate("/products")}
        onNavigateToAbout={() => navigate("/about")}
        onOpenLaserPreview={openLaserPreviewModal}
      />

      {/* 2. Top Product Categories Section */}
      <section
        className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        id="manufacturing-categories-section"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#DD2B1C] border border-red-100 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Manufacturing Divisions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#151616] tracking-tight">
              Featured Manufacturing Categories
            </h2>
            <p className="text-sm text-gray-600 mt-2.5 max-w-2xl leading-relaxed">
              Industrial grade SS 304 and mild steel merchandise forged for high
              brand equity on executive desks across India and global corporate
              networks.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="flex-shrink-0">
            <Link
              to="/products"
              className="inline-flex items-center gap-2.5 bg-gray-100 hover:bg-[#DD2B1C] text-gray-800 hover:text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 group shadow-2xs"
            >
              <span>View All 57+ Models</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </FadeUp>
        </div>

        {/* Quick Category Chips Strip */}
        <FadeUp
          delay={0.15}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none"
        >
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mr-1 flex-shrink-0">
            Quick Jump:
          </span>
          {categoriesToShow.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className="flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-50 hover:bg-red-50 hover:text-[#DD2B1C] text-gray-700 border border-gray-200/80 hover:border-red-200 transition-colors cursor-pointer"
            >
              {cat}
            </button>
          ))}
          <Link
            to="/products"
            className="flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-red-500/10 text-[#DD2B1C] hover:bg-[#DD2B1C] hover:text-white border border-red-200 transition-colors"
          >
            + View All
          </Link>
        </FadeUp>

        {/* Categories Bento / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categoriesToShow.map((cat, idx) => (
            <CategoryCard
              key={cat}
              category={cat}
              index={idx}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
      </section>

      {/* Subtle Horizontal Divider */}
      <SectionDivider />

      {/* 3. Featured Bestsellers Grid */}
      <section className="py-16 sm:py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FadeUp>
              <span className="text-xs font-bold uppercase tracking-widest text-[#DD2B1C] block mb-2">
                Corporate Favorites & Ready Stock
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#151616] tracking-tight">
                High-Volume Signature Gifting Products
              </h2>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                Our bestselling corporate metal utilities ready for
                instantaneous custom fiber laser engraving and same-week bulk
                dispatch.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={handleProductSelect}
              />
            ))}
          </div>

          <FadeUp delay={0.3} className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-[#151616] hover:bg-[#DD2B1C] text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-250 shadow-md hover:shadow-xl cursor-pointer"
            >
              <span>Explore Complete Product Range</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* 4. Laser Marking in Metal Showcase Section */}
      <section className="py-20 bg-[#151616] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <FadeUp>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 text-red-400 border border-red-800/40 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> High Precision Fiber
                  Laser Annealing
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mt-4">
                  Permanent{" "}
                  <span className="text-[#DD2B1C]">Laser Marking</span> in Metal
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-4">
                  Unlike traditional ink printing that wears off in weeks, our
                  state-of-the-art fiber laser marking alters the surface
                  metallurgy permanently. Crisp logos, individual employee
                  names, QR codes, and commemorative dates will never fade or
                  peel.
                </p>
              </FadeUp>

              <FadeUp delay={0.2} className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 text-[#DD2B1C] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">
                      High-Resolution Vector Detail (0.01mm)
                    </span>
                    <span className="text-xs text-gray-400">
                      Intricate corporate emblems, fine line fonts, and dynamic
                      QR codes rendered with optical clarity.
                    </span>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.3} className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={openLaserPreviewModal}
                  className="bg-[#DD2B1C] hover:bg-[#b82215] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Test Laser Marking Simulator</span>
                </button>
                <button
                  onClick={() => openQuoteModal()}
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border border-white/20 cursor-pointer"
                >
                  Request Laser Sample
                </button>
              </FadeUp>
            </div>

            {/* Right Visual Image */}
            <FadeUp delay={0.2} className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 aspect-4/3 group">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop"
                  alt="Industrial Laser Marking Machine in Action"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#DD2B1C] mb-1">
                    Fiber Laser Lab • Rajkot
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Sub-Millimeter Fiber Laser Etching on 304 Stainless Steel
                  </h3>
                  <p className="text-xs text-gray-300 mt-1">
                    Zero chemical etching. Environmentally conscious
                    metallurgical annealing.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us / Corporate Pillars */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp>
            <span className="text-xs font-bold uppercase tracking-widest text-[#DD2B1C] block mb-2">
              Why Varaia Traders
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#151616] tracking-tight">
              Direct Factory Advantages for Corporate Buyers
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Experience the reliability, manufacturing capacity, and
              engineering excellence of an established Rajkot metal
              manufacturer.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: idx * 0.08,
                ease: corporateEase,
              }}
              className="p-8 rounded-3xl bg-white border border-gray-200/80 hover:border-gray-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-[#DD2B1C] group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-[#151616] mb-2 group-hover:text-[#DD2B1C] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-bold text-gray-400 group-hover:text-[#DD2B1C] transition-colors">
                <span>Verified Quality Standard</span>
                <CheckCircle2 className="w-3.5 h-3.5 ml-auto text-green-600" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Trusted By Clients */}
      <section className="py-16 bg-gray-50 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#DD2B1C] block mb-2">
            Trusted By
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#151616]">
            Our Corporate Clients
          </h2>
          <p className="text-sm text-gray-500 mt-3 max-w-2xl mx-auto">
            Delivering premium corporate gifting solutions to leading companies,
            institutions and organizations across India.
          </p>
        </div>

        <div className="relative">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-20 w-48 bg-white rounded-2xl border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md transition-all"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-10 max-w-[140px] object-contain transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Subtle Horizontal Divider */}
      <SectionDivider />

      {/* 6. Corporate Client Testimonials */}
      <TestimonialSlider />

      {/* 7. Frequently Asked Questions */}
      <FAQ />

      {/* 8. Bottom Global CTA Banner */}
      <CTA />
    </div>
  );
};
export default Home;
