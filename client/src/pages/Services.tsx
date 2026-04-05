import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

export default function Services() {
  useSEO({
    title: "Our Services | EXPAT'SNEST — Relocation, Security & Concierge Services in Nigeria",
    description: "Explore EXPAT'SNEST's full range of services: diplomatic protocol & arrival, executive housing, security logistics, cultural integration, school placement, and ongoing concierge support for expatriates in Nigeria.",
    canonical: "/services",
    ogTitle: "EXPAT'SNEST Services — End-to-End Expatriate & Diplomatic Support in Nigeria",
    ogDescription: "From VIP airport arrivals to long-term concierge support — EXPAT'SNEST offers comprehensive onboarding services designed for diplomats, executives, and global organisations in Nigeria.",
  });

  const services = [
    {
      title: "Diplomatic Protocol & Arrival",
      desc: "Distinguished arrival management ensuring a secure and efficient transition from international transit to your domestic residence.",
      features: [
        "VIP Fast-Track Immigration Clearance",
        "Executive Porter & Liaison Services",
        "Armored Vehicle Logistics",
        "Initial Essential Communications Pack"
      ],
      // unsplash luxury car interior or airport lounge
      image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Executive Residential Advisory",
      desc: "Strategic placement within premier, high-security diplomatic districts, ensuring residences meet the rigorous standards of international organizations.",
      features: [
        "Diplomatic Zone Real Estate Acquisition",
        "Contractual & Lease Advisory",
        "Advanced Power Redundancy Solutions",
        "Professional Household Management Staffing"
      ],
      // unsplash luxury apartment
      image: "https://images.unsplash.com/photo-1502005229766-939cb9399885?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Socio-Cultural Integration",
      desc: "A bespoke orientation program designed to provide global professionals with the cultural fluency necessary for success in Nigeria.",
      features: [
        "Executive Cross-Cultural Briefings",
        "Tailored Regional Orientation Tours",
        "Linguistic Competency Programs",
        "Curated Professional Networking Access"
      ],
      // unsplash african market art
      image: "https://images.unsplash.com/photo-1548614606-52b4451f994b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Strategic Logistics & Security",
      desc: "Unparalleled mobility solutions underpinned by professional risk assessment and coordinated emergency response infrastructure.",
      features: [
        "Professional Chauffeur & Executive Transport",
        "Tactical Route Assessment & Advisories",
        "Secure Event & Personal Protection",
        "24/7 Rapid Response Coordination"
      ],
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
          <div className="space-y-40">
            {services.map((service, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20 items-center`}>
                <div className="lg:w-1/2 w-full">
                  <div className="relative group">
                    <div className={`absolute -inset-6 ${idx % 2 === 0 ? 'bg-primary/[0.03]' : 'bg-secondary/[0.05]'} rounded-3xl -z-10 transition-transform duration-700 group-hover:scale-105`}></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="rounded-2xl shadow-2xl w-full object-cover h-[450px] transition-transform duration-700 group-hover:translate-y-[-8px]"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 w-full">
                  <h3 className="font-display text-4xl font-bold mb-6 text-foreground tracking-tight">{service.title}</h3>
                  <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-12">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start group/item">
                        <div className="mt-1.5 w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center mr-4 shrink-0 transition-colors group-hover/item:bg-secondary/30">
                          <Check className="w-3 h-3 text-secondary-foreground" />
                        </div>
                        <span className="text-foreground/80 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button variant="outline" size="lg" className="border-primary/20 text-primary hover:bg-primary hover:text-white rounded-xl px-8 transition-all duration-300">
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
