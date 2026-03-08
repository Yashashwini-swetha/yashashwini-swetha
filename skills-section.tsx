import { motion } from "motion/react";

export function SkillsSection() {
  const achievements = [
    {
      icon: "🏆",
      title: "1st Prize",
      organization: "ForgeAlumnus Code-a-thon",
      description: "Built the 'Career Readiness Scoring System', analyzing student skills and ATS resumes for industry preparation.",
      link: "https://lnkd.in/dhcdZ5fx",
      gradient: "from-[#FF1694] to-[#FFB6D9]"
    },
    {
      icon: "⭐",
      title: "Top 8%",
      organization: "AlgoUniversity Tech Fellowship",
      description: "Selected nationwide for an intensive software engineering fellowship program.",
      gradient: "from-[#FF69B4] to-[#FFC0CB]"
    }
  ];

  const technologies = [
    { name: "C", color: "from-blue-400 to-blue-600" }, 
    { name: "Python", color: "from-yellow-400 to-amber-500" }, 
    { name: "Java", color: "from-red-400 to-red-600" }, 
    { name: "JavaScript", color: "from-yellow-300 to-yellow-500" }, 
    { name: "HTML5", color: "from-orange-400 to-orange-600" }, 
    { name: "CSS3", color: "from-blue-500 to-indigo-600" }, 
    { name: "SQL", color: "from-cyan-400 to-blue-500" }, 
    { name: "Git", color: "from-gray-700 to-gray-900" }
  ];

  return (
    <section className="py-32 px-6 bg-[#fafafa] relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto relative z-10 w-full">
        {/* Abstract Background Blurs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 bg-gradient-to-br from-[#FF1694] to-transparent pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 bg-gradient-to-tr from-[#FF69B4] to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 px-4 text-center md:text-left"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-[#FF1694] tracking-tight">
            Capabilities.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 px-4">
          
          {/* Achievements Cards (Cinematic layout) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-[#2D1B2E] mb-8 tracking-tight">Milestones</h3>
            <div className="grid gap-8">
              {achievements.map((item, index) => {
                const CardWrapper = item.link ? motion.a : motion.div;
                const wrapperProps = item.link ? { href: item.link, target: "_blank", rel: "noopener noreferrer" } : {};
                
                return (
                  <CardWrapper
                    key={index}
                    {...wrapperProps as any}
                    whileHover={{ scale: 1.02 }}
                    className={`group block relative overflow-hidden rounded-[2.5rem] p-10 bg-white/80 backdrop-blur-md border border-[#FF1694]/10 shadow-[0_10px_40px_rgba(255,22,148,0.05)] hover:shadow-[0_20px_60px_rgba(255,22,148,0.1)] transition-all duration-500 ease-out ${item.link ? 'cursor-pointer' : ''}`}
                  >
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${item.gradient} opacity-80`} />
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center relative z-10">
                      <div className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center bg-[#FFF0F5] shadow-sm border border-[#FF1694]/20 text-3xl transform group-hover:-translate-y-2 transition-transform duration-500">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-3xl font-bold text-[#2D1B2E] mb-2 tracking-tight">{item.title}</h4>
                        <div className="text-sm font-semibold uppercase tracking-wider text-[#FF1694] mb-3">{item.organization}</div>
                        <p className="text-lg text-[#9E7B9C] leading-relaxed font-light">{item.description}</p>
                      </div>
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
          </motion.div>

          {/* Floating UI Tech Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-[#2D1B2E] mb-8 tracking-tight">Core Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.05
                  }}
                  viewport={{ once: true }}
                  className="group relative aspect-square flex flex-col items-center justify-center bg-white rounded-[2rem] border border-[#FF1694]/10 overflow-hidden shadow-[0_5px_20px_rgba(255,22,148,0.05)] hover:shadow-[0_20px_40px_rgba(255,22,148,0.15)] transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${tech.color} mb-4 shadow-lg group-hover:scale-150 transition-transform duration-500`} />
                  <span className="font-semibold text-[#2D1B2E] group-hover:text-[#FF1694] transition-colors duration-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Cinematic Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { label: "CGPA", value: "9.73" },
                { label: "Top %", value: "8%" },
                { label: "Projects", value: "4+" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#FF1694] to-[#FF69B4] rounded-[2rem] p-8 text-center shadow-xl hover:shadow-2xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 text-4xl font-extrabold text-white mb-2 tracking-tighter">{stat.value}</div>
                  <div className="relative z-10 text-xs uppercase tracking-widest text-white/80 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}