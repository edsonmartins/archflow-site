import { Bot, Cpu, Shield, Zap, Check } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    id: 'llm',
    icon: Bot,
    title: '15+ LLM Providers',
    description: 'OpenAI, Anthropic, Azure, AWS Bedrock, Google, DeepSeek e mais',
    gradient: 'from-archflow-primary to-archflow-accent',
    stat: '15+',
    statLabel: 'Providers',
  },
  {
    id: 'mcp',
    icon: Zap,
    title: 'MCP Native',
    description: 'Interoperabilidade com ecossistema de AI via Model Context Protocol',
    gradient: 'from-archflow-accent to-archflow-accentLight',
    stat: '100+',
    statLabel: 'Tools disponíveis',
  },
  {
    id: 'enterprise',
    icon: Shield,
    title: 'Enterprise Features',
    description: 'RBAC, Audit Logging, Metrics, SSO desde o primeiro dia',
    gradient: 'from-archflow-deep to-archflow-primary',
    stat: 'SOC2',
    statLabel: 'Compliant',
  },
  {
    id: 'platform',
    icon: Cpu,
    title: 'Spring Boot Native',
    description: 'Deploy workflows como aplicações Spring Boot nativas',
    gradient: 'from-archflow-deep to-archflow-primary',
    stat: '100%',
    statLabel: 'Java nativo',
  },
]

export function FeaturesGrid() {
  return (
    <section id="features" className="py-20 bg-archflow-base border-t border-deep">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-archflow-text mb-4">
            Enterprise-ready desde o primeiro dia
          </h2>
          <p className="text-lg text-archflow-text-muted max-w-2xl mx-auto">
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
              className="group rounded-2xl border-deep bg-archflow-surface p-8 hover:border-archflow-primary/30 transition-all hover:-translate-y-1 hover:glow-subtle"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-archflow-text mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-archflow-text-muted mb-4">
                {feature.description}
              </p>

              {/* Stat */}
              <div className="flex items-baseline justify-between">
                <div className="text-2xl font-bold text-archflow-accent">
                  {feature.stat}
                </div>
                <div className="text-sm text-archflow-text-muted">
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
          <h3 className="text-lg font-semibold text-archflow-text mb-6">
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
              <div key={i} className="flex items-center gap-2 text-archflow-text-muted text-sm">
                <Check className="w-4 h-4 text-archflow-accent flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
