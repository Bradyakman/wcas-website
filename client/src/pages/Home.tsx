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
            <a href="/healthcare" style={{ fontFamily: SANS, fontSize: 13, fontWeight: 500, padding: "12px 28px", borderRadius: 24, border: `1.5px solid ${ACCENT}`, background: "none", color: ACCENT, cursor: "pointer", textDecoration: "none" }}>Explore Our Portfolio</a>
            <a href="/#firm" style={{ fontFamily: SANS, fontSize: 13, fontWeight: 500, padding: "12px 28px", borderRadius: 24, border: `1.5px solid ${ACCENT}`, background: "none", color: ACCENT, cursor: "pointer", textDecoration: "none" }}>Our Approach</a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: "40px 56px 48px", display: "flex", gap: 48 }}>
        {[
          { num: "$33B+", label: "Capital Raised" },
          { num: "190+", label: "Companies" },
          { num: "18", label: "Funds Raised" },
          { num: "45+", label: "Years Investing" },
        ].map((s, i) => (
          <div key={i} style={{ flex: 1, padding: "28px 0", borderTop: `2px solid ${ACCENT}` }}>
            <div style={{ fontSize: 36, fontWeight: 700, marginBottom: 4 }}>{s.num}</div>
            <div style={{ fontFamily: SANS, fontSize: 15, color: "rgba(255,255,255,0.55)", fontWeight: 400 }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* ── WHERE WE INVEST ── */}
      <section style={{ padding: "0", background: "#0C1A2E" }}>
        <style>{`
          .wwi-section * { box-sizing: border-box; margin: 0; padding: 0; }
          .wwi-section { position: relative; font-family: 'Libre Baskerville', Georgia, serif; }
          .wwi-header { padding: 80px 56px 40px; display: flex; justify-content: space-between; align-items: flex-end; }
          .wwi-header h2 { font-size: 42px; font-weight: 400; color: #E4E8ED; line-height: 1.15; }
          .wwi-header h2 em { font-style: italic; color: #6BA3D6; }
          .wwi-panels { display: flex; min-height: 520px; }
          .wwi-panel { flex: 1; position: relative; padding: 56px; cursor: pointer; overflow: hidden; transition: flex 0.7s cubic-bezier(0.23, 1, 0.32, 1), background 0.5s; }
          .wwi-panel:first-child { border-right: 1px solid rgba(255,255,255,0.06); }
          .wwi-panel:hover { flex: 1.4; }
          .wwi-panel-bg { position: absolute; inset: 0; opacity: 0; transition: opacity 0.7s; }
          .wwi-panel:hover .wwi-panel-bg { opacity: 1; }
          .wwi-panel-hc .wwi-panel-bg { background: linear-gradient(135deg, rgba(27,79,138,0.2) 0%, rgba(12,26,46,0.95) 100%); }
          .wwi-panel-tech .wwi-panel-bg { background: linear-gradient(135deg, rgba(107,163,214,0.15) 0%, rgba(12,26,46,0.95) 100%); }
          .wwi-panel-number { font-family: 'Outfit', sans-serif; font-size: 120px; font-weight: 700; position: absolute; top: -20px; right: 30px; line-height: 1; background: linear-gradient(180deg, rgba(107,163,214,0.08) 0%, transparent 80%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; pointer-events: none; transition: opacity 0.5s; }
          .wwi-panel:hover .wwi-panel-number { opacity: 0.5; }
          .wwi-pill { display: inline-block; font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 600; padding: 7px 20px; border-radius: 20px; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 28px; position: relative; z-index: 1; }
          .wwi-panel-hc .wwi-pill { background: linear-gradient(135deg, #1B4F8A, #2A6BAE); color: white; }
          .wwi-panel-tech .wwi-pill { background: linear-gradient(135deg, #6BA3D6, #8BBDE8); color: #0C1A2E; }
          .wwi-panel h3 { font-size: 36px; font-weight: 400; line-height: 1.15; color: #E4E8ED; margin-bottom: 20px; position: relative; z-index: 1; transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1); }
          .wwi-panel:hover h3 { transform: translateX(8px); }
          .wwi-panel-desc { font-family: 'Outfit', sans-serif; font-size: 15px; color: rgba(255,255,255,0.45); line-height: 1.75; font-weight: 300; max-width: 420px; position: relative; z-index: 1; transition: color 0.5s; }
          .wwi-panel:hover .wwi-panel-desc { color: rgba(255,255,255,0.65); }
          .wwi-subsectors { position: relative; z-index: 1; margin-top: 36px; padding-top: 28px; border-top: 1px solid rgba(255,255,255,0.06); }
          .wwi-subsector-label { font-family: 'Outfit', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; color: rgba(255,255,255,0.25); margin-bottom: 18px; }
          .wwi-subsector-item { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; opacity: 0.5; transform: translateX(0); transition: opacity 0.4s, transform 0.4s; }
          .wwi-panel:hover .wwi-subsector-item { opacity: 1; transform: translateX(8px); }
          .wwi-panel:hover .wwi-subsector-item:nth-child(2) { transition-delay: 0.04s; }
          .wwi-panel:hover .wwi-subsector-item:nth-child(3) { transition-delay: 0.08s; }
          .wwi-panel:hover .wwi-subsector-item:nth-child(4) { transition-delay: 0.12s; }
          .wwi-panel:hover .wwi-subsector-item:nth-child(5) { transition-delay: 0.16s; }
          .wwi-panel:hover .wwi-subsector-item:nth-child(6) { transition-delay: 0.20s; }
          .wwi-bar { width: 20px; height: 3px; border-radius: 2px; background: linear-gradient(90deg, #6BA3D6, transparent); transition: width 0.4s cubic-bezier(0.23, 1, 0.32, 1); }
          .wwi-panel:hover .wwi-bar { width: 32px; }
          .wwi-subsector-text { font-family: 'Outfit', sans-serif; font-size: 14px; color: rgba(255,255,255,0.6); font-weight: 400; transition: color 0.3s; }
          .wwi-panel:hover .wwi-subsector-text { color: rgba(255,255,255,0.85); }
          .wwi-cta { position: relative; z-index: 1; display: inline-flex; align-items: center; gap: 10px; font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 500; color: #6BA3D6; text-decoration: none; margin-top: 28px; padding: 10px 24px 10px 0; border-bottom: 1px solid rgba(107,163,214,0.2); transition: all 0.4s; }
          .wwi-cta:hover { border-color: #6BA3D6; gap: 16px; }
          .wwi-cta-arrow { display: inline-block; transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1); font-size: 18px; }
          .wwi-cta:hover .wwi-cta-arrow { transform: translateX(6px); }
          .wwi-divider-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 1px; height: 60%; background: linear-gradient(180deg, transparent, rgba(107,163,214,0.2), transparent); pointer-events: none; z-index: 2; }
        `}</style>
        <div className="wwi-section">
          <div className="wwi-header">
            <h2>Where we <em>invest</em></h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.3)", fontWeight: 300, maxWidth: 300, textAlign: "right", lineHeight: 1.6 }}>Two sectors. Four decades of conviction. One partnership-driven approach.</p>
          </div>
          <div className="wwi-panels">
            <div className="wwi-divider-glow" />
            <div className="wwi-panel wwi-panel-hc">
              <div className="wwi-panel-bg" />
              <div className="wwi-panel-number">01</div>
              <div className="wwi-pill">Healthcare</div>
              <h3>Investing in Better Healthcare</h3>
              <p className="wwi-panel-desc">We invest across healthcare services, payor solutions, and the pharma value chain, partnering with management teams to drive operational improvement and accelerate growth.</p>
              <div className="wwi-subsectors">
                <div className="wwi-subsector-label">Subsectors</div>
                {["Care Delivery", "Payor Solutions", "Pharma Value Chain", "Healthcare Technology (HCIT)"].map((s, i) => (<div key={i} className="wwi-subsector-item"><div className="wwi-bar" /><span className="wwi-subsector-text">{s}</span></div>))}
              </div>
              <a href="/healthcare" className="wwi-cta"><span>View healthcare investments</span><span className="wwi-cta-arrow">&rarr;</span></a>
            </div>
            <div className="wwi-panel wwi-panel-tech">
              <div className="wwi-panel-bg" />
              <div className="wwi-panel-number">02</div>
              <div className="wwi-pill">Technology</div>
              <h3>Powering Essential Industries</h3>
              <p className="wwi-panel-desc">We invest in software and data platforms powering essential industries. Our technology team identifies mission-critical platforms where deep sector expertise can accelerate growth.</p>
              <div className="wwi-subsectors">
                <div className="wwi-subsector-label">Subsectors</div>
                {["FinTech (banking, markets, payments)", "GovTech (state, local, federal)", "Built Environment", "IndustrialTech (software, GRC)", "Proprietary Data & Analytics", "Healthcare Technology (HCIT), with the WCAS Healthcare Team"].map((s, i) => (<div key={i} className="wwi-subsector-item"><div className="wwi-bar" /><span className="wwi-subsector-text">{s}</span></div>))}
              </div>
              <a href="/technology" className="wwi-cta"><span>View technology investments</span><span className="wwi-cta-arrow">&rarr;</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO SLIDER SECTION ── */}
      <section style={{ position: "relative", overflow: "hidden", background: BG }}>
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

      {/* ── QUOTE ── */}
      <section style={{ margin: "80px 56px", padding: "72px 56px", borderRadius: 8, background: ACCENT, color: "white" }}>
        <blockquote style={{ fontSize: 24, fontWeight: 400, lineHeight: 1.55, fontStyle: "italic", maxWidth: 700, marginBottom: 24, opacity: 0.95 }}>
          "WCAS pioneered the corporate partnership model in healthcare private equity — creating alignment between the operational capabilities of health systems and the resources of private equity."
        </blockquote>
        <div style={{ width: 40, height: 2, background: "rgba(255,255,255,0.4)", marginBottom: 12 }} />
        <p style={{ fontFamily: SANS, fontSize: 13, opacity: 0.7 }}>WCAS Corporate Partnership Strategy</p>
      </section>

      {/* ── NEWS ── */}
      <section style={{ padding: "80px 56px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32 }}>
          <div>
            <p style={{ fontFamily: SANS, fontSize: 13, fontWeight: 500, letterSpacing: 1.5, textTransform: "uppercase", color: ACCENT, marginBottom: 12 }}>Insights</p>
            <h2 style={{ fontSize: 34, fontWeight: 400 }}>Latest perspectives</h2>
          </div>
          <a href="/news" style={{ fontFamily: SANS, fontSize: 13, fontWeight: 500, padding: "12px 28px", borderRadius: 24, border: `1.5px solid ${ACCENT}`, background: "none", color: ACCENT, cursor: "pointer", textDecoration: "none" }}>See All →</a>
        </div>
        {[
          { date: "Jul 2025", tag: "News", title: "TrueCommerce Names Bill Glass as CEO, Marking New Phase of Growth" },
          { date: "Jul 2025", tag: "News", title: "EquiLend Acquires Trading Apps to Advance Front-Office Automation" },
          { date: "Jul 2025", tag: "News", title: "WCAS Announces Strategic Growth Investment in AIA Contract Documents" },
          { date: "Jun 2025", tag: "News", title: "Concentra Expands National Footprint with Acquisition of 12 New Centers" },
        ].map((n, i) => (
          <a key={i} href="/news" style={{ padding: "24px 0", borderBottom: `1px solid rgba(255,255,255,0.06)`, display: "flex", gap: 24, alignItems: "baseline", cursor: "pointer", textDecoration: "none", color: TEXT }} className="news-row-blue">
            <span style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.35)", minWidth: 70 }}>{n.date}</span>
            <span style={{ fontFamily: SANS, fontSize: 11, fontWeight: 500, color: ACCENT, textTransform: "uppercase", letterSpacing: 1, minWidth: 120 }}>{n.tag}</span>
            <h4 style={{ fontSize: 16, fontWeight: 400 }}>{n.title}</h4>
          </a>
        ))}
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