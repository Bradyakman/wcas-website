import { useState, useEffect, useRef } from "react";
import aiHeroBg from "@assets/image_1772741431593.png";

const TEAL = "#4db8c7";
const BG = "#0C1A2E";
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

export default function PortfolioPage() {
  return (
    <div style={{ fontFamily: SERIF, background: BG, color: "#fff", minHeight: "100vh" }}>

      <section style={{ position: "relative", overflow: "hidden", width: "100%", minHeight: 575 }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${aiHeroBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.70) 35%, rgba(0,0,0,0.30) 60%, transparent 80%)" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "220px 64px 64px" }}>
          <h1 style={{ fontSize: 44, fontWeight: 400, lineHeight: 1.35, color: "#fff", marginBottom: 48 }}>Building <em style={{ fontStyle: "italic", fontWeight: 400, color: "#8BBDE8" }}>Enduring Value</em> Across Our <em style={{ fontStyle: "italic", fontWeight: 400, color: "#8BBDE8" }}>Portfolio</em></h1>
          <p style={{ fontFamily: SANS, fontSize: 19, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontWeight: 300, maxWidth: 880, marginBottom: 40 }}>Over 45 years and 190+ investments, WCAS has partnered with management teams across technology and healthcare to build market-leading companies.</p>
        </div>
      </section>

      <section style={{ background: BG, padding: "64px 64px 64px" }}>
        <Fade><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <p style={{ fontSize: 26, fontWeight: 400, color: "#fff", lineHeight: 1.55 }}>We focus exclusively on technology and healthcare — two sectors where deep domain expertise creates a measurable edge. Our portfolio spans enterprise software, data & analytics, healthcare IT, and tech-enabled services.</p>
          <p style={{ fontSize: 26, fontWeight: 400, color: "#fff", lineHeight: 1.55 }}>Every partnership starts with a shared vision for growth. We combine hands-on operational support with sector knowledge built over decades to help our companies scale, innovate, and lead their markets.</p>
        </div></Fade>
      </section>

    </div>
  );
}
