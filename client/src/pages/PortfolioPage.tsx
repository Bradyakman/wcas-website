import { useState, useEffect, useRef } from "react";


const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS = "'DM Sans', sans-serif";

type Company = { name: string; sector: "Technology" | "Healthcare"; color: string; status: "current" | "realized"; logo?: string; darkBg?: boolean };

const companies: Company[] = [
  { name: "Equilend", sector: "Technology", color: "#2563eb", status: "current", logo: "/logos/equilend.png", darkBg: true },
  { name: "Grant Street", sector: "Technology", color: "#0d9488", status: "current", logo: "/logos/grant-street.png", darkBg: true },
  { name: "ImageTrend", sector: "Technology", color: "#0284c7", status: "current", logo: "/logos/imagetrend.png" },
  { name: "LINQ", sector: "Technology", color: "#4f46e5", status: "current", logo: "/logos/linq.png" },
  { name: "ACD", sector: "Technology", color: "#7c3aed", status: "current" },
  { name: "GovCIO", sector: "Technology", color: "#0891b2", status: "current" },
  { name: "Absorb", sector: "Technology", color: "#2563eb", status: "current" },
  { name: "TrueCommerce", sector: "Technology", color: "#0d9488", status: "current" },
  { name: "QuickBase", sector: "Technology", color: "#ea580c", status: "current" },
  { name: "Green Street", sector: "Technology", color: "#16a34a", status: "current" },
  { name: "NEWAsurion", sector: "Technology", color: "#d97706", status: "current" },
  { name: "Norstella", sector: "Healthcare", color: "#db2777", status: "current" },
  { name: "AssistRx", sector: "Healthcare", color: "#0d9488", status: "current" },
  { name: "Liberty Dental", sector: "Healthcare", color: "#0284c7", status: "current" },
  { name: "CenterWell", sector: "Healthcare", color: "#16a34a", status: "current" },
  { name: "Valtruis", sector: "Healthcare", color: "#4f46e5", status: "current" },
  { name: "CSA", sector: "Healthcare", color: "#2563eb", status: "current" },
  { name: "Owl", sector: "Healthcare", color: "#7c3aed", status: "current" },
  { name: "EnableComp", sector: "Healthcare", color: "#0891b2", status: "current" },
  { name: "Leiters", sector: "Healthcare", color: "#ea580c", status: "current" },
  { name: "UMP", sector: "Healthcare", color: "#d97706", status: "current" },
  { name: "Kiniciti", sector: "Healthcare", color: "#dc2626", status: "current" },
  { name: "Lumexa", sector: "Healthcare", color: "#db2777", status: "current" },
  { name: "InnovAge", sector: "Healthcare", color: "#0d9488", status: "current" },
  { name: "USAP", sector: "Healthcare", color: "#0284c7", status: "current" },
  { name: "Abzena", sector: "Healthcare", color: "#16a34a", status: "current" },
  { name: "Emerus", sector: "Healthcare", color: "#65a30d", status: "current" },
];

export default function PortfolioPage() {
  const [statusFilter, setStatusFilter] = useState<"current" | "realized" | "all">("current");
  const [sectorFilter, setSectorFilter] = useState<"all" | "Technology" | "Healthcare">("all");
  const [search, setSearch] = useState("");
  const [statusOpen, setStatusOpen] = useState(false);
  const [sectorOpen, setSectorOpen] = useState(false);
  const [hoveredCell, setHoveredCell] = useState<number | null>(null);

  const statusDropdownLabels = { current: "Current Investments", realized: "Realized Investments", all: "All Investments" };
  const sectorDropdownLabels = { all: "All Sectors", Technology: "Technology", Healthcare: "Healthcare" };

  useEffect(() => {
    const close = () => { setStatusOpen(false); setSectorOpen(false); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const filterBarRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (filterBarRef.current) {
        const rect = filterBarRef.current.getBoundingClientRect();
        setIsStuck(rect.top <= 69);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filtered = companies.filter(c => {
    if (statusFilter === "realized") return false;
    if (sectorFilter !== "all" && c.sector !== sectorFilter) return false;
    if (search && !c.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ fontFamily: SERIF, background: "#fff", color: "#111", minHeight: "100vh" }}>

      <section style={{ position: "relative", overflow: "hidden", width: "100%", minHeight: 575, background: "#060f1c" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 80% 50%, rgba(45,212,191,0.08) 0%, transparent 60%)" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "220px 64px 64px" }}>
          <h1 style={{ fontSize: 64, fontWeight: 400, lineHeight: 1.2, color: "#fff", marginBottom: 48 }}>Building companies that <em style={{ fontStyle: "italic", fontWeight: 400, color: "#8BBDE8" }}>define</em> their categories.</h1>
          <p style={{ fontFamily: SANS, fontSize: 19, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontWeight: 300, maxWidth: "100%", marginBottom: 40 }}>Over 45 years and 190+ investments, WCAS has partnered with exceptional management teams across technology and healthcare to build market-leading companies.</p>
        </div>
      </section>

      <div ref={filterBarRef} style={{ position: "sticky", top: 68, zIndex: 10, background: isStuck ? "rgba(255,255,255,0.97)" : "#fff", backdropFilter: isStuck ? "blur(16px)" : "none", padding: "18px 48px", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, boxShadow: isStuck ? "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)" : "none", borderBottom: "1px solid #ebebeb", borderRadius: isStuck ? "0 0 20px 20px" : "0", transition: "box-shadow 0.3s ease, border-radius 0.3s ease, background 0.3s ease" }}>
        <div style={{ position: "relative" }} onClick={e => e.stopPropagation()}>
          <button
            onClick={() => { setStatusOpen(!statusOpen); setSectorOpen(false); }}
            style={{ fontFamily: SANS, fontSize: 16, fontWeight: 500, padding: "14px 36px", borderRadius: 25, border: statusFilter !== "current" ? "none" : "1px solid #888", background: statusFilter !== "current" ? "#0C1A2E" : "#fff", color: statusFilter !== "current" ? "#fff" : "#222", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, width: 200, justifyContent: "center" }}
          >
            {statusFilter === "current" ? "Status" : statusDropdownLabels[statusFilter]}
            <span style={{ fontSize: 10 }}>▾</span>
          </button>
          {statusOpen && (
            <div style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, background: "#fff", border: "1px solid #e4e4e4", borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.1)", overflow: "hidden", minWidth: 200, zIndex: 20 }}>
              {(["current", "realized", "all"] as const).map(v => (
                <div key={v} onClick={() => { setStatusFilter(v); setStatusOpen(false); }} style={{ fontFamily: SANS, fontSize: 13, padding: "10px 20px", cursor: "pointer", background: statusFilter === v ? "#f5f5f5" : "#fff", color: "#333" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#f5f5f5")}
                  onMouseLeave={e => (e.currentTarget.style.background = statusFilter === v ? "#f5f5f5" : "#fff")}
                >{statusDropdownLabels[v]}</div>
              ))}
            </div>
          )}
        </div>

        <div style={{ position: "relative" }} onClick={e => e.stopPropagation()}>
          <button
            onClick={() => { setSectorOpen(!sectorOpen); setStatusOpen(false); }}
            style={{ fontFamily: SANS, fontSize: 16, fontWeight: 500, padding: "14px 36px", borderRadius: 25, border: sectorFilter !== "all" ? "none" : "1px solid #888", background: sectorFilter !== "all" ? "#0C1A2E" : "#fff", color: sectorFilter !== "all" ? "#fff" : "#222", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, width: 200, justifyContent: "center" }}
          >
            {sectorFilter === "all" ? "Sector" : sectorDropdownLabels[sectorFilter]}
            <span style={{ fontSize: 10 }}>▾</span>
          </button>
          {sectorOpen && (
            <div style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, background: "#fff", border: "1px solid #e4e4e4", borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.1)", overflow: "hidden", minWidth: 160, zIndex: 20 }}>
              {(["all", "Technology", "Healthcare"] as const).map(v => (
                <div key={v} onClick={() => { setSectorFilter(v); setSectorOpen(false); }} style={{ fontFamily: SANS, fontSize: 13, padding: "10px 20px", cursor: "pointer", background: sectorFilter === v ? "#f5f5f5" : "#fff", color: "#333" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#f5f5f5")}
                  onMouseLeave={e => (e.currentTarget.style.background = sectorFilter === v ? "#f5f5f5" : "#fff")}
                >{sectorDropdownLabels[v]}</div>
              ))}
            </div>
          )}
        </div>

        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ fontFamily: SANS, fontSize: 16, fontWeight: 500, padding: "14px 36px", borderRadius: 25, border: "1px solid #888", outline: "none", width: 200, background: "#fff", color: "#222", textAlign: "center" }}
        />
      </div>

      <div style={{ background: "#fff", padding: "0 64px" }}>
        {filtered.length === 0 ? (
          <div style={{ fontFamily: SANS, fontSize: 15, color: "#999", textAlign: "center", padding: "80px 0" }}>No companies match your filters.</div>
        ) : (() => {
          const techCompanies = filtered.filter(c => c.sector === "Technology");
          const hcCompanies = filtered.filter(c => c.sector === "Healthcare");
          const renderGrid = (items: Company[], offset: number) => {
            const rows: Company[][] = [];
            for (let r = 0; r < items.length; r += 4) rows.push(items.slice(r, r + 4));
            return (
              <div>
                {rows.map((row, ri) => (
                  <div key={ri} style={{ background: "#fff", borderBottom: "1px solid #d5d5d5" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
                      {row.map((c, ci) => {
                        const idx = offset + ri * 4 + ci;
                        const isHovered = hoveredCell === idx;
                        return (
                          <div
                            key={c.name + idx}
                            onMouseEnter={() => setHoveredCell(idx)}
                            onMouseLeave={() => setHoveredCell(null)}
                            style={{
                              minHeight: 240,
                              padding: "80px 48px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background: isHovered ? "#fff" : "transparent",
                              transform: isHovered ? "scale(1.08) translateY(-6px)" : "scale(1)",
                              boxShadow: isHovered ? "0 24px 60px rgba(0,0,0,0.14), 0 8px 20px rgba(0,0,0,0.08)" : "none",
                              borderRadius: isHovered ? 16 : 0,
                              transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-radius 0.3s ease",
                              willChange: "transform",
                              position: "relative",
                              zIndex: isHovered ? 20 : 1,
                              cursor: "pointer",
                            }}
                          >
                            {c.logo ? (
                              <img src={c.logo} alt={c.name} style={{ maxHeight: c.name === "Grant Street" ? 90 : c.name === "ImageTrend" ? 72 : 56, maxWidth: c.name === "Grant Street" ? 340 : c.name === "ImageTrend" ? 280 : 220, objectFit: "contain", filter: isHovered ? "none" : c.darkBg ? "grayscale(100%) brightness(0) opacity(0.85)" : "grayscale(100%) opacity(0.5)", transition: "filter 0.3s" }} />
                            ) : (
                              <span style={{
                                fontFamily: SANS,
                                fontSize: 32,
                                fontWeight: 600,
                                color: isHovered ? c.color : "#111",
                                transition: "color 0.3s",
                                textAlign: "center",
                              }}>{c.name}</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            );
          };
          return (
            <>
              {techCompanies.length > 0 && renderGrid(techCompanies, 0)}
              {techCompanies.length > 0 && hcCompanies.length > 0 && (
                <div style={{ borderTop: "1px solid #d5d5d5", margin: "0" }} />
              )}
              {hcCompanies.length > 0 && renderGrid(hcCompanies, techCompanies.length)}
            </>
          );
        })()}
      </div>

    </div>
  );
}
