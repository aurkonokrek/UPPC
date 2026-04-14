import { Link } from "react-router-dom";
import { CalendarCheck, UserCheck, ClipboardList, Hand, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import AppointmentForm from "@/components/AppointmentForm";
import TextReveal from "@/components/TextReveal";
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
  { text: "After years of chronic lower back pain, the team at UPPC designed a personalized treatment plan that completely transformed my quality of life. I can now play with my children without any discomfort.", name: "Rashid Ahmed", role: "Lower Back Pain Recovery" },
  { text: "The post-surgical rehabilitation program was outstanding. The therapists were patient, knowledgeable, and truly invested in my recovery. I regained full mobility in half the expected time.", name: "Sarah Johnson", role: "Post-Surgical Rehabilitation" },
  { text: "Outstanding sports injury management. After tearing my ACL, the personalized approach and professional staff helped me return to competitive football much faster than expected.", name: "Ahmed Rahman", role: "Sports Injury Recovery" },
  { text: "I suffered from severe neck and shoulder pain for months. The manual therapy sessions at UPPC provided incredible relief. The therapists genuinely care about their patients' well-being.", name: "Fatima Akhter", role: "Chronic Pain Management" },
  { text: "After my stroke, the rehabilitation team at UPPC helped me regain my independence step by step. Their expertise in neurological recovery is truly world-class. Forever grateful.", name: "Karim Hossain", role: "Stroke Rehabilitation" },
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
            <TextReveal text="More Freely, Live Fully With Our Care" as="h2" className="text-3xl md:text-4xl font-bold text-foreground mb-4" />
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

      {/* Patient Success Stories */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">TESTIMONIALS</p>
            <TextReveal text="Patient Success Stories" as="h2" className="text-3xl md:text-4xl font-bold text-foreground" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="max-w-4xl mx-auto relative bg-card shadow-xl rounded-2xl p-8 md:p-12">
              {/* Quote accent */}
              <span className="absolute top-4 left-6 text-[120px] leading-none font-serif text-primary/10 select-none pointer-events-none" aria-hidden="true">"</span>

              <div className="relative z-10 text-center">
                <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed mb-8 transition-opacity duration-500">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-3 flex items-center justify-center">
                  <UserCheck className="h-6 w-6 text-primary" />
                </div>
                <p className="font-semibold text-primary">{testimonials[currentTestimonial].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>

            {/* Navigation below card */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setCurrentTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-foreground" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrentTestimonial(i)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentTestimonial ? "bg-primary w-6" : "bg-border"}`} />
                ))}
              </div>
              <button
                onClick={() => setCurrentTestimonial((p) => (p + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-foreground" />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">HOW IT WORKS</p>
            <TextReveal text="A Patient-Centered Approach For Effective, Long-Lasting Results" as="h2" className="text-3xl md:text-4xl font-bold text-foreground" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CalendarCheck, title: "Make an Appointment" },
              { icon: ClipboardList, title: "Get a Consultation" },
              { icon: UserCheck, title: "Meet Our Therapist" },
              { icon: Hand, title: "Hands-On Therapy" },
            ].map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 150}>
                <div className="bg-card p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
