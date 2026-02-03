import { Link } from "wouter";
import { Globe, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white/10 p-2 rounded-lg text-white">
                <Globe className="h-6 w-6" />
              </div>
              <span className="font-display font-bold text-2xl">EXPAT’SNEST</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-xs">
              Seamless expatriate and diplomatic onboarding into Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-xl mb-6 text-secondary">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Expat Onboarding", path: "/onboarding" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    href={link.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-secondary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-xl mb-6 text-secondary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-1" />
                <span className="text-primary-foreground/80">
                  1059 Diplomatic Zone,<br />
                  Central Business District,<br />
                  Abuja, Nigeria
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-primary-foreground/80">+234 800 000 0000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-primary-foreground/80">concierge@expatsnest.ng</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/Social */}
          <div>
            <h3 className="font-display font-semibold text-xl mb-6 text-secondary">Connect With Us</h3>
            <p className="text-primary-foreground/80 mb-6">
              Follow our journey and get updates on expat life in Nigeria.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} EXPAT’SNEST Hospitality Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
