import { motion } from 'framer-motion'

const companies = [
  { name: 'FinTech Corp', type: 'fintech' },
  { name: 'BankTech Solutions', type: 'banking' },
  { name: 'HealthCare AI', type: 'healthcare' },
  { name: 'GovTech Systems', type: 'government' },
]

export function SocialProof() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 300,
      },
    },
  }

  return (
    <section className="py-20 bg-archflow-base border-t border-deep">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold text-archflow-text mb-4">
            Trusted by Java teams at
          </h2>
          <p className="text-archflow-text-muted max-w-2xl mx-auto">
            From fintech to healthcare, teams building production-ready AI with archflow
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-x-12 gap-y-8"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-archflow-surface border-deep hover:border-archflow-primary/30 transition-all hover:-translate-y-1"
            >
              <div className="w-8 h-8 rounded bg-gradient-to-br from-archflow-primary to-archflow-accent flex items-center justify-center text-white text-sm font-bold">
                {company.name.charAt(0)}
              </div>
              <span className="text-sm text-archflow-text-muted">{company.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
        >
          {[
            { value: '70%', label: 'of enterprise apps run on JVM' },
            { value: '50%', label: 'of AI devs already use Java' },
            { value: '3x', label: 'faster AI delivery with visual builder' },
            { value: '$0', label: 'infrastructure changes needed' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-archflow-accent mb-1">{stat.value}</div>
              <div className="text-sm text-archflow-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
