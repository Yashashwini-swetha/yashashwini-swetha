import { motion } from "motion/react";
import { Target, Lightbulb, Rocket, Star } from "lucide-react";

export function GoalsSection() {
  const goals = [
    {
      icon: Target,
      title: "Skilled Software Developer",
      description: "Master algorithms and AI to build scalable solutions.",
      gradient: "from-[#FF1694] to-[#FF69B4]"
    },
    {
      icon: Lightbulb,
      title: "Solve Real Problems",
      description: "Create tech that addresses meaningful challenges.",
      gradient: "from-[#FF69B4] to-[#FF1694]"
    },
    {
      icon: Rocket,
      title: "Build Intuitive Experiences",
      description: "Design delightful and seamless digital solutions.",
      gradient: "from-[#FFB6D9] to-[#FF69B4]"
    },
    {
      icon: Star,
      title: "Create Social Impact",
      description: "Combine engineering with human-centered design.",
      gradient: "from-[#FFC0CB] to-[#FF69B4]"
    }
  ];

  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Cinematic Background Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FFE4E6]/50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FFF0F5] rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="max-w-[85rem] mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left mb-20 px-4"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-[#FF1694] tracking-tight">
            Vision.
          </h2>
        </motion.div>

        {/* Main Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-24 px-4 relative"
        >
          <div className="bg-[#FFF0F5]/80 backdrop-blur-md rounded-[3rem] p-12 md:p-20 border border-[#FF1694]/10 relative overflow-hidden text-center max-w-5xl mx-auto">
            <div className="relative z-10">
              <p className="text-2xl md:text-4xl text-[#2D1B2E] leading-relaxed font-light tracking-wide">
                "To become a{" "}
                <span className="font-semibold text-[#FF1694]">
                  skilled software engineering leader
                </span>
                {" "}building impact-driven tools in{" "}
                <span className="font-semibold text-[#FF1694]">
                  AI and full-stack development
                </span>
                , merging robust engineering with elegant, human-centered design."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-2 gap-8 px-4">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-10 shadow-[0_10px_40px_rgba(255,22,148,0.05)] border border-[#FF1694]/10 hover:shadow-[0_20px_60px_rgba(255,22,148,0.1)] transition-all duration-500 h-full flex flex-col justify-center items-center text-center">
                  {/* Icon */}
                  <div className="relative inline-block mb-8">
                    <div className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-sm bg-[#FFF0F5] border border-[#FF1694]/20 transform group-hover:-translate-y-2 transition-transform duration-500 text-[#FF1694]">
                      <Icon size={36} strokeWidth={1.5} />
                    </div>
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br ${goal.gradient}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#2D1B2E] mb-4 tracking-tight">
                    {goal.title}
                  </h3>
                  <p className="text-lg text-[#9E7B9C] leading-relaxed font-light">
                    {goal.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}