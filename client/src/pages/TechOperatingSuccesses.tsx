import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { ArrowRight, Building, MapPin, Calendar, Briefcase, Tag, Target, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import heroBgImg from "@assets/WCAS_March_6_01783636.mov.08_16_17_23.Image_1-1-scaled_1771793919066.webp";

const SUCCESSES = [
  {
    name: "Alliance Data Systems",
    logo: "https://wcas.com/wp-content/uploads/2023/11/AllianceData.png",
    companyDesc: "Alliance Data Systems (ADS) is a leading provider of private-label and co-branded credit card programs. Over 100 retailers and other brand partners rely on ADS's programs to drive engagement, maintain customer loyalty and deliver unique insights on customer behavior. The company serves some of the most prominent brands in the world, including Caesars, Michaels, the NFL and Victoria's Secret.",
    dealDesc: "WCAS formed ADS by combining two corporate carve-outs: the card-issuing business from JC Penney and the merchant-acquiring business from The Limited. WCAS partnered with ADS management to (i) integrate the two entities and build standalone corporate infrastructure, (ii) professionalize go-to-market capabilities and (iii) expand product offerings via M&A. ADS completed a successful IPO in 2001 and remains publicly traded today.",
    stats: {
      "Headquarters": "Columbus, OH",
      "Investment Year": "1996",
      "Exit Year": "IPO in 2001",
      "Fund": "WCAS VI, VII and VIII",
      "Sector": "Payments"
    }
  },
  {
    name: "Avetta",
    logo: "https://wcas.com/wp-content/uploads/2023/04/Avetta-e1731449643176.png",
    companyDesc: "Avetta is a global leader in supply chain risk management (SCRM) software, offering a cloud-based platform that enables clients to manage risks related to health, safety, sustainability, and other critical factors. With operations in over 130 countries, Avetta connects more than 500 hiring clients with 130,000+ contractors, reducing accidents, improving compliance, and fostering operational excellence across complex supply chains.",
    dealDesc: "Since acquiring Avetta in 2018, WCAS partnered with Avetta management to implement a Value Maximization Plan (VMP) focused on four key levers: (i) upgrading talent by building out the executive team, (ii) enhancing product and technology through investments in new offerings like ESG and automation using generative AI, (iii) promoting strategic M&A to expand the supplier and worker network, and (iv) improving the go-to-market strategy by optimizing pricing and maturing the sales team. These efforts resulted in significant growth, culminating in the sale to EQT in 2024.",
    stats: {
      "Headquarters": "Houston, Texas",
      "Investment Year": "2018",
      "Exit Year": "2024 to EQT",
      "Fund": "WCAS XII",
      "Sector": "GRC",
      "Acquisitions": "eWebOQ, Browz, Pegasus"
    }
  },
  {
    name: "Clearwater Analytics",
    logo: "https://wcas.com/wp-content/uploads/2023/04/Clearwater-Analytics.png",
    companyDesc: "Clearwater Analytics is a leading SaaS provider of investment accounting, reporting, and analytics solutions, serving institutional investors, insurers, asset managers, and corporations. Clearwater's platform delivers near real-time, daily reporting on portfolios, providing clients with unmatched transparency and insight. With over $7 trillion in assets under reporting, Clearwater enables clients to manage complex investment portfolios, improve operational efficiency, and reduce risk.",
    dealDesc: "Since acquiring Clearwater in 2016, WCAS has driven a series of strategic initiatives that have reinforced Clearwater's leadership in its core market, unlocked new growth avenues and sustained industry-leading client satisfaction and unit economics. These efforts include: (i) assembling a world-class management team, (ii) enhancing the go-to-market strategy, (iii) expanding global presence, (iv) accelerating product innovation, (v) strengthening operational and platform capabilities and (vi) pursuing targeted M&A opportunities.",
    stats: {
      "Headquarters": "Boise, Idaho",
      "Investment Year": "2016",
      "Exit Year": "2021 IPO",
      "Fund": "WCAS XII",
      "Sector": "Financial"
    }
  },
  {
    name: "Fiserv",
    logo: "https://wcas.com/wp-content/uploads/2023/11/Fiserv.png",
    companyDesc: "Fiserv is a global leader in financial technology and payments offering core banking solutions, merchant acquiring services, card issuer processing, and network services. The company's software is used by 10,000 financial institutions to process customer deposits and loan applications, manage the general ledger, analyze financial risk and enable digital account access.",
    dealDesc: "WCAS formed Fiserv by merging First Data Processing and Sunshine State Systems and partnered with the management team to integrate the two entities to create a market leader. Fiserv acquired 58 companies and significantly broadened its product offering during WCAS's investment horizon. Fiserv completed a successful IPO in 1986. The company remains publicly traded today and is a member of the S&P 500.",
    stats: {
      "Headquarters": "Brookfield, WI",
      "Investment Year": "1984",
      "Exit Year": "IPO in 1986",
      "Fund": "WCAS III",
      "Sector": "Fintech"
    }
  },
  {
    name: "Green Street",
    logo: "https://wcas.com/wp-content/uploads/2023/11/Green-Street.png",
    companyDesc: "Green Street is a leading provider of commercial real estate (CRE) intelligence, including research, data, analytics and exclusive news in North America and Europe through a cloud-based software platform. The company serves a blue-chip client base, including institutional investors, investment banks, brokers and REITs who use its intelligence to inform mission-critical decisions and industry knowledge.",
    dealDesc: "Since acquiring Green Street in August 2019, WCAS partnered with Green Street management to implement several transformation initiatives, including (i) improving revenue quality, (ii) enhancing customer value proposition, (iii) professionalizing go-to-market capabilities, (iv) addressing market expansion opportunities, (v) reducing regulatory burden and (vi) executing on M&A. In July 2022, WCAS announced a majority sale of Green Street to TA Associates while retaining a meaningful minority ownership.",
    stats: {
      "Headquarters": "Newport Beach, CA",
      "Investment Year": "2019",
      "Exit Year": "2022 (partial exit)",
      "Fund": "WCAS XIII",
      "Sector": "Data & Analytics / PropTech",
      "Acquisitions": "Harrison Scott Publications, React News, IJ Global, Local Data Company, Locatus"
    }
  },
  {
    name: "Intoxalock",
    logo: "https://wcas.com/wp-content/uploads/2023/11/Intoxalock.png",
    companyDesc: "Intoxalock is the market leader and fastest-growing provider of ignition interlock devices (IIDs) and related DUI services in the U.S. IIDs and related monitoring software/services are mandated for drunk driving offenders in most states. Over WCAS's hold period, Intoxalock prevented over 1 million drunk driving attempts, translating to 12,000+ potential lives saved.",
    dealDesc: "Since acquiring Intoxalock in March 2017, WCAS partnered with management to accelerate growth while maintaining profitability by (i) doubling marketing-generated leads and improving lead conversion, (ii) increasing the service center footprint from approximately 1,400 to over 4,800, (iii) growing and cross-selling products developed organically as well as acquired via M&A and (iv) strengthening government regulations. In October 2022, WCAS announced the sale of Intoxalock to L Catterton.",
    stats: {
      "Headquarters": "Des Moines, IA",
      "Investment Year": "2017",
      "Exit Year": "2022",
      "Fund": "WCAS XII",
      "Sector": "GovTech",
      "Acquisitions": "Breathe Easy Insurance, ADS, New Directions Assessments"
    }
  },
  {
    name: "Quickbase",
    logo: "https://wcas.com/wp-content/uploads/2023/11/Quickbase.png",
    companyDesc: "Quickbase is a leading cloud-based, no-code application development platform that empowers business users to rapidly develop, customize and deploy new business applications without the need to create or edit software code. Over 6,000 customers rely on Quickbase to quickly and efficiently build customized applications to manage bespoke projects with end-to-end visibility.",
    dealDesc: "Since acquiring Quickbase from Intuit in April 2016, WCAS partnered with CEO and former WCAS Operating Partner Rick Willett to (i) set up standalone corporate infrastructure, (ii) shift technology strategy to a customer-centric product development approach, (iii) reorganize go-to-market efforts to focus on enterprise segments, and (iv) optimize customer contracts. In April 2019, WCAS completed a majority sale of Quickbase to Vista Equity Partners while retaining a meaningful minority ownership.",
    stats: {
      "Headquarters": "Boston, MA",
      "Investment Year": "2016",
      "Exit Year": "2019 (partial exit)",
      "Fund": "WCAS XII",
      "Sector": "B2B Software"
    }
  }
];

const StatIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "Headquarters": return <MapPin className="w-4 h-4" />;
    case "Investment Year": return <Calendar className="w-4 h-4" />;
    case "Exit Year": return <Target className="w-4 h-4" />;
    case "Fund": return <Briefcase className="w-4 h-4" />;
    case "Sector": return <Building className="w-4 h-4" />;
    case "Acquisitions": return <Tag className="w-4 h-4" />;
    default: return <div className="w-4 h-4" />;
  }
};

export default function TechOperatingSuccesses() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 bg-[#002759] text-white relative overflow-hidden min-h-[400px] md:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBgImg} 
            alt="WCAS Team Meeting" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-[#002759]/70"></div>
        </div>
        
        <div className="container mx-auto mt-12 relative z-10">
          <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-white/60 mb-6">
            <Link href="/technology" className="hover:text-white transition-colors">
              Technology
            </Link>
            <span>/</span>
            <span className="text-white">Operating Successes</span>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
              Our Operating Successes
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/80 max-w-3xl leading-relaxed">
              Explore our past operating successes to see how we've partnered with our portfolio companies to help drive steady and structured growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {SUCCESSES.map((company, index) => (
              <Dialog key={company.name}>
                <DialogTrigger asChild>
                  <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border overflow-hidden cursor-pointer group flex items-center justify-center p-8 aspect-video relative">
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors z-0"></div>
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`} 
                      className="max-h-full max-w-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[700px] lg:max-w-[900px] p-0 overflow-hidden border-0 bg-white">
                  <div className="flex flex-col lg:flex-row max-h-[85vh] overflow-y-auto">
                    {/* Left Column: Stats & Logo */}
                    <div className="w-full lg:w-1/3 bg-secondary/50 p-8 flex flex-col border-b lg:border-b-0 lg:border-r border-border shrink-0">
                      <div className="h-20 flex items-center justify-start mb-8">
                        <img 
                          src={company.logo} 
                          alt={`${company.name} logo`} 
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      
                      <div className="space-y-6 flex-grow">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">At a Glance</h4>
                        
                        {Object.entries(company.stats).map(([key, value]) => (
                          <div key={key} className="flex items-start gap-3">
                            <div className="mt-0.5 text-primary">
                              <StatIcon type={key} />
                            </div>
                            <div>
                              <div className="text-[10px] font-bold uppercase text-muted-foreground tracking-wider mb-0.5">{key}</div>
                              <div className="text-sm font-medium text-foreground">{value}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Descriptions */}
                    <div className="w-full lg:w-2/3 p-8 md:p-10 flex flex-col">
                      <DialogHeader className="mb-8 text-left">
                        <DialogTitle className="text-3xl font-heading font-bold text-[#002759]">
                          {company.name}
                        </DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                            Company Description
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-sm md:text-base font-light">
                            {company.companyDesc}
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                            Deal Description
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-sm md:text-base font-light">
                            {company.dealDesc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-[#002759] text-white text-center px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
            Partner With Us
          </h2>
          <p className="text-xl text-white/80 font-light mb-12 max-w-2xl mx-auto">
            Discover how WCAS can help accelerate your company's growth and build long-term value.
          </p>
          <Link href="/contact">
            <Button size="default" className="bg-white text-[#002759] hover:bg-gray-100 rounded-full px-8 py-6 text-base font-bold tracking-wider uppercase group">
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}