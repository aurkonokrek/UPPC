import { Link } from "react-router-dom";
import { CalendarCheck, UserCheck, ClipboardList, Hand, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import AppointmentForm from "@/components/AppointmentForm";
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

const testimonials = [
  { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.", name: "Name Surname", role: "Position, Company name" },
  { text: "The team at UPPC provided exceptional care during my recovery. Their expertise and compassion made all the difference in my rehabilitation journey.", name: "Sarah Johnson", role: "Patient" },
  { text: "Outstanding physiotherapy services. The personalized approach and professional staff helped me recover much faster than expected.", name: "Ahmed Rahman", role: "Patient" },
];

const services = [
  { image: servicePhysio, title: "Physiotherapy", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." },
  { image: servicePain, title: "Pain Management", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." },
  { image: serviceStroke, title: "Stroke Rehabilitation", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." },
  { image: serviceElectro, title: "Electro Therapy", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." },
  { image: serviceManual, title: "Manual Therapy", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." },
  { image: serviceSports, title: "Sports Injury Management", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." },
];

const Services = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero title="Services" breadcrumb="Services" />

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">WHAT WE OFFER</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">More Freely, Live Fully With Our Care</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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

      <AppointmentForm />

      {/* Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl font-medium text-foreground italic leading-relaxed mb-8">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-3 flex items-center justify-center">
                <UserCheck className="h-6 w-6 text-primary" />
              </div>
              <p className="font-semibold text-primary">{testimonials[currentTestimonial].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={() => setCurrentTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-foreground" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button key={i} onClick={() => setCurrentTestimonial(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentTestimonial ? "bg-primary" : "bg-border"}`} />
                  ))}
                </div>
                <button
                  onClick={() => setCurrentTestimonial((p) => (p + 1) % testimonials.length)}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <ChevronRight className="h-5 w-5 text-foreground" />
                </button>
              </div>
            </div>
          </AnimatedSection>
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
              { icon: CalendarCheck, title: "Make an Appointment" },
              { icon: ClipboardList, title: "Get a Consultation" },
              { icon: UserCheck, title: "Meet Our Therapist" },
              { icon: Hand, title: "Hands-On Therapy" },
            ].map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 150}>
                <div className="bg-card p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
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

export default Services;
