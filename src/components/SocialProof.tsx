import { motion } from 'framer-motion'

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
    <section
      className="py-20 border-t"
      style={{ backgroundColor: '#0E1A2B', borderColor: 'rgba(47,128,237,0.15)' }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="max-w-3xl mx-auto"
        >
          {/* Code Preview Card */}
          <div className="relative">
            {/* Gradient glow */}
            <div
              className="absolute -inset-1 rounded-xl blur-xl"
              style={{
                background: 'linear-gradient(to right, rgba(47,128,237,0.2), rgba(46,216,195,0.2), rgba(62,224,197,0.2))',
              }}
            />

            {/* Code window */}
            <div
              className="relative rounded-xl overflow-hidden"
              style={{ backgroundColor: '#152138', border: '1px solid rgba(47,128,237,0.2)' }}
            >
              {/* Header bar */}
              <div
                className="flex items-center justify-between px-4 py-3"
                style={{ borderBottom: '1px solid rgba(47,128,237,0.2)' }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#EF4444' }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#F59E0B' }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#10B981' }} />
                  </div>
                  <span className="text-xs font-mono" style={{ color: '#B6C2E2' }}>App.tsx</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="transition-colors" style={{ color: '#B6C2E2' }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                  <button className="transition-colors" style={{ color: '#B6C2E2' }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4m-4-4h12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Code */}
              <pre className="p-4 text-sm overflow-x-auto">
                <code className="font-mono" style={{ color: '#B6C2E2' }}>
                  <span style={{ color: '#2ED8C3' }}>{'<'}</span>
                  <span style={{ color: '#2F80ED' }}>archflow-designer</span>
                  <span style={{ color: '#FFFFFF' }}>{'\n  workflow-id='}</span>
                  <span style={{ color: '#2ED8C3' }}>customer-support</span>
                  <span style={{ color: '#FFFFFF' }}>{"'\n  api-base='https://api.archflow.com'\n  theme='dark'"}</span>
                  <span style={{ color: '#FFFFFF' }}>{'>\n\n'}</span>
                  <span style={{ color: '#2F80ED' }}>script</span>
                  <span style={{ color: '#FFFFFF' }}>{'\n  const designer = document.querySelector(\'archflow-designer\')\n  designer.addEventListener(\'workflow-saved\', (e) => {\n    console.log(\'Workflow saved:\', e.detail)\n  })\n'}</span>
                  <span style={{ color: '#2ED8C3' }}>{'</'}</span>
                  <span style={{ color: '#2F80ED' }}>archflow-designer</span>
                  <span style={{ color: '#FFFFFF' }}>{'>'}</span>
                </code>
              </pre>

              {/* Footer bar */}
              <div
                className="flex items-center justify-between px-4 py-2"
                style={{
                  borderTop: '1px solid rgba(47,128,237,0.2)',
                  backgroundColor: 'rgba(14, 26, 43, 0.5)',
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#10B981' }} />
                  <span className="text-xs" style={{ color: '#B6C2E2' }}>Ready to integrate</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs" style={{ color: '#B6C2E2' }}>React</span>
                  <span className="text-xs" style={{ color: '#B6C2E2' }}>•</span>
                  <span className="text-xs" style={{ color: '#B6C2E2' }}>Vue</span>
                  <span className="text-xs" style={{ color: '#B6C2E2' }}>•</span>
                  <span className="text-xs" style={{ color: '#B6C2E2' }}>Angular</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
