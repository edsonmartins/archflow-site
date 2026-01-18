import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check } from 'lucide-react'

const frameworks = [
  { id: 'react', name: 'React', icon: '⚛️' },
  { id: 'vue', name: 'Vue', icon: '🖖️' },
  { id: 'angular', name: 'Angular', icon: '🅘' },
]

const codeSnippets = {
  react: `import { registerArchflowDesigner } from '@archflow/component'

export default function App() {
  return (
    <archflow-designer
      workflow-id="customer-support"
      api-base="http://localhost:8080/api"
      theme="dark"
      style={{ width: '100%', height: '600px' }}
    />
  )
}`,

  vue: `<template>
  <archflow-designer
    workflow-id="my-flow"
    api-base="http://localhost:8080/api"
    theme="dark"
  />
</template>`,

  angular: `import { Component } from '@angular/core'

@Component({
  selector: 'app-workflow',
  template: '<archflow-designer [workflowId]="myFlow" />'
})
export class WorkflowComponent {
  myFlow = 'customer-support'
}`,
}

export function CodeDemo() {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('react')

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab as keyof typeof codeSnippets])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="demo"
      className="py-20 border-t"
      style={{ backgroundColor: '#0E1A2B', borderColor: 'rgba(47,128,237,0.15)' }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
              Works Everywhere — Zero Lock-in
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#B6C2E2' }}>
              Um único componente que funciona em React, Vue, Angular, Svelte ou vanilla JavaScript
            </p>
          </div>

          {/* Interactive Demo */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ backgroundColor: '#152138', border: '1px solid rgba(47,128,237,0.2)' }}
          >
            {/* Header */}
            <div
              className="border-b px-6 py-4 flex items-center justify-between"
              style={{ borderColor: 'rgba(47,128,237,0.2)' }}
            >
              <div className="flex gap-6">
                {frameworks.map((fw) => (
                  <button
                    key={fw.id}
                    onClick={() => setActiveTab(fw.id)}
                    className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all"
                    style={
                      activeTab === fw.id
                        ? { color: '#FFFFFF', backgroundColor: 'rgba(47,128,237,0.2)' }
                        : { color: '#B6C2E2', backgroundColor: 'transparent' }
                    }
                    onMouseEnter={(e) => {
                      if (activeTab !== fw.id) {
                        e.currentTarget.style.backgroundColor = 'rgba(47,128,237,0.1)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeTab !== fw.id) {
                        e.currentTarget.style.backgroundColor = 'transparent'
                      }
                    }}
                  >
                    {fw.icon} {fw.name}
                  </button>
                ))}
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: '#B6C2E2' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2ED8C3'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#B6C2E2'}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" style={{ color: '#2ED8C3' }} />
                    Copied!
                  </>
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Code Window */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="rounded-lg p-6 border overflow-hidden"
                    style={{ backgroundColor: '#0A0F1A', borderColor: 'rgba(47,128,237,0.3)' }}
                  >
                    {/* Window controls */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#EF4444' }} />
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#F59E0B' }} />
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#10B981' }} />
                      </div>
                      <span
                        className="text-xs font-mono ml-auto"
                        style={{ color: '#B6C2E2' }}
                      >
                        {activeTab === 'react' ? 'App.tsx' : activeTab === 'vue' ? 'Component.vue' : 'component.ts'}
                      </span>
                    </div>

                    {/* Code */}
                    <pre className="text-sm overflow-x-auto">
                      <code className="font-mono whitespace-pre" style={{ color: '#B6C2E2' }}>
                        {codeSnippets[activeTab as keyof typeof codeSnippets]}
                      </code>
                    </pre>

                    {/* Footer bar */}
                    <div
                      className="flex items-center justify-between mt-4 pt-4 border-t text-xs"
                      style={{ borderColor: 'rgba(47,128,237,0.3)', color: '#B6C2E2' }}
                    >
                      <span>Ready to integrate in minutes</span>
                      <span className="flex items-center gap-3">
                        <span>Zero config needed</span>
                        <span>•</span>
                        <span>TypeScript types included</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Framework badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['React', 'Vue', 'Angular', 'Svelte'].map((fw) => (
              <span
                key={fw}
                className="px-3 py-1 rounded-full text-xs"
                style={{
                  backgroundColor: '#152138',
                  border: '1px solid rgba(47,128,237,0.2)',
                  color: '#B6C2E2',
                }}
              >
                {fw}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
