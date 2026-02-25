import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Cpu, Briefcase, Quote, Play, X } from "lucide-react";
import heroBg from "@assets/1115_WCAS_March_7_23_by_John_Abbott_1771874983441.JPG";
import healthcareImg from "@assets/0223_WCAS_March_13_23_by_John_Abbott_1772032006133.JPG";
import wcasLogo from "@assets/WCAS-logo-sheaco.png";
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
import logoSelect from "@assets/image_1772034518225.png";
import logoSelectColor from "@assets/image_1772040415579.png";
import logoBisys from "@assets/BISYS_final2.png";
import logoLumexa from "@assets/Lumexa_final.png";
import shieldsFullLogo from "@assets/shields_word_white_only_1772037749705.png";
import quickbaseLogo from "@assets/quickbase_white_transparent_(3)_1772034799124.png";
import absorbLogo from "@assets/absorb_text_white_only_1772037851934.png";
import norstellaLogo from "@assets/norstella_text_white_1772038125226.png";
import intoxalockLogo from "@assets/intoxalock_black_to_white_clean_1772038444095.png";
import leitersLogo from "@assets/image_1772039486572.png";
import greenStreetLogo from "@assets/greenstreet_text_white_preserve_bg_1772038753340.png";

import { useState, useEffect, useRef } from "react";

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
  { name: "Select Medical", src: logoSelectColor, scale: 0.77, mx: 22 },
  { name: "BISYS", src: logoBisys, mx: 22, scale: 0.7 },
  { name: "Lumexa Imaging", src: logoLumexa, mx: 26, scale: 0.7 }
];

const heroSlides = [
  {
    title: (
      <>For 45+ years, WCAS has partnered with industry leaders across technology & healthcare to reshape landscapes and drive growth</>
    ),
    description: ""
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
  { id: "861242809", title: "Paths to Growth", partner: "quickbase", partnerLogo: quickbaseLogo, logoClass: "h-6 md:h-7" },
  { id: "913387748", title: "Investing in Better Healthcare", partner: "SHIELDS HEALTH SOLUTIONS", partnerLogo: shieldsFullLogo, logoClass: "h-9 md:h-10" },
  { id: "861242949", title: "Paths to Growth", partner: "absorb", partnerLogo: absorbLogo },
  { id: "913387297", title: "Investing in Better Healthcare", partner: "norstella", partnerLogo: norstellaLogo, logoClass: "h-12 md:h-14 -mt-1" },
  { id: "861243091", title: "Paths to Growth", partner: "intoxalock", partnerLogo: intoxalockLogo, logoClass: "h-6 md:h-7" },
  { id: "913334845", title: "", partner: "Concentra", specialLayout: true },
  { id: "861243221", title: "Paths to Growth", partner: "Green Street", partnerLogo: greenStreetLogo, logoClass: "h-10 md:h-12 -mt-2" },
  { id: "913388269", title: "Investing in Better Healthcare", partner: "Leiters Health", partnerLogo: leitersLogo, logoClass: "h-6 md:h-7" }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasDragged = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
    sliderRef.current.style.cursor = 'grabbing';
    sliderRef.current.style.scrollSnapType = 'none';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 5) hasDragged.current = true;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    if (!sliderRef.current) return;
    isDragging.current = false;
    sliderRef.current.style.cursor = 'grab';
    sliderRef.current.style.scrollSnapType = 'x mandatory';
  };

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('div') as HTMLElement;
      const scrollAmount = card ? card.offsetWidth + 16 : sliderRef.current.offsetWidth * 0.35;
      sliderRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[34vh] md:min-h-[44vh] flex items-center pt-24 pb-8 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#0d1f3c]"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center justify-center h-full">
          <div className="pb-40 md:pb-44 lg:pb-48 xl:pb-44 flex flex-col items-center text-center">
            <img src={wcasLogo} alt="WCAS" className="h-20 md:h-28 w-auto brightness-0 invert mb-14" />
            <h1 className="text-[1.386rem] md:text-[1.733rem] font-bold text-white leading-[1.3] tracking-normal max-w-4xl" >
              {heroSlides[0].title}
            </h1>
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
              <div key={index} className="flex-shrink-0 w-[167px] h-[61px] flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-300 cursor-pointer" style={{ marginLeft: `${logo.mx}px`, marginRight: `${logo.mx}px` }}>
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
      <section className="pt-2 pb-16 bg-secondary/50">
        <div className="container mx-auto px-6 md:px-12">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {/* Box 1 */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden flex flex-col">
              <div className="h-72 w-full overflow-hidden relative">
                <img 
                  src={healthcareImg} 
                  alt="Team discussion in office lounge" 
                  className="w-full h-full object-cover object-[center_25%] scale-125 group-hover:scale-[1.35] transition-transform duration-700 ease-out"
                />
              </div>
              <div className="py-6 md:py-8 px-10 md:px-12 flex-grow flex items-center justify-center">
                <h4 className="text-3xl md:text-4xl font-heading font-bold">Healthcare</h4>
              </div>
            </div>

            {/* Box 2 */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden flex flex-col">
              <div className="h-72 w-full overflow-hidden relative">
                <img 
                  src={talentImg} 
                  alt="Team discussion in conference room" 
                  className="w-full h-full object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="py-6 md:py-8 px-10 md:px-12 flex-grow flex items-center justify-center">
                <h4 className="text-3xl md:text-4xl font-heading font-bold">Technology</h4>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Mission & Video Slider Section */}
      <section className="pt-20 md:pt-24 text-primary-foreground relative overflow-hidden bg-[#002759]">
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16 md:mb-24">
            <div className="max-w-[85vw] md:max-w-2xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-8 tracking-tighter">
                Our Mission: Be Your Partner of Choice
              </h2>
              <div className="w-20 h-1 bg-white/30 mb-8 mx-auto lg:mx-0"></div>
            </div>
            <div className="max-w-[85vw] md:max-w-2xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left lg:pt-2">
              <p className="text-xl md:text-2xl leading-relaxed text-white/90 font-light">
                WCAS’s mission is to lead in Healthcare and Technology investments through thought leadership, culture, and results. We create deep partnerships and are frequently selected as the preferred partner by executives and investors.
              </p>
            </div>
          </div>
          
          {/* Video Slider - Aligned left, reaches right edge of screen */}
          <div className="flex items-center gap-4 mb-12">
            <button
              onClick={() => scrollSlider('left')}
              className="shrink-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white/40 transition-colors"
            >
              <ArrowRight size={20} className="rotate-180" />
            </button>
            <div
              ref={sliderRef}
              className="flex gap-4 md:gap-6 overflow-x-auto pb-2 snap-x snap-mandatory flex-1 cursor-grab select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {wcasVideos.map((video, index) => (
                <div key={index} className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[30vw] snap-center shrink-0 rounded-xl overflow-hidden aspect-video bg-[#0f172a] relative group shadow-2xl">
                    <div 
                      className="absolute inset-0 cursor-pointer text-white p-6 md:p-8 flex flex-col justify-center"
                      onClick={() => { if (!hasDragged.current) setPlayingVideo(video.id); }}
                    >
                      {'specialLayout' in video && video.specialLayout ? (
                        <div className="flex flex-col items-center justify-center h-full w-full group-hover:scale-[1.02] transition-transform duration-500 gap-3">
                          <h3 className="text-base md:text-xl font-bold font-heading leading-tight text-center max-w-[95%]">{video.title}</h3>
                          <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center justify-center w-full">
                              <div className="flex-1 flex justify-end pr-3 md:pr-4">
                                <img src={wcasLogo} alt="WCAS" className="h-5 md:h-6 w-auto brightness-0 invert" />
                              </div>
                              <div className="w-px h-8 md:h-10 bg-white/20"></div>
                              <div className="flex-1 flex justify-start pl-3 md:pl-4">
                                <img src={logoSelect} alt="Select Medical" className="h-10 md:h-14 w-auto" />
                              </div>
                            </div>
                            <h4 className="text-xl md:text-3xl font-bold font-heading tracking-tight">{video.partner}</h4>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-4 md:gap-6 h-full w-full group-hover:scale-[1.02] transition-transform duration-500">
                          <div className="text-right flex-1 flex justify-end">
                            <h3 className="text-base md:text-xl font-bold font-heading leading-tight">{video.title}</h3>
                          </div>
                          <div className="w-px h-12 md:h-16 bg-white/20"></div>
                          <div className="text-left flex-1">
                            {'partnerLogo' in video && video.partnerLogo ? (
                              <img src={video.partnerLogo} alt={video.partner} className={`${'logoClass' in video && video.logoClass ? video.logoClass : 'h-10 md:h-12'} w-auto -ml-1`} style={{ imageRendering: 'auto', WebkitFontSmoothing: 'antialiased' }} />
                            ) : (
                              <h4 className="text-lg md:text-2xl font-bold font-heading tracking-tight">{video.partner}</h4>
                            )}
                          </div>
                        </div>
                      )}
                      
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 w-12 h-8 md:w-14 md:h-10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors z-10 backdrop-blur-sm">
                        <Play className="text-white fill-white" size={20} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            <button
              onClick={() => scrollSlider('right')}
              className="shrink-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white/40 transition-colors"
            >
              <ArrowRight size={20} />
            </button>
          </div>
          </div>

          {/* Button moved below scroller */}
        <div className="flex justify-center pb-24 md:pb-32 relative z-10">
          <Button size="lg" variant="secondary" className="rounded-full px-14 py-6 text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer">
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
      <section className="py-24 md:py-32 bg-[#002759] border-t border-transparent">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold uppercase tracking-widest text-white/70 mb-4">Insights</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
                News & Perspectives
              </h3>
            </div>
            <Button variant="outline" className="rounded-full group hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border-white/40 text-white hover:bg-white/10 hover:text-white">
              See All News
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
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
              <a href="#" key={i} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-white/20 h-full">
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