import { motion } from 'framer-motion'
import { Github, Users } from 'lucide-react'

export function CommunityCTA() {
  return (
    <section
      className="py-20 border-t"
      style={{ backgroundColor: '#0E1A2B', borderColor: 'rgba(47,128,237,0.15)' }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
            Junte-se à comunidade Java AI
          </h2>
          <p className="text-lg mb-8" style={{ color: '#B6C2E2' }}>
            Contribua com o projeto, tire dúvidas e conecte-se com outros desenvolvedores
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/edsonmartins/archflow"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: '#152138',
                border: '1px solid rgba(47,128,237,0.3)',
                color: '#FFFFFF',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(47,128,237,0.1)'
                e.currentTarget.style.borderColor = 'rgba(47,128,237,0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#152138'
                e.currentTarget.style.borderColor = 'rgba(47,128,237,0.3)'
              }}
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://discord.gg/archflow"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg"
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
              <Users className="w-5 h-5" />
              Discord
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
