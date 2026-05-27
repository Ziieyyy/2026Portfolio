"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import WebPortfolioSection from "@/components/WebPortfolioSection";
import CreativeGallerySection from "@/components/CreativeGallerySection";
import TimelineSection from "@/components/TimelineSection";
import ContactSection from "@/components/ContactSection";
import ScrapbookNav from "@/components/ScrapbookNav";

export default function Home() {
  useEffect(() => {
    // Dynamic import of AOS to ensure it only runs on the client side
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-out-cubic",
        offset: 120,
      });
    });
  }, []);

  return (
    <div className="min-h-screen relative">
      <ScrapbookNav />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WebPortfolioSection />
      <CreativeGallerySection />
      <TimelineSection />
      <ContactSection />
    </div>
  );
}
