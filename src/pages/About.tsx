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
import { motion } from "framer-motion";

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
      icon: <Smartphone className="w-5 h-5 text-[#007BFF]" />,
      desc: "stainless steel 202 and mild steel smartphone & tablet holders.",
    },
    {
      name: "Pen Stands",
      icon: <PenTool className="w-5 h-5 text-[#007BFF]" />,
      desc: "360° revolving executive caddies with brass bearings and felt bases.",
    },
    {
      name: "Paper Weights",
      icon: <Disc className="w-5 h-5 text-[#007BFF]" />,
      desc: "Solid 320g dome & geometric steel weights with mirror and brushed finishes.",
    },
    {
      name: "Notepads & Memo Docks",
      icon: <BookOpen className="w-5 h-5 text-[#007BFF]" />,
      desc: "Refillable steel-cased memo pads and desk sticky note dispensers.",
    },
    {
      name: "Desk Accessories",
      icon: <LayoutGrid className="w-5 h-5 text-[#007BFF]" />,
      desc: "5-in-1 multi-productivity hubs, metal bookends, and perpetual calendars.",
    },
    {
      name: "Business Gifts",
      icon: <Briefcase className="w-5 h-5 text-[#007BFF]" />,
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
  ];

  const clients2 = [
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
      logo: "/clients/05 indo brine industries.webp",
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

  const chunkSize = Math.ceil(clients.length / 3);

  const row1 = clients.slice(0, chunkSize);
  const row2 = clients.slice(chunkSize, chunkSize * 2);
  const row3 = clients.slice(chunkSize * 2);
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <Breadcrumb
          items={[{ label: "About Us", active: true }]}
          onNavigateHome={handleHomeClick}
        />
      </div>

      <section className="py-16 sm:py-20 bg-gray-50/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xs font-bold uppercase tracking-widest text-[#007BFF] block"
              >
                Manufacturing Legacy & Precision Engineering
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151616] tracking-tight leading-tight"
              >
                About VARAIA TRADERS
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium"
              >
                Varaia Traders is a leading Indian manufacturing firm based in
                the engineering hub of Rajkot, Gujarat. We specialize in
                precision-crafted Stainless Steel & Mild Steel (MS) corporate
                gifting utilities, desk accessories, and milestone trophies
                designed for long-lasting brand visibility.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-sm text-gray-600 leading-relaxed"
              >
                Founded on the pillars of uncompromising metallurgical quality
                and high-speed execution, we bridge the gap between heavy
                industrial engineering and refined corporate aesthetics. From
                Fortune 500 corporate welcome kits to festive gifting for
                nationwide dealer networks, our products represent reliability
                and executive elegance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openQuoteModal()}
                  className="bg-[#007BFF] hover:bg-[#005fcc] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  Request Bulk Quotation
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1OPPbAgEGQ8J5Kv5l9jjwdPeoPc3S4cUc/view?usp=sharing",
                      "_blank",
                    )
                  }
                  className="bg-[#151616] hover:bg-black text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#007BFF]" />
                  <span>Download Master Catalogue</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="lg:col-span-5"
            >
              <motion.div
                whileHover={{
                  y: -6,
                }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 aspect-[4/3] group"
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=900&auto=format&fit=crop"
                  alt="Varaia Traders Manufacturing Facility"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8 }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <motion.span
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xs font-bold uppercase tracking-widest text-[#007BFF]"
                  >
                    Rajkot Central Facility
                  </motion.span>

                  <motion.h3
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg font-bold"
                  >
                    CNC Laser Cutting, Metal Bending & Fiber Laser Marking
                  </motion.h3>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            whileHover={{
              y: -8,
              transition: { duration: 0.2 },
            }}
            className="group p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-2xl hover:border-[#007BFF]/20 transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 5, scale: 1.08 }}
              className="w-14 h-14 rounded-2xl bg-blue-50 text-[#007BFF] flex items-center justify-center mb-6"
            >
              <Eye className="w-7 h-7" />
            </motion.div>

            <span className="text-xs font-bold uppercase tracking-widest text-[#007BFF] block mb-2">
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
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            whileHover={{
              y: -8,
              transition: { duration: 0.2 },
            }}
            className="group p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-2xl hover:border-[#007BFF]/20 transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: -5, scale: 1.08 }}
              className="w-14 h-14 rounded-2xl bg-blue-50 text-[#007BFF] flex items-center justify-center mb-6"
            >
              <Target className="w-7 h-7" />
            </motion.div>

            <span className="text-xs font-bold uppercase tracking-widest text-[#007BFF] block mb-2">
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
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#007BFF] block mb-2">
              Engineering Expertise
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-[#151616] tracking-tight">
              Our Product Specialisations
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Each product line is manufactured to exact dimensional tolerances
              using prime grade metals.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialisations.map((spec, index) => (
              <motion.div
                key={spec.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-2xl hover:border-[#007BFF]/20 transition-all duration-300"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 5,
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-[#007BFF]"
                >
                  {spec.icon}
                </motion.div>

                {/* Title */}
                <h3 className="font-bold text-lg text-[#151616] mb-2 group-hover:text-[#007BFF] transition-colors">
                  {spec.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {spec.desc}
                </p>

                {/* Bottom Accent Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.3,
                  }}
                  className="h-1 bg-[#007BFF] rounded-full mt-5"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#007BFF] block mb-2">
            Execution Capabilities
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-[#151616] tracking-tight">
            Corporate Operations & Campaigns We Power
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Equipped with high-capacity production lines to meet demanding
            corporate timelines.
          </p>
        </motion.div>

        {/* Operations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {operationsHandled.map((op, index) => (
            <motion.div
              key={op.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="group relative overflow-hidden p-7 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-2xl hover:border-[#007BFF]/30 transition-all duration-300"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#007BFF] to-[#4DA3FF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

              {/* Count */}
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#007BFF] text-xs font-bold uppercase tracking-wider mb-4">
                {op.count}
              </span>

              {/* Title */}
              <h3 className="font-black text-xl text-[#151616] mb-3 group-hover:text-[#007BFF] transition-colors">
                {op.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">{op.desc}</p>

              {/* Bottom Animated Line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "70px" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15 + 0.3,
                }}
                className="h-1 bg-[#007BFF] rounded-full mt-6"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative py-16 sm:py-20 bg-[#151616] text-white overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#007BFF]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#007BFF]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#007BFF] block">
                Manufacturing Backbone • Rajkot
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                1000+ Cartons Ready Stock & Multi-Point Express Dispatch
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
                Our plant maintains continuous buffer stocks of all 57+
                catalogued items. When last-minute corporate conferences, AGMs,
                or executive onboarding needs arise, we can laser-mark and
                dispatch bulk orders within 24 to 48 hours.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  {
                    value: 57,
                    suffix: "+",
                    label: "Active Metal Models",
                  },
                  {
                    value: 1000,
                    suffix: "+",
                    label: "Cartons Ready in Stock",
                  },
                  {
                    value: 100,
                    suffix: "%",
                    label: "In-House Laser Suite",
                  },
                  {
                    value: 28,
                    suffix: "",
                    label: "States Pan-India Delivery",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -6,
                      borderColor: "rgba(0,123,255,0.5)",
                    }}
                    className="group bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-3xl font-black text-[#007BFF] flex items-baseline">
                      <Counter value={item.value} suffix={item.suffix} />
                    </div>

                    <span className="text-xs text-gray-300 font-semibold block mt-1">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#007BFF]/10 blur-2xl rounded-3xl" />

              <div className="relative bg-neutral-900/90 backdrop-blur-sm p-8 sm:p-10 rounded-3xl border border-neutral-800 shadow-2xl">
                <span className="inline-flex px-3 py-1 rounded-full bg-[#007BFF]/15 text-[#007BFF] text-xs font-bold uppercase tracking-wider mb-4">
                  Verified Business Credentials
                </span>

                <h3 className="text-2xl font-black text-white mb-6">
                  Office Address & Credentials
                </h3>

                <div className="space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#007BFF] font-bold mb-1">
                      Facility
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      303, THIRD FLOOR, AAKANKSHA COMPLEX, 11 VIJAY PLOT, OPP.
                      BIMAL TYRES, GONDAL ROAD, RAJKOT - 360002, GUJARAT, INDIA.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#007BFF] font-bold mb-1">
                      UDYAM Certificate
                    </p>
                    <p className="text-sm text-gray-300">UDYAM-GJ-20-0040020</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#007BFF] font-bold mb-1">
                      GSTIN
                    </p>
                    <p className="text-sm text-gray-300">24DSPPS1285F1ZD</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#007BFF] font-bold mb-1">
                      Contact
                    </p>
                    <p className="text-sm text-gray-300">+91 75679 99989</p>
                    <p className="text-sm text-gray-300">
                      jignesh@varaiatraders.com
                    </p>
                  </div>
                </div>

                <div className="pt-8">
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center bg-[#007BFF] hover:bg-[#0066d6] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#007BFF]/20"
                    >
                      Contact Procurement Team
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#007BFF] block mb-2">
              Trusted By Industry Leaders
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-[#151616]">
              Trusted By 80+ Companies Across India
            </h2>

            <p className="text-sm sm:text-base text-gray-500 mt-3 max-w-2xl mx-auto">
              Banks, ceramic manufacturers, exporters, distributors and leading
              brands trust Varaia Traders for premium corporate gifting
              solutions.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Row 1 */}
          <div className="overflow-hidden mb-4 sm:mb-6">
            <div className="marquee-track marquee-left">
              {[...row1, ...row1].map((client, index) => (
                <div key={`r1-${index}`} className="mr-4 sm:mr-6">
                  <LogoCard client={client} />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden mb-4 sm:mb-6">
            <div className="marquee-track marquee-right">
              {[...row2, ...row2].map((client, index) => (
                <div key={`r2-${index}`} className="mr-4 sm:mr-6">
                  <LogoCard client={client} />
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 */}
          <div className="overflow-hidden">
            <div className="marquee-track marquee-slow">
              {[...row3, ...row3].map((client, index) => (
                <div key={`r3-${index}`} className="mr-4 sm:mr-6">
                  <LogoCard client={client} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {clients2.slice(0, visibleClients).map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: (index % 12) * 0.05,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                className="group w-full h-20 sm:h-24 md:h-28 bg-white border border-gray-200 rounded-2xl flex items-center justify-center p-4 hover:border-[#007BFF]/30 hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>

          {visibleClients < clients.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex justify-center mt-12"
            >
              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
                onClick={loadMoreClients}
                className="px-8 py-3 bg-[#151616] hover:bg-[#007BFF] text-white rounded-xl font-semibold transition-all duration-300 cursor-pointer shadow-lg"
              >
                Load More Clients ({clients.length - visibleClients} Remaining)
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      <CTA />
    </div>
  );
};
export default About;

const LogoCard = ({ client }) => {
  return (
    <div className="w-28 sm:w-36 md:w-44 h-16 sm:h-20 md:h-24 bg-white border border-gray-200 rounded-xl sm:rounded-2xl flex items-center justify-center p-3 sm:p-4 shrink-0 hover:shadow-lg transition-all duration-300">
      <img
        src={client.logo}
        alt={client.name}
        loading="lazy"
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
};
