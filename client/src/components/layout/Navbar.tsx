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
                         location === "/ai" ||
                         location === "/portfolio" ||
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
    { name: "AI", href: "/ai" },
    { 
      name: "Healthcare", 
      href: "#",
      dropdown: [
        { name: "HCIT", href: "#" }
      ]
    },
    { 
      name: "Technology", 
      href: "#",
      dropdown: [
        { name: "Operating Successes", href: "#" }
      ]
    },
    { name: "News", href: "#" },
  ];

  const linkColor = () => "text-white/70 hover:text-white";

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? "py-3" : "py-5"
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(10,22,40,0.95)' : 'rgba(10,22,40,0.7)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="w-full px-8 md:px-14 flex items-center justify-between">
        <Link href="/">
          <img 
            src={wcasLogo} 
            alt="WCAS" 
            className="h-5 md:h-6 w-auto cursor-pointer transition-opacity brightness-0 invert opacity-90" 
          />
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          <nav ref={navRef} className="flex items-center gap-7">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.name} className="relative flex items-center gap-0">
                  <a
                    href="#"
                    className={`text-sm font-medium transition-colors cursor-pointer ${linkColor()}`}
                    style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 14, WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation', textDecoration: 'none' }}
                    onClick={(e) => { e.preventDefault(); closeDropdown(); }}
                  >
                    {link.name}
                  </a>
                  <button
                    type="button"
                    aria-expanded={openDropdown === link.name}
                    aria-controls={`dropdown-${link.name}`}
                    aria-haspopup="true"
                    onClick={() => toggleDropdown(link.name)}
                    className={`bg-transparent border-none cursor-pointer p-0 ${linkColor()}`}
                    style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation', width: 0, height: 0, overflow: 'hidden' }}
                  >
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
                        <a
                          key={dropItem.name}
                          href="#"
                          role="menuitem"
                          className="px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors"
                          style={{ textDecoration: 'none' }}
                          onClick={(e) => { e.preventDefault(); closeDropdown(); }}
                        >
                          {dropItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : link.href.startsWith("/") ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${linkColor()}`}
                  style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 14, textDecoration: 'none' }}
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  key={link.name} 
                  href="#"
                  onClick={e => e.preventDefault()}
                  className={`text-sm font-medium transition-colors ${linkColor()}`}
                  style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 14, textDecoration: 'none' }}
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>
          <a
            href="#"
            onClick={e => e.preventDefault()}
            className="pill-btn transition-all duration-200"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              padding: "10px 28px",
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
            }}
          >
            Investor Portal
          </a>
        </div>

        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t py-4 px-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          {[...navLinks, { name: "Investor Portal", href: "#" }].map((link) => (
            <div key={link.name} className="flex flex-col border-b border-border/50 pb-2">
              {link.href.startsWith("/") ? (
                <Link
                  href={link.href}
                  className="text-lg font-medium text-foreground py-2"
                  style={{ textDecoration: 'none' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  href="#"
                  className="text-lg font-medium text-foreground py-2"
                  style={{ textDecoration: 'none' }}
                  onClick={(e) => { e.preventDefault(); if (!('dropdown' in link && link.dropdown)) setMobileMenuOpen(false); }}
                >
                  {link.name}
                </a>
              )}
              {'dropdown' in link && link.dropdown && (
                <div className="flex flex-col pl-4 mt-2 gap-2 border-l-2 border-border/50 ml-2 mb-2">
                  {(link as any).dropdown.map((dropItem: any) => (
                    <a 
                      key={dropItem.name}
                      href="#"
                      className="text-base text-muted-foreground py-1 hover:text-primary"
                      style={{ textDecoration: 'none' }}
                      onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); }}
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