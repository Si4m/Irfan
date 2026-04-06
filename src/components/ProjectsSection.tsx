"use client"
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Interactive Portfolio',
    description: 'A modern, responsive portfolio designed with Tailwind CSS to showcase my aesthetic sensibilities and project work.',
    tags: ['Tailwind CSS', 'Next.js', 'UI/UX'],
    id: 'portfolio'
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-fledged, robust e-commerce project built with PHP. Involves complex server-side algorithms, secure API implementation, and database architecture.',
    tags: ['PHP', 'Laravel', 'MySQL'],
    id: 'ecommerce'
  },
  {
    title: 'Algorithmic Problem Solving',
    description: 'Rigorous daily practice dealing with Data Structures & Algorithms (DSA), building a strong foundation in core logic and application performance.',
    tags: ['C', 'Java', 'Problem Solving'],
    id: 'dsa'
  },
  {
    title: 'Custom VPN App (Flutter)',
    description: 'Developed a fully functional, high-performance VPN mobile application using Flutter, implementing robust tunneling networking logic and modern UI/UX design.',
    tags: ['Flutter', 'Dart', 'Mobile Dev'],
    id: 'vpn'
  },
  {
    title: 'Flappy Bird Clone (Pygame)',
    description: 'Built a replica of the classic Flappy Bird game using Python and Pygame, featuring gravity physics implementation, collision detection, and game loop mechanics.',
    tags: ['Python', 'Pygame', 'Game Dev'],
    id: 'flappy'
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative bg-transparent min-h-screen z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Selected Missions</h2>
          <div className="w-24 h-1 bg-primary rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                rotateX: 2,
                rotateY: 2,
              }}
              style={{ perspective: 1000 }}
              className="group relative h-full"
            >
              <div className="h-full p-8 rounded-xl bg-surface-container-high transition-all duration-300 shadow-3d-ambient group-hover:shadow-[0_0_25px_rgba(255,81,250,0.08)]">
                <h3 className="font-display text-2xl font-bold mb-4 text-primary group-hover:text-primary-container transition-colors">
                  {project.title}
                </h3>
                <p className="font-sans text-on-surface-variant mb-8">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 rounded-full text-xs font-medium bg-tertiary-container text-on-tertiary-container"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 border border-outline-variant/15 rounded-xl pointer-events-none group-hover:border-primary/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
