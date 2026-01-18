import { motion } from 'framer-motion'
import { Github, Users } from 'lucide-react'

export function CommunityCTA() {
  return (
    <section className="py-20 bg-archflow-surface border-t border-deep">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-archflow-text mb-4">
            Junte-se à comunidade Java AI
          </h2>
          <p className="text-lg text-archflow-text-muted mb-8">
            Contribua com o projeto, tire dúvidas e conecte-se com outros desenvolvedores
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/archflow/archflow"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-archflow-base border-deep px-6 py-3 rounded-lg text-archflow-text hover:bg-archflow-surface transition-all"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://discord.gg/archflow"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-archflow-base border-deep px-6 py-3 rounded-lg text-archflow-text hover:bg-archflow-surface transition-all"
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
