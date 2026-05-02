// ═══════════════════════════════════════════════════════════════
//  CarScout AI Chat Controller — Comprehensive Car Knowledge Base
// ═══════════════════════════════════════════════════════════════

// ─── COMPLETE CAR DATABASE ───────────────────────────────────
const carDatabase = {
  // ══════════════ HYUNDAI ══════════════
  creta: {
    brand: "Hyundai", model: "Creta", type: "Compact SUV", segment: "Mid-Size SUV",
    price: "₹11.0 – ₹20.3 Lakh", mileage: "16 – 21 km/l",
    engine: "1.5L Petrol (115 HP) / 1.5L Diesel (116 HP) / 1.5L Turbo Petrol (160 HP)",
    transmission: "6-speed MT / IVT / 7-speed DCT", fuel: "Petrol / Diesel",
    seating: 5, safety: "6 Airbags, ESC, Hill Assist, TPMS, ISOFIX",
    ncap: "5 Stars (Global NCAP)", boot: "433L",
    pros: ["Premium cabin quality", "Feature-loaded", "Strong brand value", "Excellent resale", "Smooth ride quality"],
    cons: ["Base variant is bare-bones", "Turbo petrol only with DCT", "Rear seat could be roomier"],
    best_for: "Families wanting a premium, feature-rich compact SUV with strong resale value.",
    rivals: ["Kia Seltos", "Maruti Grand Vitara", "Toyota Hyryder", "VW Taigun", "Skoda Kushaq"],
    verdict: "The Creta is India's best-selling SUV for good reason — it offers a premium experience, loaded features, and excellent after-sales. The 2024 facelift brought even more tech including ADAS."
  },
  venue: {
    brand: "Hyundai", model: "Venue", type: "Sub-Compact SUV", segment: "Sub-4m SUV",
    price: "₹7.9 – ₹13.5 Lakh", mileage: "17 – 23 km/l",
    engine: "1.2L Petrol (83 HP) / 1.0L Turbo Petrol (120 HP) / 1.5L Diesel (116 HP)",
    transmission: "5-speed MT / 7-speed DCT / 6-speed MT", fuel: "Petrol / Diesel",
    seating: 5, safety: "6 Airbags, ESC, Hill Assist, TPMS",
    ncap: "Not yet rated", boot: "350L",
    pros: ["Compact city-friendly size", "Turbo petrol is fun to drive", "Connected car tech", "Good feature list"],
    cons: ["Rear seat space is tight", "No sunroof in lower trims", "Turbo only with DCT"],
    best_for: "Urban commuters who want a stylish, compact SUV for city driving.",
    rivals: ["Tata Nexon", "Kia Sonet", "Maruti Brezza", "Mahindra XUV300"],
    verdict: "The Venue is a solid urban SUV that combines Hyundai's quality with a compact footprint perfect for city driving."
  },
  i20: {
    brand: "Hyundai", model: "i20", type: "Premium Hatchback", segment: "Premium Hatchback",
    price: "₹7.0 – ₹11.5 Lakh", mileage: "17 – 25 km/l",
    engine: "1.2L Petrol (83 HP) / 1.0L Turbo Petrol (120 HP) / 1.5L Diesel (100 HP)",
    transmission: "5-speed MT / IVT / 7-speed DCT / 6-speed MT", fuel: "Petrol / Diesel",
    seating: 5, safety: "6 Airbags, ESC, VSM, Hill Assist",
    ncap: "Not yet rated", boot: "311L",
    pros: ["Premium interior quality", "Feature-rich top variants", "Sporty N Line variant", "Good ride quality"],
    cons: ["Expensive top variants", "Base variants feel basic", "Boot space could be better"],
    best_for: "Young professionals wanting a premium, feature-loaded hatchback with sporty character.",
    rivals: ["Maruti Baleno", "Tata Altroz", "Toyota Glanza", "VW Polo"],
    verdict: "The i20 sets the benchmark for premium hatchbacks in India with segment-leading features and build quality."
  },
  verna: {
    brand: "Hyundai", model: "Verna", type: "Sedan", segment: "Mid-Size Sedan",
    price: "₹11.0 – ₹17.5 Lakh", mileage: "17 – 24 km/l",
    engine: "1.5L Petrol (115 HP) / 1.5L Turbo Petrol (160 HP) / 1.5L Diesel (116 HP)",
    transmission: "6-speed MT / IVT / 7-speed DCT", fuel: "Petrol / Diesel",
    seating: 5, safety: "6 Airbags, ESC, ADAS Level 2, TPMS, Hill Assist",
    ncap: "Not yet rated", boot: "480L",
    pros: ["ADAS Level 2 features", "Premium cabin", "Strong powertrain options", "Ventilated seats"],
    cons: ["Pricey top variants", "Turbo only with DCT", "Sedan market declining"],
    best_for: "Buyers seeking a tech-loaded, premium sedan with advanced safety features.",
    rivals: ["Honda City", "Maruti Ciaz", "Skoda Slavia", "VW Virtus"],
    verdict: "The 2024 Verna is a game-changer with ADAS, premium interiors, and strong powertrains making it the most advanced sedan in its segment."
  },
  exter: {
    brand: "Hyundai", model: "Exter", type: "Micro SUV", segment: "Entry SUV",
    price: "₹6.0 – ₹10.2 Lakh", mileage: "19 – 20 km/l",
    engine: "1.2L Petrol (83 HP)", transmission: "5-speed MT / AMT", fuel: "Petrol / CNG",
    seating: 5, safety: "6 Airbags, ESC, Hill Assist, TPMS",
    ncap: "3 Stars (Global NCAP)", boot: "391L",
    pros: ["Affordable SUV styling", "Good ground clearance", "Dashcam integrated", "Spacious for segment"],
    cons: ["Only petrol engine", "AMT can be jerky", "Basic interior quality"],
    best_for: "First-time buyers wanting SUV looks and features at a hatchback price.",
    rivals: ["Tata Punch", "Maruti Fronx", "Nissan Magnite", "Renault Kiger"],
    verdict: "The Exter brings Hyundai's quality and features to the micro-SUV segment at an accessible price point."
  },
  aura: {
    brand: "Hyundai", model: "Aura", type: "Sedan", segment: "Sub-Compact Sedan",
    price: "₹6.5 – ₹9.0 Lakh", mileage: "20 – 25 km/l",
    engine: "1.2L Petrol (83 HP) / 1.2L CNG (69 HP)", transmission: "5-speed MT / AMT", fuel: "Petrol / CNG",
    seating: 5, safety: "Dual Airbags, ABS, Rear Sensors",
    ncap: "Not rated", boot: "402L",
    pros: ["Good fuel efficiency", "CNG option available", "Spacious boot", "Hyundai reliability"],
    cons: ["Dated design", "Basic features", "Weak engine for highway"],
    best_for: "Budget-conscious buyers who want a reliable, fuel-efficient sub-compact sedan.",
    rivals: ["Maruti Dzire", "Tata Tigor", "Honda Amaze"],
    verdict: "The Aura is a practical, no-nonsense sedan with good efficiency and Hyundai's trusted after-sales."
  },
  alcazar: {
    brand: "Hyundai", model: "Alcazar", type: "3-Row SUV", segment: "Mid-Size SUV (7-Seater)",
    price: "₹14.9 – ₹21.5 Lakh", mileage: "14 – 18 km/l",
    engine: "1.5L Turbo Petrol (160 HP) / 1.5L Diesel (116 HP)",
    transmission: "6-speed MT / 6-speed AT / 7-speed DCT", fuel: "Petrol / Diesel",
    seating: 7, safety: "6 Airbags, ESC, Hill Assist, ADAS, TPMS",
    ncap: "Not yet rated", boot: "180L (all rows up)",
    pros: ["Genuine 3rd row space", "ADAS features", "Premium cabin", "Captain seats option"],
    cons: ["3rd row tight for adults", "Boot space limited with 3rd row", "Heavy price tag"],
    best_for: "Large families needing a 7-seater with premium features and ADAS safety.",
    rivals: ["Tata Safari", "MG Hector Plus", "Mahindra XUV700"],
    verdict: "The Alcazar is a premium 7-seater that extends the Creta formula with an extra row and loaded features."
  },

  // ══════════════ TATA ══════════════
  nexon: {
    brand: "Tata", model: "Nexon", type: "Sub-Compact SUV", segment: "Sub-4m SUV",
    price: "₹8.0 – ₹14.8 Lakh", mileage: "17 – 24 km/l",
    engine: "1.2L Turbo Petrol (120 HP) / 1.5L Diesel (116 HP)",
    transmission: "6-speed MT / 6-speed AMT / 7-speed DCT", fuel: "Petrol / Diesel",
    seating: 5, safety: "6 Airbags, ESC, ISOFIX, Hill Assist, EPB",
    ncap: "5 Stars (Global NCAP)", boot: "382L",
    pros: ["5-star safety rating", "Punchy turbo petrol", "Solid build quality", "Good ground clearance", "Feature loaded"],
    cons: ["AMT can be jerky", "Boot space average", "Diesel NVH could be better"],
    best_for: "Safety-conscious families wanting a reliable, well-built sub-4m SUV.",
    rivals: ["Hyundai Venue", "Kia Sonet", "Maruti Brezza", "Mahindra XUV300"],
    verdict: "Tata Nexon is the safest car in its segment with 5-star NCAP rating, making it the top pick for safety-first buyers."
  },
  punch: {
    brand: "Tata", model: "Punch", type: "Micro SUV", segment: "Entry SUV",
    price: "₹6.0 – ₹10.0 Lakh", mileage: "18 – 20 km/l",
    engine: "1.2L Petrol (86 HP)", transmission: "5-speed MT / AMT", fuel: "Petrol / CNG",
    seating: 5, safety: "6 Airbags, ESC, ISOFIX, Corner Stability Control",
    ncap: "5 Stars (Global NCAP)", boot: "366L",
    pros: ["5-star safety at this price", "190mm ground clearance", "Fun to drive", "Rugged SUV looks"],
    cons: ["Only naturally aspirated petrol", "AMT only auto option", "Highway performance modest"],
    best_for: "Budget buyers who refuse to compromise on safety and want SUV-like styling.",
    rivals: ["Hyundai Exter", "Maruti Fronx", "Nissan Magnite", "Renault Kiger"],
    verdict: "The Punch is possibly the safest car you can buy under ₹10 lakh, with genuine SUV capability and rugged build."
  },
  altroz: {
    brand: "Tata", model: "Altroz", type: "Premium Hatchback", segment: "Premium Hatchback",
    price: "₹6.6 – ₹10.5 Lakh", mileage: "18 – 25 km/l",
    engine: "1.2L Petrol (86 HP) / 1.2L Turbo Petrol (120 HP) / 1.5L Diesel (90 HP)",
    transmission: "5-speed MT / 6-speed MT / 7-speed DCT", fuel: "Petrol / Diesel",
    seating: 5, safety: "Dual Airbags, ABS, EBD, Corner Stability Control",
    ncap: "5 Stars (Global NCAP)", boot: "345L",
    pros: ["5-star safety", "Solid build", "Turbo variant is powerful", "Refined diesel engine"],
    cons: ["Rear seat headroom for tall passengers", "Infotainment could be better", "No auto in NA petrol"],
    best_for: "Buyers wanting the safest premium hatchback with solid build quality.",
    rivals: ["Hyundai i20", "Maruti Baleno", "Toyota Glanza", "Honda Jazz"],
    verdict: "The Altroz combines 5-star safety with premium hatchback appeal, especially strong in the turbo and diesel variants."
  },
  tiago: {
    brand: "Tata", model: "Tiago", type: "Hatchback", segment: "Entry Hatchback",
    price: "₹5.0 – ₹7.5 Lakh", mileage: "20 – 23 km/l",
    engine: "1.2L Petrol (86 HP)", transmission: "5-speed MT / AMT", fuel: "Petrol / CNG",
    seating: 5, safety: "Dual Airbags, ABS, EBD, Rear Sensors",
    ncap: "4 Stars (Global NCAP)", boot: "242L",
    pros: ["Affordable price", "4-star safety", "CNG option", "Connected car tech", "Good city car"],
    cons: ["Boot space is small", "Basic interiors", "Lacks power on highways"],
    best_for: "First-time car buyers on a tight budget who still want safety and features.",
    rivals: ["Maruti WagonR", "Maruti Swift", "Hyundai Santro"],
    verdict: "The Tiago punches above its weight with safety features and build quality rarely seen at this price point."
  },
  tigor: {
    brand: "Tata", model: "Tigor", type: "Sub-Compact Sedan", segment: "Sub-4m Sedan",
    price: "₹5.8 – ₹8.5 Lakh", mileage: "19 – 20 km/l",
    engine: "1.2L Petrol (86 HP)", transmission: "5-speed MT / AMT", fuel: "Petrol / CNG",
    seating: 5, safety: "Dual Airbags, ABS, EBD, Corner Stability Control",
    ncap: "4 Stars (Global NCAP)", boot: "419L",
    pros: ["Generous boot space", "4-star safety", "CNG option", "Good ride quality"],
    cons: ["Underpowered for highways", "Interior quality average", "Limited features in base"],
    best_for: "Budget sedan buyers who want good boot space and decent safety.",
    rivals: ["Maruti Dzire", "Hyundai Aura", "Honda Amaze"],
    verdict: "The Tigor offers a sedan body with a spacious boot at an affordable price with Tata's safety-first approach."
  },
  harrier: {
    brand: "Tata", model: "Harrier", type: "Mid-Size SUV", segment: "Mid-Size SUV",
    price: "₹14.9 – ₹26.4 Lakh", mileage: "14 – 17 km/l",
    engine: "2.0L Diesel (170 HP) / 1.5L Turbo Petrol (170 HP)",
    transmission: "6-speed MT / 6-speed AT", fuel: "Diesel / Petrol",
    seating: 5, safety: "6 Airbags, ESC, ADAS Level 2, 360° Camera, EPB",
    ncap: "5 Stars (Global NCAP)", boot: "425L",
    pros: ["Stunning looks", "5-star safety with ADAS", "Powerful diesel", "Road presence", "Panoramic sunroof"],
    cons: ["Petrol only in AT", "Diesel NVH at idle", "Heavy steering at low speeds"],
    best_for: "Buyers wanting a head-turning, safe, and feature-loaded SUV with commanding road presence.",
    rivals: ["Hyundai Creta", "Kia Seltos", "MG Hector", "Jeep Compass"],
    verdict: "The Harrier is a showstopper with jaw-dropping looks combined with 5-star safety and ADAS — a compelling package."
  },
  safari: {
    brand: "Tata", model: "Safari", type: "3-Row SUV", segment: "Full-Size SUV (7-Seater)",
    price: "₹15.5 – ₹27.3 Lakh", mileage: "14 – 16 km/l",
    engine: "2.0L Diesel (170 HP) / 1.5L Turbo Petrol (170 HP)",
    transmission: "6-speed MT / 6-speed AT", fuel: "Diesel / Petrol",
    seating: 7, safety: "6 Airbags, ESC, ADAS Level 2, 360° Camera, EPB",
    ncap: "5 Stars (Global NCAP)", boot: "382L (3rd row folded)",
    pros: ["Iconic nameplate", "5-star safety", "ADAS Level 2", "7-seater versatility", "Premium feel"],
    cons: ["3rd row tight for adults", "Diesel-heavy lineup", "Heavy to maneuver in city"],
    best_for: "Large families wanting a safe, premium 7-seater SUV with the iconic Safari badge.",
    rivals: ["Hyundai Alcazar", "MG Hector Plus", "Mahindra XUV700"],
    verdict: "The Safari is the Harrier's bigger sibling with 7 seats, ADAS, and the legendary Safari nameplate — great for families."
  },

  // ══════════════ MARUTI SUZUKI ══════════════
  swift: {
    brand: "Maruti", model: "Swift", type: "Hatchback", segment: "Premium Hatchback",
    price: "₹6.5 – ₹9.3 Lakh", mileage: "22 – 25 km/l",
    engine: "1.2L DualJet Petrol (82 HP)", transmission: "5-speed MT / AMT", fuel: "Petrol / CNG",
    seating: 5, safety: "6 Airbags, ESC, Hill Hold, TPMS",
    ncap: "Not yet rated (2024)", boot: "265L",
    pros: ["Excellent fuel efficiency", "Fun to drive", "Strong resale value", "Largest service network", "Peppy engine"],
    cons: ["Boot space below rivals", "No diesel option", "Rear seat average for adults"],
    best_for: "Young, enthusiastic drivers who want a fun, efficient, and easy-to-maintain hatchback.",
    rivals: ["Hyundai i20", "Tata Altroz", "Toyota Glanza", "Hyundai Grand i10"],
    verdict: "The Swift is India's favourite hatchback — fun to drive, incredibly fuel-efficient, and backed by Maruti's unbeatable service network."
  },
  baleno: {
    brand: "Maruti", model: "Baleno", type: "Premium Hatchback", segment: "Premium Hatchback",
    price: "₹6.6 – ₹9.8 Lakh", mileage: "22 – 23 km/l",
    engine: "1.2L DualJet Petrol (90 HP)", transmission: "5-speed MT / AMT", fuel: "Petrol / CNG",
    seating: 5, safety: "6 Airbags, ESC, Hill Hold",
    ncap: "Not yet rated", boot: "318L",
    pros: ["Spacious cabin", "360° camera in top variant", "Heads-up display", "Good boot space", "SmartPlay Pro+ infotainment"],
    cons: ["No diesel option", "Design polarizing", "AMT instead of CVT/AT"],
    best_for: "Families wanting a spacious, feature-rich premium hatchback with Maruti's reliability.",
    rivals: ["Hyundai i20", "Tata Altroz", "Toyota Glanza", "Honda Jazz"],
    verdict: "The Baleno offers the best space and features in the Maruti hatchback lineup — a mature, comfortable daily driver."
  },
  dzire: {
    brand: "Maruti", model: "Dzire", type: "Sub-Compact Sedan", segment: "Sub-4m Sedan",
    price: "₹6.8 – ₹10.0 Lakh", mileage: "22 – 25 km/l",
    engine: "1.2L Z-Series Petrol (82 HP)", transmission: "5-speed MT / AMT", fuel: "Petrol / CNG",
    seating: 5, safety: "6 Airbags, ESC, Hill Hold, TPMS",
    ncap: "Not yet rated (2024)", boot: "382L",
    pros: ["Best-in-class fuel efficiency", "Spacious rear seat", "Strong resale", "Refined new design", "Comfy ride"],
    cons: ["Modest engine power", "No diesel", "No sunroof even in top variant"],
    best_for: "Sedan buyers wanting the best fuel efficiency and lowest ownership costs.",
    rivals: ["Hyundai Aura", "Tata Tigor", "Honda Amaze"],
    verdict: "The 2024 Dzire is a complete transformation — premium looks, brilliant efficiency, and Maruti's trusted reliability."
  },
  brezza: {
    brand: "Maruti", model: "Brezza", type: "Sub-Compact SUV", segment: "Sub-4m SUV",
    price: "₹8.3 – ₹14.2 Lakh", mileage: "17 – 25 km/l",
    engine: "1.5L Petrol (103 HP) / 1.5L Mild Hybrid (103 HP)",
    transmission: "5-speed MT / 6-speed AT", fuel: "Petrol / CNG",
    seating: 5, safety: "6 Airbags, ESC, Hill Hold, 360° Camera",
    ncap: "Not yet rated", boot: "328L",
    pros: ["Excellent AT variant", "Mild hybrid efficiency", "Strong resale value", "Reliable and low maintenance"],
    cons: ["Interiors feel a step behind", "No diesel", "Design is conservative"],
    best_for: "Practical buyers wanting a reliable, efficient compact SUV with strong resale.",
    rivals: ["Tata Nexon", "Hyundai Venue", "Kia Sonet", "Mahindra XUV300"],
    verdict: "The Brezza is the sensible choice — not the flashiest, but incredibly reliable with the lowest ownership costs in its segment."
  },
  ertiga: {
    brand: "Maruti", model: "Ertiga", type: "MPV", segment: "7-Seater MPV",
    price: "₹8.6 – ₹13.1 Lakh", mileage: "19 – 20 km/l",
    engine: "1.5L Petrol (103 HP)", transmission: "5-speed MT / 6-speed AT", fuel: "Petrol / CNG",
    seating: 7, safety: "6 Airbags, ESC, Hill Hold, ISOFIX",
    ncap: "3 Stars (Global NCAP)", boot: "209L (all rows up)",
    pros: ["Best 7-seater value", "CNG option", "Legendary fuel efficiency", "Low maintenance", "Comfortable ride"],
    cons: ["3rd row for kids only", "Basic interiors", "Lacks premium feel"],
    best_for: "Large families on a budget who need 7-seater practicality with the lowest running costs.",
    rivals: ["Kia Carens", "Toyota Innova", "Maruti XL6"],
    verdict: "The Ertiga is India's most affordable and practical 7-seater — the people's MPV with unmatched running costs."
  },
  wagonr: {
    brand: "Maruti", model: "WagonR", type: "Tall-Boy Hatchback", segment: "Entry Hatchback",
    price: "₹5.5 – ₹7.4 Lakh", mileage: "21 – 25 km/l",
    engine: "1.0L Petrol (67 HP) / 1.2L Petrol (90 HP)",
    transmission: "5-speed MT / AMT", fuel: "Petrol / CNG",
    seating: 5, safety: "Dual Airbags, ABS, Rear Sensors",
    ncap: "Not rated", boot: "341L",
    pros: ["Incredible fuel efficiency", "Tall-boy spaciousness", "Best CNG car", "Very low maintenance", "Easy to drive"],
    cons: ["Basic safety features", "Plain interiors", "Not for enthusiasts"],
    best_for: "Budget-conscious families and fleet operators wanting the lowest running costs possible.",
    rivals: ["Tata Tiago", "Hyundai Santro", "Maruti Celerio"],
    verdict: "The WagonR is India's no.1 selling car — an incredibly practical, efficient, and affordable mobility solution."
  },
  fronx: {
    brand: "Maruti", model: "Fronx", type: "Crossover SUV", segment: "Sub-4m Crossover",
    price: "₹7.5 – ₹13.0 Lakh", mileage: "20 – 22 km/l",
    engine: "1.0L Turbo Petrol (100 HP) / 1.2L Petrol (90 HP)",
    transmission: "5-speed MT / 6-speed AT / 6-speed TC AT", fuel: "Petrol / CNG",
    seating: 5, safety: "6 Airbags, ESC, Hill Hold",
    ncap: "Not yet rated", boot: "308L",
    pros: ["Sporty coupe-SUV looks", "Turbo petrol is punchy", "Good ground clearance", "Maruti's reliability"],
    cons: ["Not a proper SUV", "Turbo only with AT", "Rear seat is average"],
    best_for: "Style-conscious buyers who want sporty crossover looks with Maruti's trusted reliability.",
    rivals: ["Tata Punch", "Hyundai Exter", "Nissan Magnite", "Renault Kiger"],
    verdict: "The Fronx brings coupe-SUV styling to the masses with Maruti's reliability and Suzuki's turbo petrol performance."
  },

  // ══════════════ MAHINDRA ══════════════
  thar: {
    brand: "Mahindra", model: "Thar", type: "Off-Road SUV", segment: "Lifestyle Off-Roader",
    price: "₹11.0 – ₹17.5 Lakh", mileage: "12 – 15 km/l",
    engine: "2.0L Turbo Petrol (152 HP) / 2.2L Diesel (132 HP)",
    transmission: "6-speed MT / 6-speed AT", fuel: "Petrol / Diesel",
    seating: 4, safety: "Dual Airbags, ABS, EBD, ESP, Hill Descent Control",
    ncap: "Not rated", boot: "Varies (soft/hard top)",
    pros: ["Real off-road capability", "Iconic design", "Open-top fun", "Strong diesel engine", "4x4 as standard"],
    cons: ["Only 4 seats in Convertible", "Ride quality on highways", "Not practical as daily driver"],
    best_for: "Adventure enthusiasts and off-road lovers who want an iconic, go-anywhere lifestyle vehicle.",
    rivals: ["Maruti Jimny", "Force Gurkha"],
    verdict: "The Thar is not just a car — it's a lifestyle statement. Unbeatable for off-road adventures and open-air driving."
  },
  scorpio: {
    brand: "Mahindra", model: "Scorpio Classic", type: "Body-on-Frame SUV", segment: "Full-Size SUV",
    price: "₹13.5 – ₹17.5 Lakh", mileage: "12 – 15 km/l",
    engine: "2.2L Diesel (132 HP)", transmission: "6-speed MT", fuel: "Diesel",
    seating: 7, safety: "Dual Airbags, ABS, EBD",
    ncap: "Not rated", boot: "Varies",
    pros: ["Commanding road presence", "Rugged and durable", "7-seater", "Strong diesel engine"],
    cons: ["Basic interiors", "Limited safety features", "Old-school ride quality"],
    best_for: "Buyers wanting a rugged, no-nonsense 7-seater SUV with road presence.",
    rivals: ["Tata Safari", "Hyundai Alcazar"],
    verdict: "The Scorpio Classic continues the legacy of India's most iconic SUV — tough, reliable, and rugged."
  },
  "scorpio n": {
    brand: "Mahindra", model: "Scorpio N", type: "Full-Size SUV", segment: "Full-Size SUV",
    price: "₹13.9 – ₹24.5 Lakh", mileage: "12 – 16 km/l",
    engine: "2.0L Turbo Petrol (200 HP) / 2.2L Diesel (175 HP)",
    transmission: "6-speed MT / 6-speed AT", fuel: "Petrol / Diesel",
    seating: 7, safety: "6 Airbags, ESC, ADAS, Hill Descent, 360° Camera",
    ncap: "5 Stars (GNCAP)", boot: "460L",
    pros: ["Most powerful in segment", "5-star safety", "ADAS features", "4x4 option", "Spacious cabin"],
    cons: ["Heavy and large", "3rd row cramped", "Fuel efficiency mediocre"],
    best_for: "Those wanting raw power, 4x4 capability, and modern safety in a muscular SUV.",
    rivals: ["Tata Safari", "Hyundai Alcazar", "MG Hector Plus"],
    verdict: "The Scorpio N combines old-school muscle with modern tech — the most powerful and safest Scorpio ever built."
  },
  xuv300: {
    brand: "Mahindra", model: "XUV300", type: "Sub-Compact SUV", segment: "Sub-4m SUV",
    price: "₹8.7 – ₹14.6 Lakh", mileage: "15 – 20 km/l",
    engine: "1.2L Turbo Petrol (131 HP) / 1.5L Diesel (117 HP)",
    transmission: "6-speed MT / 6-speed AMT", fuel: "Petrol / Diesel",
    seating: 5, safety: "7 Airbags, ESC, Disc Brakes all 4 wheels, ISOFIX",
    ncap: "5 Stars (Global NCAP)", boot: "257L",
    pros: ["Best-in-class safety (7 airbags)", "Fun to drive", "Best brakes in segment", "5-star safety"],
    cons: ["Small boot space", "Width can be tricky", "Outdated infotainment"],
    best_for: "Safety-first buyers who enjoy spirited driving with the best braking system in its class.",
    rivals: ["Tata Nexon", "Hyundai Venue", "Kia Sonet", "Maruti Brezza"],
    verdict: "XUV300 is arguably the safest sub-4m SUV with 7 airbags and disc brakes all around — a driver's delight."
  },
  xuv700: {
    brand: "Mahindra", model: "XUV700", type: "Full-Size SUV", segment: "Premium SUV",
    price: "₹13.9 – ₹26.5 Lakh", mileage: "12 – 16 km/l",
    engine: "2.0L Turbo Petrol (200 HP) / 2.2L Diesel (185 HP)",
    transmission: "6-speed MT / 6-speed AT", fuel: "Petrol / Diesel",
    seating: 7, safety: "7 Airbags, ADAS Level 2, ESC, 360° Camera, EPB",
    ncap: "5 Stars (Global NCAP)", boot: "451L",
    pros: ["Most features per rupee", "ADAS Level 2", "Massive sunroof", "Powerful engines", "5-star safety"],
    cons: ["Long waiting periods", "Quality inconsistencies reported", "Heavy and large for city"],
    best_for: "Feature-hungry buyers wanting ADAS, 7 seats, and premium SUV experience at unbeatable value.",
    rivals: ["Tata Safari", "Hyundai Alcazar", "Toyota Fortuner", "Jeep Compass"],
    verdict: "The XUV700 is a genuine game-changer — the amount of features, safety, and performance you get for the price is simply unmatched."
  },
  bolero: {
    brand: "Mahindra", model: "Bolero", type: "Body-on-Frame SUV", segment: "Utility Vehicle",
    price: "₹9.3 – ₹10.3 Lakh", mileage: "14 – 16 km/l",
    engine: "1.5L Diesel (76 HP)", transmission: "5-speed MT", fuel: "Diesel",
    seating: 7, safety: "Dual Airbags, ABS",
    ncap: "Not rated", boot: "Varies",
    pros: ["Legendary durability", "Low maintenance", "High ground clearance", "Go-anywhere capability"],
    cons: ["Very basic interiors", "Weak engine", "Outdated design", "Poor ride quality"],
    best_for: "Rural and semi-urban buyers needing a tough, reliable, no-frills utility vehicle.",
    rivals: ["Tata Sumo", "Force Trax"],
    verdict: "The Bolero is the workhorse of India — not fancy, but incredibly tough and reliable for rough roads."
  },

  // ══════════════ HONDA ══════════════
  city: {
    brand: "Honda", model: "City", type: "Mid-Size Sedan", segment: "Mid-Size Sedan",
    price: "₹11.7 – ₹16.2 Lakh", mileage: "18 – 24 km/l",
    engine: "1.5L Petrol (121 HP) / 1.5L Strong Hybrid (126 HP)",
    transmission: "6-speed MT / CVT / e-CVT (Hybrid)", fuel: "Petrol / Hybrid",
    seating: 5, safety: "6 Airbags, ESC, Honda LaneWatch, ADAS (Hybrid)",
    ncap: "Not rated (current gen)", boot: "506L",
    pros: ["Best engine refinement", "Legendary Honda reliability", "Excellent NVH levels", "Spacious cabin", "Strong hybrid option"],
    cons: ["Expensive top variants", "CVT lacks sporty feel", "No diesel option"],
    best_for: "Driving enthusiasts who prioritize engine refinement, reliability, and the pure driving experience.",
    rivals: ["Hyundai Verna", "Maruti Ciaz", "Skoda Slavia", "VW Virtus"],
    verdict: "The Honda City remains the benchmark sedan for driving pleasure, engine refinement, and long-term reliability."
  },
  amaze: {
    brand: "Honda", model: "Amaze", type: "Sub-Compact Sedan", segment: "Sub-4m Sedan",
    price: "₹7.2 – ₹9.9 Lakh", mileage: "18 – 24 km/l",
    engine: "1.2L Petrol (90 HP)", transmission: "5-speed MT / CVT", fuel: "Petrol",
    seating: 5, safety: "Dual Airbags, ABS, EBD, ISOFIX",
    ncap: "Not rated (current gen)", boot: "420L",
    pros: ["CVT is silky smooth", "Honda build quality", "Spacious rear seat", "Good boot space"],
    cons: ["Limited features", "Only petrol", "Dated design"],
    best_for: "Buyers wanting Honda's legendary quality and CVT refinement in a compact sedan package.",
    rivals: ["Maruti Dzire", "Hyundai Aura", "Tata Tigor"],
    verdict: "The Amaze is quintessentially Honda — refined, reliable, and well-built with a focus on quality over gimmicks."
  },
  jazz: {
    brand: "Honda", model: "Jazz", type: "Premium Hatchback", segment: "Premium Hatchback",
    price: "₹7.5 – ₹10.0 Lakh (Discontinued — used market)", mileage: "17 – 23 km/l",
    engine: "1.2L Petrol (90 HP) / 1.5L Diesel (100 HP)",
    transmission: "5-speed MT / CVT", fuel: "Petrol / Diesel",
    seating: 5, safety: "Dual Airbags, ABS, EBD",
    ncap: "Not rated", boot: "354L",
    pros: ["Magic Seats versatility", "Incredible boot space", "Honda reliability", "CVT smoothness"],
    cons: ["Discontinued (buy used)", "Dated infotainment", "Basic features by today's standards"],
    best_for: "Used car buyers wanting the most versatile and spacious premium hatchback ever made.",
    rivals: ["Hyundai i20", "Maruti Baleno", "Tata Altroz"],
    verdict: "Though discontinued, the Jazz is a used car gem — its Magic Seats and space efficiency remain unmatched."
  },
  "wr-v": {
    brand: "Honda", model: "WR-V", type: "Crossover", segment: "Sub-4m Crossover",
    price: "₹8.0 – ₹11.0 Lakh (Discontinued — used market)", mileage: "16 – 23 km/l",
    engine: "1.2L Petrol (90 HP) / 1.5L Diesel (100 HP)",
    transmission: "5-speed MT", fuel: "Petrol / Diesel",
    seating: 5, safety: "Dual Airbags, ABS, EBD",
    ncap: "Not rated", boot: "363L",
    pros: ["Excellent diesel engine", "Honda build quality", "Good ground clearance", "Solid ride quality"],
    cons: ["Discontinued", "No automatic", "Dated design and features"],
    best_for: "Used car seekers wanting Honda reliability in a crossover package with excellent diesel.",
    rivals: ["Maruti Brezza", "Hyundai Venue"],
    verdict: "The WR-V was discontinued but remains excellent value in the used market for Honda quality enthusiasts."
  },

  // ══════════════ TOYOTA ══════════════
  innova: {
    brand: "Toyota", model: "Innova Crysta / Hycross", type: "MPV", segment: "Premium MPV",
    price: "₹19.9 – ₹30.3 Lakh", mileage: "13 – 21 km/l",
    engine: "2.0L Petrol (174 HP) / 2.0L Strong Hybrid (186 HP combined)",
    transmission: "5-speed MT / CVT / e-CVT (Hybrid)", fuel: "Petrol / Hybrid",
    seating: 7, safety: "6 Airbags, ESC, TPMS, Hill Assist, 360° Camera",
    ncap: "Not yet rated", boot: "Varies by config",
    pros: ["Legendary reliability", "Best-in-class comfort", "Bulletproof resale value", "OTTOMAN seats", "Strong hybrid efficiency"],
    cons: ["Very expensive", "No diesel in Hycross", "Captain seats reduce versatility"],
    best_for: "Families and chauffeur-driven buyers wanting the most reliable and comfortable MPV money can buy.",
    rivals: ["Kia Carnival", "Maruti Ertiga", "Kia Carens"],
    verdict: "The Innova is a legend — no other MPV in India comes close in terms of reliability, comfort, and resale value."
  },
  fortuner: {
    brand: "Toyota", model: "Fortuner", type: "Full-Size SUV", segment: "Premium Full-Size SUV",
    price: "₹33.4 – ₹51.4 Lakh", mileage: "10 – 14 km/l",
    engine: "2.7L Petrol (166 HP) / 2.8L Diesel (204 HP)",
    transmission: "6-speed MT / 6-speed AT", fuel: "Petrol / Diesel",
    seating: 7, safety: "7 Airbags, ESC, Hill Assist, Downhill Assist, TPMS",
    ncap: "Not rated", boot: "296L (3rd row up)",
    pros: ["Unstoppable reliability", "Incredible resale", "4x4 capability", "Powerful diesel", "Commanding presence"],
    cons: ["Very expensive", "Poor fuel efficiency", "Heavy and bulky for city", "Dated interior design"],
    best_for: "Premium SUV buyers who want bulletproof reliability, 4x4 capability, and the best resale in the segment.",
    rivals: ["MG Gloster", "Skoda Kodiaq", "Jeep Meridian"],
    verdict: "The Fortuner is the king of SUVs in India — its resale value and reliability are simply unmatched by any competitor."
  },
  glanza: {
    brand: "Toyota", model: "Glanza", type: "Premium Hatchback", segment: "Premium Hatchback",
    price: "₹6.8 – ₹9.9 Lakh", mileage: "22 – 23 km/l",
    engine: "1.2L DualJet Petrol (90 HP)", transmission: "5-speed MT / AMT", fuel: "Petrol / CNG",
    seating: 5, safety: "6 Airbags, ESC, Hill Hold",
    ncap: "Not rated", boot: "318L",
    pros: ["Toyota badge & warranty", "Identical to Baleno", "Good fuel efficiency", "Extensive service network"],
    cons: ["Rebadged Baleno", "Same car, higher price", "Limited differentiation"],
    best_for: "Buyers who trust Toyota's warranty and service but want a hatchback at Maruti-like efficiency.",
    rivals: ["Maruti Baleno", "Hyundai i20", "Tata Altroz"],
    verdict: "The Glanza is essentially a Toyota-badged Baleno — buy it for Toyota's extended warranty and confidence."
  },
  "urban cruiser": {
    brand: "Toyota", model: "Urban Cruiser Taisor", type: "Crossover", segment: "Sub-4m Crossover",
    price: "₹7.7 – ₹13.0 Lakh", mileage: "20 – 22 km/l",
    engine: "1.0L Turbo Petrol (100 HP) / 1.2L Petrol (90 HP)",
    transmission: "5-speed MT / 6-speed AT", fuel: "Petrol / CNG",
    seating: 5, safety: "6 Airbags, ESC, Hill Hold",
    ncap: "Not rated", boot: "308L",
    pros: ["Toyota reliability", "Sporty coupe design", "Turbo petrol option", "Good ground clearance"],
    cons: ["Rebadged Fronx", "Premium over Fronx", "Average rear space"],
    best_for: "Buyers wanting Toyota's badge and service with a stylish crossover at an accessible price.",
    rivals: ["Maruti Fronx", "Hyundai Exter", "Tata Punch"],
    verdict: "The Urban Cruiser Taisor brings Toyota trust to the trendy crossover segment — Fronx with a Toyota badge."
  },
  hyryder: {
    brand: "Toyota", model: "Hyryder", type: "Mid-Size SUV", segment: "Mid-Size SUV",
    price: "₹11.0 – ₹20.0 Lakh", mileage: "19 – 28 km/l",
    engine: "1.5L Petrol (103 HP) / 1.5L Strong Hybrid (115 HP)",
    transmission: "5-speed MT / 6-speed AT / e-CVT (Hybrid)", fuel: "Petrol / Hybrid",
    seating: 5, safety: "6 Airbags, ESC, Hill Hold, 360° Camera",
    ncap: "Not yet rated", boot: "328L",
    pros: ["Incredible hybrid efficiency (28 km/l!)", "Toyota reliability", "AWD option", "Premium build quality"],
    cons: ["Underpowered for overtakes", "Boot space average", "Wait times can be long"],
    best_for: "Eco-conscious buyers wanting exceptional fuel efficiency in an SUV without compromising reliability.",
    rivals: ["Maruti Grand Vitara", "Hyundai Creta", "Kia Seltos"],
    verdict: "The Hyryder's strong hybrid delivers remarkable 28 km/l efficiency — the most fuel-efficient SUV in India."
  },

  // ══════════════ KIA ══════════════
  seltos: {
    brand: "Kia", model: "Seltos", type: "Compact SUV", segment: "Mid-Size SUV",
    price: "₹10.9 – ₹20.3 Lakh", mileage: "16 – 21 km/l",
    engine: "1.5L Petrol (115 HP) / 1.5L Diesel (116 HP) / 1.5L Turbo Petrol (160 HP)",
    transmission: "6-speed MT / IVT / 7-speed DCT / 6-speed AT", fuel: "Petrol / Diesel",
    seating: 5, safety: "6 Airbags, ESC, ADAS Level 2, TPMS, Hill Assist",
    ncap: "Not yet rated", boot: "433L",
    pros: ["Sporty looks", "ADAS features", "Powerful turbo option", "Feature-rich cabin", "Good ride quality"],
    cons: ["Expensive top variants", "Avg rear seat space", "Turbo only with DCT"],
    best_for: "Style-conscious SUV buyers wanting sporty looks, modern tech, and strong performance.",
    rivals: ["Hyundai Creta", "Maruti Grand Vitara", "Toyota Hyryder", "VW Taigun"],
    verdict: "The Seltos started Kia's India journey and remains a strong contender with sportier appeal than the Creta."
  },
  sonet: {
    brand: "Kia", model: "Sonet", type: "Sub-Compact SUV", segment: "Sub-4m SUV",
    price: "₹7.9 – ₹15.8 Lakh", mileage: "18 – 24 km/l",
    engine: "1.2L Petrol (83 HP) / 1.0L Turbo Petrol (120 HP) / 1.5L Diesel (116 HP)",
    transmission: "5-speed MT / 7-speed DCT / 6-speed iMT / 6-speed AT", fuel: "Petrol / Diesel",
    seating: 5, safety: "6 Airbags, ESC, Hill Assist, TPMS",
    ncap: "Not yet rated", boot: "392L",
    pros: ["Most transmission choices", "Ventilated seats in segment!", "Diesel AT is great", "Feature overload"],
    cons: ["Expensive fully loaded", "Rear seat average", "Turbo only with DCT"],
    best_for: "Feature lovers who want segment-first amenities like ventilated seats and multiple gearbox options.",
    rivals: ["Hyundai Venue", "Tata Nexon", "Maruti Brezza", "Mahindra XUV300"],
    verdict: "The Sonet offers the richest feature list in its segment — ventilated seats, sunroof, Bose sound at sub-4m pricing."
  },
  carens: {
    brand: "Kia", model: "Carens", type: "MPV", segment: "Affordable MPV (7-Seater)",
    price: "₹10.5 – ₹19.5 Lakh", mileage: "14 – 21 km/l",
    engine: "1.5L Petrol (115 HP) / 1.5L Turbo Petrol (160 HP) / 1.5L Diesel (116 HP)",
    transmission: "6-speed MT / 7-speed DCT / 6-speed AT", fuel: "Petrol / Diesel",
    seating: 7, safety: "6 Airbags, ESC, ISOFIX all 3 rows, Hill Assist, TPMS",
    ncap: "3 Stars (Global NCAP)", boot: "216L (all rows up)",
    pros: ["Best value 7-seater", "Feature-rich", "Multiple powertrain options", "Good ride quality"],
    cons: ["3-star safety only", "3rd row cramped", "Average highway stability"],
    best_for: "Families wanting an affordable, well-equipped 7-seater MPV that isn't an Innova.",
    rivals: ["Maruti Ertiga", "Toyota Innova Hycross", "Hyundai Alcazar"],
    verdict: "The Carens is a fantastic budget alternative to the Innova — offering 7 seats with Kia's feature-loaded approach."
  },

  // ══════════════ BMW ══════════════
  "3 series": {
    brand: "BMW", model: "3 Series", type: "Luxury Sedan", segment: "Entry Luxury Sedan",
    price: "₹46.9 – ₹62.6 Lakh", mileage: "14 – 20 km/l",
    engine: "2.0L Turbo Petrol (258 HP) / 2.0L Diesel (190 HP)",
    transmission: "8-speed AT", fuel: "Petrol / Diesel",
    seating: 5, safety: "6 Airbags, ESC, DTC, Cornering Brake Control, ISOFIX",
    ncap: "5 Stars (Euro NCAP)", boot: "480L",
    pros: ["Best driving dynamics in class", "Powerful engines", "Iconic design", "Premium build", "Great highway cruiser"],
    cons: ["Expensive maintenance", "Cramped rear seat", "No panoramic sunroof"],
    best_for: "Driving enthusiasts who want the ultimate sport sedan experience with the BMW badge.",
    rivals: ["Mercedes C-Class", "Audi A4", "Volvo S60", "Jaguar XE"],
    verdict: "The 3 Series is THE driver's car in the luxury segment — nothing matches its steering feel and dynamics."
  },
  "5 series": {
    brand: "BMW", model: "5 Series", type: "Luxury Sedan", segment: "Mid-Size Luxury Sedan",
    price: "₹63.4 – ₹73.5 Lakh", mileage: "12 – 18 km/l",
    engine: "2.0L Turbo Petrol (258 HP) / 2.0L Diesel (190 HP)",
    transmission: "8-speed AT", fuel: "Petrol / Diesel",
    seating: 5, safety: "8 Airbags, ADAS, 360° Camera, Parking Assist, ESC",
    ncap: "5 Stars (Euro NCAP)", boot: "530L",
    pros: ["Perfect blend of comfort & sportiness", "Spacious rear seat", "Advanced tech", "Gorgeous design"],
    cons: ["Very expensive", "Running costs are high", "Complex electronics"],
    best_for: "Business executives wanting the perfect balance of driving pleasure and rear-seat luxury.",
    rivals: ["Mercedes E-Class", "Audi A6", "Volvo S90"],
    verdict: "The 5 Series is the quintessential business sedan — equally happy being driven or driving yourself."
  },
  x1: {
    brand: "BMW", model: "X1", type: "Luxury Compact SUV", segment: "Entry Luxury SUV",
    price: "₹45.9 – ₹52.5 Lakh", mileage: "14 – 20 km/l",
    engine: "2.0L Turbo Petrol (204 HP) / 2.0L Diesel (150 HP)",
    transmission: "7-speed DCT / 8-speed AT", fuel: "Petrol / Diesel",
    seating: 5, safety: "6 Airbags, ESC, ADAS, 360° Camera",
    ncap: "5 Stars (Euro NCAP)", boot: "540L",
    pros: ["Best boot in class", "BMW driving dynamics", "Modern interior", "Good ground clearance"],
    cons: ["Expensive options", "FWD base model", "Premium fuel recommended"],
    best_for: "First-time luxury buyers wanting a practical SUV with BMW's driving character.",
    rivals: ["Audi Q3", "Mercedes GLA", "Volvo XC40"],
    verdict: "The X1 is the most practical entry into BMW's SUV world — spacious, dynamic, and modern."
  },
  x3: {
    brand: "BMW", model: "X3", type: "Luxury Mid-Size SUV", segment: "Mid-Size Luxury SUV",
    price: "₹61.9 – ₹73.5 Lakh", mileage: "12 – 16 km/l",
    engine: "2.0L Turbo Petrol (252 HP) / 2.0L Diesel (190 HP)",
    transmission: "8-speed AT", fuel: "Petrol / Diesel",
    seating: 5, safety: "6 Airbags, ADAS, 360° Camera, Park Assist",
    ncap: "5 Stars (Euro NCAP)", boot: "550L",
    pros: ["xDrive AWD standard", "Powerful engines", "Great highway stability", "Premium interior"],
    cons: ["Very expensive", "High maintenance costs", "No 7-seat option"],
    best_for: "Luxury SUV buyers wanting performance-focused driving with BMW's renowned handling.",
    rivals: ["Mercedes GLC", "Audi Q5", "Volvo XC60"],
    verdict: "The X3 is BMW's best-seller for good reason — it delivers the perfect SUV balance of space, performance, and luxury."
  },
  x5: {
    brand: "BMW", model: "X5", type: "Luxury Full-Size SUV", segment: "Full-Size Luxury SUV",
    price: "₹93.9 Lakh – ₹1.19 Cr", mileage: "10 – 14 km/l",
    engine: "3.0L Turbo Petrol (340 HP) / 3.0L Diesel (286 HP)",
    transmission: "8-speed AT", fuel: "Petrol / Diesel",
    seating: 5, safety: "8+ Airbags, ADAS Level 2, Air Suspension, 360° Camera",
    ncap: "5 Stars (Euro NCAP)", boot: "645L",
    pros: ["Incredible performance", "Luxurious cabin", "Air suspension comfort", "xDrive AWD", "Tech-loaded"],
    cons: ["Over ₹1 Crore on-road", "Running costs very high", "Overkill for city use"],
    best_for: "Ultra-premium buyers wanting the ultimate expression of BMW's SUV engineering.",
    rivals: ["Mercedes GLE", "Audi Q7", "Volvo XC90", "Range Rover Sport"],
    verdict: "The X5 is BMW's flagship SUV — a statement of success that delivers extraordinary performance and luxury."
  },

  // ══════════════ MERCEDES-BENZ ══════════════
  "c-class": {
    brand: "Mercedes", model: "C-Class", type: "Luxury Sedan", segment: "Entry Luxury Sedan",
    price: "₹57.0 – ₹62.0 Lakh", mileage: "14 – 18 km/l",
    engine: "1.5L Turbo Petrol (204 HP) / 2.0L Diesel (200 HP)",
    transmission: "9-speed AT (9G-TRONIC)", fuel: "Petrol / Diesel",
    seating: 5, safety: "7 Airbags, ADAS, 360° Camera, Active Brake Assist",
    ncap: "5 Stars (Euro NCAP)", boot: "455L",
    pros: ["Baby S-Class interiors", "MBUX with AR navigation", "Incredible ride comfort", "Rear seat luxury"],
    cons: ["No AMG variant in India", "Expensive maintenance", "Firm ride on bad roads"],
    best_for: "Luxury sedan buyers who prioritize rear-seat comfort and the latest Mercedes tech.",
    rivals: ["BMW 3 Series", "Audi A4", "Volvo S60"],
    verdict: "The C-Class brings S-Class levels of luxury and tech to the compact sedan segment — the comfort king."
  },
  "e-class": {
    brand: "Mercedes", model: "E-Class", type: "Luxury Sedan", segment: "Executive Luxury Sedan",
    price: "₹78.5 – ₹92.5 Lakh", mileage: "12 – 17 km/l",
    engine: "2.0L Turbo Petrol (258 HP) / 2.0L Diesel (194 HP)",
    transmission: "9-speed AT (9G-TRONIC)", fuel: "Petrol / Diesel",
    seating: 5, safety: "9 Airbags, ADAS Level 2, PRE-SAFE, Air Suspension",
    ncap: "5 Stars (Euro NCAP)", boot: "540L",
    pros: ["Best rear-seat comfort", "Air suspension available", "Cutting-edge MBUX", "Chauffeur-driven excellence"],
    cons: ["Over ₹1 Cr on-road", "Very expensive to maintain", "Not engaging to drive"],
    best_for: "Business leaders and executives who are often chauffeur-driven and want ultimate rear-seat luxury.",
    rivals: ["BMW 5 Series", "Audi A6", "Volvo S90"],
    verdict: "The E-Class is the default choice for India's elite — the most comfortable rear seat this side of a Rolls-Royce."
  },
  gla: {
    brand: "Mercedes", model: "GLA", type: "Luxury Compact SUV", segment: "Entry Luxury SUV",
    price: "₹50.5 – ₹56.9 Lakh", mileage: "13 – 19 km/l",
    engine: "1.3L Turbo Petrol (163 HP) / 2.0L Diesel (150 HP)",
    transmission: "7-speed DCT / 8-speed DCT", fuel: "Petrol / Diesel",
    seating: 5, safety: "7 Airbags, ESC, Active Brake Assist, ADAS",
    ncap: "5 Stars (Euro NCAP)", boot: "435L",
    pros: ["3-pointed star badge", "MBUX infotainment", "Good ground clearance", "Premium cabin", "Diesel is efficient"],
    cons: ["Small for a Mercedes", "1.3L petrol feels weak", "Tight rear seat"],
    best_for: "First-time luxury buyers wanting the Mercedes badge in the most accessible SUV package.",
    rivals: ["BMW X1", "Audi Q3", "Volvo XC40"],
    verdict: "The GLA is your entry ticket to the Mercedes world — compact, premium, and carrying that enviable 3-pointed star."
  },
  glc: {
    brand: "Mercedes", model: "GLC", type: "Luxury Mid-Size SUV", segment: "Mid-Size Luxury SUV",
    price: "₹67.9 – ₹76.9 Lakh", mileage: "12 – 16 km/l",
    engine: "2.0L Turbo Petrol (258 HP) / 2.0L Diesel (197 HP)",
    transmission: "9-speed AT (9G-TRONIC)", fuel: "Petrol / Diesel",
    seating: 5, safety: "7 Airbags, ADAS Level 2, 360° Camera, Active Brake Assist",
    ncap: "5 Stars (Euro NCAP)", boot: "620L",
    pros: ["Outstanding ride comfort", "Huge boot space", "MBUX Superscreen", "Whisper-quiet cabin"],
    cons: ["Not sporty to drive", "Expensive options", "High maintenance costs"],
    best_for: "Luxury SUV buyers wanting the ultimate comfort-focused, tech-loaded premium SUV experience.",
    rivals: ["BMW X3", "Audi Q5", "Volvo XC60", "Lexus NX"],
    verdict: "The GLC is Mercedes at its comfort-focused best — serene, spacious, and dripping with luxury tech."
  },

  // ══════════════ AUDI ══════════════
  a4: {
    brand: "Audi", model: "A4", type: "Luxury Sedan", segment: "Entry Luxury Sedan",
    price: "₹43.5 – ₹48.5 Lakh", mileage: "15 – 17 km/l",
    engine: "2.0L Turbo Petrol (190 HP)", transmission: "7-speed DCT (S tronic)", fuel: "Petrol",
    seating: 5, safety: "8 Airbags, ESC, ISOFIX, Rear Camera",
    ncap: "5 Stars (Euro NCAP)", boot: "460L",
    pros: ["Most affordable luxury sedan", "Quattro heritage", "Understated elegance", "Virtual Cockpit", "Good value"],
    cons: ["Only petrol option", "Showing its age", "No ADAS in India"],
    best_for: "Buyers wanting luxury sedan refinement at the most accessible price point among German brands.",
    rivals: ["BMW 3 Series", "Mercedes C-Class", "Volvo S60"],
    verdict: "The A4 offers understated German luxury at the best value among its German rivals — the quiet achiever."
  },
  a6: {
    brand: "Audi", model: "A6", type: "Luxury Sedan", segment: "Executive Luxury Sedan",
    price: "₹56.8 – ₹64.0 Lakh", mileage: "14 – 17 km/l",
    engine: "2.0L Turbo Petrol (245 HP)", transmission: "7-speed DCT (S tronic)", fuel: "Petrol",
    seating: 5, safety: "8 Airbags, ESC, ADAS, 360° Camera, Park Assist",
    ncap: "5 Stars (Euro NCAP)", boot: "530L",
    pros: ["Gorgeous interior design", "Virtual Cockpit Plus", "Matrix LED headlights", "Spacious cabin"],
    cons: ["No diesel in latest", "Less sporty than BMW 5", "Rear seat not as luxurious as E-Class"],
    best_for: "Tech-savvy executives who appreciate understated design and cutting-edge digital cockpit.",
    rivals: ["BMW 5 Series", "Mercedes E-Class", "Volvo S90"],
    verdict: "The A6 is the technocrat's choice — its digital interior and Matrix LEDs showcase Audi's lighting expertise."
  },
  q3: {
    brand: "Audi", model: "Q3", type: "Luxury Compact SUV", segment: "Entry Luxury SUV",
    price: "₹44.9 – ₹49.9 Lakh", mileage: "14 – 17 km/l",
    engine: "2.0L Turbo Petrol (190 HP)", transmission: "7-speed DCT (S tronic)", fuel: "Petrol",
    seating: 5, safety: "6 Airbags, ESC, ISOFIX, Rear Camera",
    ncap: "5 Stars (Euro NCAP)", boot: "530L",
    pros: ["Quattro AWD available", "Premium build", "Spacious for segment", "Virtual Cockpit"],
    cons: ["Only petrol", "No ADAS", "Pricey options"],
    best_for: "Luxury SUV first-timers wanting Audi's Quattro AWD and premium build in a compact package.",
    rivals: ["BMW X1", "Mercedes GLA", "Volvo XC40"],
    verdict: "The Q3 with Quattro AWD offers a unique proposition in the entry luxury SUV segment — grippy and premium."
  },
  q5: {
    brand: "Audi", model: "Q5", type: "Luxury Mid-Size SUV", segment: "Mid-Size Luxury SUV",
    price: "₹65.2 – ₹70.5 Lakh", mileage: "12 – 15 km/l",
    engine: "2.0L Turbo Petrol (265 HP)", transmission: "7-speed DCT (S tronic)", fuel: "Petrol",
    seating: 5, safety: "8 Airbags, ESC, ADAS, 360° Camera, Matrix LED",
    ncap: "5 Stars (Euro NCAP)", boot: "550L",
    pros: ["Quattro AWD standard", "Powerful engine", "Premium interior", "Good ride quality", "Matrix LED lights"],
    cons: ["Only petrol", "Not as spacious as GLC", "High running costs"],
    best_for: "All-weather SUV enthusiasts wanting Audi's legendary Quattro AWD with a powerful turbo engine.",
    rivals: ["BMW X3", "Mercedes GLC", "Volvo XC60"],
    verdict: "The Q5 is Audi's sweet spot — powerful Quattro AWD, refined turbo engine, and understated premium appeal."
  }
};

// Aliases for flexible matching
const modelAliases = {
  "grand i10": "i20", "i10": "i20", "santro": "aura",
  "scorpion": "scorpio n", "scoprio": "scorpio n",
  "fortunar": "fortuner", "furtoner": "fortuner",
  "innova crysta": "innova", "innova hycross": "innova",
  "grand vitara": "hyryder",
  "wagon r": "wagonr", "wagon-r": "wagonr",
  "breeza": "brezza", "vitara brezza": "brezza",
  "dzire": "dzire", "desire": "dzire",
  "3series": "3 series", "5series": "5 series",
  "c class": "c-class", "e class": "e-class",
  "cclass": "c-class", "eclass": "e-class",
  "wrv": "wr-v",
  "nexon ev": "nexon", "tiago ev": "tiago",
  "xuv 700": "xuv700", "xuv 300": "xuv300",
  "scorpio-n": "scorpio n",
};

// ─── BRAND INFO ─────────────────────────────────────────────
const brandInfo = {
  hyundai: { country: "🇰🇷 South Korea", tagline: "Feature-rich, value-driven", models: ["Creta", "Venue", "i20", "Verna", "Exter", "Aura", "Alcazar"], strengths: "Best-in-class features, premium cabins, strong resale value, extensive service network" },
  tata: { country: "🇮🇳 India", tagline: "Safety champion", models: ["Nexon", "Punch", "Altroz", "Tiago", "Tigor", "Harrier", "Safari"], strengths: "5-star safety ratings, solid build quality, value-for-money, growing EV lineup" },
  maruti: { country: "🇮🇳🇯🇵 India-Japan", tagline: "India's most trusted", models: ["Swift", "Baleno", "Dzire", "Brezza", "Ertiga", "WagonR", "Fronx"], strengths: "Largest service network (4000+ workshops), best resale value, lowest maintenance costs" },
  mahindra: { country: "🇮🇳 India", tagline: "SUV specialist", models: ["Thar", "Scorpio N", "XUV700", "XUV300", "Bolero", "Scorpio Classic"], strengths: "Rugged SUVs, powerful diesels, real 4x4 capability, bold designs" },
  honda: { country: "🇯🇵 Japan", tagline: "Engineering excellence", models: ["City", "Amaze", "Jazz (used)", "WR-V (used)"], strengths: "Legendary engine reliability, best driving dynamics, premium build quality" },
  toyota: { country: "🇯🇵 Japan", tagline: "Unbreakable reliability", models: ["Innova", "Fortuner", "Glanza", "Urban Cruiser", "Hyryder"], strengths: "Bulletproof reliability, best resale value, strong hybrid tech, global trust" },
  kia: { country: "🇰🇷 South Korea", tagline: "Feature overload", models: ["Seltos", "Sonet", "Carens"], strengths: "Segment-first features, bold styling, excellent value, ventilated seats" },
  bmw: { country: "🇩🇪 Germany", tagline: "Ultimate driving machine", models: ["3 Series", "5 Series", "X1", "X3", "X5"], strengths: "Best-in-class driving dynamics, powerful engines, sporty character, iconic design" },
  audi: { country: "🇩🇪 Germany", tagline: "Vorsprung durch Technik", models: ["A4", "A6", "Q3", "Q5"], strengths: "Quattro AWD, Virtual Cockpit, Matrix LED, understated luxury, tech innovation" },
  mercedes: { country: "🇩🇪 Germany", tagline: "The best or nothing", models: ["C-Class", "E-Class", "GLA", "GLC"], strengths: "Ultimate luxury, MBUX tech, rear-seat comfort, strongest badge value, best ride comfort" },
};

// ─── DYNAMIC COMPARISON GENERATOR ───────────────────────────
function generateComparison(car1Key, car2Key) {
  const c1 = carDatabase[car1Key];
  const c2 = carDatabase[car2Key];
  if (!c1 || !c2) return null;

  let result = `\n⚡ **${c1.brand} ${c1.model} vs ${c2.brand} ${c2.model}**\n\n`;
  result += `┌─────────────────────────────────────┐\n`;
  result += `│  📊 HEAD-TO-HEAD COMPARISON         │\n`;
  result += `└─────────────────────────────────────┘\n\n`;

  result += `💰 **Price:**\n• ${c1.model}: ${c1.price}\n• ${c2.model}: ${c2.price}\n\n`;
  result += `⛽ **Mileage:**\n• ${c1.model}: ${c1.mileage}\n• ${c2.model}: ${c2.mileage}\n\n`;
  result += `🔧 **Engine:**\n• ${c1.model}: ${c1.engine}\n• ${c2.model}: ${c2.engine}\n\n`;
  result += `🛡️ **Safety:**\n• ${c1.model}: ${c1.safety} ${c1.ncap !== "Not rated" && c1.ncap !== "Not yet rated" ? `(${c1.ncap})` : ""}\n• ${c2.model}: ${c2.safety} ${c2.ncap !== "Not rated" && c2.ncap !== "Not yet rated" ? `(${c2.ncap})` : ""}\n\n`;
  result += `🪑 **Seating:** ${c1.model}: ${c1.seating}-seater | ${c2.model}: ${c2.seating}-seater\n\n`;

  result += `✅ **${c1.model} Strengths:** ${c1.pros.slice(0, 3).join(", ")}\n`;
  result += `✅ **${c2.model} Strengths:** ${c2.pros.slice(0, 3).join(", ")}\n\n`;

  result += `🏆 **Verdict:**\n`;
  result += `• Pick **${c1.model}** if: ${c1.best_for}\n`;
  result += `• Pick **${c2.model}** if: ${c2.best_for}\n`;

  return result;
}

// ─── FIND CAR KEY FROM MESSAGE ──────────────────────────────
function findCarKey(text) {
  const normalized = text.toLowerCase().trim();

  // Direct match
  if (carDatabase[normalized]) return normalized;

  // Alias match
  if (modelAliases[normalized]) return modelAliases[normalized];

  // Partial match against all car keys
  for (const key of Object.keys(carDatabase)) {
    if (normalized.includes(key)) return key;
  }

  // Alias partial match
  for (const [alias, target] of Object.entries(modelAliases)) {
    if (normalized.includes(alias)) return target;
  }

  return null;
}

// ─── EXTRACT TWO CARS FOR COMPARISON ────────────────────────
function findTwoCars(text) {
  const normalized = text.toLowerCase();
  const found = [];
  const allKeys = [...Object.keys(carDatabase), ...Object.keys(modelAliases)];

  // Sort by length descending so "scorpio n" matches before "scorpio"
  allKeys.sort((a, b) => b.length - a.length);

  let remaining = normalized;
  for (const key of allKeys) {
    const idx = remaining.indexOf(key);
    if (idx !== -1) {
      const resolved = modelAliases[key] || key;
      if (!found.includes(resolved)) {
        found.push(resolved);
        remaining = remaining.replace(key, "___");
      }
      if (found.length >= 2) break;
    }
  }

  return found.length >= 2 ? found : null;
}

// ─── FUEL KNOWLEDGE ─────────────────────────────────────────
const fuelGuide = {
  petrol: "⛽ **Petrol Cars**\n\n✅ **Best for:** City driving, short commutes (under 40 km/day)\n💰 **Running cost:** ~₹5-7 per km\n\n**Pros:** Lower purchase cost, smoother engine, lower maintenance, quiet operation\n**Cons:** Higher fuel cost, less torque than diesel\n\n**Top Petrol Cars:** Maruti Swift, Hyundai i20, Tata Altroz, Honda City",
  diesel: "⛽ **Diesel Cars**\n\n✅ **Best for:** Highway driving, long commutes (60+ km/day)\n💰 **Running cost:** ~₹3-5 per km\n\n**Pros:** Better fuel economy, higher torque, ideal for highways\n**Cons:** Higher purchase cost, noisier, expensive maintenance\n\n**Top Diesel Cars:** Tata Nexon, Hyundai Creta, Kia Seltos, Mahindra XUV700",
  electric: "🔋 **Electric Vehicles (EVs)**\n\n✅ **Best for:** City commuters with home charging\n💰 **Running cost:** ~₹1-2 per km (cheapest!)\n\n**Pros:** Zero emissions, ultra-low running cost, smooth & silent, less maintenance\n**Cons:** Range anxiety, charging time, higher purchase cost, limited infra\n\n**Popular EVs:** Tata Nexon EV, MG ZS EV, Hyundai Kona, Tata Tiago EV",
  cng: "💨 **CNG Cars**\n\n✅ **Best for:** High daily usage (50+ km/day), cab/fleet use\n💰 **Running cost:** ~₹1.5-2.5 per km\n\n**Pros:** Cheapest fuel, clean burning, great for city\n**Cons:** Boot space reduced, fewer models, reduced power\n\n**Top CNG Cars:** Maruti WagonR CNG, Maruti Dzire CNG, Tata Tiago CNG, Hyundai Aura CNG",
  hybrid: "🔄 **Hybrid Cars**\n\n✅ **Best for:** City + highway mix with maximum efficiency\n💰 **Running cost:** ~₹2-3 per km\n\n**Pros:** Best efficiency (up to 28 km/l), no range anxiety, self-charging\n**Cons:** Higher price, complex tech, limited service expertise\n\n**Top Hybrids:** Toyota Hyryder Hybrid, Maruti Grand Vitara Hybrid, Honda City Hybrid"
};

// ─── BUYING TIPS ────────────────────────────────────────────
const buyingTips = [
  "🔍 Always get a **pre-purchase inspection** from a trusted mechanic (costs just ₹1,000-2,000 but can save lakhs!).",
  "📋 Verify all **documents**: RC, insurance validity, PUC, service history, and check for pending loans/challans on Vahan portal.",
  "🚗 Take a **20-minute test drive** covering city AND highway. Listen for unusual sounds, check all electricals, and feel the brakes.",
  "📊 Check **odometer vs service records**. Average Indian cars do 10,000-15,000 km/year. Be suspicious of very low readings on old cars.",
  "🔢 Fewer **previous owners** = better maintained. 1st owner cars command 10-15% premium and are worth it.",
  "💰 **Negotiate smart**: Check CarScout, CarDekho, and OLX for market rates. Offer 10-15% below asking price.",
  "🛡️ Look for cars with **comprehensive insurance** (not just third-party). It indicates a careful owner.",
  "🎨 Check for **paint inconsistencies** — run your fingers along panels. Mismatched paint = accident history.",
  "🔧 Budget an extra **₹20,000-50,000** for post-purchase servicing, insurance transfer, and minor fixes.",
  "⏰ **Best time to buy**: Year-end (Oct-Dec) when sellers rush to sell before new models launch."
];

// ─── SELLING TIPS ───────────────────────────────────────────
const sellingTips = [
  "🧹 **Detail your car** thoroughly before listing — interior, exterior, engine bay. A ₹2,000-5,000 detailing job can increase your price by ₹20,000+!",
  "📸 Take **12-15 high-quality photos** from every angle, including interior, boot, engine, and odometer.",
  "💰 **Price competitively** by checking similar listings on CarScout. Price 5-10% above your minimum acceptable price for negotiation room.",
  "📋 Keep **all documents ready**: RC, insurance, service history, original keys, spare key, and tools.",
  "🔧 Fix **minor issues** before listing — dents, scratches, non-working features. Buyers notice everything.",
  "⚡ **Respond within 1 hour** to buyer inquiries. Quick responses increase your chances of sale by 60%!",
  "✅ Highlight your **USPs**: \"Single owner\", \"Accident-free\", \"Full service history\", \"New tyres\" etc.",
  "📊 **Best selling months**: Festive season (Sept-Nov) and financial year-end (March). Demand peaks 20-30%.",
  "🚗 Complete a **fresh service** before listing. Include the receipt — it shows buyers the car is maintained.",
  "🤝 Be **transparent** about any issues. Honesty builds trust and avoids disputes after sale."
];

// ─── GREETINGS ──────────────────────────────────────────────
const greetings = [
  "Hello! 👋 I'm your **Car Assistant** powered by CarScout AI!\n\nI know everything about **60+ car models** across **10 major brands**. Ask me:\n\n🚗 About any car model\n⚡ Compare any two cars\n⛽ Fuel type guidance\n🛒 Buying tips\n💰 Selling tips\n💵 Budget recommendations\n🛡️ Safety features\n\nWhat would you like to know? 🤔",
  "Hey there! 🚗 Welcome to CarScout's AI assistant!\n\nI have detailed info on **all popular Indian car models** — from Maruti WagonR to BMW X5!\n\nTry asking me things like:\n• \"Tell me about Creta\"\n• \"Compare Nexon vs Venue\"\n• \"Best car under 10 lakhs\"\n• \"Petrol or diesel?\"\n\nLet's get started! 🏁"
];

const farewells = [
  "Goodbye! 👋 Hope I helped with your car journey. CarScout is always here when you need advice! 🚗✨",
  "See you later! 🏁 Remember — whether buying or selling, CarScout has you covered. Drive safe! 🛡️"
];

const thanksReplies = [
  "You're welcome! 😊 Glad I could help. Feel free to ask more car questions anytime!\n\n💡 **Quick tip:** You can also ask me to compare any two cars head-to-head!",
  "Happy to help! 🚗 Is there any other car model you'd like to know about? I cover 60+ models across 10 brands!"
];

// ═══════════════════════════════════════════════════════════
//  MAIN RESPONSE GENERATOR
// ═══════════════════════════════════════════════════════════
function generateResponse(message) {
  const msg = message.toLowerCase().trim();

  // ─── Greetings ────────────────────────────────────
  if (/^(hi|hello|hey|namaste|good morning|good evening|hola|sup|yo|hii|hiii)\b/.test(msg)) {
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  // ─── Farewells ────────────────────────────────────
  if (/^(bye|goodbye|see you|later|thanks bye|ok bye|tata|good night)\b/.test(msg)) {
    return farewells[Math.floor(Math.random() * farewells.length)];
  }

  // ─── Thanks ───────────────────────────────────────
  if (/\b(thank|thanks|thankyou|thank you|thx|ty|appreciated)\b/.test(msg)) {
    return thanksReplies[Math.floor(Math.random() * thanksReplies.length)];
  }

  // ─── COMPARISON (check first — highest priority) ──
  if (/\b(vs|versus|compare|comparison|or|better|which)\b/.test(msg)) {
    const cars = findTwoCars(msg);
    if (cars && cars.length === 2) {
      const result = generateComparison(cars[0], cars[1]);
      if (result) return result;
    }

    // Show comparison menu if intent detected but no cars found
    if (/\b(compare|comparison|vs|versus)\b/.test(msg)) {
      return "⚡ **Car Comparisons**\n\nI can compare **any two cars** from my database of 60+ models! Just type something like:\n\n" +
        "• \"Creta vs Seltos\"\n• \"Nexon vs Brezza\"\n• \"Swift vs i20\"\n• \"Fortuner vs XUV700\"\n• \"City vs Verna\"\n• \"BMW X1 vs Audi Q3\"\n• \"Harrier vs Creta\"\n• \"Punch vs Exter\"\n\n🚗 Which cars would you like me to compare?";
    }
  }

  // ─── SPECIFIC CAR MODEL QUERY ─────────────────────
  const carKey = findCarKey(msg);
  if (carKey && carDatabase[carKey]) {
    const c = carDatabase[carKey];
    let response = `\n🚗 **${c.brand} ${c.model}** — ${c.type}\n\n`;
    response += `┌─────────────────────────────────────┐\n`;
    response += `│  📋 COMPLETE SPECIFICATIONS         │\n`;
    response += `└─────────────────────────────────────┘\n\n`;
    response += `💰 **Price:** ${c.price}\n`;
    response += `⛽ **Mileage:** ${c.mileage}\n`;
    response += `🔧 **Engine:** ${c.engine}\n`;
    response += `⚙️ **Transmission:** ${c.transmission}\n`;
    response += `🛢️ **Fuel Options:** ${c.fuel}\n`;
    response += `🪑 **Seating:** ${c.seating}-seater\n`;
    response += `🧳 **Boot:** ${c.boot}\n`;
    response += `🛡️ **Safety:** ${c.safety}\n`;
    response += `⭐ **NCAP Rating:** ${c.ncap}\n\n`;
    response += `✅ **Pros:** ${c.pros.join(" • ")}\n\n`;
    response += `❌ **Cons:** ${c.cons.join(" • ")}\n\n`;
    response += `🎯 **Best For:** ${c.best_for}\n\n`;
    response += `⚔️ **Rivals:** ${c.rivals.join(", ")}\n\n`;
    response += `🏆 **Verdict:** ${c.verdict}`;
    return response;
  }

  // ─── BRAND QUERY ──────────────────────────────────
  for (const [brand, info] of Object.entries(brandInfo)) {
    if (msg.includes(brand) || (brand === "maruti" && msg.includes("suzuki"))) {
      let response = `\n🏭 **${brand.charAt(0).toUpperCase() + brand.slice(1)}** ${info.country}\n`;
      response += `*"${info.tagline}"*\n\n`;
      response += `💪 **Strengths:** ${info.strengths}\n\n`;
      response += `🚗 **Available Models:**\n`;
      info.models.forEach(m => { response += `• ${m}\n`; });
      response += `\n💡 Ask me about any specific model for detailed specs, pricing, and verdict!`;
      return response;
    }
  }

  // ─── FUEL TYPE ────────────────────────────────────
  if (/\b(fuel|petrol|diesel|electric|ev|cng|hybrid)\b/.test(msg)) {
    if (msg.includes("petrol") && (msg.includes("diesel") || msg.includes("or"))) {
      return `${fuelGuide.petrol}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━\n\n${fuelGuide.diesel}\n\n💡 **Rule of thumb:** If you drive 50+ km/day, go diesel. Under 40 km/day? Petrol wins.`;
    }
    if (msg.includes("petrol")) return fuelGuide.petrol;
    if (msg.includes("diesel")) return fuelGuide.diesel;
    if (msg.includes("electric") || msg.includes("ev")) return fuelGuide.electric;
    if (msg.includes("cng")) return fuelGuide.cng;
    if (msg.includes("hybrid")) return fuelGuide.hybrid;
    return `⛽ **Fuel Type Guide**\n\nI can help you choose the right fuel type!\n\n• **Petrol** — Best for city 🏙️\n• **Diesel** — Best for highways 🛣️\n• **Electric** — Cheapest running cost ⚡\n• **CNG** — Best for high daily use 💨\n• **Hybrid** — Best of both worlds 🔄\n\nWhich fuel type interests you?`;
  }

  // ─── BUYING TIPS ──────────────────────────────────
  if (/\b(buy|buying|purchase|second hand|used car|pre-owned|inspect|check|tips for buy)\b/.test(msg)) {
    const selected = buyingTips.sort(() => 0.5 - Math.random()).slice(0, 4);
    return `🛒 **Expert Buying Tips**\n\n${selected.join("\n\n")}\n\n📌 Want more tips? Just ask! I have ${buyingTips.length} expert recommendations.`;
  }

  // ─── SELLING TIPS ─────────────────────────────────
  if (/\b(sell|selling|list|listing|advertise|price my car|how to sell)\b/.test(msg)) {
    const selected = sellingTips.sort(() => 0.5 - Math.random()).slice(0, 4);
    return `💰 **Expert Selling Tips**\n\n${selected.join("\n\n")}\n\n📌 Want more tips? Just ask! I have ${sellingTips.length} expert recommendations.`;
  }

  // ─── BUDGET / PRICE QUERIES ───────────────────────
  if (/\b(price|budget|cost|afford|lakh|cheap|expensive|range|worth|under|below)\b/.test(msg)) {
    if (/\b(under 5|below 5|cheap|budget|affordable|3|4|5 lakh)\b/.test(msg)) {
      return `💵 **Best Cars Under ₹5 Lakh**\n\n• **Maruti Alto K10** — ₹3.9L+ | 25 km/l | Best for first car\n• **Maruti S-Presso** — ₹4.3L+ | 25 km/l | Mini SUV styling\n• **Renault Kwid** — ₹4.7L+ | 22 km/l | SUV-inspired looks\n\n💡 Also check used cars on CarScout — you can find Swift, i20, and Venue under ₹5L!`;
    }
    if (/\b(5.*10|under 10|below 10|6|7|8|9 lakh|mid range)\b/.test(msg)) {
      return `💵 **Best Cars ₹5-10 Lakh**\n\n🏆 **Hatchbacks:**\n• Maruti Swift — ₹6.5L+ | Fun to drive\n• Hyundai i20 — ₹7L+ | Most features\n• Tata Altroz — ₹6.6L+ | Safest (5-star)\n\n🏆 **Sub-4m SUVs:**\n• Tata Punch — ₹6L+ | 5-star safety\n• Hyundai Exter — ₹6L+ | Modern tech\n• Maruti Fronx — ₹7.5L+ | Sporty looks\n\n🏆 **Sedans:**\n• Maruti Dzire — ₹6.8L+ | Best efficiency\n• Hyundai Aura — ₹6.5L+ | CNG option\n\n💡 This segment offers the **best value-for-money**!`;
    }
    if (/\b(10.*20|under 20|below 20|10|12|15|premium)\b/.test(msg)) {
      return `💵 **Best Cars ₹10-20 Lakh**\n\n🏆 **Compact SUVs:**\n• Hyundai Creta — ₹11L+ | Best seller\n• Kia Seltos — ₹10.9L+ | Sporty choice\n• Tata Harrier — ₹14.9L+ | Head-turner\n\n🏆 **Sub-4m SUVs (loaded):**\n• Tata Nexon — ₹8L+ | Safest sub-4m\n• Kia Sonet — ₹7.9L+ | Most features\n\n🏆 **Sedans:**\n• Honda City — ₹11.7L+ | Best to drive\n• Hyundai Verna — ₹11L+ | ADAS features\n\n🏆 **7-Seaters:**\n• Maruti Ertiga — ₹8.6L+ | Best value\n• Kia Carens — ₹10.5L+ | Feature loaded`;
    }
    if (/\b(20|25|30|luxury|expensive|high end|above 20|over 20)\b/.test(msg)) {
      return `💵 **Best Cars Above ₹20 Lakh**\n\n🏆 **Premium SUVs:**\n• Mahindra XUV700 — ₹13.9L+ | Most features/rupee\n• Toyota Fortuner — ₹33L+ | King of resale\n• Tata Safari — ₹15.5L+ | ADAS + 7 seats\n\n🏆 **Luxury Entry:**\n• Audi A4 — ₹43.5L+ | Most affordable luxury\n• BMW X1 — ₹45.9L+ | Best driving SUV\n• Mercedes GLA — ₹50.5L+ | Prestige badge\n\n⚠️ **Remember:** Budget for higher maintenance costs with luxury brands!`;
    }
    return `💰 **Price Guide**\n\nWhat's your budget range?\n\n• 💚 **Under ₹5L** — Entry-level options\n• 💙 **₹5-10L** — Best value segment\n• 💜 **₹10-20L** — Premium mainstream\n• ✨ **₹20L+** — Premium & Luxury\n\nTell me your budget and I'll recommend the best cars! 🎯`;
  }

  // ─── MILEAGE ──────────────────────────────────────
  if (/\b(mileage|km\/l|kmpl|fuel efficiency|fuel economy|average)\b/.test(msg)) {
    return `📊 **Mileage Guide**\n\n🏆 **Best Mileage Cars by Segment:**\n\n⛽ **Petrol Hatchbacks:** Maruti Swift (25 km/l), WagonR (25 km/l)\n⛽ **Diesel SUVs:** Hyundai Venue Diesel (23 km/l), Nexon Diesel (24 km/l)\n🔋 **Hybrids:** Toyota Hyryder (28 km/l!), Honda City Hybrid (27 km/l)\n💨 **CNG:** WagonR CNG (34 km/kg), Tiago CNG (28 km/kg)\n\n📌 **Used Car Mileage Check:**\n• Ideal: Under 50,000 km for 5-year car\n• Normal: 10,000-15,000 km/year\n• High: Over 80,000 km (inspect carefully)\n\n💡 Ask me about any specific car's mileage!`;
  }

  // ─── SAFETY ───────────────────────────────────────
  if (/\b(safe|safety|airbag|ncap|crash|rating|secure)\b/.test(msg)) {
    return `🛡️ **Car Safety Guide**\n\n🏆 **5-Star Safe Cars (Global NCAP):**\n• Tata Punch ⭐⭐⭐⭐⭐\n• Tata Nexon ⭐⭐⭐⭐⭐\n• Tata Harrier ⭐⭐⭐⭐⭐\n• Tata Safari ⭐⭐⭐⭐⭐\n• Mahindra XUV700 ⭐⭐⭐⭐⭐\n• Mahindra XUV300 ⭐⭐⭐⭐⭐\n• Mahindra Scorpio N ⭐⭐⭐⭐⭐\n• Hyundai Creta ⭐⭐⭐⭐⭐\n\n🔑 **Must-Have Safety Features:**\n1. 6+ Airbags\n2. ESC (Electronic Stability Control)\n3. ISOFIX child seat mounts\n4. ABS with EBD\n5. ADAS (Advanced Driver Assistance)\n\n💡 **Tip:** Tata and Mahindra lead safety in India!`;
  }

  // ─── INSURANCE ────────────────────────────────────
  if (/\b(insurance|insure|coverage|policy|third party|comprehensive)\b/.test(msg)) {
    return `🛡️ **Car Insurance Guide**\n\n📋 **Types:**\n• **Comprehensive** — Covers own damage + third party (Recommended ✅)\n• **Third-Party** — Only covers damage to others (Mandatory, basic)\n\n💡 **Tips:**\n1. Transfer insurance within 14 days of buying used car\n2. NCB (No Claim Bonus) saves 20-50% on premiums\n3. Add **Zero Depreciation** add-on for cars under 5 years\n4. **Roadside Assistance** add-on costs just ₹500-1,000/year\n5. Compare quotes on Policybazaar, Acko, Digit\n\n💰 **Rough Premiums (Comprehensive):**\n• Hatchback: ₹8,000-15,000/year\n• Sedan: ₹12,000-25,000/year\n• SUV: ₹15,000-35,000/year`;
  }

  // ─── LOAN/FINANCE ─────────────────────────────────
  if (/\b(loan|finance|emi|interest|down payment|bank)\b/.test(msg)) {
    return `🏦 **Car Loan Guide**\n\n📊 **Used Car Loan Rates (2024-25):**\n• SBI: 9.10% – 12.50%\n• HDFC: 8.75% – 14.00%\n• ICICI: 9.00% – 13.50%\n• Axis: 9.25% – 15.00%\n\n📋 **Key Facts:**\n• **Down payment:** 15-25% of car value\n• **Tenure:** 1-5 years for used cars\n• **EMI Rule:** Keep EMI under 20% of monthly income\n\n💡 **EMI Examples (₹10L loan, 5 years):**\n• At 10%: ~₹21,247/month\n• At 12%: ~₹22,244/month\n• At 14%: ~₹23,268/month\n\n📝 **Documents:** ID proof, address proof, income proof, bank statements (6 months), car documents`;
  }

  // ─── RTO/REGISTRATION ─────────────────────────────
  if (/\b(registration|rto|transfer|rc|noc|document|paper|ownership)\b/.test(msg)) {
    return `📝 **RTO & Document Guide**\n\n📋 **Documents needed for used car purchase:**\n1. ✅ Original RC (Registration Certificate)\n2. ✅ Valid Insurance\n3. ✅ PUC Certificate\n4. ✅ NOC from financer (if car was on loan)\n5. ✅ Form 28, 29, 30 for transfer\n6. ✅ Seller's ID & address proof\n\n🔄 **Transfer Process:**\n• Apply at RTO within 30 days\n• Fees: ₹500-2,000 (varies by state)\n• Timeline: 7-15 working days\n• Inter-state: Need NOC from original state\n\n⚠️ **Check on Vahan portal** (vahan.parivahan.gov.in) for pending challans and hypothecation details!`;
  }

  // ─── TEST DRIVE ───────────────────────────────────
  if (/\b(test drive|test-drive|testdrive|drive test|try|demo)\b/.test(msg)) {
    return `🏎️ **Test Drive Checklist**\n\n**Before Starting:**\n• Walk around the car, check for dents/scratches\n• Open/close all doors, boot, and bonnet\n\n**During Drive (20+ minutes):**\n1. 🔑 Engine start — smooth, no rattling\n2. ⚙️ Gear shifts — smooth transitions, no grinding\n3. 🛑 Brakes — responsive, no pulling\n4. 🎯 Steering — no vibrations or play\n5. ❄️ AC — both sides cooling properly\n6. 🔊 Listen for unusual sounds over bumps\n7. 💡 Test ALL electricals — windows, mirrors, lights\n8. 📱 Infotainment — Bluetooth, Apple CarPlay, cameras\n\n💡 **Pro tip:** Drive on speed breakers and rough roads to test suspension!\n\n📅 Book test drives directly on CarScout!`;
  }

  // ─── CARSCOUT PLATFORM ────────────────────────────
  if (/\b(carscout|car scout|platform|website|how to use|how does|feature|app)\b/.test(msg)) {
    return `🌟 **Welcome to CarScout!**\n\n**For Buyers 🛒:**\n• Browse verified car listings with photos\n• Search by brand, model, price, fuel type\n• Make offers directly to sellers\n• Book test drives online\n• Chat with this AI assistant anytime!\n\n**For Sellers 💰:**\n• List your car with guided wizard\n• Add up to 5 high-quality photos\n• Receive and manage buyer offers\n• Handle test drive requests\n• Track all your listings\n\n**For Both 🤝:**\n• Clean, modern interface\n• Real-time notifications\n• Secure messaging\n• Profile management\n\n💡 Need help with anything specific? Just ask!`;
  }

  // ─── LIST ALL CARS ────────────────────────────────
  if (/\b(all cars|all models|list cars|show cars|available cars|what cars|which cars|car list)\b/.test(msg)) {
    let response = "🚗 **All Cars in My Database (60+ Models)**\n\n";
    for (const [brand, info] of Object.entries(brandInfo)) {
      response += `**${brand.charAt(0).toUpperCase() + brand.slice(1)}** ${info.country}\n`;
      info.models.forEach(m => { response += `  • ${m}\n`; });
      response += "\n";
    }
    response += "💡 Ask me about any model for **detailed specs, pricing, pros/cons & verdict!**";
    return response;
  }

  // ─── BEST CAR QUERIES ─────────────────────────────
  if (/\b(best|top|recommend|suggest|which car|good car)\b/.test(msg)) {
    if (/\b(suv|suvs)\b/.test(msg)) {
      return `🏆 **Best SUVs in India (2024-25)**\n\n**Sub-4m SUVs:**\n1. Tata Nexon — Safest ⭐⭐⭐⭐⭐\n2. Hyundai Venue — Most features\n3. Kia Sonet — Best equipped\n4. Maruti Brezza — Best resale\n\n**Mid-Size SUVs:**\n1. Hyundai Creta — Best seller\n2. Kia Seltos — Sportiest\n3. Tata Harrier — Best looks\n4. Mahindra XUV700 — Best value\n\n**Full-Size SUVs:**\n1. Toyota Fortuner — King of resale\n2. Mahindra Scorpio N — Most powerful\n\n💡 Ask about any specific SUV for detailed specs!`;
    }
    if (/\b(sedan|sedans)\b/.test(msg)) {
      return `🏆 **Best Sedans in India (2024-25)**\n\n**Sub-4m Sedans:**\n1. Maruti Dzire — Best efficiency\n2. Honda Amaze — Best CVT\n3. Hyundai Aura — Best CNG\n\n**Mid-Size Sedans:**\n1. Honda City — Best driving\n2. Hyundai Verna — Most tech/ADAS\n3. Skoda Slavia — Best handling\n\n**Luxury Sedans:**\n1. BMW 3 Series — Best dynamics\n2. Mercedes C-Class — Best comfort\n3. Audi A4 — Best value luxury\n\n💡 Ask about any specific sedan for detailed info!`;
    }
    if (/\b(hatchback|hatch)\b/.test(msg)) {
      return `🏆 **Best Hatchbacks in India (2024-25)**\n\n1. **Maruti Swift** — Fun + efficient king\n2. **Hyundai i20** — Most premium & features\n3. **Tata Altroz** — Safest (5-star NCAP)\n4. **Maruti Baleno** — Most spacious\n5. **Toyota Glanza** — Toyota warranty + Baleno genes\n6. **Tata Tiago** — Best budget option\n7. **Maruti WagonR** — Best space & CNG\n\n💡 Ask about any specific hatchback for detailed info!`;
    }
    if (/\b(family|families|7 seat|7-seat|seven seat)\b/.test(msg)) {
      return `🏆 **Best Family Cars / 7-Seaters**\n\n**Budget (Under ₹15L):**\n1. Maruti Ertiga — Best value 7-seater\n2. Kia Carens — Most features at price\n\n**Premium (₹15-25L):**\n1. Hyundai Alcazar — Premium + ADAS\n2. Tata Safari — Safest 7-seater\n3. Mahindra Scorpio N — Most powerful\n\n**Luxury (₹25L+):**\n1. Toyota Innova Hycross — Legendary reliability\n\n💡 Ask about any specific model for full details!`;
    }
    return `🏆 **Best Car Picks by Category**\n\n• 🛡️ **Safest:** Tata Nexon, Punch, XUV700\n• ⛽ **Most Efficient:** Toyota Hyryder Hybrid (28 km/l)\n• 💰 **Best Value:** Maruti Swift, Tata Punch\n• 🚗 **Best SUV:** Hyundai Creta, Tata Harrier\n• 🏎️ **Best to Drive:** Honda City, BMW 3 Series\n• 👨‍👩‍👧‍👦 **Best Family:** Toyota Innova, Maruti Ertiga\n• 📈 **Best Resale:** Maruti Swift, Toyota Fortuner\n• ⭐ **Best Luxury:** Mercedes C-Class, BMW X3\n\n💡 Tell me your preference and I'll narrow it down!`;
  }

  // ─── FALLBACK ─────────────────────────────────────
  return `I appreciate your question! 😊 I'm your **CarScout AI** with knowledge of **60+ car models**.\n\nHere's what I can help with:\n\n🚗 **Car Info** — "Tell me about Creta" or "Nexon specs"\n⚡ **Compare** — "Creta vs Seltos" or "Swift vs i20"\n⛽ **Fuel Guide** — "Petrol or diesel?"\n🛒 **Buying Tips** — "Tips for buying used car"\n💰 **Selling Tips** — "How to sell my car"\n💵 **Budget** — "Best car under 10 lakhs"\n🛡️ **Safety** — "Safest cars in India"\n🏦 **Loans** — "Car loan EMI info"\n📋 **All Models** — "Show all cars"\n\nTry asking about any car model! 🤔`;
}

// ─── API HANDLER ────────────────────────────────────────────
const chat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({ success: false, error: "Message is required" });
    }

    // Natural delay for realistic feel
    await new Promise(resolve => setTimeout(resolve, 400 + Math.random() * 600));

    const reply = generateResponse(message);

    res.status(200).json({ success: true, reply });
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({
      success: false,
      reply: "Oops! I'm having a small issue. Please try again in a moment. 🔧"
    });
  }
};

module.exports = { chat };
