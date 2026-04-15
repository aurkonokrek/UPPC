import { Phone } from "lucide-react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const TopBar = () => (
  <div className="bg-primary-dark text-primary-foreground text-xs hidden md:block">
    <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-10">
      <div className="flex items-center gap-2">
        <Phone className="h-3.5 w-3.5" />
        <span>Call Us: +880 123456789</span>
      </div>
      <p className="text-primary-foreground/80">
        Sign up and GET 20% OFF for your first order.
      </p>
      <div className="flex items-center gap-3">
        {[
          { icon: Facebook, label: "Facebook" },
          { icon: Twitter, label: "X" },
          { icon: Instagram, label: "Instagram" },
          { icon: Youtube, label: "YouTube" },
        ].map(({ icon: Icon, label }) => (
          <a
            key={label}
            href="#"
            aria-label={label}
            className="hover:text-primary-foreground/70 transition-colors"
          >
            <Icon className="h-3.5 w-3.5" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default TopBar;
