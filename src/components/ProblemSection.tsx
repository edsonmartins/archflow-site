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
    <section
      id="problem"
      className="py-20 border-t"
      style={{ backgroundColor: '#0E1A2B', borderColor: 'rgba(47,128,237,0.15)' }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
            The Java Team Dilemma
          </h2>
          <p className="text-lg" style={{ color: '#B6C2E2' }}>
            Your team is 100% Java. You want to add AI capabilities. What do you do?
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Python Solutions */}
          <div
            onClick={() => setActiveTab('python-solutions')}
            className="cursor-pointer rounded-2xl p-6 border-2 transition-all"
            style={{
              backgroundColor: '#152138',
              borderColor: activeTab === 'python-solutions' ? '#2F80ED' : 'rgba(47,128,237,0.2)',
              boxShadow: activeTab === 'python-solutions' ? '0 0 0 2px rgba(47,128,237,0.2)' : 'none',
            }}
            onMouseEnter={(e) => {
              if (activeTab !== 'python-solutions') {
                e.currentTarget.style.borderColor = 'rgba(47,128,237,0.3)'
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'python-solutions') {
                e.currentTarget.style.borderColor = 'rgba(47,128,237,0.2)'
              }
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>
                LangFlow / n8n / Dify
              </div>
              <X className="w-5 h-5" style={{ color: '#B6C2E2' }} />
            </div>

            <ul className="space-y-3 mb-6">
              {solutions['python-solutions'].items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {item.has ? (
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                  ) : (
                    <X className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#EF4444' }} />
                  )}
                  <span style={{ color: item.has ? '#FFFFFF' : '#B6C2E2' }}>
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="text-sm mt-4 pt-4 border-t" style={{ color: '#B6C2E2', borderColor: 'rgba(47,128,237,0.2)' }}>
              <p className="mb-1">
                <strong>Gap:</strong> Python/Node backend
              </p>
              <p className="text-xs">Requer infraestrutura adicional</p>
            </div>
          </div>

          {/* Java Frameworks */}
          <div
            onClick={() => setActiveTab('java-frameworks')}
            className="cursor-pointer rounded-2xl p-6 border-2 transition-all"
            style={{
              backgroundColor: '#152138',
              borderColor: activeTab === 'java-frameworks' ? '#2F80ED' : 'rgba(47,128,237,0.2)',
              boxShadow: activeTab === 'java-frameworks' ? '0 0 0 2px rgba(47,128,237,0.2)' : 'none',
            }}
            onMouseEnter={(e) => {
              if (activeTab !== 'java-frameworks') {
                e.currentTarget.style.borderColor = 'rgba(47,128,237,0.3)'
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== 'java-frameworks') {
                e.currentTarget.style.borderColor = 'rgba(47,128,237,0.2)'
              }
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>
                Spring AI / LangChain4j
              </div>
              <X className="w-5 h-5" style={{ color: '#B6C2E2' }} />
            </div>

            <ul className="space-y-3 mb-6">
              {solutions['java-frameworks'].items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {item.has ? (
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                  ) : (
                    <X className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#EF4444' }} />
                  )}
                  <span style={{ color: item.has ? '#FFFFFF' : '#B6C2E2' }}>
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="text-sm mt-4 pt-4 border-t" style={{ color: '#B6C2E2', borderColor: 'rgba(47,128,237,0.2)' }}>
              <p className="mb-1">
                <strong>Gap:</strong> Code-only interface
              </p>
              <p className="text-xs">Requer especialistas AI em Java</p>
            </div>
          </div>

          {/* archflow */}
          <div
            className="rounded-2xl p-6 border-2 relative overflow-hidden"
            style={{
              backgroundColor: '#152138',
              borderColor: '#2ED8C3',
              boxShadow: '0 0 0 2px rgba(46,216,195,0.2), 0 25px 50px -12px rgba(46,216,195,0.25)',
            }}
          >
            {/* Background decoration */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
              style={{ backgroundColor: 'rgba(46,216,195,0.1)' }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Check className="w-6 h-6" style={{ color: '#2ED8C3' }} />
                <div className="text-xl font-bold" style={{ color: '#FFFFFF' }}>
                  archflow
                </div>
                <span
                  className="ml-auto text-xs px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: 'rgba(46,216,195,0.15)',
                    color: '#2ED8C3',
                  }}
                >
                  ÚNICO
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                {archflow.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#2ED8C3' }} />
                    <span style={{ color: '#FFFFFF' }}>{item.label}</span>
                  </li>
                ))}
              </ul>

              <div className="text-sm mt-4 pt-4 border-t" style={{ color: '#B6C2E2', borderColor: 'rgba(47,128,237,0.2)' }}>
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
          <p className="text-sm max-w-2xl mx-auto" style={{ color: '#B6C2E2' }}>
            <span style={{ color: '#2ED8C3', fontWeight: 600 }}>archflow</span> é a única
            plataforma que combina todas as vantagens sem trade-offs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
