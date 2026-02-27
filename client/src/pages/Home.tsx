import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Cpu, Briefcase, Quote, Play, X } from "lucide-react";
import heroBg from "@assets/1115_WCAS_March_7_23_by_John_Abbott_1771874983441.JPG";
import wcasLogo from "@assets/WCAS-logo-sheaco.png";
import missionBg from "@assets/2345234534_1771799538730.jpg";
import growthImg from "@assets/WCAS_March-13_04509616.mov.20_53_56_26.Still001-scaled_1771765691568.webp";
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
      <>For over 45 years, WCAS has partnered with industry leaders across technology & healthcare to reshape landscapes and drive growth</>
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
  { id: "861242809", title: "Paths to Growth", partner: "quickbase", partnerLogo: quickbaseLogo, centeredLayout: true, logoClass: "h-8 md:h-10" },
  { id: "913387748", title: "Investing in Better Healthcare", partner: "SHIELDS HEALTH SOLUTIONS", partnerLogo: shieldsFullLogo, centeredLayout: true, logoClass: "h-10 md:h-12" },
  { id: "861242949", title: "Paths to Growth", partner: "absorb", partnerLogo: absorbLogo, centeredLayout: true, logoClass: "h-10 md:h-12" },
  { id: "913387297", title: "Investing in Better Healthcare", partner: "norstella", partnerLogo: norstellaLogo, centeredLayout: true, logoClass: "h-12 md:h-14" },
  { id: "861243091", title: "Paths to Growth", partner: "intoxalock", partnerLogo: intoxalockLogo, centeredLayout: true, logoClass: "h-8 md:h-10" },
  { id: "913334845", title: "Investing in Better Healthcare", partner: "Concentra", specialLayout: true },
  { id: "861243221", title: "Paths to Growth", partner: "Green Street", partnerLogo: greenStreetLogo, centeredLayout: true, logoClass: "h-12 md:h-14" },
  { id: "913388269", title: "Investing in Better Healthcare", partner: "Leiters Health", partnerLogo: leitersLogo, centeredLayout: true, logoClass: "h-8 md:h-10" }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const newsScrollRef = useRef<HTMLDivElement>(null);
  const hasDragged = useRef(false);
  const newsHasDragged = useRef(false);

  const makeDragHandlers = (draggedRef: React.MutableRefObject<boolean>) => {
    const THRESHOLD = 6;
    let isPointerDown = false;
    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;
    let pointerId = -1;
    let containerEl: HTMLDivElement | null = null;
    return {
      onPointerDown: (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.pointerType === 'touch') return;
        isPointerDown = true;
        isDragging = false;
        draggedRef.current = false;
        startX = e.clientX;
        startScrollLeft = e.currentTarget.scrollLeft;
        pointerId = e.pointerId;
        containerEl = e.currentTarget;
      },
      onPointerMove: (e: React.PointerEvent<HTMLDivElement>) => {
        if (!isPointerDown) return;
        const dx = e.clientX - startX;
        if (!isDragging && Math.abs(dx) >= THRESHOLD) {
          isDragging = true;
          draggedRef.current = true;
          if (containerEl) {
            containerEl.setPointerCapture(pointerId);
            containerEl.style.cursor = 'grabbing';
            containerEl.style.userSelect = 'none';
            containerEl.style.scrollSnapType = 'none';
          }
        }
        if (isDragging) {
          e.preventDefault();
          e.currentTarget.scrollLeft = startScrollLeft - dx;
        }
      },
      onPointerUp: (e: React.PointerEvent<HTMLDivElement>) => {
        if (!isPointerDown) return;
        isPointerDown = false;
        const el = e.currentTarget;
        if (isDragging) {
          try { el.releasePointerCapture(pointerId); } catch (_) {}
        }
        el.style.cursor = 'grab';
        el.style.scrollSnapType = 'x mandatory';
        el.style.userSelect = '';
        containerEl = null;
        setTimeout(() => { isDragging = false; draggedRef.current = false; }, 0);
      },
    };
  };

  const [videoDrag] = useState(() => makeDragHandlers(hasDragged));
  const [newsDrag] = useState(() => makeDragHandlers(newsHasDragged));

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
        <div className="absolute inset-0 z-0" style={{ background: 'radial-gradient(ellipse at center, #243352 0%, #1a2744 70%)' }}></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center justify-center h-full">
          <div className="pb-36 md:pb-40 lg:pb-44 xl:pb-40 flex flex-col items-center text-center">
            <img src={wcasLogo} alt="WCAS" className="h-20 md:h-28 w-auto brightness-0 invert mb-14" />
            <h1 className="text-[1.386rem] md:text-[1.733rem] font-bold text-white leading-[1.3] tracking-normal max-w-4xl" >
              {heroSlides[0].title}
            </h1>
          </div>
        </div>

        {/* Stats (Static below carousel, spanning full width at bottom) */}
        <div className="absolute bottom-0 left-0 right-0 z-20 overflow-x-auto scrollbar-hide" style={{ backgroundColor: '#ffffff' }}>
          <div className="container mx-auto px-6 md:px-12 py-6 md:py-7">
            <div className="flex flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center justify-start md:justify-center animate-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both min-w-max md:min-w-0">
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 shrink-0">
                <p className="font-bold mb-0 leading-none md:leading-normal" style={{ fontFamily: "'Playfair Display', serif", color: '#1a2744', fontSize: '58px' }}>18</p>
                <p className="text-[8px] md:text-xs font-medium uppercase tracking-wider text-muted-foreground/70 max-w-[70px] md:max-w-[100px] leading-tight text-left">Funds Raised</p>
              </div>
              <div className="w-px h-10 md:h-12 shrink-0" style={{ backgroundColor: '#d1d5db' }}></div>
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 shrink-0">
                <p className="font-bold mb-0 leading-none md:leading-normal" style={{ fontFamily: "'Playfair Display', serif", color: '#1a2744', fontSize: '58px' }}>45+</p>
                <p className="text-[8px] md:text-xs font-medium uppercase tracking-wider text-muted-foreground/70 max-w-[70px] md:max-w-[100px] leading-tight text-left">Years of Experience</p>
              </div>
              <div className="w-px h-10 md:h-12 shrink-0" style={{ backgroundColor: '#d1d5db' }}></div>
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 shrink-0">
                <p className="font-bold mb-0 leading-none md:leading-normal" style={{ fontFamily: "'Playfair Display', serif", color: '#1a2744', fontSize: '58px' }}>190+</p>
                <p className="text-[8px] md:text-xs font-medium uppercase tracking-wider text-muted-foreground/70 max-w-[70px] md:max-w-[100px] leading-tight text-left">Companies</p>
              </div>
              <div className="w-px h-10 md:h-12 shrink-0" style={{ backgroundColor: '#d1d5db' }}></div>
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 shrink-0 pr-6 md:pr-0">
                <p className="font-bold mb-0 leading-none md:leading-normal" style={{ fontFamily: "'Playfair Display', serif", color: '#1a2744', fontSize: '58px' }}>$33B+</p>
                <p className="text-[8px] md:text-xs font-medium uppercase tracking-wider text-muted-foreground/70 max-w-[70px] md:max-w-[100px] leading-tight text-left">Capital Raised</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sector Cards + Mission — one continuous dark section */}
      <div style={{ backgroundColor: '#ffffff' }}>
        <section className="w-full" style={{ paddingTop: '24px', paddingLeft: '24px', paddingRight: '24px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
            <a
              href="/healthcare"
              className="sector-card group relative no-underline cursor-pointer block min-h-[450px] flex flex-col justify-end rounded-lg overflow-hidden"
              style={{ background: 'linear-gradient(155deg, #0f3058, #143a65, #0d2847)', border: '1px solid rgba(59,130,246,0.2)', WebkitTapHighlightColor: 'transparent' }}
            >
              <div className="absolute top-0 right-0 w-1/2 h-3/5 pointer-events-none" style={{ background: 'radial-gradient(circle at 80% 20%, rgba(59,130,246,0.12), transparent 60%)' }}></div>
              <div className="relative z-10 text-left mt-auto" style={{ padding: '40px' }}>
                <h2 className="font-heading font-bold text-white leading-[0.95] tracking-tight mb-5" style={{ fontSize: '64px' }}>Healthcare</h2>
                <div className="accent-bar"></div>
                <p className="mb-10" style={{ fontSize: '18px', fontWeight: 300, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', maxWidth: '400px' }}>Partnering with market leaders across healthcare services, health IT, and life sciences for over four decades.</p>
                <span className="explore-link inline-flex items-center gap-3">
                  Explore
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </a>

            <a
              href="/technology"
              className="sector-card group relative no-underline cursor-pointer block min-h-[450px] flex flex-col justify-end rounded-lg overflow-hidden"
              style={{ background: 'linear-gradient(155deg, #091428, #0e1e33, #0b1830)', border: '1px solid rgba(59,130,246,0.2)', WebkitTapHighlightColor: 'transparent' }}
            >
              <div className="absolute top-0 right-0 w-1/2 h-3/5 pointer-events-none" style={{ background: 'radial-gradient(circle at 80% 20%, rgba(59,130,246,0.12), transparent 60%)' }}></div>
              <div className="relative z-10 text-left mt-auto" style={{ padding: '40px' }}>
                <h2 className="font-heading font-bold text-white leading-[0.95] tracking-tight mb-5" style={{ fontSize: '64px' }}>Technology</h2>
                <div className="accent-bar"></div>
                <p className="mb-10" style={{ fontSize: '18px', fontWeight: 300, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', maxWidth: '400px' }}>Building category-defining technology platforms through strategic investment and operational excellence.</p>
                <span className="explore-link inline-flex items-center gap-3">
                  Explore
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* Blue glow divider */}
        <div style={{ paddingLeft: '24px', paddingRight: '24px', marginTop: '48px', marginBottom: '48px' }}>
          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.15), transparent)' }}></div>
        </div>

        {/* Mission & Video Slider Section */}
        <section className="text-primary-foreground relative overflow-hidden" style={{ backgroundColor: '#0a1628' }}>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] rounded-full border border-white/10 opacity-50 z-0"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] rounded-full border border-white/10 opacity-50 z-0"></div>
        
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${missionBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: '#0a1628', opacity: 0.92 }}></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16 md:mb-24">
            <div className="max-w-[85vw] md:max-w-2xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-8 tracking-tighter">
                Our Mission: Be Your Partner of Choice
              </h2>
            </div>
            <div className="max-w-[85vw] md:max-w-2xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left lg:pt-2">
              <p className="text-xl md:text-2xl leading-relaxed text-white/90 font-light">
                WCAS’s mission is to lead in healthcare and technology investments through thought leadership, culture, and results. We create deep partnerships and are frequently selected as the preferred partner by executives and investors.
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
              onPointerDown={videoDrag.onPointerDown}
              onPointerMove={videoDrag.onPointerMove}
              onPointerUp={videoDrag.onPointerUp}
              onPointerCancel={videoDrag.onPointerUp}
            >
              {wcasVideos.map((video, index) => (
                <div key={index} className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[30vw] snap-center shrink-0 rounded-xl overflow-hidden aspect-video bg-[#0f172a] relative group transition-all duration-300 hover:-translate-y-[3px] focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-transparent" style={{ border: '1px solid rgba(255,255,255,0.16)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2)', backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 45%)' }} onMouseEnter={(e) => { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.22)'; e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.08), 0 12px 40px rgba(0,0,0,0.45), 0 4px 12px rgba(0,0,0,0.25)'; }} onMouseLeave={(e) => { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.16)'; e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2)'; }}>
                    <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.18) 100%)' }}></div>
                    <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.18) 100%)' }}></div>
                    <div 
                      className="absolute inset-0 cursor-pointer text-white p-6 md:p-8 flex flex-col justify-center z-[2]"
                      onClick={() => { if (!hasDragged.current) setPlayingVideo(video.id); }}
                    >
                      {'specialLayout' in video && video.specialLayout ? (
                        <div className="flex flex-col items-center justify-between h-full w-full group-hover:scale-[1.02] transition-transform duration-500 py-4 md:py-6">
                          <h3 className="text-lg md:text-2xl font-bold font-heading leading-tight text-center">{video.title}</h3>
                          <div className="flex-1"></div>
                          <div className="flex flex-col items-center gap-1">
                            <div className="flex items-center justify-center gap-3 md:gap-4">
                              <img src={wcasLogo} alt="WCAS" className="h-4 md:h-5 w-auto brightness-0 invert" />
                              <div className="w-px h-6 md:h-8 bg-white/20"></div>
                              <img src={logoSelect} alt="Select Medical" className="h-8 md:h-10 w-auto" />
                            </div>
                            <h4 className="text-base md:text-lg font-bold font-heading tracking-tight">{video.partner}</h4>
                          </div>
                        </div>
                      ) : 'centeredLayout' in video && video.centeredLayout ? (
                        <div className="flex flex-col items-center justify-between h-full w-full group-hover:scale-[1.02] transition-transform duration-500 py-4 md:py-6">
                          <h3 className="text-lg md:text-2xl font-bold font-heading leading-tight text-center">{video.title}</h3>
                          <div className="flex-1"></div>
                          {'partnerLogo' in video && video.partnerLogo && (
                            <img src={video.partnerLogo} alt={video.partner} className={`${'logoClass' in video && video.logoClass ? video.logoClass : 'h-8 md:h-10'} w-auto`} />
                          )}
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
                      
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 z-10">
                        <div className="bg-white/20 w-16 h-11 md:w-[4.5rem] md:h-[3.25rem] rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/25">
                          <Play className="text-white fill-white" size={24} />
                        </div>
                        <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-white/0 group-hover:text-white/80 transition-all duration-300">Watch</span>
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
        <div className="flex justify-center pt-10 md:pt-14 pb-24 md:pb-32 relative z-10">
          <Button size="lg" variant="secondary" asChild className="rounded-full px-14 py-6 text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer">
            <a href="/#firm" style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation', pointerEvents: 'auto' }}>
              Learn More About Our History
            </a>
          </Button>
        </div>
      </section>
      </div>
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
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4"></h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
                News & Perspectives
              </h3>
            </div>
            <Button variant="outline" asChild className="rounded-full group hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <a href="/news" style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation', pointerEvents: 'auto' }}>
                See All News
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                const el = newsScrollRef.current;
                if (el) {
                  const card = el.querySelector('a') as HTMLElement;
                  const scrollAmount = card ? card.offsetWidth + 32 : el.offsetWidth * 0.35;
                  el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                }
              }}
              className="shrink-0 w-10 h-10 rounded-full bg-border/50 border border-border text-foreground/60 flex items-center justify-center hover:bg-border hover:text-foreground transition-colors"
              aria-label="Scroll news left"
            >
              <ArrowRight size={20} className="rotate-180" />
            </button>
            <div
              ref={newsScrollRef}
              className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide cursor-grab flex-1 min-w-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
              onPointerDown={newsDrag.onPointerDown}
              onPointerMove={newsDrag.onPointerMove}
              onPointerUp={newsDrag.onPointerUp}
              onPointerCancel={newsDrag.onPointerUp}
            >
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
              },
              {
                date: "June 24, 2025",
                category: "News",
                title: "Concentra Expands National Footprint with Acquisition of 12 New Centers",
                desc: "Concentra continues its strategic expansion, bringing occupational health services to new communities across the country..."
              },
              {
                date: "June 10, 2025",
                category: "Perspectives",
                title: "The Future of Healthcare IT: Trends Shaping the Industry in 2025",
                desc: "WCAS explores the key technology trends driving transformation in healthcare delivery and patient outcomes..."
              },
              {
                date: "May 28, 2025",
                category: "News",
                title: "Quickbase Launches New AI-Powered Workflow Automation Platform",
                desc: "Quickbase unveils next-generation capabilities designed to help enterprises streamline complex business processes..."
              }
            ].map((news, i) => (
              <a
                href="#"
                key={i}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl active:shadow-xl focus-visible:shadow-xl hover:-translate-y-0.5 active:-translate-y-0.5 focus-visible:-translate-y-0.5 transition-all duration-300 border border-border/50 hover:border-primary/30 active:border-primary/30 focus-visible:border-primary/30 cursor-pointer no-underline text-inherit focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 snap-start"
                style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation', flex: '0 0 calc((100% - 4rem) / 3)', minWidth: '300px' }}
                onClickCapture={(e) => { if (newsHasDragged.current) { e.preventDefault(); e.stopPropagation(); } }}
                onTouchStart={(e) => e.currentTarget.classList.add('is-pressed')}
                onTouchEnd={(e) => { const el = e.currentTarget; setTimeout(() => el.classList.remove('is-pressed'), 150); }}
                onTouchCancel={(e) => e.currentTarget.classList.remove('is-pressed')}
              >
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
            <button
              onClick={() => {
                const el = newsScrollRef.current;
                if (el) {
                  const card = el.querySelector('a') as HTMLElement;
                  const scrollAmount = card ? card.offsetWidth + 32 : el.offsetWidth * 0.35;
                  el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
              }}
              className="shrink-0 w-10 h-10 rounded-full bg-border/50 border border-border text-foreground/60 flex items-center justify-center hover:bg-border hover:text-foreground transition-colors"
              aria-label="Scroll news right"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}