import tensUnitImg from "@/assets/product-tens-unit.jpg";
import resistanceBandsImg from "@/assets/product-resistance-bands.jpg";
import coldTherapyImg from "@/assets/product-cold-therapy.jpg";
import orthoPillowImg from "@/assets/product-ortho-pillow.jpg";
import exerciseBallImg from "@/assets/product-exercise-ball.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number | null;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  longDescription: string[];
  image: string;
  gallery: string[];
  badge: string | null;
  sku: string;
  tags: string[];
  powerSources?: string[];
  channels?: string[];
  accentColors?: { name: string; class: string }[];
  specs?: [string, string][];
  bullets: string[];
}

const productsData: Product[] = [
  {
    id: "tens-unit",
    name: "Advanced TENS Unit for Pain Management",
    category: "Electrotherapy Device",
    price: 75,
    originalPrice: 99,
    rating: 4.8,
    reviewCount: 312,
    shortDescription:
      "Professional-grade transcutaneous electrical nerve stimulation unit designed for effective pain management. Ideal for physiotherapy clinics and home rehabilitation.",
    longDescription: [
      "Our Advanced TENS Unit delivers targeted electrical nerve stimulation to provide effective, drug-free pain relief. Designed in collaboration with physiotherapy professionals, this device is suitable for managing chronic pain, post-surgical recovery, and sports injuries.",
      "Featuring multiple pre-set therapy programs and fully adjustable intensity levels, the unit adapts to individual patient needs. The ergonomic design and intuitive controls make it accessible for both clinical practitioners and home users.",
    ],
    image: tensUnitImg,
    gallery: [tensUnitImg, coldTherapyImg, resistanceBandsImg, orthoPillowImg],
    badge: "25% off",
    sku: "TENS-ADV-4CH",
    tags: ["Pain Relief", "Rehab", "Electrotherapy"],
    powerSources: ["Battery", "Rechargeable", "Mains"],
    channels: ["Dual Channel", "4-Channel"],
    accentColors: [
      { name: "White", class: "bg-white border border-border" },
      { name: "Silver", class: "bg-gray-300" },
      { name: "Medical Blue", class: "bg-primary" },
    ],
    specs: [
      ["Weight", "0.35 kg"],
      ["Dimensions", "12 × 8 × 3 cm"],
      ["Power Source", "Rechargeable Li-ion Battery"],
      ["Channels", "Dual / 4-Channel (selectable)"],
      ["Waveform", "Symmetrical Biphasic"],
      ["Frequency Range", "1–150 Hz"],
      ["Pulse Width", "50–300 μs"],
      ["Warranty", "2 Years Manufacturer"],
    ],
    bullets: [
      "Clinically tested TENS technology for effective pain management",
      "Adjustable intensity levels suitable for various therapy needs",
      "Compact and portable design for home and clinic use",
      "Comes with reusable electrode pads and carrying case",
      "FDA-approved for safe, non-invasive pain relief",
    ],
  },
  {
    id: "resistance-bands",
    name: "Resistance Bands Set",
    category: "Rehab Equipment",
    price: 18,
    originalPrice: 28,
    rating: 4.6,
    reviewCount: 189,
    shortDescription:
      "Professional-grade latex resistance bands in five tension levels for progressive rehabilitation and strength training.",
    longDescription: [
      "Our Resistance Bands Set provides a versatile, portable solution for physiotherapy exercises, strength training, and flexibility work.",
      "Each set includes five colour-coded bands ranging from extra-light to extra-heavy resistance, suitable for patients at every stage of recovery.",
    ],
    image: resistanceBandsImg,
    gallery: [resistanceBandsImg, tensUnitImg, exerciseBallImg, orthoPillowImg],
    badge: "35% off",
    sku: "RB-SET-5",
    tags: ["Strength", "Rehab", "Flexibility"],
    specs: [
      ["Material", "Natural Latex"],
      ["Levels", "5 (Extra Light – Extra Heavy)"],
      ["Length", "1.5 m each"],
      ["Warranty", "1 Year"],
    ],
    bullets: [
      "Five resistance levels for progressive rehabilitation",
      "Durable natural latex construction",
      "Lightweight and portable for home or clinic",
      "Includes printed exercise guide",
      "Suitable for upper and lower body exercises",
    ],
  },
  {
    id: "cold-therapy-pack",
    name: "Cold Therapy Gel Pack",
    category: "Pain Relief",
    price: 15,
    originalPrice: 22,
    rating: 4.8,
    reviewCount: 245,
    shortDescription:
      "Reusable gel pack for targeted cold therapy, ideal for reducing inflammation and managing acute pain after injury.",
    longDescription: [
      "The Cold Therapy Gel Pack offers instant relief for acute injuries, post-operative swelling, and chronic pain conditions.",
      "Its flexible gel formula conforms to any body part, providing consistent cooling for up to 30 minutes per application.",
    ],
    image: coldTherapyImg,
    gallery: [coldTherapyImg, tensUnitImg, resistanceBandsImg, exerciseBallImg],
    badge: "30% off",
    sku: "CT-GEL-LG",
    tags: ["Pain Relief", "Recovery", "Cryotherapy"],
    specs: [
      ["Dimensions", "28 × 18 cm"],
      ["Material", "Medical-grade PVC"],
      ["Cooling Duration", "Up to 30 minutes"],
      ["Reusable", "Yes – freeze & reuse"],
    ],
    bullets: [
      "Medical-grade gel for consistent temperature",
      "Flexible design conforms to any body part",
      "Reusable — simply freeze and apply",
      "Includes soft fabric cover for comfort",
      "Ideal for post-surgery and sports injuries",
    ],
  },
  {
    id: "ortho-pillow",
    name: "Orthopedic Support Pillow",
    category: "Support",
    price: 45,
    originalPrice: 60,
    rating: 4.9,
    reviewCount: 178,
    shortDescription:
      "Ergonomic memory foam pillow designed to support proper cervical alignment during sleep and rest.",
    longDescription: [
      "Our Orthopedic Support Pillow is engineered with high-density memory foam to cradle the neck and head, promoting optimal spinal alignment.",
      "Recommended by physiotherapists for patients with cervical pain, tension headaches, and post-surgical neck recovery.",
    ],
    image: orthoPillowImg,
    gallery: [orthoPillowImg, tensUnitImg, coldTherapyImg, exerciseBallImg],
    badge: "25% off",
    sku: "OP-MF-STD",
    tags: ["Support", "Sleep", "Cervical"],
    specs: [
      ["Material", "High-density Memory Foam"],
      ["Dimensions", "60 × 35 × 12 cm"],
      ["Cover", "Removable & Washable"],
      ["Warranty", "3 Years"],
    ],
    bullets: [
      "High-density memory foam for lasting support",
      "Contoured design for cervical alignment",
      "Hypoallergenic removable cover",
      "Recommended by physiotherapists",
      "Suitable for back and side sleepers",
    ],
  },
  {
    id: "exercise-ball",
    name: "Anti-Burst Exercise Ball",
    category: "Rehab Equipment",
    price: 30,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 134,
    shortDescription:
      "Heavy-duty anti-burst exercise ball for core strengthening, balance training, and physiotherapy exercises.",
    longDescription: [
      "The Anti-Burst Exercise Ball is a clinic-grade stability ball designed for rehabilitation, core strengthening, and balance training.",
      "Its anti-burst technology ensures safe deflation under excessive load, making it ideal for clinical and home environments.",
    ],
    image: exerciseBallImg,
    gallery: [exerciseBallImg, resistanceBandsImg, tensUnitImg, coldTherapyImg],
    badge: null,
    sku: "EB-AB-65",
    tags: ["Core", "Balance", "Rehab"],
    specs: [
      ["Diameter", "65 cm"],
      ["Max Load", "300 kg"],
      ["Material", "Anti-burst PVC"],
      ["Includes", "Hand pump"],
    ],
    bullets: [
      "Anti-burst technology for safety",
      "Supports up to 300 kg",
      "Includes hand pump and plug",
      "Non-slip textured surface",
      "Ideal for core and balance exercises",
    ],
  },
  {
    id: "posture-corrector",
    name: "Adjustable Posture Corrector",
    category: "Support",
    price: 35,
    originalPrice: 50,
    rating: 4.5,
    reviewCount: 210,
    shortDescription:
      "Lightweight, adjustable posture corrector brace designed to retrain upper back and shoulder alignment.",
    longDescription: [
      "The Adjustable Posture Corrector gently pulls shoulders back to promote proper spinal alignment and reduce slouching.",
      "Made from breathable neoprene with adjustable straps, it can be worn discreetly under clothing during daily activities.",
    ],
    image: tensUnitImg,
    gallery: [tensUnitImg, orthoPillowImg, resistanceBandsImg, coldTherapyImg],
    badge: "30% off",
    sku: "PC-ADJ-UNI",
    tags: ["Posture", "Support", "Back"],
    specs: [
      ["Material", "Breathable Neoprene"],
      ["Sizes", "S / M / L / XL"],
      ["Adjustable", "Yes – dual strap"],
      ["Washable", "Hand wash only"],
    ],
    bullets: [
      "Breathable neoprene for all-day comfort",
      "Adjustable dual-strap design",
      "Unisex – fits S to XL",
      "Discreet under clothing",
      "Recommended for desk workers and students",
    ],
  },
  {
    id: "foam-roller",
    name: "High-Density Foam Roller",
    category: "Recovery",
    price: 22,
    originalPrice: 30,
    rating: 4.6,
    reviewCount: 156,
    shortDescription:
      "Professional-grade high-density foam roller for myofascial release, muscle recovery, and flexibility training.",
    longDescription: [
      "Our High-Density Foam Roller is designed for deep-tissue myofascial release and post-workout recovery.",
      "The textured surface targets trigger points effectively, while the high-density EVA foam maintains its shape over hundreds of uses.",
    ],
    image: exerciseBallImg,
    gallery: [exerciseBallImg, resistanceBandsImg, coldTherapyImg, tensUnitImg],
    badge: "27% off",
    sku: "FR-HD-45",
    tags: ["Recovery", "Flexibility", "Myofascial"],
    specs: [
      ["Length", "45 cm"],
      ["Diameter", "15 cm"],
      ["Material", "High-density EVA Foam"],
      ["Weight", "0.4 kg"],
    ],
    bullets: [
      "High-density EVA foam retains shape",
      "Textured surface for trigger point release",
      "Lightweight and portable",
      "Ideal for pre and post-workout use",
      "Suitable for all fitness levels",
    ],
  },
  {
    id: "ultrasound-therapy",
    name: "Portable Ultrasound Therapy Device",
    category: "Electrotherapy Device",
    price: 120,
    originalPrice: 160,
    rating: 4.9,
    reviewCount: 97,
    shortDescription:
      "Compact therapeutic ultrasound device for deep tissue heating, pain relief, and accelerating soft tissue recovery.",
    longDescription: [
      "The Portable Ultrasound Therapy Device delivers targeted therapeutic ultrasound waves for deep tissue heating and pain management.",
      "With adjustable frequency and intensity settings, it provides versatile treatment options for a wide range of musculoskeletal conditions.",
    ],
    image: coldTherapyImg,
    gallery: [coldTherapyImg, tensUnitImg, orthoPillowImg, resistanceBandsImg],
    badge: "25% off",
    sku: "US-PORT-1M",
    tags: ["Ultrasound", "Deep Tissue", "Recovery"],
    specs: [
      ["Frequency", "1 MHz / 3 MHz"],
      ["Power Output", "0.5 – 2.5 W/cm²"],
      ["Timer", "1–30 minutes"],
      ["Battery", "Rechargeable Li-ion"],
    ],
    bullets: [
      "Dual frequency: 1 MHz and 3 MHz",
      "Adjustable power output",
      "Portable rechargeable design",
      "LCD display with timer",
      "Includes ultrasound gel bottle",
    ],
  },
];

export default productsData;
