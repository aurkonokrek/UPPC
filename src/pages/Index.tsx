import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Phone, Clock, MapPin, HeartPulse, ArrowRight, CalendarCheck, UserCheck, ClipboardList, Hand, ChevronLeft, ChevronRight, BedDouble, Cross, Briefcase, Facebook, Linkedin } from "lucide-react";
import productsData from "@/data/productsData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import AppointmentForm from "@/components/AppointmentForm";
import HeroSlider from "@/components/HeroSlider";
import TextReveal from "@/components/TextReveal";

import heroImg from "@/assets/hero-physio.jpg";
import aboutImg from "@/assets/about-physio.jpg";
import servicePhysio from "@/assets/service-physio.jpg";
import servicePain from "@/assets/service-pain.jpg";
import serviceStroke from "@/assets/service-stroke.jpg";
import serviceElectro from "@/assets/service-electro.jpg";
import serviceManual from "@/assets/service-manual.jpg";
import serviceSports from "@/assets/service-sports.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import ctaImg from "@/assets/cta-physio.jpg";

const Counter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let current = 0;
        const step = Math.max(1, Math.floor(end / 40));
        const timer = setInterval(() => {
          current += step;
          if (current >= end) { setCount(end); clearInterval(timer); }
          else setCount(current);
        }, 30);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <div ref={ref} className="text-3xl md:text-4xl font-bold text-primary">{count}{suffix}</div>;
};

const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const services = [
  { image: servicePhysio, title: "Physiotherapy", description: "Comprehensive physical therapy treatments to restore mobility and reduce pain." },
  { image: servicePain, title: "Pain Management", description: "Specialized programs to address chronic pain and improve quality of life." },
  { image: serviceStroke, title: "Stroke Rehabilitation", description: "Expert stroke recovery programs to regain independence and motor function." },
  { image: serviceElectro, title: "Electro Therapy", description: "Advanced electrotherapy techniques for accelerated healing and pain relief." },
  { image: serviceManual, title: "Manual Therapy", description: "Hands-on therapeutic techniques for musculoskeletal conditions." },
  { image: serviceSports, title: "Sports Injury Management", description: "Targeted rehabilitation for sports-related injuries and performance recovery." },
];

const heroImages = [heroImg, aboutImg, servicePhysio];

const Index = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const parallaxOffset = useParallax(0.15);
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 280;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient pt-32 md:pt-36 lg:pt-40 pb-32 md:pb-40">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
            {/* Left Column */}
            <div className="pb-20 md:pb-32">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.2] mb-6 md:mb-8">
                Expert Care For Pain Relief And Enhanced Function
              </h1>
              <p className={`text-primary-foreground/80 text-base md:text-lg mb-8 md:mb-10 max-w-lg leading-relaxed transition-all duration-1000 delay-500 ${heroLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                At Unique Pain & Paralysis Centre, we specialize in providing personalized rehabilitation services to help you recover and thrive.
              </p>
              <div className={`grid grid-cols-2 sm:flex sm:gap-10 gap-4 mb-8 md:mb-12 transition-all duration-1000 delay-700 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                {[
                  { n: "12+", l: "Years Experience" },
                  { n: "3,500+", l: "Patients treated" },
                  { n: "3", l: "Expert Doctors" },
                  { n: "2", l: "Clinic Locations" },
                ].map((s) => (
                  <div key={s.l} className="text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-primary-foreground">{s.n}</div>
                    <div className="text-xs text-primary-foreground/60 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-900 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                <Link to="/contact" className="px-6 sm:px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-full hover:shadow-lg transition-all duration-300 text-sm">
                  Book Appointment
                </Link>
                <Link to="/services" className="px-6 sm:px-8 py-3 border-2 border-primary-foreground/40 text-primary-foreground font-semibold rounded-full hover:bg-primary-foreground/10 transition-all duration-300 text-sm">
                  Explore Services
                </Link>
              </div>
            </div>
            {/* Right Column — Image */}
            <div className={`transition-all duration-1000 delay-300 ${heroLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <HeroSlider images={heroImages} className="rounded-xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Info Bar + Appointment — unified floating strip */}
      <AnimatedSection>
        <div className="max-w-5xl mx-auto px-4 -mt-16 relative z-10 mb-20">
          <div className="bg-background shadow-xl rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="flex-1 flex items-center gap-4 px-8 py-6 border-b md:border-b-0 md:border-r border-border">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Opening Hours</p>
                  <p className="text-xs text-muted-foreground">Mon-Sat: 9AM - 8PM</p>
                </div>
              </div>
              <div className="flex-1 flex items-center gap-4 px-8 py-6 border-b md:border-b-0 md:border-r border-border">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Our Locations</p>
                  <p className="text-xs text-muted-foreground">Mirpur, Dhaka</p>
                </div>
              </div>
              <div className="flex items-center justify-center px-8 py-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-primary-dark text-primary-foreground text-sm font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
                >
                  Make an Appointment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={aboutImg}
                  alt="About UPPC"
                  className="w-full object-cover h-[400px]"
                  loading="lazy"
                  style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
                />
                <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-4 py-3 rounded-xl">
                  <div className="text-2xl font-bold">12+</div>
                  <div className="text-xs">Years Experience</div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">ABOUT US</p>
              <TextReveal
                text="Dedicated To Your Health, Committed To Your Recovery"
                as="h2"
                className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight"
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Unique Pain & Paralysis Centre, we are dedicated to providing personalized and rehabilitation services to address a variety of conditions and needs.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-primary p-5 rounded-xl">
                  <h4 className="font-bold text-primary-foreground mb-2">Our Mission</h4>
                  <p className="text-xs text-primary-foreground/80 leading-relaxed">Providing exceptional rehabilitation care with compassion and expertise.</p>
                </div>
                <div className="bg-accent p-5 rounded-xl">
                  <h4 className="font-bold text-accent-foreground mb-2">Our Vision</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">To be the leading rehabilitation center delivering innovative care solutions.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <Link to="/about" className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary-dark transition-colors text-sm">
                  Learn More
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Dedicated to Recovery */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <TextReveal
                text="Dedicated To Your Recovery"
                as="h2"
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our team is the heart and soul of our organization. Comprised of dedicated professionals from diverse backgrounds with a shared vision.
              </p>
              <button
                onClick={() => navigate("/about")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary-dark hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-sm"
              >
                Meet the Care Team
                <ArrowRight className="h-4 w-4" />
              </button>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { img: doctor1, name: "Asst. prof. Dr. Md. Faruqul Islam", role: "Consultant Physiotherapist" },
                  { img: doctor2, name: "Dr. Mokhlesur Rahman Siddiqui", role: "Consultant Physiotherapist" },
                  { img: doctor3, name: "Dr. AKM Minarul Tawhid", role: "Consultant Physiotherapist" },
                ].map((d, i) => (
                  <div key={i} className="rounded-xl overflow-hidden shadow-md group">
                    <div className="overflow-hidden h-48">
                      <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <div className="p-3 bg-card text-center">
                      <p className="text-xs font-semibold text-foreground">{d.name}</p>
                      <p className="text-[10px] text-muted-foreground mb-2">{d.role}</p>
                      <div className="flex items-center justify-center gap-3">
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                          <Facebook className="h-4 w-4" />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                          <Linkedin className="h-4 w-4" />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-[#25D366] transition-colors" aria-label="WhatsApp">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <TextReveal
              text="Our Comprehensive Rehabilitation Services"
              as="h2"
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At Unique Pain & Paralysis Centre, we specialize in providing comprehensive rehabilitation services to address a wide variety of conditions and needs.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 100}>
                <ServiceCard {...s} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Staggered Cards */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">HOW IT WORKS</p>
            <TextReveal
              text="A Patient-Centered Approach For Effective, Long-Lasting Results"
              as="h2"
              className="text-3xl md:text-4xl font-bold text-foreground"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {[
              { icon: CalendarCheck, title: "Make an Appointment", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.", offset: "" },
              { icon: BedDouble, title: "Get a Consultation", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.", offset: "lg:mt-16" },
              { icon: Cross, title: "Meet Our Therapist", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.", offset: "" },
              { icon: Briefcase, title: "Hands-On Therapy", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.", offset: "lg:mt-16" },
            ].map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 150} className={step.offset}>
                <div className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 mb-6">
                    <step.icon className="h-12 w-12 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Short Heading Goes Here</h2>
            <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[servicePhysio, servicePain, serviceStroke].map((img, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <div className="overflow-hidden h-48">
                    <img src={img} alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-primary bg-accent px-2 py-1 rounded">Category</span>
                      <span className="text-xs text-muted-foreground">5 min read</span>
                    </div>
                    <h3 className="font-bold text-foreground mb-2">Blog title heading will go here</h3>
                    <p className="text-sm text-muted-foreground mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-3 transition-all duration-300">
                      Read more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Products Carousel */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-sm font-medium text-primary mb-1">Our Products</p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Products</h2>
                <p className="text-muted-foreground text-sm mt-1">Professional rehabilitation equipment for clinic and home use.</p>
              </div>
              <Link to="/products" className="hidden md:inline-flex px-5 py-2 border border-foreground rounded-full text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors">
                View all
              </Link>
            </div>
          </AnimatedSection>
          <div ref={carouselRef} className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide scroll-smooth">
            <div className="flex gap-5 min-w-max">
              {productsData.slice(0, 6).map((product, i) => (
                <AnimatedSection key={product.id} delay={i * 80}>
                  <div className="w-56 flex-shrink-0">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="bg-background rounded-xl h-64 overflow-hidden mb-3 group">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      </div>
                    </Link>
                    <div className="flex items-start justify-between mb-1">
                      <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
                        <p className="text-sm font-semibold text-foreground line-clamp-2 leading-tight">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{product.category}</p>
                      </Link>
                      <p className="text-sm font-bold text-primary ml-2 whitespace-nowrap">${product.price}</p>
                    </div>
                    <Link to={`/product/${product.id}`} className="w-full mt-2 py-2 border border-primary text-sm font-medium text-foreground rounded hover:bg-primary hover:text-primary-foreground transition-colors block text-center">
                      View Details
                    </Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-end mt-6 gap-2">
            <button onClick={() => scrollCarousel("left")} className="w-10 h-10 rounded-full border border-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-primary">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scrollCarousel("right")} className="w-10 h-10 rounded-full border border-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-primary">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Well-being CTA */}
      <section className="bg-primary-dark py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <TextReveal
              text="We not only help you feel better. We ensure your well-being with UPPC"
              as="h2"
              className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 leading-tight"
            />
            <Link to="/about" className="inline-flex items-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-full hover:opacity-90 transition-all duration-300 text-sm">
              Learn More
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA with Image */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
          <div className="bg-accent/30 px-8 lg:px-16 py-16 flex flex-col justify-center">
            <AnimatedSection>
              <TextReveal
                text="Ready to take the first step toward a pain-free life?"
                as="h2"
                className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight"
              />
              <p className="text-muted-foreground mb-8 leading-relaxed max-w-md">
                Our team is the heart and soul of our organization. Comprised of dedicated professionals from diverse backgrounds
              </p>
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="flex-1 px-4 py-3 border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/60 placeholder:text-xs placeholder:tracking-widest focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold tracking-wider hover:bg-primary/90 transition-colors">
                  SUBMIT
                </button>
              </div>
            </AnimatedSection>
          </div>
          <div className="hidden lg:block">
            <img src={ctaImg} alt="Physiotherapy care" className="w-full h-full object-cover" loading="lazy" width={960} height={640} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
