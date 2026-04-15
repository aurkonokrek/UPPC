import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-muted pt-16 pb-8">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="UPPC" className="h-12 w-12" />
            <div>
              <h3 className="text-base font-bold text-foreground">Unique Pain & Paralysis Centre</h3>
              <span className="text-xs font-medium text-muted-foreground">(UPPC)</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            To Support Every Patient On Their Journey To Recovery By Restoring Movement, Rebuilding Confidence, And Bringing Comfort Back Into Everyday Life.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {[{l:"Home",p:"/"},{l:"About Us",p:"/about"},{l:"Services",p:"/services"},{l:"Products",p:"/products"},{l:"Blog",p:"/blog"},{l:"Contact",p:"/contact"}].map(i => (
              <li key={i.p}><Link to={i.p} className="text-sm text-muted-foreground hover:text-primary transition-colors">{i.l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Our Services</h4>
          <ul className="space-y-2.5">
            {[
              { name: "Physiotherapy", slug: "physiotherapy" },
              { name: "Pain Management", slug: "pain-management" },
              { name: "Stroke Rehabilitation", slug: "stroke-rehabilitation" },
              { name: "Electro Therapy", slug: "electro-therapy" },
              { name: "Manual Therapy", slug: "manual-therapy" },
              { name: "Sports Injury Management", slug: "sports-injury" },
            ].map(s => (
              <li key={s.slug}><Link to={`/services/${s.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Follow us</h4>
          <div className="flex gap-3">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "X" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Youtube, label: "Youtube" },
            ].map(({ icon: Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="w-9 h-9 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© 2026 Physio Shop. All rights reserved.</p>
        <div className="flex gap-6">
          {["Privacy Policy","Terms of Service","Cookies Settings"].map(t => (
            <a key={t} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">{t}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
