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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        isScrolled
          ? { backgroundColor: 'rgba(14, 26, 43, 0.95)', borderBottom: '1px solid rgba(47,128,237,0.15)', backdropFilter: 'blur(12px)' }
          : { backgroundColor: 'transparent' }
      }
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/images/archflow_fundo_escuro.png"
            alt="ArchFlow"
            className="h-20 w-auto group-hover:scale-105 transition-transform"
          />
        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActiveSection(link.id)}
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={
                activeSection === link.id
                  ? { color: '#2ED8C3' }
                  : { color: '#B6C2E2' }
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/edsonmartins/archflow"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:opacity-80"
            style={{ color: '#B6C2E2' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#B6C2E2'}
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#pricing"
            className="text-white px-5 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #2F80ED 0%, #2ED8C3 100%)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(47,128,237,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}
