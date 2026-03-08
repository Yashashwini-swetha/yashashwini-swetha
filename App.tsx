import { useState } from "react";
import { motion } from "motion/react";
import { IntroSequence } from "./components/intro-sequence";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { SkillsSection } from "./components/skills-section";
import { ProjectsSection } from "./components/projects-section";
import { GoalsSection } from "./components/goals-section";
import { ContactSection } from "./components/contact-section";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <IntroSequence onComplete={() => setShowIntro(false)} />;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-screen overflow-x-hidden" 
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Smooth scroll container */}
      <div className="scroll-smooth">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <GoalsSection />
        <ContactSection />
      </div>
    </motion.div>
  );
}
