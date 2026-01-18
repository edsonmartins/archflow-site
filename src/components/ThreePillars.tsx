import { Check, Code2, Cpu, Layers } from 'lucide-react'
import { motion } from 'framer-motion'

const pillars = [
  {
    id: 'visual',
    icon: Code2,
    title: 'Visual Designer',
    description: 'Drag-and-drop workflows com 15+ tipos de nós',
    features: ['LLM Nodes', 'Tools', 'RAG Pipelines', 'Conditions', 'Parallel'],
    gradient: 'linear-gradient(135deg, #2F80ED 0%, #2ED8C3 100%)',
  },
  {
    id: 'java',
    icon: Cpu,
    title: 'Java-Nativo',
    description: 'Spring Boot 3 + LangChain4j 1.10.0 integrados',
    features: ['Spring Integration', 'Enterprise Features', 'Production Ready', 'On-Premise'],
    gradient: 'linear-gradient(135deg, #1F3C88 0%, #2F80ED 100%)',
  },
  {
    id: 'component',
    icon: Layers,
    title: 'Web Component',
    description: 'Framework-agnostic UI que funciona em qualquer lugar',
    features: ['React Ready', 'Vue Ready', 'Angular Ready', 'Zero Lock-in'],
    gradient: 'linear-gradient(135deg, #2ED8C3 0%, #3FE0C5 100%)',
  },
]

export function ThreePillars() {
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
            Why archflow?
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#B6C2E2' }}>
            Três diferenciais únicos que você não encontra em nenhuma outra solução Java
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl p-8 transition-all hover:-translate-y-2"
              style={{
                backgroundColor: '#152138',
                border: '1px solid rgba(47,128,237,0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(47,128,237,0.3)'
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(47,128,237,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(47,128,237,0.15)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ background: pillar.gradient }}
                >
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#FFFFFF' }}>
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="mb-6" style={{ color: '#B6C2E2' }}>
                  {pillar.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {pillar.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm" style={{ color: '#FFFFFF' }}>
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: '#2ED8C3' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              boxShadow: '0 25px 50px -12px rgba(47, 128, 237, 0.25)',
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
              style={{ display: 'block' }}
            >
              <source src="/images/video_B.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="text-center mt-6 text-sm" style={{ color: '#B6C2E2' }}>
            Visual workflow designer com integração nativa ao ecossistema Java
          </p>
        </motion.div>
      </div>
    </section>
  )
}
