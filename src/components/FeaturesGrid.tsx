import { Bot, Cpu, Shield, Zap, Check } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    id: 'llm',
    icon: Bot,
    title: '15+ LLM Providers',
    description: 'OpenAI, Anthropic, Azure, AWS Bedrock, Google, DeepSeek e mais',
    gradient: 'linear-gradient(135deg, #2F80ED 0%, #2ED8C3 100%)',
    stat: '15+',
    statLabel: 'Providers',
  },
  {
    id: 'mcp',
    icon: Zap,
    title: 'MCP Native',
    description: 'Interoperabilidade com ecossistema de AI via Model Context Protocol',
    gradient: 'linear-gradient(135deg, #2ED8C3 0%, #3FE0C5 100%)',
    stat: '100+',
    statLabel: 'Tools disponíveis',
  },
  {
    id: 'enterprise',
    icon: Shield,
    title: 'Enterprise Features',
    description: 'RBAC, Audit Logging, Metrics, SSO desde o primeiro dia',
    gradient: 'linear-gradient(135deg, #1F3C88 0%, #2F80ED 100%)',
    stat: 'SOC2',
    statLabel: 'Compliant',
  },
  {
    id: 'platform',
    icon: Cpu,
    title: 'Spring Boot Native',
    description: 'Deploy workflows como aplicações Spring Boot nativas',
    gradient: 'linear-gradient(135deg, #1F3C88 0%, #2F80ED 100%)',
    stat: '100%',
    statLabel: 'Java nativo',
  },
]

export function FeaturesGrid() {
  return (
    <section
      id="features"
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
            Enterprise-ready desde o primeiro dia
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#B6C2E2' }}>
            Tudo o que você precisa para criar, deployar e monitorar workflows de IA em produção
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl p-8 transition-all hover:-translate-y-1"
              style={{
                backgroundColor: '#152138',
                border: '1px solid rgba(47,128,237,0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(47,128,237,0.4)'
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(47,128,237,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(47,128,237,0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ background: feature.gradient }}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#FFFFFF' }}>
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mb-4" style={{ color: '#B6C2E2' }}>
                {feature.description}
              </p>

              {/* Stat */}
              <div className="flex items-baseline justify-between">
                <div className="text-2xl font-bold" style={{ color: '#2ED8C3' }}>
                  {feature.stat}
                </div>
                <div className="text-sm" style={{ color: '#B6C2E2' }}>
                  {feature.statLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional features list */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-lg font-semibold mb-6" style={{ color: '#FFFFFF' }}>
            E mais:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Tool Interceptor Chain',
              'toolCallId Tracking',
              'Streaming SSE',
              'Func-Agent Mode',
              'Workflow Templates',
              'Extension Marketplace',
              'Suspend/Resume',
              'Observability (Prometheus, OpenTelemetry)',
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm" style={{ color: '#B6C2E2' }}>
                <Check className="w-4 h-4 flex-shrink-0" style={{ color: '#2ED8C3' }} />
                {feature}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
