import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logoAsset from "@/assets/inamigos-logo.asset.json";
import {
  ArrowRight,
  HeartHandshake,
  Users,
  ShieldCheck,
  Sprout,
  UtensilsCrossed,
  GraduationCap,
  PawPrint,
  Baby,
  Target,
  Eye,
  Menu,
  X,
  Award,
  FileCheck2,
  Building2,
  Globe2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Pencil,
  Palette,
  Megaphone,
  Handshake,
  BookOpen,
  Wallet,
  Quote,
  Star,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X as XIcon,
  CheckCircle2,
  Zap,
  TrendingUp,
  Lock,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "InAmigos Foundation | Uniting Minds For Change" },
      {
        name: "description",
        content:
          "Government licensed, ISO 9001:2015 certified NGO empowering communities across India through Seva, Udaan, Jeev, Prakriti and Bachpanshala.",
      },
    ],
  }),
});

// ---------- ENHANCED HERO INTRO (10s CSS animation with particles) ----------
function HeroIntro({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 10000);
    return () => clearTimeout(t);
  }, [onDone]);

  const particles = Array.from({ length: 100 });

  return (
    <div
      className="fixed inset-0 z-[100] overflow-hidden text-white"
      style={{
        background: "linear-gradient(135deg, #0D1B2A, #1A2542, #3a1e40)",
        animation: "hero-bg 10s ease-in-out forwards, hero-fade-out 10.6s ease-in forwards",
      }}
    >
      {/* Logo watermark background - subtle */}
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('${logoAsset.url}')`,
          backgroundSize: "300px 300px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Enhanced blobs with more complex gradients */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, #06A77D, #06A77D80, transparent 70%)",
          animation: "float-slow 12s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-24 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, #E63946, #E6394680, transparent 70%)",
          animation: "drift 14s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #7209B7, #7209B780, transparent 70%)",
          animation: "float-medium 15s ease-in-out infinite",
        }}
      />

      {/* Enhanced particles */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((_, i) => {
          const left = (i * 23) % 100;
          const delay = (i % 15) * 0.3;
          const dur = 6 + (i % 8);
          const size = 1 + (i % 5);
          return (
            <span
              key={i}
              className="absolute rounded-full bg-white/80"
              style={{
                left: `${left}%`,
                bottom: "-30px",
                width: size,
                height: size,
                animation: `particle ${dur}s linear ${delay}s infinite`,
                boxShadow: "0 0 10px rgba(255,255,255,0.6)",
              }}
            />
          );
        })}
      </div>

      {/* Skip button */}
      <button
        onClick={onDone}
        className="absolute right-5 top-5 z-10 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide backdrop-blur-md transition hover:bg-white/20 hover:border-white/50"
        style={{ animation: "rise-in 0.6s ease-out 2s both" }}
      >
        Skip intro
      </button>

      <div className="relative z-[1] mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        {/* Logo + title */}
        <img
          src={logoAsset.url}
          alt="InAmigos Foundation"
          className="h-24 w-auto md:h-32"
          style={{ animation: "rise-in 0.9s ease-out 0.3s both, glow-pulse 2.5s ease-in-out 0.3s infinite" }}
        />
        <h1
          className="mt-4 text-4xl font-extrabold md:text-6xl drop-shadow-lg"
          style={{ animation: "scale-pop 0.8s ease-out 1s both" }}
        >
          InAmigos Foundation
        </h1>
        <p
          className="mt-3 text-lg italic md:text-2xl drop-shadow-md"
          style={{ color: "#4dd6e6", animation: "slide-b 0.8s ease-out 2s both" }}
        >
          Uniting Minds For Change
        </p>

        {/* Three pillars */}
        <div className="mt-10 grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          <Pillar delay={2.3} color="#E63946" icon={<HeartHandshake className="h-6 w-6" />} value="50,000+" label="Lives Impacted" />
          <Pillar delay={3.1} color="#F77F00" icon={<Users className="h-6 w-6" />} value="1,00,000+" label="Interns Trained" />
          <Pillar delay={3.9} color="#1976D2" icon={<ShieldCheck className="h-6 w-6" />} value="Gov." label="Licensed & Certified" />
        </div>

        {/* Connecting line */}
        <div
          className="mt-6 h-[3px] w-full max-w-3xl origin-left rounded-full"
          style={{
            background: "linear-gradient(90deg,#E63946,#F77F00,#1976D2)",
            animation: "line-grow 0.9s ease-out 4.5s both",
            boxShadow: "0 0 20px rgba(230,57,70,0.6)",
          }}
        />

        {/* Projects mini cards */}
        <div className="pointer-events-none absolute inset-x-0 bottom-24 mx-auto grid max-w-5xl grid-cols-2 gap-3 px-6 md:grid-cols-4">
          <MiniProject delay={5.3} name="SEVA" desc="50,000+ Meals" color="#E63946" anim="slide-l" />
          <MiniProject delay={5.7} name="UDAAN" desc="900+ Women" color="#7209B7" anim="slide-t" />
          <MiniProject delay={6.1} name="JEEV" desc="50+ Animals Daily" color="#06A77D" anim="slide-r" />
          <MiniProject delay={6.5} name="PRAKRITI" desc="20,000+ Trees" color="#2D6A4F" anim="slide-b" />
        </div>

        {/* CTA finale */}
        <div className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-2">
          <p
            className="text-sm text-white/80"
            style={{ animation: "rise-in 0.6s ease-out 8.5s both" }}
          >
            Join 1,00,000+ interns making a difference
          </p>
          <button
            onClick={onDone}
            className="animate-glow-pulse relative rounded-full px-8 py-4 text-base font-bold tracking-wide shadow-2xl hover:shadow-lg transition"
            style={{
              background: "linear-gradient(90deg,#E63946,#F77F00)",
              animation: "scale-pop 0.6s ease-out 8s both, glow-pulse 2s ease-in-out 8.6s infinite",
            }}
          >
            🚀 START YOUR JOURNEY TODAY <ArrowRight className="ml-2 inline h-5 w-5" />
          </button>
          <p
            className="text-xs tracking-[0.3em] text-white/70"
            style={{ animation: "rise-in 0.6s ease-out 9s both" }}
          >
            EXPLORE • VOLUNTEER • GROW • IMPACT
          </p>
        </div>
      </div>
    </div>
  );
}

function Pillar({ delay, color, icon, value, label }: { delay: number; color: string; icon: React.ReactNode; value: string; label: string }) {
  return (
    <div
      className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md transition hover:bg-white/20 hover:border-white/40"
      style={{ animation: `scale-pop 0.6s ease-out ${delay}s both` }}
    >
      <div className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: color, boxShadow: `0 0 15px ${color}80` }}>
        {icon}
      </div>
      <div className="text-left">
        <div className="text-2xl font-extrabold leading-none">{value}</div>
        <div className="text-xs uppercase tracking-widest text-white/80">{label}</div>
      </div>
    </div>
  );
}

function MiniProject({ delay, name, desc, color, anim }: { delay: number; name: string; desc: string; color: string; anim: string }) {
  return (
    <div
      className="rounded-xl border-2 bg-black/40 px-4 py-3 backdrop-blur-md transition hover:bg-black/60"
      style={{
        borderColor: color,
        animation: `${anim} 0.7s ease-out ${delay}s both, bob 3.5s ease-in-out ${delay + 1.7}s infinite`,
        boxShadow: `0 0 15px ${color}40`,
      }}
    >
      <div className="text-sm font-extrabold tracking-widest" style={{ color }}>
        {name}
      </div>
      <div className="text-xs text-white/85">{desc}</div>
    </div>
  );
}

// ---------- MAIN PAGE ----------
function HomePage() {
  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("inamigos_intro_seen");
    if (seen) setShowIntro(false);
  }, []);
  const dismiss = () => {
    sessionStorage.setItem("inamigos_intro_seen", "1");
    setShowIntro(false);
  };
  return (
    <div className="min-h-screen bg-background text-foreground" style={{
      backgroundImage: `url('${logoAsset.url}')`,
      backgroundSize: "600px 600px",
      backgroundPosition: "right bottom",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundBlendMode: "overlay",
    }}>
      <style>{`
        body { background-color: rgba(255,255,255,0.98); }
      `}</style>
      {showIntro && <HeroIntro onDone={dismiss} />}
      <Nav />
      <Hero />
      <TrustBar />
      <MissionVision />
      <Projects />
      <Stats />
      <WhyTrust />
      <Team />
      <Internships />
      <Testimonials />
      <SocialLinks />
      <FinalCTA />
      <Footer />
    </div>
  );
}

// ---------- NAV ----------
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
    ["Home", "#home"],
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Team", "#team"],
    ["Internships", "#internships"],
    ["Contact", "#contact"],
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-white/95 shadow-lg backdrop-blur-md" : "bg-white/70 backdrop-blur"}`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition">
          <img src={logoAsset.url} alt="InAmigos" className="h-10 w-auto rounded-md bg-gradient-to-br from-brand-red to-brand-orange p-1" />
          <span className="text-lg font-bold text-ink">InAmigos</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="text-sm font-medium text-ink/80 transition hover:text-brand-red">
              {l}
            </a>
          ))}
          <a
            href="#internships"
            className="rounded-full px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:scale-105"
            style={{ background: "linear-gradient(90deg,#E63946,#F77F00)" }}
          >
            Join Us
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map(([l, h]) => (
              <a key={l} href={h} onClick={() => setOpen(false)} className="text-sm font-medium text-ink">
                {l}
              </a>
            ))}
            <a
              href="#internships"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full px-5 py-2 text-center text-sm font-semibold text-white"
              style={{ background: "linear-gradient(90deg,#E63946,#F77F00)" }}
            >
              Join Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ---------- HERO STATIC ----------
function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-16"
      style={{ background: "linear-gradient(135deg,#0D1B2A 0%,#1A2542 55%,#3a1e40 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-3"
        style={{
          backgroundImage: `url('${logoAsset.url}')`,
          backgroundSize: "400px 400px",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div
        className="pointer-events-none absolute -top-20 -left-20 h-[500px] w-[500px] rounded-full opacity-35 blur-3xl"
        style={{ background: "radial-gradient(circle,#06A77D,transparent 60%)", animation: "float-slow 12s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-16 h-[600px] w-[600px] rounded-full opacity-35 blur-3xl"
        style={{ background: "radial-gradient(circle,#E63946,transparent 60%)", animation: "drift 14s ease-in-out infinite" }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium tracking-widest text-white/85 backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5" /> GOVERNMENT LICENSED · ISO 9001:2015
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
            Uniting Minds
            <br />
            <span style={{ background: "linear-gradient(90deg,#F77F00,#E63946)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              For Change.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">
            InAmigos Foundation is a Section-8, Central Government licensed NGO founded on 23rd September 2020, working for the betterment of society through food, education, environment, women empowerment and animal welfare.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#internships"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-105"
              style={{ background: "linear-gradient(90deg,#E63946,#F77F00)" }}
            >
              Start your journey <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Explore projects
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 text-white">
            {[
              ["50K+", "Meals"],
              ["20K+", "Trees"],
              ["900+", "Women"],
            ].map(([v, l]) => (
              <div key={l as string}>
                <div className="text-2xl font-extrabold">{v}</div>
                <div className="text-xs uppercase tracking-widest text-white/70">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center">
          <div
            className="absolute inset-0 rounded-[2rem]"
            style={{
              background: "conic-gradient(from 90deg, #E63946, #F77F00, #06A77D, #1976D2, #7209B7, #E63946)",
              filter: "blur(50px)",
              opacity: 0.6,
              animation: "float-slow 10s ease-in-out infinite",
            }}
          />
          <div className="relative rounded-[2rem] border border-white/10 bg-black/70 p-10 backdrop-blur-xl">
            <img src={logoAsset.url} alt="InAmigos Foundation" className="h-56 w-auto md:h-64" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- TRUST BAR ----------
function TrustBar() {
  const items = [
    { icon: <Building2 className="h-4 w-4" />, label: "Section 8 · MCA" },
    { icon: <Award className="h-4 w-4" />, label: "ISO 9001:2015 (IAF)" },
    { icon: <FileCheck2 className="h-4 w-4" />, label: "CSR-1 Registered" },
    { icon: <Globe2 className="h-4 w-4" />, label: "NGO DARPAN · NITI Aayog" },
    { icon: <ShieldCheck className="h-4 w-4" />, label: "80G & 12A Certified" },
  ];
  return (
    <div className="border-y border-secondary bg-gradient-to-r from-blue-50 to-teal-50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-6 text-sm text-ink/75">
        {items.map((i, idx) => (
          <span key={idx} className="inline-flex items-center gap-2 font-medium hover:text-ink transition">
            {i.icon} {i.label}
          </span>
        ))}
      </div>
    </div>
  );
}

// ---------- MISSION VISION ----------
function MissionVision() {
  return (
    <section id="about" className="bg-gradient-to-b from-secondary/40 to-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="About Us" title="Our Mission & Vision" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card
            accent="var(--brand-blue)"
            bg="oklch(0.97 0.03 250)"
            icon={<Target className="h-7 w-7 text-white" />}
            iconBg="var(--brand-blue)"
            title="Our Mission"
            text="To empower underprivileged communities through education, healthcare, environment conservation and skill development — creating sustainable, positive change in society."
          />
          <Card
            accent="var(--brand-green)"
            bg="oklch(0.96 0.05 150)"
            icon={<Eye className="h-7 w-7 text-white" />}
            iconBg="var(--brand-green)"
            title="Our Vision"
            text="A world where every individual has access to opportunities, resources and support to reach their full potential and contribute meaningfully to society."
          />
        </div>
      </div>
    </section>
  );
}

function Card({
  accent,
  bg,
  icon,
  iconBg,
  title,
  text,
}: {
  accent: string;
  bg: string;
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl p-8 shadow-sm transition hover:shadow-md hover:-translate-y-1" style={{ background: bg, borderLeft: `4px solid ${accent}` }}>
      <div className="grid h-14 w-14 place-items-center rounded-xl" style={{ background: iconBg }}>
        {icon}
      </div>
      <h3 className="mt-5 text-2xl font-bold text-ink">{title}</h3>
      <p className="mt-3 text-ink/75">{text}</p>
    </div>
  );
}

// ---------- PROJECTS WITH GALLERY ----------
const PROJECTS = [
  {
    name: "Project Seva",
    tag: "SEVA",
    color: "#E63946",
    icon: <UtensilsCrossed className="h-6 w-6" />,
    stat: "50,000+ Meals Distributed",
    desc: "Daily meal distribution in slums and orphanages, dry ration kits for low-income families, and community kitchens during festivals and emergencies.",
    gallery: Array(6).fill("https://images.unsplash.com/photo-1559027615-cd assisted-serving-food-meal-distribution-charity?w=400&h=300"),
  },
  {
    name: "Project Udaan",
    tag: "UDAAN",
    color: "#7209B7",
    icon: <GraduationCap className="h-6 w-6" />,
    stat: "900+ Girls Empowered",
    desc: "Digital campaigns and on-ground programs empowering girls with awareness, education access and skill-building for a self-reliant future.",
    gallery: Array(6).fill("https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300"),
  },
  {
    name: "Project Jeev",
    tag: "JEEV",
    color: "#06A77D",
    icon: <PawPrint className="h-6 w-6" />,
    stat: "50+ Animals Fed Daily",
    desc: "Feeding, care and medical support for street animals — because compassion has no species.",
    gallery: Array(6).fill("https://images.unsplash.com/photo-1552053831-71594a27c62d?w=400&h=300"),
  },
  {
    name: "Project Prakriti",
    tag: "PRAKRITI",
    color: "#2D6A4F",
    icon: <Sprout className="h-6 w-6" />,
    stat: "20,000+ Trees Planted",
    desc: "Community tree plantation drives, cleanliness campaigns and plastic-free zone promotions for a greener tomorrow.",
    gallery: Array(6).fill("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300"),
  },
  {
    name: "Project Bachpanshala",
    tag: "BACHPANSHALA",
    color: "#F77F00",
    icon: <Baby className="h-6 w-6" />,
    stat: "Educating Rural Children",
    desc: "Bringing books, learning and dignity to children in rural areas — building foundations for lifelong opportunity.",
    gallery: Array(6).fill("https://images.unsplash.com/photo-1427504494785-cdba58dadff0?w=400&h=300"),
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | number>(null);

  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg,#E3F2FD,#ffffff)" }} />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Our Work" title="Impactful Projects" subtitle="Click on any project to see real-world impact and photos." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, idx) => (
            <article
              key={p.tag}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-[0_4px_18px_-8px_rgba(0,0,0,0.15)] transition hover:-translate-y-2 hover:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.25)]"
              onClick={() => setSelectedProject(idx)}
            >
              <div className="relative h-40" style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}aa)` }}>
                <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(circle at 30% 30%, white, transparent 60%)" }} />
                <div className="relative flex h-full items-center justify-between px-6">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/25 text-white backdrop-blur transition group-hover:bg-white/40">
                    {p.icon}
                  </div>
                  <span className="rounded-full bg-black/30 px-3 py-1 text-[10px] font-bold tracking-widest text-white">{p.tag}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ink">{p.name}</h3>
                <p className="mt-1 text-sm font-semibold" style={{ color: p.color }}>
                  {p.stat}
                </p>
                <p className="mt-3 text-sm text-ink/70">{p.desc}</p>
                <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold transition group-hover:translate-x-1" style={{ color: p.color }}>
                  View Gallery <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedProject !== null && (
        <ImageGallery
          project={PROJECTS[selectedProject]}
          onClose={() => setSelectedProject(null)}
          onNext={() => setSelectedProject((p) => (p !== null && p < PROJECTS.length - 1 ? p + 1 : p))}
          onPrev={() => setSelectedProject((p) => (p !== null && p > 0 ? p - 1 : p))}
        />
      )}
    </section>
  );
}

function ImageGallery({
  project,
  onClose,
  onNext,
  onPrev,
}: {
  project: (typeof PROJECTS)[0];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrentImageIndex((i) => (i + 1) % project.gallery.length);
      if (e.key === "ArrowLeft") setCurrentImageIndex((i) => (i - 1 + project.gallery.length) % project.gallery.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, project.gallery.length]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative max-w-4xl w-full">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition"
          aria-label="Close gallery"
        >
          <XIcon className="h-8 w-8" />
        </button>

        {/* Main image */}
        <div className="relative bg-black rounded-lg overflow-hidden">
          <img
            src={project.gallery[currentImageIndex]}
            alt={`${project.name} gallery image ${currentImageIndex + 1}`}
            className="w-full h-auto object-cover max-h-[70vh]"
          />
          <div
            className="absolute top-4 left-4 rounded-full px-4 py-2 text-white text-sm font-bold"
            style={{ background: project.color }}
          >
            {project.tag}
          </div>
        </div>

        {/* Image counter */}
        <div className="mt-4 text-center text-white text-sm">
          {currentImageIndex + 1} / {project.gallery.length}
        </div>

        {/* Thumbnails */}
        <div className="mt-4 flex gap-2 overflow-x-auto">
          {project.gallery.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`relative shrink-0 rounded-lg overflow-hidden border-2 transition ${
                idx === currentImageIndex ? "border-white" : "border-white/30 hover:border-white/50"
              }`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="h-16 w-16 object-cover" />
            </button>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setCurrentImageIndex((i) => (i - 1 + project.gallery.length) % project.gallery.length)}
            className="flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition"
          >
            <ChevronLeft className="h-5 w-5" /> Previous
          </button>
          <button
            onClick={() => setCurrentImageIndex((i) => (i + 1) % project.gallery.length)}
            className="flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition"
          >
            Next <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------- STATS ----------
function useCountUp(target: number, ref: React.RefObject<HTMLElement | null>) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    let started = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const start = performance.now();
          const dur = 1800;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.floor(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target, ref]);
  return val;
}

function StatCard({ value, suffix, label, color }: { value: number; suffix: string; label: string; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const n = useCountUp(value, ref);
  return (
    <div
      ref={ref}
      className="rounded-2xl border-2 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
      style={{ borderColor: color }}
    >
      <div className="text-4xl font-extrabold md:text-5xl" style={{ color }}>
        {n.toLocaleString("en-IN")}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-widest text-ink/70">{label}</div>
    </div>
  );
}

function Stats() {
  return (
    <section className="bg-gradient-to-b from-white to-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="By the numbers" title="Our Impact At A Glance" />
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          <StatCard value={50000} suffix="+" label="Meals" color="#E63946" />
          <StatCard value={100000} suffix="+" label="Interns Trained" color="#1976D2" />
          <StatCard value={900} suffix="+" label="Women Empowered" color="#7209B7" />
          <StatCard value={20000} suffix="+" label="Trees Planted" color="#4CAF50" />
        </div>
      </div>
    </section>
  );
}

// ---------- WHY TRUST US - ENHANCED ----------
function WhyTrust() {
  const points = [
    { icon: <Building2 className="h-5 w-5" />, label: "Licensed by Central Government (Section 8, MCA)" },
    { icon: <CheckCircle2 className="h-5 w-5" />, label: "80G and 12A certified — donations are tax deductible" },
    { icon: <Award className="h-5 w-5" />, label: "ISO 9001:2015 certified (IAF accredited)" },
    { icon: <Zap className="h-5 w-5" />, label: "CSR-1 registered — CSR00083159" },
    { icon: <Globe2 className="h-5 w-5" />, label: "NGO DARPAN registered by NITI Aayog (CG/2021/0295684)" },
    { icon: <Lock className="h-5 w-5" />, label: "Trademarked brand — logo & name approved by Government" },
    { icon: <TrendingUp className="h-5 w-5" />, label: "Monthly GST filings, annual auditing, transparent books" },
    { icon: <Heart className="h-5 w-5" />, label: "₹30,000 contributed to PM CARES fund in our founding year" },
  ];

  return (
    <section className="bg-gradient-to-b from-ink to-ink/95 py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-start">
        <div>
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-widest">CREDENTIALS</span>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">Why trust us?</h2>
          <p className="mt-4 max-w-lg text-white/70">
            Every rupee, every hour and every certificate is documented. InAmigos Foundation operates with complete transparency and government-verified accountability.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["80G Certified", "ISO 9001:2015", "CSR-1 Registered", "Gov. Licensed"].map((badge) => (
              <span key={badge} className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-semibold">
                ✓ {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {points.map((p, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:bg-white/10 hover:border-white/20"
              style={{
                animation: `slide-up 0.5s ease-out ${idx * 0.1}s both`,
              }}
            >
              <div className="flex gap-3">
                <div className="mt-1 text-brand-teal">{p.icon}</div>
                <span className="text-sm leading-relaxed text-white/90">{p.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Heart(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

// ---------- TEAM ----------
const TEAM = [
  { name: "Govind Shukla", role: "Founder — CEO", featured: true },
  { name: "Raman Swarnakar", role: "Chief Operating Officer" },
  { name: "Khush Gupta", role: "Deputy Head, Core Member" },
  { name: "Iniya Radhakrishnan", role: "Head of Internship Dept." },
  { name: "Shivani Tyagi", role: "Team Leader" },
  { name: "Shaik Shahira Bhanu", role: "Senior Core-member" },
  { name: "Vignesh", role: "Junior Core-member" },
  { name: "Manem Padmasri", role: "Junior Core-member" },
  { name: "Madhusudan", role: "CSR Coordinator" },
];

function TeamCard({ name, role, featured }: { name: string; role: string; featured?: boolean }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <div
      className={`group rounded-2xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
        featured ? "ring-2 ring-brand-red/40" : ""
      }`}
    >
      <div
        className="mx-auto grid h-20 w-20 place-items-center rounded-full text-2xl font-extrabold text-white"
        style={{
          background: featured ? "linear-gradient(135deg,#E63946,#F77F00)" : "linear-gradient(135deg,#1976D2,#7209B7)",
        }}
      >
        {initials}
      </div>
      <h4 className="mt-4 text-base font-bold text-ink">{name}</h4>
      <p className="text-xs uppercase tracking-widest text-ink/60">{role}</p>
      <div className="mt-3 flex justify-center gap-2 opacity-70 transition group-hover:opacity-100">
        <a href="#" aria-label="LinkedIn" className="grid h-8 w-8 place-items-center rounded-full bg-secondary text-ink/70 hover:bg-brand-blue hover:text-white transition">
          <Linkedin className="h-4 w-4" />
        </a>
        <a href="#" aria-label="Email" className="grid h-8 w-8 place-items-center rounded-full bg-secondary text-ink/70 hover:bg-brand-red hover:text-white transition">
          <Mail className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function Team() {
  return (
    <section id="team" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="The Amigos" title="Meet Our Leadership" subtitle="Dedicated individuals driving change." />
        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {TEAM.map((t) => (
            <TeamCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- INTERNSHIPS ----------
const ROLES = [
  { icon: <Pencil className="h-5 w-5" />, name: "Content Writing", color: "#E63946" },
  { icon: <Palette className="h-5 w-5" />, name: "Graphic Design", color: "#7209B7" },
  { icon: <HeartHandshake className="h-5 w-5" />, name: "Field Volunteer", color: "#06A77D" },
  { icon: <Megaphone className="h-5 w-5" />, name: "Community Manager", color: "#F77F00" },
  { icon: <BookOpen className="h-5 w-5" />, name: "Community Teacher", color: "#1976D2" },
  { icon: <Handshake className="h-5 w-5" />, name: "Social Entrepreneur", color: "#2D6A4F" },
  { icon: <Wallet className="h-5 w-5" />, name: "Fundraising", color: "#C7254E" },
  { icon: <Users className="h-5 w-5" />, name: "Social Work", color: "#4A5FBD" },
];

function Internships() {
  return (
    <section id="internships" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg,#E3F2FD,#ffffff)" }} />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Grow With Us" title="Internship Opportunities" subtitle="1–3 month programs with certificate from a government-licensed, ISO-certified NGO." />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {ROLES.map((r) => (
            <div key={r.name} className="rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="grid h-11 w-11 place-items-center rounded-xl text-white" style={{ background: r.color }}>
                {r.icon}
              </div>
              <div className="mt-4 text-sm font-bold text-ink">{r.name}</div>
              <div className="mt-1 flex items-center gap-2 text-[11px] uppercase tracking-widest text-ink/60">1–3 months · Certificate</div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border bg-white p-8 shadow-sm md:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-ink">Why our certificate matters</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink/75">
                {[
                  "Association with a CSR-1 registered, ISO 9001:2015 certified, Central Government licensed NGO.",
                  "Recognised globally by institutions and CSR departments.",
                  "Strengthens your resume for NGOs, CSR projects and social enterprises.",
                  "Reflects real dedication to community service and impact.",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <form className="rounded-2xl bg-secondary/50 p-6" onSubmit={(e) => e.preventDefault()}>
              <h4 className="text-lg font-bold text-ink">Apply now</h4>
              <div className="mt-4 grid gap-3">
                <input className="rounded-lg border bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue" placeholder="Full name" />
                <input className="rounded-lg border bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue" placeholder="Email" type="email" />
                <input className="rounded-lg border bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue" placeholder="College / University" />
                <select className="rounded-lg border bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue">
                  <option>Select role</option>
                  {ROLES.map((r) => (
                    <option key={r.name}>{r.name}</option>
                  ))}
                </select>
                <textarea className="rounded-lg border bg-white px-4 py-3 text-sm outline-none focus:border-brand-blue" placeholder="Why do you want to join?" rows={3} />
                <button
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-md transition hover:scale-[1.02]"
                  style={{ background: "linear-gradient(90deg,#E63946,#F77F00)" }}
                >
                  Submit application <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- TESTIMONIALS ----------
const TESTIMONIALS = [
  {
    quote:
      "Interning with InAmigos was the most meaningful thing I did in college. The certificate opened doors — but the field experience changed how I see the world.",
    name: "Aditi Verma",
    role: "Content Writing Intern, 2024",
    color: "#E63946",
  },
  {
    quote:
      "A truly transparent organisation. Every drive is documented, every rupee accounted. It's rare to find this level of professionalism in an NGO.",
    name: "Rohan Kapoor",
    role: "Corporate CSR Partner",
    color: "#1976D2",
  },
  {
    quote: "Project Prakriti brought our village 400 saplings and taught our kids why they matter. That's real change.",
    name: "Sunita Devi",
    role: "Community Member, Bilaspur",
    color: "#4CAF50",
  },
];

function Testimonials() {
  return (
    <section className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Voices" title="What people say" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="relative rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md" style={{ borderLeft: `4px solid ${t.color}` }}>
              <Quote className="absolute right-5 top-5 h-8 w-8 text-ink/10" />
              <div className="flex gap-0.5 text-brand-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm text-ink/80">"{t.quote}"</blockquote>
              <figcaption className="mt-5">
                <div className="text-sm font-bold text-ink">{t.name}</div>
                <div className="text-xs text-ink/60">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- SOCIAL LINKS SECTION ----------
function SocialLinks() {
  const socials = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/inamigos-foundation",
      color: "#0A66C2",
      followers: "5K+ Followers",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/inamigos?utm_medium=copy_link",
      color: "#E4405F",
      followers: "12K+ Followers",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/share/1CeyCkB3uL/",
      color: "#1877F2",
      followers: "8K+ Followers",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/InamigosF?s=08",
      color: "#000000",
      followers: "3K+ Followers",
    },
    {
      name: "YouTube",
      icon: () => <PlayCircle className="h-6 w-6" />,
      url: "https://youtube.com/@inamigosfoundation?si=lcyRib3x-bScUF5M",
      color: "#FF0000",
      followers: "2K+ Subscribers",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-secondary/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Stay Connected"
          title="Follow Our Journey"
          subtitle="Stay updated on exciting career opportunities, field stories, and impact updates across all platforms."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border-2 border-secondary bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg hover:border-current"
                style={{ borderColor: social.color }}
              >
                <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full text-white transition group-hover:scale-110" style={{ background: social.color }}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-bold text-ink">{social.name}</h3>
                <p className="mt-1 text-xs text-ink/60 mb-3">{social.followers}</p>
                <div className="flex items-center justify-center gap-1 text-xs font-semibold transition group-hover:translate-x-1" style={{ color: social.color }}>
                  Follow <ExternalLink className="h-3 w-3" />
                </div>
              </a>
            );
          })}
        </div>
        <div className="mt-12 rounded-2xl border-2 border-secondary bg-gradient-to-r from-blue-50 to-teal-50 p-8 text-center">
          <h3 className="text-xl font-bold text-ink">📢 Latest Updates</h3>
          <p className="mt-2 text-ink/70 max-w-2xl mx-auto">
            Get the latest on our internship programs, volunteer opportunities, and real-world impact stories. Join our community of 100,000+ changemakers across India.
          </p>
          <a
            href="https://forms.gle/AB4c1hLaDDmtrKGU7"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-md transition hover:scale-105"
            style={{ background: "linear-gradient(90deg,#E63946,#F77F00)" }}
          >
            🙋 Volunteer Application Form <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function PlayCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  );
}

// ---------- FINAL CTA ----------
function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 text-white" style={{ background: "linear-gradient(135deg,#0D1B2A,#1A2542 60%,#3a1e40)" }}>
      <div className="pointer-events-none absolute inset-0 opacity-3" style={{
        backgroundImage: `url('${logoAsset.url}')`,
        backgroundSize: "400px 400px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle,#E63946,transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">Ready to make a difference?</h2>
        <p className="mt-4 text-white/75">Join thousands of interns and volunteers building a kinder, cleaner, more equitable India with InAmigos.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#internships"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-105"
            style={{ background: "linear-gradient(90deg,#E63946,#F77F00)" }}
          >
            Get started <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="mailto:inamigosfoundation@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/15"
          >
            <Mail className="h-4 w-4" /> Contact us
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- FOOTER ----------
function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src={logoAsset.url} alt="InAmigos" className="h-10 w-auto rounded bg-white/10 p-1" />
            <span className="text-lg font-bold text-white">InAmigos</span>
          </div>
          <p className="mt-4 text-sm">
            Section-8 NGO, licensed by Central Government of India. Uniting minds for change since 23rd September 2020.
          </p>
          <p className="mt-3 text-xs text-white/50">CIN: U85300CT2020NPL010641</p>
        </div>
        <div>
          <h5 className="text-sm font-bold uppercase tracking-widest text-white">Quick Links</h5>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["About", "#about"],
              ["Projects", "#projects"],
              ["Team", "#team"],
              ["Internships", "#internships"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={l}>
                <a className="hover:text-white transition" href={h}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-bold uppercase tracking-widest text-white">Contact</h5>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a href="mailto:inamigosfoundation@gmail.com" className="hover:text-white transition">
                inamigosfoundation@gmail.com
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href="tel:+916267309902" className="hover:text-white transition">
                +91 6267 309 902
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>Ward No 5, Sipat Ujwal Nagar, Bilaspur, Chhattisgarh 495555</span>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-bold uppercase tracking-widest text-white">Follow Us</h5>
          <div className="mt-4 flex gap-3">
            <a aria-label="LinkedIn" href="https://www.linkedin.com/company/inamigos-foundation" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-brand-blue transition">
              <Linkedin className="h-4 w-4" />
            </a>
            <a aria-label="Instagram" href="https://instagram.com/inamigos?utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-brand-red transition">
              <Instagram className="h-4 w-4" />
            </a>
            <a aria-label="Facebook" href="https://www.facebook.com/share/1CeyCkB3uL/" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-brand-blue transition">
              <Facebook className="h-4 w-4" />
            </a>
            <a aria-label="Twitter" href="https://twitter.com/InamigosF?s=08" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-black transition">
              <Twitter className="h-4 w-4" />
            </a>
            <a aria-label="YouTube" href="https://youtube.com/@inamigosfoundation?si=lcyRib3x-bScUF5M" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-brand-red transition">
              <PlayCircle className="h-4 w-4" />
            </a>
          </div>
          <a href="https://www.inamigosfoundation.org.in/" className="mt-6 inline-block text-xs text-white/60 hover:text-white transition" target="_blank" rel="noopener noreferrer">
            inamigosfoundation.org.in
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} InAmigos Foundation. All rights reserved.</p>
          <p>ISO 9001:2015 · CSR-1 · 80G · 12A · NGO DARPAN</p>
        </div>
      </div>
    </footer>
  );
}

// ---------- helpers ----------
function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center">
      <span className="inline-block rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-ink/70">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-extrabold text-ink md:text-5xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-3 max-w-2xl text-ink/70">{subtitle}</p>}
    </div>
  );
}
