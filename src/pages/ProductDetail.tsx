import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Star, Heart, Minus, Plus, Truck, CreditCard, Headphones, RefreshCcw,
  CheckCircle2, Facebook, Twitter, Linkedin, Search, ShoppingCart, User, Phone
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import monsteraImg from "@/assets/product-monstera.jpg";
import birdsnestImg from "@/assets/product-birdsnest.jpg";
import peperomiaImg from "@/assets/product-peperomia.jpg";
import pepperImg from "@/assets/product-pepper.jpg";
import sansevieriaImg from "@/assets/product-sansevieria.jpg";

const sizes = ["Small", "Medium", "Large"];
const materials = ["Ceramic", "Plastic", "Wood", "Metal"];
const colors = [
  { name: "Grey", class: "bg-gray-400" },
  { name: "Pink", class: "bg-pink-300" },
  { name: "Black", class: "bg-gray-900" },
  { name: "Brown", class: "bg-amber-700" },
];

const thumbnails = [monsteraImg, birdsnestImg, peperomiaImg, pepperImg];

const relatedProducts = [
  { img: birdsnestImg, title: "Birds Nest", rating: 4.6, price: 22, old: 44, badge: "50% off", category: "Indoor Plant" },
  { img: peperomiaImg, title: "Watermelon Peperomia", rating: 4.8, price: 20, old: 25, badge: "20% off", category: "Indoor Plant" },
  { img: pepperImg, title: "Pepper Plant", rating: 4.9, price: 12, old: 16, badge: "25% off", category: "Indoor Plant" },
  { img: sansevieriaImg, title: "Sansevieria", rating: 4.7, price: 25, old: null, badge: null, category: "Indoor Plant" },
];

const descriptionBullets = [
  "100% Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Ut enim ad minima veniam nostrum exercitationem",
  "At vero eos et accusamus et iusto odio dignissimos",
  "Duis aute irure dolor in reprehenderit in voluptate",
  "One blandit luctus et dis volutpat tempus",
];

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState("Small");
  const [selectedMaterial, setSelectedMaterial] = useState("Ceramic");
  const [selectedColor, setSelectedColor] = useState("Grey");
  const [quantity, setQuantity] = useState(6);
  const [mainImage, setMainImage] = useState(0);
  const [activeTab, setActiveTab] = useState<"description" | "info" | "review">("description");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Promotional Bar */}
      <div className="bg-primary-dark text-primary-foreground text-xs py-2">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Phone className="h-3 w-3" />
            <span>Call us: +123-456-789</span>
          </div>
          <span className="hidden sm:inline">Sign up and GET 50% OFF for your first order. <Link to="/contact" className="underline font-semibold">Sign up now</Link></span>
          <div className="flex items-center gap-3">
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="hover:opacity-80 transition-opacity"><Icon className="h-3.5 w-3.5" /></a>
            ))}
          </div>
        </div>
      </div>

      <Navbar />

      {/* Breadcrumb Hero */}
      <section className="pt-24 pb-8 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Shop</h1>
          <p className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            {" / "}
            <span className="hover:text-primary transition-colors">Plants</span>
            {" / "}
            <span className="text-foreground">Product Details</span>
          </p>
        </div>
      </section>

      {/* Product Gallery + Details */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
            {/* Gallery */}
            <div>
              <div className="bg-muted rounded-2xl p-6 flex items-center justify-center mb-4 aspect-square max-h-[520px]">
                <img
                  src={thumbnails[mainImage]}
                  alt="Product"
                  className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
                  width={800}
                  height={800}
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {thumbnails.map((thumb, i) => (
                  <button
                    key={i}
                    onClick={() => setMainImage(i)}
                    className={`bg-muted rounded-xl p-2 aspect-square flex items-center justify-center border-2 transition-all duration-200 ${
                      mainImage === i ? "border-primary" : "border-transparent hover:border-border"
                    }`}
                  >
                    <img src={thumb} alt="" className="max-h-full max-w-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Indoor Plant</p>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Monstera deliciosa</h2>
                <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full">In Stock</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className={`h-4 w-4 ${s <= 4 ? "text-yellow-400 fill-yellow-400" : "text-border"}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.0 (245 Reviews)</span>
              </div>
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-2xl font-bold text-foreground">$12.00</span>
                <span className="text-lg text-muted-foreground line-through">$25.00</span>
              </div>
              <p className="text-sm text-muted-foreground leading-[1.7] mb-6 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
              </p>

              {/* Plant Size */}
              <div className="mb-5">
                <p className="text-sm font-semibold text-foreground mb-2">Plant Size</p>
                <div className="flex gap-2">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                        selectedSize === s
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-foreground hover:border-primary"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pot Material */}
              <div className="mb-5">
                <p className="text-sm font-semibold text-foreground mb-2">Pot Material</p>
                <div className="flex gap-2">
                  {materials.map((m) => (
                    <button
                      key={m}
                      onClick={() => setSelectedMaterial(m)}
                      className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                        selectedMaterial === m
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-foreground hover:border-primary"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pot Color */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">Pot Color : {selectedColor}</p>
                <div className="flex gap-2">
                  {colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-8 h-8 rounded-full ${c.class} border-2 transition-all ${
                        selectedColor === c.name ? "border-primary ring-2 ring-primary/30" : "border-transparent"
                      }`}
                      aria-label={c.name}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity + CTA */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="flex items-center border border-border rounded-lg overflow-hidden">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2.5 hover:bg-accent transition-colors">
                    <Minus className="h-4 w-4 text-foreground" />
                  </button>
                  <span className="px-5 py-2.5 text-sm font-medium text-foreground min-w-[48px] text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2.5 hover:bg-accent transition-colors">
                    <Plus className="h-4 w-4 text-foreground" />
                  </button>
                </div>
                <button className="px-7 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors">
                  Add To Cart
                </button>
                <button className="px-7 py-2.5 border-2 border-primary text-primary text-sm font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                  Buy Now
                </button>
                <button className="w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                  <Heart className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>

              {/* Meta */}
              <div className="space-y-1.5 text-sm text-muted-foreground border-t border-border pt-5">
                <p><span className="font-medium text-foreground">SKU:</span> PLTC0761ABC</p>
                <p><span className="font-medium text-foreground">Tags:</span> Indoor Plant, Monstera deliciosa, Plants</p>
                <div className="flex items-center gap-3 pt-1">
                  <span className="font-medium text-foreground">Share:</span>
                  {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-8 border-b border-border mb-8">
            {([
              { key: "description", label: "Description" },
              { key: "info", label: "Additional Information" },
              { key: "review", label: "Review" },
            ] as const).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-3 text-sm font-medium transition-colors relative ${
                  activeTab === tab.key ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                  activeTab === tab.key ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`} />
              </button>
            ))}
          </div>

          <div className="min-h-[200px]">
            {activeTab === "description" && (
              <div className="max-w-3xl animate-fade-in">
                <p className="text-muted-foreground leading-[1.8] mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-muted-foreground leading-[1.8] mb-6">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <ul className="space-y-3">
                  {descriptionBullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === "info" && (
              <div className="max-w-2xl animate-fade-in">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-border">
                    {[
                      ["Weight", "0.5 kg"],
                      ["Dimensions", "20 × 15 × 40 cm"],
                      ["Plant Type", "Tropical"],
                      ["Light Requirements", "Indirect sunlight"],
                      ["Water Frequency", "Weekly"],
                      ["Pot Material", "Ceramic"],
                    ].map(([k, v]) => (
                      <tr key={k}>
                        <td className="py-3 font-medium text-foreground w-48">{k}</td>
                        <td className="py-3 text-muted-foreground">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === "review" && (
              <div className="max-w-2xl animate-fade-in">
                <p className="text-muted-foreground mb-6">245 reviews for Monstera deliciosa</p>
                {[
                  { name: "Sarah K.", date: "March 12, 2026", text: "Beautiful plant! Arrived in perfect condition. The pot quality exceeded my expectations.", rating: 5 },
                  { name: "James L.", date: "March 8, 2026", text: "Great value for money. The plant was healthy and vibrant. Will order again.", rating: 4 },
                  { name: "Amina R.", date: "Feb 28, 2026", text: "Love how it brightens up my room. Packaging was secure and delivery was fast.", rating: 5 },
                ].map((r, i) => (
                  <div key={i} className="border-b border-border py-5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-accent-foreground">
                          {r.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{r.name}</p>
                          <p className="text-xs text-muted-foreground">{r.date}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className={`h-3.5 w-3.5 ${s <= r.rating ? "text-yellow-400 fill-yellow-400" : "text-border"}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm text-muted-foreground mb-1">Related Products</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Explore Related Products</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {relatedProducts.map((p, i) => (
              <div
                key={i}
                className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group relative"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {p.badge && (
                  <span className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                    {p.badge}
                  </span>
                )}
                <button
                  className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur flex items-center justify-center transition-all duration-300 ${
                    hoveredCard === i ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                >
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </button>
                <div className="bg-muted p-4 aspect-square flex items-center justify-center overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted-foreground mb-0.5">{p.category}</p>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{p.title}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className={`h-3 w-3 ${s <= Math.floor(p.rating) ? "text-yellow-400 fill-yellow-400" : "text-border"}`} />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{p.rating}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-bold text-foreground">${p.price.toFixed(2)}</span>
                    {p.old && <span className="text-xs text-muted-foreground line-through">${p.old.toFixed(2)}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Strip */}
      <section className="py-10 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: "Free Shipping", desc: "On orders over $50" },
              { icon: CreditCard, title: "Flexible Payment", desc: "Pay with ease" },
              { icon: Headphones, title: "24×7 Support", desc: "Dedicated help" },
              { icon: RefreshCcw, title: "Easy Returns", desc: "30-day policy" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{title}</p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
