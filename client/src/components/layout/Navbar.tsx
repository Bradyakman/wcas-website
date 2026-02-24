import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import wcasLogo from "@assets/WCAS-logo-sheaco.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  // Check if we are on a page with a dark hero section
  const isDarkHeroPage = location === "/" ||
                         location === "/hcit" || 
                         location === "/news" || 
                         location === "/technology" ||
                         location === "/technology/operating-successes" || 
                         location.startsWith("/team/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Firm", href: "/#firm" },
    { 
      name: "Technology", 
      href: "/technology",
      dropdown: [
        { name: "Operating Successes", href: "/technology/operating-successes" }
      ]
    },
    { 
      name: "Healthcare", 
      href: "/healthcare",
      dropdown: [
        { name: "HCIT", href: "/hcit" }
      ]
    },
    { name: "Contact", href: "/#contact" },
    { name: "News", href: "/news" },
    { name: "Investor Portal", href: "/#investor" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" data-testid="link-home">
          <img src={wcasLogo} alt="WCAS" className={`h-10 md:h-12 w-auto ${
            !isScrolled && isDarkHeroPage ? "brightness-0 invert" : ""
          }`} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            link.dropdown ? (
              <div key={link.name} className="relative group">
                <a 
                  href={link.href}
                  className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                    isScrolled 
                      ? "text-foreground/80 hover:text-primary" 
                      : isDarkHeroPage 
                        ? "text-white/90 hover:text-white" 
                        : "text-foreground/90 hover:text-primary"
                  }`}
                >
                  {link.name}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70 group-hover:rotate-180 transition-transform duration-300">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <div className="absolute top-full left-0 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200">
                  <div className="bg-white rounded-lg shadow-lg border border-border py-2 min-w-[200px] flex flex-col">
                    {link.dropdown.map((dropItem) => (
                      <Link key={dropItem.name} href={dropItem.href} className="px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors">
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled 
                    ? "text-foreground/80 hover:text-primary" 
                    : isDarkHeroPage 
                      ? "text-white/90 hover:text-white" 
                      : "text-foreground/90 hover:text-primary"
                }`}
              >
                {link.name}
              </a>
            )
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 ${!isScrolled && isDarkHeroPage ? "text-white" : "text-foreground"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t py-4 px-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col border-b border-border/50 pb-2">
              <a 
                href={link.href}
                className="text-lg font-medium text-foreground py-2"
                onClick={() => !link.dropdown && setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
              {link.dropdown && (
                <div className="flex flex-col pl-4 mt-2 gap-2 border-l-2 border-border/50 ml-2 mb-2">
                  {link.dropdown.map(dropItem => (
                    <a 
                      key={dropItem.name}
                      href={dropItem.href}
                      className="text-base text-muted-foreground py-1 hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {dropItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}