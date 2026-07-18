import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Smartphone, Bot, Menu, X, ArrowRight, Sparkles } from "lucide-react";

export const NavGlass: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState("home");

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Industries", href: "#industries" },
    { label: "Experience", href: "#experience" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple intersection highlights
      const scrollPosition = window.scrollY + 120;
      for (const item of menuItems) {
        const id = item.href.slice(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveAnchor(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.slice(1);
    const el = document.getElementById(targetId);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 85,
        behavior: "smooth"
      });
      setActiveAnchor(targetId);
    }
  };

  const handleTriggerAI = () => {
    setMobileMenuOpen(false);
    const chatbotBtn = document.querySelector("#ai-chat-assistant button");
    if (chatbotBtn) {
      (chatbotBtn as HTMLButtonElement).click();
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "py-3 bg-[#070708]/80 border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "#home")}
              className="flex items-center gap-1.5 font-display font-black text-white text-xl sm:text-2xl tracking-tighter uppercase cursor-pointer"
            >
              SAADUL<span className="text-amber-400 font-black">.</span>
            </a>

            {/* Desktop Navigation links */}
            <div className="hidden lg:flex items-center gap-1.5 p-1 rounded-none bg-neutral-950 border-2 border-white/15">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`px-3 py-1.5 text-[10px] uppercase font-mono font-black tracking-wider rounded-none transition-all ${
                    activeAnchor === item.href.slice(1)
                      ? "text-black bg-amber-400 border-2 border-black"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Actions (WhatsApp, AI Bot, Mobile Toggle) */}
            <div className="flex items-center gap-2">
              {/* Trigger Chatbot assistant */}
              <button
                onClick={handleTriggerAI}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-neutral-950 border-2 border-white/10 hover:border-amber-400 text-neutral-300 hover:text-amber-400 text-[10px] uppercase font-mono font-black tracking-wider cursor-pointer transition-all"
              >
                <Bot size={14} className="animate-pulse" />
                Ask Assistant
              </button>

              <a
                href="https://wa.me/8801892661449"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-none bg-amber-400 border-2 border-black text-black font-display font-black text-xs uppercase tracking-widest hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] transition-all cursor-pointer"
              >
                <Smartphone size={14} />
                Hire Saadul
              </a>

              {/* Mobile Burger toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-none bg-neutral-950 border-2 border-white/15 flex items-center justify-center text-white cursor-pointer hover:bg-neutral-900 transition-colors"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-[60px] sm:top-[74px] inset-x-0 z-30 lg:hidden bg-[#070708] border-b-2 border-white/15 shadow-2xl overflow-hidden font-sans"
          >
            <div className="px-4 py-6 space-y-3 bg-neutral-950/90">
              <div className="grid grid-cols-2 gap-2">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`p-3 text-xs uppercase font-mono font-black rounded-none text-center border-2 transition-all ${
                      activeAnchor === item.href.slice(1)
                        ? "bg-amber-400 border-black text-black font-black"
                        : "bg-neutral-950 border-white/10 text-neutral-300 hover:text-white hover:border-white/20"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Mobile AI button */}
              <button
                onClick={handleTriggerAI}
                className="w-full flex items-center justify-center gap-2 p-3 rounded-none bg-neutral-950 border-2 border-white/10 text-amber-400 text-xs font-mono font-black uppercase tracking-wider cursor-pointer"
              >
                <Bot size={16} />
                Connect with AI Assistant <Sparkles size={12} className="text-amber-400" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
