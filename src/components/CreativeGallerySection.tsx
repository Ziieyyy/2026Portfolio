"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const creativeWorks = [
  {
    id: 1,
    title: "Malaysian Culture",
    category: "poster",
    type: "Digital Poster Illustration",
    description: "A rich digital poster celebrating Malaysia's traditional heritage, vibrant flora, and cultural harmony using flat vector layouts and batik design cues.",
    tools: ["Adobe Illustrator", "Photoshop", "Figma"],
    image: "/images/malaysian_poster.png",
    emoji: "🎨",
    color: "#FF8A65",
    year: "2024",
  },
  {
    id: 2,
    title: "Retro Vaporwave Grid",
    category: "poster",
    type: "Aesthetic Vector Print",
    description: "A high-fidelity retro poster capturing aesthetic 80s neon gridlines, vector palm trees, low-poly mountains, and a glowing wireframe sunset gradient.",
    tools: ["Illustrator", "InDesign", "Procreate"],
    image: "/images/vaporwave_sunset.png",
    emoji: "🌄",
    color: "#C3B1E1",
    year: "2025",
  },
  {
    id: 3,
    title: "Cyberpunk City Alley",
    category: "animation",
    type: "3D Motion Graphics Loop",
    description: "A beautiful atmospheric 3D motion loop animation capturing neon shop signs, rain reflection on streets, and slow-drifting mist in an urban cyberpunk alley.",
    tools: ["Blender", "After Effects", "Premiere Pro"],
    image: null,
    gradient: "linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)", // Cyberpunk purple rain theme
    emoji: "🎬",
    color: "#1595F3",
    year: "2025",
    watchLink: "#",
  },
  {
    id: 4,
    title: "Kinetic Typography",
    category: "animation",
    type: "Dynamic Text Animation",
    description: "A fast-paced typography motion graphics piece syncing kinetic font weights, text scales, and sound transitions to a modern synthesized electronic beat.",
    tools: ["After Effects", "Illustrator", "Audition"],
    image: null,
    gradient: "linear-gradient(135deg, #f857a6 0%, #ff5858 100%)", // Hot typography pink gradient
    emoji: "⚡",
    color: "#B9E769",
    year: "2026",
    watchLink: "#",
  },
];

export default function CreativeGallerySection() {
  const [filter, setFilter] = useState<"all" | "poster" | "animation">("all");
  const [selectedItem, setSelectedItem] = useState<typeof creativeWorks[0] | null>(null);

  const filteredWorks = creativeWorks.filter(
    (work) => filter === "all" || work.category === filter
  );

  return (
    <section id="creative-gallery" className="relative py-20 md:py-28 px-6 md:px-12 bg-[#FFFDF8]/40 border-t border-b border-black/5">
      {/* Tape decoration */}
      <div
        className="washi-tape washi-tape-orange"
        style={{
          top: "-12px",
          left: "8%",
          width: "100px",
          height: "22px",
          transform: "rotate(-3deg)",
          zIndex: 10,
        }}
      />

      {/* Header */}
      <div className="text-center mb-14">
        <span
          className="sticker-badge sticker-lavender text-base mb-3 inline-block"
          style={{ fontFamily: "var(--font-sticker)", transform: "rotate(2deg)" }}
        >
          🎬 Creative Corner
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold mt-4"
          style={{ fontFamily: "var(--font-heading)", color: "#333" }}
        >
          Posters & Animations
        </h2>
        <p className="text-sm text-gray-500 mt-2" style={{ fontFamily: "var(--font-handwritten)" }}>
          A playground of motion design, print artwork, and vectors ✦
        </p>

        {/* Categories Tab Filters */}
        <div className="flex justify-center gap-2 mt-8 flex-wrap">
          {[
            { id: "all", label: "✨ Show All", color: "sticker-lavender" },
            { id: "poster", label: "🎨 Posters", color: "sticker-orange" },
            { id: "animation", label: "🎬 Animations", color: "sticker-blue" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`sticker-badge text-xs py-1.5 px-4 cursor-pointer font-medium border border-black/5 shadow-sm transition-all duration-200 ${
                filter === tab.id
                  ? `${tab.color} scale-105 -rotate-2 font-bold shadow-md`
                  : "bg-white/80 hover:bg-white text-gray-600"
              }`}
              style={{ fontFamily: "var(--font-sticker)" }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Cards Grid */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work, i) => (
              <motion.div
                layout
                key={work.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="polaroid-card cursor-pointer rounded-sm flex flex-col justify-between"
                style={{
                  transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`,
                }}
                onClick={() => setSelectedItem(work)}
              >
                {/* Washi Tape Corner */}
                <div
                  className="washi-tape"
                  style={{
                    top: "-8px",
                    left: i % 2 === 0 ? "-10px" : "auto",
                    right: i % 2 === 0 ? "auto" : "-10px",
                    width: "60px",
                    height: "18px",
                    transform: `rotate(${i % 2 === 0 ? -15 : 15}deg)`,
                    background: `${work.color}35`,
                  }}
                />

                {/* Polaroid Frame Top (Media Preview) */}
                <div
                  className="aspect-square w-full rounded-sm overflow-hidden border border-black/5 relative flex items-center justify-center bg-gray-50"
                  style={{ background: work.gradient || "#fafafa" }}
                >
                  {work.image ? (
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="text-center p-4">
                      <span className="text-5xl block mb-2 float-animation">{work.emoji}</span>
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider text-white/90 px-2 py-0.5 rounded-full"
                        style={{ background: work.color }}
                      >
                        {work.type.split(" ")[0]} loop
                      </span>
                    </div>
                  )}
                </div>

                {/* Polaroid Bottom Caption (Handwritten) */}
                <div className="pt-4 pb-2 px-1 text-center">
                  <h3
                    className="text-base font-bold text-gray-800"
                    style={{ fontFamily: "var(--font-handwritten)" }}
                  >
                    {work.title}
                  </h3>
                  <span
                    className="text-[11px] font-semibold block mt-1 uppercase"
                    style={{ color: work.color, fontFamily: "var(--font-sticker)" }}
                  >
                    {work.emoji} {work.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Expanded Polaroid Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close pin */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-xl font-bold transition-colors cursor-pointer"
              >
                ✕
              </button>

              <div className="space-y-4">
                {/* Header (Matches Projects Modal) */}
                <div className="text-center">
                  <span className="text-5xl">{selectedItem.emoji}</span>
                  <h3
                    className="text-2xl font-bold mt-2"
                    style={{ fontFamily: "var(--font-heading)", color: selectedItem.color }}
                  >
                    {selectedItem.title}
                  </h3>
                  <p className="text-sm text-gray-500" style={{ fontFamily: "var(--font-sticker)" }}>
                    {selectedItem.type}
                  </p>
                </div>

                {/* Media/Illustration Box */}
                {selectedItem.image ? (
                  <div className="aspect-video w-full rounded-lg overflow-hidden border border-black/5 relative flex items-center justify-center shadow-inner">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="aspect-video w-full rounded-lg overflow-hidden border border-black/5 relative flex items-center justify-center shadow-inner"
                    style={{ background: selectedItem.gradient || "#fafafa" }}
                  >
                    <div className="text-center p-6">
                      <span className="text-5xl block mb-2 float-animation">{selectedItem.emoji}</span>
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider text-white px-2 py-0.5 rounded-full"
                        style={{ background: selectedItem.color }}
                      >
                        🎬 Animation Loop
                      </span>
                    </div>
                  </div>
                )}

                {/* Description Paper Card (Matches Projects Modal Process Card) */}
                <div className="p-4 rounded-lg" style={{ background: `${selectedItem.color}10` }}>
                  <h4 className="text-sm font-bold mb-1" style={{ fontFamily: "var(--font-section)" }}>
                    📖 Process & Details
                  </h4>
                  <p className="text-xs text-gray-700 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {selectedItem.description}
                  </p>
                </div>

                {/* Tools Stack (Matches Projects Modal Features Badges) */}
                <div>
                  <h4 className="text-sm font-bold mb-2" style={{ fontFamily: "var(--font-section)" }}>
                    🔧 Tools Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tools
                      .filter(Boolean)
                      .filter((t) => t.trim() !== "")
                      .map((tool) => (
                        <span
                          key={tool}
                          className="sticker-badge text-xs"
                          style={{
                            background: `${selectedItem.color}20`,
                            borderColor: `${selectedItem.color}40`,
                            color: selectedItem.color,
                            fontFamily: "var(--font-sticker)",
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
