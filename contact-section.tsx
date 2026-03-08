import { motion } from "motion/react";
import { Mail, Linkedin, Github, Heart, Send } from "lucide-react";

export function ContactSection() {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      handle: "swetha3127@gmail.com",
      link: "mailto:swetha3127@gmail.com",
      gradient: "from-[#FF1694] to-[#FF69B4]"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      handle: "yashashwini-swetha-maripella",
      link: "https://www.linkedin.com/in/yashashwini-swetha-maripella/",
      gradient: "from-[#FF69B4] to-[#FF1694]"
    },
    {
      icon: Github,
      label: "GitHub",
      handle: "@Yashashwini-swetha",
      link: "https://github.com/Yashashwini-swetha",
      gradient: "from-[#FFB6D9] to-[#FF69B4]"
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#fafafa] relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-[#FFE4E6]/40 rounded-full blur-[100px] opacity-50" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#FFF0F5] rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="max-w-[85rem] mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24 px-4"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-[#FF1694] tracking-tight mb-6">
            Let's Connect.
          </h2>
          <p className="text-xl md:text-2xl text-[#9E7B9C] max-w-2xl mx-auto font-light leading-relaxed">
            I'm always open to discussing product design work or partnership opportunities.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-md rounded-[3rem] p-12 md:p-20 shadow-[0_10px_40px_rgba(255,22,148,0.05)] border border-[#FF1694]/10 mb-20 relative overflow-hidden"
        >
          <div className="relative z-10">
            {/* Social Links Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                    className="group bg-[#FFF0F5]/50 rounded-3xl p-8 shadow-sm border border-[#FF1694]/10 hover:shadow-xl hover:bg-white transition-all duration-500"
                  >
                    <div className="flex flex-col items-center text-center gap-6">
                      <div className={`w-20 h-20 rounded-[1.5rem] flex items-center justify-center shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500 text-white bg-gradient-to-br ${social.gradient}`}>
                        <Icon size={32} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-sm uppercase tracking-widest text-[#FF1694] font-semibold mb-2">{social.label}</div>
                        <div className="font-medium text-[#2D1B2E] text-lg tracking-tight">{social.handle}</div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Main CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://www.linkedin.com/in/yashashwini-swetha-maripella/', '_blank')}
                className="px-12 py-6 bg-gradient-to-r from-[#FF1694] to-[#FF69B4] text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-[#FF1694]/30 transition-all duration-300 inline-flex items-center gap-4 group"
              >
                <Linkedin size={28} className="group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                <span>Send Me a Message</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-32 relative z-10"
      >
        <p className="text-[#9E7B9C] mb-3 text-lg font-light tracking-wide">
          Designed & Built with <Heart className="inline text-[#FF1694] fill-current w-5 h-5 mx-1" /> by Yashashwini Swetha
        </p>
        <p className="text-sm text-[#C9A6C8] tracking-wider">
          © 2026 • Made with React, TypeScript & Tailwind CSS
        </p>
      </motion.div>
    </section>
  );
}