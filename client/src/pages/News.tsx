import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, SlidersHorizontal, Calendar, X } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

// Mock data for news articles
const ALL_NEWS = [
  {
    id: 1,
    title: "WCAS Completes Acquisition of EquiLend",
    category: "News",
    date: "September 5, 2024",
    desc: "Welsh, Carson, Anderson & Stowe (WCAS), a leading private equity firm focused exclusively on the technology and healthcare industries, today announced that it has completed its acquisition of EquiLend, a global technology, data and analytics company for the securities finance industry.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Jennifer Martin Joins WCAS as Chief Financial Officer and General Partner",
    category: "News",
    date: "September 19, 2024",
    desc: "Welsh, Carson, Anderson & Stowe (WCAS) announced today that Jennifer Martin has joined the firm as Chief Financial Officer and General Partner. Ms. Martin will oversee the firm's finance, accounting, tax, and reporting functions.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "EquiLend Announces Appointment of New Chief Executive Officer",
    category: "News",
    date: "October 23, 2024",
    desc: "EquiLend today announced the appointment of a new Chief Executive Officer to lead the company's next phase of growth following its acquisition by Welsh, Carson, Anderson & Stowe.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Megan Callahan Joins Welsh, Carson, Anderson & Stowe as an HCIT Operating Partner",
    category: "News",
    date: "November 1, 2023",
    desc: "New York, NY, November 1, 2023 – Welsh, Carson, Anderson & Stowe (WCAS), a leading private equity firm focused exclusively on the technology and healthcare industries, today announced that Megan Callahan has joined the firm as an Operating Partner in the Healthcare Group.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "The Future of Healthcare Technology in 2024",
    category: "Perspectives",
    date: "January 15, 2024",
    desc: "Our healthcare technology team shares their perspectives on the key trends that will shape the HCIT landscape in the coming year, from generative AI applications to value-based care enablement.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Navigating the Changing Landscape of Enterprise Software",
    category: "Perspectives",
    date: "March 12, 2024",
    desc: "An in-depth look at how enterprise software companies are adapting their business models and product strategies to meet evolving customer demands in a shifting macroeconomic environment.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "WCAS Announces Final Close of XIII Fund",
    category: "News",
    date: "July 20, 2023",
    desc: "Welsh, Carson, Anderson & Stowe today announced the final close of WCAS XIII, L.P. The Fund closed at its hard cap, demonstrating strong support from both existing and new investors.",
    image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=2076&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Building Resilient Go-To-Market Strategies",
    category: "Perspectives",
    date: "August 8, 2023",
    desc: "The WCAS Resources Group outlines best practices for technology and healthcare companies looking to optimize their go-to-market motions and drive efficient growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  }
];

const CATEGORIES = ["All", "News", "Perspectives"];

export default function News() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter articles based on search and category
  const filteredNews = ALL_NEWS.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden text-white bg-[#002759]">
        <div className="container mx-auto mt-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              News & Perspectives
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/80 max-w-3xl mx-auto leading-relaxed">
              Stay informed with our latest news, industry insights and exclusive peeks into recent WCAS deals.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-4 bg-white/90 border-b border-border sticky top-16 z-40 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto hide-scrollbar">
              <SlidersHorizontal className="w-4 h-4 text-muted-foreground mr-2 hidden md:block" />
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
                    activeCategory === category 
                      ? "bg-primary text-white shadow-md" 
                      : "bg-white text-muted-foreground hover:bg-gray-100 border border-border/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                type="text" 
                placeholder="Search news and insights..." 
                className="w-full pl-10 pr-8 py-4 rounded-full border-border/50 bg-white shadow-sm text-sm focus-visible:ring-primary h-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 flex-grow">
        <div className="container mx-auto px-6 md:px-12">
          {filteredNews.length === 0 ? (
            <div className="text-center py-24">
              <h3 className="text-2xl font-bold font-heading text-muted-foreground mb-4">No results found</h3>
              <p className="text-muted-foreground/80 mb-8">We couldn't find any articles matching your current search criteria.</p>
              <Button 
                onClick={() => {setSearchQuery(""); setActiveCategory("All");}}
                variant="outline"
                className="rounded-full"
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredNews.map((item) => (
                <a href="#" key={item.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-[#002759]/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-center text-sm text-muted-foreground mb-4 font-medium">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.date}
                    </div>
                    
                    <h4 className="text-xl md:text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                      {item.title}
                    </h4>
                    
                    <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-8 font-light">
                      {item.desc}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-border flex items-center font-bold text-primary text-sm uppercase tracking-wider">
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
          
          {/* Pagination (Visual only for mockup) */}
          {filteredNews.length > 0 && (
            <div className="mt-20 flex justify-center">
              <Button variant="outline" className="rounded-full px-8 py-6 text-sm font-bold tracking-wider uppercase group">
                Load More Articles
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-y-1 rotate-90 transition-transform" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}