"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const skills = [
  { name: "React", icon: "💻", level: 85, color: "#1595F3" },
  { name: "JavaScript", icon: "⚡", level: 80, color: "#FFE066" },
  { name: "HTML", icon: "🌐", level: 90, color: "#B9E769" },
  { name: "CSS", icon: "🎨", level: 85, color: "#FF8A65" },
  { name: "Supabase", icon: "📁", level: 75, color: "#C3B1E1" },
  { name: "Tailwind CSS", icon: "🌊", level: 85, color: "#FFB6C1" },
  { name: "UI/UX", icon: "✏️", level: 80, color: "#FF8A65" },
  { name: "GitHub", icon: "🐙", level: 85, color: "#B9E769" },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setAnimated(true), 200);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section
      id="skills"
      className="relative py-20 md:py-28 px-6 md:px-12"
      ref={ref}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span
          className="sticker-badge sticker-orange text-base mb-3 inline-block"
          style={{ fontFamily: "var(--font-sticker)", transform: "rotate(2deg)" }}
        >
          ⭐ Skills
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold mt-4"
          style={{ fontFamily: "var(--font-heading)", color: "#333" }}
        >
          What I Can Do
        </h2>
      </motion.div>

      <div className="max-w-[900px] mx-auto w-full px-4" data-aos="fade-up">
        {/* Skills Grid */}
        <div className="p-6 sm:p-10 relative bg-[#FFFDF8] rounded-xl shadow-md border border-black/5 w-full box-border">
          {/* Tape */}
          <div
            className="washi-tape washi-tape-green"
            style={{ top: "-10px", left: "50%", transform: "translateX(-50%) rotate(-3deg)" }}
          />
          <div
            className="washi-tape washi-tape-blue"
            style={{ top: "-10px", right: "30px", transform: "rotate(4deg)" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 w-full">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                  <span
                    style={{ fontFamily: "var(--font-sticker)", fontSize: "14px", fontWeight: 500, display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <span style={{ fontSize: "18px" }}>{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span
                    style={{ fontFamily: "var(--font-handwritten)", fontSize: "12px", fontWeight: "bold", color: skill.color }}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div className="skill-bar-container">
                  <div
                    className="skill-bar-fill"
                    style={{
                      width: animated ? `${skill.level}%` : "0%",
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
                      transitionDelay: `${i * 0.1}s`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Software Icons Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8"
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}
        >
          {[
            { name: "React", emoji: "⚡", color: "sticker-blue" },
            { name: "Supabase", emoji: "📁", color: "sticker-green" },
            { name: "Tailwind CSS", emoji: "🌊", color: "sticker-orange" },
            { name: "TypeScript", emoji: "🔷", color: "sticker-lavender" },
            { name: "VS Code", emoji: "💻", color: "sticker-pink" },
            { name: "GitHub", emoji: "🐙", color: "sticker-yellow" },
          ].map((tool) => (
            <span key={tool.name} className={`sticker-badge ${tool.color} text-xs`}>
              {tool.emoji} {tool.name}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Doodle decorations */}
      <motion.div
        className="absolute top-24 left-6 text-3xl hidden md:block"
        animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        🖌️
      </motion.div>
      <motion.div
        className="absolute bottom-16 right-10 text-2xl hidden md:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        💡
      </motion.div>
    </section>
  );
}
