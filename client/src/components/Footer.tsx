import { Link } from "wouter";
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoPng from "@assets/ChatGPT_Image_Feb_17,_2026,_01_06_53_PM_1771330399482.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-16 w-auto overflow-hidden rounded-lg bg-white/5 p-1">
                <img src={logoPng} alt="EXPAT’SNEST Logo" className="h-full w-auto object-contain" />
              </div>
              <div className="flex items-center gap-3">
                <span className="font-display font-bold text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">EXPAT’SNEST</span>
                <span className="text-[10px] px-2 py-0.5 rounded border border-cyan-400/30 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">RC 9263911</span>
              </div>
            </div>
            <p className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Nigeria’s Premium Onboarding
            </p>
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
                  Abuja, Nigeria<br />
                  (serving expatriates and diplomatic clients nationwide)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-primary-foreground/80">Phone: +2347079991324<br />(consultation by appointment)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-primary-foreground/80">info@expatsnest.com</span>
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
          <div className="text-center md:text-left">
            <p>&copy; 2024 <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent inline-block">EXPAT’SNEST</span>. All rights reserved.</p>
            <p className="mt-1">RC No: 9263911 | Registered with the Corporate Affairs Commission (CAC), Nigeria.</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
