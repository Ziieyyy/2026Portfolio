"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const creativeWorks = [
  {
    id: 1,
    title: "BreedLink Promo Posters",
    category: "poster",
    type: "Promotional UI & Poster Design",
    description: "A set of high-impact promotional posters designed for the BreedLink cat matching mobile platform. Focuses on user acquisition, showing key matching and messaging features alongside cute cat character illustrations.",
    tools: ["Canva"],
    image: "/images/BreedlinkPoster1.jpg",
    images: ["/images/BreedlinkPoster1.jpg", "/images/BreedlinkPoster2.jpg"],
    video: null,
    emoji: "🐱",
    color: "#1595F3",
    year: "2025",
  },
  {
    id: 2,
    title: "Digital Multimedia Illustrator",
    category: "poster",
    type: "Multimedia Graphic Design Showcase",
    description: "A custom designed poster that highlights the core tenets of multimedia illustration. Demonstrates the synergy of high-contrast layout grids, vector branding assets, and digital retouching.",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    image: "/images/Digital Multimedia Illustrator.jpg",
    images: null,
    video: null,
    emoji: "🎨",
    color: "#FF8A65",
    year: "2025",
  },
  {
    id: 3,
    title: "Digital Storytelling Animation",
    category: "animation",
    type: "Selangor State DST Award Winner (3rd Place)",
    description: "A premium, character-driven 2D digital storytelling animation developed for the Selangor State Level Digital Story Telling competition (Secondary School Category). Achieved 3rd Place out of competitive entries from all across Selangor! Showcases extensive character animation, fluid frame transitions, and sound dynamics.",
    tools: ["Plotagon"],
    image: null,
    images: null,
    video: "/images/animation.mp4",
    emoji: "🏆",
    color: "#B9E769",
    year: "2022",
    watchLink: "https://btpnsel.edu.my/2022/10/keputusan-digital-story-telling-animation-dst-peringkat-negeri-selangor/",
  },
  {
    id: 4,
    title: "Spotify Animated Video Ad",
    category: "animation",
    type: "Commercial Motion Design",
    description: "A fast-paced, high-fidelity commercial animation simulating a premium Spotify audio/video advertisement. Focuses on kinetic typography synchronizations, smooth vector layout transitions, and high-retention audio pacing.",
    tools: ["Adobe Animate"],
    image: null,
    images: null,
    video: "/images/spotify ads.mp4",
    emoji: "🎵",
    color: "#C3B1E1",
    year: "2025",
  },
];

export default function CreativeGallerySection() {
  const [filter, setFilter] = useState<"all" | "poster" | "animation">("all");
  const [selectedItem, setSelectedItem] = useState<typeof creativeWorks[0] | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  const handleSelectItem = (item: typeof creativeWorks[0]) => {
    setSelectedItem(item);
    setActiveImageIdx(0);
  };

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
      <div className="text-center mb-14 w-full flex flex-col items-center justify-center">
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
          className={`grid gap-8 ${
            filteredWorks.length === 2
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-[580px] mx-auto"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full"
          }`}
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
                className="polaroid-card cursor-pointer rounded-sm flex flex-col justify-between h-full"
                style={{
                  transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`,
                }}
                onClick={() => handleSelectItem(work)}
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
                  style={{ background: "#fafafa" }}
                >
                  {work.image ? (
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : work.video ? (
                    <div className="w-full h-full relative group">
                      <video
                        src={work.video}
                        muted
                        loop
                        playsInline
                        autoPlay
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-black/25 flex items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity duration-200">
                        <span className="text-white text-3xl float-animation">▶️</span>
                      </div>
                    </div>
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
              className="modal-content relative overflow-visible border-2 border-black/10"
              style={{
                maxWidth: "680px",
                padding: "24px 20px 20px 20px",
                maxHeight: "92vh",
                background: "#FFFDF9",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25), inset 0 0 40px rgba(0,0,0,0.02)"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Virtual Jagged Washi Tape holding down the card */}
              <div
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 opacity-90 z-20 pointer-events-none"
                style={{
                  background: `${selectedItem.color}d5`,
                  transform: "rotate(-1.5deg)",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 15%, transparent 15%)",
                  backgroundSize: "8px 8px",
                  clipPath: "polygon(0% 20%, 3% 0%, 97% 0%, 100% 20%, 98% 80%, 96% 100%, 4% 100%, 0% 80%)"
                }}
              />

              {/* Close pin */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 text-lg font-bold transition-colors cursor-pointer z-20 w-8 h-8 rounded-full bg-white/80 border border-black/5 flex items-center justify-center hover:scale-105 shadow-sm"
              >
                ✕
              </button>

              <div className="space-y-4">
                {/* Header (Matches Projects Modal) */}
                <div className="text-center border-b border-black/5 pb-2 pt-2">
                  <span className="text-4xl inline-block hover:scale-110 transition-transform">{selectedItem.emoji}</span>
                  <h3
                    className="text-xl font-bold mt-1 leading-tight"
                    style={{ fontFamily: "var(--font-heading)", color: selectedItem.color }}
                  >
                    {selectedItem.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: "var(--font-sticker)" }}>
                    {selectedItem.type}
                  </p>
                </div>

                {/* Grid Content: Side-by-side on desktop, stacked on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                  {/* Left Column: Media Showcase (Aspect ratio optimized, Polaroid Frame styling) */}
                  <div className="md:col-span-6 w-full">
                    {selectedItem.video ? (
                      <div 
                        className="bg-white p-3 pb-8 rounded-sm shadow-md border border-black/10 relative" 
                        style={{ transform: "rotate(-1deg)" }}
                      >
                        {/* Red push-pin on top of video polaroid */}
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#FF4F4F] shadow-[inset -1px -1px 3px rgba(0,0,0,0.3),2px 2px 4px rgba(0,0,0,0.2)] z-10 flex items-center justify-center">
                          <div className="w-1 h-1 bg-white rounded-full opacity-60 absolute top-0.5 left-0.5" />
                        </div>
                        <div className="aspect-video w-full rounded-sm overflow-hidden border border-black/5 relative flex items-center justify-center bg-black">
                          <video
                            src={selectedItem.video}
                            controls
                            autoPlay
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    ) : selectedItem.images && selectedItem.images.length > 0 ? (
                      <div className="space-y-3">
                        <div 
                          className="bg-white p-3 pb-8 rounded-sm shadow-md border border-black/10 relative" 
                          style={{ transform: "rotate(-1deg)" }}
                        >
                          {/* Red push-pin on top of image polaroid */}
                          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#FF4F4F] shadow-[inset -1px -1px 3px rgba(0,0,0,0.3),2px 2px 4px rgba(0,0,0,0.2)] z-10 flex items-center justify-center">
                            <div className="w-1 h-1 bg-white rounded-full opacity-60 absolute top-0.5 left-0.5" />
                          </div>
                          <div className="aspect-[3/4] w-full rounded-sm overflow-hidden border border-black/5 relative flex items-center justify-center bg-gray-50">
                            <img
                              src={selectedItem.images[activeImageIdx]}
                              alt={`${selectedItem.title} ${activeImageIdx + 1}`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                        {/* Thumbnail Switchers */}
                        <div className="flex justify-center gap-1.5 mt-1">
                          {selectedItem.images.map((img, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActiveImageIdx(idx)}
                              className={`w-9 h-9 rounded border-2 overflow-hidden transition-all duration-200 cursor-pointer ${
                                activeImageIdx === idx ? "border-[#1595F3] scale-105 shadow-md" : "border-black/10 opacity-70 hover:opacity-100"
                              }`}
                            >
                              <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : selectedItem.image ? (
                      <div 
                        className="bg-white p-3 pb-8 rounded-sm shadow-md border border-black/10 relative" 
                        style={{ transform: "rotate(-1deg)" }}
                      >
                        {/* Red push-pin on top of single image polaroid */}
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#FF4F4F] shadow-[inset -1px -1px 3px rgba(0,0,0,0.3),2px 2px 4px rgba(0,0,0,0.2)] z-10 flex items-center justify-center">
                          <div className="w-1 h-1 bg-white rounded-full opacity-60 absolute top-0.5 left-0.5" />
                        </div>
                        <div className="aspect-[3/4] w-full rounded-sm overflow-hidden border border-black/5 relative flex items-center justify-center bg-gray-50">
                          <img
                            src={selectedItem.image}
                            alt={selectedItem.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    ) : null}
                  </div>

                  {/* Right Column: Process details, tools, and award results link */}
                  <div className="md:col-span-6 space-y-3 flex flex-col pt-1">
                    {/* Description Paper Card (Yellow Lined Notebook Design) */}
                    <div 
                      className="p-3.5 rounded-sm relative overflow-hidden border border-black/10 shadow-sm" 
                      style={{ 
                        background: "#FFFDF2", 
                        backgroundImage: "linear-gradient(rgba(21, 149, 243, 0.07) 1px, transparent 1px)",
                        backgroundSize: "100% 22px",
                        borderLeft: `4px solid ${selectedItem.color}`,
                        paddingLeft: "16px"
                      }}
                    >
                      <h4 
                        className="text-xs font-bold mb-1 flex items-center gap-1" 
                        style={{ fontFamily: "var(--font-section)", color: selectedItem.color }}
                      >
                        📖 Process & Details
                      </h4>
                      <p 
                        className="text-[11px] text-gray-700 font-medium" 
                        style={{ fontFamily: "var(--font-body)", lineHeight: "22px" }}
                      >
                        {selectedItem.description}
                      </p>
                    </div>

                    {/* Tools Stack */}
                    <div>
                      <h4 className="text-xs font-bold mb-1.5" style={{ fontFamily: "var(--font-section)" }}>
                        🔧 Tools Stack
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedItem.tools
                          .filter(Boolean)
                          .filter((t) => t.trim() !== "")
                          .map((tool) => (
                            <span
                              key={tool}
                              className="sticker-badge text-[10px] py-0.5 px-2.5 transition-transform hover:scale-105"
                              style={{
                                background: `${selectedItem.color}15`,
                                borderColor: `${selectedItem.color}35`,
                                color: selectedItem.color,
                                fontFamily: "var(--font-sticker)",
                              }}
                            >
                              {tool}
                            </span>
                          ))}
                      </div>
                    </div>

                    {/* Award Button */}
                    {selectedItem.watchLink && (
                      <div className="pt-1">
                        <a
                          href={selectedItem.watchLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-scrapbook btn-orange text-[10px] py-2 px-2.5 flex items-center justify-center gap-1.5 font-bold w-full text-center hover:scale-[1.02] transition-transform shadow-md"
                          style={{ fontFamily: "var(--font-sticker)", color: "#fff" }}
                        >
                          🏆 View Official Result: DIGITAL STORY TELLING ANIMATION (DST) - MENENGAH THIRD PLACE
                        </a>
                      </div>
                    )}
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
