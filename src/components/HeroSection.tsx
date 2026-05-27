"use client";

import { motion } from "framer-motion";

const buntingColors = [
  "#FF8A65", "#B9E769", "#1595F3", "#FFE066", "#FFB6C1",
  "#C3B1E1", "#FF8A65", "#B9E769", "#1595F3", "#FFE066",
  "#FFB6C1", "#C3B1E1", "#FF8A65", "#B9E769", "#1595F3",
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1595F3 0%, #0D7AD4 70%, #0A6ABB 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Grain overlay for the blue section */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Bunting Banner */}
      <div className="flex justify-center pt-6 gap-0 relative z-10">
        <svg width="0" height="0" className="absolute">
          <defs>
            <filter id="bunting-shadow">
              <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.15" />
            </filter>
          </defs>
        </svg>
        {/* String line */}
        <div className="absolute top-[22px] left-[10%] right-[10%] h-[2px] bg-white/30 rounded-full" />
        <div className="flex gap-[6px] relative z-10">
          {buntingColors.map((color, i) => (
            <motion.div
              key={i}
              animate={{ rotate: [i % 2 === 0 ? -4 : 4, i % 2 === 0 ? 4 : -4] }}
              transition={{
                duration: 2 + (i % 3) * 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              style={{
                width: "26px",
                height: "34px",
                background: color,
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.12))",
                transformOrigin: "top center",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-10 pb-24 md:pt-16 md:pb-32 text-center">
        {/* Floating decorative stickers */}
        <motion.div
          className="absolute top-20 left-2 md:left-16 text-3xl md:text-5xl select-none pointer-events-none"
          animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          🎨
        </motion.div>
        <motion.div
          className="absolute top-32 right-2 md:right-20 text-2xl md:text-4xl select-none pointer-events-none"
          animate={{ y: [0, -10, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          ✏️
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-2 md:left-24 text-2xl md:text-4xl select-none pointer-events-none"
          animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          📐
        </motion.div>
        <motion.div
          className="absolute bottom-24 right-2 md:right-28 text-2xl md:text-4xl select-none pointer-events-none"
          animate={{ y: [0, -8, 0], rotate: [3, -3, 3] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          📷
        </motion.div>
        <motion.div
          className="absolute top-48 left-1/4 text-2xl md:text-3xl hidden md:block select-none pointer-events-none"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          🎬
        </motion.div>
        <motion.div
          className="absolute top-36 right-1/4 text-2xl md:text-3xl hidden md:block select-none pointer-events-none"
          animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          📻
        </motion.div>
 
        {/* Green sticker label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="sticker-badge sticker-green mb-4 text-sm sm:text-base select-none"
          style={{ fontFamily: "var(--font-sticker)" }}
        >
          ✨ Web Developer
        </motion.div>
 
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-4 w-full px-4 flex justify-center text-center"
        >
          <h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white leading-tight w-full max-w-full break-words"
            style={{
              fontFamily: "var(--font-heading)",
              textShadow: "3px 4px 0px rgba(0,0,0,0.1)",
              lineHeight: 1.1,
            }}
          >
            <span className="inline-block">
              Port
              <span
                className="inline-block"
                style={{
                  color: "#FFE066",
                  fontFamily: "var(--font-feature)",
                  transform: "rotate(2deg)",
                  marginLeft: "2px",
                }}
              >
                folio
              </span>
            </span>
          </h1>
        </motion.div>
 
        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/95 mb-3 w-full text-center px-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Khairul Azizi
        </motion.h2>
 
        {/* Subtitle / tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-base sm:text-lg md:text-xl text-white/80 mb-8 px-4 w-full text-center"
          style={{
            fontFamily: "var(--font-handwritten)",
            maxWidth: "600px",
            width: "100%",
          }}
        >
          Building clean, functional, and user-friendly web applications ✦
        </motion.p>
 
        {/* Year Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 15 }}
          animate={{ opacity: 1, scale: 1, rotate: 5 }}
          transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
          className="inline-block px-6 py-2 rounded-xl text-xl sm:text-2xl md:text-3xl font-bold select-none"
          style={{
            fontFamily: "var(--font-feature)",
            background: "#FF8A65",
            color: "white",
            boxShadow: "3px 4px 0px rgba(0,0,0,0.15)",
            transform: "rotate(5deg)",
          }}
        >
          2026
        </motion.div>

        {/* Scroll hint button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => {
            const event = new CustomEvent("trigger-page-turn", {
              detail: { id: "about", label: "About" },
            });
            window.dispatchEvent(event);
          }}
          style={{
            position: "absolute",
            bottom: "36px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 20,
          }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/70 hover:text-white text-base transition-colors"
            style={{
              fontFamily: "var(--font-handwritten)",
              letterSpacing: "1px",
            }}
          >
            ↓ scroll down ↓
          </motion.div>
        </motion.button>
      </div>

      {/* Torn edge bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-6"
        style={{
          background: "#F7F4E6",
          clipPath:
            "polygon(0% 60%, 2% 20%, 5% 70%, 8% 30%, 11% 65%, 14% 15%, 17% 55%, 20% 25%, 23% 70%, 26% 10%, 29% 60%, 32% 30%, 35% 65%, 38% 20%, 41% 55%, 44% 35%, 47% 70%, 50% 15%, 53% 60%, 56% 25%, 59% 55%, 62% 30%, 65% 70%, 68% 20%, 71% 60%, 74% 35%, 77% 55%, 80% 25%, 83% 70%, 86% 15%, 89% 60%, 92% 30%, 95% 65%, 98% 20%, 100% 55%, 100% 100%, 0% 100%)",
        }}
      />
    </section>
  );
}
