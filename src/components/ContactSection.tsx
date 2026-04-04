"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  Layers,
  Database,
  TerminalSquare,
  Network,
  Code,
  Mail,
  Phone
} from 'lucide-react'

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const techStack = [
  { name: 'PHP', label: 'SERVER SIDE', icon: Code },
  { name: 'Laravel', label: 'FRAMEWORK', icon: Layers },
  { name: 'JavaScript', label: 'INTERACTIVITY', icon: TerminalSquare },
  { name: 'MySQL', label: 'DATABASE', icon: Database },
  { name: 'C & Java', label: 'DSA & OOP', icon: Network },
]

export default function ContactSection() {
  const [popupData, setPopupData] = useState<{ type: 'email' | 'phone', value: string } | null>(null);

  return (
    <section id="contact" className="py-32 relative bg-transparent min-h-screen z-10 flex items-center">
      
      {/* Popup Modal */}
      <AnimatePresence>
        {popupData && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setPopupData(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface-container-high border border-primary/30 p-8 rounded-[2rem] shadow-3d-ambient max-w-sm w-full mx-4 text-center"
            >
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                {popupData.type === 'email' ? <Mail /> : <Phone />}
              </div>
              <h4 className="font-display text-xl font-bold mb-2 text-on-surface">
                {popupData.type === 'email' ? 'Email Address' : 'Phone Number'}
              </h4>
              <p className="font-mono text-primary mb-6 text-sm tracking-wide">
                {popupData.value}
              </p>
              
              <div className="flex flex-col gap-3 justify-center">
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(popupData.value)
                    setPopupData(null)
                  }}
                  className="w-full px-6 py-3 bg-primary-gradient text-on-primary-container rounded-xl font-bold text-sm shadow-glow-secondary hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Copy to Clipboard
                </button>
                <a 
                  href={popupData.type === 'email' ? `mailto:${popupData.value}` : `tel:${popupData.value}`}
                  className="w-full px-6 py-3 border border-outline-variant/30 text-on-surface rounded-xl font-bold text-sm hover:border-primary/50 transition-all hover:bg-surface-variant/30"
                >
                  {popupData.type === 'email' ? 'Open Mail App' : 'Call Now'}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: ID Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 relative group"
          >
            <div className="rounded-[2.5rem] bg-surface-container-high p-4 shadow-3d-ambient relative overflow-hidden flex flex-col h-[600px]">
              {/* Online indicator */}
              <div className="absolute top-8 right-8 z-20">
                <div className="px-4 py-1.5 rounded-full bg-surface/80 backdrop-blur-md border border-outline-variant/30 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-mono text-on-surface-variant tracking-wider">ONLINE_SYSTEM</span>
                </div>
              </div>

              {/* Profile Image */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-surface flex-grow">
                {/* 
                  Note: Please make sure to save your image as 'profile.jpg' 
                  inside the 'public' folder of your project to see it here! 
                */}
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback gradient if image not found yet
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-surface-container-lowest/20 to-transparent" />
              </div>

              {/* Text overlay at the bottom of the card */}
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <h3 className="font-display text-3xl font-bold text-on-surface mb-1">
                  Md Irfan Uddin
                </h3>
                <p className="font-sans text-primary tracking-wide text-sm font-medium mb-4">
                  Software Engineering Student @ DIU
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <a href="https://github.com/Si4m" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-surface-container-highest/80 backdrop-blur-md border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary/50 transition-all">
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a href="https://www.facebook.com/irf4n.SwE/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-surface-container-highest/80 backdrop-blur-md border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary/50 transition-all">
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a href="https://www.instagram.com/_si4m_/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-surface-container-highest/80 backdrop-blur-md border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary/50 transition-all">
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <button 
                    onClick={(e) => { e.preventDefault(); setPopupData({ type: 'email', value: 'siam.swe43@gmail.com' }) }}
                    className="p-2 rounded-full bg-surface-container-highest/80 backdrop-blur-md border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary/50 transition-all cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={(e) => { e.preventDefault(); setPopupData({ type: 'phone', value: '+8801410599848' }) }}
                    className="p-2 rounded-full bg-surface-container-highest/80 backdrop-blur-md border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary/50 transition-all cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Subtle neon border ring */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-outline-variant/15 group-hover:border-primary/30 transition-colors pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Information & Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 flex flex-col justify-center"
          >
            <h2 className="font-display text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
              Crafting Digital <br />
              <span className="text-secondary">Solutions.</span>
            </h2>
            
            <p className="font-sans text-on-surface-variant text-lg max-w-2xl leading-relaxed mb-12">
              A Software Engineering student at Daffodil International University (DIU), focused on scalable fullstack applications. I build robust backend architectures using PHP and Laravel, paired with modern UI design using Tailwind CSS. Constantly leveling up my logic through rigorous DSA and problem-solving practice in C and Java.
            </p>

            {/* Divider */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-[1px] w-12 bg-primary/30" />
              <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase font-bold">
                CORE TECH STACK
              </span>
            </div>

            {/* Tech Stack Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {techStack.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ y: -5, backgroundColor: 'rgba(37, 34, 63, 0.8)' }}
                  className="p-6 rounded-2xl bg-surface-container-high border border-transparent hover:border-primary/20 transition-all cursor-crosshair group"
                >
                  <tech.icon className="w-8 h-8 text-primary group-hover:text-primary-container mb-4" />
                  <h4 className="font-display font-bold text-on-surface mb-1">{tech.name}</h4>
                  <p className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest">{tech.label}</p>
                </motion.div>
              ))}

              {/* View More Card */}
              <motion.a 
                href="https://github.com/Si4m?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/15 flex flex-col items-center justify-center text-on-surface-variant hover:text-white hover:border-outline-variant/50 transition-all cursor-pointer group"
              >
                <div className="font-display text-3xl font-bold mb-1 group-hover:text-primary transition-colors">12+</div>
                <span className="text-[10px] text-center font-mono uppercase tracking-widest opacity-70 group-hover:opacity-100">Repositories</span>
              </motion.a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-surface-container-high/60 backdrop-blur-sm border border-outline-variant/10">
                <div className="font-display text-4xl font-bold text-primary mb-1">DSA</div>
                <div className="text-[11px] font-mono text-on-surface-variant uppercase tracking-widest">ACTIVE PROBLEM SOLVER</div>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container-high/60 backdrop-blur-sm border border-outline-variant/10">
                <div className="font-display text-4xl font-bold text-secondary mb-1">2026</div>
                <div className="text-[11px] font-mono text-on-surface-variant uppercase tracking-widest">EXPECTED GRADUATION</div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
