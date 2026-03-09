import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import aiHeroBg from "@assets/image_1772741431593.png";
import norstellaWhiteLogo from "@assets/norstella_text_white_1772038125226.png";
import georgePhoto from "@assets/image_1772773366337.png";
import mikePhoto from "@assets/image_1772773735309.png";
import tylerPhoto from "@assets/image_1772773752068.png";
import davidPhoto from "@assets/image_1772773762646.png";
import carolinePhoto from "@assets/image_1772773770479.png";
import balaPhoto from "@assets/image_1772773802351.png";
import billPhoto from "@assets/image_1772773830252.png";
import lawrencePhoto from "@assets/image_1772774151472.png";

const TEAL = "#4db8c7";
const ACCENT = "#6BA3D6";
const GOLD = "#c8985e";
const BG = "#0C1A2E";
const BG2 = "#152238";
const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS = "'DM Sans', sans-serif";

function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, style: { opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms` } };
}
function Fade({ children, delay = 0, style }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const f = useFadeIn(delay);
  return <div ref={f.ref} style={{ ...style, ...f.style }}>{children}</div>;
}

function ParticleField({ density = 50 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    const resize = () => { canvas.width = canvas.offsetWidth * 2; canvas.height = canvas.offsetHeight * 2; };
    resize();
    window.addEventListener("resize", resize);
    const colors = [[77,184,199],[200,152,94],[107,163,214]];
    const particles = Array.from({ length: density }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 2.2 + 0.8, c: colors[Math.floor(Math.random() * 3)],
      a: Math.random() * 0.45 + 0.15,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 190) { ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.strokeStyle = `rgba(77,184,199,${0.055*(1-d/190)})`; ctx.lineWidth = 0.6; ctx.stroke(); }
        }
      }
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c[0]},${p.c[1]},${p.c[2]},${p.a})`; ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, [density]);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />;
}

const SL = ({ text, color = TEAL }: { text: string; color?: string }) => (<div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}><span style={{ fontFamily: SANS, fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color }}>{text}</span><div style={{ width: 40, height: 1, background: `linear-gradient(to right, ${color}, transparent)` }} /></div>);
const ST = ({ children, mw = 700 }: { children: React.ReactNode; mw?: number }) => (<h2 style={{ fontSize: 40, fontWeight: 400, color: "#fff", lineHeight: 1.2, marginBottom: 20, maxWidth: mw }}>{children}</h2>);
const SD = ({ children, mw = 660 }: { children: React.ReactNode; mw?: number }) => (<p style={{ fontFamily: SANS, fontSize: 16, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: mw, marginBottom: 48 }}>{children}</p>);


const teamMembers = [
  { name: "Bill Bowman", role: "Cybersecurity", initials: "BB", photo: billPhoto },
  { name: "David Caluori", role: "General Partner", initials: "DC", photo: davidPhoto },
  { name: "Caroline Dechert", role: "General Partner", initials: "CD", photo: carolinePhoto },
  { name: "Mike Donovan", role: "General Partner", initials: "MD", photo: mikePhoto },
  { name: "Bala Girsiaballa", role: "Offshoring", initials: "BG", photo: balaPhoto },
  { name: "George Mashini", role: "Software Portfolio CTO", initials: "GM", photo: georgePhoto },
  { name: "Lawrence Miller", role: "General Partner", initials: "LM", photo: lawrencePhoto },
  { name: "Tyler Pitchford", role: "AI Implementation", initials: "TP", photo: tylerPhoto },
];
const scaleSteps = [
  { title: "Leadership", desc: "Prioritizing AI discussions with Board and ELT members around deployment opportunities. We set governance upfront (security, privacy, model risk, human-in-the-loop) and align on ROI targets before a single line of code is written.", stat: "Board + ELT", detail: "Governance-first approach", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-4h6v4"/><path d="M9 13h.01"/><path d="M15 13h.01"/></svg> },
  { title: "Repository", desc: "We\u2019ve built a living registry of 300+ AI applications impacting front-office and back-office efforts, each tracked with scope, success metrics, and replicability scores across the portfolio.", stat: "300+", detail: "AI Use Cases Cataloged", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg> },
  { title: "Vendor Engagement", desc: "Consistently meeting with emerging AI vendors and bringing relevant opportunities to portfolio companies. We source pilots, negotiate portfolio-wide terms, and run time-boxed trials with clear scale/kill criteria.", stat: "Active Pilots", detail: "Portfolio-wide negotiations", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3"/><path d="M4 7h3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4"/><line x1="12" y1="7" x2="12" y2="17"/><line x1="8" y1="12" x2="16" y2="12"/></svg> },
  { title: "Roundtables", desc: "Monthly AI roundtables where portfolio company leaders share playbooks, wins and pitfalls. We publish repeatable frameworks, required guardrails, and feed insights back into the repository.", stat: "Monthly", detail: "Knowledge sharing", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { title: "AI Transformation", desc: "We partner directly with portfolio companies to unlock AI opportunities: driving strategic scoping, delivering expert technical advice, and providing hands-on training to accelerate adoption.", stat: "Hands-On", detail: "Embedded advisory", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg> },
];
const caseStudies = [
  { company: "Absorb", sector: "Technology", app: "Course Generation", useCase: "GenAI features to build, adapt, and personalize Absorb LMS learning content.", build: "Internally built with cloud-native functionality.", cardImg: "/logos/absorb-ai-card-new.png", logo: "/logos/absorb-white.png", logoH: 70 },
  { company: "AIA Contract Documents", sector: "Technology", app: "Contract Review", useCase: "AI automates contract risk review and improves risk detection.", build: "Roadmap contemplates internal build or acquisition.", cardImg: "/logos/aia-ai-card-v3.png", logo: "/logos/aia-logo-v2.png", logoH: 55, darkOverlay: true },
  { company: "AllazoHealth", sector: "Healthcare", app: "AssistRx Add-On Patient Engagement", useCase: "AI-powered platform predicts adherence risk and personalizes outreach.", build: "Acquired via AssistRx.", cardImg: "/logos/allazo-ai-card-new.png", logo: "/logos/assistrx-transparent.png", logoH: 50 },
  { company: "LINQ", sector: "Technology", app: "LINQ Q Support Agent", useCase: "AI agent supports voice and chat channels for everyday customer requests.", build: "Built with low-code AI platform.", cardImg: "/logos/linq-ai-card.png", logo: "/logos/linq.png", logoH: 55 },
  { company: "Lumexa Imaging", sector: "Healthcare", app: "Patient Data Support", useCase: "Agentic AI bots analyze and translate patient data and update billing records.", build: "Built in partnership with OnQ.", logo: "/logos/lumexa-transparent.png", logoH: 50, cardImg: "/logos/lumexa-ai-card.png" },
  { company: "Norstella", sector: "Healthcare", app: "NorstellaLinQ Trial Design Co-Pilot", useCase: "GenAI + ML powered data and tools supporting clinical trial design and optimization.", build: "Built internally leveraging large multimodal data set.", logo: norstellaWhiteLogo, logoH: 75, cardImg: "/logos/norstella-ai-card.png" },
];

export default function WCASAIPage() {
  const [activeAnchor, setActiveAnchor] = useState("about");
  const [activeCS, setActiveCS] = useState(0);
  const [csFilter, setCsFilter] = useState("All");
  
  const fCS = csFilter === "All" ? caseStudies : caseStudies.filter(c => c.sector === csFilter);
  const si = Math.min(activeCS, fCS.length - 1);
  const anchors = [{id:"case-studies",l:"Case Studies"},{id:"playbook",l:"Our Playbook"}];

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ fontFamily: SERIF, background: BG, color: "#E4E8ED", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .pb-row:hover{background:rgba(255,255,255,0.03);padding-left:16px!important;padding-right:16px}.pb-row:hover .pb-icon{color:rgba(77,184,199,0.9)}.pb-row:hover .pb-desc{color:rgba(255,255,255,0.7)}
        .cs-flip-wrap{perspective:1000px;height:320px}.cs-flip-inner{position:relative;width:100%;height:100%;transition:transform 0.6s cubic-bezier(0.4,0,0.2,1);transform-style:preserve-3d}.cs-flip-wrap:hover .cs-flip-inner{transform:rotateY(180deg)}.cs-flip-front,.cs-flip-back{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden}.cs-flip-back{transform:rotateY(180deg)}
        .ap{font-family:${SANS};font-size:15px;font-weight:500;padding:12px 32px;border-radius:23px;border:1px solid rgba(255,255,255,0.3);background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.9);cursor:pointer;transition:all 0.2s;text-decoration:none;white-space:nowrap}.ap:hover{color:#fff;border-color:rgba(255,255,255,0.5);background:rgba(255,255,255,0.14);transform:translateY(-3px)}.ap.ac{color:#fff;border-color:rgba(255,255,255,0.5);background:rgba(255,255,255,0.18)}
        .csc{padding:24px 28px;cursor:pointer;border-left:3px solid transparent;transition:all 0.25s}.csc:hover{background:rgba(255,255,255,0.03)}.csc.csa{background:rgba(255,255,255,0.05);border-left-color:${TEAL}}
        .fc{font-family:${SANS};font-size:11px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;padding:7px 16px;border-radius:16px;cursor:pointer;transition:all 0.25s;border:1px solid rgba(255,255,255,0.06);background:transparent;color:rgba(255,255,255,0.3)}.fc:hover{color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.15)}.fc.fca{color:${TEAL};border-color:rgba(77,184,199,0.3);background:rgba(77,184,199,0.08)}
        @keyframes gs{0%{background-position:0% 50%}100%{background-position:200% 50%}}
        @keyframes rp{0%{transform:scale(0.85);opacity:0.25}50%{transform:scale(1.05);opacity:0.06}100%{transform:scale(0.85);opacity:0.25}}
        @keyframes m1{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(4%,-3%) scale(1.08)}66%{transform:translate(-3%,4%) scale(0.95)}}
        @keyframes m2{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(-3%,5%) scale(1.04)}66%{transform:translate(5%,-2%) scale(0.92)}}
        @keyframes wd{0%{transform:translateX(0) scaleY(1)}50%{transform:translateX(-2%) scaleY(1.06)}100%{transform:translateX(0) scaleY(1)}}
        
        .lc{flex:1;padding:32px 28px;border-radius:16px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);transition:transform 0.3s,border-color 0.3s,box-shadow 0.3s}.lc:hover{transform:translateY(-4px);border-color:rgba(77,184,199,0.2);box-shadow:0 8px 32px rgba(0,0,0,0.2)}
        .oc{flex:1;padding:32px 28px;border-radius:16px;background:rgba(77,184,199,0.04);border:1px solid rgba(77,184,199,0.12);transition:transform 0.3s,border-color 0.3s}.oc:hover{transform:translateY(-3px);border-color:rgba(77,184,199,0.3)}
        
        .tc{padding:28px;border-radius:16px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;gap:20px;transition:transform 0.3s,border-color 0.3s}.tc:hover{transform:translateY(-3px);border-color:rgba(107,163,214,0.25)}
        @keyframes team-scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        .team-track{display:flex;gap:20px;animation:team-scroll 20s linear infinite;width:max-content}.team-track:hover{animation-play-state:paused}
        .team-photo-card{width:200px;flex-shrink:0;text-align:center;display:flex;flex-direction:column;align-items:center;transition:transform 0.3s}.team-photo-card:hover{transform:translateY(-6px)}
        .team-photo-img{filter:grayscale(100%);transition:filter 0.4s ease}.team-photo-card:hover .team-photo-img{filter:grayscale(0%)}
        
        .sl{position:absolute;left:19px;top:40px;bottom:-20px;width:2px;background:linear-gradient(180deg,${TEAL},rgba(77,184,199,0.1))}
      `}</style>

      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", width: "100%", minHeight: 575 }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${aiHeroBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.70) 35%, rgba(0,0,0,0.30) 60%, transparent 80%)" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "220px 64px 64px" }}>
          <h1 style={{ fontSize: 43, fontWeight: 400, lineHeight: 1.35, color: "#fff", marginBottom: 48 }}>Where <em style={{ fontStyle: "italic", fontWeight: 400, color: "#8BBDE8" }}>Sector Expertise</em> Meets <em style={{ fontStyle: "italic", fontWeight: 400, color: "#8BBDE8" }}>Artificial Intelligence</em></h1>
          <p style={{ fontFamily: SANS, fontSize: 23, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontWeight: 300, maxWidth: 880, marginBottom: 40 }}>At WCAS, AI isn't a theme. It's infrastructure, embedded in how we evaluate investments, how we support our portfolio, and how we create lasting value.</p>
          <div style={{ display: "flex", gap: 10, paddingBottom: 40, flexWrap: "wrap" }}>
            {anchors.map(a => (<a key={a.id} href={`#${a.id}`} className={`ap ${activeAnchor===a.id?"ac":""}`} onClick={e=>{e.preventDefault();setActiveAnchor(a.id);document.getElementById(a.id)?.scrollIntoView({behavior:"smooth"})}}>{a.l}</a>))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ background: BG, padding: "56px 64px" }}>
        <Fade><div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: 40, alignItems: "center" }}>
          <p style={{ fontSize: 26, fontWeight: 400, color: "#fff", lineHeight: 1.55 }}>AI is reshaping every industry, and the gap between companies that lead and those that lag is widening fast. Our conviction: <strong>incumbency matters</strong>. We've spent 45 years building the sector expertise and data infrastructure to make sure our partner companies are on the right side of that shift.</p>
          <div style={{ width: 1, alignSelf: "stretch", background: "linear-gradient(to bottom, transparent, rgba(77,184,199,0.35), transparent)" }} />
          <p style={{ fontSize: 26, fontWeight: 400, color: "#fff", lineHeight: 1.55 }}>Every WCAS investment is evaluated through a proprietary AI Scorecard assessing market defensibility, data moats, organizational readiness, and more. Post-investment, our dedicated team embeds directly and persistently with portfolio companies to turn AI ambition into measurable, lasting results.</p>
        </div></Fade>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" style={{ background: BG2, padding: "56px 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-10%", right: "-8%", width: "45%", height: "65%", borderRadius: "50%", background: "radial-gradient(ellipse at center, rgba(77,184,199,0.04) 0%, transparent 65%)", animation: "m1 20s ease-in-out infinite", filter: "blur(40px)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <Fade><SL text="Select Portfolio Case Studies" /><ST>AI at work across healthcare & technology</ST><SD>Real-world AI use cases delivering measurable value.</SD></Fade>
          <Fade delay={100}><div style={{ display: "flex", gap: 10, marginBottom: 36 }}>
            {["All","Technology","Healthcare"].map(f => (<div key={f} className={`fc ${csFilter===f?"fca":""}`} onClick={()=>{setCsFilter(f);setActiveCS(0)}}>{f}</div>))}
          </div></Fade>
          <Fade delay={150}><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
            {fCS.map((cs) => {
              const isHC = cs.sector === "Healthcare";
              const accent = isHC ? TEAL : "#8bbde8";
              const accentBg = isHC ? "rgba(77,184,199,0.08)" : "rgba(139,189,232,0.08)";
              const accentBorder = isHC ? "rgba(77,184,199,0.2)" : "rgba(139,189,232,0.2)";
              return (
                <div key={cs.company} className="cs-flip-wrap">
                  <div className="cs-flip-inner">
                    <div className="cs-flip-front" style={{ background: (cs as any).cardImg ? `linear-gradient(180deg, rgba(8,14,28,${(cs as any).darkOverlay ? '0.65' : '0.5'}) 0%, rgba(8,14,28,${(cs as any).darkOverlay ? '0.92' : '0.9'}) 100%), url(${(cs as any).cardImg}) center/cover no-repeat` : "rgba(8,14,28,0.7)", border: `1px solid rgba(255,255,255,0.06)`, borderRadius: 16, padding: "32px 28px", display: "flex", flexDirection: "column", justifyContent: (cs as any).cardImg ? "center" : "space-between", alignItems: (cs as any).cardImg ? "center" : "stretch", height: "100%", position: "relative", backdropFilter: "blur(12px)" }}>
                      {(cs as any).cardImg ? (<>
                        <div style={{ textAlign: "center" }}>
                          {(cs as any).logo ? (
                            <img src={(cs as any).logo} alt={cs.company} style={{ height: (cs as any).logoH || 32, objectFit: "contain", filter: "brightness(0) invert(1)" }} />
                          ) : (
                            <h3 style={{ fontFamily: SERIF, fontSize: 30, fontWeight: 400, color: "#fff", lineHeight: 1.25 }}>{cs.company}</h3>
                          )}
                        </div>
                        <div style={{ position: "absolute", bottom: 28, left: 28, right: 28, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                          <span style={{ fontFamily: SANS, fontSize: 10, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: accent, padding: "4px 12px", borderRadius: 10, background: accentBg, border: `1px solid ${accentBorder}` }}>{cs.sector}</span>
                          <span style={{ fontFamily: SANS, fontSize: 14, color: "rgba(255,255,255,0.45)" }}>Hover to explore &rarr;</span>
                        </div>
                      </>) : (<>
                        <div>
                          {(cs as any).logo ? (
                            <img src={(cs as any).logo} alt={cs.company} style={{ height: (cs as any).logoH || 32, objectFit: "contain", marginBottom: 16, filter: "brightness(0) invert(1)" }} />
                          ) : (
                            <h3 style={{ fontFamily: SERIF, fontSize: 26, fontWeight: 400, color: "#fff", lineHeight: 1.25, marginBottom: 8 }}>{cs.company}</h3>
                          )}
                          <p style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 400, color: "#fff", lineHeight: 1.3 }}>{cs.app}</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 32 }}>
                          <span style={{ fontFamily: SANS, fontSize: 10, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: accent, padding: "4px 12px", borderRadius: 10, background: accentBg, border: `1px solid ${accentBorder}` }}>{cs.sector}</span>
                          <span style={{ fontFamily: SANS, fontSize: 14, color: "rgba(255,255,255,0.45)" }}>Hover to explore &rarr;</span>
                        </div>
                      </>)}
                    </div>
                    <div className="cs-flip-back" style={{ background: "rgba(8,14,28,0.85)", border: `1px solid ${accentBorder}`, borderRadius: 16, padding: "32px 28px", display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", backdropFilter: "blur(12px)" }}>
                      {(cs as any).cardImg && <p style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 400, color: "#fff", lineHeight: 1.3, marginBottom: 20 }}>{cs.app}</p>}
                      <div style={{ fontFamily: SANS, fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: accent, marginBottom: 16 }}>Use Case</div>
                      <p style={{ fontFamily: SANS, fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 28 }}>{cs.useCase}</p>
                      <div style={{ fontFamily: SANS, fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: accent, marginBottom: 12 }}>Build / Source</div>
                      <p style={{ fontFamily: SANS, fontSize: 17, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>{cs.build}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div></Fade>
        </div>
      </section>

      {/* PLAYBOOK */}
      <section id="playbook" style={{ background: BG, padding: "56px 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: "-20%", left: "-5%", width: "40%", height: "60%", borderRadius: "50%", background: "radial-gradient(ellipse at center, rgba(200,152,94,0.04) 0%, transparent 65%)", animation: "m2 22s ease-in-out infinite", filter: "blur(40px)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <Fade>
            <SL text="Our Playbook" />
            <ST>How we scale AI across the portfolio</ST>
          </Fade>
          <Fade delay={100}>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: 48 }}>
              {scaleSteps.map((s, i) => (
                <div key={i} className="pb-row" style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 32, alignItems: "start", padding: "32px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", transition: "background 0.3s ease, padding-left 0.3s ease", borderRadius: 4, cursor: "default" }}>
                  <div>
                    <div style={{ fontFamily: SANS, fontSize: 12, fontWeight: 600, letterSpacing: 1.8, textTransform: "uppercase", color: TEAL, marginBottom: 8 }}>{s.detail}</div>
                    <h4 style={{ fontFamily: SANS, fontSize: 26, fontWeight: 700, color: "#fff", lineHeight: 1.3, textTransform: "uppercase", letterSpacing: 0.5 }}>{s.title}</h4>
                  </div>
                  <p style={{ fontFamily: SANS, fontSize: 17, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, transition: "color 0.3s" }} className="pb-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* QUOTE */}
      <section style={{ background: BG2, padding: "56px 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }}>
          {[380,520,660].map((sz, i) => (<div key={i} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: sz, height: sz, borderRadius: "50%", border: `1px solid rgba(77,184,199,${0.05-i*0.015})`, animation: `rp ${6+i*2}s ease-in-out infinite ${i*0.8}s` }} />))}
        </div>
        <Fade><div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          <div style={{ width: 48, height: 2, background: `linear-gradient(90deg, ${TEAL}, ${GOLD})`, margin: "0 auto 44px", borderRadius: 1 }} />
          <p style={{ fontSize: 27, fontWeight: 400, color: "#fff", lineHeight: 1.55, marginBottom: 28 }}>WCAS's proprietary data infrastructure compounds institutional knowledge across 45+ years — enabling our teams to identify patterns, surface insights, and make decisions with a depth of context no algorithm alone can replicate.</p>
          <p style={{ fontFamily: SANS, fontSize: 15, color: "rgba(255,255,255,0.4)", lineHeight: 1.8, maxWidth: 680, margin: "0 auto" }}>By combining proprietary deal data, sector benchmarks, and advanced AI capabilities, we give our teams and portfolio companies a persistent analytical advantage.</p>
        </div></Fade>
      </section>

      {/* STATS */}
      <section style={{ background: BG, padding: "56px 64px" }}>
        <Fade><div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 48 }}>
          {[{n:"300+",l:"AI Use Cases Cataloged"},{n:"$33B+",l:"Capital Deployed"},{n:"45+",l:"Years of Sector Data"},{n:"6",l:"Dedicated AI & Digital Team"}].map((s,i)=>(<div key={i} style={{ flex: 1 }}>
            <div style={{ width: "calc(100% - 24px)", height: 2, background: [TEAL,ACCENT,GOLD,TEAL][i], marginBottom: 20, opacity: 0.5 }} />
            <div style={{ fontFamily: SANS, fontSize: 36, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{s.n}</div>
            <div style={{ fontFamily: SANS, fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{s.l}</div>
          </div>))}
        </div></Fade>
      </section>

      {/* CTA */}
      <section style={{ background: BG2, padding: "56px 64px", textAlign: "center" }}>
        <Fade>
          <h2 style={{ fontSize: 32, fontWeight: 400, color: "#fff", marginBottom: 16 }}>Explore how WCAS creates value</h2>
          <p style={{ fontFamily: SANS, fontSize: 15, color: "rgba(255,255,255,0.4)", marginBottom: 32 }}>Discover our portfolio, our sectors, and the partnerships that define the Welsh Carson way.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <a href="#" onClick={e=>e.preventDefault()} style={{ fontFamily: SANS, fontSize: 14, fontWeight: 500, padding: "14px 36px", borderRadius: 28, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", textDecoration: "none" }}>Explore Our Portfolio</a>
            <a href="#" onClick={e=>e.preventDefault()} style={{ fontFamily: SANS, fontSize: 14, fontWeight: 500, padding: "14px 36px", borderRadius: 28, border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Our Sectors</a>
          </div>
        </Fade>
      </section>
      <div style={{ height: 3, background: `linear-gradient(90deg, ${TEAL}, ${ACCENT}, ${GOLD})`, opacity: 0.45 }} />
    </div>
  );
}
