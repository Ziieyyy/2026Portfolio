"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-20 md:py-28 px-6 md:px-12" ref={ref}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span
          className="sticker-badge sticker-blue text-base mb-3 inline-block"
          style={{ fontFamily: "var(--font-sticker)", transform: "rotate(-2deg)" }}
        >
          👋 About Me
        </span>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          data-aos="fade-right"
          className="paper-card p-6 relative"
          style={{ transform: "rotate(-1deg)" }}
        >
          {/* Tape decoration */}
          <div
            className="washi-tape washi-tape-green"
            style={{ top: "-10px", left: "30px", transform: "rotate(-8deg)" }}
          />
          {/* Profile image placeholder */}
          <div
            className="w-full aspect-square rounded-lg mb-4 flex items-center justify-center text-6xl"
            style={{ background: "linear-gradient(135deg, #E8F4FD, #D4E8F0)" }}
          >
            👨‍💻
          </div>
          <h3
            className="text-xl font-bold mb-1"
            style={{ fontFamily: "var(--font-heading)", color: "#1595F3" }}
          >
            Khairul Azizi
          </h3>
          <p
            className="text-sm mb-3"
            style={{ fontFamily: "var(--font-sticker)", color: "#555" }}
          >
            Web Developer
          </p>
          <div className="space-y-2 text-xs" style={{ fontFamily: "var(--font-body)" }}>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span className="text-gray-600">Malaysia</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🎓</span>
              <span className="text-gray-600">Diploma in Information Technology</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <span className="text-gray-600">khairazizi@gmail.com</span>
            </div>
          </div>
        </motion.div>

        {/* Bio + Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          data-aos="fade-left"
          className="md:col-span-2 space-y-6"
        >
          {/* Bio Card */}
          <div className="paper-card p-6 relative">
            <div
              className="washi-tape"
              style={{ top: "-10px", right: "40px", transform: "rotate(5deg)" }}
            />
            <p
              className="text-sm leading-relaxed text-gray-700 mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Hello! I&apos;m <span className="font-bold text-[#1595F3]">Khairul Azizi</span>, a Diploma in Information Technology student with a genuine passion for web development. My journey in tech began with curiosity about how digital products are built, and it has evolved into a dedicated pursuit of creating clean, functional, and user-friendly applications.
            </p>
            <p
              className="text-sm leading-relaxed text-gray-700"
              style={{ fontFamily: "var(--font-body)" }}
            >
              While I&apos;m still early in my development journey, I&apos;ve been actively learning React and Supabase to build modern web applications. My background in customer-facing roles, particularly in coffee retail, has shaped my understanding of user needs and the importance of intuitive design.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Education Highlight */}
            <div className="paper-card p-4 relative" style={{ transform: "rotate(0.5deg)" }}>
              <div
                className="washi-tape washi-tape-blue"
                style={{ top: "-8px", left: "20px", transform: "rotate(-5deg)", width: "80px", height: "15px" }}
              />
              <h4
                className="text-sm font-bold mb-1 flex items-center gap-1.5"
                style={{ fontFamily: "var(--font-section)", color: "#1595F3" }}
              >
                🎓 Education
              </h4>
              <p className="text-[11px] text-gray-500 font-bold mb-1" style={{ fontFamily: "var(--font-sticker)" }}>IT Diploma Student</p>
              <p className="text-[11px] text-gray-600 leading-normal" style={{ fontFamily: "var(--font-body)" }}>
                Strong foundation in programming, algorithms, database management, and system design.
              </p>
            </div>

            {/* Development Highlight */}
            <div className="paper-card p-4 relative" style={{ transform: "rotate(-0.5deg)" }}>
              <div
                className="washi-tape washi-tape-green"
                style={{ top: "-8px", right: "20px", transform: "rotate(4deg)", width: "80px", height: "15px" }}
              />
              <h4
                className="text-sm font-bold mb-1 flex items-center gap-1.5"
                style={{ fontFamily: "var(--font-section)", color: "#B9E769" }}
              >
                💻 Development
              </h4>
              <p className="text-[11px] text-gray-500 font-bold mb-1" style={{ fontFamily: "var(--font-sticker)" }}>React & Supabase</p>
              <p className="text-[11px] text-gray-600 leading-normal" style={{ fontFamily: "var(--font-body)" }}>
                Experience building responsive frontends and working with backend services, real-time sync, and database tables.
              </p>
            </div>

            {/* UI/UX Highlight */}
            <div className="paper-card p-4 relative" style={{ transform: "rotate(-1deg)" }}>
              <div
                className="washi-tape washi-tape-orange"
                style={{ top: "-8px", left: "20px", transform: "rotate(-3deg)", width: "80px", height: "15px" }}
              />
              <h4
                className="text-sm font-bold mb-1 flex items-center gap-1.5"
                style={{ fontFamily: "var(--font-section)", color: "#FF8A65" }}
              >
                🎨 UI/UX Mindset
              </h4>
              <p className="text-[11px] text-gray-500 font-bold mb-1" style={{ fontFamily: "var(--font-sticker)" }}>User-Centric Design</p>
              <p className="text-[11px] text-gray-600 leading-normal" style={{ fontFamily: "var(--font-body)" }}>
                Focusing on creating clean, intuitive, and modern user interfaces that put the user experience first.
              </p>
            </div>

            {/* Background Highlight */}
            <div className="paper-card p-4 relative" style={{ transform: "rotate(1deg)" }}>
              <div
                className="washi-tape washi-tape-lavender"
                style={{ top: "-8px", right: "20px", transform: "rotate(5deg)", width: "80px", height: "15px" }}
              />
              <h4
                className="text-sm font-bold mb-1 flex items-center gap-1.5"
                style={{ fontFamily: "var(--font-section)", color: "#C3B1E1" }}
              >
                ☕ Background
              </h4>
              <p className="text-[11px] text-gray-500 font-bold mb-1" style={{ fontFamily: "var(--font-sticker)" }}>Coffee Retail Experience</p>
              <p className="text-[11px] text-gray-600 leading-normal" style={{ fontFamily: "var(--font-body)" }}>
                Customer service experience that brings strong interpersonal, listening, and problem-solving skills to development.
              </p>
            </div>
          </div>

          {/* Interests */}
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="sticker-badge sticker-blue text-[10px]">🌐 Web Dev</span>
            <span className="sticker-badge sticker-green text-[10px]">⚡ React</span>
            <span className="sticker-badge sticker-orange text-[10px]">📁 Supabase</span>
            <span className="sticker-badge sticker-lavender text-[10px]">☕ Coffee</span>
            <span className="sticker-badge sticker-pink text-[10px]">💻 Coding</span>
          </div>
        </motion.div>
      </div>

      {/* Floating doodles */}
      <motion.div
        className="absolute top-16 right-8 text-2xl hidden md:block"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        ⭐
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-8 text-xl hidden md:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        💫
      </motion.div>
    </section>
  );
}
