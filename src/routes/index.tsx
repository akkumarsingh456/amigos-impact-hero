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
  CheckCircle2,
  Zap,
  TrendingUp,
  Lock,
  Play,
} from "lucide-react";

export const Route = createFileRoute("/")(({
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
}));

function HomePage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
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
          <img src={logoAsset.url} alt="InAmigos" className="h-10 w-auto rounded-md" />
          <span className="hidden md:inline font-semibold text-lg">InAmigos</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-primary transition">
              {label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        {open && (
          <nav className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4 gap-4">
              {links.map(([label, href]) => (
                <a key={href} href={href} className="hover:text-primary transition">
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

// Hero section
function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 px-5 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Uniting Minds For Change
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Empowering communities across India through education, health, and sustainable development.
        </p>
        <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition inline-flex items-center gap-2">
          Get Involved <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}

// Trust bar
function TrustBar() {
  return (
    <section className="bg-gray-50 py-12 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-semibold text-muted-foreground mb-8">
          TRUSTED BY
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <ShieldCheck size={32} className="text-primary" />
          <Award size={32} className="text-primary" />
          <Globe2 size={32} className="text-primary" />
        </div>
      </div>
    </section>
  );
}

// Mission & Vision
function MissionVision() {
  return (
    <section id="about" className="py-20 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Mission & Vision
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Target size={28} className="text-primary" />
              Mission
            </h3>
            <p className="text-gray-700">
              To empower marginalized communities through education, healthcare, and sustainable livelihood programs.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Eye size={28} className="text-primary" />
              Vision
            </h3>
            <p className="text-gray-700">
              A world where every individual has access to quality education and opportunities for holistic development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Projects
function Projects() {
  const projects = [
    {
      icon: GraduationCap,
      title: "Udaan",
      description: "Educational programs for underprivileged children"
    },
    {
      icon: Sprout,
      title: "Jeev",
      description: "Healthcare and wellness initiatives"
    },
    {
      icon: Sprout,
      title: "Prakriti",
      description: "Environmental sustainability projects"
    },
    {
      icon: Baby,
      title: "Bachpanshala",
      description: "Childcare and early education programs"
    }
  ];

  return (
    <section id="projects" className="py-20 px-5 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <Icon size={40} className="text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Stats
function Stats() {
  return (
    <section className="py-20 px-5 md:px-8 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold mb-2">50K+</p>
            <p className="text-lg">Lives Impacted</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">100+</p>
            <p className="text-lg">Schools Supported</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">500+</p>
            <p className="text-lg">Volunteers</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">15+</p>
            <p className="text-lg">Years Active</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Why Trust
function WhyTrust() {
  return (
    <section className="py-20 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Why Trust InAmigos
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex gap-4">
            <ShieldCheck size={32} className="text-primary flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Government Licensed</h3>
              <p className="text-gray-600">Officially registered and recognized</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Award size={32} className="text-primary flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">ISO Certified</h3>
              <p className="text-gray-600">ISO 9001:2015 certified organization</p>
            </div>
          </div>
          <div className="flex gap-4">
            <FileCheck2 size={32} className="text-primary flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Transparent</h3>
              <p className="text-gray-600">Regular reports and accountability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Team
function Team() {
  return (
    <section id="team" className="py-20 px-5 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Team
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Dedicated professionals working towards social change
        </p>
      </div>
    </section>
  );
}

// Internships
function Internships() {
  return (
    <section id="internships" className="py-20 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Internship Opportunities
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Join us and gain hands-on experience in social development while making a real difference.
        </p>
        <div className="bg-blue-50 p-8 rounded-lg text-center">
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition inline-flex items-center gap-2">
            Apply Now <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

// Testimonials
function Testimonials() {
  return (
    <section className="py-20 px-5 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What People Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "This organization truly makes a difference in people's lives."
              </p>
              <p className="font-semibold">Beneficiary</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Social Links
function SocialLinks() {
  return (
    <section className="py-12 px-5 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-center gap-8">
        <a href="#" aria-label="LinkedIn" className="hover:text-primary transition">
          <Linkedin size={28} />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-primary transition">
          <Instagram size={28} />
        </a>
        <a href="#" aria-label="Facebook" className="hover:text-primary transition">
          <Facebook size={28} />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-primary transition">
          <Twitter size={28} />
        </a>
      </div>
    </section>
  );
}

// Final CTA
function FinalCTA() {
  return (
    <section className="py-20 px-5 md:px-8 bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join Us in Making a Difference
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Whether you want to volunteer, donate, or partner with us, there's a way for you to be part of this journey.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Donate Now
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
            Volunteer
          </button>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">InAmigos Foundation</h3>
            <p className="text-gray-400">
              Government licensed, ISO 9001:2015 certified NGO.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#team" className="hover:text-white transition">Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} /> contact@inamigos.org
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +91 XXXX XXXX XX
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> India
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 InAmigos Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
