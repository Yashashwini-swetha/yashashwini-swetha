"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

// Simple helper component for floating sparkles
const Sparkle = ({ delay, top, left, size }: { delay: number, top: string, left: string, size: number }) => (
  <motion.div
    className="absolute rounded-full bg-white mix-blend-overlay"
    style={{ width: size, height: size, top, left }}
    animate={{
      opacity: [0, 0.8, 0],
      scale: [0.5, 1.2, 0.5],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFFFFF]">
      {/* Soft Airy Background Gradient (Blush, Baby Pink, Champagne) */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#FFF0F5] via-[#FCE4EC] to-[#FFFFFF] opacity-80"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />
      
      {/* Gentle Floating Light Dust / Soft Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-[120px] bg-gradient-to-br from-[#F8BBD0] to-transparent opacity-40"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full mix-blend-overlay filter blur-[150px] bg-gradient-to-tl from-[#FCE4EC] via-[#FFE4E6] to-transparent opacity-60"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle Sparkles */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          <Sparkle delay={0} top="20%" left="25%" size={4} />
          <Sparkle delay={1.5} top="30%" left="70%" size={6} />
          <Sparkle delay={0.8} top="65%" left="15%" size={3} />
          <Sparkle delay={2.2} top="80%" left="80%" size={5} />
          <Sparkle delay={3.5} top="45%" left="85%" size={7} />
          <Sparkle delay={1.1} top="70%" left="40%" size={4} />
        </div>
      )}

      {/* Main Content (Minimal, Focus on Typography) */}
      <div className="relative z-10 text-center px-6 w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
        
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Elegant Luxury Typography with Glossy Shimmer */}
          <motion.h1 
            className="text-6xl sm:text-7xl md:text-[8.5rem] leading-[1.1] tracking-tight bg-clip-text text-transparent pb-4"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              backgroundImage: "linear-gradient(to right, #DDA7B0 0%, #E8C3C8 25%, #FFF0F5 50%, #E8C3C8 75%, #DDA7B0 100%)",
              backgroundSize: "200% auto",
              y 
            }}
            animate={{ backgroundPosition: ["100% center", "-100% center"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            Yashashwini
            <br />
            Swetha
          </motion.h1>

          {/* Minimal Refined Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
            className="mt-8"
          >
            <p className="text-sm md:text-[0.95rem] tracking-[0.3em] uppercase text-[#B5838D] font-medium">
              Crafting ideas into digital experiences.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant Minimal Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#DDA7B0] to-transparent opacity-50 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 w-full h-1/2 bg-[#DDA7B0]"
            animate={{ top: ["-50%", "150%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}