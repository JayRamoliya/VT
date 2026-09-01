import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  Download,
  FileText,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Smartphone,
  PenTool,
  Disc,
  BookOpen,
  LayoutGrid,
  Calendar,
  Gift,
  Award,
  Briefcase,
} from "lucide-react";
import { useQuote } from "../context/QuoteContext";
import { CATEGORIES, CATEGORY_DETAILS } from "../data/products";
import { CategoryType } from "../types";

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string, params?: Record<string, unknown>) => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const { quoteItems, openQuoteModal, openCatalogueModal } = useQuote();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [location.pathname, location.search]);

  const getCategoryIcon = (cat: CategoryType) => {
    switch (cat) {
      case "Mobile Stand":
        return <Smartphone className="w-4 h-4 text-[#007BFF]" />;
      case "Paper Weight":
        return <Disc className="w-4 h-4 text-[#007BFF]" />;
      case "Notepad":
        return <BookOpen className="w-4 h-4 text-[#007BFF]" />;
      case "Calendar":
        return <Calendar className="w-4 h-4 text-[#007BFF]" />;
      default:
        return <Gift className="w-4 h-4 text-[#007BFF]" />;
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: 'About Us', path: '/about' },
    { name: "Products", path: "/products", hasMegaMenu: true },
    // { name: 'Gallery', path: '/gallery' },
    // { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isLinkActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="w-full z-40 sticky top-0">
      {/* Top Corporate Strip */}
      <div className="bg-[#151616] text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10 hidden md:block transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gray-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#007BFF] animate-pulse"></span>
              Rajkot Manufacturing Hub: 1000+ Cartons Ready Stock
            </span>
            <span className="text-gray-500">|</span>
            <span className="flex items-center gap-1 text-gray-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#007BFF]" />
              UDYAM & GST Registered UNIT
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="tel:+917567999989"
              className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#007BFF]" />
              <span className="font-semibold">+91 75679 99989</span>
            </a>
            <a
              href="mailto:jignesh@varaiatraders.com"
              className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <Mail className="w-3.5 h-3.5 text-[#007BFF]" />
              <span>jignesh@varaiatraders.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar with Dynamic Shrink on Scroll */}
      <motion.div
        animate={{
          paddingTop: isScrolled ? "10px" : "16px",
          paddingBottom: isScrolled ? "10px" : "16px",
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(255, 255, 255, 1)",
          boxShadow: isScrolled
            ? "0 10px 30px -10px rgba(0, 0, 0, 0.08)"
            : "0 1px 2px 0 rgba(0, 0, 0, 0.02)",
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="w-full backdrop-blur-md border-b border-gray-100/80 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 text-left group cursor-pointer"
            id="brand-logo-link"
          >
            <img
              src="/logo2.png" // public folder ma logo mukvu
              alt="Varaia Traders"
              className="h-12 w-auto object-contain"
            />
            {/* <div>
              <span className="block font-black text-lg sm:text-xl tracking-tight text-[#151616] leading-none">
                VARAIA <span className="text-[#007BFF]">TRADERS</span>
              </span>
              <span className="block text-[10px] sm:text-[11px] font-semibold text-gray-500 uppercase tracking-wider mt-0.5">
                Quality that Impresses. Speed that Delivers.
              </span>
            </div> */}
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <div
                  key={link.name}
                  className="relative py-2"
                  onMouseEnter={() =>
                    link.hasMegaMenu && setIsMegaMenuOpen(true)
                  }
                  onMouseLeave={() =>
                    link.hasMegaMenu && setIsMegaMenuOpen(false)
                  }
                >
                  <Link
                    to={link.path}
                    id={`nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`relative flex items-center gap-1.5 text-sm font-semibold tracking-wide cursor-pointer transition-colors duration-200 ${
                      active
                        ? "text-[#007BFF]"
                        : "text-[#151616] hover:text-[#007BFF]"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.hasMegaMenu && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${isMegaMenuOpen ? "rotate-180 text-[#007BFF]" : "text-gray-400"}`}
                      />
                    )}

                    {/* Animated Active Red Line Indicator */}
                    {active && (
                      <motion.div
                        layoutId="activeNavUnderline"
                        className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-[#007BFF] rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {link.hasMegaMenu && isMegaMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[850px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50 overflow-hidden"
                        onMouseEnter={() => setIsMegaMenuOpen(true)}
                        onMouseLeave={() => setIsMegaMenuOpen(false)}
                      >
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                          <div>
                            <h4 className="text-sm font-bold uppercase tracking-wider text-[#151616]">
                              Steel & MS Manufacturing Catalogue
                            </h4>
                            <p className="text-xs text-gray-500 mt-0.5">
                              57+ Products with Direct Factory Rates & Pan India
                              Dispatch
                            </p>
                          </div>
                          <Link
                            to="/products"
                            onClick={() => setIsMegaMenuOpen(false)}
                            className="text-xs font-bold text-[#007BFF] hover:underline flex items-center gap-1 cursor-pointer transition-colors"
                          >
                            View Full Catalogue{" "}
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          {CATEGORIES.filter((c) => c !== "All").map((cat) => {
                            const details = CATEGORY_DETAILS[cat];
                            return (
                              <Link
                                key={cat}
                                to={`/products?category=${encodeURIComponent(cat)}`}
                                onClick={() => setIsMegaMenuOpen(false)}
                                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-gray-50 text-left transition-all group cursor-pointer border border-transparent hover:border-gray-200"
                              >
                                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#007BFF] group-hover:text-white transition-colors duration-200">
                                  {getCategoryIcon(cat)}
                                </div>
                                <div className="min-w-0">
                                  <span className="block text-xs font-bold text-[#151616] group-hover:text-[#007BFF] truncate transition-colors">
                                    {cat}
                                  </span>
                                  <span className="block text-[11px] text-gray-500 truncate">
                                    {details?.subtitle ||
                                      "Laser Marking Available"}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Mega Menu Footer Banner */}
                        <div className="mt-4 pt-3 border-t border-gray-100 bg-gray-50/80 -mx-6 -mb-6 p-4 flex items-center justify-between">
                          <button
                            onClick={() => {
                              setIsMegaMenuOpen(false);
                              openQuoteModal();
                            }}
                            className="text-xs font-bold bg-[#151616] hover:bg-[#007BFF] text-white px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                          >
                            Request Fast RFQ
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Action Buttons: Catalogue & Request Quote */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={openCatalogueModal}
              id="header-download-catalogue-btn"
              className="text-xs font-bold text-gray-700 hover:text-[#151616] px-3.5 py-2 rounded-xl border border-gray-200 hover:border-gray-300 bg-gray-50/50 hover:bg-gray-50 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <Download className="w-3.5 h-3.5 text-[#007BFF]" />
              <span>Brochure</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openQuoteModal()}
              id="header-get-quote-btn"
              className="relative bg-[#007BFF] hover:bg-[#b82215] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Get Bulk Quote</span>
              {quoteItems.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#151616] text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-xs animate-bounce">
                  {quoteItems.length}
                </span>
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openQuoteModal()}
              className="relative p-2 text-gray-700 hover:text-[#007BFF] transition-colors"
              aria-label="View Quote Cart"
            >
              <FileText className="w-5 h-5" />
              {quoteItems.length > 0 && (
                <span className="absolute 0 top-0 right-0 w-4 h-4 bg-[#007BFF] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {quoteItems.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:text-[#151616] hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-white border-b border-gray-200 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => {
                const active = isLinkActive(link.path);
                if (link.hasMegaMenu) {
                  return (
                    <div
                      key={link.name}
                      className="border-b border-gray-100 pb-2"
                    >
                      <div className="flex items-center justify-between py-2">
                        <Link
                          to={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`text-base font-bold transition-colors ${
                            active ? "text-[#007BFF]" : "text-gray-800"
                          }`}
                        >
                          {link.name}
                        </Link>
                        <button
                          onClick={() =>
                            setMobileCategoryOpen(!mobileCategoryOpen)
                          }
                          className="p-2 text-gray-500 hover:text-[#007BFF]"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${mobileCategoryOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                      </div>

                      {mobileCategoryOpen && (
                        <div className="pl-3 py-2 space-y-1.5 bg-gray-50 rounded-xl my-1">
                          {CATEGORIES.filter((c) => c !== "All").map((cat) => (
                            <Link
                              key={cat}
                              to={`/products?category=${encodeURIComponent(cat)}`}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                              }}
                              className="flex items-center gap-2 py-1.5 text-xs font-semibold text-gray-700 hover:text-[#007BFF]"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#007BFF]" />
                              <span>{cat}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2.5 text-base font-bold border-b border-gray-100 transition-colors ${
                      active
                        ? "text-[#007BFF]"
                        : "text-gray-800 hover:text-[#007BFF]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2.5">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openQuoteModal();
                  }}
                  className="w-full bg-[#007BFF] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Get Instant Factory Quote</span>
                </button>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openCatalogueModal();
                  }}
                  className="w-full bg-gray-100 text-gray-800 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#007BFF]" />
                  <span>Download Master Catalogue</span>
                </button>
              </div>

              {/* Contact strip in mobile menu */}
              <div className="pt-4 mt-2 border-t border-gray-100 text-xs text-gray-500 space-y-1">
                <p className="font-semibold text-gray-800">
                  Factory Sales Desk (Rajkot):
                </p>
                <a
                  href="tel:+917567999989"
                  className="flex items-center gap-1.5 text-[#007BFF] font-bold"
                >
                  <Phone className="w-3.5 h-3.5" /> +91 75679 99989
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
