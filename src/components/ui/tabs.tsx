import { createContext, useContext, useState, ReactNode } from 'react'

interface TabsContextType {
  value: string
  onValueChange: (value: string) => void
}

const TabsContext = createContext<TabsContextType | null>(null)

export function Tabs({ defaultValue, value: controlledValue, onValueChange, children, className }: {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
  className?: string
}) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? '')
  const resolvedValue = controlledValue ?? internalValue

  const handleValueChange = (newValue: string) => {
    setInternalValue(newValue)
    onValueChange?.(newValue)
  }

  return (
    <TabsContext.Provider value={{ value: resolvedValue, onValueChange: handleValueChange }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabsList({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className || ''}`}>
      {children}
    </div>
  )
}

export interface TabsTriggerProps {
  value: string
  children: ReactNode
  className?: string
}

export function TabsTrigger({ value: triggerValue, children, className }: TabsTriggerProps) {
  const context = useContext(TabsContext)
  if (!context) return null

  const { value: activeValue, onValueChange } = context

  return (
    <button
      type="button"
      onClick={() => onValueChange(triggerValue)}
      className={`
        px-4 py-2 rounded-lg text-sm font-medium transition-all
        ${activeValue === triggerValue
          ? 'text-archflow-text bg-archflow-surface'
          : 'text-archflow-text-muted hover:text-archflow-text hover:bg-archflow-surface'
        }
        ${className || ''}
      `}
    >
      {children}
    </button>
  )
}

export interface TabsContentProps {
  value: string
  children: ReactNode
}

export function TabsContent({ value: contentValue, children }: TabsContentProps) {
  const context = useContext(TabsContext)
  if (!context) return null

  const { value: activeValue } = context

  if (activeValue !== contentValue) return null

  return <div className="mt-2">{children}</div>
}
