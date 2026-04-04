"use client"
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: "Programming",
    skills: ["PHP (Main Backend)", "Java (OOP)", "JavaScript", "C (DSA & Logic)"]
  },
  {
    title: "Frameworks & Apps",
    skills: ["Laravel", "Flutter (Mobile Apps)", "Tailwind CSS", "React/Three.js (3D Web)"]
  },
  {
    title: "Specialties",
    skills: ["Fullstack Web Dev", "UI/UX Design", "WordPress", "RESTful APIs"]
  },
  {
    title: "Database & Tools",
    skills: ["MySQL", "Git & GitHub", "Web Security", "Server Management"]
  }
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative bg-transparent min-h-screen z-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-right"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Engineered for<br/>Peak Performance</h2>
          <div className="w-24 h-1 bg-secondary rounded-full ml-auto"></div>
          <p className="font-sans text-on-surface-variant max-w-2xl ml-auto mt-6 text-lg">
            Focused on Architecting Resilience. I build systems where precision meets scalability, turning complex backend logic into seamless digital experiences. My goal is to ensure your application doesn't just run—it excels under any load.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="p-6 rounded-2xl glass-panel relative group border border-outline-variant/10 cursor-pointer overflow-hidden shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(143,245,255,0.2)]"
            >
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center space-x-3">
                <span className="w-2.5 h-2.5 rounded-full bg-primary group-hover:scale-150 group-hover:bg-secondary group-hover:shadow-[0_0_12px_rgba(255,81,250,0.8)] transition-all duration-300" />
                <span className="group-hover:text-primary transition-colors">{category.title}</span>
              </h3>
              <ul className="space-y-4">
                {category.skills.map(skill => (
                  <li key={skill} className="text-on-surface hover:text-white transition-all duration-300 flex items-center hover:translate-x-3 group/item text-sm md:text-base">
                    <span className="text-primary/40 mr-3 group-hover/item:text-secondary group-hover/item:scale-125 transition-all font-mono font-bold">/</span>
                    <span className="group-hover/item:text-primary transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
              
              {/* Ghost Border hover effect */}
              <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-primary/40 group-hover:shadow-[inset_0_0_20px_rgba(143,245,255,0.15)] transition-all duration-500 pointer-events-none" />
              
              {/* Sweep gradient hover reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] -translate-y-1/2 -translate-x-1/2 rounded-full bg-tertiary/10 blur-[150px] pointer-events-none mix-blend-screen" />
    </section>
  )
}
