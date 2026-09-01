import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
  Briefcase,
} from "lucide-react";
import { Breadcrumb } from "../components/Breadcrumb";
import { CTA } from "../components/CTA";
import { Counter } from "../components/Counter";
import { useQuote } from "../context/QuoteContext";

interface AboutProps {
  onNavigateHome?: () => void;
  onExploreProducts?: () => void;
}

export const About: React.FC<AboutProps> = ({
  onNavigateHome,
  onExploreProducts,
}) => {
  const { openQuoteModal, openCatalogueModal } = useQuote();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (onNavigateHome) onNavigateHome();
    else navigate("/");
  };

  const handleExploreClick = () => {
    if (onExploreProducts) onExploreProducts();
    else navigate("/products");
  };
  const [visibleClients, setVisibleClients] = useState(18);

  const loadMoreClients = () => {
    setVisibleClients((prev) => prev + 18);
  };
  const specialisations = [
    {
      name: "Mobile Stands",
      icon: <Smartphone className="w-5 h-5 text-[#DD2B1C]" />,
      desc: "Ergonomic 304 stainless steel and mild steel smartphone & tablet holders.",
    },
    {
      name: "Pen Stands",
      icon: <PenTool className="w-5 h-5 text-[#DD2B1C]" />,
      desc: "360° revolving executive caddies with brass bearings and felt bases.",
    },
    {
      name: "Paper Weights",
      icon: <Disc className="w-5 h-5 text-[#DD2B1C]" />,
      desc: "Solid 320g dome & geometric steel weights with mirror and brushed finishes.",
    },
    {
      name: "Notepads & Memo Docks",
      icon: <BookOpen className="w-5 h-5 text-[#DD2B1C]" />,
      desc: "Refillable steel-cased memo pads and desk sticky note dispensers.",
    },
    {
      name: "Desk Accessories",
      icon: <LayoutGrid className="w-5 h-5 text-[#DD2B1C]" />,
      desc: "5-in-1 multi-productivity hubs, metal bookends, and perpetual calendars.",
    },
    {
      name: "Business Gifts",
      icon: <Briefcase className="w-5 h-5 text-[#DD2B1C]" />,
      desc: "Visiting card cases, steel coaster sets, and metal gift combos.",
    },
  ];

  const operationsHandled = [
    {
      title: "Corporate Events & AGMs",
      count: "500+ Summits Supplied",
      desc: "Custom laser engraved delegate sets and speaker mementos.",
    },
    {
      title: "Employee Recognition",
      count: "100,000+ Awards Delivered",
      desc: "Star performer monolith pillar awards and service tenure trophies.",
    },
    {
      title: "Client Gifting & Festive Hampers",
      count: "Pan-India Distribution",
      desc: "Executive desk sets delivered to key decision-makers during Diwali and New Year.",
    },
    {
      title: "Promotional Brand Campaigns",
      count: "Lifetime Desk Presence",
      desc: "High-utility desktop tools providing continuous brand recall.",
    },
    {
      title: "Bulk Orders (100 to 10,000+ pcs)",
      count: "1000+ Cartons Ready Stock",
      desc: "Direct-from-factory volume rate tiers with same-week dispatch.",
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
    {
      name: "18",
      logo: "/clients/18 creanza tiles.webp",
    },
    {
      name: "19",
      logo: "/clients/19 metro tiles.webp",
    },
    {
      name: "20",
      logo: "/clients/20 colortiles.webp",
    },
    {
      name: "21",
      logo: "/clients/21 eracon vitrified.webp",
    },
    {
      name: "22",
      logo: "/clients/22 itaca tiles.webp",
    },
    {
      name: "23",
      logo: "/clients/23 jk more.webp",
    },
    {
      name: "24",
      logo: "/clients/24 ambani vitrified.webp",
    },
    {
      name: "25",
      logo: "/clients/25 gc tiles.webp",
    },
    {
      name: "26",
      logo: "/clients/26 kabir tiles.webp",
    },
    {
      name: "27",
      logo: "/clients/27 ck tiles.webp",
    },
    {
      name: "28",
      logo: "/clients/28 ceramic junction.webp",
    },
    {
      name: "29",
      logo: "/clients/29.webp",
    },
    {
      name: "30",
      logo: "/clients/30.webp",
    },
    {
      name: "31",
      logo: "/clients/31.webp",
    },
    {
      name: "32",
      logo: "/clients/02 lrb tiles.webp",
    },
    {
      name: "33",
      logo: "/clients/03 monzo tiles.webp",
    },
    {
      name: "34",
      logo: "/clients/05 indo brine industries`.webp",
    },
    {
      name: "35",
      logo: "/clients/06 unique mobile.webp",
    },
    {
      name: "36",
      logo: "/clients/08 sigma wire and cable.webp",
    },
    {
      name: "37",
      logo: "/clients/12 millenium tiles.webp",
    },
    {
      name: "38",
      logo: "/clients/22 racy sanitary.webp",
    },
    {
      name: "39",
      logo: "/clients/24 latigres vitrified.webp",
    },
    {
      name: "40",
      logo: "/clients/25 granicer.webp",
    },
    {
      name: "41",
      logo: "/clients/27 saimax ceramic.webp",
    },
    {
      name: "42",
      logo: "/clients/28 saiwin ceramic.webp",
    },
    {
      name: "43",
      logo: "/clients/29 favourite plus ceramic.webp",
    },
    {
      name: "44",
      logo: "/clients/30 clayart ceramic.webp",
    },
    {
      name: "45",
      logo: "/clients/31 hindgres ceramics.webp",
    },
    {
      name: "46",
      logo: "/clients/32 la brillano ceramic.webp",
    },
    {
      name: "47",
      logo: "/clients/33 siyaram granito.webp",
    },
    {
      name: "48",
      logo: "/clients/34 sega granito.webp",
    },
    {
      name: "49",
      logo: "/clients/35 sanford vitrified.webp",
    },
    {
      name: "50",
      logo: "/clients/36 sona ceramics.webp",
    },
    {
      name: "51",
      logo: "/clients/36 sona sanitarywares.webp",
    },
    {
      name: "52",
      logo: "/clients/37 mozart ceramic.webp",
    },
    {
      name: "53",
      logo: "/clients/38 seron granito.webp",
    },
    {
      name: "54",
      logo: "/clients/39 boffo granito.webp",
    },
    {
      name: "55",
      logo: "/clients/40 bonza vitrified.webp",
    },
    {
      name: "56",
      logo: "/clients/41 big tiles.webp",
    },
    {
      name: "57",
      logo: "/clients/42 landgrace ceramic.webp",
    },
    {
      name: "58",
      logo: "/clients/43 maps granito.webp",
    },
    {
      name: "59",
      logo: "/clients/44 simonza tiles.webp",
    },
    {
      name: "60",
      logo: "/clients/45 lexus granito.webp",
    },
    {
      name: "61",
      logo: "/clients/46 valenza ceramic.webp",
    },
    {
      name: "62",
      logo: "/clients/47 sparten granito.webp",
    },
    {
      name: "63",
      logo: "/clients/48 cefone ceramics.webp",
    },
    {
      name: "64",
      logo: "/clients/49 lito sanitarywares.webp",
    },
    {
      name: "65",
      logo: "/clients/50 velsaa granito.webp",
    },
    {
      name: "66",
      logo: "/clients/51 hawk granito.webp",
    },
    {
      name: "67",
      logo: "/clients/52 lv granito.webp",
    },
    {
      name: "68",
      logo: "/clients/53 sanskar ceramics.webp",
    },
    {
      name: "69",
      logo: "/clients/54 wintel ceramics.webp",
    },
    {
      name: "70",
      logo: "/clients/55 sonex ceramics.webp",
    },
    {
      name: "71",
      logo: "/clients/56 blizzard ceramics.webp",
    },
  ];

  const row1 = clients.slice(0, Math.ceil(clients.length / 3));
  const row2 = clients.slice(
    Math.ceil(clients.length / 3),
    Math.ceil((clients.length * 2) / 3),
  );
  const row3 = clients.slice(Math.ceil((clients.length * 2) / 3));
  return (
    <div className="w-full bg-white">
      {/* Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <Breadcrumb
          items={[{ label: "About Us", active: true }]}
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
                Varaia Traders is a leading Indian manufacturing firm based in
                the engineering hub of Rajkot, Gujarat. We specialize in
                precision-crafted Stainless Steel & Mild Steel (MS) corporate
                gifting utilities, desk accessories, and milestone trophies
                designed for long-lasting brand visibility.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Founded on the pillars of uncompromising metallurgical quality
                and high-speed execution, we bridge the gap between heavy
                industrial engineering and refined corporate aesthetics. From
                Fortune 500 corporate welcome kits to festive gifting for
                nationwide dealer networks, our products represent reliability
                and executive elegance.
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
              To be the most trusted global manufacturer for metal corporate
              gifting and executive desktop utilities—setting the global
              benchmark for metallurgical durability, sub-millimeter branding
              precision, and ethical volume supply chains.
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
              To engineer functional, beautiful metal products that solve
              everyday executive desk organization while delivering permanent,
              unyielding brand recall through high-speed in-house laser
              technology and direct factory economics.
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
              Each product line is manufactured to exact dimensional tolerances
              using prime grade metals.
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
                <h3 className="font-bold text-base text-[#151616] mb-1.5">
                  {spec.name}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {spec.desc}
                </p>
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
            Equipped with high-capacity production lines to meet demanding
            corporate timelines.
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
              <h3 className="font-bold text-lg text-[#151616] mb-2">
                {op.title}
              </h3>
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
                Our plant maintains continuous buffer stocks of all 57+
                catalogued items. When last-minute corporate conferences, AGMs,
                or executive onboarding needs arise, we can laser-mark and
                dispatch bulk orders within 24 to 48 hours.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#DD2B1C]/50 transition-colors">
                  <div className="text-2xl font-black text-[#DD2B1C] flex items-baseline">
                    <Counter value={57} suffix="+" />
                  </div>
                  <span className="text-xs text-gray-300 font-semibold block mt-0.5">
                    Active Metal Models
                  </span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#DD2B1C]/50 transition-colors">
                  <div className="text-2xl font-black text-[#DD2B1C] flex items-baseline">
                    <Counter value={1000} suffix="+" />
                  </div>
                  <span className="text-xs text-gray-300 font-semibold block mt-0.5">
                    Cartons Ready in Stock
                  </span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#DD2B1C]/50 transition-colors">
                  <div className="text-2xl font-black text-[#DD2B1C] flex items-baseline">
                    <Counter value={100} suffix="%" />
                  </div>
                  <span className="text-xs text-gray-300 font-semibold block mt-0.5">
                    In-House Laser Suite
                  </span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#DD2B1C]/50 transition-colors">
                  <div className="text-2xl font-black text-[#DD2B1C] flex items-baseline">
                    <Counter value={28} />
                  </div>
                  <span className="text-xs text-gray-300 font-semibold block mt-0.5">
                    States Pan-India Delivery
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800 space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">
                Factory Address & Credentials
              </h3>
              <p className="text-xs text-gray-400">
                <strong className="text-white">Facility:</strong> Aji Industrial
                Area, GIDC Industrial Estate, Rajkot - 360003, Gujarat, India
              </p>
              <p className="text-xs text-gray-400">
                <strong className="text-white">UDYAM Certificate:</strong>{" "}
                UDYAM-GJ-20-0089421
              </p>
              <p className="text-xs text-gray-400">
                <strong className="text-white">GSTIN:</strong> 24AABCV9821M1ZT
              </p>
              <p className="text-xs text-gray-400">
                <strong className="text-white">Direct Factory Desk:</strong> +91
                75679 99989 | jignesh@varaiatraders.com
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

      <section className="py-20 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#DD2B1C] block mb-2">
              Trusted By Industry Leaders
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-[#151616]">
              Trusted By 80+ Companies Across India
            </h2>

            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Banks, ceramic manufacturers, exporters, distributors and leading
              brands trust Varaia Traders for premium corporate gifting
              solutions.
            </p>
          </div>
        </div>

        {/* Row 1 */}
        <div className="overflow-hidden mb-6">
          <div className="flex animate-slide-left gap-6">
            {[...row1, ...row1].map((client, index) => (
              <LogoCard key={`r1-${index}`} client={client} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden mb-6">
          <div className="flex animate-slide-right gap-6">
            {[...row2, ...row2].map((client, index) => (
              <LogoCard key={`r2-${index}`} client={client} />
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div className="overflow-hidden">
          <div className="flex animate-slide-left-slow gap-6">
            {[...row3, ...row3].map((client, index) => (
              <LogoCard key={`r3-${index}`} client={client} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#DD2B1C] block mb-2">
              Trusted By Industry Leaders
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-[#151616]">
              Trusted By 80+ Companies Across India
            </h2>

            <p className="text-gray-500 mt-3">
              From banks and ceramic brands to manufacturers and exporters,
              Varaia Traders proudly serves businesses nationwide.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {clients.slice(0, visibleClients).map((client, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-200 h-28 flex items-center justify-center p-5 hover:border-[#DD2B1C] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {visibleClients < clients.length && (
            <div className="flex justify-center mt-12">
              <button
                onClick={loadMoreClients}
                className="px-8 py-3 bg-[#151616] hover:bg-black text-white rounded-xl font-semibold transition-all duration-300 cursor-pointer"
              >
                Load More Clients ({clients.length - visibleClients} Remaining)
              </button>
            </div>
          )}

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-200">
              <h3 className="text-4xl font-black text-[#DD2B1C]">80+</h3>
              <p className="text-sm text-gray-500 mt-1">Corporate Clients</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center border border-gray-200">
              <h3 className="text-4xl font-black text-[#DD2B1C]">28</h3>
              <p className="text-sm text-gray-500 mt-1">States Served</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center border border-gray-200">
              <h3 className="text-4xl font-black text-[#DD2B1C]">1L+</h3>
              <p className="text-sm text-gray-500 mt-1">Products Delivered</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center border border-gray-200">
              <h3 className="text-4xl font-black text-[#DD2B1C]">10+</h3>
              <p className="text-sm text-gray-500 mt-1">Years of Excellence</p>
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

const LogoCard = ({ client }) => (
  <div className="w-52 h-28 bg-white border border-gray-200 rounded-2xl flex items-center justify-center p-5 shadow-sm hover:shadow-lg transition-all shrink-0">
    <img
      src={client.logo}
      alt={client.name}
      loading="lazy"
      className="max-w-full max-h-full object-contain"
    />
  </div>
);
