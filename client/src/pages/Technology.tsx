import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, ShieldCheck, Building2, Database, Users, GraduationCap, Landmark, CreditCard } from "lucide-react";
import techHeroBg from "@assets/1070_WCAS_March-7-23-by-John-Abbott-scaled_1771766085574.jpg";

// Import logos
import headstrongLogo from "@assets/Headstrong-logo-jpg_1771767564732.webp";
import globalCollectLogo from "@assets/Glocal-Collect-logo-jpg_1771767564738.webp";
import simeioLogo from "@assets/simeio_2x-1-300x88_1771767564739.png";
import alertLogicLogo from "@assets/Alert_Logic_2x-300x204_1771767564739.png";
import identifixLogo from "@assets/Identifix-logo-jpg_1771767564740.webp";
import linqLogo from "@assets/LINQ-300x300_1771767564740.png";
import triplePointLogo from "@assets/Triple-Point-Tech-logo-jpg_1771767564740.webp";
import ceridianLogo from "@assets/Ceridian-logo-jpg_1771767564740.webp";
import avettaLogo from "@assets/Avetta-5-300x176_1771767564741.png";
import asurionLogo from "@assets/Asurion-300x300_1771767564741.png";
import govcioLogo from "@assets/GovCIO-300x300_1771767564741.png";

const sectors = [
  { name: "Supply Chain Management Software", icon: Truck },
  { name: "Governance, Risk and Compliance", icon: ShieldCheck },
  { name: "Real Estate Technology", icon: Building2 },
  { name: "Data & Information Services", icon: Database },
  { name: "Human Capital Management", icon: Users },
  { name: "Education Tech", icon: GraduationCap },
  { name: "Government Tech", icon: Landmark },
  { name: "Finance Tech & Payments", icon: CreditCard },
];

const stats = [
  { value: "105+", label: "Current or Former Technology Investments" },
  { value: "8", label: "Focused Investment Sectors" },
  { value: "18", label: "Number of Funds" },
  { value: "45+", label: "Years Investing in Technology Companies" },
];

const news = [
  {
    date: "February 20, 2026",
    category: "News",
    title: "WCAS Portfolio Company Absorb Software Named to G2's 2026 Top 100 Global Software Companies",
    desc: "New York, NY, February 20, 2026 - WCAS portfolio company Absorb Software has been named to G2's 2026 Best Software Awards..."
  },
  {
    date: "September 16, 2025",
    category: "News",
    title: "Welsh, Carson, Anderson & Stowe Welcomes Gene Lockhart as Operating Partner",
    desc: "New York, NY - September 16th, 2025 - Welsh, Carson, Anderson & Stowe (WCAS), a leading private equity firm focused..."
  },
  {
    date: "July 31, 2025",
    category: "News",
    title: "TrueCommerce Names Bill Glass as CEO, Marking New Phase of Growth",
    desc: "Ray Greer Named Chairman of the Board; Kimberly Williams Joins Board of Directors PITTSBURGH - TrueCommerce, a WCAS portfolio..."
  }
];

export default function Technology() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-black text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={techHeroBg} 
            alt="WCAS Technology Team" 
            className="w-full h-full object-cover opacity-40 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002759]/90 via-[#002759]/60 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-6 text-white drop-shadow-lg">
            Technology
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-md">
            Leading Technology Investments Since 1979. We partner with leading B2B technology companies and their management teams to accelerate growth and build lasting success.
          </p>
        </div>
      </section>

      {/* Logo Ticker */}
      <section className="py-12 bg-white border-b border-border overflow-hidden">
        <div className="flex animate-marquee items-center">
          {/* Duplicated for seamless loop */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center shrink-0 pr-16">
              {[
                { name: 'Headstrong', src: headstrongLogo },
                { name: 'Global Collect', src: globalCollectLogo },
                { name: 'Simeio', src: simeioLogo },
                { name: 'Alert Logic', src: alertLogicLogo },
                { name: 'Identifix', src: identifixLogo },
                { name: 'LINQ', src: linqLogo },
                { name: 'Triple Point', src: triplePointLogo },
                { name: 'Ceridian', src: ceridianLogo },
                { name: 'Avetta', src: avettaLogo },
                { name: 'Asurion', src: asurionLogo },
                { name: 'GovCIO', src: govcioLogo }
              ].map((logo, j) => (
                <div key={j} className="h-16 w-32 md:w-48 relative flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <img 
                    src={logo.src} 
                    alt={`${logo.name} logo`} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Stats & Intro Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Investment Strategy</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight mb-8">
                A Trusted Partner for Long-Term Success
              </h3>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                Our approach matters because we believe it can accelerate revenue growth and operational scaling for innovative tech companies. WCAS fosters long-term relationships, valued by sellers and management teams alike to become the partner of choice.
              </p>
              <div className="w-16 h-1 bg-primary"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 flex flex-col justify-center items-center text-center group hover:shadow-md transition-shadow">
                <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-4 group-hover:scale-105 transition-transform">{stat.value}</div>
                <div className="text-sm md:text-base font-semibold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsectors Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Focused Subsectors</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight mb-6">
              Decades of Experience
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over four decades, we've continually innovated and refined our investments in specific sectors, developing an investment approach and strategy for each subsector that has allowed us to provide a differentiated viewpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, i) => {
              const Icon = sector.icon;
              return (
                <div key={i} className="group bg-secondary/20 p-8 rounded-2xl hover:bg-primary transition-colors duration-300 cursor-pointer text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-primary group-hover:text-primary" size={32} />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-foreground group-hover:text-white transition-colors duration-300">
                    {sector.name}
                  </h4>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="rounded-full px-8 group">
              View All Technology Investment Sectors
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-secondary/50 border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Insights</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
                Technology News
              </h3>
            </div>
            <Button variant="outline" className="rounded-full group">
              See All News
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <a href="#" key={i} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 h-full">
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 mb-6 text-sm">
                    <span className="text-primary font-bold tracking-wider uppercase">{item.category}</span>
                    <span className="text-muted-foreground">&bull;</span>
                    <span className="text-muted-foreground">{item.date}</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground line-clamp-3 mb-8">
                    {item.desc}
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