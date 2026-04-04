"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Briefcase, Brain, Mail } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Skills', href: '#skills', icon: Brain },
  { name: 'Contact', href: '#contact', icon: Mail },
]

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 glass-nav transition-all duration-300 w-[90%] md:w-auto"
    >
      <ul className="flex items-center justify-between md:justify-center space-x-2 md:space-x-8">
        {navItems.map((item) => (
          <li key={item.name}>
            <a 
              href={item.href}
              className="flex items-center space-x-2 text-on-surface-variant hover:text-white transition-all duration-300 py-2.5 px-6 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10 hover:shadow-[0_0_15px_rgba(143,245,255,0.05),inset_0_1px_0_0_rgba(255,255,255,0.1)] group"
            >
              <item.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span className="hidden md:block text-sm font-semibold tracking-wide">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
