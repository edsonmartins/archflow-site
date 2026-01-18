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
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#0E1A2B' }}
    >
      {/* Radial depth behind video (right side) */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] opacity-100 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at right center, rgba(47,128,237,0.12), transparent 60%)',
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ backgroundColor: '#152138', border: '1px solid rgba(47,128,237,0.2)' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#2ED8C3' }}></span>
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#2ED8C3' }}></span>
              </span>
              <span className="text-sm" style={{ color: '#B6C2E2' }}>
                First Visual AI Builder for Java Teams
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ color: '#FFFFFF' }}
            >
              Build AI Workflows
              <span className="block" style={{
                background: 'linear-gradient(135deg, #2F80ED 0%, #2ED8C3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Visually. Deploy as Java.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl mb-10 leading-relaxed"
              style={{ color: '#B6C2E2' }}
            >
              The first visual AI builder that's Java-native. Drag-and-drop workflows
              deployed as Spring Boot apps. Framework-agnostic UI that works everywhere.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
              <a
                href="#pricing"
                onClick={() => setActiveSection('pricing')}
                className="text-white px-8 py-4 rounded-lg text-base font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #2F80ED 0%, #2ED8C3 100%)',
                }}
              >
                Start Building Free
              </a>
              <a
                href="https://github.com/edsonmartins/archflow"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg text-base font-medium transition-all hover:-translate-y-0.5"
                style={{
                  color: '#FFFFFF',
                  border: '1px solid rgba(47,128,237,0.2)',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#152138'
                  e.currentTarget.style.borderColor = 'rgba(47,128,237,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.borderColor = 'rgba(47,128,237,0.2)'
                }}
              >
                View on GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{
                boxShadow: '0 25px 50px -12px rgba(47, 128, 237, 0.25)'
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto rounded-2xl"
                style={{ display: 'block' }}
              >
                <source src="/images/video_A.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: '#B6C2E2' }}
      >
        <span className="text-xs">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 flex items-center justify-center"
        >
          <svg className="w-5 h-5" fill="none" stroke="#2F80ED" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7l-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
