import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AppointmentForm from "@/components/AppointmentForm";
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
              <div className="bg-card rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
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

    {/* Map Placeholder */}
    <section className="py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection>
          <div className="bg-muted rounded-xl h-[300px] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground text-sm">Map will be displayed here</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <AppointmentForm />

    <Footer />
  </div>
);

export default Contact;
