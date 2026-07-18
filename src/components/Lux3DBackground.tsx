import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export const Lux3DBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth springs for mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePos({ x, y });

      // Normalize between -30 and 30 pixels for smooth parallax
      const normX = ((e.clientX / window.innerWidth) - 0.5) * 60;
      const normY = ((e.clientY / window.innerHeight) - 0.5) * 60;
      mouseX.set(normX);
      mouseY.set(normY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Generate deterministic particles for lightweight rendering
  const particles = React.useMemo(() => {
    return Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.4 + 0.1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * -20,
    }));
  }, []);

  // Floating 3D-like objects
  const floatingObjects = [
    {
      id: "obj1",
      className: "w-48 h-48 rounded-full bg-gradient-to-tr from-yellow-500/10 to-amber-600/5 border border-amber-500/20 shadow-[inset_0_4px_30px_rgba(212,175,55,0.15)]",
      x: "15%",
      y: "20%",
      scale: 1,
      speedMultiplier: 0.6,
      blur: "backdrop-blur-[2px]",
    },
    {
      id: "obj2",
      className: "w-72 h-72 rounded-3xl bg-gradient-to-br from-neutral-800/20 to-amber-900/5 border border-amber-400/10 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_2px_15px_rgba(255,255,255,0.05)]",
      x: "75%",
      y: "55%",
      scale: 1.1,
      speedMultiplier: -0.4,
      rotate: 45,
      blur: "backdrop-blur-[3px]",
    },
    {
      id: "obj3",
      className: "w-40 h-40 rounded-full bg-gradient-to-bl from-white/5 to-amber-500/5 border border-white/10 shadow-[inset_0_4px_20px_rgba(255,255,255,0.1)]",
      x: "80%",
      y: "15%",
      scale: 0.9,
      speedMultiplier: 0.8,
      blur: "backdrop-blur-[1px]",
    },
    {
      id: "obj4",
      className: "w-56 h-56 rounded-[40px] bg-gradient-to-r from-yellow-500/5 to-transparent border border-amber-500/10 shadow-[inset_0_0_20px_rgba(212,175,55,0.1)]",
      x: "10%",
      y: "70%",
      scale: 0.8,
      speedMultiplier: -0.7,
      rotate: -15,
      blur: "backdrop-blur-[2px]",
    }
  ];

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      style={{ perspective: "1000px" }}
    >
      {/* Absolute Dark Luxury Background */}
      <div className="absolute inset-0 bg-[#070708]" />

      {/* Modern Luxury CSS Noise and Scanlines Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-repeat bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Dynamic Mouse Follow Glowing Orb */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.12] bg-radial from-[#D4AF37] to-transparent"
        style={{
          left: mousePos.x - 300,
          top: mousePos.y - 300,
          transition: "transform 0.1s cubic-bezier(0.1, 0.8, 0.3, 1)",
        }}
      />

      {/* Secondary Ambient Static Deep Glows */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />
      <div className="absolute bottom-[20%] right-[15%] w-[600px] h-[600px] rounded-full bg-amber-500/4 blur-[140px]" />

      {/* Floating 3D Geometric Objects with springs for mouse parallax */}
      {floatingObjects.map((obj) => (
        <motion.div
          key={obj.id}
          className={`absolute ${obj.className} ${obj.blur}`}
          style={{
            left: obj.x,
            top: obj.y,
            x: springX,
            y: springY,
            rotate: obj.rotate || 0,
          }}
          animate={{
            y: [0, 25 * obj.speedMultiplier, 0],
            rotate: obj.rotate ? [obj.rotate, obj.rotate + 15, obj.rotate] : [0, 10, 0],
          }}
          transition={{
            duration: Math.abs(obj.speedMultiplier) * 12 + 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating Sparkle Particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-amber-400"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [p.opacity, p.opacity * 2, p.opacity],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Elegant Golden Ray Grid Line Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(212,175,55,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
    </div>
  );
};
