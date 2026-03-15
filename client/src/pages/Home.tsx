import React from "react";
import { X } from "lucide-react";
import wcasLogo from "@assets/WCAS-logo-sheaco.png";
import logoLumexa from "@assets/image_1772400832099.png";
import absorbLogoDark from "@assets/image_1772400928657.png";
import missionBg from "@assets/2345234534_1771799538730.jpg";
import logoSelect from "@assets/image_1772034518225.png";
import shieldsFullLogo from "@assets/shields_word_white_only_1772037749705.png";
import shieldsBg from "@assets/image_1773499385445.png";
import quickbaseBg from "@assets/image_1773499488838.png";
import leitersBg from "@assets/image_1773500380478.png";
import intoxalockBg from "@assets/image_1773501067574.png";
import concentraBg from "@assets/image_1773501491242.png";
import norstellaBg from "@assets/image_1773501790273.png";
import absorbBg from "@assets/image_1773503737609.png";
import greenStreetBg from "@assets/image_1773500927503.png";
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
const MUTED = "rgba(255,255,255,0.78)";
const VERY_MUTED = "rgba(255,255,255,0.78)";
const TEXT = "#E4E8ED";
const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS = "'DM Sans', sans-serif";


export default function Home() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [expandedNews, setExpandedNews] = useState(0);
  const [carouselIdx, setCarouselIdx] = useState(0);

  return (
    <div style={{ fontFamily: SANS, background: BG, color: TEXT, minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(160deg, #0a1f5c 0%, #04122e 55%, #061538 100%)",
        backgroundImage: "linear-gradient(160deg, #0a1f5c 0%, #04122e 55%, #061538 100%)",
        backgroundColor: "transparent",
        boxShadow: "none",
        paddingBottom: 0,
      }}>
        {/* Nav spacer */}
        <div style={{ height: 52 }} />

        {/* Logo centered */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "44px 48px 44px" }}>
          <img
            src={wcasLogo}
            alt="WCAS"
            style={{ height: 72, width: "auto", filter: "brightness(0) invert(1)", opacity: 0.95 }}
          />
        </div>

        {/* Tagline */}
        <div style={{ display: "flex", justifyContent: "center", padding: "0 48px 44px" }}>
          <p style={{ fontFamily: SANS, fontSize: 23, fontWeight: 300, lineHeight: 1.4, color: "rgba(255,255,255,0.75)", margin: 0, textAlign: "center", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Sector Specialists &nbsp;·&nbsp; Long-Term Partners
          </p>
        </div>

        {/* Stats */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 64px 44px", display: "flex", alignItems: "flex-start" }}>
          {[
            { num: "45+", label: "Years Investing" },
            { num: "190+", label: "Companies" },
            { num: "18", label: "Funds Raised" },
            { num: "$33B+", label: "Capital Raised" },
          ].map((s, i) => (
            <React.Fragment key={i}>
              <div style={{ flex: 1, textAlign: "center", padding: "0 12px" }}>
                <div style={{ fontFamily: SANS, fontSize: 40, fontWeight: 700, marginBottom: 12, color: "#FFFFFF", letterSpacing: "-0.5px" }}>{s.num}</div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 8 }}>
                  <div style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.90)", fontWeight: 500, letterSpacing: 1.5, textTransform: "uppercase" }}>{s.label}</div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 14, justifyContent: "center", padding: "0 48px 28px" }}>
          <a href="#" onClick={e=>e.preventDefault()} className="pill-btn hero-pill-btn" style={{ fontFamily: SANS, fontSize: 14, fontWeight: 500, padding: "11px 0", width: 200, textAlign: "center", borderRadius: 23, border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.85)", cursor: "pointer", textDecoration: "none" }}>Our Story</a>
          <span className="pill-btn hero-pill-btn" style={{ fontFamily: SANS, fontSize: 14, fontWeight: 500, padding: "11px 0", width: 200, textAlign: "center", borderRadius: 23, border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.85)", cursor: "default", textDecoration: "none" }}>Explore Our Portfolio</span>
          <a href="/ai" className="pill-btn hero-pill-btn" style={{ fontFamily: SANS, fontSize: 14, fontWeight: 500, padding: "11px 0", width: 200, textAlign: "center", borderRadius: 23, border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.85)", cursor: "pointer", textDecoration: "none" }}>Our Approach to AI</a>
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
          .wwi-card { flex:1; border-radius:4px; overflow:hidden; background:#fff; box-shadow:0 4px 12px rgba(12,26,46,0.1), 0 12px 32px rgba(12,26,46,0.12), 0 1px 3px rgba(12,26,46,0.08); transition:transform 0.3s ease, box-shadow 0.3s ease; cursor:default; display:flex; flex-direction:column; }
          .wwi-card:hover { transform:translateY(-5px); box-shadow:0 8px 20px rgba(12,26,46,0.12), 0 24px 48px rgba(12,26,46,0.16), 0 1px 4px rgba(12,26,46,0.1); }
          .wwi-card-img-wrap { width:100%; height:180px; overflow:hidden; flex-shrink:0; }
          .wwi-card-img { width:100%; height:100%; object-fit:cover; transition:transform 0.4s ease; display:block; }
          .wwi-card:hover .wwi-card-img { transform:scale(1.06); }
          .wwi-card-body { padding:36px; display:flex; flex-direction:column; flex:1; }
          .wwi-card-title { font-family:'Cormorant Garamond',serif; font-size:42px; font-weight:300; color:#0a1a3a; line-height:1.1; margin:0 0 8px; }
          .wwi-card-subtitle { font-family:'DM Sans',sans-serif; font-size:16px; font-weight:400; color:#0a1a3a; line-height:1.3; margin:0 0 16px; }
          .wwi-card-desc { font-family:'DM Sans',sans-serif; font-size:15px; color:rgba(10,26,58,0.55); line-height:1.65; margin:0 0 28px; }
          .wwi-card-cta { font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500; color:#0a1a3a; text-decoration:none; display:inline-block; margin-top:auto; }
          .wwi-card-cta:hover { text-decoration:underline; text-underline-offset:3px; text-decoration-color:rgba(10,26,58,0.3); }
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
              <a href="#" className="wwi-card-cta" onClick={e => e.preventDefault()} style={{ cursor: "default" }}>Explore Healthcare &rarr;</a>
            </div>
          </div>
          <div className="wwi-card">
            <div className="wwi-card-img-wrap">
              <img className="wwi-card-img" src={techImg} alt="Technology" />
            </div>
            <div className="wwi-card-body">
              <div className="wwi-card-title">Technology</div>
              <div className="wwi-card-subtitle">Powering Essential Industries</div>
              <p className="wwi-card-desc">We partner with mission-critical B2B technology companies and their management teams to accelerate growth and build lasting success.</p>
              <a href="#" onClick={e => e.preventDefault()} className="wwi-card-cta">Explore Technology &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section style={{ background: "#0a1f44", padding: "56px 56px 40px" }}>
        <style>{`
          .port-marquee-wrap { position:relative; overflow:hidden; }
          .port-marquee-wrap::before, .port-marquee-wrap::after { content:""; position:absolute; top:0; bottom:0; width:80px; z-index:2; pointer-events:none; }
          .port-marquee-wrap::before { left:0; background:linear-gradient(to right, #0a1f44, transparent); }
          .port-marquee-wrap::after { right:0; background:linear-gradient(to left, #0a1f44, transparent); }
          .port-marquee-track { display:flex; gap:16px; animation:port-scroll 30s linear infinite; width:max-content; }
          .port-marquee-track:hover { animation-play-state:paused; }
          @keyframes port-scroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          .port-logo-card { width:320px; min-width:320px; height:120px; border-radius:10px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.06); display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:transform 0.3s, border-color 0.3s, box-shadow 0.3s, background 0.3s; padding:0 24px; box-sizing:border-box; overflow:hidden; }
          .port-logo-card:hover { transform:translateY(-3px); border-color:rgba(92,195,209,0.3); box-shadow:0 4px 20px rgba(92,195,209,0.08); background:rgba(255,255,255,0.95); }
          .port-logo-card img { transition:filter 0.3s ease; }
          .port-logo-card:hover img { filter:none !important; }
          .port-logo-card span { font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500; color:rgba(255,255,255,0.7); letter-spacing:0.5px; }
          @media (prefers-reduced-motion: reduce) { .port-marquee-track { animation:none !important; flex-wrap:wrap; justify-content:center; } }
        `}</style>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 48 }}>
          <div style={{ maxWidth: 900 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#8BBDE8" }}>Our Portfolio</span>
              <div style={{ width: 40, height: 1, background: "linear-gradient(to right, #8BBDE8, transparent)" }} />
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: 42, fontWeight: 400, color: "#fff", lineHeight: 1.15, marginBottom: 20, whiteSpace: "nowrap" }}>Building market leaders across healthcare and technology</h2>
            <p style={{ fontFamily: SANS, fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>With deep domain experience and a long-term partnership mentality, we look to drive value through a combination of operational improvements, internal growth initiatives and strategic acquisitions.</p>
          </div>
          <a href="#" onClick={e => e.preventDefault()} className="pill-btn hero-pill-btn" style={{ fontFamily: SANS, fontSize: 14, fontWeight: 500, padding: "11px 0", width: 200, textAlign: "center", borderRadius: 23, border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.85)", cursor: "default", textDecoration: "none", marginTop: 40, display: "inline-block" }}>Explore Our Portfolio &rarr;</a>
        </div>
        <div style={{ paddingTop: 56 }}>
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
                  <div key={`${setIdx}-${i}`} className="port-logo-card" style={{ minWidth: 320, flexShrink: 0 }}>
                    <img src={co.src} alt={co.name} style={{ height: co.h, maxWidth: 180, maxHeight: 70, objectFit: "contain", filter: "brightness(0) invert(1)", ...(co.name === "Alliance Data" ? { clipPath: "inset(0 0 6px 0)" } : {}) }} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── SPOTLIGHT + SIDEBAR SECTION ── */}
      <section style={{ position: "relative", overflow: "hidden", background: "#0a1f44", marginTop: 0 }}>
        <div style={{ position: "relative", zIndex: 10, padding: "40px 56px 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#8BBDE8" }}>Our Mission</span>
                <div style={{ width: 40, height: 1, background: "linear-gradient(to right, #8BBDE8, transparent)" }} />
              </div>
              <h2 style={{ fontFamily: SERIF, fontSize: 34, fontWeight: 400, lineHeight: 1.2 }}>Be Your Partner of Choice</h2>
            </div>
            <p style={{ fontFamily: SANS, fontSize: 17, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontWeight: 300, paddingTop: 8 }}>
              WCAS's mission is to lead through thought leadership, culture, and results. We create deep partnerships and are frequently selected as the preferred partner.
            </p>
          </div>
        </div>
      </section>

      {/* ── VIDEO CAROUSEL ── */}
      {(() => {
        const cards = [
          { id: "861242809", title: "Paths to Growth", logo: quickbaseLogo, logoH: 42, qbBg: quickbaseBg },
          { id: "913387748", title: "Investing in Better Healthcare", logo: shieldsFullLogo, logoH: 50, bg: shieldsBg },
          { id: "861242949", title: "Paths to Growth", logo: absorbLogo, logoH: 46, absorbHBg: absorbBg },
          { id: "913334845", title: "Investing in Better Healthcare", logo: concentraLogo, logoH: 32, concentraHBg: concentraBg },
          { id: "861243221", title: "Paths to Growth", logo: greenStreetLogo, logoH: 52, gsHBg: greenStreetBg },
          { id: "861243091", title: "Paths to Growth", logo: intoxalockLogo, logoH: 26, intoxHBg: intoxalockBg },
          { id: "913388269", title: "Investing in Better Healthcare", logo: leitersLogo, logoH: 32, leitersHBg: leitersBg },
          { id: "913387297", title: "Investing in Better Healthcare", logo: norstellaLogo, logoH: 52, norstellaHBg: norstellaBg },
        ];
        const total = cards.length;
        const prev = () => setCarouselIdx(i => (i - 1 + total) % total);
        const next = () => setCarouselIdx(i => (i + 1) % total);
        const orderedCards = [
          cards[(carouselIdx) % total],
          cards[(carouselIdx + 1) % total],
          cards[(carouselIdx + 2) % total],
        ];
        return (
          <section style={{ background: "#0a1f44", padding: "40px 0 56px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, padding: "0 32px" }}>
              {/* Left arrow */}
              <button onClick={prev} aria-label="Previous" style={{ fontFamily: SANS, fontSize: 20, fontWeight: 500, width: 52, height: 52, borderRadius: 26, border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.85)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "border-color 0.2s, background 0.2s, color 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#ffffff"; (e.currentTarget as HTMLElement).style.borderColor = "#ffffff"; (e.currentTarget as HTMLElement).style.color = "#0C1A2E"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)"; }}
                onTouchEnd={e => { const el = e.currentTarget as HTMLElement; setTimeout(() => { el.style.background = "rgba(255,255,255,0.07)"; el.style.borderColor = "rgba(255,255,255,0.25)"; el.style.color = "rgba(255,255,255,0.85)"; }, 150); }}>
                &#8592;
              </button>

              {/* Cards */}
              <div style={{ display: "flex", gap: 20, flex: 1, alignItems: "center" }}>
                {orderedCards.map((card, i) => (
                  <div key={card.id + i} onClick={() => { if (i === 0) setCarouselIdx(idx => (idx - 1 + total) % total); else if (i === 2) setCarouselIdx(idx => (idx + 1) % total); else setPlayingVideo(card.id); }}
                    style={{ flex: 1, borderRadius: 16, backgroundColor: (card as any).bg ? "#0d2535" : "#0a1020", backgroundImage: (card as any).bg ? `linear-gradient(180deg, rgba(8,18,42,0.25) 0%, rgba(8,18,42,0.9) 100%), url(${(card as any).bg})` : undefined, backgroundSize: (card as any).bg ? "auto, cover" : undefined, backgroundPosition: (card as any).bg ? "center, 50% 20%" : undefined, backgroundRepeat: (card as any).bg ? "no-repeat, no-repeat" : undefined, backgroundOrigin: (card as any).bg ? "border-box, border-box" : undefined, border: i === 1 ? "1px solid rgba(255,255,255,0.35)" : "1px solid rgba(255,255,255,0.12)", boxShadow: i === 1 ? "0 0 0 1px rgba(92,195,209,0.25)" : undefined, overflow: "hidden", cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: i === 1 ? 240 : 210, padding: "24px 24px 24px", position: "relative", opacity: i === 1 ? 1 : 0.55, transform: i === 1 ? "scale(1)" : "scale(0.88)", zIndex: i === 1 ? 2 : 1, transition: "all 0.4s ease" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.28)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = i === 1 ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLElement).style.transform = i === 1 ? "scale(1)" : "scale(0.88)"; }}>
                    {/* Quickbase background layers */}
                    {(card as any).qbBg && <>
                      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${(card as any).qbBg})`, backgroundSize: "130%", backgroundPosition: "50% 30%", backgroundRepeat: "no-repeat", zIndex: 0 }} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,18,42,0.35) 0%, rgba(8,18,42,0.88) 100%)", zIndex: 1 }} />
                    </>}
                    {/* Absorb background layers */}
                    {(card as any).absorbHBg && <>
                      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${(card as any).absorbHBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", zIndex: 0 }} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,18,42,0.35) 0%, rgba(8,18,42,0.88) 100%)", zIndex: 1 }} />
                    </>}
                    {/* Leiters Health background layers */}
                    {(card as any).leitersHBg && <>
                      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${(card as any).leitersHBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", zIndex: 0 }} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,18,42,0.35) 0%, rgba(8,18,42,0.88) 100%)", zIndex: 1 }} />
                    </>}
                    {/* Concentra background layers */}
                    {(card as any).concentraHBg && <>
                      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${(card as any).concentraHBg})`, backgroundSize: "cover", backgroundPosition: "center top", backgroundRepeat: "no-repeat", zIndex: 0 }} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,18,42,0.45) 0%, rgba(8,18,42,0.88) 100%)", zIndex: 1 }} />
                    </>}
                    {/* Green Street background layers */}
                    {(card as any).gsHBg && <>
                      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${(card as any).gsHBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", zIndex: 0 }} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,18,42,0.35) 0%, rgba(8,18,42,0.88) 100%)", zIndex: 1 }} />
                    </>}
                    {/* Intoxalock background layers */}
                    {(card as any).intoxHBg && <>
                      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${(card as any).intoxHBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", zIndex: 0 }} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,18,42,0.35) 0%, rgba(8,18,42,0.88) 100%)", zIndex: 1 }} />
                    </>}
                    {/* Norstella background layers */}
                    {(card as any).norstellaHBg && <>
                      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${(card as any).norstellaHBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", zIndex: 0 }} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,18,42,0.35) 0%, rgba(8,18,42,0.88) 100%)", zIndex: 1 }} />
                    </>}
                    {/* Title */}
                    <div style={{ fontFamily: SANS, fontSize: 17, fontWeight: 600, color: "rgba(255,255,255,0.9)", letterSpacing: "0", lineHeight: 1.3, position: "relative", zIndex: 2 }}>{card.title}</div>
                    {/* Play button */}
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1, paddingTop: 16, position: "relative", zIndex: 2 }}>
                      <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "1.5px solid rgba(255,255,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="white" style={{ marginLeft: 2 }}><path d="M4 2l10 6-10 6z"/></svg>
                      </div>
                    </div>
                    {/* Logo */}
                    <div style={{ display: "flex", justifyContent: "center", paddingTop: 20, paddingBottom: 4, position: "relative", zIndex: 2 }}>
                      <img src={card.logo} alt="" style={{ height: card.logoH, maxWidth: 230, objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.8 }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Right arrow */}
              <button onClick={next} aria-label="Next" style={{ fontFamily: SANS, fontSize: 20, fontWeight: 500, width: 52, height: 52, borderRadius: 26, border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.85)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "border-color 0.2s, background 0.2s, color 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#ffffff"; (e.currentTarget as HTMLElement).style.borderColor = "#ffffff"; (e.currentTarget as HTMLElement).style.color = "#0C1A2E"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)"; }}
                onTouchEnd={e => { const el = e.currentTarget as HTMLElement; setTimeout(() => { el.style.background = "rgba(255,255,255,0.07)"; el.style.borderColor = "rgba(255,255,255,0.25)"; el.style.color = "rgba(255,255,255,0.85)"; }, 150); }}>
                &#8594;
              </button>
            </div>

            {/* Dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 24 }}>
              {cards.map((_, i) => (
                <div key={i} onClick={() => setCarouselIdx(i)} style={{ width: i === carouselIdx ? 20 : 6, height: 6, borderRadius: 3, background: i === carouselIdx ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.2)", cursor: "pointer", transition: "all 0.3s" }} />
              ))}
            </div>

            {/* CTA button */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
              <a href="#" onClick={e => e.preventDefault()} className="pill-btn hero-pill-btn" style={{ fontFamily: SANS, fontSize: 14, fontWeight: 500, padding: "11px 0", width: 260, textAlign: "center", borderRadius: 23, border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.85)", cursor: "pointer", textDecoration: "none", display: "inline-block" }}>Learn More About Our History</a>
            </div>
          </section>
        );
      })()}

      {/* ── NEWS ── */}
      <section style={{ background: "#f4f3f0", padding: "56px 56px 80px" }}>
        <style>{`
          @keyframes news-fade-in { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
          .news-row { cursor:pointer; transition:background 0.3s ease, color 0.3s ease; }
          .news-row:hover { background:#0a1f44; }
          .news-row:hover .nr-title, .news-row:hover .nr-date { color:#fff; }
          .news-row:hover .nr-arrow { border-color:rgba(255,255,255,0.3); color:#fff; }
          .news-row.nr-active { background:#0a1f44; }
          .news-row.nr-active .nr-title, .news-row.nr-active .nr-date { color:#fff; }
          .news-row.nr-active .nr-arrow { border-color:rgba(255,255,255,0.3); color:#fff; transform:rotate(90deg); }
          .nr-expand { max-height:0; overflow:hidden; transition:max-height 0.4s ease, padding 0.4s ease; }
          .nr-expand.nr-open { max-height:300px; }
          .news-content-fade { transition:opacity 0.3s ease; }
        `}</style>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#0C1A2E" }}>News & Perspectives</span>
            <div style={{ width: 40, height: 1, background: "linear-gradient(to right, #0C1A2E, transparent)" }} />
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
              style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(12,26,46,0.08)" : "none", background: expandedNews === i ? "#0a1f44" : "#fff", animation: `news-fade-in 0.5s ease ${i * 0.1}s both` }}
              onClick={() => setExpandedNews(expandedNews === i ? -1 : i)}
            >
              <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 40px", alignItems: "center", padding: "22px 28px", gap: 24 }}>
                <span className="nr-date" style={{ fontFamily: SANS, fontSize: 12, color: expandedNews === i ? "#fff" : "#555", transition: "color 0.3s", display: "flex", alignItems: "center" }}>{n.date}</span>
                <h4 className="nr-title" style={{ fontFamily: SANS, fontSize: 17, fontWeight: 500, color: expandedNews === i ? "#fff" : "#0c1a2e", lineHeight: 1.4, transition: "color 0.3s", margin: 0 }}>{n.title}</h4>
                <div className="nr-arrow" style={{ width: 32, height: 32, borderRadius: "50%", border: `1px solid ${expandedNews === i ? "rgba(255,255,255,0.3)" : "rgba(12,26,46,0.15)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: expandedNews === i ? "#fff" : "#0c1a2e", transition: "all 0.3s", transform: expandedNews === i ? "rotate(90deg)" : "none" }}>&#8594;</div>
              </div>
              <div className={`nr-expand ${expandedNews === i ? 'nr-open' : ''}`} style={{ padding: expandedNews === i ? "0 28px 28px" : "0 28px" }}>
                <div style={{ display: "flex", gap: 28 }}>
                  <div style={{ width: 280, flexShrink: 0, borderRadius: 12, background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", padding: 32, boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
                    <img src={n.logo} alt="" style={{ maxHeight: 64, maxWidth: 220, objectFit: "contain" }} />
                  </div>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <p style={{ fontFamily: SANS, fontSize: 14, color: "rgba(255,255,255,0.78)", lineHeight: 1.7, marginBottom: 20 }}>{n.excerpt}</p>
                    <a href="#" onClick={e => { e.preventDefault(); e.stopPropagation(); }} style={{ fontFamily: SANS, fontSize: 13, fontWeight: 500, color: "#5cc3d1", textDecoration: "none" }}>Read full article &#8594;</a>
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