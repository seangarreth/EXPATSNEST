import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Calendar, FileText, Home, Plane } from "lucide-react";

export default function Onboarding() {
  const steps = [
    {
      icon: FileText,
      phase: "Pre-Arrival (1 Month Out)",
      title: "Preparation & Documentation",
      desc: "We coordinate with your HQ to handle visa documentation, shipping logistics for personal effects, and initial housing shortlists."
    },
    {
      icon: Plane,
      phase: "Arrival Day",
      title: "The Warm Welcome",
      desc: "VIP airport reception. You are whisked away to your temporary accommodation while we handle luggage and customs clearance."
    },
    {
      icon: Home,
      phase: "Week 1",
      title: "Settling In",
      desc: "Housing tours, school visits for children, setting up bank accounts, local SIM cards, and internet connectivity."
    },
    {
      icon: Calendar,
      phase: "Month 1",
      title: "Community Integration",
      desc: "Introduction to expatriate clubs, security briefings, driving lessons, and cultural orientation workshops."
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title="Expatriate Onboarding" 
        subtitle="A structured timeline to ensure your transition to Nigeria is smooth, safe, and stress-free."
        // unsplash passport or travel planning
        image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-ml-px"></div>

            <div className="space-y-12">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className={`relative flex flex-col md:flex-row gap-8 items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Icon Bubble */}
                  <div className="absolute left-8 md:left-1/2 -ml-8 md:-ml-8 w-16 h-16 rounded-full bg-white border-4 border-secondary flex items-center justify-center z-10 shadow-lg">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content Card */}
                  <div className={`md:w-1/2 pl-24 md:pl-0 ${idx % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md border border-border/50 hover:shadow-lg transition-shadow">
                      <span className="text-secondary font-bold text-sm uppercase tracking-wider mb-2 block">{step.phase}</span>
                      <h3 className="font-display text-xl font-bold text-foreground mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-10 py-7 text-xl rounded-xl shadow-xl shadow-primary/20">
                  Request a Private Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
