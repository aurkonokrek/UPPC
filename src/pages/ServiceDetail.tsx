import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";

import heroImg from "@/assets/service-detail-hero.jpg";
import benefitsImg from "@/assets/service-detail-benefits.jpg";
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

const allServices = [
  { slug: "physiotherapy", title: "Physiotherapy", image: servicePhysio },
  { slug: "pain-management", title: "Pain Management", image: servicePain },
  { slug: "stroke-rehabilitation", title: "Stroke Rehabilitation", image: serviceStroke },
  { slug: "electro-therapy", title: "Electro Therapy", image: serviceElectro },
  { slug: "manual-therapy", title: "Manual Therapy", image: serviceManual },
  { slug: "sports-injury", title: "Sports Injury Management", image: serviceSports },
];

const faqs = [
  { q: "What conditions do you treat with this service?", a: "We treat a wide range of musculoskeletal, neurological, and chronic pain conditions. Our experienced therapists create individualized treatment plans tailored to each patient's specific needs and recovery goals." },
  { q: "How long does a typical session last?", a: "A standard session lasts between 45-60 minutes. The initial consultation may take up to 90 minutes as we conduct a thorough assessment to understand your condition and develop a comprehensive treatment plan." },
  { q: "Do I need a doctor's referral?", a: "While a referral is not mandatory, having one can help us better understand your medical history and coordinate care with your primary physician for optimal results." },
  { q: "How many sessions will I need?", a: "The number of sessions varies depending on your condition, severity, and individual response to treatment. After the initial assessment, we'll provide a recommended treatment plan with an estimated timeline for recovery." },
  { q: "Is this service covered by insurance?", a: "Many insurance plans cover our rehabilitation services. We recommend contacting your insurance provider to verify coverage details. Our front desk team can also assist you with insurance-related queries." },
];

const workingHours = [
  { day: "Saturday", time: "9:00 AM - 8:00 PM" },
  { day: "Sunday", time: "9:00 AM - 8:00 PM" },
  { day: "Monday", time: "9:00 AM - 8:00 PM" },
  { day: "Tuesday", time: "9:00 AM - 8:00 PM" },
  { day: "Wednesday", time: "9:00 AM - 8:00 PM" },
  { day: "Thursday", time: "9:00 AM - 5:00 PM" },
  { day: "Friday", time: "Closed" },
];

const benefits = [
  "Evidence-based treatment protocols for faster recovery",
  "Personalized rehabilitation plans tailored to your needs",
  "State-of-the-art equipment and modern facilities",
  "Experienced and certified professional therapists",
  "Comprehensive progress tracking and reporting",
  "Holistic approach addressing root causes of pain",
];

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const parallaxOffset = useParallax(0.3);

  const current = allServices.find((s) => s.slug === slug) || allServices[0];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[280px] md:h-[340px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            className="w-full h-full object-cover"
            width={1920}
            height={640}
            style={{ transform: `translateY(${parallaxOffset}px)`, willChange: "transform" }}
          />
          <div className="absolute inset-0 bg-primary-dark/75" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 pb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">{current.title}</h1>
          <p className="text-sm text-primary-foreground/70">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            {" > "}
            <Link to="/services" className="hover:text-primary-foreground transition-colors">Services</Link>
            {" > "}
            <span className="text-primary-foreground/90">{current.title}</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 xl:gap-14">
            {/* Left — Main Content */}
            <div className="space-y-12">
              {/* Featured Image */}
              <AnimatedSection>
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-[320px] md:h-[420px] object-cover rounded-2xl"
                  loading="lazy"
                />
              </AnimatedSection>

              {/* Description */}
              <AnimatedSection>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">About {current.title}</h2>
                <p className="text-muted-foreground leading-[1.85] mb-4">
                  Our {current.title.toLowerCase()} service is designed to provide comprehensive care that addresses the root causes of your condition. We combine evidence-based practices with personalized attention to ensure the best possible outcomes for every patient.
                </p>
                <p className="text-muted-foreground leading-[1.85]">
                  Whether you're recovering from an injury, managing chronic pain, or looking to improve your overall physical function, our expert team develops individualized treatment plans that evolve with your progress. We utilize the latest techniques and equipment to accelerate your recovery journey.
                </p>
              </AnimatedSection>

              {/* Benefits */}
              <AnimatedSection>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 items-start">
                  <img
                    src={benefitsImg}
                    alt="Therapy equipment"
                    className="w-full h-[220px] object-cover rounded-xl"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <ul className="space-y-4">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* FAQ */}
              <AnimatedSection>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Everything You Need to Know</h2>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border border-border rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-accent/50 transition-colors"
                      >
                        <span className="font-semibold text-foreground text-sm pr-4">{faq.q}</span>
                        <ChevronDown className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-60" : "max-h-0"}`}
                      >
                        <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right — Sidebar */}
            <div className="space-y-6">
              {/* Our Services Card */}
              <AnimatedSection delay={100}>
                <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-foreground mb-4">Our Services</h3>
                  <ul className="space-y-1">
                    {allServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/services/${s.slug}`}
                          className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                            s.slug === slug
                              ? "bg-primary text-primary-foreground"
                              : "text-foreground hover:bg-accent"
                          }`}
                        >
                          {s.title}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* Working Hours Card */}
              <AnimatedSection delay={200}>
                <div className="bg-primary rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-primary-foreground">Working Hours</h3>
                  </div>
                  <ul className="space-y-3">
                    {workingHours.map((wh) => (
                      <li key={wh.day} className="flex items-center justify-between">
                        <span className="text-sm text-primary-foreground/80">{wh.day}</span>
                        <span className={`text-sm font-medium ${wh.time === "Closed" ? "text-destructive-foreground" : "text-primary-foreground"}`}>
                          {wh.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* Emergency Contact Card */}
              <AnimatedSection delay={300}>
                <div className="bg-accent rounded-2xl p-6 shadow-sm text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">24/7 Emergency</p>
                  <h3 className="text-xl font-bold text-foreground mb-2">Need Urgent Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">Call us anytime for emergency physiotherapy consultations.</p>
                  <a
                    href="tel:+880123456789"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary-dark transition-colors text-sm"
                  >
                    <Phone className="h-4 w-4" />
                    +880 123 456 789
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
