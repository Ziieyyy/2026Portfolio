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
            Web Developer & IT Specialist
          </p>
          <div className="space-y-2 text-xs" style={{ fontFamily: "var(--font-body)" }}>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span className="text-gray-600">Selangor, Malaysia</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🎓</span>
              <span className="text-gray-600">Diploma in IT (Digital Technology)</span>
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
              Hello! I&apos;m <span className="font-bold text-[#1595F3]">Khairul Azizi</span>, an IT and Digital Technology graduate from <span className="font-bold">Politeknik Ungku Omar</span> with a passion for technology, digital solutions, and creative design. I enjoy building user-friendly web and mobile applications, solving technical problems, and exploring innovative ideas in system development and UI/UX design.
            </p>
            <p
              className="text-sm leading-relaxed text-gray-700 mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Throughout my academic journey, I consistently achieved <span className="font-bold">Dean’s List</span> recognition and developed strong skills in programming, web development, system analysis, and digital technologies. I also completed an internship at <span className="font-bold">Wallmaster Malaysia</span> under the IT & Administration department, where I gained hands-on experience in IT support, troubleshooting, website maintenance, software setup, and multimedia-related tasks.
            </p>
            <p
              className="text-sm leading-relaxed text-gray-700"
              style={{ fontFamily: "var(--font-body)" }}
            >
              I am highly adaptable, eager to learn, and motivated to contribute to meaningful digital projects that drive impact.
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
                🎓 Academic Honors
              </h4>
              <p className="text-[11px] text-gray-500 font-bold mb-1" style={{ fontFamily: "var(--font-sticker)" }}>Politeknik Ungku Omar</p>
              <p className="text-[11px] text-gray-600 leading-normal" style={{ fontFamily: "var(--font-body)" }}>
                Achieved 4.00 GPAs & Semesters 1–5 Dean&apos;s List. Competed in Cybertech Arena Web Design Challenge (2nd Place).
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
                💻 System Engineering
              </h4>
              <p className="text-[11px] text-gray-500 font-bold mb-1" style={{ fontFamily: "var(--font-sticker)" }}>Full-Stack & React Native</p>
              <p className="text-[11px] text-gray-600 leading-normal" style={{ fontFamily: "var(--font-body)" }}>
                Built BreedLink matchmaking mobile app using React Native & Supabase, winning 1st Place (Best Project) at ICE JTMK.
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
                🎨 Creative & Multimedia
              </h4>
              <p className="text-[11px] text-gray-500 font-bold mb-1" style={{ fontFamily: "var(--font-sticker)" }}>Digital Storytelling Winner</p>
              <p className="text-[11px] text-gray-600 leading-normal" style={{ fontFamily: "var(--font-body)" }}>
                Achieved 3rd Place in Selangor State DST Competition (2022). Experienced in Adobe Illustrator, Animate & Canva.
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
                💼 Professional Experience
              </h4>
              <p className="text-[11px] text-gray-500 font-bold mb-1" style={{ fontFamily: "var(--font-sticker)" }}>IT Support & Service</p>
              <p className="text-[11px] text-gray-600 leading-normal" style={{ fontFamily: "var(--font-body)" }}>
                IT Support Intern at Wallmaster, troubleshooting web platforms & user software. Part-time service at Richeese Factory.
              </p>
            </div>
          </div>

          {/* Interests */}
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="sticker-badge sticker-blue text-[10px]">🌐 Full-Stack Dev</span>
            <span className="sticker-badge sticker-green text-[10px]">⚡ React Native</span>
            <span className="sticker-badge sticker-orange text-[10px]">📁 Supabase</span>
            <span className="sticker-badge sticker-lavender text-[10px]">🛠️ IT Support</span>
            <span className="sticker-badge sticker-pink text-[10px]">🎬 Multimedia</span>
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
