import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Cpu, Network, ShieldCheck } from "lucide-react";

export default function HCIT() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-[#002759] text-white">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-primary-foreground/80 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">Healthcare Investment Sectors</h2>
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-8 text-white">
              Healthcare Information Technology (HCIT)
            </h1>
            <div className="w-24 h-1 bg-white/30 mb-8"></div>
          </div>
        </div>
      </section>

      {/* Perspective Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground tracking-tight leading-tight">
                The WCAS Perspective on Healthcare Information Technology
              </h2>
            </div>
            <div>
              <p className="text-xl leading-relaxed text-muted-foreground">
                WCAS has observed an increasing willingness among healthcare stakeholders to adopt technology-based solutions that increase the efficiency of care delivery, improve patient outcomes, enhance data collection and usability, augment patient access and support the shift to value-based care.
              </p>
              <p className="text-xl leading-relaxed text-muted-foreground mt-6">
                In response, we are investing in software, data and technology-enabled services to help providers, payors, life sciences organizations and other healthcare stakeholders deliver high-quality, cost-efficient and accessible care to consumers and patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trends Section */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Investment Themes</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
              Trends We're Excited To Invest Behind
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                icon: <Cpu className="w-8 h-8 text-primary" />,
                title: "Accelerated adoption of software",
                desc: "Accelerated adoption of software- and technology-based solutions broadly driven by technological innovation and regulation and promoting interoperability and data collection"
              },
              {
                icon: <Activity className="w-8 h-8 text-primary" />,
                title: "Increasing need for automation",
                desc: "The increasing need for automation to reduce manual processes, boost productivity, and ameliorate the impact of labor shortages"
              },
              {
                icon: <Network className="w-8 h-8 text-primary" />,
                title: "Growing demand for data analytics",
                desc: "Growing demand for data analytics and insights to drive business and clinical strategies, ranging from patient engagement, to clinical decision support, to a drug's commercialization strategy"
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-primary" />,
                title: "Increased focus on transparency",
                desc: "Increased focus among healthcare stakeholders and the government to improve transparency, access and experience for consumers"
              }
            ].map((trend, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-6 bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-primary/5">
                  {trend.icon}
                </div>
                <div>
                  <div className="text-5xl font-serif text-muted-foreground/20 font-bold mb-4 leading-none">0{i+1}</div>
                  <p className="text-lg text-foreground font-medium leading-relaxed">
                    {trend.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Leadership</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
                See The Sector Team
              </h3>
            </div>
            <Button variant="outline" className="rounded-full group">
              Meet Our Full Healthcare Team
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { name: "Caroline Dechert", role: "General Partner | Healthcare" },
              { name: "Edward P. Sobol", role: "General Partner | Healthcare" },
              { name: "Cathy Sun", role: "Vice President | Healthcare" },
              { name: "Aditya Shah", role: "Associate | Healthcare" },
              { name: "Mark M. Tomaino", role: "Operating Partner | Healthcare" }
            ].map((member, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square bg-muted rounded-xl mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#002759]/10 group-hover:bg-[#002759]/0 transition-colors z-10"></div>
                  {/* Placeholder for headshot */}
                  <div className="w-full h-full flex items-center justify-center bg-secondary text-muted-foreground">
                    <span className="text-4xl font-light">{member.name.charAt(0)}</span>
                  </div>
                </div>
                <h4 className="text-lg font-bold font-heading group-hover:text-primary transition-colors">{member.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unparalleled Expertise CTA */}
      <section className="py-32 bg-[#002759] text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
            Unparalleled Expertise in Building Industry-Leading Companies
          </h2>
          <p className="text-xl md:text-2xl text-white/80 font-light mb-12 max-w-3xl mx-auto">
            We've been investing in Healthcare companies for over forty years. Across that time, we've built out an impressive roster of expert growth drivers and strategic industry thinkers.
          </p>
          <Button size="lg" className="bg-white text-[#002759] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-bold tracking-wider uppercase">
            Meet Our Full Healthcare Team
          </Button>
        </div>
      </section>
    </div>
  );
}
