import { useState } from 'react'
import { Hero } from './components/Hero'
import { SocialProof } from './components/SocialProof'
import { ProblemSection } from './components/ProblemSection'
import { ThreePillars } from './components/ThreePillars'
import { CodeDemo } from './components/CodeDemo'
import { FeaturesGrid } from './components/FeaturesGrid'
import { Pricing } from './components/Pricing'
import { CommunityCTA } from './components/CommunityCTA'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  return (
    <div className="min-h-screen font-sans">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        <Hero setActiveSection={setActiveSection} />
        <SocialProof />
        <ProblemSection />
        <ThreePillars />
        <CodeDemo />
        <FeaturesGrid />
        <Pricing />
        <CommunityCTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
