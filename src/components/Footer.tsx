import { Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-8 bg-archflow-base border-t border-deep">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-archflow-text">archflow</span>
            <span className="text-archflow-text-muted">© 2025</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/archflow/archflow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-archflow-text-muted hover:text-archflow-text transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-archflow-text-muted hover:text-archflow-text transition-colors text-sm">
              Docs
            </a>
            <a href="#" className="text-archflow-text-muted hover:text-archflow-text transition-colors text-sm">
              Blog
            </a>
            <a href="#" className="text-archflow-text-muted hover:text-archflow-text transition-colors text-sm">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
