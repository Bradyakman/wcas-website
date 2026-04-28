import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "45+", label: "YEARS INVESTING" },
  { value: "190+", label: "COMPANIES" },
  { value: "18", label: "FUNDS RAISED" },
  { value: "$33B+", label: "CAPITAL RAISED" },
];

const values = [
  { num: "01", name: "Integrity" },
  { num: "02", name: "Respect" },
  { num: "03", name: "Honesty" },
  { num: "04", name: "Teamwork" },
  { num: "05", name: "Loyalty" },
  { num: "06", name: "Courage" },
  { num: "07", name: "Transparency" },
  { num: "08", name: "Intellectual Curiosity" },
];

const timeline = [
  {
    year: "1979",
    title: "Launch of WCAS",
    description:
      "Founded by Patrick Welsh, Russ Carson, and Bruce Anderson. Fund I closes at $25.3M — 13% of all PE capital raised that year.",
  },
  {
    year: "1984",
    title: "Sector Focus Defined",
    description:
      "A rigorous internal review leads the firm to focus exclusively on Healthcare and Technology — a strategy that holds to this day.",
  },
  {
    year: "1992",
    title: "First $1B+ Fund",
    description:
      "WCAS VI closes at $1.4B, marking the firm’s first fund to cross $1 billion raised.",
  },
  {
    year: "1994–2001",
    title: "Platform Building Era",
    description:
      "Alliance Data (cap: $4.4B), Select Medical, Amedisys (cap: $4.1B), and US Oncology (sold to McKesson for $2.2B) define the firm’s portfolio building model.",
  },
  {
    year: "2007",
    title: "Three Landmark Investments",
    description:
      "USP (later merged with Terex at $1.2B), Transifex ($360M investments), and Appirio — taken public in 2014 in a $1.28B cap.",
  },
  {
    year: "2012",
    title: "Fund XII at $3.5B",
    description:
      "Investments include Convanta (came out from Harvard) and Clearwater Analytics; QuickBase goes out of focus in 2016.",
  },
  {
    year: "2015",
    title: "West Coast Expansion",
    description:
      "WCAS opens its San Francisco office and partners with The Health Management Academy, gaining access to 1,200+ health system executives.",
  },
  {
    year: "2019",
    title: "40 Years, Fund XIII at $4.3B",
    description:
      "$2.7B of capital raised across 11 partnerships. Straeto Health Solutions receives equity from WCAS and Walgreen Co.",
  },
  {
    year: "2019",
    title: "Clearwater IPO",
    description:
      "Clearwater Analytics (NYSE: CWAN) goes public at a $5.5B valuation at time of IPO.",
  },
  {
    year: "2021–2022",
    title: "Fund XIV at $5B",
    description:
      "WCAS’s largest fund to date. Sale of Availity (Fund XII) in Q1 marks a successful exit as the firm looks ahead to the next chapter.",
  },
];

export default function History() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#0a1628] py-32 md:py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border border-white/5 translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full border border-white/5 -translate-x-1/4 translate-y-1/4"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-6">
            OUR FIRM
          </p>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 leading-tight tracking-tight">
            Our History
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/70 max-w-3xl leading-relaxed">
            Since 1979, we’ve built lasting partnerships across Healthcare and
            Technology — guided by consistent values and a commitment to doing
            things the Welsh Carson way.
          </p>
        </div>
      </section>

      <section className="bg-[#0f1f3d] py-16 px-6">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <span className="text-5xl md:text-6xl font-heading font-bold text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-white/50 mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a1628] py-24 md:py-32 px-6">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-6">
                THE WELSH CARSON WAY
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight tracking-tight mb-8">
                A distinctive approach, four decades strong
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                Since our founding, Welsh Carson has operated by a set of
                deeply held principles that define how we work with management
                teams, our portfolio companies, and each other. These values
                are not aspirational — they are the foundation of every
                relationship we build.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                Our culture rewards intellectual curiosity, rewards honest
                dialogue, and demands that we act with integrity in every
                decision — from the smallest operational choice to the largest
                capital allocation. This is the Welsh Carson way.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex flex-col border border-white/10 rounded-xl p-5 bg-white/5 hover:bg-white/10 transition-colors duration-300"
                  >
                    <span className="text-xs font-bold text-primary mb-2">
                      {v.num}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {v.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32 px-6">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              WALK IN TIME WITH US
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight tracking-tight">
              Four decades of building market leaders
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-amber-400/30 -translate-x-1/2"></div>

            <div className="flex flex-col gap-0">
              {timeline.map((entry, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-0 mb-0 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-full md:w-[calc(50%-2rem)] px-0 py-8 ${
                        isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                      } pl-10 md:pl-0`}
                    >
                      <span className="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-2">
                        {entry.year}
                      </span>
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-3 leading-snug">
                        {entry.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {entry.description}
                      </p>
                    </div>

                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-400 border-4 border-white shadow-md z-10 flex-shrink-0"></div>
                    <div className="md:hidden absolute left-0 top-10 w-3 h-3 rounded-full bg-amber-400 border-2 border-white shadow-md z-10"></div>
                    <div className="md:hidden absolute left-[5px] top-0 bottom-0 w-px bg-amber-400/30"></div>

                    <div className="hidden md:block w-[calc(50%-2rem)]"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a1628] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full border border-white/5 -translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full border border-white/5 translate-x-1/4 translate-y-1/4"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-6">
            BUILDING FOR THE NEXT FORTY
          </p>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight tracking-tight max-w-3xl mx-auto">
            Relationships are what we’re built on
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-12">
            Our history is defined not by the capital we’ve deployed, but by
            the lasting partnerships we’ve built with management teams,
            founders, and investors who share our values and long-term
            orientation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/technology">
              <Button
                size="lg"
                className="rounded-full px-8 group font-semibold"
              >
                Explore Our Portfolio
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/#team">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 font-semibold border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-transparent"
              >
                Meet the Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
