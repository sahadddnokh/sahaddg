import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Globe, ExternalLink, Calendar, User, Zap, Film } from "lucide-react";
import { PortfolioItem } from "../types";

interface PortfolioPopupProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const PortfolioPopup: React.FC<PortfolioPopupProps> = ({ item, onClose }) => {
  if (!item) return null;

  // Function to extract YouTube Video ID for clean iframe embedding
  const getYouTubeEmbedUrl = (url: string) => {
    let videoId = "";
    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0] || "";
    } else if (url.includes("youtube.com/watch")) {
      const urlParams = new URLSearchParams(new URL(url).search);
      videoId = urlParams.get("v") || "";
    } else if (url.includes("youtube.com/embed/")) {
      videoId = url.split("youtube.com/embed/")[1]?.split("?")[0] || "";
    }

    if (videoId) {
      // Remove any parameters
      videoId = videoId.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    }
    return url;
  };

  const isVideo = item.category === "Video Editing" || !!item.videoUrl;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-sans">
        {/* Backdrop glass blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Main container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: "spring", damping: 25, stiffness: 220 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-950 border-2 border-white rounded-none shadow-[8px_8px_0px_0px_#D4AF37] flex flex-col no-scrollbar"
        >
          {/* Close trigger button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-none bg-black/80 border-2 border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-900 hover:border-white transition-all cursor-pointer"
          >
            <X size={18} />
          </button>

          {/* Media Stage */}
          <div className="w-full relative aspect-video bg-black/40 overflow-hidden flex items-center justify-center border-b-2 border-white/10">
            {isVideo && item.videoUrl ? (
              <iframe
                title={item.title}
                src={getYouTubeEmbedUrl(item.videoUrl)}
                className="w-full h-full border-0 absolute inset-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
            )}

            {/* Video overlay label */}
            {isVideo && (
              <span className="absolute top-4 left-4 bg-black border-2 border-amber-400 text-black text-[9px] font-mono font-black text-amber-400 px-2.5 py-1 rounded-none uppercase flex items-center gap-1 shadow">
                <Film size={10} /> Live Showreel Video
              </span>
            )}
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <span className="text-amber-400 text-xs font-mono font-black tracking-[0.2em] uppercase block">
                  {item.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tighter mt-1">
                  {item.title}
                </h3>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 self-start sm:self-auto pt-1">
                {item.liveLink && (
                  <a
                    href={item.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-none bg-amber-400 border-2 border-black hover:bg-amber-300 text-black font-display font-black text-xs uppercase tracking-wider hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] transition-all cursor-pointer"
                  >
                    <Globe size={14} />
                    Live Website
                  </a>
                )}
                {item.behanceLink && (
                  <a
                    href={item.behanceLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-none bg-neutral-950 border-2 border-white/15 text-white hover:bg-neutral-900 font-display font-black text-xs uppercase tracking-wider hover:border-white hover:shadow-[3px_3px_0px_0px_#D4AF37] transition-all cursor-pointer"
                  >
                    <ExternalLink size={14} />
                    Behance Case Study
                  </a>
                )}
              </div>
            </div>

            {/* Grid layout for specs and overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {/* Left Column: Details */}
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h4 className="text-xs font-mono font-black text-neutral-400 uppercase tracking-widest mb-2">Project Overview</h4>
                  <p className="text-sm text-neutral-300 leading-relaxed whitespace-pre-line">
                    {item.description}
                  </p>
                </div>

                {/* Gallery Images Section if present */}
                {item.gallery && item.gallery.length > 0 && (
                  <div className="pt-2">
                    <h4 className="text-xs font-mono font-black text-neutral-400 uppercase tracking-widest mb-3">Project Assets / Slides</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {item.gallery.map((imgUrl, i) => (
                        <div key={i} className="aspect-video rounded-none overflow-hidden border-2 border-white/10 bg-neutral-900">
                          <img
                            src={imgUrl}
                            alt={`Slide ${i}`}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Key-value facts */}
              <div className="bg-neutral-950 border-2 border-white/10 rounded-none p-5 space-y-4 h-fit shadow-[4px_4px_0px_0px_rgba(255,255,255,0.03)]">
                <div>
                  <span className="text-[9px] text-neutral-500 uppercase font-mono block mb-1">Collaborator</span>
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <User size={13} className="text-amber-400" />
                    {item.client}
                  </div>
                </div>

                <div>
                  <span className="text-[9px] text-neutral-500 uppercase font-mono block mb-1">Delivered Outcome</span>
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Zap size={13} className="text-amber-400 animate-pulse" />
                    {item.results}
                  </div>
                </div>

                <div>
                  <span className="text-[9px] text-neutral-500 uppercase font-mono block mb-1">Tech Stack & Tools</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {item.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-neutral-950 text-[10px] text-neutral-300 rounded-none border-2 border-white/10 font-mono font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <span className="text-[9px] text-neutral-500 uppercase font-mono block">Support Cycle</span>
                  <p className="text-[10px] text-neutral-400 mt-0.5">Lifetime visual revisions & tech consultations.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
