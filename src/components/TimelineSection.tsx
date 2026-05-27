"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timelineData = [
  {
    year: "2022 - 2023",
    color: "#1595F3",
    events: [
      "Completed SPM at SMK Raja Mahadi",
      "Won 3rd Place (Selangor State), Digital Storytelling Animation (DST) Competition 2022",
      "Mastered digital design fundamentals, storyboarding, and vector illustration",
    ],
  },
  {
    year: "2024",
    color: "#FF8A65",
    events: [
      "Began Diploma in IT (Technology Digital) at Politeknik Ungku Omar",
      "Maintained consecutive Dean's List academic standing (Semesters 1-3)",
      "Learned fundamental programming in Java, Python, and Object-Oriented Principles",
    ],
  },
  {
    year: "2025",
    color: "#B9E769",
    events: [
      "Earned multiple 4.00 GPA Dean Awards (Semester 4 & 5)",
      "Co-created BreedLink pet breeding matchmaking app, winning 1st Place (Best Project) at ICE JTMK 2025",
      "Won 2nd Place, Cybertech Arena: Nationwide Web Design Challenge 2025",
      "Developed custom databases & authenticated APIs with React and Supabase",
    ],
  },
  {
    year: "2026",
    color: "#C3B1E1",
    events: [
      "IT Support & Multimedia Internship at Wallmaster (Jan - May 2026)",
      "Troubleshot corporate web portals, resolved user system configurations & edited content",
      "Graduating in IT (Technology Digital) at Politeknik Ungku Omar 🎓",
    ],
  },
];

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="relative py-20 md:py-28 px-6" ref={ref}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span
          className="sticker-badge sticker-green text-base mb-3 inline-block"
          style={{ fontFamily: "var(--font-sticker)", transform: "rotate(-2deg)" }}
        >
          📅 Timeline
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold mt-4"
          style={{ fontFamily: "var(--font-heading)", color: "#333" }}
        >
          My Journey
        </h2>
      </motion.div>

      {/* Desktop Horizontal Scrollable Timeline */}
      <div className="hidden md:block max-w-5xl mx-auto overflow-x-auto pb-6 no-scrollbar" data-aos="fade-up">
        <div className="relative min-w-[800px] px-8">
          {/* Timeline Line */}
          <div className="absolute top-[60px] left-8 right-8 h-[4px] rounded-full"
            style={{
              background: "linear-gradient(90deg, #1595F3, #FF8A65, #B9E769, #C3B1E1)",
            }}
          />

          {/* Timeline Items */}
          <div className="flex justify-between relative">
            {timelineData.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex flex-col items-center w-1/4"
              >
                {/* Year Badge */}
                <div
                  className="text-xl font-bold text-white px-4 py-1.5 rounded-full mb-4 z-10 relative"
                  style={{
                    background: item.color,
                    fontFamily: "var(--font-feature)",
                    boxShadow: "2px 3px 0px rgba(0,0,0,0.1)",
                  }}
                >
                  {item.year}
                </div>

                {/* Dot */}
                <div
                  className="w-5 h-5 rounded-full border-[3px] border-white z-10 mb-4"
                  style={{
                    background: item.color,
                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                  }}
                />

                {/* Event card */}
                <div
                  className="paper-card p-4 w-full relative"
                  style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
                >
                  {/* Mini tape */}
                  <div
                    className="washi-tape"
                    style={{
                      top: "-8px",
                      left: "50%",
                      transform: `translateX(-50%) rotate(${i % 2 === 0 ? -4 : 3}deg)`,
                      width: "70px",
                      height: "18px",
                      background: `${item.color}30`,
                    }}
                  />
                  <ul className="space-y-2 text-xs text-gray-700" style={{ fontFamily: "var(--font-body)" }}>
                    {item.events.map((event, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span style={{ color: item.color }}>•</span>
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Vertical Timeline */}
      <div className="block md:hidden max-w-xl mx-auto relative px-4" data-aos="fade-up">
        <div className="space-y-12">
          {timelineData.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center relative"
            >
              {/* Year Badge */}
              <div
                className="inline-block text-base sm:text-lg font-bold text-white px-5 py-1.5 rounded-full z-10 relative mb-4"
                style={{
                  background: item.color,
                  fontFamily: "var(--font-feature)",
                  boxShadow: "2px 3px 0px rgba(0,0,0,0.1)",
                }}
              >
                {item.year}
              </div>

              {/* Content Card */}
              <div
                className="paper-card p-6 relative w-full flex flex-col items-center text-center"
                style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
              >
                {/* Mini tape in center */}
                <div
                  className="washi-tape"
                  style={{
                    top: "-8px",
                    left: "50%",
                    transform: `translateX(-50%) rotate(${i % 2 === 0 ? -3 : 3}deg)`,
                    width: "80px",
                    height: "20px",
                    background: `${item.color}30`,
                  }}
                />
                
                {/* Centered Bullet Points */}
                <ul className="space-y-3 text-sm sm:text-base text-gray-700 text-center list-none w-full" style={{ fontFamily: "var(--font-body)" }}>
                  {item.events.map((event, j) => (
                    <li key={j} className="leading-relaxed">
                      • {event}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Doodles */}
      <motion.div
        className="absolute top-20 right-8 text-2xl hidden md:block"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        ⏰
      </motion.div>
    </section>
  );
}
