import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import productsData from "@/data/productsData";

const Products = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <PageHero title="Our Products" breadcrumb="Products" />

    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.map((p) => (
            <div
              key={p.id}
              className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {p.badge && (
                <span className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                  {p.badge}
                </span>
              )}
              <div className="bg-muted p-4 aspect-square flex items-center justify-center overflow-hidden relative">
                {p.badge && (
                  <span className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                    {p.badge}
                  </span>
                )}
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
                <h3 className="text-sm font-semibold text-foreground mb-1 line-clamp-2">{p.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`h-3 w-3 ${s <= Math.floor(p.rating) ? "text-accent-foreground fill-accent-foreground" : "text-border"}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {p.rating} ({p.reviewCount})
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-sm font-bold text-foreground">€{p.price.toFixed(2)}</span>
                  {p.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">€{p.originalPrice.toFixed(2)}</span>
                  )}
                </div>
                <Link
                  to={`/product/${p.id}`}
                  className="block w-full text-center px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Products;
