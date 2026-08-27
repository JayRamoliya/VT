import { Product, CategoryType } from "../types";

export const CATEGORIES: CategoryType[] = [
  "All",
  "Mobile Stand",
  "Pen Stand",
  "Paper Weight",
  "Notepad",
  "Desk Organiser",
  "Table Calendar",
  "Corporate Gifts in Metal",
  "Premium Office Accessories",
];

export const PRODUCTS: Product[] = [
  // 1. MOBILE STANDS
  {
    id: "vt-ms-01",
    slug: "ergonomic-stainless-steel-mobile-stand",
    name: "Executive Ergonomic Stainless Steel Mobile Stand",
    category: "Mobile Stand",
    subcategory: "Desktop Phone Cradles",
    itemCode: "VT-1101",
    material: "CRC & SS",
    finish: "Brushed Satin Finish / Anti-Fingerprint Coating",
    dimensions: "85mm x 75mm x 95mm",
    weight: "210 grams",
    minOrderQty: 100,
    readyStockCount: "1000+ Cartons Available",
    laserMarkingAvailable: true,
    colorOptions: [
      "Silver Chrome",
      "Gunmetal Grey",
      "Matte Jet Black",
      "Rose Gold Tone",
    ],
    packaging: "Rigid Velvet-Lined Executive Gift Box with Sleeve",
    shortDescription:
      "Precision engineered heavy gauge stainless steel smartphone stand with anti-slip silicone pads and premium laser engraving plate.",
    description:
      "The VT-MS-01 Executive Ergonomic Mobile Stand is manufactured from heavy-duty 304-grade stainless steel, ensuring zero wobble even with tablet-sized devices. Designed for contemporary executive desks, it features a 60-degree viewing angle optimized for Zoom video calls, continuous charging cable routing, and dedicated laser marking zones for high-definition corporate logo engraving.",
    features: [
      "Heavy-duty solid steel construction with anti-topple stability",
      "Dual anti-scratch silicone protective cushions for mobile safety",
      "Dedicated cable pass-through port for clean desk charging",
      "High-contrast fiber laser etching surface for brand logos",
      "Rust-proof lifetime durability with satin brush polish",
    ],
    specifications: {
      "Raw Material": "AISI 304 Grade Stainless Steel (2.0mm thickness)",
      "Surface Finishing": "Satin Brushed with Nanotech Anti-Fingerprint Layer",
      "Device Compatibility":
        'All smartphones (4.0" to 7.2") and tablets up to 11"',
      "Branding Area":
        "Front lower lip (45mm x 15mm) & Back panel (60mm x 40mm)",
      "Standard MOQ": "100 Pieces",
      "Ready Stock Capacity": "1000+ Cartons in Rajkot Central Warehouse",
      "Lead Time for Bulk": "2-4 Business Days with Custom Laser Marking",
    },
    images: [
      "/image/VT-1101/vt-1101-ms.webp",
      "/image/VT-1101/vt-1101-ms2.webp",
      "/image/VT-1101/vt-1101-ms3.webp",
      "/image/VT-1101/vt-1101-ms4.webp",
      "/image/VT-1101/vt-1101-ms5.webp",
      "/image/VT-1101/vt-1101-ms6.webp",
    ],
    featured: true,
    inStock: true,
    bestFor: [
      "Employee Welcome Kits",
      "Annual Corporate Conferences",
      "Client Appreciation Hampers",
      "Dealer Gifts",
    ],
    estimatedLeadTime: "2-4 Days",
  },
  {
    id: "vt-ms-01",
    slug: "metal-mobile-stand-with-card-holder",
    name: "Premium Metal Mobile Stand with Card Holder",
    category: "Mobile Stand",
    subcategory: "Desktop Phone Stand",
    itemCode: "VT-1101",
    material: "CRC & SS",
    finish: "Powder Coated / Stainless Steel Finish",
    dimensions: "95mm x 70mm x 85mm",
    weight: "Black: 150 grams | Stainless Steel: 140 grams",
    minOrderQty: 100,
    readyStockCount: "1000+ Pieces Available",
    laserMarkingAvailable: true,
    colorOptions: ["Matte Black", "Stainless Steel Silver"],
    packaging: "Individual Gift Box Packing",
    shortDescription:
      "Premium metal mobile stand with integrated card holder, anti-slip support design, and branding area for corporate gifting.",

    description:
      "The VT-1101 Metal Mobile Stand with Card Holder is a compact and durable desktop accessory designed for modern workspaces. Manufactured using premium CRC and Stainless Steel material with 0.92mm to 1mm thickness, it provides stable support for smartphones while also functioning as a convenient business card holder. Its sleek design, lightweight construction, and dedicated branding area make it an ideal promotional product for corporate gifting, employee welcome kits, trade shows, and marketing campaigns.",

    features: [
      "Strong CRC & Stainless Steel construction",
      "Built-in card holder for business cards and visiting cards",
      "Compact desktop-friendly design",
      "Suitable for smartphones of various sizes",
      "Premium branding area for laser engraving or printing",
      "Rust-resistant and long-lasting finish",
      "Lightweight yet stable structure",
    ],

    specifications: {
      "Raw Material": "CRC & Stainless Steel",
      "Material Thickness": "0.92mm to 1.0mm",
      Height: "85mm",
      Length: "95mm",
      Width: "70mm",
      "Weight (Black)": "150 grams",
      "Weight (Stainless Steel)": "140 grams",
      "Device Compatibility": "All Smartphones",
      "Branding Option": "Laser Marking / Screen Printing",
      "Standard MOQ": "100 Pieces",
      "Ready Stock Availability": "1000+ Pieces",
    },

    images: [
      "/image/VT-1102/vt-1102-ms.webp",
    ],

    featured: true,
    inStock: true,

    bestFor: [
      "Corporate Gifts",
      "Employee Welcome Kits",
      "Trade Shows & Exhibitions",
      "Dealer Meet Gifts",
      "Client Appreciation Gifts",
      "Promotional Campaigns",
    ],

    estimatedLeadTime: "2-4 Days",
  },

  // 2. PEN STANDS
  {
    id: "vt-ps-01",
    slug: "executive-revolving-ms-pen-caddy",
    name: "Executive Revolving MS Metal Pen Caddy",
    category: "Pen Stand",
    subcategory: "Revolving Desk Organisers",
    itemCode: "VT-PS-01",
    material: "Mild Steel (MS) + Brass Pivot Core",
    finish: "Matte Anthracite Black with Brushed Steel Collar",
    dimensions: "75mm Diameter x 105mm Height",
    weight: "340 grams",
    minOrderQty: 100,
    readyStockCount: "1200+ Cartons Available",
    laserMarkingAvailable: true,
    colorOptions: ["Anthracite Black", "Silver Metallic", "Midnight Navy"],
    packaging: "Executive Magnetic Clasp Gift Box",
    shortDescription:
      "360-degree rotating mild steel pen stand with silent bearing mechanism, weighted base, and wrap-around laser branding area.",
    description:
      "A benchmark in desk luxury, the VT-PS-01 combines heavy MS metal durability with an ultra-smooth 360-degree revolving base. Holds up to 10 executive writing instruments securely with protective internal felt lining.",
    features: [
      "Precision brass bearing for silent, frictionless 360 rotation",
      "Heavy weighted base lined with EVA foam prevents desk scratches",
      "Internal acoustic dampening base pad for quiet pen drops",
      "Broad circular perimeter ideal for 360 laser branding or client slogans",
    ],
    specifications: {
      "Material Composition": "Heavy Gauge CRCA Mild Steel + Solid Brass Hub",
      Capacity: "8-12 Standard Executive Pens/Styluses",
      "Surface Treatment": "Scratch-resistant Powder Coat & Metallic Lacquer",
      "Standard MOQ": "100 Pieces",
      Packaging: "Individual Protective EPE Form Box",
    },
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=900&auto=format&fit=crop",
    ],
    featured: true,
    inStock: true,
    bestFor: [
      "Corporate Anniversaries",
      "Law Firms & Financial Institutes",
      "Doctor & Medical Conferences",
    ],
    estimatedLeadTime: "2-4 Days",
  },
  {
    id: "vt-ps-02",
    slug: "solid-stainless-steel-minimalist-pen-barrel",
    name: "Solid Stainless Steel Minimalist Pen Barrel",
    category: "Pen Stand",
    subcategory: "Single & Multi Pen Holders",
    itemCode: "VT-PS-02",
    material: "Solid Stainless Steel 304",
    finish: "Horizontal Fine Brushed Polish",
    dimensions: "65mm x 65mm x 95mm",
    weight: "380 grams",
    minOrderQty: 100,
    readyStockCount: "900+ Cartons Available",
    laserMarkingAvailable: true,
    colorOptions: ["Natural Brushed Steel", "Rose Gold Plated", "PVD Gunmetal"],
    packaging: "Rigid White Box with Hot Foil Stamped Logo option",
    shortDescription:
      "Heavy monobloc aesthetic pen holder carved from prime steel with seamless cylindrical contours.",
    description:
      "Minimalist European desk aesthetics combined with Indian industrial metallurgy. This monolithic stainless steel pen barrel commands attention on any CEO desk.",
    features: [
      "Monolithic heavy design, virtually indestructible",
      "Zero maintenance rust-proof 304 alloy",
      "Generous 360-degree laser marking area for company crest",
    ],
    specifications: {
      "Raw Material": "SS 304 Solid Stock",
      Finish: "Directional Satin Polish",
      Branding: "Deep Laser Engraving",
    },
    images: [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop",
    ],
    featured: false,
    inStock: true,
    bestFor: ["C-Suite Executive Gifts", "Banking Sector Gifting"],
    estimatedLeadTime: "2-4 Days",
  },
  {
    id: "vt-ps-03",
    slug: "dual-pen-stand-with-visiting-card-slot",
    name: "Dual Pen Stand with Visiting Card & Clock Slot",
    category: "Pen Stand",
    subcategory: "Combo Desk Sets",
    itemCode: "VT-PS-03",
    material: "Combination MS & Stainless Steel Accents",
    finish: "Matte Black Base with Mirror Steel Front Plate",
    dimensions: "140mm x 60mm x 90mm",
    weight: "420 grams",
    minOrderQty: 100,
    readyStockCount: "750+ Cartons Available",
    laserMarkingAvailable: true,
    colorOptions: ["Dual Tone Black & Silver", "Full Brushed Steel"],
    packaging: "Premium Window Display Gift Box",
    shortDescription:
      "Multi-functional corporate desk companion integrating dual pen slots, business card holder, and optional analog clock cavity.",
    description:
      "An all-in-one corporate classic. Built with dual pen sockets angled for easy reach, a precision slot holding 30+ business cards, and a stainless steel plaque built for high-detail corporate laser branding.",
    features: [
      "Dual utility: pen repository and executive visiting card display",
      "Heavy MS base prevents shifting",
      "Front brushed steel plate dedicated for personalized laser name marking",
    ],
    specifications: {
      "Raw Material": "Mild Steel Base + SS 304 Nameplate",
      "Card Capacity": "Up to 35 standard 350 GSM cards",
      "Pen Slots": "2 Universal Fit Receptacles",
    },
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=900&auto=format&fit=crop",
    ],
    featured: false,
    inStock: true,
    bestFor: [
      "Doctor Clinic Desks",
      "Chartered Accountants & Legal Advisors",
      "Corporate Welcome Gifts",
    ],
    estimatedLeadTime: "3-5 Days",
  },

  // 3. PAPER WEIGHTS
  {
    id: "vt-pw-01",
    slug: "solid-stainless-steel-dome-paper-weight",
    name: "Solid Stainless Steel Dome Precision Paper Weight",
    category: "Paper Weight",
    subcategory: "Steel Paper Weights",
    itemCode: "VT-PW-01",
    material: "Solid SS 304 Stainless Steel",
    finish: "Mirror Polished Perimeter with Brushed Top Dome",
    dimensions: "70mm Diameter x 28mm Height",
    weight: "320 grams",
    minOrderQty: 100,
    readyStockCount: "1500+ Cartons Available",
    laserMarkingAvailable: true,
    colorOptions: [
      "Polished Silver",
      "Titanium Black PVD",
      "Golden Brass Tone",
    ],
    packaging: "Luxury Velvet Pouch inside Rigid Silver Foil Box",
    shortDescription:
      "Heavy solid stainless steel hemispherical dome paper weight with laser etched corporate logo and velvet bottom cushion.",
    description:
      "Forged from a single ingot of 304 stainless steel, the VT-PW-01 offers substantial reassuring weight. Its flat top dome provides a circular canvas for company emblems, mottoes, and personalized employee milestones.",
    features: [
      "320g solid steel heft secures thick architectural drawings and documents",
      "Scratch-resistant velvet base protects delicate glass and wooden desks",
      "High-precision CNC machined symmetry",
      "Resistant to oxidation, sweat, and corrosion",
    ],
    specifications: {
      Diameter: "70mm precision ground",
      "Base Lining": "Premium 1.5mm Black Velvet Felt",
      "Branding Surface Area": "50mm circular top diameter",
      "Standard MOQ": "100 Pieces",
      "Stock Availability": "Immediate Dispatch from Ready Stock",
    },
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=900&auto=format&fit=crop",
    ],
    featured: true,
    inStock: true,
    bestFor: [
      "Real Estate & Construction Gifts",
      "Architect & Engineering Mementos",
      "Corporate Souvenirs",
    ],
    estimatedLeadTime: "2-3 Days",
  },
  {
    id: "vt-pw-02",
    slug: "matte-black-ms-hexagonal-paper-weight",
    name: "Architectural MS Hexagonal Prism Paper Weight",
    category: "Paper Weight",
    subcategory: "Geometric MS Weights",
    itemCode: "VT-PW-02",
    material: "Heavy Mild Steel Solid Hex Bar",
    finish: "Matte Textured Black E-Coat",
    dimensions: "65mm Side-to-Side x 30mm Height",
    weight: "290 grams",
    minOrderQty: 100,
    readyStockCount: "1100+ Cartons Available",
    laserMarkingAvailable: true,
    colorOptions: ["Matte Black", "Brushed Gunmetal", "Industrial Grey"],
    packaging: "Kraft Eco-Luxury Gift Box",
    shortDescription:
      "Modern geometric hexagon paper weight with crisp multifaceted edges and silver laser contrast branding.",
    description:
      "Inspired by modern industrial architecture, this hexagonal mild steel paper weight features sharp bevels and a solid, weighty feel. The 6 lateral facets allow multiple messages or values to be etched on different sides.",
    features: [
      "Geometric 6-sided design prevents rolling on angled drafting tables",
      "Heavy solid steel core",
      "Crisp silver laser engraving on all 6 facets",
    ],
    specifications: {
      Material: "High Density Carbon Mild Steel",
      Surface: "Electro-Deposition Matte Coat",
      "Branding Area": "Top Hexagon (55mm) + 6 Facet Strips",
    },
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=900&auto=format&fit=crop",
    ],
    featured: false,
    inStock: true,
    bestFor: ["Startups & Tech Companies", "Manufacturing Vendor Gifting"],
    estimatedLeadTime: "2-4 Days",
  },

  // 4. NOTEPAD & DIARY CASES
  {
    id: "vt-np-01",
    slug: "stainless-steel-cased-executive-notepad",
    name: "Stainless Steel Cased Executive Memo Dock",
    category: "Notepad",
    subcategory: "Metal Memo Holders",
    itemCode: "VT-NP-01",
    material: "Brushed SS 304 Cover + Refillable Premium Memo Sheets",
    finish: "Brushed Titanium Finish",
    dimensions: "135mm x 95mm x 22mm",
    weight: "280 grams",
    minOrderQty: 100,
    readyStockCount: "950+ Cartons Available",
    laserMarkingAvailable: true,
    colorOptions: ["Stainless Silver", "Charcoal Black Steel"],
    packaging: "Hardbound Presentation Box with Magnetic Closure",
    shortDescription:
      "Refillable metal-cased memo dock with built-in steel pen clip slot and precision engraved front steel cover.",
    description:
      'A permanent fixture for busy professionals. The solid stainless steel outer frame holds standard 3x5" memo refill pads securely, while the brushed exterior protects notes and presents a grand corporate identity.',
    features: [
      "Sturdy steel shell keeps memo pads pristine and flat",
      "Standard universal refill compatibility",
      "Large front branding canvas for company logo & tagline",
      "Integrated magnetic or friction pen lock slot",
    ],
    specifications: {
      "Cover Material":
        "0.8mm Brushed SS 304 Sheet with Rounded Safety Corners",
      "Included Pad": "120 Sheets 100 GSM Natural Shade Bond Paper",
      "Branding Area": "Full Cover (100mm x 70mm)",
      MOQ: "100 Units",
    },
    images: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=900&auto=format&fit=crop",
    ],
    featured: true,
    inStock: true,
    bestFor: [
      "Executive Conferences",
      "Board Meetings",
      "Training & HR Welcome Packs",
    ],
    estimatedLeadTime: "3-5 Days",
  },
  {
    id: "vt-np-02",
    slug: "ms-desktop-sticky-note-dispenser-holder",
    name: "MS Desktop Sticky Note Dispenser & Card Organiser",
    category: "Notepad",
    subcategory: "Desk Memo Organisers",
    itemCode: "VT-NP-02",
    material: "Heavy Mild Steel (MS)",
    finish: "Smooth Matte Powder Finish",
    dimensions: "110mm x 110mm x 35mm",
    weight: "240 grams",
    minOrderQty: 100,
    readyStockCount: "1000+ Cartons Available",
    laserMarkingAvailable: true,
    colorOptions: ["Matte Black", "Silver Grey", "Crimson Red Accent"],
    packaging: "Custom Printed Sleeve on Corrugated Box",
    shortDescription:
      "Heavy metal desktop dispenser for 3x3 inch Post-it pads and business cards with front logo plate.",
    description:
      "Eliminate cluttered desks with this heavy MS sticky note tray. Features a thumb cut-out for single-sheet extraction and front lip for visiting cards.",
    features: [
      "Thumb notch allows one-handed sheet retrieval without lifting the holder",
      "Weighted metal design stays stationary while peeling notes",
      "Laser marking on front bezel and side walls",
    ],
    specifications: {
      Material: "CRCA Mild Steel 1.5mm",
      Capacity: 'Standard 3x3" 100-sheet pads',
      MOQ: "100 Pieces",
    },
    images: [
      "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=900&auto=format&fit=crop",
    ],
    featured: false,
    inStock: true,
    bestFor: [
      "Agile Office Teams",
      "Call Center Desks",
      "Corporate Training Souvenirs",
    ],
    estimatedLeadTime: "2-4 Days",
  },

  // 5. DESK ORGANISERS
  {
    id: "vt-do-01",
    slug: "5-in-1-master-steel-desktop-hub",
    name: "5-in-1 Master Steel & MS Desktop Productivity Hub",
    category: "Desk Organiser",
    subcategory: "Multi-Compartment Organisers",
    itemCode: "VT-DO-01",
    material: "Heavy MS Body + Stainless Steel Front Panel",
    finish: "Dual Tone Anthracite Grey & Brushed SS",
    dimensions: "220mm x 120mm x 85mm",
    weight: "620 grams",
    minOrderQty: 100,
    readyStockCount: "800+ Cartons Available",
    laserMarkingAvailable: true,
    colorOptions: [
      "Dual Tone Grey & Silver",
      "Full Matte Black",
      "Deep Corporate Blue",
    ],
    packaging: "Deluxe Padded Corporate Gift Case",
    shortDescription:
      "Flagship multi-utility desktop station consolidating mobile stand, dual pen barrel, card holder, paper clip reservoir, and memo tray.",
    description:
      "The ultimate corporate gift for senior managers and business leaders. The VT-DO-01 brings order to executive workspaces by unifying everyday desk essentials into a single architectural metal masterpiece.",
    features: [
      "5 distinct ergonomic functional compartments in one seamless unit",
      "Dedicated front slot for smartphones with charging cable access",
      "High-grade stainless steel front branding bar for prominent laser logo display",
      "Lined with anti-vibration velvet bases in every slot",
    ],
    specifications: {
      Construction: "Folded MS Chassis + CNC Routed 304 SS Faceplate",
      Compartments:
        "Mobile Slot, 2 Pen Tubes, Memo Pad Cavity, Clip Tray, Visiting Card Bay",
      "Branding Surface": "160mm x 20mm Front SS Plaque + Back Panel",
      MOQ: "100 Units",
      "Bulk Stock": "800+ Cartons Ready in Rajkot",
    },
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=900&auto=format&fit=crop",
    ],
    featured: true,
    inStock: true,
    bestFor: [
      "Executive Onboarding Kits",
      "Diwali Corporate Hampers",
      "Retirement & Long Service Awards",
      "MNC Vendor Gifting",
    ],
    estimatedLeadTime: "3-5 Days",
  },
  {
    id: "vt-do-02",
    slug: "modular-3-piece-magnetic-metal-desk-tidy",
    name: "Modular 3-Piece Magnetic Metal Desk Tidy",
    category: "Desk Organiser",
    subcategory: "Modular Sets",
    itemCode: "VT-DO-02",
    material: "Cold Rolled Mild Steel with Neodymium Linking Magnets",
    finish: "Fine Sandy Texture Powder Coat",
    dimensions: "200mm x 90mm x 75mm (Combined)",
    weight: "480 grams",
    minOrderQty: 100,
    readyStockCount: "600+ Cartons Available",
    laserMarkingAvailable: true,
    colorOptions: ["Graphite Black", "Sandstone Grey", "Silver Metallic"],
    packaging: "Tri-fold Magnetic Gift Box",
    shortDescription:
      "Three magnetically interlocking metal modules that can be arranged in linear, triangular, or separated configurations.",
    description:
      "Offers playful flexibility on the modern desk. The three components (Pen Cup, Phone Stand, and Catchall Tray) snap together with embedded neodymium magnets.",
    features: [
      "Invisible hidden neodymium magnets allow customizable desk setups",
      "Laser marking on individual modules or unified base",
      "High tactile satisfaction with premium textured feel",
    ],
    specifications: {
      Modules: "3 Separate Interlocking Blocks",
      Material: "1.2mm Cold Rolled MS Sheet",
      MOQ: "100 Sets",
    },
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop",
    ],
    featured: false,
    inStock: true,
    bestFor: [
      "Creative Agency Gifting",
      "Tech & IT Firms",
      "Corporate Youth Summits",
    ],
    estimatedLeadTime: "3-6 Days",
  },

  // 6. TABLE CALENDARS
  {
    id: "vt-tc-01",
    slug: "perpetual-stainless-steel-rolling-calendar",
    name: "Perpetual Stainless Steel Rolling Table Calendar",
    category: "Table Calendar",
    subcategory: "Perpetual Metal Calendars",
    itemCode: "VT-TC-01",
    material: "SS 304 Solid Plate + Anodized Aluminum Date Sliders",
    finish: "Vertical Hairline Brushed Finish",
    dimensions: "160mm x 80mm x 45mm",
    weight: "360 grams",
    minOrderQty: 100,
    readyStockCount: "1000+ Cartons Available",
    laserMarkingAvailable: true,
    colorOptions: ["Satin Silver", "Obsidian Black", "Golden PVD"],
    packaging: "Hardboard Velvet Casket Box with Ribbon Pull",
    shortDescription:
      "Timeless perpetual steel desk calendar with sliding magnetic month/date indicators and prominent annual branding space.",
    description:
      "Unlike paper calendars that get discarded at year-end, the VT-TC-01 is a perpetual metal calendar that remains on the client’s desk for decades, delivering permanent daily brand visibility.",
    features: [
      "Perpetual design works for all years — zero obsolescence",
      "Magnetic slider effortlessly tracks current day and month",
      "Large central branding area for high-resolution company branding",
      "Heavy stainless steel base withstands daily touch",
    ],
    specifications: {
      Material: "Virgin SS 304 Sheet 2.0mm",
      Mechanism: "Precision Magnetic Slide Indexer",
      Longevity: "Lifetime perpetual use",
      "Standard MOQ": "100 Pieces",
      Stock: "1000+ Cartons Ready Stock",
    },
    images: [
      "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=900&auto=format&fit=crop",
    ],
    featured: true,
    inStock: true,
    bestFor: [
      "New Year Corporate Gifting",
      "Annual Client Appreciation",
      "Financial Year-End Giveaways",
    ],
    estimatedLeadTime: "2-4 Days",
  },
  {
    id: "vt-tc-02",
    slug: "ms-standing-flip-calendar-with-branding-plate",
    name: "MS Standing Flip Calendar with Replaceable Leaf Stand",
    category: "Table Calendar",
    subcategory: "Flip Calendar Stands",
    itemCode: "VT-TC-02",
    material: "Heavy Mild Steel A-Frame Chassis",
    finish: "Gloss Powder Coat with Metallic Sparkle",
    dimensions: "180mm x 120mm x 60mm",
    weight: "310 grams",
    minOrderQty: 100,
    readyStockCount: "850+ Cartons Available",
    laserMarkingAvailable: true,
    colorOptions: ["Midnight Black", "Imperial Blue", "Silver Sparkle"],
    packaging: "Standard Kraft Box with Polyfoam inserts",
    shortDescription:
      "Industrial A-frame metal calendar chassis holding standard 12-month calendar leaf refills with permanent metal branding top.",
    description:
      "Designed for corporate organizations that distribute annual paper calendar refills while providing a durable, high-prestige metal standing frame.",
    features: [
      "Sturdy A-frame metal geometry resists tipping",
      "Top metal arch built for laser engraving and company slogan",
      "Allows easy swap of spiral calendar pads year after year",
    ],
    specifications: {
      Frame: "1.5mm MS Sheet Press-Brake Formed",
      Rings: "Durable Steel Wire-O Ring Anchors",
      MOQ: "100 Units",
    },
    images: [
      "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=900&auto=format&fit=crop",
    ],
    featured: false,
    inStock: true,
    bestFor: [
      "Banking & Insurance Networks",
      "Pharma Companies",
      "Dealer Network Calendars",
    ],
    estimatedLeadTime: "3-5 Days",
  },

  // 7. CORPORATE GIFTS IN METAL
  {
    id: "vt-cg-01",
    slug: "executive-stainless-steel-visiting-card-holder",
    name: "Executive Stainless Steel Pocket Visiting Card Case",
    category: "Corporate Gifts in Metal",
    subcategory: "Card Holders",
    itemCode: "VT-CG-01",
    material: "Mirror Polished SS 304 with Velvet Interior",
    finish: "Mirror Chrome & Matte Dual Stripe",
    dimensions: "93mm x 60mm x 8mm",
    weight: "65 grams",
    minOrderQty: 100,
    readyStockCount: "2000+ Cartons Available",
    laserMarkingAvailable: true,
    colorOptions: ["Mirror Silver", "Matte Titanium", "Rose Gold PVD"],
    packaging: "Individual Black Slider Box with Velvet Bed",
    shortDescription:
      "Ultra-slim stainless steel business card case with spring latch mechanism and full-surface laser marking capability.",
    description:
      "The definitive business networking accessory. Protects visiting cards from bending, moisture, and creasing while creating an instantaneous statement of precision during client handshakes.",
    features: [
      "Holds 15-20 standard business cards securely",
      "Snug click-lock spring mechanism prevents accidental spills",
      "Entire lid is customizable with laser etching, QR codes, or personalized names",
    ],
    specifications: {
      Material: "0.5mm High Spring-Temper Stainless Steel",
      Lining: "Anti-Scratch Microfiber Velvet Inner",
      "Standard MOQ": "100 Pieces",
      "Stock Ready": "2000+ Cartons in Stock",
    },
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=900&auto=format&fit=crop",
    ],
    featured: true,
    inStock: true,
    bestFor: [
      "Sales Team Kits",
      "Event Participant Welcome Gifts",
      "Exhibition Giveaways",
    ],
    estimatedLeadTime: "1-3 Days",
  },
  {
    id: "vt-cg-02",
    slug: "heavy-metal-executive-coaster-set-4pc",
    name: "Heavy Metal Executive Coaster Set with Holder (4 Pcs)",
    category: "Corporate Gifts in Metal",
    subcategory: "Coaster Sets",
    itemCode: "VT-CG-02",
    material: "Solid Stainless Steel + Cork Base Underlay",
    finish: "Radial Sunburst Brushed Polish",
    dimensions: "90mm Diameter x 4mm Thick (Each)",
    weight: "390 grams (Complete Set)",
    minOrderQty: 100,
    readyStockCount: "900+ Cartons Available",
    laserMarkingAvailable: true,
    colorOptions: ["Brushed Silver", "Smoky Gunmetal", "Champagne Gold"],
    packaging: "Custom Rigid Gift Casket with Foam Insert",
    shortDescription:
      "Set of 4 heavy gauge stainless steel drink coasters with natural Portuguese cork backing and matching steel cradle.",
    description:
      "Elevates boardroom discussions and executive cabins. Each coaster features radial sunburst brushing that repels water condensation rings and highlights the laser etched corporate logo.",
    features: [
      "Thick non-slip cork base prevents table thermal rings and scratches",
      "Comes with dedicated matching steel caddy stand",
      "Laser marking on every coaster plus the outer caddy frame",
    ],
    specifications: {
      Quantity: "4 Coasters + 1 Standing Caddy",
      Material: "1.5mm SS 304 + 2.5mm Natural Cork",
      MOQ: "100 Sets",
    },
    images: [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=900&auto=format&fit=crop",
    ],
    featured: false,
    inStock: true,
    bestFor: [
      "Hospitality & Hotel Chains",
      "VIP Boardroom Gifting",
      "Festival Corporate Hampers",
    ],
    estimatedLeadTime: "2-4 Days",
  },


  // 10. PREMIUM OFFICE ACCESSORIES
  {
    id: "vt-poa-01",
    slug: "stainless-steel-precision-desk-ruler-magnifier",
    name: "Architectural Stainless Steel Precision Desk Ruler & Bookmark",
    category: "Premium Office Accessories",
    subcategory: "Desk Tools",
    itemCode: "VT-POA-01",
    material: "Hardened Stainless Steel Spring Alloy",
    finish: "Deep Etched Metric & Imperial Scales with Satin Finish",
    dimensions: "200mm x 30mm x 1.5mm",
    weight: "75 grams",
    minOrderQty: 100,
    readyStockCount: "3000+ Cartons Available",
    laserMarkingAvailable: true,
    colorOptions: ["Brushed Steel", "Matte Black Laser Etched"],
    packaging: "Protective Leatherette Sleeve in White Box",
    shortDescription:
      "Engineered solid stainless steel 20cm desk ruler with zero-slip micro-ridge and permanent laser marking brand banner.",
    description:
      "An enduring everyday desktop instrument. Made of hardened stainless steel that never bends or loses edge straightness, providing decades of daily brand recall.",
    features: [
      "Permanent laser-annealed metric and imperial markings",
      "Straight edge for technical drafting, paper cutting, and document markup",
      "Includes fine-stitched corporate leatherette protective sleeve",
    ],
    specifications: {
      Material: "AISI 420 Hardened Stainless Steel",
      "Measurement Range": "0-20 cm / 0-8 inches",
      Stock: "3000+ Cartons Ready Stock",
    },
    images: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=900&auto=format&fit=crop",
    ],
    featured: false,
    inStock: true,
    bestFor: [
      "Engineering & Construction Firms",
      "Student Orientation Kits",
      "Direct Mail Corporate Promotions",
    ],
    estimatedLeadTime: "1-3 Days",
  },
  {
    id: "vt-poa-02",
    slug: "heavy-ms-architectural-bookends-pair",
    name: "Heavy MS Architectural Geometric Bookends (Pair)",
    category: "Premium Office Accessories",
    subcategory: "Bookends & Shelf Organisers",
    itemCode: "VT-POA-02",
    material: "2.5mm Heavy Gauge Cold Rolled Mild Steel",
    finish: "Industrial Matte Black Textured Coat",
    dimensions: "140mm x 120mm x 160mm (Each)",
    weight: "890 grams (Pair)",
    minOrderQty: 100,
    readyStockCount: "650+ Cartons Available",
    laserMarkingAvailable: true,
    colorOptions: ["Matte Black", "Brushed Raw Steel Lacquered", "Signal Red"],
    packaging: "Heavy Corrugated Presentation Box with Custom Foam",
    shortDescription:
      "Pair of heavy gauge mild steel L-shaped bookends with laser-cut geometric profile and anti-skid rubber base.",
    description:
      "Holds heavy hardbound manuals, law registers, and corporate encyclopedias firmly upright without sliding. Features crisp silver laser engraving along the vertical face.",
    features: [
      "Heavy 890g combined weight securely anchors tall books and binders",
      "Anti-scratch felt base safeguards polished mahogany and oak shelving",
      "Generous laser marking area for corporate heritage slogans",
    ],
    specifications: {
      Quantity: "Set of 2 Matching Bookends",
      Thickness: "2.5mm Solid Steel Sheet",
      MOQ: "100 Pairs",
    },
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=900&auto=format&fit=crop",
    ],
    featured: true,
    inStock: true,
    bestFor: [
      "Law Libraries & Auditor Offices",
      "Corporate Library Upgrades",
      "Executive Suite Gifts",
    ],
    estimatedLeadTime: "2-4 Days",
  },
];

export const CATEGORY_DETAILS: Record<
  CategoryType,
  {
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    count: number;
    image: string;
  }
> = {
  All: {
    title: "Complete Corporate Gifting Catalogue",
    subtitle: "57+ Ready-to-Ship Steel & MS Corporate Gift Items",
    description:
      "Browse our full manufacturing range of stainless steel mobile stands, metal pen caddies, paper weights, desk organisers, table calendars, awards, and trophies.",
    icon: "Layers",
    count: 57,
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=900&auto=format&fit=crop",
  },
  "Mobile Stand": {
    title: "Steel Mobile Stands",
    subtitle: "Ergonomic & Heavy-Duty Desktop Phone Docks",
    description:
      "Precision-engineered stainless steel and mild steel mobile holders designed for stability, charging convenience, and high-visibility corporate branding.",
    icon: "Smartphone",
    count: 8,
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=900&auto=format&fit=crop",
  },
  "Pen Stand": {
    title: "Pen Stands & Holders",
    subtitle: "Executive Revolving & Solid Steel Pen Barrels",
    description:
      "Heavyweight desk pen stands with 360-degree silent bearings, visiting card integration, and anti-scratch velvet lined bases.",
    icon: "PenTool",
    count: 7,
    image:
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=900&auto=format&fit=crop",
  },
  "Paper Weight": {
    title: "Paper Weights",
    subtitle: "Solid Dome & Hexagonal Geometric Steel Weights",
    description:
      "Substantial 300g+ solid steel paper weights crafted with mirror or brushed finishes, perfect for executive desks and conference rooms.",
    icon: "Disc",
    count: 6,
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=900&auto=format&fit=crop",
  },
  Notepad: {
    title: "Notepads & Memo Docks",
    subtitle: "Steel-Cased Executive Note Cases & Sticky Dispensers",
    description:
      "Refillable metal notepad holders and desktop memo trays providing lifetime durability and permanent desk branding.",
    icon: "BookOpen",
    count: 5,
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=900&auto=format&fit=crop",
  },
  "Desk Organiser": {
    title: "Desk Organisers",
    subtitle: "Multi-Compartment Steel Productivity Stations",
    description:
      "All-in-one corporate workstations consolidating phones, pens, cards, and paper clips into one unified metal centerpiece.",
    icon: "LayoutGrid",
    count: 7,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=900&auto=format&fit=crop",
  },
  "Table Calendar": {
    title: "Table Calendars",
    subtitle: "Perpetual Steel & Standing Metal Calendar Sets",
    description:
      "Timeless perpetual steel calendars that never expire, guaranteeing 365-day client brand visibility year after year.",
    icon: "Calendar",
    count: 5,
    image:
      "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=900&auto=format&fit=crop",
  },
  "Corporate Gifts in Metal": {
    title: "Corporate Gifts in Metal",
    subtitle: "Card Cases, Coasters, Keychains & Executive Combos",
    description:
      "Curated metal gifting accessories manufactured for executive networking, exhibitions, and corporate onboarding packages.",
    icon: "Gift",
    count: 8,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=900&auto=format&fit=crop",
  },
  "Premium Office Accessories": {
    title: "Premium Office Accessories",
    subtitle: "Bookends, Rulers, Card Dispensers & Desk Tools",
    description:
      "Precision metal office utility items built for architects, engineers, law firms, and high-functioning corporate desks.",
    icon: "Briefcase",
    count: 5,
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=900&auto=format&fit=crop",
  },
};
