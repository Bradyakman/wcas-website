import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Cpu, Network, ShieldCheck } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import carolineDechertImg from "@assets/caroline_dechert-jpg_1771774248059.webp";
import unparalleledExpertiseImg from "@assets/unparalled-expertise-jpeg_1771774489695.webp";

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
      <section className="py-24 bg-white border-y border-border overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Investment Themes</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
              Trends We're Excited To Invest Behind
            </h3>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-12 pb-12 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[
              {
                title: "Accelerated adoption of software",
                desc: "Accelerated adoption of software- and technology-based solutions broadly driven by technological innovation and regulation and promoting interoperability and data collection",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
              },
              {
                title: "Increasing need for automation",
                desc: "The increasing need for automation to reduce manual processes, boost productivity, and ameliorate the impact of labor shortages",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop"
              },
              {
                title: "Growing demand for data analytics",
                desc: "Growing demand for data analytics and insights to drive business and clinical strategies, ranging from patient engagement, to clinical decision support, to a drug's commercialization strategy",
                image: "https://images.unsplash.com/photo-1551076805-e18690c5e53b?q=80&w=2832&auto=format&fit=crop"
              },
              {
                title: "Increased focus on transparency",
                desc: "Increased focus among healthcare stakeholders and the government to improve transparency, access and experience for consumers",
                image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2864&auto=format&fit=crop"
              }
            ].map((trend, i) => (
              <div key={i} className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[35vw] snap-center shrink-0 rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square bg-black relative group shadow-lg">
                <img 
                  src={trend.image} 
                  alt={trend.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
                
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                  <div className="text-4xl md:text-5xl font-serif text-white/30 font-bold leading-none">0{i+1}</div>
                  
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 md:mb-4 leading-tight">
                      {trend.title}
                    </h4>
                    <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {trend.desc}
                    </p>
                  </div>
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
              { 
                name: "Caroline Dechert", 
                role: "General Partner | Healthcare",
                bio: "Caroline Dechert is a General Partner in the Healthcare Group, having joined WCAS in 2012. Caroline primarily focuses on investments in the healthcare technology sector but has also invested in companies across healthcare services.",
                image: carolineDechertImg
              },
              { 
                name: "Edward P. Sobol", 
                role: "General Partner | Healthcare",
                bio: "Ed Sobol is a General Partner in the Healthcare Group and a member of WCAS's Management Committee, having joined WCAS in 2010. Ed primarily focuses on investments in the healthcare technology subsector and has invested across a range of other subsectors, including healthcare delivery, medical technology, payor services and financial technology."
              },
              { 
                name: "Cathy Sun", 
                role: "Vice President | Healthcare",
                bio: "Cathy Sun is a Vice President on the Healthcare team at WCAS, having joined in 2021. She is involved in many of the firm's healthcare technology and pharma value chain investments."
              },
              { 
                name: "Aditya Shah", 
                role: "Associate | Healthcare",
                bio: "Aditya Shah is an Associate in the Healthcare Group, having joined WCAS in 2023. Prior to joining WCAS, he worked in the Global Healthcare Group at Barclays Investment Bank."
              },
              { 
                name: "Mark M. Tomaino", 
                role: "Operating Partner | Healthcare",
                bio: "Mr. Tomaino is an Operating Partner on the Healthcare team and focuses on investments in the healthcare information technology industry, having joined WCAS in 2010. Mark was previously Senior Vice President of Corporate Development at The TriZetto Group."
              },
              { 
                name: "Francesca Dea", 
                role: "Operating Partner | Healthcare",
                bio: "Francesca Dea is an Operating Partner in the Healthcare Group. She brings extensive experience in healthcare operations and strategy."
              },
              { 
                name: "Michael Jones", 
                role: "Vice President | Healthcare",
                bio: "Michael Jones is a Vice President on the Healthcare team, focusing on technology and services investments."
              }
            ].map((member, i) => (
              <Dialog key={i}>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer">
                    <div className="aspect-square bg-muted rounded-xl mb-4 overflow-hidden relative">
                      <div className="absolute inset-0 bg-[#002759]/10 group-hover:bg-[#002759]/0 transition-colors z-10"></div>
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-secondary text-muted-foreground">
                          <span className="text-4xl font-light">{member.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                    <h4 className="text-lg font-bold font-heading group-hover:text-primary transition-colors">{member.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] md:max-w-[700px] p-0 overflow-hidden border-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-2/5 md:w-1/3 bg-secondary flex items-center justify-center p-0 aspect-square sm:aspect-auto overflow-hidden relative">
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover object-top" />
                      ) : (
                        <span className="text-7xl font-light text-muted-foreground/50">{member.name.charAt(0)}</span>
                      )}
                    </div>
                    <div className="p-8 sm:w-3/5 md:w-2/3">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-heading font-bold text-[#002759] mb-1">{member.name}</DialogTitle>
                        <DialogDescription className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                          {member.role}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="text-foreground/90 leading-relaxed font-light mt-4">
                        {member.bio}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Unparalleled Expertise CTA */}
      <section className="relative py-32 bg-[#002759] text-white text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={unparalleledExpertiseImg} 
            alt="WCAS Team Meeting" 
            className="w-full h-full object-cover opacity-30 object-center mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-[#002759]/70"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
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

      {/* Healthcare News Section */}
      <section className="py-24 bg-secondary/50 border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Insights</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
                Healthcare News & Perspectives
              </h3>
            </div>
            <Button variant="outline" className="rounded-full group">
              See More News
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Megan Callahan Joins Welsh, Carson, Anderson & Stowe as an HCIT Operating Partner",
                category: "News",
                date: "November 1, 2023",
                desc: "New York, NY, November 1, 2023 – Welsh, Carson, Anderson & Stowe (WCAS), a leading private equity firm focused exclusively on..."
              },
              {
                title: "LIBERTY Dental Plan Announces New CEO",
                category: "News",
                date: "March 1, 2023",
                desc: "IRVINE, Calif. & NEW YORK, March 1, 2023 (Business Wire) – LIBERTY Dental Plan Corporation (LIBERTY) has selected Marti Lolli as..."
              },
              {
                title: "ImageTrend Announces Strategic Growth Investment from Welsh, Carson, Anderson & Stowe",
                category: "News",
                date: "February 9, 2023",
                desc: "LAKEVILLE, MINN., February 9, 2023 - ImageTrend, Inc., a growing, market-leading software solutions and services provider in the public safety and..."
              }
            ].map((item, i) => (
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
