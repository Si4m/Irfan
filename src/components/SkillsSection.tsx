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
            Beyond the pixels lies a core of robust logic. Built with scalability as a first-class citizen, ensuring your digital presence executes flawlessly.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="p-6 rounded-2xl glass-panel relative group"
            >
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>{category.title}</span>
              </h3>
              <ul className="space-y-3">
                {category.skills.map(skill => (
                  <li key={skill} className="text-on-surface hover:text-white transition-colors flex items-center">
                    <span className="text-primary/50 mr-2">/</span>
                    {skill}
                  </li>
                ))}
              </ul>
              {/* Ghost Border hover effect */}
              <div className="absolute inset-0 border border-transparent rounded-2xl group-hover:border-primary/20 group-hover:shadow-input-glow transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] -translate-y-1/2 -translate-x-1/2 rounded-full bg-tertiary/10 blur-[150px] pointer-events-none mix-blend-screen" />
    </section>
  )
}
