import { useState, useEffect } from 'react'
import { Github } from 'lucide-react'

export function Navbar({ activeSection, setActiveSection }: { activeSection: string; setActiveSection: (s: string) => void }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'hero', label: 'Overview' },
    { id: 'problem', label: 'Why archflow' },
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-archflow-base/95 backdrop-blur-md border-deep'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-archflow-primary to-archflow-accent flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform">
            A
          </div>
          <span className="text-xl font-semibold text-white">archflow</span>
        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActiveSection(link.id)}
              className={`text-sm font-medium transition-colors hover:text-archflow-primary ${
                activeSection === link.id ? 'text-archflow-accent' : 'text-archflow-text-muted'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/archflow/archflow"
            target="_blank"
            rel="noopener noreferrer"
            className="text-archflow-text-muted hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#pricing"
            className="bg-cta text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-cta-hover transition-all hover:shadow-lg hover:shadow-archflow-primary/30"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}
