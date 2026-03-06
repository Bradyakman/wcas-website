import { useState, useEffect } from "react";
import equilendLogo from "@assets/image_1772774291097.png";


const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS = "'DM Sans', sans-serif";

type Company = { name: string; sector: "Technology" | "Healthcare"; color: string; status: "current" | "realized"; logo?: string };

const companies: Company[] = [
  { name: "Equilend", sector: "Technology", color: "#2563eb", status: "current", logo: equilendLogo },
  { name: "Grant Street", sector: "Technology", color: "#0d9488", status: "current" },
  { name: "ImageTrend", sector: "Technology", color: "#0284c7", status: "current" },
  { name: "LINQ", sector: "Technology", color: "#4f46e5", status: "current" },
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

  const statusLabels = { current: "Current Investments", realized: "Realized Investments", all: "All Investments" };
  const sectorLabels = { all: "All Sectors", Technology: "Technology", Healthcare: "Healthcare" };

  useEffect(() => {
    const close = () => { setStatusOpen(false); setSectorOpen(false); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
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
          <p style={{ fontFamily: SANS, fontSize: 19, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontWeight: 300, maxWidth: "100%", marginBottom: 40 }}>Over 45 years and 190+ investments, WCAS has partnered with exceptional management teams across technology and healthcare to build market-leading companies</p>
        </div>
      </section>

      <div style={{ position: "sticky", top: 68, zIndex: 10, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e4e4e4", padding: "16px 48px", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ position: "relative" }} onClick={e => e.stopPropagation()}>
          <button
            onClick={() => { setStatusOpen(!statusOpen); setSectorOpen(false); }}
            style={{ fontFamily: SANS, fontSize: 13, fontWeight: 500, padding: "8px 20px", borderRadius: 20, border: "none", background: "#111", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}
          >
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
            {statusLabels[statusFilter]}
            <span style={{ fontSize: 10 }}>▾</span>
          </button>
          {statusOpen && (
            <div style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, background: "#fff", border: "1px solid #e4e4e4", borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.1)", overflow: "hidden", minWidth: 200, zIndex: 20 }}>
              {(["current", "realized", "all"] as const).map(v => (
                <div key={v} onClick={() => { setStatusFilter(v); setStatusOpen(false); }} style={{ fontFamily: SANS, fontSize: 13, padding: "10px 20px", cursor: "pointer", background: statusFilter === v ? "#f5f5f5" : "#fff", color: "#333" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#f5f5f5")}
                  onMouseLeave={e => (e.currentTarget.style.background = statusFilter === v ? "#f5f5f5" : "#fff")}
                >{statusLabels[v]}</div>
              ))}
            </div>
          )}
        </div>

        <div style={{ position: "relative" }} onClick={e => e.stopPropagation()}>
          <button
            onClick={() => { setSectorOpen(!sectorOpen); setStatusOpen(false); }}
            style={{ fontFamily: SANS, fontSize: 13, fontWeight: 500, padding: "8px 20px", borderRadius: 20, border: "1px solid #e4e4e4", background: sectorFilter !== "all" ? "#111" : "#fff", color: sectorFilter !== "all" ? "#fff" : "#333", cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}
          >
            {sectorLabels[sectorFilter]}
            <span style={{ fontSize: 10 }}>▾</span>
          </button>
          {sectorOpen && (
            <div style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, background: "#fff", border: "1px solid #e4e4e4", borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.1)", overflow: "hidden", minWidth: 160, zIndex: 20 }}>
              {(["all", "Technology", "Healthcare"] as const).map(v => (
                <div key={v} onClick={() => { setSectorFilter(v); setSectorOpen(false); }} style={{ fontFamily: SANS, fontSize: 13, padding: "10px 20px", cursor: "pointer", background: sectorFilter === v ? "#f5f5f5" : "#fff", color: "#333" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#f5f5f5")}
                  onMouseLeave={e => (e.currentTarget.style.background = sectorFilter === v ? "#f5f5f5" : "#fff")}
                >{sectorLabels[v]}</div>
              ))}
            </div>
          )}
        </div>

        <div style={{ marginLeft: "auto" }}>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ fontFamily: SANS, fontSize: 13, padding: "8px 20px", borderRadius: 20, border: "1px solid #e4e4e4", outline: "none", width: 200, background: "#fff", color: "#333" }}
          />
        </div>
      </div>

      <div style={{ background: "#fff" }}>
        {filtered.length === 0 ? (
          <div style={{ fontFamily: SANS, fontSize: 15, color: "#999", textAlign: "center", padding: "80px 0" }}>No companies match your filters.</div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {filtered.map((c, i) => {
              const isHovered = hoveredCell === i;
              return (
                <div
                  key={c.name + i}
                  onMouseEnter={() => setHoveredCell(i)}
                  onMouseLeave={() => setHoveredCell(null)}
                  style={{
                    minHeight: 148,
                    padding: "52px 40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: "1px solid #e4e4e4",
                    background: "#fff",
                    transform: isHovered ? "scale(1.08) translateY(-6px)" : "scale(1)",
                    boxShadow: isHovered ? "0 24px 60px rgba(0,0,0,0.14), 0 8px 20px rgba(0,0,0,0.08)" : "none",
                    borderColor: isHovered ? "transparent" : "#e4e4e4",
                    borderRadius: isHovered ? 16 : 0,
                    transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-radius 0.3s ease, border-color 0.3s ease",
                    willChange: "transform",
                    position: "relative",
                    zIndex: isHovered ? 20 : 1,
                    cursor: "pointer",
                  }}
                >
                  {c.logo ? (
                    <img src={c.logo} alt={c.name} style={{ maxHeight: 46, maxWidth: 184, objectFit: "contain", filter: isHovered ? "none" : "grayscale(100%) brightness(0)", transition: "filter 0.3s" }} />
                  ) : (
                    <span style={{
                      fontFamily: SANS,
                      fontSize: 25,
                      fontWeight: 600,
                      color: isHovered ? c.color : "#1a1a1a",
                      transition: "color 0.3s",
                      textAlign: "center",
                    }}>{c.name}</span>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}
