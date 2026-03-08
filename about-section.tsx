import { motion } from "motion/react";
import { Sparkles, GraduationCap, Globe, ChevronRight } from "lucide-react";

export function AboutSection() {
  const panels = [
    {
      title: "My Journey",
      description: "Hi! I'm Yashashwini Swetha, a CS student with a passion for building technology that creates real-world impact.",
      icon: Sparkles,
      gradient: "radial-gradient(circle at top right, #FF1694, transparent 60%), radial-gradient(circle at bottom left, #FFB6D9, transparent 60%)"
    },
    {
      title: "Academic Excellence",
      description: "CGPA 9.73. Deep dives into Data Structures, Algorithms, and Object-Oriented Programming.",
      icon: GraduationCap,
      gradient: "radial-gradient(circle at top left, #FF69B4, transparent 60%), radial-gradient(circle at bottom right, #FFC0CB, transparent 60%)"
    },
    {
      title: "Global Impact",
      description: "Creating solutions like public health chatbots and interactive web applications.",
      icon: Globe,
      gradient: "radial-gradient(circle at center, #FF1694, transparent 60%), radial-gradient(circle at top right, #FFB6D9, transparent 60%)"
    }
  ];

  return (
    <section id="about-section" className="py-32 px-6 relative overflow-hidden bg-white/50">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#FFE4E6]/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FFC0CB]/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[90rem] mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 px-4 md:px-10"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-[#FF1694] tracking-tight">
            About Me.
          </h2>
        </motion.div>

        <div className="relative group/container">
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}} />
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 pb-12 pt-4 px-4 items-stretch">
            {panels.map((panel, index) => {
              const Icon = panel.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ margin: "-50px" }}
                  className="min-w-full md:min-w-[75vw] flex-shrink-0 snap-center bg-white/80 backdrop-blur-xl rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(255,22,148,0.08)] border border-[#FF1694]/10 group/card flex flex-col md:flex-row min-h-[500px]"
                >
                  <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center relative bg-transparent z-20">
                     <div className="relative">
                       <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 bg-[#FFF0F5] text-[#FF1694] shadow-sm">
                         <Icon size={32} strokeWidth={1.5} />
                       </div>
                       <h3 className="text-4xl md:text-5xl font-bold text-[#2D1B2E] mb-6 tracking-tight">
                         {panel.title}
                       </h3>
                       <p className="text-xl md:text-2xl text-[#9E7B9C] font-light leading-relaxed">
                         {panel.description}
                       </p>
                     </div>
                  </div>
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden bg-[#FFF0F5]/50">
                     {/* Immersive abstract gradient instead of a photo */}
                     <div 
                       className="absolute inset-0 opacity-80 mix-blend-multiply filter blur-2xl transform scale-150 group-hover/card:scale-100 transition-transform duration-1000 ease-out" 
                       style={{ background: panel.gradient }} 
                     />
                     <div className="absolute inset-0 bg-white/40 backdrop-blur-[4px]" />
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="absolute top-1/2 right-4 md:right-10 transform -translate-y-1/2 bg-white/80 backdrop-blur-xl p-5 rounded-full shadow-lg border border-[#FF1694]/20 hidden md:flex text-[#FF1694] pointer-events-none transition-transform duration-300">
             <ChevronRight size={32} strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
}