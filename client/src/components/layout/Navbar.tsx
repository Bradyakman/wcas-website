import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import wcasLogo from "@assets/WCAS-logo-sheaco.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const navRef = useRef<HTMLElement>(null);

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

  const closeDropdown = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeDropdown();
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDropdown();
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeDropdown]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(prev => prev === name ? null : name);
  };

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
        <nav ref={navRef} className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            link.dropdown ? (
              <div key={link.name} className="relative flex items-center gap-1">
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    isScrolled 
                      ? "text-foreground/80 hover:text-primary" 
                      : isDarkHeroPage 
                        ? "text-white/90 hover:text-white" 
                        : "text-foreground/90 hover:text-primary"
                  }`}
                  style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
                  onClick={closeDropdown}
                >
                  {link.name}
                </Link>
                <button
                  type="button"
                  aria-expanded={openDropdown === link.name}
                  aria-controls={`dropdown-${link.name}`}
                  aria-haspopup="true"
                  onClick={() => toggleDropdown(link.name)}
                  className={`bg-transparent border-none cursor-pointer p-1 ${
                    isScrolled 
                      ? "text-foreground/80 hover:text-primary" 
                      : isDarkHeroPage 
                        ? "text-white/90 hover:text-white" 
                        : "text-foreground/90 hover:text-primary"
                  }`}
                  style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
                >
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={`opacity-70 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div
                  id={`dropdown-${link.name}`}
                  role="menu"
                  className={`absolute top-full left-0 pt-4 transition-all duration-200 ${
                    openDropdown === link.name
                      ? 'opacity-100 pointer-events-auto translate-y-0'
                      : 'opacity-0 pointer-events-none -translate-y-1'
                  }`}
                >
                  <div className="bg-white rounded-lg shadow-lg border border-border py-2 min-w-[200px] flex flex-col">
                    {link.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        href={dropItem.href}
                        role="menuitem"
                        className="px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors"
                        onClick={closeDropdown}
                      >
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

        <button 
          className={`lg:hidden p-2 ${!isScrolled && isDarkHeroPage ? "text-white" : "text-foreground"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

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
