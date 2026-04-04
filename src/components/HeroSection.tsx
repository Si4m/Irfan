"use client"
import { motion } from 'framer-motion'
import { HeroScene } from './Scene'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-start overflow-hidden bg-transparent">
      {/* 3D Canvas Background */}
      <HeroScene />
      
      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 pt-32 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl lg:-ml-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-surface-variant/40 backdrop-blur-md"
          >
            <span className="text-primary font-mono text-sm tracking-widest uppercase">Portfolio 2026</span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-bold mb-8 tracking-tighter mix-blend-screen">
            Md Irfan Uddin | <br />
            <span className="text-gradient">Software Engineering</span><br />
            <span className="text-gradient">Student @ DIU</span>
          </h1>

          <p className="font-sans text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
            Passionate about backend architectures, problem-solving, and crafting modern interactive applications. Dedicated to mastering scalable server-side systems with PHP & Laravel while maintaining a strong grip on Data Structures and Algorithms.
          </p>

          <div className="flex flex-wrap gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 rounded-xl bg-primary-gradient text-on-primary-container font-semibold tracking-wide shadow-glow-secondary transition-all"
            >
              Explore Missions
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(43, 40, 72, 1)' }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 rounded-xl border border-outline-variant/40 bg-transparent text-on-surface font-semibold tracking-wide backdrop-blur-sm transition-all shadow-[0_0_20px_rgba(72,69,92,0.1)]"
            >
              Terminal Access
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 -left-1/4 w-[40vw] h-[40vw] rounded-full bg-secondary/10 blur-[120px] pointer-events-none mix-blend-screen" />
    </section>
  )
}
