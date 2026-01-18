import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

export function ProblemSection() {
  const [activeTab, setActiveTab] = useState<'python-solutions' | 'java-frameworks'>('python-solutions')

  const solutions = {
    'python-solutions': {
      label: 'LangFlow / n8n / Dify',
      items: [
        { label: 'Visual builder', has: true },
        { label: 'Backend Java', has: false },
        { label: 'Enterprise-ready', has: false },
        { label: 'Framework-agnostic UI', has: false },
      ],
    },
    'java-frameworks': {
      label: 'Spring AI / LangChain4j',
      items: [
        { label: 'Visual builder', has: false },
        { label: 'Backend Java', has: true },
        { label: 'Enterprise-ready', has: false },
        { label: 'Framework-agnostic UI', has: false },
      ],
    },
  }

  const archflow = {
    label: 'archflow',
    items: [
      { label: 'Visual builder', has: true },
      { label: 'Backend Java', has: true },
      { label: 'Enterprise-ready', has: true },
      { label: 'Framework-agnostic UI', has: true },
    ],
  }

  return (
    <section id="problem" className="py-20 bg-archflow-surface border-t border-deep">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-archflow-text mb-4">
            The Java Team Dilemma
          </h2>
          <p className="text-lg text-archflow-text-muted">
            Your team is 100% Java. You want to add AI capabilities. What do you do?
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Python Solutions */}
          <div
            onClick={() => setActiveTab('python-solutions')}
            className={`cursor-pointer rounded-2xl p-6 border-2 transition-all ${
              activeTab === 'python-solutions'
                ? 'border-archflow-primary ring-2 ring-archflow-primary/20'
                : 'border-deep hover:border-archflow-primary/50 bg-archflow-surface/50'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="text-lg font-semibold text-archflow-text">
                LangFlow / n8n / Dify
              </div>
              <X className="w-5 h-5 text-archflow-text-muted" />
            </div>

            <ul className="space-y-3 mb-6">
              {solutions['python-solutions'].items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {item.has ? (
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  )}
                  <span className={item.has ? 'text-archflow-text' : 'text-archflow-text-muted'}>
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="text-sm text-archflow-text-muted mt-4 pt-4 border-t border-archflow-surface">
              <p className="mb-1">
                <strong>Gap:</strong> Python/Node backend
              </p>
              <p className="text-xs">Requer infraestrutura adicional</p>
            </div>
          </div>

          {/* Java Frameworks */}
          <div
            onClick={() => setActiveTab('java-frameworks')}
            className={`cursor-pointer rounded-2xl p-6 border-2 transition-all ${
              activeTab === 'java-frameworks'
                ? 'border-archflow-primary ring-2 ring-archflow-primary/20'
                : 'border-deep hover:border-archflow-primary/50 bg-archflow-surface/50'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="text-lg font-semibold text-archflow-text">
                Spring AI / LangChain4j
              </div>
              <X className="w-5 h-5 text-archflow-text-muted" />
            </div>

            <ul className="space-y-3 mb-6">
              {solutions['java-frameworks'].items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {item.has ? (
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  )}
                  <span className={item.has ? 'text-archflow-text' : 'text-archflow-text-muted'}>
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="text-sm text-archflow-text-muted mt-4 pt-4 border-t border-archflow-surface">
              <p className="mb-1">
                <strong>Gap:</strong> Code-only interface
              </p>
              <p className="text-xs">Requer especialistas AI em Java</p>
            </div>
          </div>

          {/* archflow */}
          <div
            className="rounded-2xl p-6 border-2 border-archflow-accent ring-2 ring-archflow-accent/20 bg-archflow-surface glow-accent relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-archflow-accent/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Check className="w-6 h-6 text-archflow-accent" />
                <div className="text-xl font-bold text-archflow-text">
                  archflow
                </div>
                <span className="ml-auto text-xs bg-archflow-accent/20 text-archflow-accent px-2 py-1 rounded-full">
                  ÚNICO
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                {archflow.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-archflow-accent flex-shrink-0 mt-0.5" />
                    <span className="text-archflow-text">{item.label}</span>
                  </li>
                ))}
              </ul>

              <div className="text-sm text-archflow-text-muted mt-4 pt-4 border-t border-archflow-surface">
                <p className="mb-1">
                  <strong>Diferencial:</strong> Java + Visual + Zero Lock-in
                </p>
                <p className="text-xs">
                  Deploy como Spring Boot app, UI funciona em qualquer framework
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-archflow-text-muted text-sm max-w-2xl mx-auto">
            <span className="text-archflow-accent">archflow</span> é a única
            plataforma que combina todas as vantagens sem trade-offs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
