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
    <section id="demo" className="py-20 bg-archflow-surface border-t border-deep">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-archflow-text mb-4">
              Works Everywhere — Zero Lock-in
            </h2>
            <p className="text-lg text-archflow-text-muted max-w-2xl mx-auto">
              Um único componente que funciona em React, Vue, Angular, Svelte ou vanilla JavaScript
            </p>
          </div>

          {/* Interactive Demo */}
          <div className="bg-archflow-base rounded-2xl border-deep glow-subtle overflow-hidden">
            {/* Header */}
            <div className="border-b border-deep px-6 py-4 flex items-center justify-between">
              <div className="flex gap-6">
                {frameworks.map((fw) => (
                  <button
                    key={fw.id}
                    onClick={() => setActiveTab(fw.id)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === fw.id
                        ? 'text-archflow-text bg-archflow-surface'
                        : 'text-archflow-text-muted hover:text-archflow-text hover:bg-archflow-surface'
                    }`}
                  >
                    {fw.icon} {fw.name}
                  </button>
                ))}
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 text-sm text-archflow-text-muted hover:text-archflow-accent transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-archflow-accent" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                  </>
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
                  <div className="bg-archflow-base rounded-lg p-6 border-deep overflow-hidden">
                    {/* Window controls */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <span className="text-xs text-archflow-text-muted font-mono ml-auto">
                        {activeTab === 'react' ? 'App.tsx' : activeTab === 'vue' ? 'Component.vue' : 'component.ts'}
                      </span>
                    </div>

                    {/* Code */}
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-archflow-text-muted font-mono whitespace-pre">
                        {codeSnippets[activeTab as keyof typeof codeSnippets]}
                      </code>
                    </pre>

                    {/* Footer bar */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-deep text-xs text-archflow-text-muted">
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
                className="px-3 py-1 rounded-full bg-archflow-surface border-deep text-xs text-archflow-text-muted"
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
