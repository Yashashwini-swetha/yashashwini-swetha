import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Smartphone, User } from "lucide-react";

interface IntroSequenceProps {
  onComplete: () => void;
}

export function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Stage 1: Text reveal (0 - 2s)
    const t1 = setTimeout(() => setStep(1), 2000);
    // Stage 2: Phone rings (2s - 4s)
    const t2 = setTimeout(() => setStep(2), 4000);
    // Stage 3: Answered (girl silhouette) (4s - 5s)
    const t3 = setTimeout(() => setStep(3), 5000);
    // Stage 4: Boom flash / Explode (5s - 6s)
    const t4 = setTimeout(() => setStep(4), 6000);
    // Stage 5: End intro, switch to app (6.5s)
    const t5 = setTimeout(() => onComplete(), 6500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="intro-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, filter: "blur(20px)" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF0F5] via-[#FFE4E6] to-[#FCE4EC] overflow-hidden"
      >
        {/* Soft Background floating shapes */}
        <motion.div
          className="absolute inset-0 opacity-40 mix-blend-multiply"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(255, 182, 193, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, rgba(255, 182, 193, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, rgba(255, 182, 193, 0.4) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-[400px]">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <motion.h2
                  className="text-3xl md:text-5xl font-light text-[#2D1B2E] tracking-tight mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Want to know who I am?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="text-lg md:text-xl text-[#FF69B4] font-medium tracking-widest uppercase"
                >
                  Then let's go.
                </motion.p>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.8 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="flex flex-col items-center"
              >
                {/* Ringing Phone */}
                <motion.div
                  animate={{
                    rotate: [-5, 5, -5, 5, 0],
                    y: [0, -5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="relative bg-white/50 backdrop-blur-md p-8 rounded-full shadow-[0_0_40px_rgba(255,105,180,0.3)] border border-white/60 mb-8"
                >
                  <Smartphone size={64} className="text-[#FF1694]" strokeWidth={1.5} />
                  
                  {/* Glowing rings */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-[#FF69B4]"
                    animate={{ scale: [1, 1.5, 2], opacity: [0.8, 0.4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border border-[#FF1694]"
                    animate={{ scale: [1, 1.8, 2.5], opacity: [0.6, 0.2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
                  />
                </motion.div>
                
                <motion.p
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-[#FF1694] font-semibold tracking-widest uppercase text-xl"
                >
                  Tring Tring...
                </motion.p>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, filter: "brightness(2) blur(10px)", scale: 1.5 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                {/* Answered Silhouette */}
                <div className="relative bg-[#FF1694]/10 p-10 rounded-full shadow-inner border border-[#FF1694]/20 backdrop-blur-sm">
                  <User size={80} className="text-[#FF1694]" strokeWidth={1} />
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="h-1 bg-gradient-to-r from-transparent via-[#FF1694] to-transparent mt-8"
                />
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                {/* BOOM Flash / Sparkles */}
                <motion.div
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 0, scale: 20 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-16 h-16 bg-white rounded-full mix-blend-overlay filter blur-md"
                />
                
                {/* Minimal Sparkle Bursts */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                    animate={{
                      x: Math.cos(i * 30 * (Math.PI / 180)) * 300,
                      y: Math.sin(i * 30 * (Math.PI / 180)) * 300,
                      opacity: 0,
                      scale: Math.random() * 2 + 1,
                    }}
                    transition={{
                      duration: 1 + Math.random(),
                      ease: "easeOut",
                    }}
                    className="absolute w-2 h-2 rounded-full shadow-[0_0_10px_#fff]"
                    style={{
                      backgroundColor: ['#FFFFFF', '#FFB6C1', '#FF69B4'][i % 3]
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Skip Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={onComplete}
          className="absolute bottom-10 right-10 text-xs tracking-[0.2em] uppercase text-[#FF69B4] hover:text-[#FF1694] transition-colors border-b border-transparent hover:border-[#FF1694] pb-1 z-50"
        >
          Skip Intro
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
