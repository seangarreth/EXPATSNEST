import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      title: "Airport VIP Arrival",
      desc: "Skip the queues and chaos. Our protocol officers meet you at the airbridge.",
      features: ["Fast-track immigration", "Porter service", "Secure armored transport", "Welcome pack with local SIM"],
      // unsplash luxury car interior or airport lounge
      image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Residential Concierge",
      desc: "Finding a secure, comfortable home that meets international standards.",
      features: ["Property search in diplomatic zones", "Lease negotiation", "Generator/Inverter setup", "Staffing (cooks, stewards)"],
      // unsplash luxury apartment
      image: "https://images.unsplash.com/photo-1502005229766-939cb9399885?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cultural Integration",
      desc: "Understanding Nigeria is key to enjoying it. We help you adapt quickly.",
      features: ["Cross-cultural training", "City orientation tours", "Language basics (Hausa, Yoruba, Igbo)", "Market visits & shopping guides"],
      // unsplash african market art
      image: "https://images.unsplash.com/photo-1548614606-52b4451f994b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Logistics & Security",
      desc: "Move around the country with peace of mind.",
      features: ["24/7 Driver services", "Route planning & security advisories", "Event security", "Emergency response coordination"],
      // unsplash security or suv
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive support designed for the unique needs of the diplomatic community."
        // unsplash concierge service
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="lg:w-1/2 w-full">
                  <div className="relative">
                    <div className={`absolute -inset-4 ${idx % 2 === 0 ? 'bg-primary/5' : 'bg-secondary/10'} rounded-2xl -z-10`}></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="rounded-xl shadow-2xl w-full object-cover h-[400px]"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <h3 className="font-display text-3xl font-bold mb-4 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start">
                        <div className="mt-1 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mr-3 shrink-0">
                          <Check className="w-3 h-3 text-secondary-foreground" />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      Inquire About This Service
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl text-white mb-6">Need something bespoke?</h2>
          <p className="text-white/80 mb-8 text-lg">
            We understand every mission is unique. We can tailor a package specifically for your embassy or organization.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-secondary text-primary hover:bg-white hover:text-primary font-bold">
              Contact Concierge
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
