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
      </div>
    </main>
  )
}
