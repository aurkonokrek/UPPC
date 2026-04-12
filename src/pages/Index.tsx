import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Clock, MapPin, HeartPulse, Users, Stethoscope, ArrowRight, CalendarCheck, UserCheck, ClipboardList, Hand } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import AppointmentForm from "@/components/AppointmentForm";

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

const Index = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-hero-gradient pt-20">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 transition-all duration-1000 ${heroLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                Expert Care For Pain Relief And Enhanced Function
              </h1>
              <p className={`text-primary-foreground/80 text-lg mb-8 max-w-lg leading-relaxed transition-all duration-1000 delay-200 ${heroLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                At Unique Pain & Paralysis Centre, we specialize in providing personalized rehabilitation services to help you recover and thrive.
              </p>
              <div className={`flex flex-wrap gap-6 mb-10 transition-all duration-1000 delay-300 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-foreground">12+</div>
                  <div className="text-xs text-primary-foreground/60">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-foreground">3,500+</div>
                  <div className="text-xs text-primary-foreground/60">Patients treated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-foreground">3</div>
                  <div className="text-xs text-primary-foreground/60">Expert Doctors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-foreground">2</div>
                  <div className="text-xs text-primary-foreground/60">Clinic Locations</div>
                </div>
              </div>
              <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                <Link to="/contact" className="px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-full hover:shadow-lg transition-all duration-300 text-sm">
                  Book Appointment
                </Link>
                <Link to="/services" className="px-8 py-3 border-2 border-primary-foreground/40 text-primary-foreground font-semibold rounded-full hover:bg-primary-foreground/10 transition-all duration-300 text-sm">
                  Learn More
                </Link>
              </div>
            </div>
            <div className={`hidden lg:block transition-all duration-1000 delay-300 ${heroLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <img src={heroImg} alt="Physiotherapy session" className="rounded-2xl shadow-2xl w-full max-w-lg ml-auto object-cover h-[480px]" width={1920} height={1080} />
            </div>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <AnimatedSection>
        <div className="bg-background shadow-md -mt-6 relative z-20 rounded-xl mx-4 lg:mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="flex items-center gap-3 px-8 py-5">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Opening Hours</p>
                <p className="text-xs text-muted-foreground">Mon-Sat: 9AM - 8PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-8 py-5">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Our Locations</p>
                <p className="text-xs text-muted-foreground">Mirpur, Dhaka</p>
              </div>
            </div>
            <Link to="/contact" className="px-8 py-5 bg-primary text-primary-foreground text-sm font-semibold rounded-b-xl md:rounded-none md:rounded-r-xl hover:bg-primary-dark transition-colors">
              Make an Appointment
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <img src={aboutImg} alt="About UPPC" className="rounded-2xl w-full object-cover h-[400px]" loading="lazy" />
                <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-4 py-3 rounded-xl">
                  <div className="text-2xl font-bold">12+</div>
                  <div className="text-xs">Years Experience</div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">ABOUT US</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                Dedicated To Your Health, Committed To Your Recovery
              </h2>
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
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">+880123456789</span>
                </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dedicated To Your Recovery</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our team is the heart and soul of our organization. Comprised of dedicated professionals from diverse backgrounds with a shared vision.
              </p>
              <Link to="/about" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary-dark transition-colors text-sm">
                GET APPOINTMENT
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="grid grid-cols-3 gap-4">
                {[doctor1, doctor2, doctor3].map((doc, i) => (
                  <div key={i} className="rounded-xl overflow-hidden shadow-md">
                    <img src={doc} alt={`Doctor ${i + 1}`} className="w-full h-48 object-cover" loading="lazy" />
                    <div className="p-3 bg-card text-center">
                      <p className="text-xs font-semibold text-foreground">{["Dr. Md. Faruqul Islam", "Dr. Mokhlesur Rahman Siddiqui", "Dr. AKM Minarul Tawhid"][i]}</p>
                      <p className="text-[10px] text-muted-foreground">{["Consultant Physiotherapist", "Consultant Physiotherapist", "Consultant Physiotherapist"][i]}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Comprehensive Rehabilitation Services</h2>
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

      {/* How It Works */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">HOW IT WORKS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">A Patient-Centered Approach For Effective, Long-Lasting Results</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CalendarCheck, title: "Make an Appointment", desc: "Schedule your visit easily online or by phone." },
              { icon: ClipboardList, title: "Get a Consultation", desc: "Our experts assess your condition thoroughly." },
              { icon: UserCheck, title: "Meet Our Therapist", desc: "Get matched with a specialist for your needs." },
              { icon: Hand, title: "Hands-On Therapy", desc: "Begin your personalized treatment plan." },
            ].map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 150}>
                <div className="bg-card p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
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
                <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
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

      {/* Products placeholder */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">Products</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map(i => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-3 bg-accent rounded-lg flex items-center justify-center">
                    <HeartPulse className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Product Name</p>
                  <p className="text-xs text-muted-foreground">Health Product</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Well-being CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              We not only help you feel better. We ensure your well-being with UPPC
            </h2>
            <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary-dark transition-colors text-sm">
              Learn More
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 bg-hero-gradient overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
              Ready to take the first step toward a pain-free life?
            </h2>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Our team of experienced physiotherapists is here to help you recover, rebuild, and reclaim your quality of life.
            </p>
            <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-full hover:shadow-lg transition-all text-sm">
              Book Now
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
