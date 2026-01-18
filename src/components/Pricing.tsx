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
    <section
      id="pricing"
      className="py-20"
      style={{ backgroundColor: '#0E1A2B' }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
            Pricing que faz sentido
          </h2>
          <p className="text-lg" style={{ color: '#B6C2E2' }}>
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
              className="rounded-2xl p-8 border-2 relative"
              style={
                plan.highlighted
                  ? {
                      backgroundColor: '#152138',
                      borderColor: '#2ED8C3',
                      boxShadow: '0 0 0 2px rgba(46,216,195,0.2), 0 25px 50px -12px rgba(46,216,195,0.25)',
                    }
                  : {
                      backgroundColor: '#152138',
                      borderColor: 'rgba(47,128,237,0.15)',
                    }
              }
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="text-white text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #2F80ED 0%, #2ED8C3 100%)',
                    }}
                  >
                    POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#FFFFFF' }}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold" style={{ color: '#FFFFFF' }}>
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm" style={{ color: '#B6C2E2' }}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#2ED8C3' }} />
                    <span className="text-sm" style={{ color: '#FFFFFF' }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-3 rounded-lg font-medium transition-all hover:-translate-y-0.5"
                style={
                  plan.highlighted
                    ? {
                        color: '#FFFFFF',
                        background: 'linear-gradient(135deg, #2F80ED 0%, #2ED8C3 100%)',
                        border: 'none',
                      }
                    : {
                        color: '#FFFFFF',
                        backgroundColor: 'transparent',
                        border: '1px solid rgba(47,128,237,0.3)',
                      }
                }
                onMouseEnter={(e) => {
                  if (!plan.highlighted) {
                    e.currentTarget.style.backgroundColor = 'rgba(47,128,237,0.1)'
                    e.currentTarget.style.borderColor = 'rgba(47,128,237,0.5)'
                  } else {
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(47,128,237,0.3)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.highlighted) {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.borderColor = 'rgba(47,128,237,0.3)'
                  } else {
                    e.currentTarget.style.boxShadow = 'none'
                  }
                }}
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
