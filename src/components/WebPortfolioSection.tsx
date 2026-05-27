"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const webProjects = [
  {
    id: 2,
    title: "BreedLink",
    role: "UI/UX Designer & Developer",
    problem: "Cat owners struggle to find compatible breeding partners and verified breeders, leading to unethical breeding practices.",
    solution: "A cat matching platform with profile creation, swipe matching, real-time chat, geolocation for nearby breeders, and vet verification system.",
    tools: ["React", "Supabase", "HTML", "CSS", "JavaScript"],
    process: "Research → Wireframing → High-fidelity Prototype → Database Setup → UI/UX Implementation",
    features: ["Profile creation", "Swipe matching", "Real-time chat", "Geolocation", "Vet verification"],
    color: "#1595F3",
    emoji: "🐱",
    image: null,
    protoLink: "https://drive.google.com/drive/folders/159jCqEIkYN_TYHxIoY-FF3i3eVeHXCPa?usp=drive_link",
    pinned: true,
  },
  {
    id: 1,
    title: "myEasyAssets",
    role: "Full-Stack Developer",
    problem: "Organizations struggle to efficiently track, monitor, and analyze assets, leading to manual errors and depreciation calculation issues.",
    solution: "A modern, professional asset management and tracking system designed to help organizations efficiently manage, monitor, and analyze their assets in real time.",
    tools: ["React", "TypeScript", "Supabase", "Tailwind CSS", "shadcn-ui"],
    process: "Database Design → Authentication & RLS → Dashboard Metrics → Asset CRUD → Depreciation Engine",
    features: ["Real-time asset tracking", "Depreciation calculator", "Maintenance scheduling", "Secure authentication"],
    color: "#FF8A65",
    emoji: "💼",
    image: null,
    protoLink: "https://myeassy-assets.vercel.app/",
  },
  {
    id: 3,
    title: "Auto Finance Calculator",
    role: "Frontend Developer",
    problem: "Vehicle buyers in Malaysia lack simple and transparent tools to compare auto financing loan rates across different banks.",
    solution: "A modern web application that helps users compare car loan rates from multiple Malaysian banks, featuring a comprehensive loan calculator.",
    tools: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL"],
    process: "Requirements Gathering → Calculation Engine Development → Multi-Bank UI → Admin Portal Integration",
    features: ["Browse vehicles", "Loan calculator", "Bank comparison", "Search & filter system", "Multi-language", "Dark mode"],
    color: "#B9E769",
    emoji: "🚗",
    image: null,
    protoLink: "https://autofinancecalculator.vercel.app/",
  },
  {
    id: 4,
    title: "Burung Hantu Western Restaurant",
    role: "Full-Stack Developer",
    problem: "Traditional restaurants lack a lightweight online order and menu management system to serve digital-first customers.",
    solution: "A web-based restaurant commerce system that allows customers to browse menus, place orders, and manage profiles, with admin features.",
    tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    process: "UI Design → Database Schema Design → Cart Logic Implementation → User Auth → Admin Menu Management",
    features: ["Menu browsing", "Online ordering", "Shopping cart", "User login & profiles"],
    color: "#C3B1E1",
    emoji: "🦉",
    image: null,
    protoLink: "https://burunghantuwestern.wasmer.app/",
  },
];

export default function WebPortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof webProjects[0] | null>(null);

  return (
    <section id="web-portfolio" className="relative py-20 md:py-28 px-6 md:px-12" ref={ref}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span
          className="sticker-badge sticker-blue text-base mb-3 inline-block"
          style={{ fontFamily: "var(--font-sticker)", transform: "rotate(2deg)" }}
        >
          💻 Website / UI-UX
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold mt-4"
          style={{ fontFamily: "var(--font-heading)", color: "#333" }}
        >
          Web & UI/UX Projects
        </h2>
        <p className="text-sm text-gray-500 mt-2" style={{ fontFamily: "var(--font-handwritten)" }}>
          Interactive designs & digital experiences ✦
        </p>
      </motion.div>

      {/* Projects */}
      <div className="max-w-5xl mx-auto space-y-8" data-aos="fade-up">
        {webProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="paper-card p-6 md:p-8 relative"
            style={{ transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)` }}
          >
            {/* Pinned Sticker Badge */}
            {project.pinned && (
              <span
                className="sticker-badge sticker-pink text-[11px]"
                style={{
                  position: "absolute",
                  top: "-12px",
                  left: "24px",
                  transform: "rotate(-4deg)",
                  zIndex: 20,
                  fontFamily: "var(--font-sticker)",
                  boxShadow: "3px 4px 0px rgba(0,0,0,0.1)",
                }}
              >
                📌 Pinned Project
              </span>
            )}

            {/* Tape */}
            <div
              className="washi-tape"
              style={{
                top: "-12px",
                left: project.pinned ? "auto" : (i % 2 === 0 ? "30px" : "auto"),
                right: project.pinned ? "24px" : (i % 2 === 0 ? "auto" : "30px"),
                transform: `rotate(${i % 2 === 0 ? -6 : 5}deg)`,
                background: `${project.color}40`,
                zIndex: 10,
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6">
              {/* Project Image Area */}
              <div
                className="aspect-video rounded-lg flex items-center justify-center relative overflow-hidden border border-black/5"
                style={{ background: `${project.color}15` }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <span className="text-6xl">{project.emoji}</span>
                )}
                <span
                  className="absolute top-2 right-2 sticker-badge text-white text-[10px] z-10"
                  style={{ background: project.color, padding: "3px 10px" }}
                >
                  {project.role.split(" ")[0]}
                </span>
              </div>

              {/* Project Info */}
              <div className="space-y-3">
                <h3
                  className="text-xl md:text-2xl font-bold"
                  style={{ fontFamily: "var(--font-heading)", color: project.color }}
                >
                  {project.emoji} {project.title}
                </h3>
                <p className="text-xs font-medium text-gray-500" style={{ fontFamily: "var(--font-sticker)" }}>
                  Role: {project.role}
                </p>

                {/* Problem & Solution */}
                <div className="space-y-2">
                  <div className="p-3 rounded-lg" style={{ background: "#FFF5F5" }}>
                    <p className="text-xs font-bold text-red-400 mb-1" style={{ fontFamily: "var(--font-sticker)" }}>
                      ⚠️ Problem
                    </p>
                    <p className="text-xs text-gray-700" style={{ fontFamily: "var(--font-body)" }}>
                      {project.problem}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg" style={{ background: "#F0FFF4" }}>
                    <p className="text-xs font-bold text-green-500 mb-1" style={{ fontFamily: "var(--font-sticker)" }}>
                      ✅ Solution
                    </p>
                    <p className="text-xs text-gray-700" style={{ fontFamily: "var(--font-body)" }}>
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] px-2 py-1 rounded-full border font-medium"
                      style={{
                        borderColor: `${project.color}40`,
                        color: project.color,
                        fontFamily: "var(--font-sticker)",
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-scrapbook btn-blue text-xs py-2 px-4"
                  >
                    View Details
                  </button>
                  <a href={project.protoLink} className="btn-scrapbook btn-orange text-xs py-2 px-4">
                    🔗 Prototype
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 30 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-xl"
              >
                ✕
              </button>
              <div className="space-y-4">
                <div className="text-center">
                  <span className="text-5xl">{selectedProject.emoji}</span>
                  <h3
                    className="text-2xl font-bold mt-2"
                    style={{ fontFamily: "var(--font-heading)", color: selectedProject.color }}
                  >
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-gray-500" style={{ fontFamily: "var(--font-sticker)" }}>
                    {selectedProject.role}
                  </p>
                </div>

                {selectedProject.image && (
                  <div className="aspect-video w-full rounded-lg overflow-hidden border border-black/5 relative flex items-center justify-center shadow-inner bg-white">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-4 rounded-lg" style={{ background: `${selectedProject.color}10` }}>
                  <h4 className="text-sm font-bold mb-1" style={{ fontFamily: "var(--font-section)" }}>
                    📋 Process
                  </h4>
                  <p className="text-xs text-gray-700" style={{ fontFamily: "var(--font-body)" }}>
                    {selectedProject.process}
                  </p>
                </div>
                {selectedProject.features && (
                  <div>
                    <h4 className="text-sm font-bold mb-2" style={{ fontFamily: "var(--font-section)" }}>
                      ✨ Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.features.map((f) => (
                        <span key={f} className="sticker-badge sticker-green text-xs">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating doodle */}
      <motion.div
        className="absolute top-20 right-6 text-2xl hidden md:block"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        🖥️
      </motion.div>
    </section>
  );
}
