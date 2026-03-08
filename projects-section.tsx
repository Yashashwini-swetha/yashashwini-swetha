import { motion } from "motion/react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Dr. Panther – AI Public Health Chatbot",
      description: "An intelligent chatbot spreading health awareness with multilingual support & gamified education.",
      tags: ["Python", "AI", "NLP"],
      gradient: "from-[#FF1694] to-[#FF69B4] shadow-[#FF1694]/20"
    },
    {
      title: "Simple Quiz Platform",
      description: "A responsive quiz application with real-time scoring and dynamic question handling.",
      tags: ["JavaScript", "Interactive UI"],
      gradient: "from-[#FF69B4] to-[#FFC0CB] shadow-[#FF69B4]/20"
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#FFF0F5]/50 relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 px-4"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-[#FF1694] tracking-tight">
            Projects I have worked on.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 px-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(255,22,148,0.06)] hover:shadow-[0_20px_60px_rgba(255,22,148,0.15)] transition-all duration-500 ease-out border border-[#FF1694]/10 flex flex-col h-full"
            >
              {/* Abstract Header Gradient instead of Image */}
              <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl transform group-hover:scale-150 transition-transform duration-1000" />
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col flex-1 isolate">
                <h3 className="text-3xl font-bold text-[#2D1B2E] mb-4 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xl text-[#9E7B9C] mb-8 leading-relaxed font-light flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 bg-[#FFE4E6] text-[#FF1694] rounded-lg text-sm font-semibold tracking-wide border border-[#FFC0CB]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}