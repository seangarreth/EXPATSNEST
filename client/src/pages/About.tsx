import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Award, Heart, Target, Users } from "lucide-react";

export default function About() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title="Who We Are" 
        subtitle="Dedicated to welcoming the world to Nigeria with warmth, security, and professionalism."
        // unsplash abuja city gate or landmark
        image="https://images.unsplash.com/photo-1605218427360-36397e85d9d4?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6 text-primary">Our Story</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Founded in 2015, NaijaHost emerged from a simple observation: diplomatic personnel and expatriates often struggled with the initial transition to life in Nigeria due to logistical complexities and cultural nuances.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We set out to build a hospitality company that functions less like a travel agency and more like a trusted local partner. Today, we are proud to serve over 12 embassies and numerous multinational corporations.
              </p>
              <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary italic text-primary/80">
                "Our goal is to make Nigeria feel like home from the moment you step off the plane."
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* unsplash office team images */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=500" 
                alt="Team working" 
                className="rounded-2xl w-full h-64 object-cover shadow-lg translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=500" 
                alt="Handshake" 
                className="rounded-2xl w-full h-64 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Excellence", desc: "We deliver nothing short of premium quality in every interaction." },
              { icon: Heart, title: "Hospitality", desc: "Deeply rooted in Nigerian culture, we treat every client as family." },
              { icon: Users, title: "Community", desc: "We build bridges between expatriates and the local community." },
              { icon: Award, title: "Integrity", desc: "Trust is our currency. We operate with transparency and honesty." },
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center text-primary mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
