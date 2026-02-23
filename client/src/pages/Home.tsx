import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Cpu, Briefcase, Quote, Play, X } from "lucide-react";
import heroBg from "@assets/1115_WCAS_March_7_23_by_John_Abbott_1771874983441.JPG";
import missionBg from "@assets/2345234534_1771799538730.jpg";
import growthImg from "@assets/WCAS_March-13_04509616.mov.20_53_56_26.Still001-scaled_1771765691568.webp";
import talentImg from "@assets/137_WCAS_March-6-23-by-John-Abbott-scaled_1771765917799.jpg";
import techImg from "@assets/1070_WCAS_March-7-23-by-John-Abbott-scaled_1771766085574.jpg";
import maImg from "@assets/healthcare-RESIZED-jpg_1771766272998.webp";
import testimonial1 from "@/assets/images/testimonial-1.png";
import testimonial2 from "@/assets/images/testimonial-2.png";

// Company Logos
import logoTransfirst from "@assets/Transfirst_final.png";
import logoLinq from "@assets/LINQ_1771799704131_trimmed.png";
import logoShields from "@assets/Shields_final.png";
import logoAvetta from "@assets/Avetta_final2.png";
import logoAsurion from "@assets/Asurion_1771799704133_trimmed.png";
import logoInnovAge from "@assets/InnovAge_1771799704134_trimmed.png";
import logoQuickbase from "@assets/Quickbase_1771799704134_transparent.png";
import logoGovCIO from "@assets/GovCIO_1771799704134_trimmed.png";
import logoKindred from "@assets/Kindred_final.png";
import logoClearwater from "@assets/Clearwater-Analytics_1771799704135_trimmed.png";
import logoAlliance from "@assets/AllianceData_1771799704135_trimmed.png";
import logoNavihealth from "@assets/navihealth_final.png";
import logoNorstella from "@assets/Norstella_final.png";
import logoSelect from "@assets/Select_final.png";
import logoBisys from "@assets/BISYS_final2.png";
import logoLumexa from "@assets/Lumexa_final.png";

import { useState, useEffect } from "react";

const logos = [
  { name: "Transfirst", src: logoTransfirst, mx: 30 },
  { name: "Shields Health", src: logoShields, mx: 28 },
  { name: "Avetta", src: logoAvetta, mx: 26 },
  { name: "Asurion", src: logoAsurion, mx: 26 },
  { name: "InnovAge", src: logoInnovAge, mx: 30 },
  { name: "Quickbase", src: logoQuickbase, mx: 30 },
  { name: "GovCIO", src: logoGovCIO, mx: 32 },
  { name: "Kindred at Home", src: logoKindred, mx: 32 },
  { name: "Clearwater Analytics", src: logoClearwater, mx: 30 },
  { name: "AllianceData", src: logoAlliance, mx: 30 },
  { name: "naviHealth", src: logoNavihealth, mx: 26 },
  { name: "Norstella", src: logoNorstella, mx: 26 },
  { name: "Select Medical", src: logoSelect, scale: 0.7, mx: 22 },
  { name: "BISYS", src: logoBisys, mx: 22, scale: 0.7 },
  { name: "Lumexa Imaging", src: logoLumexa, mx: 26, scale: 0.7 }
];

const heroSlides = [
  {
    title: (
      <>Supporting innovation and growth in <span className="text-white underline decoration-[#4da3ff] decoration-4 underline-offset-8">Technology</span> and <span className="text-white underline decoration-[#4da3ff] decoration-4 underline-offset-8">Healthcare</span></>
    ),
    description: "Forming ongoing partnerships with leading management teams to build exceptional companies."
  },
  {
    title: (
      <>Empowering visionary <span className="text-primary">Leaders</span> to redefine their <span className="text-primary">Industries</span></>
    ),
    description: "Providing the strategic guidance and capital required to scale market-leading platforms."
  },
  {
    title: (
      <>Four decades of <span className="text-primary">Excellence</span> in private <span className="text-primary">Equity</span></>
    ),
    description: "A proven track record of creating value through operational improvements and strategic M&A."
  }
];

const wcasVideos = [
  { id: "861242809", title: "Investing in Better Healthcare", partner: "SHIELDS HEALTH SOLUTIONS" },
  { id: "913387748", title: "Investing in Technology", partner: "quickbase" },
  { id: "861242949", title: "Strategic Growth Investment", partner: "TrueCommerce" },
  { id: "913387297", title: "Building Sustainable Platforms", partner: "Concentra" },
  { id: "861243091", title: "Investing in Better Healthcare", partner: "InnovAge" },
  { id: "913334845", title: "Advancing Front-Office Automation", partner: "EquiLend" },
  { id: "861243221", title: "Investing in Technology", partner: "Clearway" },
  { id: "913388269", title: "Strategic Growth Investment", partner: "AIA Contract Documents" }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-end pt-24 pb-12 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#002759]/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#002759] via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl relative">
            
            {/* Hero Content */}
            <div className="pb-32 md:pb-32 lg:pb-40 xl:pb-32">
              <div className="flex flex-col justify-center">
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tighter">
                  {heroSlides[0].title}
                </h1>
              </div>
            </div>
            
          </div>
        </div>

        {/* Stats (Static below carousel, spanning full width at bottom) */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-border py-4 md:py-6 z-20 overflow-x-auto scrollbar-hide">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center justify-start md:justify-center animate-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both min-w-max md:min-w-0">
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 shrink-0">
                <p className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-0 leading-none md:leading-normal">18</p>
                <p className="text-[10px] md:text-sm font-semibold uppercase tracking-wider text-muted-foreground max-w-[70px] md:max-w-[100px] leading-tight text-left">Funds Raised</p>
              </div>
              <div className="w-px h-10 md:h-12 bg-border shrink-0"></div>
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 shrink-0">
                <p className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-0 leading-none md:leading-normal">45+</p>
                <p className="text-[10px] md:text-sm font-semibold uppercase tracking-wider text-muted-foreground max-w-[70px] md:max-w-[100px] leading-tight text-left">Years of Experience</p>
              </div>
              <div className="w-px h-10 md:h-12 bg-border shrink-0"></div>
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 shrink-0">
                <p className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-0 leading-none md:leading-normal">190+</p>
                <p className="text-[10px] md:text-sm font-semibold uppercase tracking-wider text-muted-foreground max-w-[70px] md:max-w-[100px] leading-tight text-left">Companies</p>
              </div>
              <div className="w-px h-10 md:h-12 bg-border shrink-0"></div>
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 shrink-0 pr-6 md:pr-0">
                <p className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-0 leading-none md:leading-normal">$33B+</p>
                <p className="text-[10px] md:text-sm font-semibold uppercase tracking-wider text-muted-foreground max-w-[70px] md:max-w-[100px] leading-tight text-left">Capital Raised</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Logos Ticker */}
      <section className="py-8 border-t border-border overflow-hidden bg-secondary/50">
        <div className="relative w-full overflow-hidden flex items-center py-4">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/50 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
            {/* Render logos 3 times to ensure smooth infinite scroll */}
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-[167px] h-[61px] flex items-center justify-center opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" style={{ marginLeft: `${logo.mx}px`, marginRight: `${logo.mx}px` }}>
                <img 
                  src={logo.src} 
                  alt={`${logo.name} logo`} 
                  className="max-w-full max-h-full object-contain mix-blend-multiply"
                  style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* The 4 Boxes - Reimagined Layout */}
      <section className="pb-32 bg-secondary/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-20">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Our Approach</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight tracking-tight">
              For nearly five decades, WCAS has partnered with industry leaders to reshape landscapes and drive growth.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {/* Box 1 */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 relative overflow-hidden flex flex-col">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={growthImg} 
                  alt="Team member working on tablet" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-10 md:p-12 flex-grow">
                <h4 className="text-2xl font-heading font-bold mb-4">Growth</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Guiding sustainable organic growth strategies
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 relative overflow-hidden flex flex-col">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={talentImg} 
                  alt="Team discussion in conference room" 
                  className="w-full h-full object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-10 md:p-12 flex-grow">
                <h4 className="text-2xl font-heading font-bold mb-4">Talent</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Cultivating top teams and company culture
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 relative overflow-hidden flex flex-col">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={techImg} 
                  alt="Team networking in bright office space" 
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-10 md:p-12 flex-grow">
                <h4 className="text-2xl font-heading font-bold mb-4">Technology</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Fueling tech evolution and unlocking new potential
                </p>
              </div>
            </div>

            {/* Box 4 */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 relative overflow-hidden flex flex-col">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={maImg} 
                  alt="Team looking out over city skyline" 
                  className="w-full h-full object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-10 md:p-12 flex-grow">
                <h4 className="text-2xl font-heading font-bold mb-4">M & A</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Evaluating and sourcing prime targets
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Video Slider Section */}
      <section className="pt-20 md:pt-24 text-primary-foreground relative overflow-hidden">
        {/* Abstract shapes for background interest */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] rounded-full border border-white/10 opacity-50 z-0"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] rounded-full border border-white/10 opacity-50 z-0"></div>
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${missionBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#002759]/80"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16 md:mb-24">
            <div className="max-w-[85vw] md:max-w-2xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-8 tracking-tighter">
                Our Mission: Your Partner of Choice
              </h2>
              <div className="w-20 h-1 bg-white/30 mb-8 mx-auto lg:mx-0"></div>
            </div>
            <div className="max-w-[85vw] md:max-w-2xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left">
              <p className="text-xl md:text-2xl leading-relaxed text-white/90 font-light">
                WCAS’s mission is to lead in Healthcare and Technology investments through thought leadership, culture, and results. We create deep partnerships and are frequently selected as the preferred partner by executives and investors.
              </p>
            </div>
          </div>
          
          {/* Video Slider - Aligned left, reaches right edge of screen */}
          <div className="relative w-[100vw] -ml-6 md:-ml-12 lg:ml-0 lg:w-[calc(50%+50vw)] mb-12">
            <div className="flex gap-4 md:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide px-6 md:px-12 lg:px-0 lg:pr-12" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {wcasVideos.map((video, index) => (
                <div key={index} className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[30vw] snap-center shrink-0 rounded-xl overflow-hidden aspect-video bg-[#0f172a] relative group shadow-2xl">
                    <div 
                      className="absolute inset-0 cursor-pointer text-white p-6 md:p-8 flex flex-col justify-center"
                      onClick={() => setPlayingVideo(video.id)}
                    >
                      <div className="flex items-center justify-center gap-4 md:gap-6 h-full w-full group-hover:scale-[1.02] transition-transform duration-500">
                        <div className="text-right flex-1 flex justify-end">
                          <h3 className="text-sm md:text-base font-bold font-heading leading-tight">{video.title}</h3>
                        </div>
                        <div className="w-px h-12 md:h-16 bg-white/20"></div>
                        <div className="text-left flex-1">
                          <p className="text-[10px] text-white/60 mb-1 tracking-wide">In Partnership with</p>
                          <h4 className="text-base md:text-lg font-bold font-heading tracking-tight">{video.partner}</h4>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-4 left-6 md:bottom-6 md:left-8">
                        <span className="text-sm md:text-base font-heading font-bold tracking-widest text-white/40">WCAS</span>
                      </div>
                      
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 w-12 h-8 md:w-14 md:h-10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors z-10 backdrop-blur-sm">
                        <Play className="text-white fill-white" size={20} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Scroll hint indicators */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
                <ArrowRight size={20} />
              </div>
            </div>
          </div>

          {/* Button moved below scroller */}
        <div className="flex justify-center pb-24 md:pb-32 relative z-10">
          <Button size="lg" variant="secondary" className="rounded-full px-10 font-semibold shadow-lg hover:shadow-xl transition-all">
            Learn More About Our History
          </Button>
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
      {/* News Section Redesign */}
      <section className="py-24 md:py-32 bg-secondary/50 border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
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