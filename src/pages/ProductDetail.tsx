import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  Star, Heart, Minus, Plus, Truck, ShieldCheck, Headphones,
  CheckCircle2, Facebook, Twitter, Linkedin, MessageCircle
} from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import productsData from "@/data/productsData";

const defaultPowerSources = ["Battery", "Rechargeable", "Mains"];
const defaultChannels = ["Dual Channel", "4-Channel"];
const defaultAccentColors = [
  { name: "White", class: "bg-white border border-border" },
  { name: "Silver", class: "bg-gray-300" },
  { name: "Medical Blue", class: "bg-primary" },
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = productsData.find((p) => p.id === id);

  const [selectedPower, setSelectedPower] = useState("Rechargeable");
  const [selectedChannel, setSelectedChannel] = useState("Dual Channel");
  const [selectedColor, setSelectedColor] = useState("White");
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(0);
  const [activeTab, setActiveTab] = useState<"description" | "specs" | "support">("description");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  if (!product) return <Navigate to="/products" replace />;

  const powerSources = product.powerSources ?? defaultPowerSources;
  const channels = product.channels ?? defaultChannels;
  const accentColors = product.accentColors ?? defaultAccentColors;
  const thumbnails = product.gallery;
  const specs = product.specs ?? [];

  const relatedProducts = productsData.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumbs */}
      <section className="pt-28 pb-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Device Catalog</h1>
          <p className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            {" / "}
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            {" / "}
            <span className="text-foreground">{product.name}</span>
          </p>
        </div>
      </section>

      {/* Product Gallery + Details */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-16">
            {/* Gallery */}
            <div className="flex flex-col">
              <div className="bg-muted rounded-2xl p-6 flex items-center justify-center aspect-square w-full">
                <img
                  src={thumbnails[mainImage]}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
                  width={800}
                  height={800}
                />
              </div>
              <div className="grid grid-cols-4 gap-3 mt-4">
                {thumbnails.map((thumb, i) => (
                  <button
                    key={i}
                    onClick={() => setMainImage(i)}
                    className={`bg-muted rounded-xl p-2 aspect-square flex items-center justify-center border-2 transition-all duration-200 ${
                      mainImage === i ? "border-primary" : "border-transparent hover:border-border"
                    }`}
                  >
                    <img src={thumb} alt="" className="max-h-full max-w-full object-contain" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-4 justify-center">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{product.category}</p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">{product.name}</h2>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs font-semibold bg-accent text-accent-foreground px-2.5 py-1 rounded-full">In Stock</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className={`h-4 w-4 ${s <= Math.floor(product.rating) ? "text-accent-foreground fill-accent-foreground" : "text-border"}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{product.rating} ({product.reviewCount} Reviews)</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold text-foreground">€{product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">€{product.originalPrice.toFixed(2)}</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-[1.7] max-w-md">{product.shortDescription}</p>

              {/* Power Source */}
              {powerSources.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Power Source</p>
                  <div className="flex flex-wrap gap-2">
                    {powerSources.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedPower(s)}
                        className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                          selectedPower === s
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border text-foreground hover:border-primary"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Channels */}
              {channels.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Channels</p>
                  <div className="flex flex-wrap gap-2">
                    {channels.map((c) => (
                      <button
                        key={c}
                        onClick={() => setSelectedChannel(c)}
                        className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                          selectedChannel === c
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border text-foreground hover:border-primary"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Accent Color */}
              {accentColors.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Accent Color: {selectedColor}</p>
                  <div className="flex gap-2">
                    {accentColors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`w-8 h-8 rounded-full ${c.class} transition-all ${
                          selectedColor === c.name ? "ring-2 ring-primary ring-offset-2" : ""
                        }`}
                        aria-label={c.name}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity + CTA */}
              <div className="flex flex-row flex-wrap items-center gap-3">
                <div className="flex items-center border border-border rounded-lg overflow-hidden">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2.5 hover:bg-accent transition-colors">
                    <Minus className="h-4 w-4 text-foreground" />
                  </button>
                  <span className="px-5 py-2.5 text-sm font-medium text-foreground min-w-[48px] text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2.5 hover:bg-accent transition-colors">
                    <Plus className="h-4 w-4 text-foreground" />
                  </button>
                </div>
                <button className="px-7 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                  Add to Cart
                </button>
                <button className="px-7 py-2.5 bg-accent text-accent-foreground text-sm font-semibold rounded-lg hover:bg-accent/80 transition-colors">
                  Purchase Now
                </button>
                <button className="w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                  <Heart className="h-5 w-5 text-accent-foreground" />
                </button>
              </div>

              {/* Meta */}
              <div className="space-y-1.5 text-sm text-muted-foreground border-t border-border pt-5">
                <p><span className="font-medium text-foreground">SKU:</span> {product.sku}</p>
                <p><span className="font-medium text-foreground">Tags:</span> {product.tags.join(", ")}</p>
                <div className="flex items-center gap-3 pt-1">
                  <span className="font-medium text-foreground">Share:</span>
                  {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
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
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-center gap-8 border-b border-border mb-8">
            {([
              { key: "description", label: "Product Description" },
              { key: "specs", label: "Specs & Usage" },
              { key: "support", label: "Support & Manuals" },
            ] as const).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-3 text-sm font-medium transition-colors relative ${
                  activeTab === tab.key ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                  activeTab === tab.key ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`} />
              </button>
            ))}
          </div>

          <div className="min-h-[200px] w-full">
            {activeTab === "description" && (
              <div className="max-w-3xl animate-fade-in">
                {product.longDescription.map((para, i) => (
                  <p key={i} className="text-muted-foreground leading-[1.8] mb-4">{para}</p>
                ))}
                <ul className="space-y-3">
                  {product.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === "specs" && (
              <div className="max-w-2xl animate-fade-in">
                {specs.length > 0 ? (
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-border">
                      {specs.map(([k, v]) => (
                        <tr key={k}>
                          <td className="py-3 font-medium text-foreground w-48">{k}</td>
                          <td className="py-3 text-muted-foreground">{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-muted-foreground">Specifications coming soon.</p>
                )}
              </div>
            )}
            {activeTab === "support" && (
              <div className="max-w-2xl animate-fade-in">
                <p className="text-muted-foreground mb-6">Access product documentation, user manuals, and support resources.</p>
                <div className="space-y-4">
                  {[
                    { title: "User Manual (PDF)", desc: "Complete operating instructions and safety guidelines." },
                    { title: "Quick Start Guide", desc: "Get started with your device in under 5 minutes." },
                    { title: "Warranty & Returns Policy", desc: "Coverage details and return procedures." },
                  ].map((doc) => (
                    <div key={doc.title} className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors cursor-pointer">
                      <p className="text-sm font-semibold text-foreground">{doc.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{doc.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm text-muted-foreground mb-1">Explore Other Devices</p>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Related Physio Products</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p, i) => (
              <Link
                to={`/product/${p.id}`}
                key={p.id}
                className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group relative"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {p.badge && (
                  <span className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
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
                    src={p.image}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    width={600}
                    height={600}
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted-foreground mb-0.5">{p.category}</p>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{p.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className={`h-3 w-3 ${s <= Math.floor(p.rating) ? "text-accent-foreground fill-accent-foreground" : "text-border"}`} />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{p.rating}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-bold text-foreground">€{p.price.toFixed(2)}</span>
                    {p.originalPrice && <span className="text-xs text-muted-foreground line-through">€{p.originalPrice.toFixed(2)}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Strip */}
      <section className="py-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Truck, title: "Rapid Delivery", desc: "Delivered within 48 Hours" },
              { icon: ShieldCheck, title: "Physio Approved", desc: "Verified by Professionals" },
              { icon: Headphones, title: "24/7 Support", desc: "Dedicated Customer Care" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-row items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-accent-foreground" />
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
