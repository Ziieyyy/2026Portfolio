"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contacts = [
  { label: "Email", value: "khairazizi@gmail.com", icon: "✉️", href: "mailto:khairazizi@gmail.com", color: "#FF8A65" },
  { label: "LinkedIn", value: "linkedin.com/in/khairul-azizi", icon: "💼", href: "https://www.linkedin.com/in/khairul-azizi-512670391", color: "#1595F3" },
  { label: "Instagram", value: "@ziieyyy", icon: "📸", href: "https://www.instagram.com/ziieyyy?igsh=djFibDR5MmYzbnk5", color: "#FFB6C1" },
  { label: "TikTok", value: "@kazzorigin", icon: "🎵", href: "https://www.tiktok.com/@kazzorigin", color: "#01F2EA" },
  { label: "GitHub", value: "github.com/Ziieyyy", icon: "🐙", href: "https://github.com/Ziieyyy", color: "#333" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        position: "relative",
        padding: "clamp(60px, 10vw, 100px) clamp(16px, 4vw, 32px) clamp(50px, 8vw, 80px)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "56px" }}
      >
        <span
          className="sticker-badge sticker-pink"
          style={{
            fontFamily: "var(--font-sticker)",
            fontSize: "20px",
            display: "inline-block",
            transform: "rotate(2deg)",
            marginBottom: "16px",
            padding: "10px 22px",
          }}
        >
          ✉️ Contact
        </span>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(38px, 6vw, 58px)",
            fontWeight: 700,
            color: "#333",
            margin: "16px 0 0",
          }}
        >
          Let&apos;s Connect!
        </h2>
        <p
          style={{
            fontFamily: "var(--font-handwritten)",
            fontSize: "20px",
            color: "#999",
            marginTop: "12px",
          }}
        >
          I&apos;d love to hear from you ♡
        </p>
      </motion.div>
 
      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        data-aos="zoom-in"
        style={{
          maxWidth: "780px",
          width: "100%",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Washi tape decorations */}
        <div
          className="washi-tape washi-tape-green"
          style={{
            position: "absolute",
            top: "-16px",
            left: "30px",
            transform: "rotate(-6deg)",
            zIndex: 10,
            width: "160px",
            height: "36px",
          }}
        />
        <div
          className="washi-tape washi-tape-blue"
          style={{
            position: "absolute",
            top: "-16px",
            right: "30px",
            transform: "rotate(5deg)",
            zIndex: 10,
            width: "160px",
            height: "36px",
          }}
        />
 
        {/* Card body */}
        <div
          className="paper-card"
          style={{
            padding: "clamp(24px, 5vw, 48px) clamp(16px, 5vw, 44px)",
            transform: "rotate(-0.5deg)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {contacts.map((contact, i) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "clamp(12px, 3vw, 22px)",
                  padding: "clamp(10px, 2.5vw, 18px) clamp(10px, 3vw, 20px)",
                  borderRadius: "16px",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "background-color 0.2s ease, transform 0.2s ease",
                  width: "100%",
                }}
                whileHover={{
                  backgroundColor: "rgba(0, 0, 0, 0.03)",
                  x: 4,
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "clamp(48px, 12vw, 64px)",
                    height: "clamp(48px, 12vw, 64px)",
                    minWidth: "clamp(48px, 12vw, 64px)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "clamp(22px, 5vw, 30px)",
                    background: `${contact.color}15`,
                    transition: "transform 0.2s ease",
                  }}
                >
                  {contact.icon}
                </div>
 
                {/* Text */}
                <div style={{ flex: 1, minWidth: 0, wordBreak: "break-word" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-sticker)",
                      fontSize: "clamp(11px, 3vw, 14px)",
                      fontWeight: 700,
                      color: "#aaa",
                      textTransform: "uppercase",
                      letterSpacing: "1.5px",
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {contact.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(14px, 4.5vw, 20px)",
                      fontWeight: 500,
                      color: "#555",
                      margin: "4px 0 0",
                      lineHeight: 1.4,
                      wordBreak: "break-all",
                    }}
                  >
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{ textAlign: "center", marginTop: "72px" }}
      >
        <p
          style={{
            fontFamily: "var(--font-handwritten)",
            fontSize: "18px",
            color: "#bbb",
            margin: 0,
          }}
        >
          Made with 💛 by Khairul Azizi — 2025
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginTop: "18px",
          }}
        >
          {["🎨", "✏️", "📐", "🎬", "💻"].map((e, i) => (
            <motion.span
              key={i}
              style={{ fontSize: "24px" }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            >
              {e}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Floating doodles */}
      <motion.div
        style={{
          position: "absolute",
          top: "60px",
          left: "24px",
          fontSize: "36px",
          display: "none",
        }}
        className="hidden md:!block"
        animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        💌
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          bottom: "80px",
          right: "32px",
          fontSize: "32px",
          display: "none",
        }}
        className="hidden md:!block"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        🌟
      </motion.div>
    </section>
  );
}
