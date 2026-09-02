import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  FileCheck,
  CheckCircle2,
  ArrowUpRight,
  Globe,
  Download,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { useQuote } from "../context/QuoteContext";
import { CATEGORIES } from "../data/products";

export const Footer: React.FC = () => {
  const { openCatalogueModal, openQuoteModal } = useQuote();

  return (
    <footer className="bg-[#151616] text-white pt-16 pb-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Corporate Assurance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-neutral-800">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#007BFF]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                57+ Product Range
              </h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Precision-engineered Steel & MS corporate gifting utilities for
                all budgets.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#007BFF]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Ready Stock 1000+ Cartons
              </h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Central Rajkot warehouse for immediate dispatch of urgent
                corporate orders.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#007BFF]">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Pan India & Global Supply
              </h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Multi-branch corporate dispatch across India, Middle East, and
                overseas markets.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-[#007BFF]">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Laser Marking in Metal
              </h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Permanent high-contrast fiber laser etching for brand logos &
                individual recipient names.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-neutral-800">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center">
              <div className="w-44 h-20 rounded-lg flex items-center justify-center">
                <img
                  src="/white.png"
                  alt="Varaia Traders Logo"
                  className="max-w-full max-h-full"
                />
              </div>
            </Link>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Varaia Traders is a premier manufacturer and bulk supplier of
              high-grade Stainless Steel & Mild Steel (MS) corporate gifts,
              executive desk accessories, custom metal awards, and mementos
              based in the engineering capital of Rajkot, Gujarat.
            </p>

            {/* Direct Contact Cards */}
            <div className="pt-2 space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#007BFF] flex-shrink-0" />
                <a
                  href="tel:+917567999989"
                  className="hover:text-white font-semibold"
                >
                  +91 75679 99989 (Direct Sales & Bulk Desk)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#007BFF] flex-shrink-0" />
                <a
                  href="mailto:jignesh@varaiatraders.com"
                  className="hover:text-white"
                >
                  jignesh@varaiatraders.com
                </a>
              </div>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-200 mb-4 pb-1 border-b border-neutral-800">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#007BFF] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-[#007BFF] transition-colors"
                >
                  Client Showcase & Gallery
                </Link>
              </li>
              {/* <li>
                <Link to="/blog" className="hover:text-[#007BFF] transition-colors">
                  Corporate Gifting Insights
                </Link>
              </li> */}
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#007BFF] transition-colors"
                >
                  Manufacturing Plant Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#007BFF] transition-colors"
                >
                  Quality Assurance & Metallurgy
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-200 mb-4 pb-1 border-b border-neutral-800">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {CATEGORIES.filter((c) => c !== "All")
                .slice(0, 6)
                .map((cat) => (
                  <li key={cat}>
                    <Link
                      to={`/products?category=${encodeURIComponent(cat)}`}
                      className="hover:text-[#007BFF] transition-colors truncate max-w-full block text-left"
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              <li>
                <Link
                  to="/products"
                  className="text-[#007BFF] font-semibold hover:underline flex items-center gap-1"
                >
                  View All 57+ Items <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal Certificates */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-200 mb-4 pb-1 border-b border-neutral-800">
              Support & Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#007BFF] transition-colors"
                >
                  Contact Sales Office
                </Link>
              </li>
              {/* <li>
                <button
                  onClick={() => openQuoteModal()}
                  className="hover:text-[#007BFF] transition-colors cursor-pointer"
                >
                  Bulk Order RFQ (100+ pcs)
                </button>
              </li> */}
              <li>
                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/917567999989?text=Hello,%20I%20am%20interested%20in%20your%20products.%20Please%20share%20more%20details.",
                      "_blank",
                    )
                  }
                  className="hover:text-[#007BFF] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  Download PDF Catalogue
                </button>
              </li>
              <li className="pt-2">
                <div className="bg-white/5 p-2.5 rounded-lg border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                    UDYAM Certificate
                  </div>
                  <div className="text-[10px] text-gray-400 font-mono">
                    UDYAM-GJ-20-0040020
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-200 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                    GST Registration
                  </div>
                  <div className="text-[10px] text-gray-400 font-mono">
                    24DSPPS1285F1ZD
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Tagline & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold tracking-wider uppercase text-xs">
              Quality that Impresses. Speed that Delivers.
            </span>
          </div>

          <div className="text-center md:text-right">
            <p>
              © {new Date().getFullYear()} VARAIA TRADERS. All Rights Reserved.
              Manufactured in Rajkot, Gujarat, India.
            </p>
            <p className="text-[11px] text-gray-400 mt-0.5">
              Target Supply: Corporate Gifting | Graphic Design & Printing |
              Metal Awards & Trophies | Laser Marking in Metal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
