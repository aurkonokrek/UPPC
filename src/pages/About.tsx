import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Facebook, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import AppointmentForm from "@/components/AppointmentForm";
import TextReveal from "@/components/TextReveal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";
import teamData from "@/data/teamData";

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
          <AnimatedSection className="text-center mb-10">
            <TextReveal text="Our Team" as="h2" className="text-3xl md:text-4xl font-bold text-foreground mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">Our dedicated professionals bring years of experience and genuine compassion to every patient interaction, ensuring your path to recovery is supported at every step.</p>
          </AnimatedSection>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-10">
            {(["Management", "Physiotherapist", "Staff"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-accent"
                }`}
              >
                {tab === "Staff" ? "Support Staff" : tab === "Physiotherapist" ? "Physiotherapists" : tab}
              </button>
            ))}
          </div>

          {/* Filtered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamData
              .filter((m) => m.category === activeTab)
              .map((member, i) => (
                <AnimatedSection key={member.id} delay={i * 100}>
                  <div className="rounded-xl overflow-hidden shadow-md bg-card group">
                    <div className="overflow-hidden h-64">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 text-center">
                      <h4 className="font-bold text-foreground text-lg">{member.name}</h4>
                      <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4">{member.qualifications}</p>
                    </div>
                    <div className="border-t border-border px-5 py-3 flex justify-center gap-4">
                      <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Facebook className="h-4 w-4" />
                      </a>
                      <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a href={member.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      </a>
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
};

export default About;
