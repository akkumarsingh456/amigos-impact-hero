import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, useCallback } from "react";
import logoAsset from "@/assets/inamigos-logo.asset.json";
import { GALLERY, PROJECT_PHOTOS } from "@/lib/gallery";
import {
  ArrowRight, Users, ShieldCheck, Sprout, UtensilsCrossed, GraduationCap,
  PawPrint, Baby, Target, Eye, Menu, X, Award, FileCheck2, Building2,
  Globe2, Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter,
  Youtube, Handshake, BookOpen, Wallet, Star, ChevronLeft, ChevronRight,
  CheckCircle2, Heart, Sparkles, Leaf, Briefcase, TrendingUp, Camera,
} from "lucide-react";

const VOLUNTEER_FORM = "https://forms.gle/AB4c1hLaDDmtrKGU7";
const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/inamigos-foundation",
  instagram: "https://instagram.com/inamigos?utm_medium=copy_link",
  facebook: "https://www.facebook.com/share/1CeyCkB3uL/",
  twitter: "https://twitter.com/InamigosF?s=08",
  youtube: "https://youtube.com/@inamigosfoundation?si=lcyRib3x-bScUF5M",
};

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "InAmigos Foundation | Uniting Minds For Change" },
      { name: "description", content: "Section 8 registered, ISO 9001:2015 certified NGO. 50,000+ meals, 30,000+ interns trained, 20,000+ trees planted across India." },
      { property: "og:title", content: "InAmigos Foundation | Uniting Minds For Change" },
      { property: "og:description", content: "Government licensed non-profit driving impact through Seva, Udaan, Jeev, Prakriti, Bachpanshala and Vikas." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `https://inamigos.org${logoAsset.url}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function HomePage() {
  return (
    <div className="relative min-h-screen bg-white text-[var(--ink)] overflow-x-hidden">
      <LogoWatermark />
      <HeroIntro />
      <Nav />
      <Hero />
      <TrustBar />
      <About />
      <Projects />
      <Stats />
      <WhyTrust />
      <Internships />
      <StayConnected />
      <FinalCTA />
      <Footer />
    </div>
  );
}

// ---------- Watermark ----------
function LogoWatermark() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.04]"
      style={{
        backgroundImage: `url(${logoAsset.url})`,
        backgroundRepeat: "repeat",
        backgroundSize: "180px",
      }}
    />
  );
}

// ---------- Hero Intro (10s) ----------
function HeroIntro() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("hero_seen")) {
      setHidden(true);
      return;
    }
    const t = setTimeout(() => {
      sessionStorage.setItem("hero_seen", "1");
      setHidden(true);
    }, 9800);
    return () => clearTimeout(t);
  }, []);
  if (hidden) return null;

  const photos = GALLERY.slice(0, 6);
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center text-white"
      style={{ animation: "hero-fade-out 10s ease forwards", background: "linear-gradient(135deg, #0D1B2A 0%, #1a0f2e 50%, #4a0f1a 100%)" }}
    >
      {/* floating photos */}
      {photos.map((src, i) => {
        const positions = [
          { top: "8%", left: "6%", size: 140, delay: 0.4 },
          { top: "12%", right: "8%", size: 170, delay: 0.7 },
          { top: "55%", left: "4%", size: 130, delay: 1.0 },
          { top: "60%", right: "6%", size: 150, delay: 1.3 },
          { top: "78%", left: "22%", size: 110, delay: 1.6 },
          { top: "80%", right: "24%", size: 120, delay: 1.9 },
        ][i];
        return (
          <img
            key={i}
            src={src}
            alt=""
            className="absolute rounded-2xl object-cover shadow-2xl ring-4 ring-white/20"
            style={{
              ...positions,
              width: positions.size,
              height: positions.size,
              opacity: 0,
              animation: `scale-pop 1s ease ${positions.delay}s forwards, bob 4s ease-in-out ${positions.delay + 1}s infinite`,
            }}
          />
        );
      })}

      {/* Particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/40"
          style={{
            width: 4, height: 4,
            left: `${(i * 37) % 100}%`,
            animation: `particle ${6 + (i % 5)}s linear ${i * 0.3}s infinite`,
          }}
        />
      ))}

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center px-6">
        <img
          src={logoAsset.url}
          alt="InAmigos"
          className="h-28 md:h-36 w-auto"
          style={{ animation: "scale-pop 1.2s ease forwards" }}
        />
        <h1
          className="text-4xl md:text-6xl font-black tracking-tight"
          style={{ opacity: 0, animation: "rise-in 0.9s ease 1.6s forwards" }}
        >
          Uniting Minds<br />
          <span className="bg-gradient-to-r from-[#F77F00] to-[#E63946] bg-clip-text text-transparent">
            For Change
          </span>
        </h1>
        <p
          className="text-lg md:text-xl text-white/80 max-w-xl"
          style={{ opacity: 0, animation: "rise-in 0.9s ease 2.4s forwards" }}
        >
          Section 8 · ISO 9001:2015 · Government Licensed
        </p>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4"
          style={{ opacity: 0, animation: "rise-in 0.9s ease 3.4s forwards" }}
        >
          {[
            ["50K+", "Meals"],
            ["30K+", "Interns"],
            ["20K+", "Trees"],
            ["900+", "Women"],
          ].map(([n, l]) => (
            <div key={l} className="rounded-xl bg-white/10 backdrop-blur px-4 py-3 border border-white/20">
              <div className="text-2xl md:text-3xl font-black text-[#FFA500]">{n}</div>
              <div className="text-xs uppercase tracking-widest text-white/70">{l}</div>
            </div>
          ))}
        </div>

        <button
          onClick={() => { sessionStorage.setItem("hero_seen", "1"); setHidden(true); }}
          className="mt-6 text-sm text-white/60 hover:text-white underline underline-offset-4"
          style={{ opacity: 0, animation: "rise-in 0.9s ease 4.5s forwards" }}
        >
          Skip intro →
        </button>
      </div>
    </div>
  );
}

// ---------- Nav ----------
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    ["Home", "#home"], ["About", "#about"], ["Projects", "#projects"],
    ["Trust", "#trust"], ["Internships", "#internships"], ["Connect", "#connect"], ["Contact", "#contact"],
  ];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-white/95 shadow-lg backdrop-blur-md" : "bg-white/70 backdrop-blur"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#home" className="flex items-center gap-2 min-w-0">
          <img src={logoAsset.url} alt="InAmigos" className="h-10 w-auto shrink-0" />
          <span className="hidden sm:inline font-black text-lg truncate">InAmigos</span>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="hover:text-[#E63946] transition">{l}</a>
          ))}
        </nav>
        <a
          href={VOLUNTEER_FORM}
          target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E63946] to-[#F77F00] px-5 py-2.5 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition"
        >
          Volunteer <ArrowRight size={16} />
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden shrink-0" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        {open && (
          <nav className="absolute top-16 left-0 right-0 bg-white shadow-xl lg:hidden border-t">
            <div className="flex flex-col p-4 gap-3">
              {links.map(([l, h]) => (
                <a key={h} href={h} onClick={() => setOpen(false)} className="py-2 border-b border-gray-100 font-semibold">{l}</a>
              ))}
              <a href={VOLUNTEER_FORM} target="_blank" rel="noopener noreferrer" className="mt-2 rounded-full bg-gradient-to-r from-[#E63946] to-[#F77F00] px-5 py-3 text-center font-bold text-white">
                Volunteer
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

// ---------- Hero ----------
function Hero() {
  return (
    <section id="home" className="relative z-10 pt-32 pb-20 px-5 md:px-8 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-20 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #F77F00 0%, transparent 70%)", animation: "float-slow 12s ease-in-out infinite" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-40 w-[500px] h-[500px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #1976D2 0%, transparent 70%)", animation: "drift 15s ease-in-out infinite" }}
      />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E63946]/10 border border-[#E63946]/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#E63946] mb-6">
            <Sparkles size={14} /> Section 8 · ISO 9001:2015 · Est. 2020
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            Uniting Minds <br />
            <span className="bg-gradient-to-r from-[#E63946] via-[#F77F00] to-[#FFA500] bg-clip-text text-transparent">For Change</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-8 leading-relaxed">
            Government licensed non-profit driving lasting social impact across India — through education, animal welfare, women empowerment, sustainability and skill-building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={VOLUNTEER_FORM} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E63946] to-[#F77F00] px-8 py-4 font-bold text-white shadow-xl animate-glow-pulse"
            >
              Start your journey <ArrowRight size={20} />
            </a>
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--ink)] px-8 py-4 font-bold hover:bg-[var(--ink)] hover:text-white transition">
              Explore projects
            </a>
          </div>
        </div>

        {/* Photo mosaic */}
        <div className="relative h-[500px] hidden lg:block">
          {GALLERY.slice(0, 5).map((src, i) => {
            const styles = [
              { top: 0, left: 40, w: 200, h: 260, rot: -4 },
              { top: 30, right: 0, w: 240, h: 200, rot: 3 },
              { bottom: 40, left: 0, w: 220, h: 220, rot: 2 },
              { bottom: 0, right: 60, w: 200, h: 240, rot: -3 },
              { top: 200, left: 180, w: 180, h: 180, rot: 5 },
            ][i];
            return (
              <img
                key={i} src={src} alt=""
                className="absolute rounded-2xl object-cover shadow-2xl ring-4 ring-white"
                style={{ ...styles, width: styles.w, height: styles.h, transform: `rotate(${styles.rot}deg)`, animation: `bob ${4 + i}s ease-in-out ${i * 0.3}s infinite` }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------- Trust Bar ----------
function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: "Section 8" },
    { icon: Award, label: "ISO 9001:2015" },
    { icon: FileCheck2, label: "80G & 12A" },
    { icon: Building2, label: "CSR-1" },
    { icon: Globe2, label: "NITI Aayog" },
  ];
  return (
    <section className="relative z-10 bg-[var(--ink)] text-white py-6 px-5 md:px-8 border-y-4 border-[#F77F00]">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
            <Icon size={18} className="text-[#F77F00]" /> {label}
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- About ----------
function About() {
  return (
    <section id="about" className="relative z-10 py-24 px-5 md:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1976D2]/10 text-[#1976D2] text-xs font-bold uppercase tracking-widest mb-4">About us</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">Founded on impact.<br />Built for India.</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            InAmigos Foundation, founded on <b>September 23, 2020</b> by <b>Mr. Govind Shukla</b> (Founder & CEO), is a Section 8 registered non-profit committed to lasting social change. Based in Chhattisgarh, we operate across India through a network of dedicated professionals and volunteers.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border-2 border-[#E63946]/20 bg-[#E63946]/5 p-5">
              <Target className="text-[#E63946] mb-2" size={28} />
              <h3 className="font-black mb-1">Mission</h3>
              <p className="text-sm text-gray-600">Empower marginalized communities through education, welfare and sustainable livelihood.</p>
            </div>
            <div className="rounded-2xl border-2 border-[#06A77D]/20 bg-[#06A77D]/5 p-5">
              <Eye className="text-[#06A77D] mb-2" size={28} />
              <h3 className="font-black mb-1">Vision</h3>
              <p className="text-sm text-gray-600">An inclusive, compassionate and empowered society where every citizen thrives.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {GALLERY.slice(6, 10).map((src, i) => (
            <img key={i} src={src} alt="" className={`rounded-2xl object-cover shadow-xl w-full ${i % 2 === 0 ? "h-64" : "h-52 mt-8"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Projects ----------
const PROJECTS = [
  { key: "seva", title: "Project Seva", tag: "SEVA", icon: UtensilsCrossed, stat: "50,000+ Meals Distributed", color: "#E63946", desc: "Daily meal distribution in slums and orphanages, dry ration kits for low-income families, and community kitchens during festivals and emergencies." },
  { key: "udaan", title: "Project Udaan", tag: "UDAAN", icon: GraduationCap, stat: "900+ Women Empowered", color: "#7209B7", desc: "Financial independence, skill development and menstrual hygiene awareness in partnership with rural self-help groups." },
  { key: "jeev", title: "Project Jeev", tag: "JEEV", icon: PawPrint, stat: "50+ Animals Fed Daily", color: "#06A77D", desc: "Feeding, care and medical support for street animals — because compassion has no species." },
  { key: "prakriti", title: "Project Prakriti", tag: "PRAKRITI", icon: Leaf, stat: "20,000+ Trees Planted", color: "#4CAF50", desc: "Tree plantation drives, cleanliness campaigns and eco-friendly agriculture support for a greener tomorrow." },
  { key: "bachpanshala", title: "Project Bachpanshala", tag: "BACHPANSHALA", icon: Baby, stat: "Educating Rural Children", color: "#F77F00", desc: "Digital literacy, life skills and school-education support — building foundations for lifelong opportunity." },
  { key: "vikas", title: "Project Vikas", tag: "VIKAS", icon: Briefcase, stat: "30,000+ Interns Trained", color: "#1976D2", desc: "Internships in data operations, finance, research, content, digital marketing and social work — building India's future workforce." },
] as const;

function Projects() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section id="projects" className="relative z-10 py-24 px-5 md:px-8 bg-gradient-to-b from-white to-[#F0F4F8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E63946]/10 text-[#E63946] text-xs font-bold uppercase tracking-widest mb-4">Impactful Projects</span>
          <h2 className="text-4xl md:text-5xl font-black">Six missions. One movement.</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Click any project to view the field gallery.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => {
            const photos = PROJECT_PHOTOS[p.key] ?? [];
            const Icon = p.icon;
            return (
              <button
                key={p.key} onClick={() => setActive(p.key)}
                className="group text-left rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-52 overflow-hidden" style={{ background: p.color }}>
                  {photos[0] && (
                    <img src={photos[0]} alt={p.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                  )}
                  <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${p.color}00 40%, ${p.color}CC 100%)` }} />
                  <div className="absolute top-4 left-4 grid place-items-center w-12 h-12 rounded-2xl bg-white/20 backdrop-blur ring-2 ring-white/40">
                    <Icon className="text-white" size={22} />
                  </div>
                  <span className="absolute top-4 right-4 rounded-full bg-black/40 backdrop-blur px-3 py-1 text-[10px] font-black text-white tracking-widest">{p.tag}</span>
                  <span className="absolute bottom-4 right-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-gray-800">
                    <Camera size={12} /> {photos.length} photos
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black mb-1">{p.title}</h3>
                  <p className="text-sm font-bold mb-3" style={{ color: p.color }}>{p.stat}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold" style={{ color: p.color }}>
                    View gallery <ArrowRight size={16} />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      {active && (
        <Lightbox
          title={PROJECTS.find((p) => p.key === active)!.title}
          photos={PROJECT_PHOTOS[active] ?? []}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}

function Lightbox({ title, photos, onClose }: { title: string; photos: string[]; onClose: () => void }) {
  const [i, setI] = useState(0);
  const prev = useCallback(() => setI((v) => (v - 1 + photos.length) % photos.length), [photos.length]);
  const next = useCallback(() => setI((v) => (v + 1) % photos.length), [photos.length]);
  useEffect(() => {
    const on = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", on);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", on); document.body.style.overflow = ""; };
  }, [onClose, prev, next]);
  return (
    <div className="fixed inset-0 z-[200] bg-black/95 flex flex-col p-4" onClick={onClose}>
      <div className="flex justify-between items-center text-white mb-4" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-xl md:text-2xl font-black">{title} <span className="text-white/50 text-sm font-normal ml-2">{i + 1} / {photos.length}</span></h3>
        <button onClick={onClose} className="p-2 rounded-full bg-white/10 hover:bg-white/20"><X size={22} /></button>
      </div>
      <div className="flex-1 flex items-center justify-center relative min-h-0" onClick={(e) => e.stopPropagation()}>
        <button onClick={prev} className="absolute left-2 md:left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-10"><ChevronLeft size={28} /></button>
        <img src={photos[i]} alt="" className="max-h-full max-w-full object-contain rounded-xl" />
        <button onClick={next} className="absolute right-2 md:right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-10"><ChevronRight size={28} /></button>
      </div>
      <div className="mt-4 flex gap-2 justify-center overflow-x-auto" onClick={(e) => e.stopPropagation()}>
        {photos.map((p, idx) => (
          <button key={idx} onClick={() => setI(idx)} className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden ring-2 transition ${idx === i ? "ring-[#F77F00]" : "ring-white/20 opacity-60 hover:opacity-100"}`}>
            <img src={p} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

// ---------- Stats ----------
function useCountUp(target: number, dur = 1600) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            setVal(Math.floor(p * target));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target, dur]);
  return { val, ref };
}

function StatItem({ target, suffix, label, Icon, color }: any) {
  const { val, ref } = useCountUp(target);
  return (
    <div ref={ref} className="text-center">
      <Icon size={36} className="mx-auto mb-3" style={{ color }} />
      <div className="text-4xl md:text-5xl font-black" style={{ color }}>{val.toLocaleString()}{suffix}</div>
      <div className="mt-1 text-sm font-bold uppercase tracking-widest text-white/70">{label}</div>
    </div>
  );
}

function Stats() {
  return (
    <section className="relative z-10 py-20 px-5 md:px-8 bg-[var(--ink)] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <StatItem target={50000} suffix="+" label="Meals" Icon={UtensilsCrossed} color="#F77F00" />
        <StatItem target={30000} suffix="+" label="Interns" Icon={Briefcase} color="#4CAF50" />
        <StatItem target={20000} suffix="+" label="Trees" Icon={Leaf} color="#06A77D" />
        <StatItem target={900} suffix="+" label="Women" Icon={Heart} color="#E63946" />
      </div>
    </section>
  );
}

// ---------- Why Trust ----------
function WhyTrust() {
  const items = [
    { t: "Licensed by Central Government (Section 8, MCA)" },
    { t: "80G and 12A certified — donations are tax deductible" },
    { t: "ISO 9001:2015 certified (IAF accredited)" },
    { t: "CSR-1 registered — CSR00083159" },
    { t: "NGO DARPAN registered by NITI Aayog (CG/2021/0295684)" },
    { t: "Trademarked brand — logo & name approved by Government" },
    { t: "Monthly GST filings, annual auditing, transparent books" },
    { t: "₹30,000 contributed to PM CARES in our founding year" },
  ];
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const wrap = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!wrap.current) return;
    const nodes = wrap.current.querySelectorAll<HTMLElement>("[data-idx]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible((v) => new Set(v).add(Number((e.target as HTMLElement).dataset.idx)));
        }
      });
    }, { threshold: 0.2 });
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return (
    <section id="trust" className="relative z-10 py-24 px-5 md:px-8 bg-[#0D1B2A] text-white overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url(${logoAsset.url})`, backgroundSize: "500px", backgroundRepeat: "no-repeat", backgroundPosition: "left center" }}
      />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest mb-4">Credentials</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Why trust us?</h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Every rupee, every hour and every certificate is documented. InAmigos Foundation operates with complete transparency and government-verified accountability.
          </p>
          <div className="inline-flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-5 py-3">
            <ShieldCheck className="text-[#06A77D]" />
            <div className="text-sm">
              <div className="font-black">CIN</div>
              <div className="text-white/60 font-mono text-xs">U85300CT2020NPL010641</div>
            </div>
          </div>
        </div>
        <div ref={wrap} className="space-y-3">
          {items.map((it, i) => (
            <div
              key={i} data-idx={i}
              className={`flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 px-5 py-4 hover:-translate-y-1 hover:bg-white/10 transition ${visible.has(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms, background 0.3s` }}
            >
              <CheckCircle2 className="text-[#06A77D] shrink-0" size={22} />
              <span className="text-sm md:text-base">{it.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Internships ----------
const INTERNSHIPS = [
  { t: "Content Writing", Icon: BookOpen, c: "#E63946" },
  { t: "Graphic Design", Icon: Sparkles, c: "#7209B7" },
  { t: "Field Volunteer", Icon: Heart, c: "#06A77D" },
  { t: "Community Manager", Icon: Users, c: "#F77F00" },
  { t: "Community Teacher", Icon: GraduationCap, c: "#1976D2" },
  { t: "Social Entrepreneur", Icon: Handshake, c: "#4CAF50" },
  { t: "Fundraising", Icon: Wallet, c: "#E63946" },
  { t: "Social Work", Icon: Users, c: "#1976D2" },
];

function Internships() {
  return (
    <section id="internships" className="relative z-10 py-24 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F0F4F8] text-xs font-bold uppercase tracking-widest mb-4">Grow with us</span>
          <h2 className="text-4xl md:text-5xl font-black">Internship Opportunities</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">1–3 month programs with certificate from a government-licensed, ISO-certified NGO.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {INTERNSHIPS.map(({ t, Icon, c }) => (
            <div key={t} className="rounded-2xl border border-gray-200 p-5 bg-white hover:shadow-xl hover:-translate-y-1 transition">
              <div className="w-11 h-11 rounded-xl grid place-items-center mb-4 text-white" style={{ background: c }}>
                <Icon size={20} />
              </div>
              <h3 className="font-black">{t}</h3>
              <p className="text-xs font-bold text-gray-500 mt-1 uppercase tracking-widest">1–3 Months · Certificate</p>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-[#F0F4F8] to-white p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-black mb-4">Why our certificate matters</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              {["Association with a CSR-1 registered, ISO 9001:2015 certified, Central Government licensed NGO.",
                "Recognised globally by institutions and CSR departments.",
                "Strengthens your resume for NGOs, CSR projects and social enterprises.",
                "Real fieldwork with 30,000+ alumni across India."].map((x) => (
                <li key={x} className="flex gap-2"><CheckCircle2 size={18} className="text-[#06A77D] shrink-0 mt-0.5" /> {x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[var(--ink)] text-white p-8 text-center">
            <h4 className="text-2xl font-black mb-3">Apply now</h4>
            <p className="text-white/70 mb-6 text-sm">One form. Reviewed by our team within 48 hours.</p>
            <a
              href={VOLUNTEER_FORM} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E63946] to-[#F77F00] px-8 py-4 font-bold shadow-xl hover:scale-105 transition"
            >
              Open application form <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Stay Connected ----------
function StayConnected() {
  const items = [
    { name: "LinkedIn", url: SOCIALS.linkedin, Icon: Linkedin, c: "#0A66C2", handle: "inamigos-foundation" },
    { name: "Instagram", url: SOCIALS.instagram, Icon: Instagram, c: "#E4405F", handle: "@inamigos" },
    { name: "Facebook", url: SOCIALS.facebook, Icon: Facebook, c: "#1877F2", handle: "InAmigos Foundation" },
    { name: "Twitter / X", url: SOCIALS.twitter, Icon: Twitter, c: "#0F1419", handle: "@InamigosF" },
    { name: "YouTube", url: SOCIALS.youtube, Icon: Youtube, c: "#FF0000", handle: "@inamigosfoundation" },
  ];
  return (
    <section id="connect" className="relative z-10 py-24 px-5 md:px-8 bg-gradient-to-br from-[#F0F4F8] via-white to-[#F0F4F8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1976D2]/10 text-[#1976D2] text-xs font-bold uppercase tracking-widest mb-4">Stay Connected</span>
          <h2 className="text-4xl md:text-5xl font-black">Follow the movement</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Get updates on career opportunities, campaigns and events.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {items.map(({ name, url, Icon, c, handle }) => (
            <a
              key={name} href={url} target="_blank" rel="noopener noreferrer"
              className="group rounded-3xl bg-white border border-gray-100 p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              <div
                className="w-14 h-14 rounded-2xl grid place-items-center mb-4 text-white group-hover:scale-110 transition"
                style={{ background: c }}
              >
                <Icon size={26} />
              </div>
              <h3 className="font-black text-lg">{name}</h3>
              <p className="text-xs text-gray-500 mt-1 truncate">{handle}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold" style={{ color: c }}>
                Follow <ArrowRight size={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Final CTA ----------
function FinalCTA() {
  return (
    <section className="relative z-10 py-24 px-5 md:px-8 bg-gradient-to-br from-[#E63946] via-[#C7254E] to-[#7209B7] text-white overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: `url(${logoAsset.url})`, backgroundSize: "400px", backgroundRepeat: "no-repeat", backgroundPosition: "right -100px center" }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <TrendingUp size={44} className="mx-auto mb-6 text-[#FFA500]" />
        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Join us in making a difference</h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Volunteer, partner or donate — every contribution builds a more inclusive, compassionate and empowered India.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href={VOLUNTEER_FORM} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#E63946] px-8 py-4 font-black shadow-xl hover:scale-105 transition">
            Volunteer with us <ArrowRight size={20} />
          </a>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white text-white px-8 py-4 font-black hover:bg-white/10 transition">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer id="contact" className="relative z-10 bg-[#0D1B2A] text-white pt-16 pb-8 px-5 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src={logoAsset.url} alt="InAmigos" className="h-12 w-auto" />
            <div>
              <div className="font-black text-lg">InAmigos Foundation</div>
              <div className="text-xs text-white/60">Uniting Minds For Change</div>
            </div>
          </div>
          <p className="text-white/70 text-sm max-w-md leading-relaxed">
            Section 8 registered, ISO 9001:2015 certified, government-licensed non-profit driving measurable social impact across India since 2020.
          </p>
          <div className="flex gap-3 mt-6">
            {[{ Icon: Linkedin, url: SOCIALS.linkedin }, { Icon: Instagram, url: SOCIALS.instagram }, { Icon: Facebook, url: SOCIALS.facebook }, { Icon: Twitter, url: SOCIALS.twitter }, { Icon: Youtube, url: SOCIALS.youtube }].map(({ Icon, url }, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full grid place-items-center bg-white/10 hover:bg-[#E63946] transition">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-black mb-4 text-sm uppercase tracking-widest">Explore</h3>
          <ul className="space-y-2 text-sm text-white/70">
            {[["Home", "#home"], ["About", "#about"], ["Projects", "#projects"], ["Trust", "#trust"], ["Internships", "#internships"], ["Connect", "#connect"]].map(([l, h]) => (
              <li key={h}><a href={h} className="hover:text-white transition">{l}</a></li>
            ))}
            <li><a href={VOLUNTEER_FORM} target="_blank" rel="noopener noreferrer" className="text-[#F77F00] hover:text-white transition font-bold">Volunteer Form →</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-black mb-4 text-sm uppercase tracking-widest">Contact</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2">
              <MapPin size={16} className="shrink-0 mt-0.5 text-[#F77F00]" />
              <span>Ward No. 5, Gram Post,<br />Sipat Ujwal Nagar,<br />Bilaspur, Chhattisgarh<br />495555</span>
            </li>
            <li>
              <a href="mailto:inamigosfoundation@gmail.com" className="flex items-center gap-2 hover:text-white transition">
                <Mail size={16} className="text-[#F77F00]" /> inamigosfoundation@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+916267309902" className="flex items-center gap-2 hover:text-white transition">
                <Phone size={16} className="text-[#F77F00]" /> +91 626 730 9902
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-6 text-center text-xs text-white/50">
        <p>© {new Date().getFullYear()} InAmigos Foundation. All rights reserved. · CIN: U85300CT2020NPL010641 · CSR-1: CSR00083159</p>
      </div>
    </footer>
  );
}
