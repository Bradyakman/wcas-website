import { ArrowLeft, ArrowRight, Linkedin } from "lucide-react";
import { Link } from "wouter";
import carolineDechertImg from "@assets/caroline_dechert-jpg_1771774248059.webp";
import { Button } from "@/components/ui/button";

export default function TeamMember() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-white">
      {/* Back navigation */}
      <div className="container mx-auto px-6 md:px-12 py-8">
        <Link href="/hcit">
          <Button variant="ghost" className="pl-0 hover:bg-transparent text-muted-foreground hover:text-primary transition-colors group">
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Healthcare Team
          </Button>
        </Link>
      </div>

      {/* Hero Profile Section */}
      <section className="container mx-auto px-6 md:px-12 pb-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Column: Image & Quick Details */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <div className="aspect-[3/4] md:aspect-square lg:aspect-[3/4] bg-muted rounded-2xl overflow-hidden shadow-lg relative">
              <img 
                src={carolineDechertImg} 
                alt="Caroline Dechert" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <div className="hidden lg:flex gap-4">
              <a href="https://www.linkedin.com/in/cboneparth/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-[#002759] hover:bg-[#002759] hover:text-white transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Bio & Info */}
          <div className="w-full lg:w-2/3">
            <div className="mb-10 pb-10 border-b border-border">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#002759] tracking-tight">
                  Caroline Dechert
                </h1>
                <div className="flex lg:hidden gap-4">
                  <a href="https://www.linkedin.com/in/cboneparth/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-[#002759] hover:bg-[#002759] hover:text-white transition-colors duration-300">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-lg md:text-xl font-semibold tracking-wide uppercase text-primary mb-2">
                <span>General Partner</span>
                <span className="text-muted-foreground/30">|</span>
                <span>Healthcare</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:font-light prose-p:mb-6 last:prose-p:mb-0">
              <p>
                Caroline Dechert is a General Partner in the Healthcare Group, having joined WCAS in 2012. Caroline primarily focuses on investments in the healthcare technology sector but has also invested in companies across healthcare services. She currently serves on the Board of Directors of EnableComp, Norstella and Owl Practice Suite and was previously involved in WCAS' investments in InnovAge, The Health Management Academy and Identifix. Prior to joining WCAS's, she worked in the Healthcare Investment Banking group at Morgan Stanley.
              </p>
              <p>
                Caroline holds a B.A. from the University of North Carolina at Chapel Hill and an M.B.A. from Harvard Business School.
              </p>
              <p>
                In the community, Caroline is on the Board of Juma Ventures, an organization that strives to break the cycle of poverty by paving the way to work, education and financial capability for youth across America. An avid runner, Caroline enjoys exploring the Bay Area with her family, rooting for the Tar Heels and imagining that she will someday be good at golf.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 pt-16 border-t border-border">
              {/* Education */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Education</h3>
                <ul className="space-y-4 text-foreground/80 font-medium">
                  <li className="flex flex-col">
                    <span className="font-semibold text-foreground">Harvard Business School</span>
                    <span className="text-muted-foreground font-light">M.B.A.</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-semibold text-foreground">University of North Carolina at Chapel Hill</span>
                    <span className="text-muted-foreground font-light">B.A.</span>
                  </li>
                </ul>
              </div>

              {/* Board Representation */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Board Representation</h3>
                <div className="mb-4">
                  <h4 className="text-xs font-bold uppercase text-muted-foreground mb-3">Current</h4>
                  <ul className="space-y-2 text-foreground/80 font-medium">
                    <li>EnableComp</li>
                    <li>Norstella</li>
                    <li>Owl Practice Suite</li>
                  </ul>
                </div>
              </div>

              {/* Community Involvement */}
              <div className="md:col-span-2">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Community Involvement & Additional Information</h3>
                <ul className="space-y-2 text-foreground/80 font-medium">
                  <li>Board Member, Juma Ventures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-24 bg-secondary/50 border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Insights</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
              Featured Authorship & Contributions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Welsh, Carson, Anderson & Stowe Appoints Four New General Partners" },
              { title: "Randy Dobbs Named New CEO of EnableComp + Argos Health" },
              { title: "Argos Health Merges with EnableComp" },
              { title: "Welsh, Carson, Anderson & Stowe Completes the Acquisition of Argos Health" }
            ].map((news, i) => (
              <a href="#" key={i} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 flex flex-col h-full">
                <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4">News</span>
                <h4 className="text-lg font-heading font-bold mb-6 group-hover:text-primary transition-colors leading-tight">
                  {news.title}
                </h4>
                <div className="mt-auto pt-6 border-t border-border/50 flex items-center font-semibold text-primary text-sm">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}