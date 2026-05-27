"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "hero", label: "Home", emoji: "🏠" },
  { id: "about", label: "About", emoji: "👋" },
  { id: "skills", label: "Skills", emoji: "⭐" },
  { id: "web-portfolio", label: "Projects", emoji: "💻" },
  { id: "creative-gallery", label: "Creative", emoji: "🎬" },
  { id: "timeline", label: "Timeline", emoji: "📅" },
  { id: "contact", label: "Contact", emoji: "✉️" },
];

export default function ScrapbookNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionLabel, setTransitionLabel] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Don't override active items during full-screen page transitions
      if (isTransitioning) return;
      
      setScrolled(window.scrollY > 100);
      
      let maxVisibleHeight = 0;
      let activeId = activeSection;

      // Calculate the visible height of each section in the viewport
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          
          // Clamp section boundaries to the current viewport height
          const visibleTop = Math.max(0, rect.top);
          const visibleBottom = Math.min(window.innerHeight, rect.bottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);

          // The section with the largest visible footprint on screen is marked active
          if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            activeId = item.id;
          }
        }
      }

      setActiveSection(activeId);
    };

    const handlePageTurnEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string; label: string }>;
      if (customEvent.detail) {
        scrollTo(customEvent.detail.id, customEvent.detail.label);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("trigger-page-turn", handlePageTurnEvent);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("trigger-page-turn", handlePageTurnEvent);
    };
  }, [isTransitioning]);

  const scrollTo = (id: string, label: string) => {
    setTransitionLabel(label);
    setIsTransitioning(true);
    setActiveSection(id);

    // Scroll instantly behind the page cover at 400ms (midway point of screen sweep)
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
      }
    }, 400);

    // Deactivate transition screen at 850ms
    setTimeout(() => {
      setIsTransitioning(false);
    }, 850);
  };

  return (
    <>
      {/* Dynamic Notebook Page Turn Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.85, ease: [0.66, 0, 0.33, 1] }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "#F7F4E6", // scrapbook paper color
              backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.12) 0%, transparent 10%)",
              boxShadow: "0 0 50px rgba(0,0,0,0.25)",
              zIndex: 99999, // on top of everything
              pointerEvents: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Binder rings details on the edge of the sweeping sheet */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "20px",
                bottom: 0,
                width: "40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                padding: "20px 0",
              }}
            >
              {Array.from({ length: 15 }).map((_, idx) => (
                <div
                  key={idx}
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    border: "3px solid #DDDABF",
                    background: "#EBE8CD",
                    boxShadow: "inset 2px 2px 3px rgba(0,0,0,0.15)",
                  }}
                />
              ))}
            </div>

            {/* Handdrawn sticker card */}
            <motion.div
              initial={{ scale: 0.85, rotate: -8 }}
              animate={{ scale: 1.05, rotate: -3 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="p-6 md:p-8 rounded-2xl text-center"
              style={{
                fontFamily: "var(--font-sticker)",
                border: "3px dashed #1595F3",
                background: "#FFFDF8",
                boxShadow: "4px 6px 0px rgba(0,0,0,0.1)",
              }}
            >
              <div className="text-4xl mb-2">📖</div>
              <div className="text-xl md:text-2xl font-bold text-gray-800">
                Flipping to {transitionLabel}...
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {scrolled && (
          <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-[9990] flex justify-center py-3 px-4"
          >
            <div
              className="flex items-center gap-0.5 sm:gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg border border-white/40 overflow-x-auto max-w-[92vw] no-scrollbar flex-nowrap whitespace-nowrap"
              style={{
                background: "rgba(247, 244, 230, 0.92)",
                backdropFilter: "blur(12px)",
              }}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id, item.label)}
                  className="relative px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex-shrink-0"
                  style={{
                    fontFamily: "var(--font-sticker)",
                    fontSize: "13px",
                    color: activeSection === item.id ? "white" : "#333",
                    background:
                      activeSection === item.id ? "#1595F3" : "transparent",
                  }}
                >
                  <span className="hidden md:inline">
                    {item.emoji} {item.label}
                  </span>
                  <span className="md:hidden">{item.emoji}</span>
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
