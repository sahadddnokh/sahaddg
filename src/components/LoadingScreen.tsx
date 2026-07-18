import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Bot } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [shouldExit, setShouldExit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShouldExit(true);
            setTimeout(onComplete, 800);
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!shouldExit && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-[#070708] flex flex-col items-center justify-center font-sans"
        >
          {/* Glowing structural beams */}
          <div className="absolute top-[35%] left-[20%] w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[30%] right-[20%] w-[350px] h-[350px] rounded-full bg-yellow-600/5 blur-[120px] animate-pulse" />

          {/* Micro scanline patterns */}
          <div className="absolute inset-0 opacity-[0.02] bg-repeat bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="text-center relative">
            {/* Spinning Golden Orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-10 border border-amber-400/10 rounded-full flex items-center justify-center"
            >
              <div className="w-2 h-2 rounded-full bg-amber-400 -mt-1 shadow-[0_0_12px_#D4AF37]" />
            </motion.div>

            {/* Logo Text Reveal */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h1 className="text-4xl sm:text-5xl font-black tracking-[0.25em] text-white flex items-center gap-1 font-sans">
                SAADUL<span className="text-amber-400 animate-pulse">.</span>
              </h1>
              <p className="text-[10px] text-amber-400/60 font-mono tracking-[0.4em] uppercase mt-2">
                CREATIVE STUDIO
              </p>
            </motion.div>

            {/* Percentage Display */}
            <div className="mt-14 relative h-10 w-44 flex flex-col items-center justify-center">
              <motion.span 
                key={progress}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-2xl font-bold font-mono text-white/90"
              >
                {Math.min(100, progress)}%
              </motion.span>
              <div className="w-full h-[1px] bg-white/10 rounded-full mt-2 overflow-hidden relative">
                <motion.div 
                  className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 shadow-[0_0_8px_#D4AF37]"
                  style={{ width: `${Math.min(100, progress)}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Creative Loading messages */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-[10px] text-neutral-400 font-mono flex items-center justify-center gap-1.5"
            >
              <Bot size={12} className="text-amber-400 animate-spin" />
              {progress < 40 ? "Configuring 3D environment..." : 
               progress < 85 ? "Loading portfolio visualizers..." : 
               "Connecting secure brand representatives..."}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
