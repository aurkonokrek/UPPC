import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import AppointmentForm from "@/components/AppointmentForm";
import TextReveal from "@/components/TextReveal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";

import aboutImg from "@/assets/about-physio.jpg";
import servicePhysio from "@/assets/service-physio.jpg";
import servicePain from "@/assets/service-pain.jpg";
import serviceStroke from "@/assets/service-stroke.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const About = () => {
  const parallaxOffset = useParallax(0.1);

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero title="About Us" breadcrumb="About Us" />

      {/* About Intro */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={aboutImg}
                  alt="About"
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
              <TextReveal text="Dedicated To Your Health, Committed To Your Recovery" as="h2" className="text-3xl md:text-4xl font-bold text-foreground mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6">At Unique Pain & Paralysis Centre, we are dedicated to providing personalized and rehabilitation services to address a variety of conditions and needs.</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-primary p-5 rounded-xl">
                  <h4 className="font-bold text-primary-foreground mb-2">Our Mission</h4>
                  <p className="text-xs text-primary-foreground/80">Providing exceptional rehabilitation care with compassion.</p>
                </div>
                <div className="bg-accent p-5 rounded-xl">
                  <h4 className="font-bold text-accent-foreground mb-2">Our Vision</h4>
                  <p className="text-xs text-muted-foreground">To be the leading rehabilitation center in the region.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <Link to="/contact" className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary-dark transition-colors text-sm">Learn More</Link>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">+880123456789</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tailored Treatment Banner */}
      <section className="relative bg-hero-gradient py-16 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <p className="text-xs text-primary-foreground/60 uppercase tracking-wider mb-2">WHAT WE PROVIDE</p>
            <TextReveal text="Individually Tailored Treatment: Your Path To Wellness" as="h2" className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4" />
            <Link to="/contact" className="inline-flex px-6 py-3 bg-primary-foreground text-primary font-semibold rounded-full text-sm hover:shadow-lg transition-all">Contact Now</Link>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[{ n: "12+", l: "Years Experience" }, { n: "3,500+", l: "Patients treated" }, { n: "3", l: "Expert Doctors" }, { n: "2", l: "Clinic Locations" }].map(s => (
              <AnimatedSection key={s.l}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-foreground">{s.n}</div>
                  <div className="text-xs text-primary-foreground/60">{s.l}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="space-y-6">
                {[
                  { n: "01", t: "Restore Independence", d: "Helping patients regain mobility and confidence for daily life." },
                  { n: "02", t: "Compassionate Care", d: "We treat every patient with empathy, respect, and support." },
                  { n: "03", t: "Personalized Treatment", d: "Every recovery plan is based on individual needs." },
                  { n: "04", t: "Trusted Excellence", d: "Delivering high-quality care with proven methods and integrity." },
                ].map(v => (
                  <div key={v.n} className="flex gap-4 group hover:translate-x-2 transition-transform duration-300">
                    <span className="text-2xl font-bold text-primary">{v.n}</span>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{v.t}</h4>
                      <p className="text-sm text-muted-foreground">{v.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <TextReveal text="Our Mission & Values" as="h2" className="text-3xl font-bold text-foreground mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                We Are Dedicated To Helping People Restore Active Routine And Live Without Pain—Guided By Care, Expertise, And A Deep Commitment To Every Patient's Well-Being.
              </p>
              <div className="overflow-hidden rounded-2xl">
                <img src={aboutImg} alt="Mission" className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <TextReveal text="Our Comprehensive Rehabilitation Services" as="h2" className="text-3xl font-bold text-foreground mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive rehabilitation services for a wide variety of conditions.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { image: servicePhysio, title: "Physiotherapy", description: "Comprehensive physical therapy treatments." },
              { image: servicePain, title: "Pain Management", description: "Specialized pain management programs." },
              { image: serviceStroke, title: "Stroke Rehabilitation", description: "Expert stroke recovery programs." },
            ].map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 100}>
                <ServiceCard {...s} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <AppointmentForm />

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <TextReveal text="Dedicated To Your Recovery" as="h2" className="text-3xl font-bold text-foreground mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6">Our team is the heart and soul of our organization.</p>
              <Link to="/contact" className="inline-flex px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary-dark transition-colors text-sm">GET APPOINTMENT</Link>
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
                      <p className="text-[10px] text-muted-foreground">{d.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
