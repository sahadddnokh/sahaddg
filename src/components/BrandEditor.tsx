import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, Settings, Edit, Save, Plus, Trash2, Sliders, Globe, Phone, 
  Mail, MapPin, Award, BookOpen, Layers, MessageSquare, CheckCircle 
} from "lucide-react";
import { 
  ProfileInfo, StatItem, SkillItem, PortfolioItem, 
  TestimonialItem, AwardItem, CertificateItem, FAQItem, BlogPostItem 
} from "../types";

interface BrandEditorProps {
  profile: ProfileInfo;
  setProfile: (p: ProfileInfo) => void;
  stats: StatItem[];
  setStats: (s: StatItem[]) => void;
  skills: SkillItem[];
  setSkills: (s: SkillItem[]) => void;
  portfolio: PortfolioItem[];
  setPortfolio: (p: PortfolioItem[]) => void;
  testimonials: TestimonialItem[];
  setTestimonials: (t: TestimonialItem[]) => void;
  awards: AwardItem[];
  setAwards: (a: AwardItem[]) => void;
  certificates: CertificateItem[];
  setCertificates: (c: CertificateItem[]) => void;
  faqs: FAQItem[];
  setFaqs: (f: FAQItem[]) => void;
  blogs: BlogPostItem[];
  setBlogs: (b: BlogPostItem[]) => void;
}

export const BrandEditor: React.FC<BrandEditorProps> = ({
  profile, setProfile,
  stats, setStats,
  skills, setSkills,
  portfolio, setPortfolio,
  testimonials, setTestimonials,
  awards, setAwards,
  certificates, setCertificates,
  faqs, setFaqs,
  blogs, setBlogs
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"profile" | "skills" | "portfolio" | "testimonials" | "more">("profile");

  // Profile Edit Handlers
  const handleProfileChange = (key: keyof ProfileInfo, value: string) => {
    setProfile({ ...profile, [key]: value });
  };

  const handleTitleChange = (index: number, value: string) => {
    const updatedTitles = [...profile.titles];
    updatedTitles[index] = value;
    setProfile({ ...profile, titles: updatedTitles });
  };

  const addTitle = () => {
    setProfile({ ...profile, titles: [...profile.titles, "New Title"] });
  };

  const removeTitle = (index: number) => {
    const updatedTitles = profile.titles.filter((_, i) => i !== index);
    setProfile({ ...profile, titles: updatedTitles });
  };

  // Stats Edit Handlers
  const handleStatChange = (id: string, value: number) => {
    setStats(stats.map(s => s.id === id ? { ...s, value } : s));
  };

  // Skills Edit Handlers
  const handleSkillChange = (id: string, field: "name" | "percentage", value: any) => {
    setSkills(skills.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const addSkill = () => {
    const newSkill: SkillItem = {
      id: `sk-${Date.now()}`,
      name: "New Skill",
      category: "Design",
      percentage: 90
    };
    setSkills([...skills, newSkill]);
  };

  const removeSkill = (id: string) => {
    setSkills(skills.filter(s => s.id !== id));
  };

  // Portfolio Edit Handlers
  const handlePortfolioChange = (id: string, field: keyof PortfolioItem, value: any) => {
    setPortfolio(portfolio.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const addPortfolioItem = () => {
    const newItem: PortfolioItem = {
      id: `port-${Date.now()}`,
      title: "Luxury E-Commerce Project",
      category: "Website Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description: "An incredibly fast, glassmorphic landing page designed for an international customer.",
      technologies: ["React", "Tailwind CSS", "Motion"],
      client: "Global Client",
      results: "100% Client Satisfaction, flawless UI/UX score."
    };
    setPortfolio([newItem, ...portfolio]);
  };

  const removePortfolioItem = (id: string) => {
    setPortfolio(portfolio.filter(item => item.id !== id));
  };

  // Testimonial Handlers
  const handleTestimonialChange = (id: string, field: keyof TestimonialItem, value: any) => {
    setTestimonials(testimonials.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const addTestimonial = () => {
    const newItem: TestimonialItem = {
      id: `rev-${Date.now()}`,
      name: "New Client",
      role: "CEO",
      company: "Startup Corp",
      content: "Saadul did an incredible job building our digital campaign. Truly spectacular execution!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    };
    setTestimonials([...testimonials, newItem]);
  };

  const removeTestimonial = (id: string) => {
    setTestimonials(testimonials.filter(item => item.id !== id));
  };

  // Award Handlers
  const handleAwardChange = (id: string, field: keyof AwardItem, value: any) => {
    setAwards(awards.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const addAward = () => {
    const newItem: AwardItem = {
      id: `aw-${Date.now()}`,
      title: "Gold Merit Award",
      year: "2026",
      description: "Recognized for creative services and high retention video marketing campaigns.",
      issuer: "Design Summit"
    };
    setAwards([...awards, newItem]);
  };

  const removeAward = (id: string) => {
    setAwards(awards.filter(item => item.id !== id));
  };

  // Certificate Handlers
  const handleCertChange = (id: string, field: keyof CertificateItem, value: any) => {
    setCertificates(certificates.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const addCert = () => {
    const newItem: CertificateItem = {
      id: `cert-${Date.now()}`,
      title: "Professional UX Specialist",
      issuer: "Design Academy",
      year: "2025"
    };
    setCertificates([...certificates, newItem]);
  };

  const removeCert = (id: string) => {
    setCertificates(certificates.filter(item => item.id !== id));
  };

  // FAQ Handlers
  const handleFAQChange = (id: string, field: keyof FAQItem, value: any) => {
    setFaqs(faqs.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const addFAQ = () => {
    const newItem: FAQItem = {
      id: `faq-${Date.now()}`,
      question: "What is your revision process?",
      answer: "Revisions are performed instantly. Send feedback on WhatsApp and I will make the edits."
    };
    setFaqs([...faqs, newItem]);
  };

  const removeFAQ = (id: string) => {
    setFaqs(faqs.filter(item => item.id !== id));
  };

  // Blog Handlers
  const handleBlogChange = (id: string, field: keyof BlogPostItem, value: any) => {
    setBlogs(blogs.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const addBlog = () => {
    const newItem: BlogPostItem = {
      id: `blog-${Date.now()}`,
      title: "Creative Visual Trends in 2026",
      summary: "A brief look at high contrast branding and animated layout styles.",
      content: "Luxury branding revolves around extreme detail, rich gold gradients, and interactive responsive layout styles...",
      date: "July 18, 2026",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80",
      category: "Design"
    };
    setBlogs([...blogs, newItem]);
  };

  const removeBlog = (id: string) => {
    setBlogs(blogs.filter(item => item.id !== id));
  };

  return (
    <>
      {/* Floating Gear Settings Toggle - Beautiful Gold Glass */}
      <div className="fixed bottom-6 left-6 z-50">
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-none bg-neutral-950 border-2 border-amber-400 text-amber-400 flex items-center justify-center cursor-pointer shadow-[4px_4px_0px_0px_#D4AF37] relative"
        >
          <Settings size={26} className="animate-[spin_8s_linear_infinite]" />
          <span className="absolute -top-1 -right-1 bg-amber-400 text-black text-[9px] font-mono font-black rounded-none px-1.5 py-0.5 border-2 border-black shadow">
            EDIT
          </span>
        </motion.button>
      </div>

      {/* Editor Drawer Portal Panel */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end font-sans">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
            />

            {/* Sidebar Panel Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-2xl h-full bg-neutral-950 border-l-2 border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.85)] flex flex-col"
            >
              {/* Panel Header */}
              <div className="p-6 border-b-2 border-white/15 flex items-center justify-between bg-neutral-950">
                <div className="flex items-center gap-3">
                  <Sliders className="text-amber-400" size={24} />
                  <div>
                    <h3 className="text-lg font-display font-black text-white uppercase tracking-tight">Luxury Profile Builder</h3>
                    <p className="text-xs text-neutral-400">Modify Saadul's brand contents, pricing, and project grid</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-none bg-neutral-950 border-2 border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-all cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b-2 border-white/10 px-4 overflow-x-auto no-scrollbar gap-1 pt-3 bg-neutral-950">
                {(["profile", "skills", "portfolio", "testimonials", "more"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2.5 text-[10px] font-mono font-black uppercase rounded-t-none transition-all cursor-pointer border-t-2 border-x-2 ${
                      activeTab === tab
                        ? "bg-neutral-900 text-amber-400 border-amber-400 border-b-transparent"
                        : "text-neutral-400 border-transparent hover:text-neutral-200"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Panel Content - Scrollable Form elements */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 text-neutral-300">
                {activeTab === "profile" && (
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-white tracking-wider uppercase border-b border-white/10 pb-2">Primary Information</h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-400 mb-1">Display Name</label>
                        <input
                          type="text"
                          value={profile.name}
                          onChange={(e) => handleProfileChange("name", e.target.value)}
                          className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-400 mb-1">Profile Image URL</label>
                        <input
                          type="text"
                          value={profile.profileImage}
                          onChange={(e) => handleProfileChange("profileImage", e.target.value)}
                          className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400/50 font-mono text-[11px]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1">Professional Titles (Rotator)</label>
                      <div className="space-y-2">
                        {profile.titles.map((title, idx) => (
                          <div key={idx} className="flex gap-2">
                            <input
                              type="text"
                              value={title}
                              onChange={(e) => handleTitleChange(idx, e.target.value)}
                              className="flex-1 bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400/50"
                            />
                            <button
                              onClick={() => removeTitle(idx)}
                              className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center hover:bg-red-500/20 transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
                        <button
                          onClick={addTitle}
                          className="text-xs text-amber-400 flex items-center gap-1 hover:underline cursor-pointer"
                        >
                          <Plus size={14} /> Add Title
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1">About Bio Description</label>
                      <textarea
                        value={profile.description}
                        rows={5}
                        onChange={(e) => handleProfileChange("description", e.target.value)}
                        className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400/50 leading-relaxed"
                      />
                    </div>

                    <h4 className="text-sm font-bold text-white tracking-wider uppercase border-b border-white/10 pb-2 pt-4">Contact Directories</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-400 mb-1">Phone Number</label>
                        <input
                          type="text"
                          value={profile.phone}
                          onChange={(e) => handleProfileChange("phone", e.target.value)}
                          className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-400 mb-1">WhatsApp Number</label>
                        <input
                          type="text"
                          value={profile.whatsapp}
                          onChange={(e) => handleProfileChange("whatsapp", e.target.value)}
                          className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-400 mb-1">Email Address</label>
                        <input
                          type="text"
                          value={profile.email}
                          onChange={(e) => handleProfileChange("email", e.target.value)}
                          className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400/50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-400 mb-1">Location Address</label>
                        <input
                          type="text"
                          value={profile.location}
                          onChange={(e) => handleProfileChange("location", e.target.value)}
                          className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400/50"
                        />
                      </div>
                    </div>

                    <h4 className="text-sm font-mono font-black text-white tracking-widest uppercase border-b-2 border-white/10 pb-2 pt-4">Social Accounts</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {["facebook", "instagram", "linkedin", "behance", "dribbble", "youtube", "tiktok", "pinterest", "github"].map((social) => (
                        <div key={social}>
                          <label className="block text-[10px] font-mono font-black uppercase tracking-wider text-neutral-400 mb-1 capitalize">{social} Link</label>
                          <input
                            type="text"
                            value={(profile as any)[social] || ""}
                            onChange={(e) => handleProfileChange(social as keyof ProfileInfo, e.target.value)}
                            className="w-full bg-neutral-950 border-2 border-white/10 rounded-none px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 font-mono text-[10px]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "skills" && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-mono font-black text-white tracking-widest uppercase border-b-2 border-white/10 pb-2 mb-4">Experience Metric Numbers</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {stats.map((st) => (
                          <div key={st.id} className="bg-neutral-950 p-4 border-2 border-white/10 rounded-none shadow-[2px_2px_0px_0px_rgba(255,255,255,0.02)]">
                            <label className="block text-[10px] font-mono font-black uppercase tracking-wider text-neutral-400 mb-1.5">{st.label}</label>
                            <div className="flex gap-2 items-center">
                              <input
                                type="number"
                                value={st.value}
                                onChange={(e) => handleStatChange(st.id, parseInt(e.target.value) || 0)}
                                className="w-24 bg-neutral-950 border-2 border-white/10 rounded-none px-3 py-1.5 text-xs text-white font-mono font-bold focus:outline-none focus:border-amber-400"
                              />
                              <span className="text-lg text-amber-400 font-mono font-black">{st.suffix}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center border-b-2 border-white/10 pb-2 mb-4">
                        <h4 className="text-sm font-mono font-black text-white tracking-widest uppercase">Circular Skills Progress Bars</h4>
                        <button
                          onClick={addSkill}
                          className="px-3 py-1 bg-amber-400 text-black text-xs font-display font-black uppercase tracking-wider rounded-none border-2 border-black hover:bg-amber-300 hover:shadow-[2px_2px_0px_0px_white] transition-all cursor-pointer"
                        >
                          <Plus size={14} /> Add Skill
                        </button>
                      </div>

                      <div className="space-y-3">
                        {skills.map((sk) => (
                          <div key={sk.id} className="flex gap-3 items-center bg-neutral-950 p-3.5 border-2 border-white/10 rounded-none shadow-[2px_2px_0px_0px_rgba(255,255,255,0.02)]">
                            <div className="flex-1">
                              <input
                                type="text"
                                value={sk.name}
                                onChange={(e) => handleSkillChange(sk.id, "name", e.target.value)}
                                className="bg-transparent text-xs font-mono font-black uppercase text-white border-b border-transparent hover:border-white/20 focus:border-amber-400 focus:outline-none px-1 w-full"
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <input
                                type="number"
                                min={1}
                                max={100}
                                value={sk.percentage}
                                onChange={(e) => handleSkillChange(sk.id, "percentage", Math.min(100, Math.max(0, parseInt(e.target.value) || 0)))}
                                className="w-16 bg-neutral-950 border-2 border-white/10 rounded-none px-2 py-1 text-center font-mono text-xs text-amber-400 focus:outline-none"
                              />
                              <span className="text-xs text-neutral-400 font-mono font-black">%</span>
                              <button
                                onClick={() => removeSkill(sk.id)}
                                className="p-2 rounded-none text-red-400 border-2 border-transparent hover:border-red-500/20 hover:bg-red-500/10 transition-colors cursor-pointer"
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "portfolio" && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b-2 border-white/10 pb-2">
                      <h4 className="text-sm font-mono font-black text-white tracking-widest uppercase">Project Grid</h4>
                      <button
                        onClick={addPortfolioItem}
                        className="px-3.5 py-1.5 bg-amber-400 text-black text-xs font-display font-black uppercase tracking-wider rounded-none border-2 border-black hover:bg-amber-300 hover:shadow-[2px_2px_0px_0px_white] transition-all cursor-pointer"
                      >
                        <Plus size={14} /> Add Project
                      </button>
                    </div>

                    <div className="space-y-5">
                      {portfolio.map((item) => (
                        <div key={item.id} className="p-4 bg-neutral-950 border-2 border-white/10 rounded-none space-y-3 relative shadow-[4px_4px_0px_0px_rgba(255,255,255,0.02)]">
                          <button
                            onClick={() => removePortfolioItem(item.id)}
                            className="absolute top-4 right-4 p-2 text-red-400 hover:bg-red-500/10 rounded-none border-2 border-transparent hover:border-red-500/20 transition-all cursor-pointer animate-pulse"
                          >
                            <Trash2 size={16} />
                          </button>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[10px] font-mono font-black uppercase tracking-wider text-neutral-400 mb-1">Project Title</label>
                              <input
                                type="text"
                                value={item.title}
                                onChange={(e) => handlePortfolioChange(item.id, "title", e.target.value)}
                                className="w-full bg-neutral-950 border-2 border-white/10 rounded-none px-3 py-1.5 text-xs text-white"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-mono font-black uppercase tracking-wider text-neutral-400 mb-1">Category</label>
                              <select
                                value={item.category}
                                onChange={(e) => handlePortfolioChange(item.id, "category", e.target.value)}
                                className="w-full bg-neutral-950 border-2 border-white/10 rounded-none px-3 py-1.5 text-xs text-white focus:outline-none"
                              >
                                <option value="Graphics Design">Graphics Design</option>
                                <option value="Website Design">Website Design</option>
                                <option value="Brand Identity">Brand Identity</option>
                                <option value="Video Editing">Video Editing</option>
                              </select>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[10px] font-mono font-black uppercase tracking-wider text-neutral-400 mb-1">Project Hero Image URL</label>
                              <input
                                type="text"
                                value={item.image}
                                onChange={(e) => handlePortfolioChange(item.id, "image", e.target.value)}
                                className="w-full bg-neutral-950 border-2 border-white/10 rounded-none px-3 py-1.5 text-xs text-white font-mono text-[10px]"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-mono font-black uppercase tracking-wider text-neutral-400 mb-1">Video / YouTube URL (Optional)</label>
                              <input
                                type="text"
                                value={item.videoUrl || ""}
                                onChange={(e) => handlePortfolioChange(item.id, "videoUrl", e.target.value)}
                                className="w-full bg-neutral-950 border-2 border-white/10 rounded-none px-3 py-1.5 text-xs text-white font-mono text-[10px]"
                                placeholder="https://youtu.be/..."
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[10px] font-mono font-black uppercase tracking-wider text-neutral-400 mb-1">Description</label>
                            <textarea
                              rows={2}
                              value={item.description}
                              onChange={(e) => handlePortfolioChange(item.id, "description", e.target.value)}
                              className="w-full bg-neutral-950 border-2 border-white/10 rounded-none px-3 py-1.5 text-xs text-white"
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[10px] font-mono font-black uppercase tracking-wider text-neutral-400 mb-1">Client Name</label>
                              <input
                                type="text"
                                value={item.client}
                                onChange={(e) => handlePortfolioChange(item.id, "client", e.target.value)}
                                className="w-full bg-neutral-950 border-2 border-white/10 rounded-none px-3 py-1.5 text-xs text-white"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-mono font-black uppercase tracking-wider text-neutral-400 mb-1">Key Metrics / Results</label>
                              <input
                                type="text"
                                value={item.results}
                                onChange={(e) => handlePortfolioChange(item.id, "results", e.target.value)}
                                className="w-full bg-neutral-950 border-2 border-white/10 rounded-none px-3 py-1.5 text-xs text-white"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "testimonials" && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b-2 border-white/10 pb-2">
                      <h4 className="text-sm font-mono font-black text-white tracking-widest uppercase">Client Reviews</h4>
                      <button
                        onClick={addTestimonial}
                        className="px-3 py-1 bg-amber-400 text-black text-xs font-display font-black uppercase tracking-wider rounded-none border-2 border-black hover:bg-amber-300 hover:shadow-[2px_2px_0px_0px_white] transition-all cursor-pointer"
                      >
                        <Plus size={14} /> Add Review
                      </button>
                    </div>

                    <div className="space-y-5">
                      {testimonials.map((test) => (
                        <div key={test.id} className="p-4 bg-neutral-950 border-2 border-white/10 rounded-none space-y-3 relative shadow-[4px_4px_0px_0px_rgba(255,255,255,0.02)]">
                          <button
                            onClick={() => removeTestimonial(test.id)}
                            className="absolute top-4 right-4 p-2 text-red-400 hover:bg-red-500/10 rounded-none transition-colors"
                          >
                            <Trash2 size={15} />
                          </button>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[10px] font-mono font-black uppercase tracking-wider text-neutral-400 mb-1">Client Name</label>
                              <input
                                type="text"
                                value={test.name}
                                onChange={(e) => handleTestimonialChange(test.id, "name", e.target.value)}
                                className="w-full bg-neutral-950 border-2 border-white/10 rounded-none px-3 py-1.5 text-xs text-white"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-mono font-black uppercase tracking-wider text-neutral-400 mb-1">Client Role & Company</label>
                              <input
                                type="text"
                                value={`${test.role} at ${test.company}`}
                                onChange={(e) => {
                                  const parts = e.target.value.split(" at ");
                                  handleTestimonialChange(test.id, "role", parts[0] || "");
                                  handleTestimonialChange(test.id, "company", parts[1] || "");
                                }}
                                className="w-full bg-neutral-950 border-2 border-white/10 rounded-none px-3 py-1.5 text-xs text-white"
                                placeholder="Director at Acme Corp"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[10px] font-mono font-black uppercase tracking-wider text-neutral-400 mb-1">Feedback Content</label>
                            <textarea
                              rows={3}
                              value={test.content}
                              onChange={(e) => handleTestimonialChange(test.id, "content", e.target.value)}
                              className="w-full bg-neutral-950 border-2 border-white/10 rounded-none px-3 py-1.5 text-xs text-white leading-relaxed"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "more" && (
                  <div className="space-y-8">
                    {/* Awards */}
                    <div>
                      <div className="flex justify-between items-center border-b-2 border-white/10 pb-2 mb-4">
                        <h4 className="text-sm font-mono font-black text-white tracking-widest uppercase">Honorable Awards</h4>
                        <button
                          onClick={addAward}
                          className="px-2.5 py-1 bg-amber-400 text-black text-[10px] font-display font-black uppercase tracking-wider rounded-none border-2 border-black hover:bg-amber-300 cursor-pointer"
                        >
                          <Plus size={12} /> Add Award
                        </button>
                      </div>
                      <div className="space-y-4">
                        {awards.map(aw => (
                          <div key={aw.id} className="p-3 bg-neutral-950 border-2 border-white/10 rounded-none space-y-2 relative shadow-[2px_2px_0px_0px_rgba(255,255,255,0.01)]">
                            <button
                              onClick={() => removeAward(aw.id)}
                              className="absolute top-3 right-3 text-red-400 hover:text-red-300"
                            >
                              <Trash2 size={14} />
                            </button>
                            <div className="grid grid-cols-3 gap-2">
                              <input
                                type="text"
                                value={aw.title}
                                onChange={(e) => handleAwardChange(aw.id, "title", e.target.value)}
                                className="col-span-2 bg-neutral-950 border-2 border-white/10 rounded-none px-2.5 py-1 text-xs text-white font-sans font-medium"
                              />
                              <input
                                type="text"
                                value={aw.year}
                                onChange={(e) => handleAwardChange(aw.id, "year", e.target.value)}
                                className="bg-neutral-950 border-2 border-white/10 rounded-none px-2.5 py-1 text-xs text-white text-center font-mono font-bold"
                              />
                            </div>
                            <input
                              type="text"
                              value={aw.issuer}
                              onChange={(e) => handleAwardChange(aw.id, "issuer", e.target.value)}
                              className="w-full bg-neutral-950 border-2 border-white/10 rounded-none px-2.5 py-1 text-xs text-amber-400 font-sans font-semibold"
                              placeholder="Issuer / Event"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Certificates */}
                    <div>
                      <div className="flex justify-between items-center border-b-2 border-white/10 pb-2 mb-4">
                        <h4 className="text-sm font-mono font-black text-white tracking-widest uppercase">Certifications</h4>
                        <button
                          onClick={addCert}
                          className="px-2.5 py-1 bg-amber-400 text-black text-[10px] font-display font-black uppercase tracking-wider rounded-none border-2 border-black hover:bg-amber-300 cursor-pointer"
                        >
                          <Plus size={12} /> Add Certificate
                        </button>
                      </div>
                      <div className="space-y-4">
                        {certificates.map(c => (
                          <div key={c.id} className="p-3 bg-neutral-950 border-2 border-white/10 rounded-none space-y-2 relative shadow-[2px_2px_0px_0px_rgba(255,255,255,0.01)]">
                            <button
                              onClick={() => removeCert(c.id)}
                              className="absolute top-3 right-3 text-red-400 hover:text-red-300"
                            >
                              <Trash2 size={14} />
                            </button>
                            <div className="grid grid-cols-3 gap-2">
                              <input
                                type="text"
                                value={c.title}
                                onChange={(e) => handleCertChange(c.id, "title", e.target.value)}
                                className="col-span-2 bg-neutral-950 border-2 border-white/10 rounded-none px-2.5 py-1 text-xs text-white font-sans font-medium"
                              />
                              <input
                                type="text"
                                value={c.year}
                                onChange={(e) => handleCertChange(c.id, "year", e.target.value)}
                                className="bg-neutral-950 border-2 border-white/10 rounded-none px-2.5 py-1 text-xs text-white text-center font-mono font-bold"
                              />
                            </div>
                            <input
                              type="text"
                              value={c.issuer}
                              onChange={(e) => handleCertChange(c.id, "issuer", e.target.value)}
                              className="w-full bg-neutral-950 border-2 border-white/10 rounded-none px-2.5 py-1 text-xs text-amber-300 font-sans font-semibold"
                              placeholder="Credential Institute"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* FAQ Items */}
                    <div>
                      <div className="flex justify-between items-center border-b-2 border-white/10 pb-2 mb-4">
                        <h4 className="text-sm font-mono font-black text-white tracking-widest uppercase">Client FAQ Accordion</h4>
                        <button
                          onClick={addFAQ}
                          className="px-2.5 py-1 bg-amber-400 text-black text-[10px] font-display font-black uppercase tracking-wider rounded-none border-2 border-black hover:bg-amber-300 cursor-pointer"
                        >
                          <Plus size={12} /> Add FAQ
                        </button>
                      </div>
                      <div className="space-y-4">
                        {faqs.map(item => (
                          <div key={item.id} className="p-3 bg-neutral-950 border-2 border-white/10 rounded-none space-y-2 relative shadow-[2px_2px_0px_0px_rgba(255,255,255,0.01)]">
                            <button
                              onClick={() => removeFAQ(item.id)}
                              className="absolute top-3 right-3 text-red-400 hover:text-red-300"
                            >
                              <Trash2 size={14} />
                            </button>
                            <input
                              type="text"
                              value={item.question}
                              onChange={(e) => handleFAQChange(item.id, "question", e.target.value)}
                              className="w-full bg-neutral-950 border-2 border-white/10 rounded-none px-2.5 py-1.5 text-xs text-white font-sans font-semibold"
                              placeholder="Question"
                            />
                            <textarea
                              rows={2}
                              value={item.answer}
                              onChange={(e) => handleFAQChange(item.id, "answer", e.target.value)}
                              className="w-full bg-neutral-950 border-2 border-white/10 rounded-none px-2.5 py-1.5 text-xs text-neutral-300"
                              placeholder="Answer"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Blog posts */}
                    <div>
                      <div className="flex justify-between items-center border-b-2 border-white/10 pb-2 mb-4">
                        <h4 className="text-sm font-mono font-black text-white tracking-widest uppercase">Blogs & Newsletters</h4>
                        <button
                          onClick={addBlog}
                          className="px-2.5 py-1 bg-amber-400 text-black text-[10px] font-display font-black uppercase tracking-wider rounded-none border-2 border-black hover:bg-amber-300 cursor-pointer"
                        >
                          <Plus size={12} /> Add Blog
                        </button>
                      </div>
                      <div className="space-y-4">
                        {blogs.map(item => (
                          <div key={item.id} className="p-3 bg-neutral-950 border-2 border-white/10 rounded-none space-y-2 relative shadow-[2px_2px_0px_0px_rgba(255,255,255,0.01)]">
                            <button
                              onClick={() => removeBlog(item.id)}
                              className="absolute top-3 right-3 text-red-400 hover:text-red-300"
                            >
                              <Trash2 size={14} />
                            </button>
                            <input
                              type="text"
                              value={item.title}
                              onChange={(e) => handleBlogChange(item.id, "title", e.target.value)}
                              className="w-full bg-neutral-950 border-2 border-white/10 rounded-none px-2.5 py-1.5 text-xs text-white font-semibold"
                            />
                            <input
                              type="text"
                              value={item.summary}
                              onChange={(e) => handleBlogChange(item.id, "summary", e.target.value)}
                              className="w-full bg-neutral-950 border-2 border-white/10 rounded-none px-2.5 py-1 text-xs text-neutral-400"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Panel Footer */}
              <div className="p-6 border-t-2 border-white/15 bg-neutral-950 flex items-center justify-between">
                <p className="text-[10px] text-neutral-500 font-mono font-black tracking-wider uppercase">ALL CHANGES PERSIST IN CLIENT LOCALSTORAGE</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-black font-display font-black text-xs uppercase tracking-widest rounded-none border-2 border-black hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] transition-all cursor-pointer"
                >
                  <Save size={14} /> Complete & Save
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
