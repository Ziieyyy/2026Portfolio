"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timelineData = [
  {
    year: "2023",
    color: "#1595F3",
    events: [
      "Learnt HTML, CSS & JavaScript",
      "Built first static web projects",
      "Explored database basics (MySQL)",
    ],
  },
  {
    year: "2024",
    color: "#FF8A65",
    events: [
      "Began IT Diploma studies",
      "Built Burung Hantu restaurant commerce system",
      "Learned PHP & MySQL database design",
    ],
  },
  {
    year: "2025",
    color: "#B9E769",
    events: [
      "Launched BreedLink cat matching web app",
      "Built Auto Finance Calculator portal",
      "Mastered React, Tailwind CSS & Supabase",
    ],
  },
  {
    year: "2026",
    color: "#C3B1E1",
    events: [
      "Created myEasyAssets management system",
      "Focusing on full-stack React & Supabase apps",
      "Preparing for a professional developer role 🎓",
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
      <div className="block md:hidden max-w-2xl mx-auto relative px-4" data-aos="fade-up">
        {/* Vertical line */}
        <div
          className="absolute left-6 top-2 bottom-2 w-1 rounded-full"
          style={{
            background: "linear-gradient(180deg, #1595F3, #FF8A65, #B9E769, #C3B1E1)",
          }}
        />

        <div className="space-y-10">
          {timelineData.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex items-start gap-6 relative pl-10"
            >
              {/* Dot */}
              <div
                className="w-5 h-5 rounded-full border-[3px] border-white z-10 absolute left-[14px] top-2.5"
                style={{
                  background: item.color,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                }}
              />

              {/* Content Card */}
              <div className="flex-1 space-y-4">
                {/* Year Badge */}
                <div
                  className="inline-block text-base sm:text-lg font-bold text-white px-4 py-1.5 rounded-full z-10 relative"
                  style={{
                    background: item.color,
                    fontFamily: "var(--font-feature)",
                    boxShadow: "1px 2px 0px rgba(0,0,0,0.1)",
                  }}
                >
                  {item.year}
                </div>

                <div
                  className="paper-card p-5 sm:p-7 relative w-full"
                  style={{ transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)` }}
                >
                  {/* Mini tape */}
                  <div
                    className="washi-tape"
                    style={{
                      top: "-8px",
                      left: "30px",
                      transform: `rotate(${i % 2 === 0 ? -4 : 3}deg)`,
                      width: "80px",
                      height: "20px",
                      background: `${item.color}30`,
                    }}
                  />
                  <ul className="space-y-3 text-sm sm:text-base text-gray-700" style={{ fontFamily: "var(--font-body)" }}>
                    {item.events.map((event, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span style={{ color: item.color, fontSize: "1.2em" }}>•</span>
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
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
