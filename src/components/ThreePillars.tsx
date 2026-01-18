import { Check, Code2, Cpu, Layers } from 'lucide-react'
import { motion } from 'framer-motion'

const pillars = [
  {
    id: 'visual',
    icon: Code2,
    title: 'Visual Designer',
    description: 'Drag-and-drop workflows com 15+ tipos de nós',
    features: ['LLM Nodes', 'Tools', 'RAG Pipelines', 'Conditions', 'Parallel'],
    gradient: 'from-archflow-primary to-archflow-accent',
  },
  {
    id: 'java',
    icon: Cpu,
    title: 'Java-Nativo',
    description: 'Spring Boot 3 + LangChain4j 1.10.0 integrados',
    features: ['Spring Integration', 'Enterprise Features', 'Production Ready', 'On-Premise'],
    gradient: 'from-archflow-deep to-archflow-primary',
  },
  {
    id: 'component',
    icon: Layers,
    title: 'Web Component',
    description: 'Framework-agnostic UI que funciona em qualquer lugar',
    features: ['React Ready', 'Vue Ready', 'Angular Ready', 'Zero Lock-in'],
    gradient: 'from-archflow-accent to-archflow-accentLight',
  },
]

export function ThreePillars() {
  return (
    <section className="py-20 bg-archflow-base border-t border-deep">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-archflow-text mb-4">
            Why archflow?
          </h2>
          <p className="text-lg text-archflow-text-muted max-w-2xl mx-auto">
            Três diferenciais únicos que você não encontra em nenhuma outra solução Java
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl border-deep bg-archflow-surface p-8 hover:border-archflow-primary/30 transition-all hover:-translate-y-2"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-archflow-text mb-2">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-archflow-text-muted mb-6">
                  {pillar.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {pillar.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-archflow-text">
                      <Check className="w-4 h-4 text-archflow-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
