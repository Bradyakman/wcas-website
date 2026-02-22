import { Button } from "@/components/ui/button";
import { ArrowRight, Play, X } from "lucide-react";
import { useState } from "react";
import techHeroBg from "@assets/1070_WCAS_March-7-23-by-John-Abbott-scaled_1771766085574.jpg";
import sector1 from "@/assets/images/sector_1.jpg";
import sector2 from "@/assets/images/sector_2.jpg";
import sector3 from "@/assets/images/sector_3.jpg";
import sector4 from "@/assets/images/sector_4.jpg";
import sector5 from "@/assets/images/sector_5.jpg";
import sector6 from "@/assets/images/sector_6.jpg";
import sector7 from "@/assets/images/sector_7.jpg";
import sector8 from "@/assets/images/sector_8.jpg";

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
  { name: "Supply Chain Management Software", image: sector1 },
  { name: "Governance, Risk and Compliance", image: sector2 },
  { name: "Real Estate Technology", image: sector3 },
  { name: "Data & Information Services", image: sector4 },
  { name: "Human Capital Management", image: sector5 },
  { name: "Education Tech", image: sector6 },
  { name: "Government Tech", image: sector7 },
  { name: "Finance Tech & Payments", image: sector8 },
];

const stats = [
  { value: "105+", label: "Current or Former Technology Investments" },
  { value: "8", label: "Focused Investment Sectors" },
  { value: "18", label: "Number of Funds" },
  { value: "45+", label: "Years Investing in Tech" },
];

const wcasVideos = [
  { id: "861242809", title: "Building Success", partner: "Green Street" },
  { id: "861242949", title: "Partnership Growth", partner: "Quickbase" },
  { id: "861243091", title: "Strategic Vision", partner: "Absorb" },
  { id: "861243091", title: "Market Leadership", partner: "Intoxalock" }
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
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

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
      <section className="py-8 bg-white border-b border-border overflow-hidden">
        <div className="flex animate-marquee items-center">
          {/* Duplicated for seamless loop */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-20 md:gap-24 items-center shrink-0 pr-20 md:pr-24">
              {[
                { name: 'Headstrong', src: headstrongLogo },
                { name: 'Global Collect', src: globalCollectLogo },
                { name: 'Simeio', src: simeioLogo, className: "scale-75" },
                { name: 'Alert Logic', src: alertLogicLogo },
                { name: 'Identifix', src: identifixLogo },
                { name: 'LINQ', src: linqLogo, className: "scale-90" },
                { name: 'Triple Point', src: triplePointLogo },
                { name: 'Ceridian', src: ceridianLogo },
                { name: 'Avetta', src: avettaLogo },
                { name: 'Asurion', src: asurionLogo },
                { name: 'GovCIO', src: govcioLogo }
              ].map((logo, j) => (
                <div key={j} className="h-16 w-36 md:h-20 md:w-48 lg:w-56 relative flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <img 
                    src={logo.src} 
                    alt={`${logo.name} logo`} 
                    className={`max-h-full max-w-full object-contain mix-blend-multiply ${logo.className || ''}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Stats & Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
            {/* Main Stat */}
            <div className="md:col-span-1 border-b border-border/50 pb-8 md:border-0 md:pb-0">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">{stats[0].label}</div>
              <div className="text-7xl md:text-8xl lg:text-9xl font-serif font-normal tracking-tighter text-foreground">{stats[0].value}</div>
            </div>

            {/* Other Stats */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.slice(1).map((stat, i) => (
                <div key={i} className="flex flex-col justify-start">
                  <div className="text-xs font-semibold text-muted-foreground mb-4 h-8 flex items-end">{stat.label}</div>
                  <div className="text-4xl md:text-5xl font-serif font-normal tracking-tight text-foreground border-b border-border pb-4">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-xs text-muted-foreground/60 font-medium">
            Note: All figures as of December 31, 2025, unless otherwise indicated.
          </div>
        </div>
      </section>

      {/* Video Slider Section */}
      <section className="py-20 md:pt-24 md:pb-12 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Abstract shapes for background interest */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] rounded-full border border-white/10 opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] rounded-full border border-white/10 opacity-50"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-8 tracking-tighter">
                Partnership Success Stories
              </h2>
              <div className="w-20 h-1 bg-white/30 mb-8"></div>
            </div>
            <div>
              <p className="text-xl md:text-2xl leading-relaxed text-white/90 font-light mb-10">
                Hear directly from the executives and founders we've partnered with about how our technology expertise and strategic support helped accelerate their growth.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden mt-8 mb-12">
          <div className="flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-12 pb-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {wcasVideos.map((video, index) => (
              <div key={index} className="min-w-[85vw] md:min-w-[60vw] lg:min-w-[45vw] snap-center shrink-0 rounded-xl overflow-hidden aspect-video bg-[#0f172a] relative group shadow-2xl">
                <div 
                  className="absolute inset-0 cursor-pointer text-white p-6 md:p-8 flex flex-col justify-center"
                  onClick={() => setPlayingVideo(video.id)}
                >
                  <div className="flex items-center justify-center gap-4 md:gap-6 h-full w-full group-hover:scale-[1.02] transition-transform duration-500">
                    <div className="text-right flex-1 flex justify-end">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold font-heading leading-tight max-w-[200px]">{video.title}</h3>
                    </div>
                    <div className="w-px h-16 md:h-24 bg-white/20"></div>
                    <div className="text-left flex-1">
                      <p className="text-[10px] md:text-xs lg:text-sm text-white/60 mb-1 md:mb-2 tracking-wide">In Partnership with</p>
                      <h4 className="text-xl md:text-2xl lg:text-3xl font-bold font-heading tracking-tight">{video.partner}</h4>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-6 md:bottom-6 md:left-8">
                    <span className="text-lg md:text-xl font-heading font-bold tracking-widest text-white/40">WCAS</span>
                  </div>
                  
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 w-14 h-10 md:w-16 md:h-12 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors z-10 backdrop-blur-sm">
                    <Play className="text-white fill-white" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll hint indicators */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
            <ArrowRight size={24} />
          </div>
        </div>
      </section>

      {/* Subsectors Grid */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12 mb-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Focused Subsectors</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight mb-6">
              Decades of Experience
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over four decades, we've continually innovated and refined our investments in specific sectors, developing an investment approach and strategy for each subsector that has allowed us to provide a differentiated viewpoint.
            </p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-12 pb-12 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {sectors.map((sector, i) => (
              <div key={i} className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[30vw] snap-center shrink-0 rounded-2xl overflow-hidden aspect-[4/3] bg-black relative group shadow-lg cursor-pointer">
                <img 
                  src={sector.image} 
                  alt={sector.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4 leading-tight">
                      {sector.name}
                    </h4>
                    <div className="flex items-center text-primary-foreground font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      View Sector
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center relative z-10">
          <Button size="lg" className="rounded-full px-8 group">
            View All Technology Investment Sectors
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
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
      {/* Video Lightbox Modal */}
      {playingVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8" onClick={() => setPlayingVideo(null)}>
          <button 
            className="absolute top-6 right-6 md:top-8 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              setPlayingVideo(null);
            }}
          >
            <X size={24} />
          </button>
          
          <div 
            className="w-full max-w-6xl aspect-video bg-black rounded-lg shadow-2xl overflow-hidden relative border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe 
              src={`https://player.vimeo.com/video/${playingVideo}?h=dbf9bc9a77&title=0&byline=0&portrait=0&autoplay=1`}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}