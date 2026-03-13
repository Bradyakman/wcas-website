import { Play, X } from "lucide-react";
import heroBg from "@assets/image_1773080745684.png";
import wcasLogo from "@assets/WCAS-logo-sheaco.png";
import logoLumexa from "@assets/image_1772400832099.png";
import absorbLogoDark from "@assets/image_1772400928657.png";
import missionBg from "@assets/2345234534_1771799538730.jpg";
import logoSelect from "@assets/image_1772034518225.png";
import shieldsFullLogo from "@assets/shields_word_white_only_1772037749705.png";
import quickbaseLogo from "@assets/quickbase_white_transparent_(3)_1772034799124.png";
import absorbLogo from "@assets/absorb_text_white_only_1772037851934.png";
import norstellaLogo from "@assets/norstella_text_white_1772038125226.png";
import intoxalockLogo from "@assets/intoxalock_black_to_white_clean_1772038444095.png";
import leitersLogo from "@assets/image_1772039486572.png";
import greenStreetLogo from "@assets/greenstreet_text_white_preserve_bg_1772038753340.png";
import logoAvetta from "@assets/Avetta_transparent.png";
import hcImg from "@assets/image_1773169684720.png";
import techImg from "@assets/image_1773169663356.png";
import logoAsurion from "@assets/Asurion_1771799704133_clean.png";
import logoInnovAge from "@assets/InnovAge_1771799704134_clean.png";
import logoQuickbase from "@assets/Quickbase_1771799704134_clean.png";
import logoGovCIO from "@assets/GovCIO_1771799704134_clean.png";
import logoKindred from "@assets/KindredAtHome_transparent.png";
import logoLINQ from "@assets/LINQ_1771799704131_clean.png";
import logoSelectMed from "@assets/Select_Medical_transparent.png";
import logoShields from "@assets/Shields_logo_transparent_LRG-3-1024x272_1771799704132_clean.png";
import logoNorstella from "@assets/Norstella_color_positive_RGB_-_USE_THIS-1-1024x354_1771799704136_clean.png";
import logoAllianceData from "@assets/AllianceData_1771799704135_clean.png";
import logoClearwater from "@assets/Clearwater-Analytics_1771799704135_clean.png";
import logoNaviHealth from "@assets/navihealth_new_clean.png";
import logoSimeio from "@assets/simeio_transparent.png";
import concentraLogo from "@assets/Picture1-removebg-preview_1772398995578.png";

import { useState } from "react";

const ACCENT = "#7baee0";
const BG = "#0C1A2E";
const BORDER = "rgba(255,255,255,0.08)";
const MUTED = "rgba(255,255,255,0.5)";
const VERY_MUTED = "rgba(255,255,255,0.4)";
const TEXT = "#E4E8ED";
const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS = "'DM Sans', sans-serif";

const wcasVideos = [
  { id: "861242949", title: "Paths to Growth", partner: "Absorb", category: "Technology" as const, partnerLogo: absorbLogo, centeredLayout: true, logoClass: "h-10 md:h-12" },
  { id: "913334845", title: "Investing in Better Healthcare", partner: "Concentra", category: "Healthcare" as const, partnerLogo: concentraLogo, centeredLayout: true, logoClass: "h-10 md:h-12", spotlightH: 90 },
  { id: "861243221", title: "Paths to Growth", partner: "Green Street", category: "Technology" as const, partnerLogo: greenStreetLogo, centeredLayout: true, logoClass: "h-12 md:h-14", spotlightH: 80 },
  { id: "861243091", title: "Paths to Growth", partner: "Intoxalock", category: "Technology" as const, partnerLogo: intoxalockLogo, centeredLayout: true, logoClass: "h-8 md:h-10" },
  { id: "913388269", title: "Investing in Better Healthcare", partner: "Leiters Health", category: "Healthcare" as const, partnerLogo: leitersLogo, centeredLayout: true, logoClass: "h-8 md:h-10" },
  { id: "913387297", title: "Investing in Better Healthcare", partner: "Norstella", category: "Healthcare" as const, partnerLogo: norstellaLogo, centeredLayout: true, logoClass: "h-12 md:h-14", spotlightH: 100 },
  { id: "861242809", title: "Paths to Growth", partner: "Quickbase", category: "Technology" as const, partnerLogo: quickbaseLogo, centeredLayout: true, logoClass: "h-8 md:h-10" },
  { id: "913387748", title: "Investing in Better Healthcare", partner: "Shields Health Solutions", category: "Healthcare" as const, partnerLogo: shieldsFullLogo, centeredLayout: true, logoClass: "h-10 md:h-12", spotlightH: 80 },
];

export default function Home() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState(0);
  const [isVideoTransitioning, setIsVideoTransitioning] = useState(false);
  const [expandedNews, setExpandedNews] = useState(0);

  const [videoFilter, setVideoFilter] = useState<"All" | "Technology" | "Healthcare">("All");

  const filteredVideos = (videoFilter === "All" ? wcasVideos : wcasVideos.filter(v => v.category === videoFilter)).sort((a, b) => a.partner.localeCompare(b.partner));
  const safeActiveVideo = Math.min(activeVideo, Math.max(0, filteredVideos.length - 1));

  const switchVideo = (idx: number) => {
    if (idx === activeVideo) return;
    setIsVideoTransitioning(true);
    setTimeout(() => {
      setActiveVideo(idx);
      setTimeout(() => setIsVideoTransitioning(false), 50);
    }, 250);
  };

  const handleFilterChange = (filter: "All" | "Technology" | "Healthcare") => {
    setVideoFilter(filter);
    setActiveVideo(0);
    setIsVideoTransitioning(false);
  };

  return (
    <div style={{ fontFamily: SERIF, background: BG, color: TEXT, minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(160deg, #03091c 0%, #061535 40%, #0a2260 70%, #0d3080 100%)",
        paddingBottom: 0,
      }}>
        {/* Nav spacer */}
        <div style={{ height: 72 }} />

        {/* Logo centered */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "56px 48px 40px" }}>
          <img
            src={wcasLogo}
            alt="WCAS"
            style={{ height: 72, width: "auto", filter: "brightness(0) invert(1)", opacity: 0.95 }}
          />
        </div>

        {/* Tagline */}
        <div style={{ display: "flex", justifyContent: "center", padding: "0 48px 40px" }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 23, fontWeight: 300, lineHeight: 1.4, color: "rgba(255,255,255,0.75)", margin: 0, textAlign: "center", letterSpacing: "0.01em" }}>
            Sector specialists. Long-term partners.
          </p>
        </div>

        {/* Stats */}
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 48px 0", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {[
            { num: "45+", label: "Years Investing" },
            { num: "190+", label: "Companies" },
            { num: "18", label: "Funds Raised" },
            { num: "$33B+", label: "Capital Raised" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: SANS, fontSize: 40, fontWeight: 700, marginBottom: 6, color: "#FFFFFF", letterSpacing: "-0.5px" }}>{s.num}</div>
              <div style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.85)", fontWeight: 500, letterSpacing: 1.5, textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 14, justifyContent: "center", padding: "36px 48px 64px" }}>
          <a href="#" onClick={e=>e.preventDefault()} className="pill-btn" style={{ fontFamily: SANS, fontSize: 14, fontWeight: 500, padding: "11px 28px", borderRadius: 23, border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.85)", cursor: "pointer", textDecoration: "none" }}>Our Story</a>
          <span className="pill-btn" style={{ fontFamily: SANS, fontSize: 14, fontWeight: 500, padding: "11px 28px", borderRadius: 23, border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.85)", cursor: "default", textDecoration: "none" }}>Explore Our Portfolio</span>
          <a href="/ai" className="pill-btn" style={{ fontFamily: SANS, fontSize: 14, fontWeight: 500, padding: "11px 28px", borderRadius: 23, border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.85)", cursor: "pointer", textDecoration: "none" }}>Our Approach to AI</a>
        </div>

        {/* Curved white bottom */}
        <div style={{ position: "relative", height: 80, overflow: "hidden" }}>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0, width: "100%", height: "100%" }}>
            <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── WHERE WE INVEST — CARD LAYOUT ── */}
      <section style={{ padding: 0, background: "#ffffff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "56px 48px 32px" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#0C1A2E" }}>Our Focus Sectors</span>
          <div style={{ width: 40, height: 1, background: "linear-gradient(to right, #0C1A2E, transparent)" }} />
        </div>
        <style>{`
          .wwi-cards { display:flex; gap:32px; padding:0 48px 64px; }
          .wwi-card { flex:1; border-radius:4px; overflow:hidden; background:#fff; box-shadow:0 4px 16px rgba(12,26,46,0.1), 0 1px 3px rgba(12,26,46,0.06); transition:transform 0.3s ease, box-shadow 0.3s ease; cursor:default; }
          .wwi-card:hover { transform:translateY(-4px); box-shadow:0 8px 28px rgba(12,26,46,0.13); }
          .wwi-card-img-wrap { width:100%; height:180px; overflow:hidden; }
          .wwi-card-img { width:100%; height:100%; object-fit:cover; transition:transform 0.4s ease; display:block; }
          .wwi-card:hover .wwi-card-img { transform:scale(1.06); }
          .wwi-card-body { padding:36px; }
          .wwi-card-title { font-family:'Cormorant Garamond',serif; font-size:42px; font-weight:300; color:#0C1A2E; line-height:1.1; margin:0 0 8px; }
          .wwi-card-subtitle { font-family:'Cormorant Garamond',serif; font-size:24px; font-weight:400; color:#0C1A2E; line-height:1.3; margin:0 0 16px; }
          .wwi-card-desc { font-family:'DM Sans',sans-serif; font-size:16.5px; color:rgba(12,26,46,0.55); line-height:1.65; margin:0 0 28px; }
          .wwi-card-cta { font-family:'DM Sans',sans-serif; font-size:14px; font-weight:500; color:#5cc3d1; text-decoration:none; display:inline-block; transition:color 0.25s ease, transform 0.25s ease, letter-spacing 0.25s ease; }
          .wwi-card-cta:hover { color:#4aa8b5; transform:translateX(6px); letter-spacing:0.5px; }
        `}</style>
        <div className="wwi-cards">
          <div className="wwi-card">
            <div className="wwi-card-img-wrap">
              <img className="wwi-card-img" src={hcImg} alt="Healthcare" />
            </div>
            <div className="wwi-card-body">
              <div className="wwi-card-title">Healthcare</div>
              <div className="wwi-card-subtitle">Investing in Better Healthcare</div>
              <p className="wwi-card-desc">We partner with category-defining healthcare companies and their management teams to expand access, improve quality, and build lasting value.</p>
              <a href="/hcit" className="wwi-card-cta">Explore Healthcare &rarr;</a>
            </div>
          </div>
          <div className="wwi-card">
            <div className="wwi-card-img-wrap">
              <img className="wwi-card-img" src={techImg} alt="Technology" />
            </div>
            <div className="wwi-card-body">
              <div className="wwi-card-title">Technology</div>
              <div className="wwi-card-subtitle">Powering Essential Industries</div>
              <p className="wwi-card-desc">We partner with leading B2B technology companies and their management teams to accelerate growth and build lasting success.</p>
              <a href="/technology" className="wwi-card-cta">Explore Technology &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section style={{ background: "#0c1a2e", padding: "56px 56px 80px" }}>
        <style>{`
          .port-marquee-wrap { position:relative; overflow:hidden; }
          .port-marquee-wrap::before, .port-marquee-wrap::after { content:""; position:absolute; top:0; bottom:0; width:80px; z-index:2; pointer-events:none; }
          .port-marquee-wrap::before { left:0; background:linear-gradient(to right, #0c1a2e, transparent); }
          .port-marquee-wrap::after { right:0; background:linear-gradient(to left, #0c1a2e, transparent); }
          .port-marquee-track { display:flex; gap:16px; animation:port-scroll 30s linear infinite; width:max-content; }
          .port-marquee-track:hover { animation-play-state:paused; }
          @keyframes port-scroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          .port-logo-card { width:200px; height:90px; border-radius:10px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.06); display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:transform 0.3s, border-color 0.3s, box-shadow 0.3s, background 0.3s; padding:0 24px; box-sizing:border-box; overflow:hidden; }
          .port-logo-card:hover { transform:translateY(-3px); border-color:rgba(92,195,209,0.3); box-shadow:0 4px 20px rgba(92,195,209,0.08); background:rgba(255,255,255,0.95); }
          .port-logo-card img { transition:filter 0.3s ease; }
          .port-logo-card:hover img { filter:none !important; }
          .port-logo-card span { font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500; color:rgba(255,255,255,0.7); letter-spacing:0.5px; }
          @media (prefers-reduced-motion: reduce) { .port-marquee-track { animation:none !important; flex-wrap:wrap; justify-content:center; } }
        `}</style>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 48 }}>
          <div style={{ maxWidth: 900 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#5cc3d1" }}>Our Portfolio</span>
              <div style={{ width: 40, height: 1, background: "linear-gradient(to right, #5cc3d1, transparent)" }} />
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 42, fontWeight: 400, color: "#fff", lineHeight: 1.15, marginBottom: 20, whiteSpace: "nowrap" }}>Building market leaders across healthcare and technology</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>With deep domain experience and a long-term partnership mentality, we look to drive value through a combination of operational improvements, internal growth initiatives and strategic acquisitions.</p>
          </div>
          <a href="/portfolio" className="pill-btn" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, padding: "10px 28px", borderRadius: 20, border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.9)", cursor: "pointer", textDecoration: "none", whiteSpace: "nowrap", marginTop: 40 }}>Explore Our Portfolio &rarr;</a>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 48 }}>
          <div className="port-marquee-wrap">
            <div className="port-marquee-track">
              {[...Array(2)].map((_, setIdx) =>
                [
                  { name: "Avetta", src: logoAvetta, h: 44 },
                  { name: "Asurion", src: logoAsurion, h: 24 },
                  { name: "InnovAge", src: logoInnovAge, h: 29 },
                  { name: "Quickbase", src: logoQuickbase, h: 24 },
                  { name: "GovCIO", src: logoGovCIO, h: 29 },
                  { name: "Kindred at Home", src: "/logos/kindred.png", h: 44 },
                  
                  { name: "Select Medical", src: logoSelectMed, h: 42 },
                  { name: "Shields", src: logoShields, h: 29 },
                  { name: "Norstella", src: logoNorstella, h: 50 },
                  { name: "Alliance Data", src: logoAllianceData, h: 33 },
                  { name: "Clearwater Analytics", src: logoClearwater, h: 29 },
                  { name: "NaviHealth", src: logoNaviHealth, h: 42 },
                  { name: "Simeio", src: logoSimeio, h: 29 },
                  { name: "Lumexa", src: "/logos/lumexa-transparent.png", h: 40 },
                  { name: "AssistRx", src: "/logos/assistrx-transparent.png", h: 34 },
                  { name: "Equilend", src: "/logos/equilend.png", h: 29 },
                  { name: "ImageTrend", src: "/logos/imagetrend-transparent.png", h: 30 },
                ].map((co, i) => (
                  <div key={`${setIdx}-${i}`} className="port-logo-card">
                    <img src={co.src} alt={co.name} style={{ height: co.h, maxWidth: 132, objectFit: "contain", filter: "brightness(0) invert(1)" }} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── SPOTLIGHT + SIDEBAR SECTION ── */}
      <section style={{ position: "relative", overflow: "hidden", background: "#152238", marginTop: 0 }}>
        <style>{`
          .spotlight-main:hover .spotlight-play { transform:scale(1.08); }
          .spotlight-sidebar-item { display:flex; align-items:center; gap:14px; padding:14px 20px; cursor:pointer; border-left:3px solid transparent; transition:all 0.2s ease; position:relative; }
          .spotlight-sidebar-item:hover { background:rgba(255,255,255,0.04); }
          .spotlight-sidebar-item.active { background:rgba(255,255,255,0.06); border-left-color:${ACCENT}; }
          .spotlight-sidebar-item.active .sb-partner { color:#fff; }
          .spotlight-sidebar-item.active .sb-title { color:rgba(255,255,255,0.7); }
        `}</style>
        <div style={{ position: "relative", zIndex: 10, padding: "56px 56px 80px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 48 }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#5cc3d1" }}>Our Mission</span>
                    <div style={{ width: 40, height: 1, background: "linear-gradient(to right, #5cc3d1, transparent)" }} />
                  </div>
                  <h2 style={{ fontSize: 34, fontWeight: 400, lineHeight: 1.2 }}>Be Your Partner of Choice</h2>
                </div>
                <p style={{ fontFamily: SANS, fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, fontWeight: 300, paddingTop: 8 }}>
                  WCAS's mission is to lead in healthcare and technology investments through thought leadership, culture, and results. We create deep partnerships and are frequently selected as the preferred partner.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 24 }}>
            {/* LEFT — Spotlight Card */}
            <div
              className="spotlight-main"
              onClick={() => setPlayingVideo(filteredVideos[safeActiveVideo].id)}
              style={{ flex: 2, minHeight: 480, borderRadius: 20, background: "#0a1020", position: "relative", overflow: "hidden", cursor: "pointer", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Corner brackets */}
              <div style={{ position: "absolute", top: 20, left: 20, width: 28, height: 28, borderTop: `2px solid rgba(107,163,214,0.35)`, borderLeft: `2px solid rgba(107,163,214,0.35)`, zIndex: 3 }} />
              <div style={{ position: "absolute", top: 20, right: 20, width: 28, height: 28, borderTop: `2px solid rgba(107,163,214,0.35)`, borderRight: `2px solid rgba(107,163,214,0.35)`, zIndex: 3 }} />
              <div style={{ position: "absolute", bottom: 12, left: 20, width: 28, height: 28, borderBottom: `2px solid rgba(107,163,214,0.35)`, borderLeft: `2px solid rgba(107,163,214,0.35)`, zIndex: 5 }} />
              <div style={{ position: "absolute", bottom: 12, right: 20, width: 28, height: 28, borderBottom: `2px solid rgba(107,163,214,0.35)`, borderRight: `2px solid rgba(107,163,214,0.35)`, zIndex: 5 }} />

              {/* Category badge */}
              <div style={{ position: "absolute", top: 24, right: 32, zIndex: 4 }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: filteredVideos[safeActiveVideo].category === "Healthcare" ? "#9ac8ec" : "#5cc3d1", padding: "5px 14px", borderRadius: 12, background: filteredVideos[safeActiveVideo].category === "Healthcare" ? "rgba(154,200,236,0.1)" : "rgba(92,195,209,0.1)", border: `1px solid ${filteredVideos[safeActiveVideo].category === "Healthcare" ? "rgba(154,200,236,0.2)" : "rgba(92,195,209,0.2)"}` }}>
                  {filteredVideos[safeActiveVideo].category}
                </span>
              </div>

              {/* Partner logo at top */}
              <div style={{ position: "absolute", top: 36, left: 0, right: 0, display: "flex", justifyContent: "center", alignItems: "center", height: 100, opacity: isVideoTransitioning ? 0 : 1, transition: "opacity 0.25s ease", zIndex: 4 }}>
                {'partnerLogo' in filteredVideos[safeActiveVideo] && filteredVideos[safeActiveVideo].partnerLogo ? (
                  <img src={filteredVideos[safeActiveVideo].partnerLogo} alt={filteredVideos[safeActiveVideo].partner} style={{ maxHeight: 90, maxWidth: 300, objectFit: "contain", opacity: 0.85 }} />
                ) : (
                  <span style={{ fontFamily: SANS, fontSize: 26, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>{filteredVideos[safeActiveVideo].partner}</span>
                )}
              </div>

              {/* Play button centered */}
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
                <div className="spotlight-play" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, transition: "transform 0.3s ease" }}>
                  <div style={{ width: 88, height: 88, borderRadius: "50%", background: `radial-gradient(circle, rgba(107,163,214,0.2) 0%, rgba(107,163,214,0.05) 70%)`, border: `2px solid rgba(107,163,214,0.3)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Play style={{ color: "white", fill: "white" }} size={28} />
                  </div>
                </div>
              </div>

              {/* Bottom gradient overlay */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "45%", background: "linear-gradient(to top, rgba(8,14,26,0.95) 0%, rgba(8,14,26,0.7) 20%, transparent 50%)", zIndex: 3, pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 36px 32px", zIndex: 4, opacity: isVideoTransitioning ? 0 : 1, transition: "opacity 0.25s ease", textAlign: "center" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 30, fontWeight: 400, color: "#fff" }}>{filteredVideos[safeActiveVideo].title}</h3>
              </div>
            </div>

            {/* RIGHT — Sidebar */}
            <div style={{ flex: 0.85, background: "rgba(255,255,255,0.015)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ padding: "16px 16px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div
                  onClick={() => handleFilterChange("All")}
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", textAlign: "center", padding: "8px 0", borderRadius: 8, marginBottom: 8, cursor: "pointer", transition: "all 0.2s ease", background: videoFilter === "All" ? "rgba(255,255,255,0.08)" : "transparent", color: videoFilter === "All" ? "#fff" : "rgba(255,255,255,0.35)", border: `1px solid ${videoFilter === "All" ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.04)"}` }}
                >All Testimonials</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  <div
                    onClick={() => handleFilterChange("Technology")}
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 1.2, textTransform: "uppercase", textAlign: "center", padding: "7px 0", borderRadius: 8, cursor: "pointer", transition: "all 0.2s ease", background: videoFilter === "Technology" ? "rgba(92,195,209,0.12)" : "transparent", color: videoFilter === "Technology" ? "#5cc3d1" : "rgba(255,255,255,0.3)", border: `1px solid ${videoFilter === "Technology" ? "rgba(92,195,209,0.25)" : "rgba(255,255,255,0.04)"}` }}
                  >Technology</div>
                  <div
                    onClick={() => handleFilterChange("Healthcare")}
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 1.2, textTransform: "uppercase", textAlign: "center", padding: "7px 0", borderRadius: 8, cursor: "pointer", transition: "all 0.2s ease", background: videoFilter === "Healthcare" ? "rgba(154,200,236,0.12)" : "transparent", color: videoFilter === "Healthcare" ? "#9ac8ec" : "rgba(255,255,255,0.3)", border: `1px solid ${videoFilter === "Healthcare" ? "rgba(154,200,236,0.25)" : "rgba(255,255,255,0.04)"}` }}
                  >Healthcare</div>
                </div>
              </div>
              <div style={{ flex: 1, overflowY: "auto" }}>
                {filteredVideos.map((video, i) => (
                  <div
                    key={video.id}
                    className={`spotlight-sidebar-item ${i === safeActiveVideo ? 'active' : ''}`}
                    onClick={() => switchVideo(i)}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="sb-partner" style={{ fontFamily: SANS, fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.5)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{video.partner}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRANSITION STRIP ── */}
      <div style={{ height: 4, background: "linear-gradient(90deg, #5cc3d1, #c8985e)", opacity: 0.6 }} />

      {/* ── NEWS ── */}
      <section style={{ background: "#f4f3f0", padding: "56px 56px 80px" }}>
        <style>{`
          @keyframes news-fade-in { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
          .news-row { cursor:pointer; transition:background 0.3s ease, color 0.3s ease; }
          .news-row:hover { background:#0b1a2e; }
          .news-row:hover .nr-title, .news-row:hover .nr-date { color:#fff; }
          .news-row:hover .nr-arrow { border-color:rgba(255,255,255,0.3); color:#fff; }
          .news-row.nr-active { background:#0b1a2e; }
          .news-row.nr-active .nr-title, .news-row.nr-active .nr-date { color:#fff; }
          .news-row.nr-active .nr-arrow { border-color:rgba(255,255,255,0.3); color:#fff; transform:rotate(90deg); }
          .nr-expand { max-height:0; overflow:hidden; transition:max-height 0.4s ease, padding 0.4s ease; }
          .nr-expand.nr-open { max-height:300px; }
          .news-content-fade { transition:opacity 0.3s ease; }
        `}</style>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28 }}>
          <div>
            <h2 style={{ fontFamily: SERIF, fontSize: 36, fontWeight: 400, color: "#0c1a2e", lineHeight: 1.2 }}>News & Perspectives</h2>
          </div>
          <a href="#" onClick={e => e.preventDefault()} style={{ fontFamily: SANS, fontSize: 13, fontWeight: 500, padding: "12px 28px", borderRadius: 24, background: "#0c1a2e", color: "#fff", cursor: "pointer", textDecoration: "none", whiteSpace: "nowrap" }}>See All News &#8594;</a>
        </div>
        <div className="news-content-fade" style={{ borderRadius: 16, border: "1px solid rgba(12,26,46,0.08)", overflow: "hidden" }}>
          {([
            { tag: "WCAS News", tagColor: "#5cc3d1", date: "Feb 2026", title: "WCAS Portfolio Company Absorb Software Named to G2\u2019s 2026 Top 100 Global Software Companies", excerpt: "WCAS portfolio company Absorb Software has been named to G2\u2019s 2026 Best Software Awards list of the Top 100 Global Software Companies, ranking #89 worldwide out of over 116,000 total vendors.", logo: absorbLogoDark },
            { tag: "WCAS News", tagColor: "#5cc3d1", date: "Jan 2026", title: "Lumexa Imaging Announces Pricing of Initial Public Offering", excerpt: "Lumexa Imaging announced the pricing of its initial public offering of 25,000,000 shares of common stock at $18.50 per share, expected to trade on the Nasdaq Global Select Market under the symbol \u2018LMRI.\u2019", logo: logoLumexa },
            { tag: "WCAS News", tagColor: "#5cc3d1", date: "Sep 2025", title: "Welsh, Carson, Anderson & Stowe Welcomes Gene Lockhart as Operating Partner", excerpt: "Gene Lockhart, former CEO and President of Mastercard and former President of the Global Retail Bank at Bank of America, has joined WCAS as an operating partner.", logo: wcasLogo },
            { tag: "Partnership", tagColor: "#c8985e", date: "Aug 2025", title: "GovCIO, a Welsh, Carson, Anderson & Stowe Company, to Acquire SoldierPoint Digital Health, LLC", excerpt: "GovCIO announced it has agreed to acquire SoldierPoint Digital Health, expanding its mission supporting Veterans through the Department of Veterans Affairs.", logo: logoGovCIO },
          ]).map((n, i, arr) => (
            <div
              key={i}
              className={`news-row ${expandedNews === i ? 'nr-active' : ''}`}
              style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(12,26,46,0.08)" : "none", background: expandedNews === i ? "#0b1a2e" : "#fff", animation: `news-fade-in 0.5s ease ${i * 0.1}s both` }}
              onClick={() => setExpandedNews(expandedNews === i ? -1 : i)}
            >
              <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 40px", alignItems: "center", padding: "22px 28px", gap: 24 }}>
                <span className="nr-date" style={{ fontFamily: SANS, fontSize: 12, color: expandedNews === i ? "rgba(255,255,255,0.4)" : "#999", transition: "color 0.3s" }}>{n.date}</span>
                <h4 className="nr-title" style={{ fontFamily: SERIF, fontSize: 17, fontWeight: 500, color: expandedNews === i ? "#fff" : "#0c1a2e", lineHeight: 1.4, transition: "color 0.3s" }}>{n.title}</h4>
                <div className="nr-arrow" style={{ width: 32, height: 32, borderRadius: "50%", border: `1px solid ${expandedNews === i ? "rgba(255,255,255,0.3)" : "rgba(12,26,46,0.15)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: expandedNews === i ? "#fff" : "#0c1a2e", transition: "all 0.3s", transform: expandedNews === i ? "rotate(90deg)" : "none" }}>&#8594;</div>
              </div>
              <div className={`nr-expand ${expandedNews === i ? 'nr-open' : ''}`} style={{ padding: expandedNews === i ? "0 28px 28px" : "0 28px" }}>
                <div style={{ display: "flex", gap: 28 }}>
                  <div style={{ width: 280, flexShrink: 0, borderRadius: 12, background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", padding: 32, boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
                    <img src={n.logo} alt="" style={{ maxHeight: 64, maxWidth: 220, objectFit: "contain" }} />
                  </div>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <p style={{ fontFamily: SANS, fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 20 }}>{n.excerpt}</p>
                    <a href="#" onClick={e => e.preventDefault()} style={{ fontFamily: SANS, fontSize: 13, fontWeight: 500, color: "#5cc3d1", textDecoration: "none" }}>Read full article &#8594;</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Lightbox Modal */}
      {playingVideo && (
        <div style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.95)", backdropFilter: "blur(4px)", padding: 32 }} onClick={() => setPlayingVideo(null)}>
          <button
            style={{ position: "absolute", top: 24, right: 24, color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.1)", borderRadius: "50%", border: "none", padding: 8, cursor: "pointer", zIndex: 51 }}
            onClick={(e) => { e.stopPropagation(); setPlayingVideo(null); }}
          >
            <X size={24} />
          </button>
          <div
            style={{ width: "100%", maxWidth: 1100, aspectRatio: "16/9", background: "black", borderRadius: 8, overflow: "hidden", position: "relative", border: "1px solid rgba(255,255,255,0.1)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://player.vimeo.com/video/${playingVideo}?h=dbf9bc9a77&title=0&byline=0&portrait=0&autoplay=1`}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}