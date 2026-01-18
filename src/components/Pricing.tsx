import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export function Pricing() {
  const plans = [
    {
      name: 'Community',
      price: 'Free',
      description: 'Para explorar e contribuir',
      features: [
        'Visual workflow designer',
        'Local deployment',
        'Community support',
        'Open source core',
      ],
      cta: 'Começar Gratis',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$49/mês',
      description: 'Para times em produção',
      features: [
        'Tudo do Community',
        'Cloud deployment',
        'Priority support',
        'Advanced monitoring',
        'Team collaboration',
        'SSO/SAML',
      ],
      cta: 'Start Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Para grandes organizações',
      features: [
        'Tudo do Pro',
        'On-premise deployment',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee',
        'Audit logs',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-archflow-base">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-archflow-text mb-4">
            Pricing que faz sentido
          </h2>
          <p className="text-lg text-archflow-text-muted">
            Comece gratis, escale quando precisar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 border-2 relative ${
                plan.highlighted
                  ? 'border-archflow-accent ring-2 ring-archflow-accent/20 glow-accent'
                  : 'border-deep bg-archflow-surface'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-archflow-accent text-white text-xs font-medium px-3 py-1 rounded-full">
                    POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-archflow-text mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold text-archflow-text">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-archflow-text-muted">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-archflow-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-archflow-text">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  plan.highlighted
                    ? 'bg-cta text-white hover:bg-cta-hover'
                    : 'border-deep text-archflow-text hover:bg-archflow-surface'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
