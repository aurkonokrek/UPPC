import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  {
    label: "Pages",
    path: "#",
    children: [
      { label: "Blog", path: "/blog" },
    ],
  },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setPagesOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="UPPC Logo" className="h-10 w-10" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center bg-muted rounded-full px-2 py-1.5">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative">
                    <button
                      onClick={() => setPagesOpen(!pagesOpen)}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors hover:text-primary ${
                        pagesOpen ? "bg-primary text-primary-foreground" : "text-foreground"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                    {pagesOpen && (
                      <div className="absolute top-full mt-2 left-0 bg-card shadow-lg rounded-lg py-2 min-w-[140px] border border-border">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-2 text-sm hover:bg-accent transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      isActive(link.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>

          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center px-6 py-2.5 text-sm font-semibold border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            GET APPOINTMENT
          </Link>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-foreground">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setPagesOpen(!pagesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg hover:bg-accent"
                  >
                    {link.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${pagesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {pagesOpen && (
                    <div className="pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2.5 text-sm hover:bg-accent rounded-lg"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.path) ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/contact"
              className="block text-center mt-4 px-6 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-full"
            >
              GET APPOINTMENT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
