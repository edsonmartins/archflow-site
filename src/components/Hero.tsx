import { motion } from 'framer-motion'

export function Hero({ setActiveSection }: { setActiveSection: (s: string) => void }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-archflow-primary/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-archflow-surface border-deep mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-archflow-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-archflow-accent"></span>
            </span>
            <span className="text-sm text-archflow-text-muted">
              First Visual AI Builder for Java Teams
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-archflow-text mb-6 leading-tight"
          >
            Build AI Workflows
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-archflow-primary via-archflow-accent to-archflow-accentLight">
              Visually. Deploy as Java.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-archflow-text-muted mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            The first visual AI builder that's Java-native. Drag-and-drop workflows
            deployed as Spring Boot apps. Framework-agnostic UI that works everywhere.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mb-16">
            <a
              href="#pricing"
              className="bg-cta text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-cta-hover transition-all hover:shadow-lg hover:shadow-archflow-primary/30 hover:-translate-y-0.5"
              onClick={() => setActiveSection('pricing')}
            >
              Start Building Free
            </a>
            <a
              href="https://github.com/archflow/archflow"
              target="_blank"
              rel="noopener noreferrer"
              className="border-deep text-archflow-text px-8 py-4 rounded-lg text-base font-medium hover:bg-archflow-surface hover:border-archflow-primary transition-all hover:-translate-y-0.5"
            >
              View on GitHub
            </a>
          </motion.div>

          {/* Code Preview */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-2xl mx-auto"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-archflow-primary/20 via-archflow-accent/20 to-archflow-accentLight/20 rounded-xl blur-xl" />
            <div className="relative bg-archflow-surface rounded-xl border-deep overflow-hidden">
              {/* Header bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-archflow-primary/20">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-archflow-text-muted font-mono">app.tsx</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-archflow-text-muted hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012 2v8a2 2 0 002 2h8a2 2 0 002-2v-8a2 2 0 01-2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                  <button className="text-archflow-text-muted hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4m-4-4h12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Code */}
              <pre className="p-4 text-sm overflow-x-auto">
                <code className="text-archflow-text-muted font-mono">
                  <span className="text-archflow-accent">{'<'}</span>
                  <span className="text-archflow-primary">archflow-designer</span>
                  <span className="text-archflow-text">{'\n  workflow-id='}</span>
                  <span className="text-archflow-accent">customer-support</span>
                  <span className="text-archflow-text">{"'\n  api-base='https://api.archflow.com'\n  theme='dark'"}</span>
                  <span className="text-archflow-text">{'>\n\n'}</span>
                  <span className="text-archflow-primary">script</span>
                  <span className="text-archflow-text">{'\n  const designer = document.querySelector(\'archflow-designer\')\n  designer.addEventListener(\'workflow-saved\', (e) => {\n    console.log(\'Workflow saved:\', e.detail)\n  })\n'}</span>
                  <span className="text-archflow-accent">{'</'}</span>
                  <span className="text-archflow-primary">archflow-designer</span>
                  <span className="text-archflow-text">{'>'}</span>
                </code>
              </pre>

              {/* Footer bar */}
              <div className="flex items-center justify-between px-4 py-2 border-t border-archflow-primary/20 bg-archflow-base/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-archflow-text-muted">Ready to integrate</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-archflow-text-muted">React</span>
                  <span className="text-xs text-archflow-text-muted">•</span>
                  <span className="text-xs text-archflow-text-muted">Vue</span>
                  <span className="text-xs text-archflow-text-muted">•</span>
                  <span className="text-xs text-archflow-text-muted">Angular</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-archflow-text-muted"
      >
        <span className="text-xs">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 flex items-center justify-center"
        >
          <svg className="w-5 h-5 text-archflow-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7l-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
