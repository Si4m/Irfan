import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import ContactSection from '@/components/ContactSection'
import { StarsBackground } from '@/components/Scene'

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <StarsBackground />
      </div>
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        
        {/* Footer */}
        <footer className="py-8 text-center border-t border-outline-variant/10 relative z-10 bg-transparent">
          <p className="font-mono text-xs md:text-sm text-on-surface-variant/60 tracking-widest uppercase">
            &copy; 2026 Si4m | All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  )
}
