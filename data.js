// TradeBridge India Master Trade Intelligence Database
// Sourced from DGFT, CBIC, Ministry of Commerce & Industry, and Official EPC Portals

const TRADE_DATA = {
  // Globe international trade connections from India
  connections: [
    { id: 'uae', name: 'UAE', place: 'Dubai Port (Jebel Ali)', lon: 55.27, lat: 25.2, tradeVolume: '$53.2B', primaryExports: ['Gems & Jewellery', 'Petroleum', 'Textiles', 'Engineering'], note: 'Key gateway to GCC & MENA under CEPA 0% duty agreement', color: '#f59e0b' },
    { id: 'usa', name: 'United States', place: 'New York & Los Angeles', lon: -74.00, lat: 40.71, tradeVolume: '$78.5B', primaryExports: ['Pharmaceuticals', 'Electronics', 'Apparel', 'IT Services'], note: 'India\'s largest bilateral merchandise trade partner', color: '#38bdf8' },
    { id: 'germany', name: 'Germany', place: 'Hamburg & Frankfurt', lon: 9.99, lat: 53.55, tradeVolume: '$26.8B', primaryExports: ['Machinery', 'Auto Components', 'Chemicals', 'Leather'], note: 'Industrial heart of Europe with strict CBAM & ESG standards', color: '#10b981' },
    { id: 'singapore', name: 'Singapore', place: 'Port of Singapore', lon: 103.82, lat: 1.35, tradeVolume: '$35.6B', primaryExports: ['Refined Fuel', 'Precious Metals', 'Organic Chemicals'], note: 'Premier maritime transshipment hub for ASEAN & Far East', color: '#a855f7' },
    { id: 'japan', name: 'Japan', place: 'Yokohama / Tokyo', lon: 139.69, lat: 35.68, tradeVolume: '$22.4B', primaryExports: ['Marine Products', 'Iron & Steel', 'Auto Components'], note: 'Comprehensive Economic Partnership Agreement (CEPA) partner', color: '#ec4899' },
    { id: 'uk', name: 'United Kingdom', place: 'London Gateway / Felixstowe', lon: -0.12, lat: 51.50, tradeVolume: '$21.3B', primaryExports: ['Apparel', 'Footwear', 'Pharmaceuticals', 'Engineering'], note: 'Strategic destination with high demand for ethical and GI products', color: '#6366f1' },
    { id: 'australia', name: 'Australia', place: 'Sydney & Melbourne', lon: 151.20, lat: -33.86, tradeVolume: '$19.2B', primaryExports: ['Refined Petroleum', 'Medicaments', 'Railway Vehicles'], note: 'Zero-duty tariff access on 96%+ lines under ECTA', color: '#14b8a6' },
    { id: 'netherlands', name: 'Netherlands', place: 'Rotterdam Port', lon: 4.47, lat: 51.92, tradeVolume: '$24.5B', primaryExports: ['Petroleum Products', 'Chemicals', 'Aluminium'], note: 'Primary European logistics gateway for multimodal distribution', color: '#f97316' }
  ],

  // Export Promotion Councils & Commodity Boards
  epcCategories: [
    {
        "id": "cat-agri",
        "name": "Agriculture & Food Products",
        "count": "12 EPCs",
        "num": 12,
        "icon": "🌱",
        "sectorKey": "Agriculture & Food"
    },
    {
        "id": "cat-textiles",
        "name": "Textiles & Apparel",
        "count": "6 EPCs",
        "num": 6,
        "icon": "👕",
        "sectorKey": "Textiles & Garments"
    },
    {
        "id": "cat-eng",
        "name": "Engineering & Industrial Products",
        "count": "10 EPCs",
        "num": 10,
        "icon": "⚙️",
        "sectorKey": "Engineering & Industrial"
    },
    {
        "id": "cat-chem",
        "name": "Chemicals & Pharmaceuticals",
        "count": "8 EPCs",
        "num": 8,
        "icon": "🧪",
        "sectorKey": "Chemicals & Specialty Materials"
    },
    {
        "id": "cat-leather",
        "name": "Leather & Footwear",
        "count": "4 EPCs",
        "num": 4,
        "icon": "👞",
        "sectorKey": "Leather & Footwear"
    },
    {
        "id": "cat-gems",
        "name": "Gems & Jewellery",
        "count": "7 EPCs",
        "num": 7,
        "icon": "💎",
        "sectorKey": "Gems & Jewellery"
    },
    {
        "id": "cat-marine",
        "name": "Marine & Fisheries Products",
        "count": "4 EPCs",
        "num": 4,
        "icon": "🐟",
        "sectorKey": "Marine & Seafood"
    },
    {
        "id": "cat-elec",
        "name": "Electronics & IT Hardware",
        "count": "5 EPCs",
        "num": 5,
        "icon": "🔌",
        "sectorKey": "Electronics & IT"
    },
    {
        "id": "cat-crafts",
        "name": "Handicrafts & Home Decor",
        "count": "4 EPCs",
        "num": 4,
        "icon": "🏺",
        "sectorKey": "Handicrafts & Artisanal"
    },
    {
        "id": "cat-plantation",
        "name": "Tobacco & Plantation Products",
        "count": "3 EPCs",
        "num": 3,
        "icon": "🌿",
        "sectorKey": "Plantation & Commodities"
    },
    {
        "id": "cat-metals",
        "name": "Metals & Minerals",
        "count": "5 EPCs",
        "num": 5,
        "icon": "🏗️",
        "sectorKey": "Metals & Mining"
    },
    {
        "id": "cat-others",
        "name": "Others & Multi-Sector",
        "count": "3 EPCs",
        "num": 3,
        "icon": "📦",
        "sectorKey": "Multi-sector"
    }
],
  councils: [
    {
        "id": "texprocil",
        "name": "TEXPROCIL",
        "fullName": "The Cotton Textiles Export Promotion Council",
        "sector": "Textiles & Garments",
        "type": "Export Promotion Council (EPC)",
        "ministry": "Ministry of Textiles, Government of India",
        "established": 1954,
        "headquarters": "Mumbai, Maharashtra",
        "coverage": "Pan-India",
        "products": [
            "Cotton Yarn",
            "Cotton Fabrics",
            "Made-ups (Bed linen, Table linen)",
            "Home Textiles",
            "Cotton Garments",
            "Terry Towels"
        ],
        "summary": "The Cotton Textiles Export Promotion Council (TEXPROCIL) is an autonomous body set up by the Government of India under the Ministry of Textiles. It promotes and facilitates exports of cotton textiles from India and acts as a link between the Indian government, exporters and international buyers.",
        "mission": "To promote, facilitate and increase exports of cotton textiles from India and support the global competitiveness of Indian exporters.",
        "relevantFor": [
            "Cotton yarn spinning mills",
            "Cotton fabric weavers & knitters",
            "Made-ups (bed linen, table linen) manufacturers",
            "Home textiles producers",
            "Cotton garments exporters",
            "Terry towels & cotton bath accessories"
        ],
        "productsCoveredDetailed": [
            {
                "title": "Cotton Yarn",
                "desc": "Carded, combed, ring-spun, open-end, compact and specialized organic cotton yarns across counts 6s to 120s."
            },
            {
                "title": "Cotton Fabrics",
                "desc": "Grey, bleached, dyed, printed woven fabrics, denim, twill, poplin, and technical textiles."
            },
            {
                "title": "Made-ups",
                "desc": "Bed linen, duvet covers, pillowcases, curtains, kitchen textiles, and hospitality linens."
            },
            {
                "title": "Home Textiles",
                "desc": "Cushion covers, table mats, cotton throws, rugs, and decorative soft furnishings."
            },
            {
                "title": "Cotton Garments",
                "desc": "Basic T-shirts, shirts, casualwear, workwear, and sleepwear made with 100% Indian cotton."
            }
        ],
        "services": [
            "Assisting overseas buyers in sourcing the right cotton textiles from verified Indian suppliers.",
            "Disseminating international market intelligence, trade inquiries, and global fashion trends.",
            "Organizing buyer-seller meets (BSMs), international delegations, and specialized exhibitions.",
            "Assisting member exporters in dispute resolution and arbitration under council bylaws.",
            "Issuing non-preferential Certificates of Origin and verified manufacturer credentials."
        ],
        "membership": {
            "rcmcProcess": "Apply online through the DGFT Common RCMC Portal (dgft.gov.in) selecting TEXPROCIL as the issuing authority.",
            "eligibility": "Manufacturer exporters and merchant exporters of cotton yarn, cotton fabrics, and cotton made-ups.",
            "annualFee": "INR 8,850 for turnover up to ₹1 Cr; ₹14,160 up to ₹5 Cr; ₹21,240 above ₹5 Cr (inclusive of 18% GST).",
            "documentsRequired": [
                "Copy of Importer-Exporter Code (IEC)",
                "GST Registration Certificate",
                "PAN Card copy",
                "CA Turnover Certificate for preceding financial year"
            ]
        },
        "resources": [
            "Handbook of Export Statistics on Indian Cotton Textiles (Monthly & Annual)",
            "Kasturi Cotton India Traceability and Branding Protocol Document",
            "Guide to FTAs: Maximizing benefits under India-UAE CEPA and India-Australia ECTA",
            "Directory of Indian Cotton Textile Exporters (Searchable Member Database)"
        ],
        "eventsSchemes": [
            "Kasturi Cotton India Global Promotion Program",
            "Market Access Initiative (MAI) Scheme financial subsidy for overseas expo stalls (Heimtextil, Texworld)",
            "Indo-European Cotton Buyer Conclave (Annual Flagship Event)",
            "Specialized skill workshops on sustainable zero-liquid discharge dyeing"
        ],
        "contact": {
            "address": "Engineering Centre, 5th Floor, 9 Mathew Road, Mumbai - 400 004, Maharashtra, India",
            "phone": "+91-22-49444000 / 23632910",
            "email": "info@texprocil.org",
            "website": "https://www.texprocil.org",
            "branches": [
                "New Delhi Liaison Office",
                "Coimbatore Regional Office",
                "Surat Sub-centre"
            ]
        },
        "url": "https://www.texprocil.org",
        "icon": "Shirt",
        "color": "#6366f1",
        "stats": {
            "exporters": "2,800+",
            "exportVal": "$13.7B",
            "countries": "130+"
        }
    },
    {
        "id": "aepc",
        "name": "AEPC",
        "fullName": "Apparel Export Promotion Council",
        "sector": "Textiles & Garments",
        "type": "Export Promotion Council (EPC)",
        "ministry": "Ministry of Textiles, Government of India",
        "established": 1978,
        "headquarters": "Gurugram, Haryana",
        "coverage": "Pan-India",
        "products": [
            "Ready-made Garments",
            "Knitted Apparel",
            "Woven Shirts",
            "Activewear",
            "Sustainable Organic Clothing",
            "Kids Wear"
        ],
        "summary": "The official body for apparel exporters in India, offering training, design forecasts, global exhibitions, and trade policy consultation for ready-made clothing.",
        "mission": "To promote and nurture India's garment export industry through capacity building, ethical compliance, design excellence, and market access.",
        "relevantFor": [
            "Garment manufacturers",
            "Apparel buying agencies",
            "Fashion exporters",
            "Knitwear units in Tirupur/Ludhiana",
            "Woven garment units in Bengaluru/Noida"
        ],
        "productsCoveredDetailed": [
            {
                "title": "Knitted Garments",
                "desc": "T-shirts, polo shirts, innerwear, tracksuits, babywear, and athletic jersey wear."
            },
            {
                "title": "Woven Garments",
                "desc": "Formal shirts, trousers, denim jackets, dresses, and skirts."
            },
            {
                "title": "Sustainable Apparel",
                "desc": "GOTS-certified organic cotton clothing, recycled polyester garments, and vegan fabric fashion."
            }
        ],
        "services": [
            "Organizing the flagship India International Garment Fair (IIGF).",
            "Operating 150+ Apparel Training & Design Centres (ATDC) across Indian garment clusters.",
            "Guiding exporters on ESG, social compliance audits (BSCI, SEDEX, WRAP), and zero carbon goals.",
            "Advocating for RoSCTL refund optimizations and duty drawback rates."
        ],
        "membership": {
            "rcmcProcess": "Online registration via DGFT Common RCMC portal with AEPC endorsement.",
            "eligibility": "Registered manufacturers or merchants engaged in exporting ready-made garments.",
            "annualFee": "INR 9,440 for MSMEs; ₹17,700 for large enterprises.",
            "documentsRequired": [
                "IEC Code",
                "PAN & GST Certificates",
                "Factory License / Udyam Certificate",
                "Self-declaration of sewing capacity"
            ]
        },
        "resources": [
            "Apparel Export Statistical Digest",
            "EU ESG & Corporate Sustainability Due Diligence Guide",
            "IIGF Buyer Directory"
        ],
        "eventsSchemes": [
            "India International Garment Fair (IIGF)",
            "RoSCTL Scheme",
            "PM-MITRA Mega Textile Park Linkages"
        ],
        "contact": {
            "address": "Apparel House, Institutional Area, Sector 44, Gurugram - 122003, Haryana, India",
            "phone": "+91-124-2708000",
            "email": "aepc@aepcindia.com",
            "website": "https://www.aepcindia.com",
            "branches": [
                "Tirupur Regional Centre",
                "Bengaluru Office",
                "Mumbai Office",
                "Jaipur Office"
            ]
        },
        "url": "https://www.aepcindia.com",
        "icon": "Shirt",
        "color": "#8b5cf6",
        "stats": {
            "exporters": "8,000+",
            "exportVal": "$16.2B",
            "countries": "110+"
        }
    },
    {
        "id": "apeda",
        "name": "APEDA",
        "fullName": "Agricultural and Processed Food Products Export Development Authority",
        "sector": "Agriculture & Food Products",
        "type": "Statutory Authority",
        "ministry": "Ministry of Commerce and Industry, Government of India",
        "established": 1986,
        "headquarters": "New Delhi",
        "coverage": "Pan-India",
        "products": [
            "Basmati & Non-Basmati Rice",
            "Fresh Mangoes & Grapes",
            "Processed Fruits & Juices",
            "Buffalo Meat",
            "Organic Cereals",
            "Floriculture"
        ],
        "summary": "Statutory body established by an Act of Parliament to develop, regulate and promote the export of agricultural produce and value-added processed food products from India.",
        "mission": "To maximize foreign exchange earnings through quality development, infrastructure modernizations, and global brand recognition for Indian agricultural exports.",
        "relevantFor": [
            "Rice millers & traders",
            "Fresh fruit & vegetable packhouses",
            "Meat processing plants",
            "Canned food manufacturers",
            "Organic farm exporters"
        ],
        "productsCoveredDetailed": [
            {
                "title": "Basmati & Non-Basmati Rice",
                "desc": "Traditional aromatic Basmati, Pusa 1121, Sona Masoori, and parboiled rice with BasmatiNet DNA traceability."
            },
            {
                "title": "Fresh Fruits & Vegetables",
                "desc": "Alphonso and Kesar mangoes, Thompson seedless grapes, pomegranates, and organic okra."
            },
            {
                "title": "Processed Foods",
                "desc": "Mango pulps, jams, ready-to-eat meals, dehydration snacks, and confectionery."
            }
        ],
        "services": [
            "Operation of HortiNet, BasmatiNet, and MeatNet farm-to-shipment traceability platforms.",
            "Subsidizing NABL-accredited testing for pesticide residue and phytosanitary compliance.",
            "Providing financial assistance for packhouse automation, pre-cooling units, and reefer vans.",
            "Leading national pavilions at Gulfood Dubai, SIAL Paris, and Foodex Japan."
        ],
        "membership": {
            "rcmcProcess": "Mandatory online registration under APEDA Act on DGFT / APEDA portal.",
            "eligibility": "Producers, processors, or merchant exporters dealing in scheduled agro goods.",
            "annualFee": "₹5,900 for 5-year registration (₹5,000 + 18% GST).",
            "documentsRequired": [
                "IEC Code",
                "FSSAI License / Manufacturing License",
                "Bank Account Certificate",
                "Canceled Cheque"
            ]
        },
        "resources": [
            "Basmati Rice Export Manual",
            "Maximum Residue Limits (MRL) Guide for EU/USA",
            "Agri-Exchange Export Portal"
        ],
        "eventsSchemes": [
            "Transport and Marketing Assistance (TMA)",
            "Agriculture Export Policy (AEP) Cluster Development",
            "Gulfood Indian Pavilion"
        ],
        "contact": {
            "address": "NCUI Building, 3 Siri Institutional Area, August Kranti Marg, New Delhi - 110016",
            "phone": "+91-11-41486013 / 20863900",
            "email": "headq@apeda.gov.in",
            "website": "https://apeda.gov.in",
            "branches": [
                "Mumbai Regional Office",
                "Kolkata Office",
                "Bengaluru Office",
                "Hyderabad Office",
                "Varanasi Office"
            ]
        },
        "url": "https://apeda.gov.in",
        "icon": "Sprout",
        "color": "#10b981",
        "stats": {
            "exporters": "42,000+",
            "exportVal": "$25.6B",
            "countries": "150+"
        }
    },
    {
        "id": "eepc",
        "name": "EEPC India",
        "fullName": "Engineering Export Promotion Council of India",
        "sector": "Engineering & Industrial Products",
        "type": "Export Promotion Council (EPC)",
        "ministry": "Ministry of Commerce and Industry, Government of India",
        "established": 1955,
        "headquarters": "New Delhi & Kolkata",
        "coverage": "Pan-India",
        "products": [
            "Automobile Parts",
            "Industrial Machinery",
            "Iron & Steel Castings",
            "Electrical Equipment",
            "Aerospace Components",
            "Pumps & Valves"
        ],
        "summary": "The premier trade and investment promotion organisation representing India's dynamic engineering, industrial manufacturing, and automotive components sector.",
        "mission": "To position India as the trusted engineering workshop of the world through technological innovation, fair representation, and global buyer linkages.",
        "relevantFor": [
            "Automotive tier 1/2 suppliers",
            "CNC machining workshops",
            "Industrial pump manufacturers",
            "Foundries & steel fabricators",
            "Heavy equipment exporters"
        ],
        "productsCoveredDetailed": [
            {
                "title": "Automotive Components",
                "desc": "Pistons, engine blocks, brake assemblies, gears, steering systems, and electric vehicle axles."
            },
            {
                "title": "Industrial Machinery",
                "desc": "Lathes, packaging machines, textile spinning machinery, and plastic processing extruders."
            },
            {
                "title": "Iron & Steel Products",
                "desc": "Precision castings, sanitary pipes, high-strength alloy bolts, and architectural hardware."
            }
        ],
        "services": [
            "Organizing the International Engineering Sourcing Show (IESS) and INDEE world expos.",
            "Operating EEPC Technology Centres in Bengaluru and Kolkata for CAD/CAM testing.",
            "Representing engineering exporters in anti-dumping and safeguard defense investigations.",
            "Facilitating RoDTEP claims and Advance Authorisation duty-free metal imports."
        ],
        "membership": {
            "rcmcProcess": "Apply via DGFT Common RCMC portal with EEPC India designation.",
            "eligibility": "Manufacturing and merchant exporters dealing in engineering goods.",
            "annualFee": "Tiered from ₹7,080 (micro) to ₹35,400 (turnover > ₹100 Cr).",
            "documentsRequired": [
                "IEC Code",
                "Factory License / SSI Certificate",
                "CA Audited Turnover Certificate",
                "GSTIN"
            ]
        },
        "resources": [
            "Indian Engineering Export Trends Bulletin (Monthly)",
            "Guide to EU Machinery Directive Compliance",
            "IESS Buyer Directory"
        ],
        "eventsSchemes": [
            "International Engineering Sourcing Show (IESS)",
            "Market Access Initiative (MAI) Delegations",
            "EEPC National Export Awards"
        ],
        "contact": {
            "address": "Vandhna (4th Floor), 11 Tolstoy Marg, New Delhi - 110001, India",
            "phone": "+91-11-23353353",
            "email": "eepcnd@eepcindia.net",
            "website": "https://www.eepcindia.org",
            "branches": [
                "Kolkata Head Office",
                "Mumbai Regional Office",
                "Chennai Office",
                "Ahmedabad Sub-office"
            ]
        },
        "url": "https://www.eepcindia.org",
        "icon": "Cog",
        "color": "#3b82f6",
        "stats": {
            "exporters": "13,000+",
            "exportVal": "$109B",
            "countries": "180+"
        }
    },
    {
        "id": "gjepc",
        "name": "GJEPC",
        "fullName": "Gem & Jewellery Export Promotion Council",
        "sector": "Gems & Jewellery",
        "type": "Apex Council",
        "ministry": "Ministry of Commerce and Industry, Government of India",
        "established": 1966,
        "headquarters": "Mumbai, Maharashtra",
        "coverage": "Pan-India",
        "products": [
            "Cut & Polished Diamonds",
            "Gold Jewellery",
            "Lab-Grown Diamonds",
            "Silver Artefacts",
            "Coloured Gemstones",
            "Platinum Ornaments"
        ],
        "summary": "Apex body driving India as the premier global jewellery manufacturing hub and the world leader in cutting and polishing 14 out of every 15 diamonds.",
        "mission": "To promote Indian gem and jewellery design, uphold ethical Kimberly Process sourcing, and expand high-value branded exports globally.",
        "relevantFor": [
            "Diamond polishers & bourses",
            "Gold & silver jewellery ateliers",
            "Lab-grown diamond growers",
            "Gemstone cutters",
            "Casting units at SEEPZ"
        ],
        "productsCoveredDetailed": [
            {
                "title": "Cut & Polished Diamonds",
                "desc": "Round brilliants, fancy shapes, and melee diamonds graded to GIA/IGI standards."
            },
            {
                "title": "Plain & Studded Gold Jewellery",
                "desc": "Hallmarked 18k and 22k handcrafted, filigree, and CNC cast gold ornaments."
            },
            {
                "title": "Lab-Grown Diamonds",
                "desc": "CVD and HPHT eco-friendly stones for conscious luxury markets."
            }
        ],
        "services": [
            "Administering the Kimberly Process Certification Scheme (KPCS) in India.",
            "Organizing the flagship India International Jewellery Show (IIJS Premiere & Signature).",
            "Operating Gem Testing Laboratories (GTL) and Indian Institute of Gems & Jewellery (IIGJ).",
            "Running the Mega Common Facility Centre (CFC) at SEEPZ SEZ, Mumbai."
        ],
        "membership": {
            "rcmcProcess": "Registration through DGFT Common RCMC Portal with GJEPC verification.",
            "eligibility": "Traders, cutters, and manufacturers of gems, precious metals, and ornaments.",
            "annualFee": "₹12,980 for Associate Member; ₹29,500 for Ordinary Member.",
            "documentsRequired": [
                "IEC Code",
                "Trade Reference Letters",
                "Bankers Certificate",
                "GST Registration"
            ]
        },
        "resources": [
            "Kimberley Process Export Handbook",
            "Annual Gem & Jewellery Trade Report",
            "Hallmarking Guidelines"
        ],
        "eventsSchemes": [
            "IIJS Premiere Mumbai",
            "India Global Connect Delegations",
            "Mega CFC Tech Subsidies"
        ],
        "contact": {
            "address": "D2B, Ground Floor, Tower D, Bharat Diamond Bourse, BKC, Bandra (E), Mumbai - 400051",
            "phone": "+91-22-42263600",
            "email": "gjepc@gjepc.india.org",
            "website": "https://gjepc.org",
            "branches": [
                "Surat Diamond Bourse Office",
                "Jaipur Regional Centre",
                "New Delhi Office",
                "Kolkata Office"
            ]
        },
        "url": "https://gjepc.org",
        "icon": "Gem",
        "color": "#ec4899",
        "stats": {
            "exporters": "8,500+",
            "exportVal": "$38.8B",
            "countries": "90+"
        }
    },
    {
        "id": "chemexcil",
        "name": "CHEMEXCIL",
        "fullName": "Basic Chemicals, Cosmetics & Dyes Export Promotion Council",
        "sector": "Chemicals & Specialty Materials",
        "type": "Export Promotion Council (EPC)",
        "ministry": "Ministry of Commerce and Industry, Government of India",
        "established": 1963,
        "headquarters": "Mumbai, Maharashtra",
        "coverage": "Pan-India",
        "products": [
            "Dyes & Dye Intermediates",
            "Basic Inorganic & Organic Chemicals",
            "Cosmetics & Toiletries",
            "Essential Oils",
            "Castor Oil Derivatives",
            "Agrochemicals"
        ],
        "summary": "Promoting India’s position as a reliable, safety-compliant specialty chemicals supplier to over 160 nations across Europe, Americas and Asia.",
        "mission": "To foster responsible chemical exports adhering to global environment and REACH standards while accelerating specialty chemical value addition.",
        "relevantFor": [
            "Dye manufacturing units in Gujarat",
            "Essential oil distillers",
            "Castor oil derivative refineries",
            "Soap & cosmetic producers"
        ],
        "productsCoveredDetailed": [
            {
                "title": "Dyes & Pigments",
                "desc": "Reactive dyes, disperse dyes, food colors, and automotive industrial pigments."
            },
            {
                "title": "Specialty Organic Chemicals",
                "desc": "Solvents, catalysts, polymer additives, and biochemical intermediates."
            },
            {
                "title": "Cosmetics & Toiletries",
                "desc": "Herbal soaps, shampoos, skincare formulations, and natural aroma chemicals."
            }
        ],
        "services": [
            "EU-REACH Helpdesk assisting member exporters with dossier registrations.",
            "Technical guidance on UN Packaging Codes for maritime hazardous chemical transport.",
            "Organizing Chemspec pavilions and bilateral business conclaves in Latin America.",
            "Facilitating duty-free raw material imports under Advance Authorisation."
        ],
        "membership": {
            "rcmcProcess": "Apply via DGFT Common Portal with CHEMEXCIL council selection.",
            "eligibility": "Manufacturers or merchants dealing in dyes, basic chemicals, or personal care items.",
            "annualFee": "₹5,900 to ₹17,700 based on previous year export turnover.",
            "documentsRequired": [
                "IEC Code",
                "Pollution Control Board Consent to Operate",
                "Factory License",
                "Turnover Certificate"
            ]
        },
        "resources": [
            "EU-REACH Exporter Compliance Manual",
            "Hazardous Goods Maritime Carriage Guide",
            "Chemical Trade Statistics"
        ],
        "eventsSchemes": [
            "Chemspec India & Europe Pavilions",
            "LATAM Buyer Delegations",
            "MAI Exhibition Subsidies"
        ],
        "contact": {
            "address": "Jhansi Castle, 4th Floor, 7 Cooperage Road, Mumbai - 400 001, India",
            "phone": "+91-22-22021288",
            "email": "info@chemexcil.in",
            "website": "https://chemexcil.in",
            "branches": [
                "Ahmedabad Regional Centre",
                "New Delhi Office",
                "Kolkata Office",
                "Bengaluru Office"
            ]
        },
        "url": "https://chemexcil.in",
        "icon": "FlaskConical",
        "color": "#06b6d4",
        "stats": {
            "exporters": "4,000+",
            "exportVal": "$30.5B",
            "countries": "160+"
        }
    },
    {
        "id": "pharmexcil",
        "name": "PHARMEXCIL",
        "fullName": "Pharmaceuticals Export Promotion Council of India",
        "sector": "Chemicals & Specialty Materials",
        "type": "Export Promotion Council (EPC)",
        "ministry": "Ministry of Commerce and Industry, Government of India",
        "established": 2004,
        "headquarters": "Hyderabad, Telangana",
        "coverage": "Pan-India",
        "products": [
            "Generic Formulations",
            "Active Pharmaceutical Ingredients (APIs)",
            "Vaccines",
            "Ayush & Herbal Medicines",
            "Biotechnology Products",
            "Surgicals"
        ],
        "summary": "Championing India’s role as the 'Pharmacy of the World', supplying affordable, high-efficacy generics and vaccines to more than 200 nations.",
        "mission": "To position Indian therapeutics as the gold standard in affordable healthcare while facilitating regulatory approvals across mature and emerging markets.",
        "relevantFor": [
            "Generic drug formulators",
            "API chemical synthesizers",
            "Vaccine manufacturers",
            "Ayurvedic extract exporters"
        ],
        "productsCoveredDetailed": [
            {
                "title": "Generic Formulations",
                "desc": "Tablets, capsules, injectables, syrups compliant with USFDA, EMA, and WHO-GMP."
            },
            {
                "title": "Active Pharmaceutical Ingredients (APIs)",
                "desc": "Bulk active drugs and key starting materials (KSMs) for global medicine manufacturing."
            },
            {
                "title": "Ayush & Herbals",
                "desc": "Standardized herbal extracts, nutraceuticals, and traditional Ayurvedic remedies."
            }
        ],
        "services": [
            "Organizing IPHEX (International Exhibition for Pharma and Healthcare).",
            "Subsidizing overseas regulatory patent filings and ANDA/Dossier submissions.",
            "Liaising with USFDA, MHRA, and African regulatory authorities during drug inspections.",
            "Promoting Indian pharmacopeia standards globally."
        ],
        "membership": {
            "rcmcProcess": "Registration through DGFT Common Portal with PHARMEXCIL issuance.",
            "eligibility": "Holders of valid Drug Manufacturing License issued by State Drug Controller or CDSCO.",
            "annualFee": "₹7,080 for SSI/MSMEs; ₹23,600 for large pharmaceutical corporations.",
            "documentsRequired": [
                "IEC Code",
                "Drug Manufacturing License (Form 25/28)",
                "GMP Certificate",
                "Turnover Certificate"
            ]
        },
        "resources": [
            "Global Regulatory Dossier Filing Guide",
            "IPHEX Buyer Directory",
            "Patent Expiry Tracking Bulletin"
        ],
        "eventsSchemes": [
            "IPHEX Annual Expo",
            "Pharma PLI Export Linkage",
            "Regulatory Filing Assistance Scheme"
        ],
        "contact": {
            "address": "201, Aditya Trade Centre, Ameerpet, Hyderabad - 500038, Telangana, India",
            "phone": "+91-40-23735462",
            "email": "info@pharmexcil.com",
            "website": "https://pharmexcil.com",
            "branches": [
                "Mumbai Regional Office",
                "New Delhi Office",
                "Ahmedabad Branch"
            ]
        },
        "url": "https://pharmexcil.com",
        "icon": "Layers",
        "color": "#14b8a6",
        "stats": {
            "exporters": "4,500+",
            "exportVal": "$27.9B",
            "countries": "200+"
        }
    },
    {
        "id": "cle",
        "name": "CLE",
        "fullName": "Council for Leather Exports",
        "sector": "Leather & Footwear",
        "type": "Export Promotion Council (EPC)",
        "ministry": "Ministry of Commerce and Industry, Government of India",
        "established": 1984,
        "headquarters": "Chennai, Tamil Nadu",
        "coverage": "Pan-India",
        "products": [
            "Leather Footwear",
            "Finished Leather",
            "Leather Goods & Wallets",
            "Industrial Leather Gloves",
            "Non-Leather Shoes",
            "Saddlery & Harness"
        ],
        "summary": "Apex trade promotion council representing India's leather and footwear industry, combining master craftsmanship with modern eco-sustainable manufacturing.",
        "mission": "To position India as a premier design and manufacturing hub for ethical leather goods, zero-discharge tanneries, and world-class footwear.",
        "relevantFor": [
            "Shoe manufacturers in Agra/Ambur",
            "Tanneries in Kanpur/Ranipet",
            "Leather bag ateliers in Kolkata",
            "Saddlery makers in Kanpur"
        ],
        "productsCoveredDetailed": [
            {
                "title": "Footwear",
                "desc": "Men's dress shoes, women's boots, casual sneakers, safety shoes, and children's leather footwear."
            },
            {
                "title": "Leather Goods",
                "desc": "Handbags, briefcases, wallets, belts, travel luggage, and fashion accessories."
            },
            {
                "title": "Industrial Gloves",
                "desc": "Heavy-duty cow-split welding gloves and high-dexterity safety gloves."
            }
        ],
        "services": [
            "Coordinating Indian participation in premier global footwear fairs (Expo Riva del Garda, MICAM Milan).",
            "Disseminating European fashion trend forecasts in collaboration with Italian design studios.",
            "Assisting in testing for banned azo-dyes and chromium-VI compliance.",
            "Guiding implementations of Indian Footwear & Leather Development Programme (IFLDP)."
        ],
        "membership": {
            "rcmcProcess": "Apply on DGFT Common RCMC Portal choosing Council for Leather Exports.",
            "eligibility": "Manufacturers or merchants exporting leather, leather goods, or footwear.",
            "annualFee": "₹5,900 to ₹17,700 based on audited export turnover.",
            "documentsRequired": [
                "IEC Code",
                "GSTIN & PAN",
                "Factory License / Tannery Registration",
                "Audited Balance Sheet"
            ]
        },
        "resources": [
            "CLE Annual Footwear & Leather Export Compendium",
            "EU REACH & Zero Discharge Tannery Manual",
            "Buyer Directory"
        ],
        "eventsSchemes": [
            "IFLDP Capital Subsidies",
            "Delhi International Leather Expo",
            "Italian Design Workshops"
        ],
        "contact": {
            "address": "CMDA Tower II, 3rd Floor, Gandhi Irwin Bridge Road, Egmore, Chennai - 600008, Tamil Nadu",
            "phone": "+91-44-28594367",
            "email": "cle@cleindia.com",
            "website": "https://leatherindia.org",
            "branches": [
                "Kanpur Regional Office",
                "New Delhi Office",
                "Kolkata Office",
                "Agra Extension Counter"
            ]
        },
        "url": "https://leatherindia.org",
        "icon": "BriefcaseBusiness",
        "color": "#d97706",
        "stats": {
            "exporters": "3,500+",
            "exportVal": "$4.8B",
            "countries": "115+"
        }
    },
    {
        "id": "mpeda",
        "name": "MPEDA",
        "fullName": "Marine Products Export Development Authority",
        "sector": "Marine & Fisheries Products",
        "type": "Statutory Authority",
        "ministry": "Ministry of Commerce and Industry, Government of India",
        "established": 1972,
        "headquarters": "Kochi, Kerala",
        "coverage": "Pan-India",
        "products": [
            "Frozen Shrimp (Vannamei & Black Tiger)",
            "Frozen Squid & Cuttlefish",
            "Fresh & Chilled Fish",
            "Crab & Lobster",
            "Surimi & Value-added Seafood"
        ],
        "summary": "Statutory body stewarding India's blue economy exports through antibiotic testing, sustainable aquaculture certification, and global seafood branding.",
        "mission": "To promote sustainable harvest, value addition, and cold-chain modernizations that ensure Indian marine products meet global sanitary standards.",
        "relevantFor": [
            "Seafood freezing plants",
            "Coastal aquaculture shrimp farmers",
            "Mechanized trawler operators",
            "Canned seafood exporters"
        ],
        "productsCoveredDetailed": [
            {
                "title": "Frozen Shrimp",
                "desc": "Head-on, headless, peeled and deveined (PD), and easy-peel IQF shrimp."
            },
            {
                "title": "Cephalopods",
                "desc": "Whole cleaned, fillets, tubes, and rings of squid and cuttlefish."
            },
            {
                "title": "Fish & Surimi",
                "desc": "Ribbonfish, reef cod, yellowfin tuna, pomfret, and surimi block paste."
            }
        ],
        "services": [
            "Mandatory issuance of Catch Certificates required by the European Union.",
            "Antibiotic and heavy-metal residue testing in state-of-the-art ELISA and LC-MS/MS labs.",
            "Subsidizing insulated fish boxes, modern cold stores, and IQF machinery.",
            "Organizing the biennial India International Seafood Show (IISS)."
        ],
        "membership": {
            "rcmcProcess": "Registration through MPEDA online portal and DGFT RCMC interface.",
            "eligibility": "Processing plants, storage premises, handling facilities, and export merchants.",
            "annualFee": "₹7,500 to ₹15,000 depending on storage or processing capacity.",
            "documentsRequired": [
                "IEC Code",
                "EIC Approval Certificate",
                "FSSAI License",
                "Pollution Control Clearance"
            ]
        },
        "resources": [
            "National Residue Control Plan Guidelines",
            "ShrimpNet Traceability Manual",
            "IISS Trade Directory"
        ],
        "eventsSchemes": [
            "India International Seafood Show (IISS)",
            "Aquaculture Technology Upgradation Scheme",
            "EU Catch Certification Desk"
        ],
        "contact": {
            "address": "MPEDA House, Panampilly Avenue, Kochi - 682036, Kerala, India",
            "phone": "+91-484-2311901",
            "email": "mpeda@mpeda.gov.in",
            "website": "https://mpeda.gov.in",
            "branches": [
                "Visakhapatnam Regional Office",
                "Kolkata Office",
                "Mumbai Office",
                "Veraval Office"
            ]
        },
        "url": "https://mpeda.gov.in",
        "icon": "Package",
        "color": "#0284c7",
        "stats": {
            "exporters": "3,200+",
            "exportVal": "$7.4B",
            "countries": "100+"
        }
    },
    {
        "id": "esc",
        "name": "ESC",
        "fullName": "Electronics and Computer Software Export Promotion Council",
        "sector": "Electronics & IT Hardware",
        "type": "Export Promotion Council (EPC)",
        "ministry": "Ministry of Electronics and Information Technology (MeitY) & Ministry of Commerce",
        "established": 1989,
        "headquarters": "New Delhi",
        "coverage": "Pan-India",
        "products": [
            "Consumer Electronics",
            "Telecom Hardware & Mobile Phones",
            "Solar PV Modules",
            "Software Products & SaaS",
            "Embedded Systems",
            "Electronic Components"
        ],
        "summary": "Spearheading India’s ascent into high-value electronic hardware manufacturing, semiconductors, telecommunications equipment, and IT services.",
        "mission": "To position India as a global electronics hardware and digital innovation powerhouse, expanding exports to over 200 nations.",
        "relevantFor": [
            "Mobile phone assemblers",
            "PCB fabricators",
            "Solar panel manufacturers",
            "Embedded IoT makers",
            "SaaS software product companies"
        ],
        "productsCoveredDetailed": [
            {
                "title": "Consumer & Mobile Hardware",
                "desc": "Smartphones, chargers, smart TVs, soundbars, and wearables manufactured under Make in India."
            },
            {
                "title": "Telecom & Networking",
                "desc": "5G routers, optical fiber cables, transceivers, and base stations."
            },
            {
                "title": "Electronic Components",
                "desc": "Multi-layer printed circuit boards (PCBs), capacitors, and semiconductor assemblies."
            }
        ],
        "services": [
            "Organizing INDIA SOFT — India's largest global IT and electronics networking summit.",
            "Assisting electronics hardware units in claiming PLI export incentives.",
            "Providing global market reports on semiconductor components and trade agreements.",
            "Liaising with customs for fast-track clearance of critical testing prototypes."
        ],
        "membership": {
            "rcmcProcess": "Registration through DGFT Common RCMC Portal choosing ESC.",
            "eligibility": "Companies manufacturing or exporting electronics hardware, components, or software products.",
            "annualFee": "₹7,080 to ₹29,500 based on turnover tiers.",
            "documentsRequired": [
                "IEC Code",
                "GSTIN & PAN",
                "STPI / SEZ Approval or Factory License",
                "Chartered Accountant Turnover Certificate"
            ]
        },
        "resources": [
            "India Electronics Export Performance Digest",
            "Global Tech Tariff Tracker",
            "IndiaSoft B2B Directory"
        ],
        "eventsSchemes": [
            "IndiaSoft Annual IT Conclave",
            "Electronics Hardware PLI Coordination",
            "Silicon Valley Tech Pavilions"
        ],
        "contact": {
            "address": "ESC House, 155 Okhla Industrial Estate, Phase III, New Delhi - 110020, India",
            "phone": "+91-11-47480000",
            "email": "esc@escindia.com",
            "website": "https://www.escindia.in",
            "branches": [
                "Bengaluru Regional Office",
                "Hyderabad Office",
                "Mumbai Office"
            ]
        },
        "url": "https://www.escindia.in",
        "icon": "Cpu",
        "color": "#0ea5e9",
        "stats": {
            "exporters": "2,400+",
            "exportVal": "$29.1B",
            "countries": "170+"
        }
    },
    {
        "id": "epch",
        "name": "EPCH",
        "fullName": "Export Promotion Council for Handicrafts",
        "sector": "Handicrafts & Home Decor",
        "type": "Apex Council",
        "ministry": "Ministry of Textiles, Government of India",
        "established": 1986,
        "headquarters": "New Delhi",
        "coverage": "Pan-India",
        "products": [
            "Handmade Wooden Crafts",
            "Brassware & Metal Arts",
            "Artistic Textiles",
            "Fashion Jewellery",
            "Eco-friendly Home Decor",
            "Marble Inlay"
        ],
        "summary": "Connecting millions of Indian rural artisans, craft clusters, and master craftspeople directly to top worldwide retail chains and interior design houses.",
        "mission": "To preserve and promote Indian artisanal heritage by blending traditional artisan techniques with contemporary global market aesthetics and compliance.",
        "relevantFor": [
            "Wooden handicraft units in Saharanpur/Jodhpur",
            "Brassware makers in Moradabad",
            "Artisanal textile makers in Jaipur",
            "Eco-craft producers in North East"
        ],
        "productsCoveredDetailed": [
            {
                "title": "Wooden Artefacts & Furniture",
                "desc": "Solid sheesham, mango wood, and reclaimed teak furniture certified under VRIKSH."
            },
            {
                "title": "Art Metalware",
                "desc": "Hand-engraved brass vases, copper drinkware, wrought iron lamps, and bronze statues."
            },
            {
                "title": "Eco-friendly Home Decor",
                "desc": "Jute rugs, cane and bamboo baskets, handmade paper products, and marble inlay trays."
            }
        ],
        "services": [
            "Organizing the world-renowned IHGF Delhi Fair (Spring & Autumn editions).",
            "Administering the VRIKSH timber legality assessment and verification certification.",
            "Running design and testing workshops in craft clusters across 12 states.",
            "Securing duty-free import exemptions on critical artisanal embellishments."
        ],
        "membership": {
            "rcmcProcess": "Online registration through DGFT Common RCMC portal with EPCH selection.",
            "eligibility": "Artisans, manufacturer exporters, and merchant exporters of handicrafts.",
            "annualFee": "₹5,900 for SSI/Artisans; ₹11,800 for general exporters.",
            "documentsRequired": [
                "IEC Code",
                "PAN & GST Certificates",
                "Artisan Card / Udyam Certificate",
                "Bank Reference Letter"
            ]
        },
        "resources": [
            "VRIKSH Timber Chain-of-Custody Manual",
            "IHGF Fair Exhibitor Directory",
            "US Lacey Act Exporter Guide"
        ],
        "eventsSchemes": [
            "IHGF Delhi Fair",
            "Comprehensive Handicrafts Cluster Development Scheme",
            "Design Mentorship Workshops"
        ],
        "contact": {
            "address": "EPCH House, Pocket 6 & 7, Sector C, Local Shopping Centre, Vasant Kunj, New Delhi - 110070",
            "phone": "+91-11-26135256",
            "email": "mails@epch.com",
            "website": "https://www.epch.in",
            "branches": [
                "Jodhpur Regional Centre",
                "Moradabad Office",
                "Saharanpur Office",
                "Jaipur Office"
            ]
        },
        "url": "https://www.epch.in",
        "icon": "Shapes",
        "color": "#f59e0b",
        "stats": {
            "exporters": "10,500+",
            "exportVal": "$4.1B",
            "countries": "120+"
        }
    },
    {
        "id": "spices",
        "name": "Spices Board",
        "fullName": "Spices Board India",
        "sector": "Agriculture & Food Products",
        "type": "Statutory Commodity Board",
        "ministry": "Ministry of Commerce and Industry, Government of India",
        "established": 1987,
        "headquarters": "Kochi, Kerala",
        "coverage": "Pan-India",
        "products": [
            "Black Pepper",
            "Cardamom",
            "Dry Red Chilli",
            "Turmeric & Curcumin",
            "Cumin & Coriander",
            "Spice Oils & Oleoresins"
        ],
        "summary": "Statutory Commodity Board responsible for development and worldwide promotion of 52 scheduled spices, upholding pristine quality and food safety standards.",
        "mission": "To position India as the uncontested global leader in pure, traceable, and value-added spices and spice extracts.",
        "relevantFor": [
            "Spice growers and processors",
            "Oleoresin and essential oil extractors",
            "Bulk spice traders in Unjha/Guntur",
            "Organic spice cultivators"
        ],
        "productsCoveredDetailed": [
            {
                "title": "Whole & Ground Spices",
                "desc": "Malabar black pepper, Alleppey green cardamom, Guntur red chilli, and Salem turmeric."
            },
            {
                "title": "Spice Oleoresins & Extracts",
                "desc": "Concentrated color and flavor extracts for global food and pharmaceutical industries."
            },
            {
                "title": "Organic & Certified Spices",
                "desc": "Rainforest Alliance and USDA Organic certified whole spices with farm traceability."
            }
        ],
        "services": [
            "Issuing Certificate of Registration as Exporter of Spices (CRES).",
            "Testing for aflatoxins, pesticide residues, and microbial pathogens in 8 regional NABL labs.",
            "Operating Spice Parks with automated cleaning, grading, and sterilized packaging lines.",
            "Organizing the World Spice Congress and international buyer delegations."
        ],
        "membership": {
            "rcmcProcess": "CRES application online via Spices Board portal and DGFT interface.",
            "eligibility": "Any individual, partnership, or company exporting scheduled spices.",
            "annualFee": "₹15,000 for 3 years (inclusive of registration and quality processing).",
            "documentsRequired": [
                "IEC Code",
                "FSSAI License",
                "PAN & GST Registration",
                "Bank Solvency Certificate"
            ]
        },
        "resources": [
            "Spice Quality Specifications & Testing Manual",
            "World Spice Congress Reports",
            "Directory of Indian Spice Exporters"
        ],
        "eventsSchemes": [
            "World Spice Congress",
            "Spice Quality Improvement Labs Assistance",
            "Spice Parks Scheme"
        ],
        "contact": {
            "address": "Sugandha Bhavan, N.H. By-pass, Palarivattom P.O., Kochi - 682025, Kerala, India",
            "phone": "+91-484-2333610",
            "email": "spicesboard@nic.in",
            "website": "https://www.indianspices.com",
            "branches": [
                "Guntur Regional Office",
                "Mumbai Office",
                "Bodinayakanur Office",
                "Unjha Sub-centre"
            ]
        },
        "url": "https://www.indianspices.com",
        "icon": "Sprout",
        "color": "#e11d48",
        "stats": {
            "exporters": "6,000+",
            "exportVal": "$4.2B",
            "countries": "140+"
        }
    },
    {
        "id": "fieo",
        "name": "FIEO",
        "fullName": "Federation of Indian Export Organisations",
        "sector": "Others & Multi-Sector",
        "type": "Apex Trade Facilitation Body",
        "ministry": "Ministry of Commerce and Industry, Government of India",
        "established": 1965,
        "headquarters": "New Delhi",
        "coverage": "Pan-India",
        "products": [
            "Multi-commodity Exporters",
            "Trading Houses",
            "Star Export Houses",
            "MSME Multi-product Shipments",
            "Service Exporters"
        ],
        "summary": "Apex body of Indian export promotion organisations jointly set up by the Ministry of Commerce and private trade to serve multi-product exporters.",
        "mission": "To enhance India’s overall merchandise and service export capabilities, provide policy advocacy, and guide MSMEs into international trade.",
        "relevantFor": [
            "Trading houses & Star Exporters",
            "Multi-product merchant exporters",
            "Export management consultancies",
            "Service exporters"
        ],
        "productsCoveredDetailed": [
            {
                "title": "Multi-Product Consignments",
                "desc": "Mixed containers containing FMCG, hardware, textiles, and consumables for overseas department stores."
            },
            {
                "title": "Export Trading Houses",
                "desc": "Recognized One to Five Star Export Houses handling cross-sector trade volumes."
            },
            {
                "title": "Service Exports",
                "desc": "Consulting, engineering design, logistics management, and digital services."
            }
        ],
        "services": [
            "Issuing RCMC for multi-product exporters and service providers.",
            "Managing the Indian Trade Portal with country-wise tariffs and trade agreements.",
            "Conducting Niryat Bandhu MSME training programs across all districts.",
            "Operating daily Export Helpdesks on GST refunds, DGFT licensing, and banking."
        ],
        "membership": {
            "rcmcProcess": "Direct application via DGFT Common RCMC portal choosing FIEO.",
            "eligibility": "Any exporter with an IEC, especially multi-product trading firms.",
            "annualFee": "₹8,260 for Individual/MSME; ₹17,700 for Corporate Members.",
            "documentsRequired": [
                "IEC Code",
                "PAN & GST Registration",
                "Bank Realisation / Turnover Proof"
            ]
        },
        "resources": [
            "Indian Trade Portal Rules of Origin Search",
            "Foreign Trade Policy Practical Handbook",
            "Export Logistics Directory"
        ],
        "eventsSchemes": [
            "Niryat Bandhu MSME Conclaves",
            "Indian Trade Portal FTA Webinars",
            "FIEO Niryat Shree Awards"
        ],
        "contact": {
            "address": "Niryat Bhawan, Rao Tula Ram Marg, Opp. Army Hospital R&R, New Delhi - 110057, India",
            "phone": "+91-11-46042222",
            "email": "fieo@fieo.org",
            "website": "https://www.fieo.org",
            "branches": [
                "Mumbai Western Regional Office",
                "Kolkata Eastern Regional Office",
                "Chennai Southern Office"
            ]
        },
        "url": "https://www.fieo.org",
        "icon": "Grid2X2",
        "color": "#475569",
        "stats": {
            "exporters": "35,000+",
            "exportVal": "$400B+",
            "countries": "Global"
        }
    }
],

  // Real-world Case Studies
  caseStudies: [
    {
      id: 'cepa',
      title: 'When a Trade Agreement Becomes a Real Shipment',
      label: 'MARKET ACCESS & FTA',
      region: 'India → UAE (CEPA Agreement)',
      sector: 'Apparel & Cotton Textiles',
      challenge: 'A medium garment exporter in Tirupur faced 5% tariff barriers in Dubai compared to zero-duty competition from Bangladesh and Vietnam.',
      solution: 'Leveraged the India-UAE CEPA (Comprehensive Economic Partnership Agreement) through an expedited digital Certificate of Origin (CoO) issued by DGFT and AEPC.',
      tariffBenefit: 'Duty reduced from 5.0% to 0.0% instantly on Chapter 61/62 lines, saving $14,200 on the initial container order.',
      complianceChecklist: [
        'Value Addition Rule: Met 40% local value addition requirement (CTSH rule)',
        'Digital Certificate of Origin: Applied on trade.gov.in portal before vessel sail',
        'Direct Consignment: Bill of Lading showed direct passage from Chennai to Jebel Ali'
      ],
      outcome: 'The buyer placed repeat quarterly contracts; transit time remained under 5 days, increasing annual export turnover by 42%.',
      keyTakeaway: 'Always verify if your destination country has an active FTA/CEPA with India—it can convert a borderline quotation into a winner.'
    },
    {
      id: 'basmati',
      title: 'Pesticide Residue Alert & Rapid Lab Clearance',
      label: 'QUALITY & SANITARY (SPS)',
      region: 'India → European Union (Rotterdam)',
      sector: 'Agriculture (Basmati Rice)',
      challenge: 'EU lowered Maximum Residue Limits (MRL) for Tricyclazole fungicide to 0.01 mg/kg, causing cargo rejection risks at European ports.',
      solution: 'Exporter partnered with APEDA-accredited testing laboratories for mandatory DNA and multi-residue pre-shipment testing under the BasmatiNet traceability portal.',
      tariffBenefit: 'Prevented a potential $120,000 cargo rejection and demurrage charge at port of destination.',
      complianceChecklist: [
        'Pre-harvest testing: Batch testing in APEDA certified NABL laboratories',
        'Phytosanitary Certificate issued by Directorate of Plant Protection',
        'BasmatiNet QR code attached to each pallet showing farm-to-shipment audit'
      ],
      outcome: 'Container cleared Rotterdam customs within 24 hours with zero queries, establishing exporter as an approved premium vendor.',
      keyTakeaway: 'In food exports, pre-shipment compliance is infinitely cheaper than border rejections.'
    },
    {
      id: 'auto-parts',
      title: 'Just-in-Time Auto Components with RoDTEP Optimization',
      label: 'INCENTIVES & DUTY DRAWBACK',
      region: 'India → Germany (Stuttgart / OEM Tier 1)',
      sector: 'Engineering (EEPC Member)',
      challenge: 'High domestic logistics and electricity taxes made precision CNC machined parts 3.8% more expensive than competitors in Eastern Europe.',
      solution: 'EEPC India helped the manufacturer file under RoDTEP (Remission of Duties and Taxes on Exported Products) and utilize Advance Authorisation for high-grade alloy steel imports.',
      tariffBenefit: 'Reclaimed 2.2% embedded taxes under RoDTEP and avoided 7.5% basic customs duty on raw alloy imports.',
      complianceChecklist: [
        'Shipping bill filed under code with clear RoDTEP declaration on ICEGATE',
        'Electronic Bank Realisation Certificate (e-BRC) auto-linked with DGFT portal',
        'ISO/TS 16949 automotive quality documentation verified by EEPC engineering desk'
      ],
      outcome: 'Secured a 3-year supply contract for EV transmission housings with an export margin uplift of 5.4%.',
      keyTakeaway: 'Understanding RoDTEP and Advance Authorisation bridges the cost gap against international competitors.'
    },
    {
      id: 'wooden-crafts',
      title: 'VRIKSH Certification for Sustainable Handicrafts',
      label: 'ENVIRONMENTAL COMPLIANCE',
      region: 'India → United States (Los Angeles)',
      sector: 'Handicrafts & Wooden Arts (EPCH)',
      challenge: 'US Lacey Act and CITES regulations prohibited importing rosewood (Dalbergia sissoo) furniture without strict legal chain-of-custody timber proof.',
      solution: 'Enrolled in EPCH\'s Timber Legality Assessment and Verification Scheme (VRIKSH), securing legitimate provenance certification from sustainable farm agroforestry.',
      tariffBenefit: 'Zero risk of seizure under US Lacey Act; enabled entry into premium nationwide home furnishing retail chains.',
      complianceChecklist: [
        'VRIKSH chain-of-custody audit certificate per consignment',
        'Fumigation certificate with methyl bromide treatment stamp',
        'Commercial Invoice with explicit botanical nomenclature matching shipping bill'
      ],
      outcome: 'Shipment cleared US Customs and Border Protection without detention, tripling annual orders to $850,000.',
      keyTakeaway: 'For forestry and artisanal products, sustainability certification is not optional—it is your entry ticket.'
    }
  ],

  // Comprehensive Glossary of International Trade Terms
  glossarySections: [
    {
        "num": 1,
        "id": "sec-1",
        "title": "Foundational Concepts & Exporter / Importer Types",
        "short": "Foundations & Trader Types",
        "icon": "🌐"
    },
    {
        "num": 2,
        "id": "sec-2",
        "title": "Mandatory Setup, Registrations & Regulatory Framework",
        "short": "Setup & Regulatory",
        "icon": "📜"
    },
    {
        "num": 3,
        "id": "sec-3",
        "title": "Market Analytics, Macroeconomics & Tariff Policy",
        "short": "Macro & Tariff Policy",
        "icon": "📊"
    },
    {
        "num": 4,
        "id": "sec-4",
        "title": "Commercial Contracting & Incoterms 2020",
        "short": "Incoterms 2020",
        "icon": "🤝"
    },
    {
        "num": 5,
        "id": "sec-5",
        "title": "Documentation, Trade Finance & Payment Terms",
        "short": "Documentation & Finance",
        "icon": "💳"
    },
    {
        "num": 6,
        "id": "sec-6",
        "title": "Logistics, Port Operations & Global Maritime Chokepoints",
        "short": "Logistics & Chokepoints",
        "icon": "⚓"
    },
    {
        "num": 7,
        "id": "sec-7",
        "title": "Government Export Incentive Schemes & Tax Rebates",
        "short": "Incentives & Tax Rebates",
        "icon": "💰"
    },
    {
        "num": 8,
        "id": "sec-8",
        "title": "Post-Export Compliance & Foreign Exchange Realisation",
        "short": "Post-Export & FEMA",
        "icon": "🛡️"
    }
],
  glossaryWarnings: {
    "warnings": [
        {
            "title": "Export Obligation Shortfall",
            "description": "Missing obligations under Advance Authorisation or EPCG means repaying all saved customs duties, with penal interest of up to 18% p.a., plus statutory compounding penalties."
        },
        {
            "title": "FEMA Non-Realisation",
            "description": "Not receiving foreign currency payment within 9 months triggers automatic recovery and cancellation of any RoDTEP, RoSCTL or Duty Drawback benefits already claimed, plus RBI EDPMS flagging."
        }
    ],
    "checklist": [
        {
            "step": 1,
            "text": "Secure your IEC, register your AD Code with customs at all relevant ports, and obtain your RCMC from your sector council."
        },
        {
            "step": 2,
            "text": "Verify your product's 8-digit ITC-HS Code on ICEGATE to confirm import/export tariffs, preferential FTAs, and RoDTEP incentive rates."
        },
        {
            "step": 3,
            "text": "Choose the right Incoterm — FOB or CIF are strongly recommended for beginners to balance costs and control."
        },
        {
            "step": 4,
            "text": "Ensure overseas buyer payment is strictly backed by an Irrevocable Confirmed Letter of Credit or an advance T/T deposit."
        },
        {
            "step": 5,
            "text": "Ensure your Custom House Agent (CHA) files the Shipping Bill (export) or Bill of Entry (import) with 100% accurate invoice and packing list data."
        },
        {
            "step": 6,
            "text": "Ensure your Authorised Dealer bank issues an e-BRC immediately on receiving foreign remittance, to unlock tax refunds and close customs monitoring."
        }
    ]
},
  glossary: [
    {
        "id": "export",
        "name": "Export",
        "sectionNumber": 1,
        "category": "Foundational Concepts & Exporter / Importer Types",
        "meaning": "The legal sale and transfer of goods or services from one country to another for commercial gain.",
        "example": "A textile manufacturer in Gujarat sells cotton garments to a retailer in Germany.",
        "inSimpleWords": "Selling your local products abroad to earn foreign currency.",
        "short": "Selling your local products abroad to earn foreign currency.",
        "definition": "The legal sale and transfer of goods or services from one country to another for commercial gain."
    },
    {
        "id": "import",
        "name": "Import",
        "sectionNumber": 1,
        "category": "Foundational Concepts & Exporter / Importer Types",
        "meaning": "The legal purchase and bringing in of foreign-made goods or services into a home country.",
        "example": "An Indian smartphone company buys OLED screens made in South Korea.",
        "inSimpleWords": "Buying goods made abroad and bringing them into your home market.",
        "short": "Buying goods made abroad and bringing them into your home market.",
        "definition": "The legal purchase and bringing in of foreign-made goods or services into a home country."
    },
    {
        "id": "direct-export",
        "name": "Direct Export",
        "sectionNumber": 1,
        "category": "Foundational Concepts & Exporter / Importer Types",
        "meaning": "A manufacturer sells and ships its products directly to an overseas client, without intermediaries.",
        "example": "Tata Steel ships steel coils directly to a UK automotive factory.",
        "inSimpleWords": "You deal with and ship directly to the foreign buyer.",
        "short": "You deal with and ship directly to the foreign buyer.",
        "definition": "A manufacturer sells and ships its products directly to an overseas client, without intermediaries."
    },
    {
        "id": "indirect-export",
        "name": "Indirect Export",
        "sectionNumber": 1,
        "category": "Foundational Concepts & Exporter / Importer Types",
        "meaning": "A manufacturer exports through domestic third-party intermediaries such as trading houses.",
        "example": "A rural artisan sells sarees through an export trading company that handles overseas sales.",
        "inSimpleWords": "You sell to a local trading firm, and they sell it abroad for you.",
        "short": "You sell to a local trading firm, and they sell it abroad for you.",
        "definition": "A manufacturer exports through domestic third-party intermediaries such as trading houses."
    },
    {
        "id": "deemed-export",
        "name": "Deemed Export",
        "sectionNumber": 1,
        "category": "Foundational Concepts & Exporter / Importer Types",
        "meaning": "Goods that don't physically leave the country but are legally treated as exports for tax incentives.",
        "example": "An Indian machinery seller supplies equipment to a World Bank-funded project inside India.",
        "inSimpleWords": "Goods stay in the country, but you still get export tax benefits.",
        "short": "Goods stay in the country, but you still get export tax benefits.",
        "definition": "Goods that don't physically leave the country but are legally treated as exports for tax incentives."
    },
    {
        "id": "re-export",
        "name": "Re-Export",
        "sectionNumber": 1,
        "category": "Foundational Concepts & Exporter / Importer Types",
        "meaning": "Exporting foreign goods that were previously imported, without major processing or transformation.",
        "example": "Importing raw diamonds, sorting them, and shipping them out again without cutting.",
        "inSimpleWords": "Importing something and sending it back out without changing it.",
        "short": "Importing something and sending it back out without changing it.",
        "definition": "Exporting foreign goods that were previously imported, without major processing or transformation."
    },
    {
        "id": "commercial-import",
        "name": "Commercial Import",
        "sectionNumber": 1,
        "category": "Foundational Concepts & Exporter / Importer Types",
        "meaning": "Standard goods or raw materials imported for resale, distribution, or manufacturing.",
        "example": "A retail store imports 1,000 laptops from Taiwan for resale.",
        "inSimpleWords": "Regular business imports meant for selling or making products.",
        "short": "Regular business imports meant for selling or making products.",
        "definition": "Standard goods or raw materials imported for resale, distribution, or manufacturing."
    },
    {
        "id": "capital-goods-import",
        "name": "Capital Goods Import",
        "sectionNumber": 1,
        "category": "Foundational Concepts & Exporter / Importer Types",
        "meaning": "Machinery or equipment imported to build or upgrade manufacturing capability.",
        "example": "An auto-parts company imports robotic welding arms from Japan.",
        "inSimpleWords": "Importing heavy machines that help you build other goods.",
        "short": "Importing heavy machines that help you build other goods.",
        "definition": "Machinery or equipment imported to build or upgrade manufacturing capability."
    },
    {
        "id": "restricted-import",
        "name": "Restricted Import",
        "sectionNumber": 1,
        "category": "Foundational Concepts & Exporter / Importer Types",
        "meaning": "Goods that need specific government clearance or licence before entering the country.",
        "example": "A security firm gets special DGFT authorisation to import communication equipment.",
        "inSimpleWords": "Items you can buy only with special government permission.",
        "short": "Items you can buy only with special government permission.",
        "definition": "Goods that need specific government clearance or licence before entering the country."
    },
    {
        "id": "prohibited-import",
        "name": "Prohibited Import",
        "sectionNumber": 1,
        "category": "Foundational Concepts & Exporter / Importer Types",
        "meaning": "Items completely banned from entering a country under safety, security, or environmental laws.",
        "example": "An attempted import of endangered animal hides is seized by customs.",
        "inSimpleWords": "Goods that are strictly illegal to bring in, under any circumstance.",
        "short": "Goods that are strictly illegal to bring in, under any circumstance.",
        "definition": "Items completely banned from entering a country under safety, security, or environmental laws."
    },
    {
        "id": "temporary-import-ata-carnet",
        "name": "Temporary Import (ATA Carnet)",
        "sectionNumber": 1,
        "category": "Foundational Concepts & Exporter / Importer Types",
        "meaning": "Bringing foreign goods in duty-free for a short period, with an obligation to re-export them unchanged.",
        "example": "A German automaker imports prototype cars for a 3-day expo using an ATA Carnet.",
        "inSimpleWords": "Bringing items in temporarily for display or testing, then taking them back out.",
        "short": "Bringing items in temporarily for display or testing, then taking them back out.",
        "definition": "Bringing foreign goods in duty-free for a short period, with an obligation to re-export them unchanged."
    },
    {
        "id": "pta-fta-import",
        "name": "PTA / FTA Import",
        "sectionNumber": 1,
        "category": "Foundational Concepts & Exporter / Importer Types",
        "meaning": "Imports from countries with a signed trade agreement, qualifying for reduced or zero tariffs.",
        "example": "Importing dates from the UAE under the India-UAE CEPA at 0% duty.",
        "inSimpleWords": "Buying from countries your government has trade deals with, to pay lower taxes.",
        "short": "Buying from countries your government has trade deals with, to pay lower taxes.",
        "definition": "Imports from countries with a signed trade agreement, qualifying for reduced or zero tariffs."
    },
    {
        "id": "iec-importer-exporter-code",
        "name": "IEC (Importer Exporter Code)",
        "sectionNumber": 2,
        "category": "Mandatory Setup, Registrations & Regulatory Framework",
        "meaning": "A unique 10-digit code issued by the DGFT; mandatory to legally export or import.",
        "example": "A new startup presents its IEC to customs to clear its first export shipment.",
        "inSimpleWords": "Think of it as your trade passport — without it, customs won't clear your cargo.",
        "short": "Think of it as your trade passport — without it, customs won't clear your cargo.",
        "definition": "A unique 10-digit code issued by the DGFT; mandatory to legally export or import."
    },
    {
        "id": "ad-code-authorised-dealer-code",
        "name": "AD Code (Authorised Dealer Code)",
        "sectionNumber": 2,
        "category": "Mandatory Setup, Registrations & Regulatory Framework",
        "meaning": "A 14-digit bank code registered with customs, linking your trade transactions to your bank account.",
        "example": "A firm registers its AD Code before shipping its first container.",
        "inSimpleWords": "The bridge linking your bank account to customs for foreign currency.",
        "short": "The bridge linking your bank account to customs for foreign currency.",
        "definition": "A 14-digit bank code registered with customs, linking your trade transactions to your bank account."
    },
    {
        "id": "rcmc-registration-cum-membership-certificate",
        "name": "RCMC (Registration-cum-Membership Certificate)",
        "sectionNumber": 2,
        "category": "Mandatory Setup, Registrations & Regulatory Framework",
        "meaning": "A certificate from an Export Promotion Council proving you're registered with your industry body.",
        "example": "A spice exporter presents an RCMC to claim government export subsidies.",
        "inSimpleWords": "A membership card for your industry that unlocks government export rewards.",
        "short": "A membership card for your industry that unlocks government export rewards.",
        "definition": "A certificate from an Export Promotion Council proving you're registered with your industry body."
    },
    {
        "id": "dgft-directorate-general-of-foreign-trade",
        "name": "DGFT (Directorate General of Foreign Trade)",
        "sectionNumber": 2,
        "category": "Mandatory Setup, Registrations & Regulatory Framework",
        "meaning": "The government agency that formulates and regulates India's Foreign Trade Policy and issues licences.",
        "example": "The DGFT publishes India's 5-year Foreign Trade Policy and manages IEC registrations.",
        "inSimpleWords": "The government body that sets all export-import rules.",
        "short": "The government body that sets all export-import rules.",
        "definition": "The government agency that formulates and regulates India's Foreign Trade Policy and issues licences."
    },
    {
        "id": "cbic-icegate",
        "name": "CBIC & ICEGATE",
        "sectionNumber": 2,
        "category": "Mandatory Setup, Registrations & Regulatory Framework",
        "meaning": "CBIC oversees customs; ICEGATE is its online portal for shipping bills and duty filings.",
        "example": "A customs broker logs onto ICEGATE to submit a shipping bill and pay duties.",
        "inSimpleWords": "The official online portal where all customs paperwork happens.",
        "short": "The official online portal where all customs paperwork happens.",
        "definition": "CBIC oversees customs; ICEGATE is its online portal for shipping bills and duty filings."
    },
    {
        "id": "status-holder-export-house",
        "name": "Status Holder / Export House",
        "sectionNumber": 2,
        "category": "Mandatory Setup, Registrations & Regulatory Framework",
        "meaning": "A recognition from DGFT for exporters crossing set performance thresholds, unlocking faster clearances.",
        "example": "A manufacturer becomes a 'Three Star Export House' after $50M in exports.",
        "inSimpleWords": "A fast-track badge given to high-volume exporters.",
        "short": "A fast-track badge given to high-volume exporters.",
        "definition": "A recognition from DGFT for exporters crossing set performance thresholds, unlocking faster clearances."
    },
    {
        "id": "sez-special-economic-zone",
        "name": "SEZ (Special Economic Zone)",
        "sectionNumber": 2,
        "category": "Mandatory Setup, Registrations & Regulatory Framework",
        "meaning": "A duty-free zone treated as foreign territory for trade, offering tax exemptions.",
        "example": "An IT hardware unit in an SEZ imports components with 0% duty and GST exemption.",
        "inSimpleWords": "A tax-free business zone inside the country, built for export production.",
        "short": "A tax-free business zone inside the country, built for export production.",
        "definition": "A duty-free zone treated as foreign territory for trade, offering tax exemptions."
    },
    {
        "id": "eou-export-oriented-unit",
        "name": "EOU (Export Oriented Unit)",
        "sectionNumber": 2,
        "category": "Mandatory Setup, Registrations & Regulatory Framework",
        "meaning": "A unit that commits to exporting all its output, in exchange for duty-free imports of inputs and machinery.",
        "example": "A garment factory imports sewing machines duty-free under EOU status.",
        "inSimpleWords": "A factory that exports everything it makes, in exchange for zero import taxes.",
        "short": "A factory that exports everything it makes, in exchange for zero import taxes.",
        "definition": "A unit that commits to exporting all its output, in exchange for duty-free imports of inputs and machinery."
    },
    {
        "id": "hs-code-itc-hs-code",
        "name": "HS Code / ITC-HS Code",
        "sectionNumber": 3,
        "category": "Market Analytics, Macroeconomics & Tariff Policy",
        "meaning": "A standardised 6–8 digit code used globally to classify products for customs duty and trade rules.",
        "example": "HS Code 1006.30.20 identifies exported Basmati Rice.",
        "inSimpleWords": "The universal barcode customs uses to decide how much tax to charge.",
        "short": "The universal barcode customs uses to decide how much tax to charge.",
        "definition": "A standardised 6–8 digit code used globally to classify products for customs duty and trade rules."
    },
    {
        "id": "balance-of-trade-bot",
        "name": "Balance of Trade (BOT)",
        "sectionNumber": 3,
        "category": "Market Analytics, Macroeconomics & Tariff Policy",
        "meaning": "The difference between a nation's total exports and imports of physical goods over a period.",
        "example": "A country records a deficit when imports ($600B) exceed exports ($400B).",
        "inSimpleWords": "The scoreboard showing if a country sold more than it bought.",
        "short": "The scoreboard showing if a country sold more than it bought.",
        "definition": "The difference between a nation's total exports and imports of physical goods over a period."
    },
    {
        "id": "balance-of-payments-bop",
        "name": "Balance of Payments (BOP)",
        "sectionNumber": 3,
        "category": "Market Analytics, Macroeconomics & Tariff Policy",
        "meaning": "A complete record of all financial and economic transactions between a country and the rest of the world.",
        "example": "Includes both current day-to-day trade and long-term capital investments.",
        "inSimpleWords": "The complete macroeconomic bank passbook of a country with the world.",
        "short": "The complete macroeconomic bank passbook of a country with the world.",
        "definition": "A complete record of all financial and economic transactions between a country and the rest of the world."
    },
    {
        "id": "current-account",
        "name": "Current Account",
        "sectionNumber": 3,
        "category": "Market Analytics, Macroeconomics & Tariff Policy",
        "meaning": "The BOP section tracking trade in goods and services, investment income, and transfers.",
        "example": "Software export revenue balances out crude oil import payments.",
        "inSimpleWords": "Tracks day-to-day trade earnings and expenses.",
        "short": "Tracks day-to-day trade earnings and expenses.",
        "definition": "The BOP section tracking trade in goods and services, investment income, and transfers."
    },
    {
        "id": "capital-account",
        "name": "Capital Account",
        "sectionNumber": 3,
        "category": "Market Analytics, Macroeconomics & Tariff Policy",
        "meaning": "The BOP section recording cross-border investment, FDI, stock flows, and loans.",
        "example": "A foreign firm investing $2B in Indian data centres is a capital inflow.",
        "inSimpleWords": "Tracks long-term cross-border investments and loans.",
        "short": "Tracks long-term cross-border investments and loans.",
        "definition": "The BOP section recording cross-border investment, FDI, stock flows, and loans."
    },
    {
        "id": "revealed-comparative-advantage-rca",
        "name": "Revealed Comparative Advantage (RCA)",
        "sectionNumber": 3,
        "category": "Market Analytics, Macroeconomics & Tariff Policy",
        "meaning": "A metric showing whether a country has a competitive edge in exporting a specific product.",
        "example": "An RCA score of 3.2 in spices shows India's export share is 3.2x the global average.",
        "inSimpleWords": "A score proving what your country is best at producing for the world.",
        "short": "A score proving what your country is best at producing for the world.",
        "definition": "A metric showing whether a country has a competitive edge in exporting a specific product."
    },
    {
        "id": "trade-intensity-index-tii",
        "name": "Trade Intensity Index (TII)",
        "sectionNumber": 3,
        "category": "Market Analytics, Macroeconomics & Tariff Policy",
        "meaning": "An index showing whether trade between two countries is stronger or weaker than global averages.",
        "example": "An India-UAE TII of 2.5 shows they trade 2.5x more intensely than average.",
        "inSimpleWords": "Measures how tightly two countries are linked in trade.",
        "short": "Measures how tightly two countries are linked in trade.",
        "definition": "An index showing whether trade between two countries is stronger or weaker than global averages."
    },
    {
        "id": "tariff-vs-non-tariff-barriers",
        "name": "Tariff vs. Non-Tariff Barriers",
        "sectionNumber": 3,
        "category": "Market Analytics, Macroeconomics & Tariff Policy",
        "meaning": "Tariffs are direct taxes on imports; non-tariff barriers are restrictions like quotas or certifications.",
        "example": "A 20% tariff on cars, plus mandatory local safety re-certification.",
        "inSimpleWords": "Tariffs hit your pocket; non-tariff barriers hit you with paperwork and rules.",
        "short": "Tariffs hit your pocket; non-tariff barriers hit you with paperwork and rules.",
        "definition": "Tariffs are direct taxes on imports; non-tariff barriers are restrictions like quotas or certifications."
    },
    {
        "id": "anti-dumping-countervailing-duty-cvd",
        "name": "Anti-Dumping & Countervailing Duty (CVD)",
        "sectionNumber": 3,
        "category": "Market Analytics, Macroeconomics & Tariff Policy",
        "meaning": "Extra tariffs on imports priced below fair value (anti-dumping) or subsidised abroad (CVD).",
        "example": "An anti-dumping duty on solar panels sold below cost, to protect local factories.",
        "inSimpleWords": "A shield tax to stop foreign firms from undercutting local manufacturers.",
        "short": "A shield tax to stop foreign firms from undercutting local manufacturers.",
        "definition": "Extra tariffs on imports priced below fair value (anti-dumping) or subsidised abroad (CVD)."
    },
    {
        "id": "exw-ex-works",
        "name": "EXW (Ex Works)",
        "sectionNumber": 4,
        "category": "Commercial Contracting & Incoterms 2020",
        "meaning": "Seller's duty ends at the factory. Buyer pays all transport, insurance and customs from there.",
        "example": "An Indian manufacturer hands over goods at its Ahmedabad factory; the buyer arranges everything else.",
        "inSimpleWords": "You hand over the keys at your factory door — the buyer does the rest.",
        "short": "You hand over the keys at your factory door — the buyer does the rest.",
        "definition": "Seller's duty ends at the factory. Buyer pays all transport, insurance and customs from there."
    },
    {
        "id": "fca-free-carrier",
        "name": "FCA (Free Carrier)",
        "sectionNumber": 4,
        "category": "Commercial Contracting & Incoterms 2020",
        "meaning": "Seller clears goods for export and delivers them to the buyer's nominated carrier.",
        "example": "An exporter clears customs and hands goods to DHL at the airport.",
        "inSimpleWords": "You clear export customs and drop the goods with the buyer's shipping agent.",
        "short": "You clear export customs and drop the goods with the buyer's shipping agent.",
        "definition": "Seller clears goods for export and delivers them to the buyer's nominated carrier."
    },
    {
        "id": "fob-free-on-board",
        "name": "FOB (Free On Board)",
        "sectionNumber": 4,
        "category": "Commercial Contracting & Incoterms 2020",
        "meaning": "Seller pays inland transport and export clearance, and loads cargo onto the ship. Buyer pays ocean freight and insurance.",
        "example": "An exporter delivers cargo to port and loads it onto the vessel.",
        "inSimpleWords": "Recommended for beginners — you load the ship; buyer pays for the sea journey.",
        "short": "Recommended for beginners — you load the ship; buyer pays for the sea journey.",
        "definition": "Seller pays inland transport and export clearance, and loads cargo onto the ship. Buyer pays ocean freight and insurance."
    },
    {
        "id": "cfr-cost-and-freight",
        "name": "CFR (Cost and Freight)",
        "sectionNumber": 4,
        "category": "Commercial Contracting & Incoterms 2020",
        "meaning": "Seller pays ocean freight to the destination port, but risk transfers once goods are loaded.",
        "example": "A Mumbai exporter pays freight to Dubai; the buyer arranges insurance.",
        "inSimpleWords": "You pay the freight, but the buyer bears the risk once it's on the ship.",
        "short": "You pay the freight, but the buyer bears the risk once it's on the ship.",
        "definition": "Seller pays ocean freight to the destination port, but risk transfers once goods are loaded."
    },
    {
        "id": "cif-cost-insurance-freight",
        "name": "CIF (Cost, Insurance & Freight)",
        "sectionNumber": 4,
        "category": "Commercial Contracting & Incoterms 2020",
        "meaning": "Seller pays ocean freight and insurance to the destination port; risk transfers on loading.",
        "example": "A tea exporter pays freight to Hamburg and buys transit insurance for the buyer.",
        "inSimpleWords": "Recommended for beginners — you cover freight and insurance to the arrival port.",
        "short": "Recommended for beginners — you cover freight and insurance to the arrival port.",
        "definition": "Seller pays ocean freight and insurance to the destination port; risk transfers on loading."
    },
    {
        "id": "cpt-carriage-paid-to",
        "name": "CPT (Carriage Paid To)",
        "sectionNumber": 4,
        "category": "Commercial Contracting & Incoterms 2020",
        "meaning": "Seller pays freight to the named destination; risk transfers once the first carrier receives the goods.",
        "example": "Seller pays air freight to London; risk passes once the airline takes the cargo.",
        "inSimpleWords": "The non-sea version of CFR.",
        "short": "The non-sea version of CFR.",
        "definition": "Seller pays freight to the named destination; risk transfers once the first carrier receives the goods."
    },
    {
        "id": "cip-carriage-insurance-paid-to",
        "name": "CIP (Carriage & Insurance Paid To)",
        "sectionNumber": 4,
        "category": "Commercial Contracting & Incoterms 2020",
        "meaning": "Seller pays freight and insurance to the agreed destination.",
        "example": "An exporter flies microchips to Tokyo, paying freight and insurance.",
        "inSimpleWords": "The non-sea version of CIF.",
        "short": "The non-sea version of CIF.",
        "definition": "Seller pays freight and insurance to the agreed destination."
    },
    {
        "id": "dap-delivered-at-place",
        "name": "DAP (Delivered at Place)",
        "sectionNumber": 4,
        "category": "Commercial Contracting & Incoterms 2020",
        "meaning": "Seller delivers to the buyer's location, ready for unloading; buyer handles import duties.",
        "example": "Goods are shipped to a Paris warehouse; the buyer pays French import tax.",
        "inSimpleWords": "You deliver to their door, but they pay their own import taxes.",
        "short": "You deliver to their door, but they pay their own import taxes.",
        "definition": "Seller delivers to the buyer's location, ready for unloading; buyer handles import duties."
    },
    {
        "id": "dpu-delivered-at-place-unloaded",
        "name": "DPU (Delivered at Place Unloaded)",
        "sectionNumber": 4,
        "category": "Commercial Contracting & Incoterms 2020",
        "meaning": "Seller delivers and is responsible for unloading the goods at the destination.",
        "example": "Heavy machinery is delivered and unloaded at a Sydney job site by the seller.",
        "inSimpleWords": "The only Incoterm where the seller must also unload the goods.",
        "short": "The only Incoterm where the seller must also unload the goods.",
        "definition": "Seller delivers and is responsible for unloading the goods at the destination."
    },
    {
        "id": "ddp-delivered-duty-paid",
        "name": "DDP (Delivered Duty Paid)",
        "sectionNumber": 4,
        "category": "Commercial Contracting & Incoterms 2020",
        "meaning": "Maximum seller responsibility — seller pays all transport, insurance, duties and delivery.",
        "example": "An online seller ships to a US customer with all customs duties pre-paid.",
        "inSimpleWords": "You handle everything, right to the buyer's doorstep, including import taxes.",
        "short": "You handle everything, right to the buyer's doorstep, including import taxes.",
        "definition": "Maximum seller responsibility — seller pays all transport, insurance, duties and delivery."
    },
    {
        "id": "purchase-order-po",
        "name": "Purchase Order (PO)",
        "sectionNumber": 5,
        "category": "Documentation, Trade Finance & Payment Terms",
        "meaning": "A binding contract from the buyer detailing specifications, quantities, price and delivery terms.",
        "example": "A London store issues a PO for 5,000 silk scarves from a Jaipur exporter.",
        "inSimpleWords": "The official buyer order form that seals the deal.",
        "short": "The official buyer order form that seals the deal.",
        "definition": "A binding contract from the buyer detailing specifications, quantities, price and delivery terms."
    },
    {
        "id": "letter-of-credit-lc",
        "name": "Letter of Credit (LC)",
        "sectionNumber": 5,
        "category": "Documentation, Trade Finance & Payment Terms",
        "meaning": "A guarantee from the importer's bank that the exporter will be paid, if shipping documents match exactly.",
        "example": "A bank issues a $100,000 LC, paid once clean bill-of-lading documents are submitted.",
        "inSimpleWords": "If you ship and submit the right paperwork, the bank must pay you.",
        "short": "If you ship and submit the right paperwork, the bank must pay you.",
        "definition": "A guarantee from the importer's bank that the exporter will be paid, if shipping documents match exactly."
    },
    {
        "id": "irrevocable-vs-confirmed-lc",
        "name": "Irrevocable vs. Confirmed LC",
        "sectionNumber": 5,
        "category": "Documentation, Trade Finance & Payment Terms",
        "meaning": "An irrevocable LC can't be cancelled without the seller's consent; a confirmed LC adds a second bank's guarantee.",
        "example": "A local bank 'confirms' a foreign LC, so it pays even if the foreign bank fails.",
        "inSimpleWords": "The confirmed LC is the safest payment method in global trade.",
        "short": "The confirmed LC is the safest payment method in global trade.",
        "definition": "An irrevocable LC can't be cancelled without the seller's consent; a confirmed LC adds a second bank's guarantee."
    },
    {
        "id": "packing-credit-letter-pre-shipment-finance",
        "name": "Packing Credit Letter (Pre-Shipment Finance)",
        "sectionNumber": 5,
        "category": "Documentation, Trade Finance & Payment Terms",
        "meaning": "A short-term loan from the exporter's bank to fund production before shipment.",
        "example": "A bank funds a garment exporter's raw cotton purchase after a confirmed order.",
        "inSimpleWords": "A cash advance from your bank to manufacture goods for a confirmed order.",
        "short": "A cash advance from your bank to manufacture goods for a confirmed order.",
        "definition": "A short-term loan from the exporter's bank to fund production before shipment."
    },
    {
        "id": "commercial-invoice",
        "name": "Commercial Invoice",
        "sectionNumber": 5,
        "category": "Documentation, Trade Finance & Payment Terms",
        "meaning": "The primary bill of sale, stating product details, HS codes, prices and Incoterms, used to calculate duties.",
        "example": "An invoice for $50,000 of tea leaves is used by US Customs to calculate duty.",
        "inSimpleWords": "The master receipt and tax bill for your shipment.",
        "short": "The master receipt and tax bill for your shipment.",
        "definition": "The primary bill of sale, stating product details, HS codes, prices and Incoterms, used to calculate duties."
    },
    {
        "id": "packing-list",
        "name": "Packing List",
        "sectionNumber": 5,
        "category": "Documentation, Trade Finance & Payment Terms",
        "meaning": "An itemised document listing contents, weights, and dimensions of every package.",
        "example": "A packing list helps port officers locate a crate with 200 boxed microchips.",
        "inSimpleWords": "The detailed breakdown of what's inside every box.",
        "short": "The detailed breakdown of what's inside every box.",
        "definition": "An itemised document listing contents, weights, and dimensions of every package."
    },
    {
        "id": "export-value-declaration",
        "name": "Export Value Declaration",
        "sectionNumber": 5,
        "category": "Documentation, Trade Finance & Payment Terms",
        "meaning": "A declaration confirming the truthfulness of the declared transaction value.",
        "example": "A digital declaration on ICEGATE certifies invoice values are accurate.",
        "inSimpleWords": "A sworn statement confirming you're not lying about product values.",
        "short": "A sworn statement confirming you're not lying about product values.",
        "definition": "A declaration confirming the truthfulness of the declared transaction value."
    },
    {
        "id": "sdf-form-statutory-declaration",
        "name": "SDF Form (Statutory Declaration)",
        "sectionNumber": 5,
        "category": "Documentation, Trade Finance & Payment Terms",
        "meaning": "A declaration filed with shipping bills, pledging export proceeds will be repatriated on time.",
        "example": "An exporter pledges that a $30,000 payment will return to India within 9 months.",
        "inSimpleWords": "A legal promise to the central bank that foreign money will come back.",
        "short": "A legal promise to the central bank that foreign money will come back.",
        "definition": "A declaration filed with shipping bills, pledging export proceeds will be repatriated on time."
    },
    {
        "id": "certificate-of-origin-coo",
        "name": "Certificate of Origin (CoO)",
        "sectionNumber": 5,
        "category": "Documentation, Trade Finance & Payment Terms",
        "meaning": "A certificate confirming where goods were made, used to claim reduced tariffs under trade agreements.",
        "example": "A preferential CoO lets a Dubai buyer import Indian goods at 0% tariff.",
        "inSimpleWords": "Proof of birth for your product, used to get trade-agreement discounts.",
        "short": "Proof of birth for your product, used to get trade-agreement discounts.",
        "definition": "A certificate confirming where goods were made, used to claim reduced tariffs under trade agreements."
    },
    {
        "id": "certificate-of-free-sale",
        "name": "Certificate of Free Sale",
        "sectionNumber": 5,
        "category": "Documentation, Trade Finance & Payment Terms",
        "meaning": "A certificate confirming the exported product is legally sold in the home market.",
        "example": "A cosmetics maker gets this certificate before exporting to Thailand.",
        "inSimpleWords": "Proof that your product is safe and legally sold in your own country.",
        "short": "Proof that your product is safe and legally sold in your own country.",
        "definition": "A certificate confirming the exported product is legally sold in the home market."
    },
    {
        "id": "certificate-of-inspection",
        "name": "Certificate of Inspection",
        "sectionNumber": 5,
        "category": "Documentation, Trade Finance & Payment Terms",
        "meaning": "A quality report confirming cargo matches the buyer's agreed specifications.",
        "example": "An inspection agency certifies a grain shipment meets grade standards.",
        "inSimpleWords": "An independent referee report proving your goods meet the buyer's specs.",
        "short": "An independent referee report proving your goods meet the buyer's specs.",
        "definition": "A quality report confirming cargo matches the buyer's agreed specifications."
    },
    {
        "id": "certificate-of-insurance",
        "name": "Certificate of Insurance",
        "sectionNumber": 5,
        "category": "Documentation, Trade Finance & Payment Terms",
        "meaning": "A document confirming transit insurance has been arranged for the cargo.",
        "example": "An insurance certificate covers 110% of cargo value against storm damage.",
        "inSimpleWords": "Insurance proof protecting your money if the cargo is damaged or lost.",
        "short": "Insurance proof protecting your money if the cargo is damaged or lost.",
        "definition": "A document confirming transit insurance has been arranged for the cargo."
    },
    {
        "id": "bill-of-exchange-draft",
        "name": "Bill of Exchange / Draft",
        "sectionNumber": 5,
        "category": "Documentation, Trade Finance & Payment Terms",
        "meaning": "A written instrument ordering the importer to pay a set sum, on demand or on a fixed date.",
        "example": "An exporter draws a 90-day sight draft for a Dubai importer to pay $50,000.",
        "inSimpleWords": "A legal payment demand slip attached to shipping documents.",
        "short": "A legal payment demand slip attached to shipping documents.",
        "definition": "A written instrument ordering the importer to pay a set sum, on demand or on a fixed date."
    },
    {
        "id": "shipment-advice",
        "name": "Shipment Advice",
        "sectionNumber": 5,
        "category": "Documentation, Trade Finance & Payment Terms",
        "meaning": "A notification to the buyer with dispatch details, vessel name, and arrival dates.",
        "example": "An email to the buyer with vessel name and ETA after cargo departs.",
        "inSimpleWords": "A heads-up email so your buyer can prepare for arrival.",
        "short": "A heads-up email so your buyer can prepare for arrival.",
        "definition": "A notification to the buyer with dispatch details, vessel name, and arrival dates."
    },
    {
        "id": "inland-bill-of-lading-lorry-receipt-lr",
        "name": "Inland Bill of Lading / Lorry Receipt (LR)",
        "sectionNumber": 5,
        "category": "Documentation, Trade Finance & Payment Terms",
        "meaning": "A transport agreement for moving export cargo overland to a seaport or airport.",
        "example": "A trucking receipt for moving cargo from a dry port to a seaport.",
        "inSimpleWords": "The inland transport receipt for trucking goods to the seaport.",
        "short": "The inland transport receipt for trucking goods to the seaport.",
        "definition": "A transport agreement for moving export cargo overland to a seaport or airport."
    },
    {
        "id": "ocean-bill-of-lading-b-l",
        "name": "Ocean Bill of Lading (B/L)",
        "sectionNumber": 5,
        "category": "Documentation, Trade Finance & Payment Terms",
        "meaning": "A legal document that is cargo title, a receipt, and a contract of carriage for sea transport.",
        "example": "A shipping line issues a negotiable B/L so the buyer can claim the container.",
        "inSimpleWords": "Like a claim check — whoever holds the original B/L owns the cargo.",
        "short": "Like a claim check — whoever holds the original B/L owns the cargo.",
        "definition": "A legal document that is cargo title, a receipt, and a contract of carriage for sea transport."
    },
    {
        "id": "shipping-bill-bill-of-export",
        "name": "Shipping Bill / Bill of Export",
        "sectionNumber": 5,
        "category": "Documentation, Trade Finance & Payment Terms",
        "meaning": "The official application filed with customs, without which no cargo can be exported.",
        "example": "A broker files a Duty Drawback Shipping Bill at a port to clear a container.",
        "inSimpleWords": "You file this to exit goods from your country.",
        "short": "You file this to exit goods from your country.",
        "definition": "The official application filed with customs, without which no cargo can be exported."
    },
    {
        "id": "ecgc-export-credit-guarantee-corp",
        "name": "ECGC (Export Credit Guarantee Corp)",
        "sectionNumber": 5,
        "category": "Documentation, Trade Finance & Payment Terms",
        "meaning": "A state-backed agency insuring exporters against buyer bankruptcy or non-payment.",
        "example": "ECGC compensates 90% of loss when an overseas buyer defaults.",
        "inSimpleWords": "Insurance that pays you if your foreign buyer refuses to pay or goes bankrupt.",
        "short": "Insurance that pays you if your foreign buyer refuses to pay or goes bankrupt.",
        "definition": "A state-backed agency insuring exporters against buyer bankruptcy or non-payment."
    },
    {
        "id": "swift-network",
        "name": "SWIFT Network",
        "sectionNumber": 5,
        "category": "Documentation, Trade Finance & Payment Terms",
        "meaning": "A secure global messaging network banks use to send payment instructions and LCs.",
        "example": "A SWIFT MT700 message confirms an LC has been issued in your favour.",
        "inSimpleWords": "The secure messaging system that moves money and guarantees worldwide.",
        "short": "The secure messaging system that moves money and guarantees worldwide.",
        "definition": "A secure global messaging network banks use to send payment instructions and LCs."
    },
    {
        "id": "bill-of-entry",
        "name": "Bill of Entry",
        "sectionNumber": 5,
        "category": "Documentation, Trade Finance & Payment Terms",
        "meaning": "A declaration filed by an importer to declare incoming cargo, calculate duty, and get clearance.",
        "example": "Filing a Bill of Entry and paying $5,000 duty to release imported machinery.",
        "inSimpleWords": "You file this to pay tax and bring goods into your country.",
        "short": "You file this to pay tax and bring goods into your country.",
        "definition": "A declaration filed by an importer to declare incoming cargo, calculate duty, and get clearance."
    },
    {
        "id": "airway-bill-awb",
        "name": "Airway Bill (AWB)",
        "sectionNumber": 5,
        "category": "Documentation, Trade Finance & Payment Terms",
        "meaning": "A non-negotiable transport document for air freight; it is a receipt, not a title document.",
        "example": "An airline issues an AWB for a pharmaceutical shipment.",
        "inSimpleWords": "The air freight shipping slip — unlike a B/L, it doesn't represent ownership.",
        "short": "The air freight shipping slip — unlike a B/L, it doesn't represent ownership.",
        "definition": "A non-negotiable transport document for air freight; it is a receipt, not a title document."
    },
    {
        "id": "freight-forwarder-vs-cha",
        "name": "Freight Forwarder vs. CHA",
        "sectionNumber": 6,
        "category": "Logistics, Port Operations & Global Maritime Chokepoints",
        "meaning": "A Freight Forwarder arranges shipping bookings; a CHA clears customs paperwork at ports.",
        "example": "Hiring a forwarder to book containers, and a CHA to clear ICEGATE documents.",
        "inSimpleWords": "Forwarders move the cargo; CHAs clear the government paperwork.",
        "short": "Forwarders move the cargo; CHAs clear the government paperwork.",
        "definition": "A Freight Forwarder arranges shipping bookings; a CHA clears customs paperwork at ports."
    },
    {
        "id": "teu-feu",
        "name": "TEU & FEU",
        "sectionNumber": 6,
        "category": "Logistics, Port Operations & Global Maritime Chokepoints",
        "meaning": "TEU is a 20-foot container unit; FEU is a 40-foot container unit — the standard measures of capacity.",
        "example": "Booking 2 TEUs for dense granite versus 1 FEU for light garments.",
        "inSimpleWords": "TEU = 20-foot container. FEU = 40-foot container.",
        "short": "TEU = 20-foot container. FEU = 40-foot container.",
        "definition": "TEU is a 20-foot container unit; FEU is a 40-foot container unit — the standard measures of capacity."
    },
    {
        "id": "demurrage-vs-detention",
        "name": "Demurrage vs. Detention",
        "sectionNumber": 6,
        "category": "Logistics, Port Operations & Global Maritime Chokepoints",
        "meaning": "Demurrage is a port penalty for keeping a container inside port past free days; detention is a shipping-line penalty for holding it outside port.",
        "example": "10 days at the seaport is demurrage; delaying an empty container's return is detention.",
        "inSimpleWords": "Demurrage = port overstay fine. Detention = container overstay fine outside port.",
        "short": "Demurrage = port overstay fine. Detention = container overstay fine outside port.",
        "definition": "Demurrage is a port penalty for keeping a container inside port past free days; detention is a shipping-line penalty for holding it outside port."
    },
    {
        "id": "strait-of-malacca",
        "name": "Strait of Malacca",
        "sectionNumber": 6,
        "category": "Logistics, Port Operations & Global Maritime Chokepoints",
        "meaning": "A strait between Malaysia and Sumatra linking the Indian Ocean to the Pacific — the shortest route for Gulf oil to Asia.",
        "example": "It handles over 25% of global traded goods and ~60% of world maritime oil traffic.",
        "inSimpleWords": "The main Indo-Pacific trade bottleneck for Asian manufacturing hubs.",
        "short": "The main Indo-Pacific trade bottleneck for Asian manufacturing hubs.",
        "definition": "A strait between Malaysia and Sumatra linking the Indian Ocean to the Pacific — the shortest route for Gulf oil to Asia."
    },
    {
        "id": "bab-el-mandeb-strait",
        "name": "Bab-el-Mandeb Strait",
        "sectionNumber": 6,
        "category": "Logistics, Port Operations & Global Maritime Chokepoints",
        "meaning": "A strait between Yemen and the Horn of Africa linking the Red Sea to the Gulf of Aden.",
        "example": "It is the southern gateway to the Suez Canal route.",
        "inSimpleWords": "The crucial southern doorway to the Red Sea and Suez Canal.",
        "short": "The crucial southern doorway to the Red Sea and Suez Canal.",
        "definition": "A strait between Yemen and the Horn of Africa linking the Red Sea to the Gulf of Aden."
    },
    {
        "id": "suez-canal",
        "name": "Suez Canal",
        "sectionNumber": 6,
        "category": "Logistics, Port Operations & Global Maritime Chokepoints",
        "meaning": "An artificial waterway in Egypt linking the Mediterranean to the Red Sea, avoiding a trip around Africa.",
        "example": "It handles ~12% of world trade; the 2021 Ever Given grounding halted $10B a day.",
        "inSimpleWords": "The shortcut cutting 10–14 days off travel time between Asia and Europe.",
        "short": "The shortcut cutting 10–14 days off travel time between Asia and Europe.",
        "definition": "An artificial waterway in Egypt linking the Mediterranean to the Red Sea, avoiding a trip around Africa."
    },
    {
        "id": "panama-canal",
        "name": "Panama Canal",
        "sectionNumber": 6,
        "category": "Logistics, Port Operations & Global Maritime Chokepoints",
        "meaning": "A canal across Panama linking the Atlantic and Pacific Oceans.",
        "example": "It handles ~5% of global trade; droughts have restricted daily ship transits.",
        "inSimpleWords": "The primary shortcut linking Atlantic and Pacific trade routes.",
        "short": "The primary shortcut linking Atlantic and Pacific trade routes.",
        "definition": "A canal across Panama linking the Atlantic and Pacific Oceans."
    },
    {
        "id": "strait-of-hormuz",
        "name": "Strait of Hormuz",
        "sectionNumber": 6,
        "category": "Logistics, Port Operations & Global Maritime Chokepoints",
        "meaning": "A waterway between Oman and Iran linking the Persian Gulf to the Arabian Sea.",
        "example": "It handles ~20% of global oil consumption and 30% of global LNG trade.",
        "inSimpleWords": "The world's energy lifeline — any disruption spikes oil and fuel prices.",
        "short": "The world's energy lifeline — any disruption spikes oil and fuel prices.",
        "definition": "A waterway between Oman and Iran linking the Persian Gulf to the Arabian Sea."
    },
    {
        "id": "cape-of-good-hope",
        "name": "Cape of Good Hope",
        "sectionNumber": 6,
        "category": "Logistics, Port Operations & Global Maritime Chokepoints",
        "meaning": "The shipping route around the southern tip of Africa.",
        "example": "It's the main alternative when the Suez or Bab-el-Mandeb routes are blocked, adding 10–14 days.",
        "inSimpleWords": "The long detour around Africa used when Red Sea routes are unavailable.",
        "short": "The long detour around Africa used when Red Sea routes are unavailable.",
        "definition": "The shipping route around the southern tip of Africa."
    },
    {
        "id": "turkish-straits",
        "name": "Turkish Straits",
        "sectionNumber": 6,
        "category": "Logistics, Port Operations & Global Maritime Chokepoints",
        "meaning": "The Bosphorus and Dardanelles, linking the Black Sea to the Mediterranean.",
        "example": "Essential for grain and oil exports from Russia, Ukraine, and Kazakhstan.",
        "inSimpleWords": "The only maritime exit route for Black Sea trade.",
        "short": "The only maritime exit route for Black Sea trade.",
        "definition": "The Bosphorus and Dardanelles, linking the Black Sea to the Mediterranean."
    },
    {
        "id": "rodtep-scheme",
        "name": "RoDTEP Scheme",
        "sectionNumber": 7,
        "category": "Government Export Incentive Schemes & Tax Rebates",
        "meaning": "Reimburses hidden, un-rebated central, state and local taxes embedded in export manufacturing.",
        "example": "An exporter gets a 1.5% RoDTEP credit on FOB value, as tradeable e-scrips.",
        "inSimpleWords": "Prevents the 'export of domestic taxes' and keeps your goods price-competitive.",
        "short": "Prevents the 'export of domestic taxes' and keeps your goods price-competitive.",
        "definition": "Reimburses hidden, un-rebated central, state and local taxes embedded in export manufacturing."
    },
    {
        "id": "duty-drawback-dbk-scheme",
        "name": "Duty Drawback (DBK) Scheme",
        "sectionNumber": 7,
        "category": "Government Export Incentive Schemes & Tax Rebates",
        "meaning": "Refunds customs duty paid on imported inputs used to manufacture exported goods.",
        "example": "Importing zippers at 10% duty, using them in jackets, and getting that duty refunded on export.",
        "inSimpleWords": "Gets your import tax money back if you re-export those materials as finished goods.",
        "short": "Gets your import tax money back if you re-export those materials as finished goods.",
        "definition": "Refunds customs duty paid on imported inputs used to manufacture exported goods."
    },
    {
        "id": "advance-authorisation-scheme",
        "name": "Advance Authorisation Scheme",
        "sectionNumber": 7,
        "category": "Government Export Incentive Schemes & Tax Rebates",
        "meaning": "Allows duty-free import of raw materials, provided the finished goods are exported within a set time.",
        "example": "Importing $50,000 of silk fabric duty-free, committing to export 5,000 shirts in 18 months.",
        "inSimpleWords": "Import raw materials tax-free, as long as you export the finished product.",
        "short": "Import raw materials tax-free, as long as you export the finished product.",
        "definition": "Allows duty-free import of raw materials, provided the finished goods are exported within a set time."
    },
    {
        "id": "epcg-scheme",
        "name": "EPCG Scheme",
        "sectionNumber": 7,
        "category": "Government Export Incentive Schemes & Tax Rebates",
        "meaning": "Allows duty-free import of capital machinery, subject to an export obligation.",
        "example": "Saving $100,000 in import tax on a CNC machine, committing to export $600,000 in goods made with it.",
        "inSimpleWords": "Import factory machines duty-free by committing to export goods made with them.",
        "short": "Import factory machines duty-free by committing to export goods made with them.",
        "definition": "Allows duty-free import of capital machinery, subject to an export obligation."
    },
    {
        "id": "rosctl-scheme",
        "name": "RoSCTL Scheme",
        "sectionNumber": 7,
        "category": "Government Export Incentive Schemes & Tax Rebates",
        "meaning": "A tax-rebate scheme specifically for the apparel and made-ups sector.",
        "example": "A garment manufacturer claims a 3.5% rebate on exported cotton dresses.",
        "inSimpleWords": "A special tax refund scheme just for clothing and textile exporters.",
        "short": "A special tax refund scheme just for clothing and textile exporters.",
        "definition": "A tax-rebate scheme specifically for the apparel and made-ups sector."
    },
    {
        "id": "igst-refund-lut",
        "name": "IGST Refund & LUT",
        "sectionNumber": 7,
        "category": "Government Export Incentive Schemes & Tax Rebates",
        "meaning": "Exporters can ship without paying IGST upfront by filing an LUT, or pay and claim a refund later.",
        "example": "Filing an LUT on the GST portal to avoid blocking working capital.",
        "inSimpleWords": "Filing an LUT saves cash flow while you wait for export refunds.",
        "short": "Filing an LUT saves cash flow while you wait for export refunds.",
        "definition": "Exporters can ship without paying IGST upfront by filing an LUT, or pay and claim a refund later."
    },
    {
        "id": "edpms-idpms",
        "name": "EDPMS & IDPMS",
        "sectionNumber": 8,
        "category": "Post-Export Compliance & Foreign Exchange Realisation",
        "meaning": "RBI systems tracking whether export earnings arrive in India, or import payments match outward remittances.",
        "example": "RBI's EDPMS flags an exporter if payment isn't received within 9 months.",
        "inSimpleWords": "The Reserve Bank's digital watchdog tracking cross-border trade money.",
        "short": "The Reserve Bank's digital watchdog tracking cross-border trade money.",
        "definition": "RBI systems tracking whether export earnings arrive in India, or import payments match outward remittances."
    },
    {
        "id": "e-brc-electronic-bank-realisation",
        "name": "e-BRC (Electronic Bank Realisation)",
        "sectionNumber": 8,
        "category": "Post-Export Compliance & Foreign Exchange Realisation",
        "meaning": "A digital certificate from your bank confirming foreign payment for a shipment has been received.",
        "example": "Submitting an e-BRC code on ICEGATE to release RoDTEP and Duty Drawback benefits.",
        "inSimpleWords": "You can't claim government incentives until your bank issues an e-BRC.",
        "short": "You can't claim government incentives until your bank issues an e-BRC.",
        "definition": "A digital certificate from your bank confirming foreign payment for a shipment has been received."
    },
    {
        "id": "fema-repatriation-mandate",
        "name": "FEMA Repatriation Mandate",
        "sectionNumber": 8,
        "category": "Post-Export Compliance & Foreign Exchange Realisation",
        "meaning": "A law requiring exporters to bring foreign payment into India within 9 months of export.",
        "example": "Ensuring a buyer's wire transfer clears within 9 months to avoid compliance flags.",
        "inSimpleWords": "Federal law requiring export earnings to return home promptly.",
        "short": "Federal law requiring export earnings to return home promptly.",
        "definition": "A law requiring exporters to bring foreign payment into India within 9 months of export."
    }
],

  // Visual Micro-Lessons
  visualLessons: [
    {
      id: 'logistics',
      image: 'ship',
      title: 'Move the goods: Agree the handover point',
      tag: 'LOGISTICS & INCOTERMS',
      copy: 'An Incoterm does not just state who pays freight—it pinpoints the exact geographic moment risk of loss transfers from seller to buyer.',
      bullets: [
        'EXW: Risk passes at seller\'s warehouse door.',
        'FOB: Risk passes once loaded aboard the vessel at Indian port.',
        'CIF: Risk passes on ship loading, but seller arranges insurance to foreign port.',
        'DDP: Seller bears all risk, duty, and delivery right to buyer\'s foreign doorstep.'
      ]
    },
    {
      id: 'documentation',
      image: 'document',
      title: 'Make the documents tell one synchronized story',
      tag: 'DOCUMENTATION INTEGRITY',
      copy: 'A single typo between the Commercial Invoice, Packing List, and Bill of Lading can stall a multi-million-rupee shipment at foreign customs for weeks.',
      bullets: [
        'HS Code must be identical across Invoice, Shipping Bill, and Certificate of Origin.',
        'Net weight and gross weight must match exactly on Packing List and B/L.',
        'Consignee name and notifying address must strictly match Letter of Credit terms.',
        'Product description on invoice must adhere strictly to agreed contractual nomenclature.'
      ]
    },
    {
      id: 'payment',
      image: 'bank',
      title: 'Plan collection before container dispatch',
      tag: 'PAYMENT SAFETY & EDPMS',
      copy: 'Exporting without secure payment terms is giving away your goods for free. Match your payment term to your relationship with the overseas buyer.',
      bullets: [
        'Advance T/T: Safest for exporter; mandatory for first-time unverified foreign buyers.',
        'Irrevocable Confirmed L/C: Gold standard for large contracts; guaranteed by prime banks.',
        'Documents Against Payment (DP): Bank releases documents only upon full wire payment.',
        'Open Account (OA): Only recommended with ECGC export credit insurance coverage.'
      ]
    }
  ],

  // Geopolitical Trade Scenarios
  geopolitics: [
    {
      id: 'red-sea',
      title: 'Red Sea & Suez Canal Maritime Disruption',
      region: 'Red Sea / Bab el-Mandeb / Suez Canal',
      tag: 'TRANSIT TIME & FREIGHT INFLATION',
      summary: 'Attacks on merchant vessels in the southern Red Sea have forced major container lines (Maersk, MSC, Hapag-Lloyd) to bypass Suez and circumnavigate Africa via the Cape of Good Hope.',
      impacts: {
        freightRate: '+60% to +110% on India-Europe / US East Coast routes',
        transitDelay: '12 to 18 additional sailing days',
        insuranceSurcharge: 'War risk insurance jumped from 0.05% to 0.75% of hull value'
      },
      affectedSectors: ['Agriculture (Basmati, Perishables)', 'Engineering Goods', 'Textiles & Garments', 'Auto Components'],
      mitigationPlaybook: [
        'Shift perishable consignments to scheduled air freight under government subsidy where viable.',
        'Quote CIF or CFR with explicit floating freight surcharges rather than rigid fixed rates.',
        'Factor a 45-day lead time into buyer contracts to prevent Letter of Credit expiry.',
        'Maintain close touch with FIEO and EEPC freight facilitation desks for liner spot rate intelligence.'
      ]
    },
    {
      id: 'cbam',
      title: 'EU Carbon Border Adjustment Mechanism (CBAM)',
      region: 'European Union (27 Member States)',
      tag: 'ESG & DECARBONIZATION TARIFFS',
      summary: 'The EU\'s carbon border tariff aims to equalize the price of carbon paid for EU domestic products with imported goods from countries with less stringent climate laws.',
      impacts: {
        freightRate: 'Gradual phase-in of carbon tariff certificates starting 2026',
        transitDelay: 'Zero physical delay, but heavy reporting and documentation load',
        insuranceSurcharge: 'Compliance auditing overhead and verification penalties'
      },
      affectedSectors: ['Iron & Steel', 'Aluminium', 'Fertilizers', 'Cement', 'Hydrogen'],
      mitigationPlaybook: [
        'Calculate embedded direct and indirect greenhouse gas emissions per ton of product.',
        'Transition production boilers and smelters to green hydrogen and renewable solar power.',
        'Leverage EEPC and Steel Ministry green certification desks to establish verified emissions data.',
        'Prepare quarterly embedded emissions reporting templates required by EU importers.'
      ]
    },
    {
      id: 'cepa-ftas',
      title: 'Next-Gen Free Trade Agreements (UAE, Australia, EFTA)',
      region: 'Middle East, Oceania & Europe',
      tag: 'PREFERENTIAL TARIFF DIVIDENDS',
      summary: 'India has adopted an aggressive posture of concluding high-impact bilateral trade agreements that unlock zero-duty entry for over 90% of Indian tariff lines.',
      impacts: {
        freightRate: 'Bilateral shipping lanes seeing increased container frequency and feeder capacity',
        transitDelay: 'Accelerated customs clearance under Authorized Economic Operator (AEO) mutual recognition',
        insuranceSurcharge: 'Preferential treatment reduces border inspection and demurrage risk'
      },
      affectedSectors: ['Gems & Jewellery', 'Apparel & Made-ups', 'Engineering & Machinery', 'Pharmaceuticals'],
      mitigationPlaybook: [
        'Register immediately on DGFT\'s electronic Certificate of Origin portal (trade.gov.in).',
        'Verify product-specific Rules of Origin (Wholly Obtained or CTC + Value Addition).',
        'Market directly to UAE and Australian procurement agencies citing zero import tariff advantages.',
        'Utilize Jebel Ali Free Zone as a re-export and value-addition hub for North Africa.'
      ]
    },
    {
      id: 'local-currency',
      title: 'Local Currency Settlement (Rupee-Dirham & Rupee-Rouble)',
      region: 'GCC, Russia & South Asia',
      tag: 'DE-DOLLARIZATION & FOREX RESILIENCE',
      summary: 'RBI has introduced bilateral local currency trade settlement mechanisms using Special Rupee Vostro Accounts (SRVA) to bypass US Dollar volatility and clearing bottlenecks.',
      impacts: {
        freightRate: 'Neutral freight impact, but eliminates currency conversion spreads (1.5-2.5%)',
        transitDelay: 'Faster payment settlement times within 24 hours via direct bilateral ledger',
        insuranceSurcharge: 'Insulates exporters from cross-border payment freezes and foreign exchange sanctions'
      },
      affectedSectors: ['Petroleum Products', 'Food & Agricultural Commodities', 'Pharmaceuticals', 'Machinery'],
      mitigationPlaybook: [
        'Consult with Authorised Dealer bank to open invoicing in Indian Rupee (INR) or UAE Dirham (AED).',
        'Ensure proper EDPMS reporting for non-USD inward remittances to generate e-BRC seamlessly.',
        'Include currency adjustment clauses in long-term procurement supply agreements.',
        'Monitor RBI circulars regarding expanded bilateral currency corridors.'
      ]
    }
  ],

  // Export Journey Step-by-Step Roadmap & Checklist
  exportJourney: [
    {
      step: 1,
      id: 'setup',
      title: 'Foundation & Registrations',
      heading: 'Establish your legal entity and secure essential licenses.',
      description: 'Before shipping a single box, every Indian exporter must complete foundational government compliance steps.',
      tasks: [
        { id: 't1', label: 'Incorporate business entity (Sole Prop, Partnership, LLP or Pvt Ltd)', required: true },
        { id: 't2', label: 'Obtain Business PAN from Income Tax Department', required: true },
        { id: 't3', label: 'Open Current Account with Foreign Exchange Authorised Dealer (AD) Bank', required: true },
        { id: 't4', label: 'Apply for DGFT Importer-Exporter Code (IEC) online at dgft.gov.in', required: true },
        { id: 't5', label: 'Register Bank AD Code at Customs Icegate portal for relevant sea/air ports', required: true }
      ],
      portalLinks: [
        { name: 'DGFT Portal (IEC)', url: 'https://www.dgft.gov.in' },
        { name: 'ICEGATE Customs Portal', url: 'https://www.icegate.gov.in' }
      ]
    },
    {
      step: 2,
      id: 'rcmc',
      title: 'Council Selection & RCMC',
      heading: 'Connect with your sector\'s Export Promotion Council.',
      description: 'Your EPC is your advocate, certification authority, and guide to global exhibitions and export subsidies.',
      tasks: [
        { id: 't6', label: 'Identify primary product HS Codes and matching EPC (e.g. APEDA, EEPC, EPCH)', required: true },
        { id: 't7', label: 'Apply online for Registration-cum-Membership Certificate (RCMC) on DGFT portal', required: true },
        { id: 't8', label: 'Submit council membership fees and verify company profile documentation', required: true },
        { id: 't9', label: 'Receive digital RCMC and link with ICEGATE system for automatic verification', required: true }
      ],
      portalLinks: [
        { name: 'DGFT Common RCMC Portal', url: 'https://www.dgft.gov.in/CP/?opt=rcmc' }
      ]
    },
    {
      step: 3,
      id: 'market-research',
      title: 'Market & HS Code Intelligence',
      heading: 'Pinpoint target destinations and tariff advantages.',
      description: 'Target markets where Indian goods have tariff advantages, high demand, and favorable shipping logistics.',
      tasks: [
        { id: 't10', label: 'Determine exact 8-digit ITC-HS Code for each export SKU', required: true },
        { id: 't11', label: 'Check import duty rates and non-tariff barriers on Indian Trade Portal', required: true },
        { id: 't12', label: 'Investigate if destination country has an active FTA/CEPA with India', required: false },
        { id: 't13', label: 'Examine mandatory SPS / TBT standards, lab testing, and packaging rules in buyer nation', required: true }
      ],
      portalLinks: [
        { name: 'Indian Trade Portal (Trade Map)', url: 'https://www.indiantradeportal.in' }
      ]
    },
    {
      step: 4,
      id: 'buyer-contract',
      title: 'Buyer Acquisition & Contracting',
      heading: 'Negotiate pricing, Incoterms, and secure payment mechanisms.',
      description: 'Structure your commercial terms to prevent disputes, currency loss, and non-payment risks.',
      tasks: [
        { id: 't14', label: 'Issue Proforma Invoice detailing SKU, unit price, quantity, and packaging specs', required: true },
        { id: 't15', label: 'Agree on appropriate Incoterms 2020 (FOB, CIF, CFR) clearly stating port name', required: true },
        { id: 't16', label: 'Secure payment terms: Advance wire transfer (T/T) or Irrevocable Letter of Credit', required: true },
        { id: 't17', label: 'Obtain ECGC (Export Credit Guarantee Corporation) buyer credit risk cover if on credit', required: false }
      ],
      portalLinks: [
        { name: 'ECGC Official Portal', url: 'https://www.ecgc.in' }
      ]
    },
    {
      step: 5,
      id: 'production-packing',
      title: 'Production, Quality & Packaging',
      heading: 'Manufacture to export specs and ensure international packing standards.',
      description: 'Export goods undergo rough sea voyages and strict customs scrutiny. Packaging integrity is paramount.',
      tasks: [
        { id: 't18', label: 'Manufacture goods strictly adhering to buyer technical drawings or sample approval', required: true },
        { id: 't19', label: 'Arrange pre-shipment inspection (SGS, Intertek, or council lab certification)', required: true },
        { id: 't20', label: 'Use seaworthy palletized packaging with ISPM-15 heat-treated wood stamps', required: true },
        { id: 't21', label: 'Affix required export shipping marks, barcodes, and country of origin labels', required: true }
      ],
      portalLinks: [
        { name: 'Export Inspection Council (EIC)', url: 'https://eicindia.gov.in' }
      ]
    },
    {
      step: 6,
      id: 'shipping-realisation',
      title: 'Customs Clearance & BRC Realization',
      heading: 'Dispatch cargo, clear ICEGATE, and realize foreign exchange.',
      description: 'The final leg: filing the Shipping Bill, ocean sailing, and closing bank EDPMS records.',
      tasks: [
        { id: 't22', label: 'Book container slot with Freight Forwarder or shipping line', required: true },
        { id: 't23', label: 'Customs Broker (CHA) files Shipping Bill on ICEGATE with RoDTEP/Drawback claims', required: true },
        { id: 't24', label: 'Customs inspects cargo and grants "Let Export Order" (LEO)', required: true },
        { id: 't25', label: 'Carrier issues Bill of Lading upon vessel departure', required: true },
        { id: 't26', label: 'Negotiate documents with bank under LC or dispatch to foreign buyer', required: true },
        { id: 't27', label: 'Confirm foreign currency inward remittance; bank generates electronic e-BRC', required: true }
      ],
      portalLinks: [
        { name: 'ICEGATE Document Tracking', url: 'https://www.icegate.gov.in' }
      ]
    }
  ],

  // Interactive Quizzes (Basic, Moderate, Advanced) — 15 Core EXIM Questions
  quizzes: [
    // Level 1: Basic Level — EPC Mandates & Trade Fundamentals
    {
      id: 'q-basic-1',
      level: 'Basic',
      topic: 'EPC Mandates & Trade Fundamentals',
      question: 'What is the primary role of an Export Promotion Council (EPC) in India?',
      options: [
        'Collecting customs duties at Indian ports',
        'Promoting and expanding foreign trade of specific product categories',
        'Issuing foreign exchange currency for exporters',
        'Regulating domestic retail market pricing'
      ],
      answer: 1,
      explanation: 'EPCs are autonomous non-profit bodies registered to promote, support, and foster the growth of Indian exports in specific industry sectors.'
    },
    {
      id: 'q-basic-2',
      level: 'Basic',
      topic: 'EPC Mandates & Trade Fundamentals',
      question: 'Which document is mandatory for any individual or business entity to start importing or exporting from India?',
      options: [
        'Letter of Credit (LC)',
        'Import Export Code (IEC)',
        'Certificate of Origin (CoO)',
        'Bill of Lading (B/L)'
      ],
      answer: 1,
      explanation: 'The Import Export Code (IEC) issued by the Directorate General of Foreign Trade (DGFT) is a 10-digit primary registration mandatory for EXIM operations.'
    },
    {
      id: 'q-basic-3',
      level: 'Basic',
      topic: 'EPC Mandates & Trade Fundamentals',
      question: 'What does the core motto of TradeBridge India emphasize?',
      options: [
        'Automating Global Trade Payments',
        'From EPC Discovery to Global Trade Decisions',
        'Fast Customs Clearance for Freight',
        'Zero-Tax Export Operations'
      ],
      answer: 1,
      explanation: 'The PRD defines the platform motto as \'From EPC Discovery to Global Trade Decisions\', highlighting practical student learning.'
    },
    {
      id: 'q-basic-4',
      level: 'Basic',
      topic: 'EPC Mandates & Trade Fundamentals',
      question: 'In international trade, what does the abbreviation \'HS Code\' stand for?',
      options: [
        'Harmonized System Code',
        'High-Speed Clearance Code',
        'Export System Harmonization Code',
        'Heavy Freight Shipment Code'
      ],
      answer: 0,
      explanation: 'The Harmonized System (HS) Code is a standardized numerical nomenclature used globally to classify traded commodities.'
    },
    {
      id: 'q-basic-5',
      level: 'Basic',
      topic: 'EPC Mandates & Trade Fundamentals',
      question: 'Which document acts as a document of title to goods and a contract of carriage between the shipper and carrier?',
      options: [
        'Commercial Invoice',
        'Bill of Lading (B/L)',
        'Shipping Bill',
        'Inspection Certificate'
      ],
      answer: 1,
      explanation: 'A Bill of Lading (B/L) is a vital shipping document issued by a carrier acknowledging receipt of cargo for shipment, acting as a document of title.'
    },

    // Level 2: Moderate Level — Trade Finance & SPS Regulations
    {
      id: 'q-mod-1',
      level: 'Moderate',
      topic: 'Trade Finance & SPS Regulations',
      question: 'What does a Letter of Credit (LC) guarantee in an export transaction?',
      options: [
        'Automatic clearance by customs authorities',
        'Payment by the buyer\'s bank upon presentation of compliant shipping documents',
        'Total immunity from transport damage',
        'Fixed shipping freight rates'
      ],
      answer: 1,
      explanation: 'An LC is a financial commitment issued by an issuing bank ensuring payment to the seller, provided all specified documents are presented strictly as agreed.'
    },
    {
      id: 'q-mod-2',
      level: 'Moderate',
      topic: 'Trade Finance & SPS Regulations',
      question: 'Sanitary and Phytosanitary (SPS) measures primarily regulate which area of international trade?',
      options: [
        'Foreign exchange hedging algorithms',
        'Food safety and plant/animal health standards',
        'Maritime shipping container dimensions',
        'Intellectual property rights for software'
      ],
      answer: 1,
      explanation: 'SPS measures are rules set under WTO guidelines to protect human, animal, or plant health from hazards in imported agricultural and food products.'
    },
    {
      id: 'q-mod-3',
      level: 'Moderate',
      topic: 'Trade Finance & SPS Regulations',
      question: 'Under Incoterms, what does \'FOB\' (Free On Board) signify regarding risk transfer?',
      options: [
        'Risk transfers when goods are delivered to the buyer\'s factory',
        'Risk transfers when goods are loaded on board the vessel at the named port of shipment',
        'Risk remains with the seller until final payment is settled',
        'Risk transfers as soon as the purchase contract is signed'
      ],
      answer: 1,
      explanation: 'Under FOB Incoterms, the seller delivers the goods on board the vessel designated by the buyer; risk of loss or damage passes when goods are on board.'
    },
    {
      id: 'q-mod-4',
      level: 'Moderate',
      topic: 'Trade Finance & SPS Regulations',
      question: 'Which document proves the country in which a traded product was manufactured or produced?',
      options: [
        'Packing List',
        'Commercial Invoice',
        'Certificate of Origin (CoO)',
        'Shipping Bill'
      ],
      answer: 2,
      explanation: 'A Certificate of Origin (CoO) certifies that the exported goods satisfy defined origin criteria to qualify for tariff preferences or compliance.'
    },
    {
      id: 'q-mod-5',
      level: 'Moderate',
      topic: 'Trade Finance & SPS Regulations',
      question: 'In trade finance, pre-shipment credit (packing credit) is primarily used by exporters to:',
      options: [
        'Pay import tariffs in the destination country',
        'Purchase raw materials, process, and package goods prior to shipment',
        'Refinance old corporate debt',
        'Fund foreign office marketing expenses'
      ],
      answer: 1,
      explanation: 'Pre-shipment credit provides essential working capital for procuring raw materials, manufacturing, and packing goods meant for export.'
    },

    // Level 3: Advanced Level — Geopolitics, Tariffs & Foreign Trade Policy
    {
      id: 'q-adv-1',
      level: 'Advanced',
      topic: 'Geopolitics, Tariffs & Foreign Trade Policy',
      question: 'What is the primary objective of the EU\'s Carbon Border Adjustment Mechanism (CBAM)?',
      options: [
        'Eliminating all customs duties between EU member states',
        'Equalizing the price of carbon between domestic production and imports to prevent carbon leakage',
        'Mandating that all export cargo be transported via electric ships',
        'Imposing digital transaction taxes on e-commerce platforms'
      ],
      answer: 1,
      explanation: 'CBAM places a carbon price on imports of targeted carbon-intensive goods to ensure fair competition and prevent carbon leakage to non-EU nations.'
    },
    {
      id: 'q-adv-2',
      level: 'Advanced',
      topic: 'Geopolitics, Tariffs & Foreign Trade Policy',
      question: 'How does a sudden geopolitical disruption in maritime choke points (e.g., Red Sea) impact Indian exporters?',
      options: [
        'Reduces insurance premiums due to rerouting',
        'Increases freight costs, transit times, and working capital lock-in',
        'Automatically waives destination country tariffs',
        'Elimination of Letter of Credit requirements'
      ],
      answer: 1,
      explanation: 'Rerouting around major maritime bottlenecks lengthens shipping routes, drives up ocean freight and insurance surcharges, and delays cash cycles.'
    },
    {
      id: 'q-adv-3',
      level: 'Advanced',
      topic: 'Geopolitics, Tariffs & Foreign Trade Policy',
      question: 'Under India\'s Foreign Trade Policy (FTP), what is the main objective of the RoDTEP scheme?',
      options: [
        'Providing direct cash subsidies for loss-making export firms',
        'Rebating non-refundable central, state, and local taxes embedded in exported products',
        'Imposing import quotas on luxury consumer goods',
        'Offering zero-interest loans for overseas factory acquisitions'
      ],
      answer: 1,
      explanation: 'RoDTEP rebates unrefunded central, state, and local levies on exported goods, ensuring Indian exports remain competitive globally without violating WTO rules.'
    },
    {
      id: 'q-adv-4',
      level: 'Advanced',
      topic: 'Geopolitics, Tariffs & Foreign Trade Policy',
      question: 'Under India\'s CEPAs/FTAs, what do \'Rules of Origin\' mandate to qualify for preferential tariff concessions?',
      options: [
        'Products must be transported exclusively by Indian-flagged vessels',
        'Products must undergo substantial transformation or meet minimum local value-addition thresholds',
        'Products must be sold below domestic market price',
        'Exporters must pay an additional origin tax prior to shipment'
      ],
      answer: 1,
      explanation: 'Rules of Origin mandate that goods undergo sufficient processing or value addition in the partner country to prevent simple transshipment under FTAs.'
    },
    {
      id: 'q-adv-5',
      level: 'Advanced',
      topic: 'Geopolitics, Tariffs & Foreign Trade Policy',
      question: 'In Indian customs export procedures, what is the significance of the \'Let Export Order\' (LEO)?',
      options: [
        'It authorizes the buyer\'s bank to release payment',
        'It permits the cargo to be loaded onto the conveyance for export after customs clearance',
        'It cancels the exporter\'s Import Export Code (IEC)',
        'It certifies that the goods have arrived safely at the foreign port'
      ],
      answer: 1,
      explanation: 'The Let Export Order (LEO) is the final regulatory approval issued by Indian Customs confirming that cargo documentation and physical checks are complete.'
    }
  ],

  // Knowledge base for RAG AI Assistant
  aiKnowledgeBase: [
    {
      keywords: ['apeda', 'agriculture', 'food', 'rice', 'basmati', 'fruits', 'meat', 'organic'],
      answer: 'APEDA (Agricultural and Processed Food Products Export Development Authority) is India’s statutory body overseeing exports of scheduled agricultural items including Basmati rice, fresh fruits, vegetables, processed foods, and meat. To export these goods, you must obtain an RCMC from APEDA, comply with maximum residue limits (MRLs) and phytosanitary rules, and can access financial assistance for packhouses and cold chain infrastructure via apeda.gov.in.',
      sources: [
        { title: 'APEDA Official Portal', url: 'https://apeda.gov.in' },
        { title: 'DGFT Scheduled Agro Products', url: 'https://www.dgft.gov.in' }
      ]
    },
    {
      keywords: ['eepc', 'engineering', 'machinery', 'steel', 'auto', 'parts', 'industrial', 'valves'],
      answer: 'EEPC India is the premier council representing over 13,000 engineering exporters across automobile parts, industrial machinery, castings, electrical gear, and aerospace components. Membership provides access to the INDEE international exhibitions, technology upgradation schemes, RoDTEP optimization, and buyer-seller meets. Learn more at eepcindia.org.',
      sources: [
        { title: 'EEPC India Portal', url: 'https://www.eepcindia.org' }
      ]
    },
    {
      keywords: ['hs code', 'hscode', 'itc-hs', 'classification', 'chapter', 'tariff code'],
      answer: 'An HS Code (Harmonized System) is an internationally standardized numerical code used by customs worldwide to classify products. India uses an 8-digit ITC-HS system: the first 2 digits denote Chapter, next 2 denote Heading, next 2 Subheading, and the last 2 specify the exact Indian tariff line. Choosing the correct HS code is vital for determining export duty, RoDTEP incentives, and RCMC council jurisdiction.',
      sources: [
        { title: 'Indian Trade Portal HS Search', url: 'https://www.indiantradeportal.in' },
        { title: 'WCO HS Nomenclature', url: 'https://www.wcoomd.org' }
      ]
    },
    {
      keywords: ['letter of credit', 'lc', 'payment', 'ucp 600', 'irrevocable', 'trade finance'],
      answer: 'A Letter of Credit (LC) is an irrevocable financial undertaking issued by the foreign buyer\'s bank guaranteeing that payment will be made to the exporter once strictly conforming shipping documents (Bill of Lading, Invoice, Inspection Certificate) are presented before the expiration date. Governed by ICC UCP 600 rules, an Irrevocable Confirmed LC virtually eliminates overseas buyer default risk.',
      sources: [
        { title: 'ICC UCP 600 Guidelines', url: 'https://iccwbo.org' },
        { title: 'Reserve Bank of India Master Directions on Trade Credit', url: 'https://www.rbi.org.in' }
      ]
    },
    {
      keywords: ['fob', 'cif', 'incoterm', 'incoterms', 'exw', 'shipping terms'],
      answer: 'Incoterms (International Commercial Terms, maintained by ICC) define the exact point where costs, freight obligations, and risk of loss transfer from seller to buyer. Under FOB (Free on Board), the seller is responsible until goods are loaded onto the ship at the Indian port. Under CIF (Cost, Insurance & Freight), the seller also pays ocean freight and marine insurance to the destination port, though cargo damage risk still passes at loading.',
      sources: [
        { title: 'ICC Incoterms 2020 Rules', url: 'https://iccwbo.org/resources-for-business/incoterms-rules/' }
      ]
    },
    {
      keywords: ['rcmc', 'registration cum membership', 'how to get rcmc', 'council registration'],
      answer: 'An RCMC (Registration-cum-Membership Certificate) is issued by an Export Promotion Council or Commodity Board certifying that your business is an authorized exporter for that sector. It is mandatory for claiming export incentives under the Foreign Trade Policy (like RoDTEP, RoSCTL, Duty Drawback, and EPCG). You apply online directly through the DGFT Common RCMC Portal (dgft.gov.in) using your IEC and digital signature.',
      sources: [
        { title: 'DGFT Common RCMC Portal', url: 'https://www.dgft.gov.in/CP/?opt=rcmc' }
      ]
    },
    {
      keywords: ['cepa', 'uae', 'dubai', 'free trade agreement', 'fta', 'certificate of origin'],
      answer: 'The India-UAE CEPA (Comprehensive Economic Partnership Agreement) grants zero-duty or concessional tariff entry for over 90% of Indian export products into the UAE, including gems, jewellery, apparel, engineering, and agriculture. To benefit, exporters must satisfy the Rules of Origin (typically 40% local value addition) and obtain a digital Preferential Certificate of Origin (CoO) from the DGFT trade.gov.in portal.',
      sources: [
        { title: 'DGFT CoO Portal', url: 'https://trade.gov.in' },
        { title: 'Ministry of Commerce India-UAE CEPA Details', url: 'https://commerce.gov.in' }
      ]
    },
    {
      keywords: ['red sea', 'suez canal', 'shipping crisis', 'freight rates', 'cape of good hope'],
      answer: 'Due to maritime security threats in the southern Red Sea and Bab el-Mandeb strait, container carriers are diverting ships around the Cape of Good Hope. This detour adds 12 to 18 days to Europe/US East Coast voyages and has increased ocean spot freight rates by 60-100%. Exporters are advised to quote CIF/CFR with floating freight adjustment clauses and request extended validity on Letters of Credit.',
      sources: [
        { title: 'FIEO Maritime Advisory Desk', url: 'https://www.fieo.org' },
        { title: 'Ministry of Ports, Shipping and Waterways', url: 'https://shipmin.gov.in' }
      ]
    },
    {
      keywords: ['cbam', 'carbon tax', 'eu carbon', 'steel', 'aluminium', 'esg'],
      answer: 'The EU Carbon Border Adjustment Mechanism (CBAM) imposes a carbon price on imports of carbon-intensive goods (iron, steel, aluminium, cement, fertilizers) entering the EU. During the current transition phase, exporters must report direct and indirect embedded emissions quarterly. Commercial tariffs kick in fully from 2026. Exporters should audit emissions per ton and adopt renewable energy to protect EU market share.',
      sources: [
        { title: 'European Commission CBAM Guidance', url: 'https://taxation-customs.ec.europa.eu' },
        { title: 'EEPC India Sustainability Helpdesk', url: 'https://www.eepcindia.org' }
      ]
    },
    {
      keywords: ['first export', 'how to start', 'iec', 'documents needed', 'checklist', 'journey'],
      answer: 'To execute your first export from India, follow these 6 essential steps: (1) Register your company, business PAN, and Current Account with an Authorised Dealer bank. (2) Apply for your 10-digit IEC on dgft.gov.in. (3) Register your bank AD Code on ICEGATE. (4) Obtain an RCMC from the relevant EPC (APEDA, EEPC, AEPC, etc.). (5) Agree on an Incoterm and secure payment terms (Advance T/T or LC). (6) Work with a Customs Broker to file your Shipping Bill on ICEGATE and realize foreign exchange via e-BRC.',
      sources: [
        { title: 'DGFT Niryat Bandhu Handbook', url: 'https://www.dgft.gov.in' },
        { title: 'ICEGATE Customs Exporter Guide', url: 'https://www.icegate.gov.in' }
      ]
    }
  ]
,
  geopoliticsNews: [
    {
        "id": "news-01",
        "headline": "US–China agree to cut tariffs on $30 billion of goods",
        "date": "26 Sep 2026",
        "region": "US–China",
        "flag": "🇺🇸🇨🇳",
        "category": "Trade Policy",
        "summary": "Washington and Beijing agreed to reduce tariffs on $30 billion of goods and launch an AI dialogue following high-level bilateral summits in Washington.",
        "whyItMatters": "Lower duties can reduce trade costs and give exporters and importers more short-term certainty in transatlantic and transpacific supply chains.",
        "sourceName": "Reuters",
        "sourceUrl": "https://www.reuters.com/world/china/china-us-agree-30-billion-tariff-cut-ai-dialogue-during-xi-visit-2026-09-26/",
        "isFeatured": true
    },
    {
        "id": "news-02",
        "headline": "US–China trade truce faces a high-stakes test",
        "date": "21 Sep 2026",
        "region": "US–China",
        "flag": "🇺🇸🇨🇳",
        "category": "Geopolitics",
        "summary": "The two powers are trying to keep a fragile trade truce on track while broader disputes span trade, technology, Taiwan and maritime routing.",
        "whyItMatters": "Policy uncertainty between the world’s two largest economies can quickly affect global supply chains and freight insurance rates.",
        "sourceName": "Reuters",
        "sourceUrl": "https://www.reuters.com/business/aerospace-defense/how-trump-xi-went-tariff-war-trade-truce-2026-09-21/",
        "isFeatured": false
    },
    {
        "id": "news-03",
        "headline": "US and China discuss reducing tariffs on American LNG",
        "date": "18 Sep 2026",
        "region": "US–China",
        "flag": "🇺🇸🇨🇳",
        "category": "Energy",
        "summary": "Washington and Beijing discussed reducing or removing Chinese tariffs on US LNG as part of a broader energy and agriculture trade package.",
        "whyItMatters": "LNG trade can become a strategic bargaining tool in the wider economic relationship, easing bilateral trade imbalances.",
        "sourceName": "Reuters",
        "sourceUrl": "https://www.reuters.com/business/energy/us-china-discuss-cutting-tariffs-us-lng-ahead-xi-visit-2026-09-18/",
        "isFeatured": false
    },
    {
        "id": "news-04",
        "headline": "India’s Russian oil imports fall as Middle East supplies rise",
        "date": "22 Sep 2026",
        "region": "India–Russia–Middle East",
        "flag": "🇮🇳🇷🇺",
        "category": "Energy / EXIM",
        "summary": "Russia’s share of India’s crude oil imports fell in August while supplies from the Middle East increased, including cargoes routed through Gulf storage and export terminals.",
        "whyItMatters": "India’s sourcing mix is actively shifting as energy security, freight economics, and geopolitical pressure interact.",
        "sourceName": "Reuters",
        "sourceUrl": "https://www.reuters.com/world/china/indias-russian-oil-imports-fell-august-seen-lower-september-data-shows-2026-09-22/",
        "isFeatured": false
    },
    {
        "id": "news-05",
        "headline": "New US Russia-sanctions bill puts India under pressure",
        "date": "18 Sep 2026",
        "region": "India–US–Russia",
        "flag": "🇮🇳🇺🇸🇷🇺",
        "category": "Sanctions",
        "summary": "Proposed US measures could increase scrutiny on third countries buying Russian energy, creating a complex trade-off for Indian refiners and banks.",
        "whyItMatters": "Secondary sanctions can affect vessel chartering, trade finance, rupee-rouble clearing mechanisms, and India’s import cost parity.",
        "sourceName": "Reuters",
        "sourceUrl": "https://ca.marketscreener.com/news/india-warns-new-us-tariffs-over-russian-oil-could-hit-ties-vows-to-protect-energy-security-ce785bd3d888f52c/",
        "isFeatured": false
    },
    {
        "id": "news-06",
        "headline": "EU–India FTA moves toward signature",
        "date": "11 Sep 2026",
        "region": "EU–India",
        "flag": "🇪🇺🇮🇳",
        "category": "Trade Agreements",
        "summary": "The European Commission submitted proposals for signing and concluding the landmark EU–India trade agreement following consensus on tariff schedules and services.",
        "whyItMatters": "The agreement could lower tariffs on 90%+ lines, eliminate duties on textiles and engineering, and expand market access for Indian exporters across Europe.",
        "sourceName": "European Commission",
        "sourceUrl": "https://commission.europa.eu/topics/trade/eu-india-trade-agreement_en",
        "isFeatured": false
    },
    {
        "id": "news-07",
        "headline": "New Zealand parliament passes India trade deal",
        "date": "16 Sep 2026",
        "region": "India–New Zealand",
        "flag": "🇮🇳🇳🇿",
        "category": "Trade Agreements",
        "summary": "New Zealand passed legislation to implement its trade agreement with India, with tariffs on around 95% of New Zealand exports to India set to be eliminated or reduced.",
        "whyItMatters": "It strengthens India’s network of preferential trade ties in the Indo-Pacific and widens bilateral access for agricultural tech and wool.",
        "sourceName": "Reuters",
        "sourceUrl": "https://economictimes.indiatimes.com/news/economy/foreign-trade/new-zealand-parliament-passes-once-in-a-generation-india-trade-deal-cutting-tariffs-on-most-exports/articleshow/134278891.cms",
        "isFeatured": false
    },
    {
        "id": "news-08",
        "headline": "EU and Philippines reach substantial FTA agreement",
        "date": "22 Sep 2026",
        "region": "EU–Philippines",
        "flag": "🇪🇺🇵🇭",
        "category": "Trade Agreements",
        "summary": "The EU and Philippines reached a substantial agreement on an ambitious FTA, opening the way for duty-free electronics, critical raw materials, and agricultural trade.",
        "whyItMatters": "The EU is diversifying commercial partnerships across ASEAN amid shifting geopolitical balances and supply-chain realignments.",
        "sourceName": "European External Action Service",
        "sourceUrl": "https://www.eeas.europa.eu/delegations/philippines/eu-and-philippines-reach-substantial-agreement-free-trade-agreement_en",
        "isFeatured": false
    },
    {
        "id": "news-09",
        "headline": "Canada accelerates trade talks with India, ASEAN and Philippines",
        "date": "17–22 Sep 2026",
        "region": "Canada–India–ASEAN",
        "flag": "🇨🇦🇮🇳🇵🇭",
        "category": "Trade Agreements",
        "summary": "Canada is advancing negotiations on Early Progress Trade Agreements with India, ASEAN, and the Philippines as it expands links beyond North America.",
        "whyItMatters": "Trade diversification is becoming an essential strategic response to unilateral tariff risks and geopolitical concentration.",
        "sourceName": "Government of Canada",
        "sourceUrl": "https://www.canada.ca/en/global-affairs/news/2026/09/canada-advances-trade-talks-on-agreements-with-india-asean-and-the-philippines.html",
        "isFeatured": false
    },
    {
        "id": "news-10",
        "headline": "Chinese rare-earth magnet shipments to the US decline",
        "date": "Late Aug–Sep 2026",
        "region": "China–US",
        "flag": "🇨🇳🇺🇸",
        "category": "Supply Chains",
        "summary": "Chinese rare-earth magnet shipments to the US fell to 512 tonnes in August, down 13% year on year and 20% from July amid heightened export inspections.",
        "whyItMatters": "Rare earths are critical for EVs, robotics, wind turbines and defence avionics, making them a high-leverage strategic choke point in trade.",
        "sourceName": "Financial Times",
        "sourceUrl": "https://www.ft.com/content/eeef7db4-b26d-426f-896b-f7b95bb84223",
        "isFeatured": false
    },
    {
        "id": "news-11",
        "headline": "Chinese rare-earth suppliers halt some US shipments",
        "date": "04 Sep 2026",
        "region": "China–US",
        "flag": "🇨🇳🇺🇸",
        "category": "Supply Chains",
        "summary": "Several major Chinese mining and processing suppliers paused specific US customer consignments amid geopolitical friction and heightened export licensing reviews.",
        "whyItMatters": "Export controls and dual-use licensing create immediate operational risks for high-tech manufacturing supply chains.",
        "sourceName": "Reuters",
        "sourceUrl": "https://www.miningweekly.com/article/china-rare-earth-firms-halt-some-us-shipments-over-geopolitical-worries-sources-say-2026-09-04",
        "isFeatured": false
    },
    {
        "id": "news-12",
        "headline": "WTO warns the multilateral trading system is at a critical juncture",
        "date": "15 Sep 2026",
        "region": "Global",
        "flag": "🌐",
        "category": "Trade Policy",
        "summary": "The WTO’s 2026 World Trade Report warns that rising geopolitical rivalries, unilateral subsidy races, and supply-chain fragmentation are testing international trade rules.",
        "whyItMatters": "Multilateral fragmentation increases compliance friction, non-tariff hurdles, and policy unpredictability for global traders.",
        "sourceName": "WTO",
        "sourceUrl": "https://www.wto.org/english/res_e/publications_e/world-trade-report-2026_e.htm",
        "isFeatured": false
    },
    {
        "id": "news-13",
        "headline": "Trade reform could add about $3 trillion to global GDP by 2050",
        "date": "15 Sep 2026",
        "region": "Global",
        "flag": "🌐",
        "category": "Trade Policy",
        "summary": "The WTO estimates stronger multilateral cooperation on digital trade and services could raise global GDP by 3%, while fragmentation could reduce output by up to 10%.",
        "whyItMatters": "Modernized trade rules have a direct dollar impact on global FDI, MSME market access, and long-term export growth.",
        "sourceName": "WTO",
        "sourceUrl": "https://www-server1.wto.org/english/news_e/news26_e/wtr_15sep26_483_e.htm",
        "isFeatured": false
    },
    {
        "id": "news-14",
        "headline": "WTO Goods Trade Barometer signals resilient trade growth",
        "date": "09 Sep 2026",
        "region": "Global",
        "flag": "🌐",
        "category": "EXIM",
        "summary": "The WTO’s Goods Trade Barometer rose to 102.0, solidly above the 100 baseline, signaling sustained merchandise trade volume expansion despite maritime disruptions.",
        "whyItMatters": "Global goods demand continues to hold firm even as freight rates fluctuate and regional routing adjustments persist.",
        "sourceName": "WTO",
        "sourceUrl": "https://www.wto.org/english/news_e/news26_e/wtoi_09sep26_481_e.htm",
        "isFeatured": false
    },
    {
        "id": "news-15",
        "headline": "Maersk and Hapag-Lloyd resume more Suez Canal services",
        "date": "14 Sep 2026",
        "region": "Suez Canal / Red Sea",
        "flag": "🚢",
        "category": "Shipping",
        "summary": "Four additional joint container services are returning through the Suez Canal with naval escorts, shortening Asia–Europe transit by 12–14 days versus Africa.",
        "whyItMatters": "A sustained return through Suez lowers bunker fuel consumption, shortens turnaround times, and exerts downward pressure on ocean spot rates.",
        "sourceName": "Reuters / Maersk",
        "sourceUrl": "https://www.maersk.com.cn/news/articles/2026/09/14/structural-changes-ae5-ae11-ae12-me2-gemini-services",
        "isFeatured": false
    },
    {
        "id": "news-16",
        "headline": "Saudi Arabia shifts oil exports toward Gulf terminals",
        "date": "21 Sep 2026",
        "region": "Saudi Arabia / Gulf",
        "flag": "🛢️🇸🇦",
        "category": "Energy",
        "summary": "After infrastructure disruptions affected Red Sea pipeline terminals, Saudi Aramco boosted crude loadings from eastern Arabian Gulf ports and expanded ship-to-ship transfers.",
        "whyItMatters": "Energy infrastructure security incidents rapidly reshape maritime tanker lanes and product arbitrage across Asia and Europe.",
        "sourceName": "Reuters",
        "sourceUrl": "https://www.investing.com/news/commodities-news/saudis-shut-down-oil-pipeline-as-houthis-tighten-grip-on-red-sea-shipping-4898593",
        "isFeatured": false
    },
    {
        "id": "news-17",
        "headline": "Hormuz vessel traffic falls sharply",
        "date": "10 Sep 2026",
        "region": "Strait of Hormuz",
        "flag": "🚢",
        "category": "Shipping",
        "summary": "Vessel tracking data recorded a temporary sharp drop in daily commercial transits through the Strait of Hormuz amid military drills and heightened regional security alerts.",
        "whyItMatters": "Handling over 20% of global petroleum consumption, any disruption in Hormuz immediately inflates war-risk insurance premiums and bunker surcharges.",
        "sourceName": "Reuters",
        "sourceUrl": "https://currently.att.yahoo.com/att/hormuz-shipping-traffic-single-digits-035651804.html",
        "isFeatured": false
    },
    {
        "id": "news-18",
        "headline": "EU weighs tougher response to low-priced Chinese cars",
        "date": "22 Sep 2026",
        "region": "EU–China",
        "flag": "🇪🇺🇨🇳",
        "category": "Tariffs",
        "summary": "European policymakers and automotive leaders face pressure over low-priced Chinese electric vehicles, debating definitive countervailing duties versus minimum price undertakings.",
        "whyItMatters": "Anti-subsidy disputes illustrate the delicate balance between domestic manufacturing protection and broader bilateral commercial stability.",
        "sourceName": "Reuters",
        "sourceUrl": "https://www.investing.com/news/economic-indicators/bmw-ceo-sees-risk-of-cheap-chinese-cars-in-europe-but-opposes-tariffs-4910834",
        "isFeatured": false
    },
    {
        "id": "news-19",
        "headline": "EU’s proposed ‘Made in EU’ rules target strategic supply chains",
        "date": "22 Sep 2026",
        "region": "European Union",
        "flag": "🇪🇺",
        "category": "Trade Policy",
        "summary": "The proposed Industrial Accelerator Act would favor European-made content in public procurement and state-subsidized sectors including EVs, wind energy and green hydrogen.",
        "whyItMatters": "Domestic local-content mandates create new market-access hurdles and supply-chain re-engineering requirements for third-country exporters.",
        "sourceName": "Reuters / European Commission",
        "sourceUrl": "https://commission.europa.eu/news-and-media/news/commission-proposes-new-measures-boost-eu-industry-and-jobs-2026-03-04_en",
        "isFeatured": false
    },
    {
        "id": "news-20",
        "headline": "Global trade is shifting toward regional and diversified supply chains",
        "date": "08 Sep 2026",
        "region": "Global / ASEAN",
        "flag": "🌏",
        "category": "Supply Chains",
        "summary": "McKinsey’s trade research shows global procurement continuing to diversify toward the 'China+1' model, with ASEAN and India expanding market share in electronics and textiles.",
        "whyItMatters": "Supply-chain diversification has become a permanent structural feature of global commerce rather than a temporary cyclical reaction.",
        "sourceName": "McKinsey Global Institute",
        "sourceUrl": "https://www.mckinsey.com/mgi/our-research/global-trade-regional-updates",
        "isFeatured": false
    }
],
  tradeIndicators: [
    {
        "label": "WTO Goods Trade Barometer",
        "value": "102.0",
        "change": "+2.0 pts above baseline",
        "trend": "up"
    },
    {
        "label": "US-China Bilateral Tariff Cut",
        "value": "$30 Billion",
        "change": "Immediate relief",
        "trend": "positive"
    },
    {
        "label": "Global GDP Reform Dividend",
        "value": "$3.0 Trillion",
        "change": "+3.0% by 2050",
        "trend": "up"
    },
    {
        "label": "NZ-India Preferential Lines",
        "value": "95%",
        "change": "Tariff elimination/cut",
        "trend": "up"
    },
    {
        "label": "Suez Canal Routing Savings",
        "value": "10-14 Days",
        "change": "Transit reduction",
        "trend": "positive"
    },
    {
        "label": "Rare-Earth Magnet US Imports",
        "value": "512 Tonnes",
        "change": "-13% YoY",
        "trend": "down"
    }
]
};

// Export for browser script usage
if (typeof window !== 'undefined') {
  window.TRADE_DATA = TRADE_DATA;
}
if (typeof module !== 'undefined') {
  module.exports = TRADE_DATA;
}
