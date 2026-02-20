import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Cpu, Briefcase, Quote } from "lucide-react";
import heroBg from "@assets/healthcare-portfolio-RESIZE-jpg_1771595437015.webp";
import testimonial1 from "@/assets/images/testimonial-1.png";
import testimonial2 from "@/assets/images/testimonial-2.png";

// Placeholder logos array
const logos = [
  "Fiserv", "Norstella", "Select Medical", "NaviHealth", 
  "AllianceData", "Clearwater", "Quickbase", "InnovAge", 
  "Asurion", "Avetta", "Shields Health", "LINQ"
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-foreground leading-[1.1] tracking-tighter mb-8 animate-in slide-in-from-bottom-8 duration-700">
              Supporting innovation and growth in <span className="text-primary">Technology</span> and <span className="text-primary">Healthcare</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed animate-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
              Forming ongoing partnerships with leading management teams to build exceptional companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 animate-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
              <div className="border-l-4 border-primary pl-6">
                <p className="text-5xl font-heading font-bold text-foreground mb-1">18</p>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Funds Raised</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <p className="text-5xl font-heading font-bold text-foreground mb-1">45+</p>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Ticker */}
      <section className="py-12 border-y border-border bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 mb-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground text-center">Over 300 Companies Partnered</p>
        </div>
        <div className="relative w-full logo-ticker flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex space-x-16 animate-scroll whitespace-nowrap px-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Double the logos to make continuous scroll seamless */}
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <span key={index} className="text-xl md:text-2xl font-heading font-bold text-foreground/80 hover:text-primary transition-colors">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* The 4 Boxes - Reimagined Layout */}
      <section className="py-32 bg-secondary/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-20">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Our Approach</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight tracking-tight">
              Four decades working to reshape landscapes and drive growth.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {/* Box 1 */}
            <div className="group bg-white p-10 md:p-12 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
                <TrendingUp size={120} />
              </div>
              <div className="h-16 w-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <TrendingUp size={32} />
              </div>
              <h4 className="text-2xl font-heading font-bold mb-4">Growth</h4>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Guiding sustainable organic growth strategies to ensure long-term market dominance and profitability.
              </p>
            </div>

            {/* Box 2 */}
            <div className="group bg-white p-10 md:p-12 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
                <Users size={120} />
              </div>
              <div className="h-16 w-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Users size={32} />
              </div>
              <h4 className="text-2xl font-heading font-bold mb-4">Talent</h4>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Cultivating top teams and company culture to attract, retain, and empower industry-leading professionals.
              </p>
            </div>

            {/* Box 3 */}
            <div className="group bg-white p-10 md:p-12 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
                <Cpu size={120} />
              </div>
              <div className="h-16 w-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Cpu size={32} />
              </div>
              <h4 className="text-2xl font-heading font-bold mb-4">Technology</h4>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Fueling tech evolution and unlocking new potential through strategic digital transformation.
              </p>
            </div>

            {/* Box 4 */}
            <div className="group bg-white p-10 md:p-12 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
                <Briefcase size={120} />
              </div>
              <div className="h-16 w-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Briefcase size={32} />
              </div>
              <h4 className="text-2xl font-heading font-bold mb-4">M & A</h4>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Evaluating and sourcing prime targets to accelerate expansion and build comprehensive platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Abstract shapes for background interest */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] rounded-full border border-white/10 opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] rounded-full border border-white/10 opacity-50"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-8 tracking-tighter">
                Our Mission: Your Partner of Choice
              </h2>
              <div className="w-20 h-1 bg-white/30 mb-8"></div>
            </div>
            <div>
              <p className="text-xl md:text-2xl leading-relaxed text-white/90 font-light mb-10">
                WCAS’s mission is to lead in Healthcare and Technology investments through thought leadership, culture, and results. We create deep partnerships and are frequently selected as the preferred partner by executives and investors.
              </p>
              <Button size="lg" variant="secondary" className="rounded-full px-8 font-semibold">
                Learn More About Our History
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Redesign (No video, sleek quote cards) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Perspectives</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
              Partnership Success Stories
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Testimonial 1 */}
            <div className="bg-secondary/30 p-10 md:p-12 rounded-3xl relative">
              <Quote className="absolute top-10 right-10 text-primary/10 rotate-180" size={80} />
              <div className="flex gap-6 items-center mb-8 relative z-10">
                <img src={testimonial1} alt="CEO" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-sm" />
                <div>
                  <h4 className="text-xl font-bold font-heading">Jack Shields</h4>
                  <p className="text-muted-foreground font-medium">Founder & Chairman, Shields Health Solutions</p>
                </div>
              </div>
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 font-light italic relative z-10">
                "Their deep domain expertise in healthcare services was instrumental in our rapid expansion across the country. They are true partners who understand how to build sustainable platforms."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-secondary/30 p-10 md:p-12 rounded-3xl relative">
              <Quote className="absolute top-10 right-10 text-primary/10 rotate-180" size={80} />
              <div className="flex gap-6 items-center mb-8 relative z-10">
                <img src={testimonial2} alt="CEO" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-sm" />
                <div>
                  <h4 className="text-xl font-bold font-heading">Keith Newton</h4>
                  <p className="text-muted-foreground font-medium">CEO, Concentra</p>
                </div>
              </div>
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 font-light italic relative z-10">
                "WCAS brought more than just capital. They brought strategic vision, operational excellence, and an unparalleled network that accelerated our growth trajectory significantly."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section Redesign */}
      <section className="py-32 bg-secondary/50 border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Insights</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
                News & Perspectives
              </h3>
            </div>
            <Button variant="outline" className="rounded-full group">
              See All News
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                date: "July 31, 2025",
                category: "News",
                title: "TrueCommerce Names Bill Glass as CEO, Marking New Phase of Growth",
                desc: "Ray Greer Named Chairman of the Board; Kimberly Williams Joins Board of Directors..."
              },
              {
                date: "July 29, 2025",
                category: "News",
                title: "EquiLend Acquires Trading Apps to Advance Front-Office Automation",
                desc: "Trading Apps' tools and trade messaging service strengthen EquiLend's automation across the full trade lifecycle..."
              },
              {
                date: "July 8, 2025",
                category: "News",
                title: "WCAS Announces Strategic Growth Investment in AIA Contract Documents",
                desc: "A leading private equity firm with a 45-year track record invests in the gold standard for risk management..."
              }
            ].map((news, i) => (
              <a href="#" key={i} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 h-full">
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 mb-6 text-sm">
                    <span className="text-primary font-bold tracking-wider uppercase">{news.category}</span>
                    <span className="text-muted-foreground">&bull;</span>
                    <span className="text-muted-foreground">{news.date}</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                    {news.title}
                  </h4>
                  <p className="text-muted-foreground line-clamp-3 mb-8">
                    {news.desc}
                  </p>
                  <div className="mt-auto pt-6 border-t border-border flex items-center font-semibold text-primary">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}