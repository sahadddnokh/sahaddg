import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, Smartphone, Mail, MapPin, Star, Calendar, Clock, DollarSign, 
  MessageSquare, ChevronDown, ChevronUp, Send, CheckCircle2, Award, FileCheck, 
  Sparkles, ShieldCheck, Heart, ArrowLeft, Bot, RefreshCw 
} from "lucide-react";

import { Lux3DBackground } from "./components/Lux3DBackground";
import { NavGlass } from "./components/NavGlass";
import { AIChatBot } from "./components/AIChatBot";
import { SuccessGraph } from "./components/SuccessGraph";
import { PortfolioPopup } from "./components/PortfolioPopup";
import { BrandEditor } from "./components/BrandEditor";
import { LucideIcon } from "./components/LucideIcon";
import { LoadingScreen } from "./components/LoadingScreen";

// Import Initial States
import { 
  INITIAL_PROFILE, INITIAL_STATS, INITIAL_SKILLS, INITIAL_SERVICES, 
  INITIAL_INDUSTRIES, INITIAL_PORTFOLIO, INITIAL_TESTIMONIALS, 
  INITIAL_AWARDS, INITIAL_CERTIFICATES, INITIAL_FAQS, INITIAL_BLOGS 
} from "./data";
import { 
  ProfileInfo, StatItem, SkillItem, PortfolioItem, TestimonialItem, 
  AwardItem, CertificateItem, FAQItem, BlogPostItem, BookingDetails 
} from "./types";

export default function App() {
  const [loading, setLoading] = useState(true);

  // States with localStorage persistence for on-screen editing
  const [profile, setProfile] = useState<ProfileInfo>(() => {
    const saved = localStorage.getItem("lux_portfolio_profile");
    return saved ? JSON.parse(saved) : INITIAL_PROFILE;
  });

  const [stats, setStats] = useState<StatItem[]>(() => {
    const saved = localStorage.getItem("lux_portfolio_stats");
    return saved ? JSON.parse(saved) : INITIAL_STATS;
  });

  const [skills, setSkills] = useState<SkillItem[]>(() => {
    const saved = localStorage.getItem("lux_portfolio_skills");
    return saved ? JSON.parse(saved) : INITIAL_SKILLS;
  });

  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(() => {
    const saved = localStorage.getItem("lux_portfolio_portfolio");
    return saved ? JSON.parse(saved) : INITIAL_PORTFOLIO;
  });

  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => {
    const saved = localStorage.getItem("lux_portfolio_testimonials");
    return saved ? JSON.parse(saved) : INITIAL_TESTIMONIALS;
  });

  const [awards, setAwards] = useState<AwardItem[]>(() => {
    const saved = localStorage.getItem("lux_portfolio_awards");
    return saved ? JSON.parse(saved) : INITIAL_AWARDS;
  });

  const [certificates, setCertificates] = useState<CertificateItem[]>(() => {
    const saved = localStorage.getItem("lux_portfolio_certificates");
    return saved ? JSON.parse(saved) : INITIAL_CERTIFICATES;
  });

  const [faqs, setFaqs] = useState<FAQItem[]>(() => {
    const saved = localStorage.getItem("lux_portfolio_faqs");
    return saved ? JSON.parse(saved) : INITIAL_FAQS;
  });

  const [blogs, setBlogs] = useState<BlogPostItem[]>(() => {
    const saved = localStorage.getItem("lux_portfolio_blogs");
    return saved ? JSON.parse(saved) : INITIAL_BLOGS;
  });

  // Persist states to localStorage when edited
  useEffect(() => {
    localStorage.setItem("lux_portfolio_profile", JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem("lux_portfolio_stats", JSON.stringify(stats));
  }, [stats]);

  useEffect(() => {
    localStorage.setItem("lux_portfolio_skills", JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem("lux_portfolio_portfolio", JSON.stringify(portfolio));
  }, [portfolio]);

  useEffect(() => {
    localStorage.setItem("lux_portfolio_testimonials", JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem("lux_portfolio_awards", JSON.stringify(awards));
  }, [awards]);

  useEffect(() => {
    localStorage.setItem("lux_portfolio_certificates", JSON.stringify(certificates));
  }, [certificates]);

  useEffect(() => {
    localStorage.setItem("lux_portfolio_faqs", JSON.stringify(faqs));
  }, [faqs]);

  useEffect(() => {
    localStorage.setItem("lux_portfolio_blogs", JSON.stringify(blogs));
  }, [blogs]);

  // General App states
  const [activePortTab, setActivePortTab] = useState<"All" | "Graphics Design" | "Website Design" | "Brand Identity" | "Video Editing">("All");
  const [activePortfolioPopup, setActivePortfolioPopup] = useState<PortfolioItem | null>(null);
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>(null);
  
  // Testimonial slider state
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Creative Process items
  const creativeSteps = [
    { title: "Discovery", desc: "Understanding objectives, targeted client metrics, and visual benchmarks." },
    { title: "Research", desc: "Deep diving into competitor positioning, brand hooks, and audience patterns." },
    { title: "Planning", desc: "Crafting wireframes, video flowcharts, sitemaps, and campaign calendars." },
    { title: "Design", desc: "Creating high-fidelity vector assets, custom web layouts, and cinematic drafts." },
    { title: "Development", desc: "Writing pixel-perfect clean responsive code and integrating automation." },
    { title: "Testing", desc: "Rigorous responsive layout quality checks, asset compression, and site audits." },
    { title: "Launch", desc: "Smooth rollout, direct domain mapping, tracking setup, and analytics integration." },
    { title: "Support", desc: "Continuous improvements, revisions, monthly strategy sessions, and support." }
  ];

  // Why choose me benefits
  const trustCards = [
    { title: "Fast Delivery", desc: "Swift hand-offs without cutting corners, keeping your schedules perfectly on target." },
    { title: "Creative Design", desc: "Elegant display aesthetics, paired typography, and golden ratio geometry layouts." },
    { title: "Unlimited Revisions", desc: "Refining details, visual components, or video sequences until you are fully thrilled." },
    { title: "Premium Quality", desc: "Polished layouts crafted to rival high-budget, world-class agencies." },
    { title: "Responsive Design", desc: "Immaculate layouts running instantly across mobile phones, tablets, and desktop grids." },
    { title: "Modern UI/UX", desc: "Friction-free, glassmorphic interfaces designed to keep user attention secured." },
    { title: "SEO Optimized", desc: "Clean custom structures scoring 100/100, dominating organic search slots." },
    { title: "Lifetime Support", desc: "Continuous troubleshooting assistance and visual enhancement consultations." },
    { title: "Affordable Pricing", desc: "Highly competitive, high-value investment models tailored for serious brands." }
  ];

  // Forms states
  const [bookingForm, setBookingForm] = useState<BookingDetails>({
    preferredDate: "",
    preferredTime: "",
    service: "Website Design",
    budget: "$500 - $1000",
    requirements: ""
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: ""
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Auto-scroll testimonials
  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setActiveTestimonialIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials]);

  // Filtered portfolio list
  const filteredPortfolio = portfolio.filter(item => {
    if (activePortTab === "All") return true;
    return item.category === activePortTab;
  });

  // Form submission handler
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setBookingForm({
        preferredDate: "",
        preferredTime: "",
        service: "Website Design",
        budget: "$500 - $1000",
        requirements: ""
      });
    }, 5000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactForm({
        name: "",
        email: "",
        whatsapp: "",
        message: ""
      });
    }, 5000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterSubmitted(false);
      setNewsletterEmail("");
    }, 5000);
  };

  const handleClearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="relative min-h-screen bg-[#070708] text-white overflow-hidden scroll-smooth selection:bg-amber-400 selection:text-black">
      
      {/* Cinematic Load Screen preloader */}
      <LoadingScreen onComplete={() => setLoading(false)} />

      {/* Luxury Background FX Stage */}
      <Lux3DBackground />

      {/* Floating Gear Editor and Assistant */}
      <BrandEditor 
        profile={profile} setProfile={setProfile}
        stats={stats} setStats={setStats}
        skills={skills} setSkills={setSkills}
        portfolio={portfolio} setPortfolio={setPortfolio}
        testimonials={testimonials} setTestimonials={setTestimonials}
        awards={awards} setAwards={setAwards}
        certificates={certificates} setCertificates={setCertificates}
        faqs={faqs} setFaqs={setFaqs}
        blogs={blogs} setBlogs={setBlogs}
      />
      <AIChatBot />

      {/* Sticky Glass Navbar */}
      <NavGlass />

      {/* Core layout */}
      <main className="relative z-10 pt-20">
        
        {/* Reset Button Floating in Margin */}
        <div className="fixed top-24 left-6 z-30">
          <button
            onClick={handleClearLocalStorage}
            title="Reset All Changes to Defaults"
            className="p-2.5 rounded-full bg-neutral-900/50 border border-white/5 text-neutral-500 hover:text-amber-400 hover:border-amber-400/20 backdrop-blur-md cursor-pointer transition-all hover:rotate-184"
          >
            <RefreshCw size={14} />
          </button>
        </div>

        {/* Hero Section */}
        <section id="home" className="min-h-[calc(100vh-80px)] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text Specs */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-amber-400 text-black font-mono text-[10px] sm:text-xs font-extrabold uppercase tracking-widest border border-amber-400 shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]"
              >
                <Sparkles size={12} className="animate-pulse" />
                Elite Creative Digital Agency
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter text-white uppercase leading-[0.95]"
              >
                {profile.name}
              </motion.h1>

              {/* Multi Title Rotator Tag */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-2 text-xs font-mono font-bold text-amber-400/90 tracking-wide"
              >
                {profile.titles.map((title, i) => (
                  <span key={i} className="px-3.5 py-1.5 bg-neutral-950 border-2 border-white/10 text-neutral-200 text-xs tracking-wider uppercase font-mono font-bold rounded-none hover:border-amber-400 transition-colors shadow-[2px_2px_0px_0px_rgba(255,255,255,0.08)]">
                    {title}
                  </span>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans max-w-xl"
              >
                {profile.description}
              </motion.p>

              {/* Actions Button Group */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <a
                  href={`https://wa.me/88${profile.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-black font-display font-black text-xs uppercase tracking-widest border-2 border-amber-400 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all transform hover:translate-x-[2px] hover:translate-y-[2px] cursor-pointer rounded-none"
                >
                  <Smartphone size={16} />
                  Hire Me Now
                </a>
                <a
                  href="#portfolio"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-neutral-950 hover:bg-neutral-900 border-2 border-white text-white font-display font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(212,175,55,1)] hover:shadow-[2px_2px_0px_0px_rgba(212,175,55,1)] transition-all transform hover:translate-x-[2px] hover:translate-y-[2px] cursor-pointer rounded-none"
                >
                  View Case Studies
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            </div>

            {/* Right Column: 3D Floating Profile */}
            <div className="lg:col-span-5 flex justify-center relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-none bg-neutral-950 border-2 border-white p-3 shadow-[8px_8px_0px_0px_#D4AF37] overflow-hidden group cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                {/* Embedded luxury overlay reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/5 via-transparent to-white/5 opacity-50 z-10" />

                {/* Shimmer layout */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/10 opacity-30 group-hover:animate-[shimmer_1.5s_ease-out_infinite]" />

                <motion.div
                  className="w-full h-full rounded-none overflow-hidden relative border border-white/10"
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src={profile.profileImage}
                    alt={profile.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Digital Signature Frame Tag */}
                  <div className="absolute bottom-4 inset-x-4 bg-black/90 border-2 border-white rounded-none p-3.5 flex justify-between items-center shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)]">
                    <div>
                      <span className="text-[9px] text-amber-400 font-mono font-bold tracking-wider uppercase block">Representative</span>
                      <span className="text-xs font-bold text-white block mt-0.5">{profile.name}</span>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                  </div>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* Animated Experience Counter Section */}
        <section id="experience" className="py-12 border-y-2 border-white/10 bg-neutral-950 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
              {stats.map((st) => (
                <div key={st.id} className="p-6 rounded-none bg-neutral-900/20 border-2 border-white/5 relative group hover:border-amber-400 hover:bg-neutral-900/40 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)] hover:shadow-[4px_4px_0px_0px_#D4AF37]">
                  <h3 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tighter flex justify-center items-center gap-0.5 uppercase">
                    {st.value}
                    <span className="text-amber-400 font-display font-black">{st.suffix}</span>
                  </h3>
                  <p className="text-neutral-300 text-[10px] sm:text-xs mt-2 font-mono uppercase font-bold tracking-widest">
                    {st.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Me Section */}
         <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Interactive Details Block */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-none border-2 border-white p-2.5 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)] bg-neutral-950">
                <div className="w-full h-full rounded-none overflow-hidden border-2 border-amber-400/35">
                  <img
                    src={profile.profileImage}
                    alt={profile.name}
                    className="w-full h-full object-cover filter saturate-[0.85]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Right: Direct Profile Metadata */}
            <div className="lg:col-span-7 space-y-6">
              <div className="border-l-4 border-amber-400 pl-6">
                <span className="text-amber-400 font-mono text-xs font-black tracking-[0.3em] uppercase block">
                  BIOGRAPHY
                </span>
                <h2 className="text-4xl sm:text-5xl font-display font-black text-white tracking-tighter uppercase leading-[0.95] mt-2">
                  Crafting Digital Experiences That Command Attention
                </h2>
              </div>

              <p className="text-neutral-300 text-sm leading-relaxed whitespace-pre-line font-sans">
                {profile.description}
              </p>

              {/* Direct Info list details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t-2 border-white/10 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-none bg-neutral-950 border-2 border-white/15 flex items-center justify-center text-amber-400">
                    <Smartphone size={15} />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 block uppercase font-mono font-bold tracking-wider">WhatsApp</span>
                    <a href={`https://wa.me/88${profile.whatsapp}`} className="text-white hover:text-amber-400 font-bold font-mono text-xs">{profile.phone}</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-none bg-neutral-950 border-2 border-white/15 flex items-center justify-center text-amber-400">
                    <Mail size={15} />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 block uppercase font-mono font-bold tracking-wider">Email Address</span>
                    <a href={`mailto:${profile.email}`} className="text-white hover:text-amber-400 font-bold font-mono text-xs">{profile.email}</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-none bg-neutral-950 border-2 border-white/15 flex items-center justify-center text-amber-400">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 block uppercase font-mono font-bold tracking-wider">Location</span>
                    <span className="text-white font-bold font-mono text-xs">{profile.location.split(",")[0]}, Noakhali</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-none bg-neutral-950 border-2 border-white/15 flex items-center justify-center text-amber-400">
                    <ShieldCheck size={15} />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 block uppercase font-mono font-bold tracking-wider">Availability</span>
                    <span className="text-emerald-400 font-bold font-mono text-xs uppercase">Active Booking Open</span>
                  </div>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="pt-6 flex flex-wrap gap-2.5">
                {[
                  { name: "Facebook", icon: "facebook", url: profile.facebook },
                  { name: "Instagram", icon: "instagram", url: profile.instagram },
                  { name: "LinkedIn", icon: "linkedin", url: profile.linkedin },
                  { name: "Behance", icon: "behance", url: profile.behance },
                  { name: "GitHub", icon: "github", url: profile.github }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-none bg-neutral-950 border-2 border-white/10 text-neutral-300 hover:text-amber-400 hover:border-amber-400 text-xs transition-all cursor-pointer font-mono uppercase font-bold tracking-wider shadow-[2px_2px_0px_0px_rgba(255,255,255,0.05)] hover:shadow-[2px_2px_0px_0px_#D4AF37]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Skills Progress Circles Section */}
        <section id="skills" className="py-24 bg-black/20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-amber-400 font-mono text-xs font-black tracking-[0.3em] uppercase block">
                CAPABILITIES
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none mt-2">
                Visualizing Skill Metrics
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm mt-3">
                Demonstrated percentages based on completed client campaigns and project outputs
              </p>
            </div>

            {/* Grid of Circular/Horizontal bars */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills.map((sk) => {
                const radius = 32;
                const circumference = 2 * Math.PI * radius;
                const strokeDashoffset = circumference - (sk.percentage / 100) * circumference;

                return (
                  <div key={sk.id} className="p-6 bg-neutral-950 border-2 border-white/5 rounded-none flex flex-col items-center text-center relative group hover:border-amber-400 transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)] hover:shadow-[4px_4px_0px_0px_rgba(212,175,55,1)]">
                    {/* Circle SVGs */}
                    <div className="relative w-20 h-20">
                      <svg className="w-full h-full transform -rotate-90">
                        {/* Background track circle */}
                        <circle
                          cx="40"
                          cy="40"
                          r={radius}
                          className="stroke-neutral-800"
                          strokeWidth="4"
                          fill="transparent"
                        />
                        {/* Active gold progress circle */}
                        <circle
                          cx="40"
                          cy="40"
                          r={radius}
                          stroke="#D4AF37"
                          strokeWidth="4"
                          fill="transparent"
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      {/* Percent text */}
                      <span className="absolute inset-0 flex items-center justify-center font-mono font-bold text-sm text-white">
                        {sk.percentage}%
                      </span>
                    </div>

                    <h4 className="text-xs font-display font-extrabold text-white mt-4 tracking-wide truncate w-full uppercase">
                      {sk.name}
                    </h4>
                    <span className="text-[9px] text-neutral-500 uppercase font-mono mt-0.5 tracking-wider font-bold">
                      {sk.category}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Premium Services Section */}
        <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-amber-400 font-mono text-xs font-black tracking-[0.3em] uppercase block">
                EXPERT SERVICES
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none mt-2">
                Luxury Creative Solvers
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm mt-3">
                Bespoke design, optimized digital marketing strategy, and production built for scaling businesses
              </p>
            </div>

            {/* Cards Grid with interactive hovers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {INITIAL_SERVICES.map((ser) => (
                <div 
                  key={ser.id} 
                  className="bg-neutral-950 border-2 border-white/5 rounded-none p-6.5 relative group overflow-hidden transition-all duration-300 hover:border-amber-400 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.05)] hover:shadow-[6px_6px_0px_0px_#D4AF37]"
                >
                  {/* Subtle top light overlay */}
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-none bg-neutral-950 border-2 border-white/10 flex items-center justify-center text-amber-400 mb-6 group-hover:border-amber-400 group-hover:shadow-[4px_4px_0px_0px_rgba(212,175,55,0.25)] transition-all">
                    <LucideIcon name={ser.icon} size={22} />
                  </div>

                  <h3 className="text-lg font-display font-black text-white uppercase tracking-tight">
                    {ser.title}
                  </h3>
                  
                  <p className="text-neutral-400 text-xs mt-3 leading-relaxed">
                    {ser.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 mt-6 border-t border-white/5 pt-4">
                    {ser.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[11px] text-neutral-300 font-bold font-sans uppercase tracking-wider">
                        <span className="w-1 h-1 rounded-full bg-amber-400" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section id="industries" className="py-24 bg-black/10 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-amber-400 font-mono text-xs font-black tracking-[0.3em] uppercase block">
                VERTICAL MARKETS
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none mt-2">
                Industries Served
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm mt-3">
                Proven track records of delivering high value assets in diverse client verticals
              </p>
            </div>

            {/* Grid of industries */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {INITIAL_INDUSTRIES.map((ind) => (
                <div 
                  key={ind.id}
                  className="p-5 bg-neutral-950 border-2 border-white/5 rounded-none flex flex-col items-center justify-center text-center group hover:border-amber-400 hover:bg-neutral-900/40 transition-all cursor-pointer shadow-[3px_3px_0px_0px_rgba(255,255,255,0.03)] hover:shadow-[3px_3px_0px_0px_#D4AF37]"
                >
                  <div className="w-10 h-10 rounded-none bg-neutral-950 border-2 border-white/10 flex items-center justify-center text-amber-400 mb-3 group-hover:border-amber-400 transition-all">
                    <LucideIcon name={ind.icon} size={16} />
                  </div>
                  <h4 className="text-[11px] font-mono font-bold uppercase text-white tracking-wider truncate w-full">
                    {ind.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
              <div className="border-l-4 border-amber-400 pl-6">
                <span className="text-amber-400 font-mono text-xs font-black tracking-[0.3em] uppercase block">
                  CASE STUDIES
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none mt-2">
                  Luxury Masterpieces
                </h2>
              </div>

              {/* Filtering Controls */}
              <div className="flex flex-wrap gap-2 border-b border-white/5 pb-2 lg:border-none lg:pb-0">
                {(["All", "Graphics Design", "Website Design", "Brand Identity", "Video Editing"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActivePortTab(tab)}
                    className={`px-4.5 py-2.5 text-xs font-display font-black rounded-none tracking-widest uppercase transition-all cursor-pointer border-2 ${
                      activePortTab === tab
                        ? "bg-amber-400 border-amber-400 text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                        : "text-neutral-400 border-white/5 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Masonry-like Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPortfolio.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  onClick={() => setActivePortfolioPopup(item)}
                  className="group bg-neutral-950 border-2 border-white/5 rounded-none overflow-hidden cursor-pointer relative shadow-[6px_6px_0px_0px_rgba(255,255,255,0.05)] hover:shadow-[6px_6px_0px_0px_#D4AF37] hover:border-amber-400/50 transition-all duration-300"
                >
                  <div className="relative aspect-video overflow-hidden border-b border-white/5 rounded-none">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                      <span className="text-amber-400 text-xs font-black font-mono tracking-wider uppercase flex items-center gap-1.5">
                        Expand Project Case Study
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-[9px] text-amber-400 font-mono tracking-widest uppercase font-black block">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-display font-black text-white tracking-tight mt-1 group-hover:text-amber-400 transition-colors uppercase">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-xs line-clamp-2 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Slider (Drag Carousel placeholder mockup) */}
        <section className="py-24 bg-black/30 backdrop-blur-md relative border-y-2 border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-amber-400 font-mono text-xs font-black tracking-[0.3em] uppercase block">
                FEATURED SPOTLIGHTS
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none mt-2">
                Spotlight Showcase
              </h2>
            </div>

            {/* Slider view container */}
            <div className="relative overflow-hidden py-4 mask-gradient">
              <div className="flex gap-6 overflow-x-auto no-scrollbar pb-6 scrollbar-none scroll-smooth">
                {portfolio.slice(0, 4).map((item, idx) => (
                  <div 
                    key={`feat-${idx}`}
                    onClick={() => setActivePortfolioPopup(item)}
                    className="flex-shrink-0 w-80 sm:w-96 p-5 bg-neutral-950 border-2 border-white/10 rounded-none space-y-4 hover:border-amber-400 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.05)] hover:shadow-[6px_6px_0px_0px_#D4AF37] cursor-pointer transition-all"
                  >
                    <div className="aspect-video w-full rounded-none overflow-hidden bg-black/40 border border-white/5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] text-amber-400 font-mono font-black uppercase tracking-wider">{item.category}</span>
                        <span className="text-[9px] text-neutral-500 font-mono font-bold tracking-wider">CLIENT CASE</span>
                      </div>
                      <h4 className="text-sm font-display font-black uppercase text-white mt-1.5">{item.title}</h4>
                      <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Creative Process Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-20">
              <span className="text-amber-400 font-mono text-xs font-black tracking-[0.3em] uppercase block">
                METHODOLOGY
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none mt-2">
                Creative Process Timeline
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm mt-3">
                Our step-by-step methodology to transform vision into visual masterworks
              </p>
            </div>

            {/* Timeline Row/Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative pt-4">
              {creativeSteps.map((step, idx) => (
                <div key={idx} className="relative group p-6.5 bg-neutral-950 border-2 border-white/5 rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.03)] hover:shadow-[4px_4px_0px_0px_#D4AF37] hover:border-amber-400 transition-all">
                  {/* Step counter tag */}
                  <span className="absolute -top-4 left-6 px-3.5 py-1 bg-amber-400 text-black text-[10px] font-black font-mono rounded-none shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] uppercase">
                    STEP {idx + 1}
                  </span>

                  <h3 className="text-base font-display font-black uppercase text-white tracking-tight mt-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 text-xs mt-2.5 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="py-24 bg-black/20 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-amber-400 font-mono text-xs font-black tracking-[0.3em] uppercase block">
                WHY WORK WITH SAADUL
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none mt-2">
                Agency Craft, Personalized Care
              </h2>
            </div>

            {/* Grid of Why cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trustCards.map((trust, idx) => (
                <div key={idx} className="p-6 bg-neutral-950 border-2 border-white/5 rounded-none relative group hover:border-amber-400 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.03)] hover:shadow-[4px_4px_0px_0px_#D4AF37] transition-all">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-none bg-neutral-950 border-2 border-white/15 flex-shrink-0 flex items-center justify-center text-amber-400 font-black font-mono text-sm shadow-[2px_2px_0px_0px_rgba(255,255,255,0.05)] group-hover:border-amber-400 transition-colors">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-black text-white uppercase tracking-wide">{trust.title}</h4>
                      <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{trust.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Graph Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <SuccessGraph />
          </div>
        </section>

        {/* Client Reviews & Testimonial Carousel */}
        <section id="testimonials" className="py-24 bg-black/40 backdrop-blur-md relative border-t border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-amber-400 font-mono text-xs font-black tracking-[0.3em] uppercase block">
                TESTIMONIALS
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none mt-2">
                What Clients Say
              </h2>
            </div>

            {/* Autoplay Testimonial layout */}
            {testimonials.length > 0 && (
              <div className="relative p-8 sm:p-12 rounded-none bg-neutral-950 border-2 border-white/10 overflow-hidden text-center shadow-[8px_8px_0px_0px_rgba(255,255,255,0.05)]">
                {/* Stars */}
                <div className="flex justify-center gap-1.5 mb-6 text-amber-400">
                  {Array.from({ length: testimonials[activeTestimonialIdx].rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-white text-base sm:text-lg italic font-sans leading-relaxed tracking-wide max-w-3xl mx-auto">
                  "{testimonials[activeTestimonialIdx].content}"
                </p>

                {/* Author Info */}
                <div className="mt-8 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-none overflow-hidden border-2 border-white/20 mb-3 bg-neutral-900">
                    <img
                      src={testimonials[activeTestimonialIdx].image}
                      alt={testimonials[activeTestimonialIdx].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-display font-black text-white text-sm uppercase tracking-wide">{testimonials[activeTestimonialIdx].name}</h4>
                  <p className="text-neutral-400 text-xs font-medium mt-0.5 font-mono uppercase tracking-wider">
                    {testimonials[activeTestimonialIdx].role} at {testimonials[activeTestimonialIdx].company}
                  </p>
                </div>

                {/* Slider Controls indicators */}
                <div className="flex justify-center gap-1.5 mt-8">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonialIdx(idx)}
                      className={`h-2 transition-all cursor-pointer rounded-none ${
                        activeTestimonialIdx === idx ? "w-6 bg-amber-400" : "w-2 bg-neutral-700 hover:bg-neutral-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Awards & Certificates Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Awards Side */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <Award className="text-amber-400" size={20} />
                <h3 className="text-xl font-display font-black text-white uppercase tracking-tight">
                  Honorable Awards
                </h3>
              </div>

              <div className="space-y-4">
                {awards.map((aw) => (
                  <div key={aw.id} className="p-5 bg-neutral-950 border-2 border-white/5 rounded-none hover:border-amber-400 hover:bg-neutral-900/20 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.03)] hover:shadow-[4px_4px_0px_0px_#D4AF37] transition-all">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="font-display font-black text-white text-sm sm:text-base uppercase">{aw.title}</h4>
                        <span className="text-[10px] text-amber-400 font-mono uppercase font-bold mt-1 block">
                          {aw.issuer}
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded-none bg-white/5 border-2 border-white/10 text-[10px] font-bold font-mono text-white uppercase">
                        {aw.year}
                      </span>
                    </div>
                    <p className="text-neutral-400 text-xs mt-3 leading-relaxed">
                      {aw.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Side */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <FileCheck className="text-amber-400" size={20} />
                <h3 className="text-xl font-display font-black text-white uppercase tracking-tight">
                  Elite Certifications
                </h3>
              </div>

              <div className="space-y-4">
                {certificates.map((cert) => (
                  <div key={cert.id} className="p-5 bg-neutral-950 border-2 border-white/5 rounded-none hover:border-amber-400 hover:bg-neutral-900/20 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.03)] hover:shadow-[4px_4px_0px_0px_#D4AF37] transition-all">
                    <div className="flex justify-between items-center gap-4">
                      <div>
                        <h4 className="font-display font-black text-white text-sm sm:text-base uppercase">{cert.title}</h4>
                        <span className="text-[10px] text-neutral-400 font-mono mt-1 block font-bold">
                          {cert.issuer}
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded-none bg-white/5 border-2 border-white/10 text-[10px] font-bold font-mono text-white uppercase">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section id="faq" className="py-24 bg-black/10 relative border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-amber-400 font-mono text-xs font-black tracking-[0.3em] uppercase block">
                FAQ
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none mt-2">
                Client FAQ
              </h2>
            </div>

            {/* Glass style Accordion */}
            <div className="space-y-4">
              {faqs.map((item) => {
                const isOpen = expandedFaqId === item.id;
                return (
                  <div
                    key={item.id}
                    className="border-2 border-white/5 rounded-none bg-neutral-950 overflow-hidden shadow-[4px_4px_0px_0px_rgba(255,255,255,0.02)] hover:border-white/10 transition-colors"
                  >
                    <button
                      onClick={() => setExpandedFaqId(isOpen ? null : item.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between text-white hover:text-amber-400 font-display font-black uppercase tracking-wide text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      <span>{item.question}</span>
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/5 pt-4">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Appointment Booking Form Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
          <div className="max-w-3xl mx-auto bg-neutral-950 border-2 border-white rounded-none p-6 sm:p-10 shadow-[8px_8px_0px_0px_#D4AF37] relative overflow-hidden">

            <div className="text-center mb-8">
              <span className="text-amber-400 font-mono text-xs font-black tracking-[0.3em] uppercase block">
                SCHEDULING
              </span>
              <h3 className="text-3xl font-display font-black text-white mt-1 uppercase tracking-tighter">
                Appointment Booking
              </h3>
              <p className="text-xs text-neutral-400 mt-2">
                Choose your date, budget, and custom specifications to pitch your project instantly
              </p>
            </div>

            {bookingSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-none bg-neutral-950 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400 shadow-[4px_4px_0px_0px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-lg font-display font-black text-white uppercase tracking-wide">Booking Proposal Received!</h4>
                <p className="text-xs text-neutral-400 max-w-md mx-auto">
                  Thank you! Your customized budget and schedule guidelines have been logged in client sandbox. Saadul will review and text you on WhatsApp within 2 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-5 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1.5 uppercase font-mono tracking-wider font-bold">Preferred Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={bookingForm.preferredDate}
                        onChange={(e) => setBookingForm({ ...bookingForm, preferredDate: e.target.value })}
                        className="w-full bg-neutral-950 border-2 border-white/15 rounded-none px-4 py-3 text-white focus:outline-none focus:border-amber-400 focus:shadow-[2px_2px_0px_0px_#D4AF37] font-mono font-bold text-xs"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1.5 uppercase font-mono tracking-wider font-bold">Preferred Time</label>
                    <input
                      type="time"
                      required
                      value={bookingForm.preferredTime}
                      onChange={(e) => setBookingForm({ ...bookingForm, preferredTime: e.target.value })}
                      className="w-full bg-neutral-950 border-2 border-white/15 rounded-none px-4 py-3 text-white focus:outline-none focus:border-amber-400 focus:shadow-[2px_2px_0px_0px_#D4AF37] font-mono font-bold text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1.5 uppercase font-mono tracking-wider font-bold">Service Category</label>
                    <select
                      value={bookingForm.service}
                      onChange={(e) => setBookingForm({ ...bookingForm, service: e.target.value })}
                      className="w-full bg-neutral-950 border-2 border-white/15 rounded-none px-4 py-3 text-white focus:outline-none focus:border-amber-400 font-mono font-bold text-xs"
                    >
                      <option value="Graphics Design">Graphics Design & Brand Identity</option>
                      <option value="Website Design">Premium Website Design (WordPress/React)</option>
                      <option value="Digital Marketing">Social Media & Google Ads</option>
                      <option value="Video Editing">Cinematic Video Editing & Motion</option>
                      <option value="AI Automation">AI Workflow Automation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1.5 uppercase font-mono tracking-wider font-bold">Estimated Budget</label>
                    <select
                      value={bookingForm.budget}
                      onChange={(e) => setBookingForm({ ...bookingForm, budget: e.target.value })}
                      className="w-full bg-neutral-950 border-2 border-white/15 rounded-none px-4 py-3 text-white focus:outline-none focus:border-amber-400 font-mono font-bold text-xs"
                    >
                      <option value="Under $500">Under $500</option>
                      <option value="$500 - $1000">$500 - $1,000</option>
                      <option value="$1000 - $3000">$1,000 - $3,000</option>
                      <option value="Above $3000">Above $3,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-400 mb-1.5 uppercase font-mono tracking-wider font-bold">Project Specifications & Requirements</label>
                  <textarea
                    rows={4}
                    required
                    value={bookingForm.requirements}
                    onChange={(e) => setBookingForm({ ...bookingForm, requirements: e.target.value })}
                    placeholder="Describe your design assets, video reference links, or website metrics guidelines..."
                    className="w-full bg-neutral-950 border-2 border-white/15 rounded-none px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 focus:shadow-[2px_2px_0px_0px_#D4AF37] font-sans font-bold text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-amber-400 text-black font-display font-black text-sm uppercase rounded-none tracking-widest border-2 border-amber-400 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_0px_#D4AF37] cursor-pointer transition-all"
                >
                  Send Booking Proposal
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Blogs section */}
        <section id="blog" className="py-24 bg-black/20 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-amber-400 font-mono text-xs font-black tracking-[0.3em] uppercase block">
                BRAND INSIGHTS
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none mt-2">
                Newsletter & Blogs
              </h2>
            </div>

            {/* Blogs list */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogs.map((item) => (
                <article key={item.id} className="bg-neutral-950 border-2 border-white/5 rounded-none overflow-hidden flex flex-col hover:border-amber-400 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.03)] hover:shadow-[4px_4px_0px_0px_#D4AF37] transition-all">
                  <div className="aspect-video relative overflow-hidden bg-neutral-900 border-b-2 border-white/10 rounded-none">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-black border-2 border-amber-400 text-[9px] font-mono font-black text-amber-400 px-2.5 py-1 rounded-none uppercase">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-[10px] text-neutral-500 font-mono uppercase tracking-wider font-bold">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.readTime}</span>
                      </div>
                      <h4 className="text-base font-display font-black text-white mt-3 leading-snug hover:text-amber-400 cursor-pointer uppercase">
                        {item.title}
                      </h4>
                      <p className="text-neutral-400 text-xs mt-3 leading-relaxed line-clamp-3">
                        {item.summary}
                      </p>
                    </div>

                    <div className="pt-4 mt-6 border-t-2 border-white/10">
                      <p className="text-[11px] text-neutral-300 font-sans leading-relaxed line-clamp-3">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Luxury subscription form */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
          <div className="max-w-4xl mx-auto bg-neutral-950 border-2 border-white rounded-none p-8 sm:p-12 text-center relative overflow-hidden shadow-[8px_8px_0px_0px_#D4AF37]">

            <span className="text-amber-400 font-mono text-xs font-black tracking-[0.3em] uppercase block">
              SUBSCRIBE
            </span>
            <h3 className="text-3xl font-display font-black text-white mt-1 uppercase tracking-tighter">
              Join Saadul's Elite Branding Letter
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm mt-3 max-w-md mx-auto">
              Get secret design layouts, ad blueprints, and conversion tips sent to your inbox monthly.
            </p>

            {newsletterSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 text-emerald-400 text-xs font-black font-mono uppercase tracking-wider"
              >
                ✓ You have successfully joined the priority marketing roster!
              </motion.div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto text-sm">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-neutral-950 border-2 border-white/15 rounded-none px-4 py-3.5 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 focus:shadow-[2px_2px_0px_0px_#D4AF37] font-mono font-bold text-xs"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-amber-400 text-black font-display font-black rounded-none tracking-widest uppercase border-2 border-amber-400 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] cursor-pointer transition-all"
                >
                  Join Letter
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5 bg-black/20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Col: Credentials and coordinates */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-amber-400 font-mono text-xs font-black tracking-[0.3em] uppercase block">
                  GET IN TOUCH
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none mt-2">
                  Connect & Collaborate
                </h2>
              </div>

              <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                Feel free to message me regarding customized UI layouts, brand launches, Google Ad setups, or video showreels!
              </p>

              {/* Coordinates List */}
              <div className="space-y-4 pt-4 text-sm text-neutral-300 font-sans font-medium">
                <div className="flex items-center gap-3">
                  <Smartphone className="text-amber-400" size={16} />
                  <span>01892661449 (WhatsApp preferred)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-amber-400" size={16} />
                  <span>saadulofficial@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-amber-400" size={16} />
                  <span>{profile.location}</span>
                </div>
              </div>

              {/* Map embed frame */}
              <div className="w-full h-56 rounded-none overflow-hidden border-2 border-white/15 shadow bg-neutral-950 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)]">
                <iframe
                  title="Saadul Location Map"
                  src={profile.embeddedMap}
                  className="w-full h-full border-0 grayscale filter contrast-125"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Col: Instant Message Form */}
            <div className="lg:col-span-7 bg-neutral-950 border-2 border-white rounded-none p-6 sm:p-8 relative h-fit shadow-[6px_6px_0px_0px_rgba(255,255,255,0.05)]">
              {contactSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-16 text-center space-y-3"
                >
                  <CheckCircle2 size={44} className="text-emerald-400 mx-auto" />
                  <h4 className="font-display font-black text-white text-base uppercase tracking-wide">Direct Message Sent!</h4>
                  <p className="text-xs text-neutral-400 max-w-md mx-auto">
                    Thanks for reaching out! Saadul Islam has received your email coordinate. Expect a direct WhatsApp or Email response within 1 hour.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4 text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1 uppercase font-mono tracking-wider font-bold">Your Name</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-neutral-950 border-2 border-white/15 rounded-none px-4 py-3 text-white focus:outline-none focus:border-amber-400 focus:shadow-[2px_2px_0px_0px_#D4AF37] font-sans font-bold text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1 uppercase font-mono tracking-wider font-bold">Email Address</label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-neutral-950 border-2 border-white/15 rounded-none px-4 py-3 text-white focus:outline-none focus:border-amber-400 focus:shadow-[2px_2px_0px_0px_#D4AF37] font-sans font-bold text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1 uppercase font-mono tracking-wider font-bold">WhatsApp / Phone</label>
                    <input
                      type="text"
                      required
                      value={contactForm.whatsapp}
                      onChange={(e) => setContactForm({ ...contactForm, whatsapp: e.target.value })}
                      placeholder="01892661449"
                      className="w-full bg-neutral-950 border-2 border-white/15 rounded-none px-4 py-3 text-white focus:outline-none focus:border-amber-400 focus:shadow-[2px_2px_0px_0px_#D4AF37] font-sans font-bold text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1 uppercase font-mono tracking-wider font-bold">Your Message</label>
                    <textarea
                      rows={4}
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Discuss project requirements or brand goals..."
                      className="w-full bg-neutral-950 border-2 border-white/15 rounded-none px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 focus:shadow-[2px_2px_0px_0px_#D4AF37] font-sans font-bold text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4.5 bg-amber-400 text-black font-display font-black text-xs uppercase tracking-widest rounded-none border-2 border-amber-400 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] cursor-pointer transition-all"
                  >
                    Submit Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t-2 border-white/10 bg-[#050506] py-16 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-black tracking-tighter text-white uppercase">
              SAADUL<span className="text-amber-400 font-black">.</span>
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-xs">
              World-class design and digital advertising solutions tailored to elevate your business performance.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-display font-black uppercase text-white tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs text-neutral-400 font-mono font-bold uppercase tracking-wider">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home Stage</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Bio</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Services Offered</a></li>
              <li><a href="#portfolio" className="hover:text-amber-400 transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Legal and Support */}
          <div>
            <h4 className="text-xs font-display font-black uppercase text-white tracking-widest mb-4">Support & Legal</h4>
            <ul className="space-y-2 text-xs text-neutral-400 font-mono font-bold uppercase tracking-wider">
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">Client FAQ</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Business Contact</a></li>
              <li><span className="text-neutral-500">Privacy Policy</span></li>
              <li><span className="text-neutral-500">Terms of Service</span></li>
            </ul>
          </div>

          {/* Contact coordinates */}
          <div>
            <h4 className="text-xs font-display font-black uppercase text-white tracking-widest mb-4">Direct Contact</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Maijdee, Noakhali, Bangladesh.<br />
              Email: saadulofficial@gmail.com<br />
              WhatsApp: 01892661449
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t-2 border-white/10 flex flex-col sm:flex-row items-center justify-between text-neutral-400 font-mono font-bold uppercase tracking-wider text-[10px]">
          <p>© {new Date().getFullYear()} Saadul Islam. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 mt-4 sm:mt-0">
            Crafted with <Heart size={10} className="text-red-500 fill-red-500 animate-pulse" /> for elite clients
          </p>
        </div>
      </footer>

      {/* Luxury project Detail modal popup */}
      <PortfolioPopup
        item={activePortfolioPopup}
        onClose={() => setActivePortfolioPopup(null)}
      />

    </div>
  );
}
