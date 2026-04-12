import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import servicePhysio from "@/assets/service-physio.jpg";
import servicePain from "@/assets/service-pain.jpg";
import serviceStroke from "@/assets/service-stroke.jpg";
import serviceElectro from "@/assets/service-electro.jpg";
import serviceManual from "@/assets/service-manual.jpg";
import serviceSports from "@/assets/service-sports.jpg";

const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const blogs = [
  servicePhysio, servicePain, serviceStroke,
  serviceElectro, serviceManual, serviceSports,
  servicePhysio, servicePain, serviceStroke,
];

const Blog = () => (
  <div className="min-h-screen">
    <Navbar />
    <PageHero title="Blog" breadcrumb="Blog" />

    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Blog</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Short Heading Goes Here</h2>
          <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((img, i) => (
            <AnimatedSection key={i} delay={(i % 3) * 100}>
              <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
                <div className="overflow-hidden h-48">
                  <img src={img} alt="Blog post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-primary bg-accent px-2 py-1 rounded">Category</span>
                    <span className="text-xs text-muted-foreground">5 min read</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Blog title heading will go here</h3>
                  <p className="text-sm text-muted-foreground mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  <Link to="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-3 transition-all duration-300">
                    Read more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Blog;
