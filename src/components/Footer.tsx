import { Github } from 'lucide-react'

export function Footer() {
  return (
    <footer
      className="py-8 border-t"
      style={{ backgroundColor: '#0E1A2B', borderColor: 'rgba(47,128,237,0.15)' }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="/images/archflow_fundo_escuro.png"
              alt="ArchFlow"
              className="h-14 w-auto"
            />
            <span style={{ color: '#B6C2E2' }}>© 2025</span>
          </div>

          <div className="flex items-center gap-6">
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
              href="#"
              className="transition-colors hover:opacity-80 text-sm"
              style={{ color: '#B6C2E2' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#B6C2E2'}
            >
              Docs
            </a>
            <a
              href="#"
              className="transition-colors hover:opacity-80 text-sm"
              style={{ color: '#B6C2E2' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#B6C2E2'}
            >
              Blog
            </a>
            <a
              href="#"
              className="transition-colors hover:opacity-80 text-sm"
              style={{ color: '#B6C2E2' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#B6C2E2'}
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
