import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Shield, Home as HomeIcon, Plane, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image - Lagos/Abuja Skyline */}
        {/* https://unsplash.com/photos/a-city-street-filled-with-lots-of-traffic-T7CRpP5r4hE - Lagos traffic (avoid chaos, use skyline) */}
        {/* Using a generic modern city/hotel lobby for premium feel */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/40 z-10 mix-blend-multiply" />
          <img 
            /* unsplash modern corporate lobby */
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
            alt="Corporate Lobby"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-1 mb-6">
              <span className="text-secondary font-semibold text-sm tracking-wider uppercase">Premium Diplomatic Services</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              EXPAT’SNEST: Seamless Transitions to <span className="text-secondary">Nigeria</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Seamless expatriate and diplomatic onboarding into Nigeria. We provide end-to-end relocation, security, and concierge services for global leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-secondary text-primary hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-black/20 hover:shadow-xl transition-all duration-300">
                  Request Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-6 text-lg rounded-xl backdrop-blur-sm">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Stats */}
      <section className="bg-primary py-12 relative z-30 -mt-10 mx-4 md:mx-12 rounded-2xl shadow-2xl shadow-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="p-4">
              <div className="text-4xl font-display font-bold text-secondary mb-2">500+</div>
              <div className="text-sm uppercase tracking-widest opacity-80">Families Relocated</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-display font-bold text-secondary mb-2">12</div>
              <div className="text-sm uppercase tracking-widest opacity-80">Embassy Partners</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-display font-bold text-secondary mb-2">100%</div>
              <div className="text-sm uppercase tracking-widest opacity-80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">What We Do</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground">Holistic Onboarding Services</h3>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Plane, 
                title: "Arrival & Logistics", 
                desc: "VIP airport pickup, fast-track immigration, and secure transportation to your residence." 
              },
              { 
                icon: HomeIcon, 
                title: "Housing & Settlement", 
                desc: "Curated property search in secure diplomatic zones, lease negotiation, and utility setup." 
              },
              { 
                icon: Shield, 
                title: "Security & Safety", 
                desc: "Comprehensive security briefings, secure transport, and 24/7 emergency response support." 
              },
              { 
                icon: Users, 
                title: "Cultural Orientation", 
                desc: "Language basics, etiquette training, and city tours to help you integrate smoothly." 
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border/50 hover:border-secondary/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                  <service.icon className="w-7 h-7" />
                </div>
                <h4 className="font-display text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="ghost" className="text-primary hover:text-secondary group text-lg">
                View All Services <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Section with Image */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-2/3 h-2/3 bg-secondary/10 rounded-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-primary/5 rounded-3xl -z-10"></div>
              {/* unsplash meeting room */}
              <img 
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=1000" 
                alt="Business Meeting" 
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-xl max-w-xs border border-border">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-bold text-primary">Trusted by Global Leaders</div>
                </div>
                <p className="text-xs text-muted-foreground">"The transition was flawless. EXPAT’SNEST handled everything with absolute professionalism."</p>
              </div>
            </div>

            <div>
              <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">Why Choose Us</h2>
              <h3 className="font-display text-4xl font-bold text-foreground mb-6">Expertise in Diplomatic Hospitality</h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Navigating a new country can be daunting, especially in a high-stakes diplomatic or executive role. We bridge the gap, providing a secure and comfortable foundation for your mission in Nigeria.
              </p>

              <div className="space-y-6">
                {[
                  "Security-First Approach",
                  "Deep Local Knowledge & Networks",
                  "24/7 Dedicated Concierge",
                  "Tailored Family Integration Programs"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-foreground shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/about">
                  <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-6 rounded-xl text-lg shadow-lg shadow-primary/20">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Let us handle the logistics so you can focus on your mission. Contact us today for a personalized onboarding plan.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-secondary text-primary hover:bg-white hover:text-primary font-bold px-10 py-7 text-xl rounded-full shadow-xl shadow-black/20 hover:scale-105 transition-all duration-300">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
