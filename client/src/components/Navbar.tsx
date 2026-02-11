import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Globe, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Expat Onboarding", path: "/onboarding" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-border/50 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-primary p-2 rounded-lg text-white group-hover:scale-105 transition-transform duration-300">
              <Globe className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className={cn(
                  "font-display font-bold text-xl leading-none bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
                  !scrolled && "sm:from-blue-400 sm:to-purple-400"
                )}>
                  EXPAT’SNEST
                </span>
                <span className={cn(
                  "text-[8px] px-1.5 py-0.5 rounded border border-blue-400/30 font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]",
                  scrolled ? "opacity-90" : "opacity-100"
                )}>
                  RC 9263911
                </span>
              </div>
              <span className={cn(
                "text-[10px] tracking-widest uppercase font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",
                !scrolled && "sm:from-purple-400 sm:to-blue-400"
              )}>
                Nigeria’s Premium Onboarding
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 relative group",
                  location === link.path
                    ? "text-secondary font-semibold"
                    : scrolled ? "text-foreground hover:text-secondary" : "text-white hover:text-white/80"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full",
                  location === link.path ? "w-full" : ""
                )} />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant={scrolled ? "default" : "secondary"}
              size="sm"
              className={cn(
                "shadow-lg",
                !scrolled && "bg-white text-primary hover:bg-white/90"
              )}
              onClick={() => window.location.href = "tel:+2348000000000"}
            >
              <Phone className="mr-2 h-4 w-4" />
              +234 800 000 0000
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md transition-colors",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-xl animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "block text-lg font-medium py-2 border-b border-border/50 last:border-0",
                  location === link.path ? "text-primary" : "text-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full mt-4" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
