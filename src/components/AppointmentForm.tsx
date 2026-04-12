import { useState } from "react";
import { Phone } from "lucide-react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", topic: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-cta-gradient py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider mb-3">GET AN APPOINTMENT</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Start Your Recovery Today</h2>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Have Questions Or Need Help? Reach Out To Our Team And Book Your Appointment With Ease.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-primary-foreground/60">Call Anytime</p>
                <p className="text-sm font-semibold text-primary-foreground">+880123456789</p>
              </div>
            </div>
          </div>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
            <input name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} className="px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/40 text-sm" />
            <input name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} className="px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/40 text-sm" />
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/40 text-sm" />
            <input name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} className="px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/40 text-sm" />
            <select name="topic" value={formData.topic} onChange={handleChange} className="sm:col-span-2 px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/40 text-sm">
              <option value="" className="text-foreground">Select one...</option>
              <option value="physiotherapy" className="text-foreground">Physiotherapy</option>
              <option value="pain" className="text-foreground">Pain Management</option>
              <option value="stroke" className="text-foreground">Stroke Rehabilitation</option>
              <option value="other" className="text-foreground">Other</option>
            </select>
            <textarea name="message" placeholder="Type your message..." rows={4} value={formData.message} onChange={handleChange} className="sm:col-span-2 px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/40 text-sm resize-none" />
            <button type="submit" className="sm:col-span-2 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
