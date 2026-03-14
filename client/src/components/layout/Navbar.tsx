import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import wcasLogo from "@assets/WCAS-logo-sheaco.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

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
    { name: "AI", href: "/ai" },
    { name: "News", href: "#" },
    { name: "Investor Portal", href: "#" },
  ];

  const linkStyle: React.CSSProperties = {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 400,
    fontSize: 13,
    letterSpacing: '0.04em',
    color: 'rgba(255,255,255,0.90)',
    textDecoration: 'none',
    transition: 'color 0.2s',
  };

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        paddingTop: isScrolled ? 12 : 18,
        paddingBottom: isScrolled ? 12 : 18,
        backgroundColor: '#04112b',
      }}
    >
      {/* Logo — fades in on scroll */}
      <div style={{ position: "absolute", left: 28, top: "50%", transform: "translateY(-50%)", opacity: isScrolled ? 1 : 0, transition: "opacity 0.3s ease", pointerEvents: isScrolled ? "auto" : "none" }}>
        <img src={wcasLogo} alt="WCAS" style={{ height: 26, width: "auto", mixBlendMode: "screen", opacity: 0.95 }} />
      </div>

      <div ref={navRef} className="w-full flex items-center justify-end px-8" style={{ gap: 32 }}>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.filter(l => l.name !== "Investor Portal").map((link) => (
            link.dropdown ? (
              <div key={link.name} className="relative">
                <a
                  href="#"
                  style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,1)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.90)')}
                  onClick={(e) => { e.preventDefault(); toggleDropdown(link.name); }}
                >
                  {link.name}
                </a>
                <div
                  role="menu"
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    openDropdown === link.name
                      ? 'opacity-100 pointer-events-auto translate-y-0'
                      : 'opacity-0 pointer-events-none -translate-y-1'
                  }`}
                >
                  <div className="rounded-md shadow-xl py-2 min-w-[180px] flex flex-col" style={{ background: 'rgba(3,9,28,0.98)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {link.dropdown.map((dropItem) => (
                      <a
                        key={dropItem.name}
                        href="#"
                        role="menuitem"
                        className="px-5 py-2.5 text-sm transition-colors"
                        style={{ color: 'rgba(255,255,255,0.90)', textDecoration: 'none' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,1)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.90)')}
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
                style={linkStyle}
                onMouseEnter={(e: any) => (e.currentTarget.style.color = 'rgba(255,255,255,1)')}
                onMouseLeave={(e: any) => (e.currentTarget.style.color = 'rgba(255,255,255,0.90)')}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href="#"
                style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,1)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.90)')}
                onClick={e => e.preventDefault()}
              >
                {link.name}
              </a>
            )
          ))}
        </nav>

        {/* Investor Portal pill */}
        <a
          href="#"
          className="hidden lg:inline-flex"
          onClick={e => e.preventDefault()}
          style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 13, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.95)', textDecoration: 'none', padding: '7px 18px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.3)', transition: 'border-color 0.2s, color 0.2s', whiteSpace: 'nowrap' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.6)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.95)'; }}
        >
          Investor Portal
        </a>

        <button
          className="lg:hidden p-2 text-white absolute right-8"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full shadow-lg py-4 px-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto" style={{ background: 'rgba(3,9,28,0.98)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col pb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              {link.href.startsWith("/") ? (
                <Link
                  href={link.href}
                  className="text-base py-2"
                  style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontFamily: "'Outfit', sans-serif" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  href="#"
                  className="text-base py-2"
                  style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontFamily: "'Outfit', sans-serif" }}
                  onClick={(e) => { e.preventDefault(); if (!('dropdown' in link && link.dropdown)) setMobileMenuOpen(false); }}
                >
                  {link.name}
                </a>
              )}
              {'dropdown' in link && link.dropdown && (
                <div className="flex flex-col pl-4 mt-1 gap-1 ml-2 mb-1" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                  {(link as any).dropdown.map((dropItem: any) => (
                    <a
                      key={dropItem.name}
                      href="#"
                      className="text-sm py-1"
                      style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontFamily: "'Outfit', sans-serif" }}
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
