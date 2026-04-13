import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AppointmentForm from "@/components/AppointmentForm";
import TextReveal from "@/components/TextReveal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const Contact = () => (
  <div className="min-h-screen">
    <Navbar />
    <PageHero title="Contact Us" breadcrumb="Contact" />

    {/* Contact Cards */}
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
          {[
            { icon: Mail, title: "Email", detail: "hello@uppc.com" },
            { icon: Phone, title: "Phone", detail: "+1 (555) 000-0000" },
            { icon: MapPin, title: "Address", detail: "Mirpur, Dhaka Division, Bangladesh" },
          ].map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 100}>
              <div className="bg-card rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                  <c.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.detail}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Map */}
    <section className="py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0091382162414!2d90.36307397419198!3d23.818274086169346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c12f620e47bd%3A0x807fb51c8e73e91a!2sUNIQUE%20PAIN%20AND%20PARALYSIS%20CENTRE!5e0!3m2!1sen!2sbd!4v1776113859990!5m2!1sen!2sbd"
            className="w-full h-[400px] rounded-xl shadow-md border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Unique Pain and Paralysis Centre Location"
          />
        </AnimatedSection>
      </div>
    </section>

    <AppointmentForm />

    <Footer />
  </div>
);

export default Contact;
