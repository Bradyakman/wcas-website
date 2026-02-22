import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Cpu, Briefcase, Quote, Play, X } from "lucide-react";
import heroBg from "@assets/healthcare-portfolio-RESIZE-jpg_1771595437015.webp";
import growthImg from "@assets/WCAS_March-13_04509616.mov.20_53_56_26.Still001-scaled_1771765691568.webp";
import talentImg from "@assets/137_WCAS_March-6-23-by-John-Abbott-scaled_1771765917799.jpg";
import techImg from "@assets/1070_WCAS_March-7-23-by-John-Abbott-scaled_1771766085574.jpg";
import maImg from "@assets/healthcare-RESIZED-jpg_1771766272998.webp";
import testimonial1 from "@/assets/images/testimonial-1.png";
import testimonial2 from "@/assets/images/testimonial-2.png";
import { useState, useEffect } from "react";

// Placeholder logos array
const logos = [
  "Fiserv", "Norstella", "Select Medical", "NaviHealth", 
  "AllianceData", "Clearwater", "Quickbase", "InnovAge", 
  "Asurion", "Avetta", "Shields Health", "LINQ"
];

const heroSlides = [
  {
    title: (
      <>Supporting innovation and growth in <span className="text-primary">Technology</span> and <span className="text-primary">Healthcare</span></>
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
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-white/80 backdrop-blur-[4px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl relative">
            
            {/* Carousel Content */}
            <div className="grid pb-32 md:pb-32 lg:pb-40 xl:pb-32">
              {heroSlides.map((slide, index) => (
                <div 
                  key={index}
                  className={`[grid-area:1/1] flex flex-col justify-center transition-all duration-700 ease-in-out ${
                    index === currentSlide 
                      ? "opacity-100 translate-y-0 pointer-events-auto z-10" 
                      : "opacity-0 translate-y-8 pointer-events-none z-0"
                  }`}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-heading font-extrabold text-foreground leading-[1.1] tracking-tighter mb-6 md:mb-8">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl xl:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Carousel Indicators */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "h-8 bg-primary" : "h-2 bg-primary/20 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Mobile Indicators */}
            <div className="mt-12 flex gap-3 lg:hidden">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-8 bg-primary" : "w-2 bg-primary/20"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* Stats (Static below carousel, spanning full width at bottom) */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-border py-4 md:py-6 z-20 overflow-x-auto scrollbar-hide">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center justify-start md:justify-center animate-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both min-w-max md:min-w-0">
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 shrink-0">
                <p className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-0 leading-none md:leading-normal">18+</p>
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
      <section className="py-12 border-t border-border overflow-hidden bg-secondary/50">
        <div className="container mx-auto px-6 md:px-12 mb-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground text-center">Over 300 Companies Partnered</p>
        </div>
        <div className="relative w-full logo-ticker flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/50 to-transparent z-10"></div>
          
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
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 relative overflow-hidden flex flex-col">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={growthImg} 
                  alt="Team member working on tablet" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-10 md:p-12 flex-grow">
                <h4 className="text-2xl font-heading font-bold mb-4">Growth</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Guiding sustainable organic growth strategies to ensure long-term market dominance and profitability.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 relative overflow-hidden flex flex-col">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={talentImg} 
                  alt="Team discussion in conference room" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-10 md:p-12 flex-grow">
                <h4 className="text-2xl font-heading font-bold mb-4">Talent</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Cultivating top teams and company culture to attract, retain, and empower industry-leading professionals.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 relative overflow-hidden flex flex-col">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={techImg} 
                  alt="Team networking in bright office space" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-10 md:p-12 flex-grow">
                <h4 className="text-2xl font-heading font-bold mb-4">Technology</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Fueling tech evolution and unlocking new potential through strategic digital transformation.
                </p>
              </div>
            </div>

            {/* Box 4 */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 relative overflow-hidden flex flex-col">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={maImg} 
                  alt="Team looking out over city skyline" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-10 md:p-12 flex-grow">
                <h4 className="text-2xl font-heading font-bold mb-4">M & A</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Evaluating and sourcing prime targets to accelerate expansion and build comprehensive platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Video Slider Section */}
      <section className="py-20 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Abstract shapes for background interest */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] rounded-full border border-white/10 opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] rounded-full border border-white/10 opacity-50"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
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

          {/* Video Slider - Full Width */}
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