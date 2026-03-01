import { ArrowRight, Play, X } from "lucide-react";
import heroBg from "@assets/image_1772300178571.png";
import wcasLogo from "@assets/WCAS-logo-sheaco.png";
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
import logoAsurion from "@assets/Asurion_1771799704133.png";
import logoInnovAge from "@assets/InnovAge_1771799704134.png";
import logoQuickbase from "@assets/Quickbase_1771799704134.png";
import logoGovCIO from "@assets/GovCIO_1771799704134.png";
import logoKindred from "@assets/KindredAtHome_transparent.png";
import logoLINQ from "@assets/LINQ_1771799704131.png";
import logoSelectMed from "@assets/Select_Medical_transparent.png";
import logoShields from "@assets/Shields_logo_transparent_LRG-3-1024x272_1771799704132.png";
import logoNorstella from "@assets/Norstella_color_positive_RGB_-_USE_THIS-1-1024x354_1771799704136.png";
import logoAllianceData from "@assets/AllianceData_1771799704135.png";
import logoClearwater from "@assets/Clearwater-Analytics_1771799704135.png";
import logoNaviHealth from "@assets/navihealth_transparent.png";
import logoSimeio from "@assets/simeio_transparent.png";

import { useState, useRef } from "react";

const ACCENT = "#6BA3D6";
const BG = "#0C1A2E";
const BORDER = "rgba(255,255,255,0.08)";
const MUTED = "rgba(255,255,255,0.5)";
const VERY_MUTED = "rgba(255,255,255,0.4)";
const TEXT = "#E4E8ED";
const SERIF = "'Libre Baskerville', Georgia, serif";
const SANS = "'Outfit', sans-serif";

const wcasVideos = [
  { id: "861242809", title: "Paths to Growth", partner: "quickbase", partnerLogo: quickbaseLogo, centeredLayout: true, logoClass: "h-8 md:h-10" },
  { id: "913387748", title: "Investing in Better Healthcare", partner: "SHIELDS HEALTH SOLUTIONS", partnerLogo: shieldsFullLogo, centeredLayout: true, logoClass: "h-10 md:h-12" },
  { id: "861242949", title: "Paths to Growth", partner: "absorb", partnerLogo: absorbLogo, centeredLayout: true, logoClass: "h-10 md:h-12" },
  { id: "913387297", title: "Investing in Better Healthcare", partner: "norstella", partnerLogo: norstellaLogo, centeredLayout: true, logoClass: "h-12 md:h-14" },
  { id: "861243091", title: "Paths to Growth", partner: "intoxalock", partnerLogo: intoxalockLogo, centeredLayout: true, logoClass: "h-8 md:h-10" },
  { id: "913334845", title: "Investing in Better Healthcare", partner: "Concentra", specialLayout: true },
  { id: "861243221", title: "Paths to Growth", partner: "Green Street", partnerLogo: greenStreetLogo, centeredLayout: true, logoClass: "h-12 md:h-14" },
  { id: "913388269", title: "Investing in Better Healthcare", partner: "Leiters Health", partnerLogo: leitersLogo, centeredLayout: true, logoClass: "h-8 md:h-10" }
];

export default function Home() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const hasDragged = useRef(false);

  const makeDragHandlers = (draggedRef: React.MutableRefObject<boolean>) => {
    const THRESHOLD = 6;
    let isPointerDown = false;
    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;
    let pointerId = -1;
    let containerEl: HTMLDivElement | null = null;
    return {
      onPointerDown: (e: React.PointerEvent<HTMLDivElement>) => {
        
        isPointerDown = true;
        isDragging = false;
        draggedRef.current = false;
        startX = e.clientX;
        startScrollLeft = e.currentTarget.scrollLeft;
        pointerId = e.pointerId;
        containerEl = e.currentTarget;
      },
      onPointerMove: (e: React.PointerEvent<HTMLDivElement>) => {
        if (!isPointerDown) return;
        const dx = e.clientX - startX;
        if (!isDragging && Math.abs(dx) >= THRESHOLD) {
          isDragging = true;
          draggedRef.current = true;
          if (containerEl) {
            containerEl.setPointerCapture(pointerId);
            containerEl.style.cursor = 'grabbing';
            containerEl.style.userSelect = 'none';
            containerEl.style.scrollSnapType = 'none';
          }
        }
        if (isDragging) {
          e.preventDefault();
          e.currentTarget.scrollLeft = startScrollLeft - dx;
        }
      },
      onPointerUp: (e: React.PointerEvent<HTMLDivElement>) => {
        if (!isPointerDown) return;
        isPointerDown = false;
        const el = e.currentTarget;
        if (isDragging) {
          try { el.releasePointerCapture(pointerId); } catch (_) {}
        }
        el.style.cursor = 'grab';
        el.style.scrollSnapType = 'x mandatory';
        el.style.userSelect = '';
        containerEl = null;
        setTimeout(() => { isDragging = false; draggedRef.current = false; }, 0);
      },
    };
  };

  const [videoDrag] = useState(() => makeDragHandlers(hasDragged));

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('div') as HTMLElement;
      const scrollAmount = card ? card.offsetWidth + 16 : sliderRef.current.offsetWidth * 0.35;
      sliderRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{ fontFamily: SERIF, background: BG, color: TEXT, minHeight: "100vh" }}>

      {/* ── HERO WITH IMAGE ── */}
      <section className="hero-section" style={{ position: "relative", overflow: "hidden", backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center right", backgroundRepeat: "no-repeat" }}>
        <div className="hero-content-scrim" style={{ position: "relative", zIndex: 2, padding: "280px 56px 128px", maxWidth: 1100 }}>
          <h1 style={{ fontSize: 36, fontWeight: 400, lineHeight: 1.35, marginBottom: 28, color: "#FFFFFF", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>
            For over 45 years, WCAS has partnered with industry leaders across technology &{" "}
            healthcare to <em style={{ fontStyle: "italic", color: "#8BBDE8" }}>reshape landscapes and drive growth.</em>
          </h1>
          <p style={{ fontFamily: SANS, fontSize: 19, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontWeight: 300, maxWidth: 900, textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}>
            As one of private equity's first sector specialists, we combine deep sector knowledge with hands-on operational support to build long-term value.
          </p>
          <div style={{ marginTop: 36, display: "flex", gap: 16 }}>
            <a href="/healthcare" className="pill-btn" style={{ fontFamily: SANS, fontSize: 13, fontWeight: 500, padding: "10px 28px", borderRadius: 20, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.7)", cursor: "pointer", textDecoration: "none" }}>Explore Our Portfolio</a>
            <a href="/#firm" className="pill-btn" style={{ fontFamily: SANS, fontSize: 13, fontWeight: 500, padding: "10px 28px", borderRadius: 20, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.7)", cursor: "pointer", textDecoration: "none" }}>Our Approach</a>
          </div>
        </div>
        <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "space-between", padding: "0 56px 64px" }}>
          {[
            { num: "$33B+", label: "Capital Raised" },
            { num: "190+", label: "Companies" },
            { num: "18", label: "Funds Raised" },
            { num: "45+", label: "Years Investing" },
          ].map((s, i) => (
            <div key={i} style={{ flex: 1, padding: "20px 0 0" }}>
              <div style={{ width: "calc(100% - 24px)", height: 2, background: ACCENT, marginBottom: 20 }} />
              <div style={{ fontSize: 32, fontWeight: 700, marginBottom: 4, color: "#FFFFFF", textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>{s.num}</div>
              <div style={{ fontFamily: SANS, fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHERE WE INVEST — SPLIT SCREEN ── */}
      <section style={{ padding: 0, background: "#152238" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "48px 48px 0" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#4db8c7" }}>Our Focus Sectors</span>
          <div style={{ width: 40, height: 1, background: "linear-gradient(to right, #4db8c7, transparent)" }} />
        </div>
        <style>{`
          @keyframes wwi-shimmer { 0%,100%{ opacity:1 } 50%{ opacity:0.6 } }
          .wwi-split { display:flex; height:520px; position:relative; background:#152238; }
          .wwi-split .wwi-divider { position:absolute; left:50%; top:0; bottom:0; width:1px; background:linear-gradient(180deg,transparent,rgba(255,255,255,0.1),transparent); z-index:3; pointer-events:none; transition:background 0.4s ease; }
          .wwi-split:has(.wwi-tech:hover) .wwi-divider { background:linear-gradient(180deg,transparent,rgba(200,152,94,0.25),transparent); }
          .wwi-split:has(.wwi-hc:hover) .wwi-divider { background:linear-gradient(180deg,transparent,rgba(77,184,199,0.25),transparent); }
          .wwi-pnl { flex:1; position:relative; cursor:pointer; overflow:hidden; display:flex; flex-direction:column; justify-content:flex-end; transition:flex 0.4s ease, filter 0.4s ease; }
          .wwi-pnl:hover { flex:1.4; }
          .wwi-split:has(.wwi-tech:hover) .wwi-hc { flex:0.6; filter:brightness(0.7); }
          .wwi-split:has(.wwi-hc:hover) .wwi-tech { flex:0.6; filter:brightness(0.7); }
          .wwi-split:has(.wwi-tech:hover) .wwi-hc .wwi-content { opacity:0; transition:opacity 0.15s ease; pointer-events:none; }
          .wwi-split:has(.wwi-hc:hover) .wwi-tech .wwi-content { opacity:0; transition:opacity 0.15s ease; pointer-events:none; }
          .wwi-split:has(.wwi-tech:hover) .wwi-divider, .wwi-split:has(.wwi-hc:hover) .wwi-divider { opacity:0; transition:opacity 0.3s ease; }
          .wwi-pnl-bg { position:absolute; inset:0; transition:transform 0.4s ease, opacity 0.4s ease; opacity:0; }
          .wwi-pnl:hover .wwi-pnl-bg { transform:scale(1.06); opacity:0.5; }
          .wwi-tech .wwi-pnl-bg { background:radial-gradient(ellipse at 30% 70%, rgba(200,152,94,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(200,152,94,0.08) 0%, transparent 50%); }
          .wwi-hc .wwi-pnl-bg { background:radial-gradient(ellipse at 70% 70%, rgba(77,184,199,0.15) 0%, transparent 60%), radial-gradient(ellipse at 20% 20%, rgba(77,184,199,0.08) 0%, transparent 50%); }
          .wwi-watermark { position:absolute; top:40px; left:48px; font-family:'Cormorant Garamond',serif; font-size:88px; font-weight:300; color:rgba(255,255,255,0.55); line-height:1; pointer-events:none; transition:color 0.4s, transform 0.4s; z-index:1; }
          .wwi-pnl:hover .wwi-watermark { color:rgba(255,255,255,0.7); transform:translateY(-6px); }
          .wwi-bottom-glow { position:absolute; bottom:0; left:0; right:0; height:120px; opacity:0; transition:opacity 0.4s ease; pointer-events:none; }
          .wwi-pnl:hover .wwi-bottom-glow { opacity:1; }
          .wwi-tech .wwi-bottom-glow { background:linear-gradient(to top, rgba(200,152,94,0.06), transparent); }
          .wwi-hc .wwi-bottom-glow { background:linear-gradient(to top, rgba(77,184,199,0.06), transparent); }
          .wwi-content { position:relative; z-index:2; padding:0 48px 48px; transition:opacity 0.3s ease; }
          .wwi-tag { display:inline-flex; align-items:center; gap:8px; font-family:'DM Sans',sans-serif; font-size:10px; font-weight:600; letter-spacing:1.5px; text-transform:uppercase; color:rgba(255,255,255,0.5); padding:6px 16px; border-radius:18px; background:rgba(255,255,255,0.04); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); border:1px solid rgba(255,255,255,0.06); margin-bottom:20px; }
          .wwi-tag-dot { width:6px; height:6px; border-radius:50%; }
          .wwi-pnl h3 { font-family:'Cormorant Garamond',serif; font-size:34px; font-weight:400; color:#fff; line-height:1.2; margin-bottom:0; position:relative; z-index:2; }
          .wwi-desc { font-family:'DM Sans',sans-serif; font-size:14px; color:rgba(255,255,255,0.4); line-height:1.65; margin-top:16px; }
          .wwi-pills { display:flex; flex-wrap:wrap; gap:8px; margin-top:20px; }
          .wwi-pill2 { font-family:'DM Sans',sans-serif; font-size:12px; color:rgba(255,255,255,0.5); padding:6px 14px; border-radius:16px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.08); transition:transform 0.2s ease, border-color 0.2s ease; }
          .wwi-pill2:hover { transform:translateY(-2px); border-color:rgba(255,255,255,0.3); }
          .wwi-cta2 { display:inline-flex; align-items:center; gap:8px; font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500; text-decoration:none; margin-top:24px; opacity:0; transform:translateY(6px); transition:opacity 0.3s ease 0.35s, transform 0.3s ease 0.35s; }
          .wwi-pnl:hover .wwi-cta2 { opacity:1; transform:translateY(0); }
          .wwi-tech .wwi-cta2 { color:#4db8c7; }
          .wwi-hc .wwi-cta2 { color:#4db8c7; }
        `}</style>
        <div className="wwi-split">
          <div className="wwi-divider" />
          <div className="wwi-pnl wwi-tech">
            <div className="wwi-pnl-bg" />
            <div className="wwi-watermark">Technology</div>
            <div className="wwi-bottom-glow" />
            <div className="wwi-content">
              <h3>Powering Essential<br />Industries</h3>
              <p className="wwi-desc">Software and data platforms driving transformation across financial services, government, and industrial sectors.</p>
              <div className="wwi-pills">
                {["FinTech", "GovTech", "Built Environment", "IndustrialTech", "Data & Analytics"].map((s, i) => <span key={i} className="wwi-pill2">{s}</span>)}
              </div>
              <a href="/technology" className="wwi-cta2">Explore Technology &rarr;</a>
            </div>
          </div>
          <div className="wwi-pnl wwi-hc">
            <div className="wwi-pnl-bg" />
            <div className="wwi-watermark">Healthcare</div>
            <div className="wwi-bottom-glow" />
            <div className="wwi-content">
              <h3>Investing in Better<br />Healthcare</h3>
              <p className="wwi-desc">Partnering with management teams across care delivery, payor solutions, and the pharma value chain.</p>
              <div className="wwi-pills">
                {["Care Delivery", "Payor Solutions", "Pharma Value Chain", "Healthcare IT"].map((s, i) => <span key={i} className="wwi-pill2">{s}</span>)}
              </div>
              <a href="/healthcare" className="wwi-cta2">Explore Healthcare &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section style={{ background: "#0c1a2e", padding: "100px 56px 80px" }}>
        <style>{`
          .port-marquee-wrap { position:relative; overflow:hidden; }
          .port-marquee-wrap::before, .port-marquee-wrap::after { content:""; position:absolute; top:0; bottom:0; width:80px; z-index:2; pointer-events:none; }
          .port-marquee-wrap::before { left:0; background:linear-gradient(to right, #0c1a2e, transparent); }
          .port-marquee-wrap::after { right:0; background:linear-gradient(to left, #0c1a2e, transparent); }
          .port-marquee-track { display:flex; gap:16px; animation:port-scroll 30s linear infinite; width:max-content; }
          .port-marquee-track:hover { animation-play-state:paused; }
          @keyframes port-scroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          .port-logo-card { width:180px; height:80px; border-radius:10px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.06); display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:transform 0.3s, border-color 0.3s, box-shadow 0.3s; }
          .port-logo-card:hover { transform:translateY(-3px); border-color:rgba(77,184,199,0.3); box-shadow:0 4px 20px rgba(77,184,199,0.08); }
          .port-logo-card span { font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500; color:rgba(255,255,255,0.7); letter-spacing:0.5px; }
          @media (prefers-reduced-motion: reduce) { .port-marquee-track { animation:none !important; flex-wrap:wrap; justify-content:center; } }
        `}</style>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 48 }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#4db8c7" }}>Our Portfolio</span>
              <div style={{ width: 40, height: 1, background: "linear-gradient(to right, #4db8c7, transparent)" }} />
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 42, fontWeight: 400, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>Building market leaders across healthcare and technology</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>We bring decades of sector expertise and operational resources to every partnership, working alongside management teams to create lasting value.</p>
          </div>
          <a href="/healthcare" className="pill-btn" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, padding: "10px 28px", borderRadius: 20, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.7)", cursor: "pointer", textDecoration: "none", whiteSpace: "nowrap", marginTop: 40 }}>View all companies &rarr;</a>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 40 }}>
          <div className="port-marquee-wrap">
            <div className="port-marquee-track">
              {[...Array(2)].map((_, setIdx) =>
                [
                  { name: "Avetta", src: logoAvetta },
                  { name: "Asurion", src: logoAsurion },
                  { name: "InnovAge", src: logoInnovAge },
                  { name: "Quickbase", src: logoQuickbase },
                  { name: "GovCIO", src: logoGovCIO },
                  { name: "Kindred at Home", src: logoKindred },
                  { name: "LINQ", src: logoLINQ },
                  { name: "Select Medical", src: logoSelectMed },
                  { name: "Shields", src: logoShields },
                  { name: "Norstella", src: logoNorstella },
                  { name: "Alliance Data", src: logoAllianceData },
                  { name: "Clearwater Analytics", src: logoClearwater },
                  { name: "NaviHealth", src: logoNaviHealth },
                  { name: "Simeio", src: logoSimeio },
                ].map((co, i) => (
                  <div key={`${setIdx}-${i}`} className="port-logo-card">
                    <img src={co.src} alt={co.name} style={{ maxHeight: 36, maxWidth: 140, objectFit: "contain", filter: "brightness(0) invert(1)" }} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO SLIDER SECTION ── */}
      <section style={{ position: "relative", overflow: "hidden", background: BG, marginTop: 0 }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${missionBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div style={{ position: "absolute", inset: 0, backgroundColor: BG, opacity: 0.92 }}></div>
        </div>
        <div style={{ position: "relative", zIndex: 10, padding: "80px 56px 100px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start", marginBottom: 48 }}>
            <div>
              <p style={{ fontFamily: SANS, fontSize: 13, fontWeight: 500, letterSpacing: 1.5, textTransform: "uppercase", color: ACCENT, marginBottom: 12 }}>Our Mission</p>
              <h2 style={{ fontSize: 34, fontWeight: 400, lineHeight: 1.2 }}>Be Your Partner of Choice</h2>
            </div>
            <p style={{ fontFamily: SANS, fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, fontWeight: 300, paddingTop: 8 }}>
              WCAS's mission is to lead in healthcare and technology investments through thought leadership, culture, and results. We create deep partnerships and are frequently selected as the preferred partner.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button
              onClick={() => scrollSlider('left')}
              style={{ flexShrink: 0, width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: `1px solid rgba(255,255,255,0.2)`, color: "white", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
            >
              <ArrowRight size={20} style={{ transform: "rotate(180deg)" }} />
            </button>
            <div
              ref={sliderRef}
              className="scrollbar-hide"
              style={{ display: "flex", gap: 16, overflowX: "auto", flex: 1, cursor: "grab", scrollSnapType: "x mandatory" }}
              onPointerDown={videoDrag.onPointerDown}
              onPointerMove={videoDrag.onPointerMove}
              onPointerUp={videoDrag.onPointerUp}
              onPointerCancel={videoDrag.onPointerUp}
            >
              {wcasVideos.map((video, index) => (
                <div key={index} className="video-card-blue" style={{ minWidth: "30%", scrollSnapAlign: "center", flexShrink: 0, borderRadius: 12, overflow: "hidden", aspectRatio: "16/9", background: "#0f172a", position: "relative", border: `1px solid rgba(255,255,255,0.16)`, cursor: "pointer" }}>
                  <div
                    style={{ position: "absolute", inset: 0, padding: "24px 32px", display: "flex", flexDirection: "column", justifyContent: "center", zIndex: 2 }}
                    onClick={() => { if (!hasDragged.current) setPlayingVideo(video.id); }}
                  >
                    {'specialLayout' in video && video.specialLayout ? (
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "100%", padding: "16px 0" }}>
                        <h3 style={{ fontSize: 20, fontWeight: 700, textAlign: "center", color: "white" }}>{video.title}</h3>
                        <div style={{ flex: 1 }}></div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                            <img src={wcasLogo} alt="WCAS" style={{ height: 16, filter: "brightness(0) invert(1)" }} />
                            <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.2)" }}></div>
                            <img src={logoSelect} alt="Select Medical" style={{ height: 32 }} />
                          </div>
                          <h4 style={{ fontSize: 16, fontWeight: 700, color: "white" }}>{video.partner}</h4>
                        </div>
                      </div>
                    ) : 'centeredLayout' in video && video.centeredLayout ? (
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "100%", padding: "16px 0" }}>
                        <h3 style={{ fontSize: 20, fontWeight: 700, textAlign: "center", color: "white" }}>{video.title}</h3>
                        <div style={{ flex: 1 }}></div>
                        {'partnerLogo' in video && video.partnerLogo && (
                          <img src={video.partnerLogo} alt={video.partner} style={{ height: 32 }} />
                        )}
                      </div>
                    ) : null}
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, zIndex: 10 }}>
                      <div style={{ background: "rgba(255,255,255,0.2)", width: 64, height: 44, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.25)" }}>
                        <Play style={{ color: "white", fill: "white" }} size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => scrollSlider('right')}
              style={{ flexShrink: 0, width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: `1px solid rgba(255,255,255,0.2)`, color: "white", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ── TRANSITION STRIP ── */}
      <div style={{ height: 4, background: "linear-gradient(90deg, #4db8c7, #c8985e)", opacity: 0.6 }} />

      {/* ── NEWS ── */}
      <section style={{ background: "#f4f3f0", padding: "100px 56px" }}>
        <style>{`
          .news-card { border-radius:10px; overflow:hidden; transition:transform 0.3s, box-shadow 0.3s; cursor:pointer; text-decoration:none; }
          .news-card:hover { transform:translateY(-4px); box-shadow:0 12px 40px rgba(0,0,0,0.12); }
          .news-arrow-btn { width:32px; height:32px; border-radius:50%; border:1px solid rgba(12,26,46,0.15); background:none; display:flex; align-items:center; justify-content:center; font-size:14px; color:#0c1a2e; transition:all 0.3s; cursor:pointer; }
          .news-card:hover .news-arrow-btn { color:#4db8c7; border-color:#4db8c7; transform:translate(2px,-2px); }
        `}</style>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
          <div>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#888" }}>Latest News</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 400, color: "#0c1a2e", lineHeight: 1.2, marginTop: 12 }}>WCAS and our partners in the news</h2>
          </div>
          <a href="/news" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, padding: "12px 28px", borderRadius: 24, background: "#0c1a2e", color: "#fff", cursor: "pointer", textDecoration: "none", whiteSpace: "nowrap" }}>See all news &rarr;</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <a href="/news" className="news-card" style={{ display: "flex", flexDirection: "column", background: "linear-gradient(180deg, #0c1a2e 0%, #152238 100%)", minHeight: 480, position: "relative" }}>
            <div style={{ flex: 1 }} />
            <div style={{ background: "linear-gradient(to top, rgba(12,26,46,0.95), transparent)", padding: "48px 32px 32px", position: "relative", zIndex: 1 }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: "#4db8c7", padding: "4px 12px", borderRadius: 12, background: "rgba(77,184,199,0.1)", border: "1px solid rgba(77,184,199,0.2)" }}>WCAS News</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", marginLeft: 12 }}>Jul 2025</span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 400, color: "#fff", lineHeight: 1.3, marginTop: 16, marginBottom: 20 }}>WCAS Announces Strategic Growth Investment in AIA Contract Documents</h3>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Read more</span>
                <button className="news-arrow-btn" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)" }}>&nearr;</button>
              </div>
            </div>
          </a>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { tag: "Partnership", tagColor: "#c8985e", date: "Jul 2025", title: "TrueCommerce Names Bill Glass as CEO, Marking New Phase of Growth" },
              { tag: "WCAS News", tagColor: "#4db8c7", date: "Jul 2025", title: "EquiLend Acquires Trading Apps to Advance Front-Office Automation" },
              { tag: "Partnership", tagColor: "#c8985e", date: "Jun 2025", title: "Concentra Expands National Footprint with Acquisition of 12 New Centers" },
            ].map((n, i) => (
              <a key={i} href="/news" className="news-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#fff", padding: "28px 28px 24px", flex: 1 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: n.tagColor, padding: "4px 12px", borderRadius: 12, background: `${n.tagColor}15`, border: `1px solid ${n.tagColor}30` }}>{n.tag}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#999" }}>{n.date}</span>
                  </div>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 500, color: "#0c1a2e", lineHeight: 1.4 }}>{n.title}</h4>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 16 }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#888" }}>Read more</span>
                  <button className="news-arrow-btn">&nearr;</button>
                </div>
              </a>
            ))}
          </div>
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