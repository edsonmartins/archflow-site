// Utility types for animation props
export interface AnimationProps {
  delay?: number
  duration?: number
}

export const cn = (...classes: (string | boolean | undefined)[]): string => {
  return classes.filter(Boolean).join(' ')
}

// Archflow color constants for consistency
export const colors = {
  base: '#0E1A2B',
  deep: '#1F3C88',
  deepLight: '#2459C7',
  primary: '#2F80ED',
  primaryLight: '#3A7BFF',
  accent: '#2ED8C3',
  accentLight: '#3FE0C5',
  surface: '#152138',
  text: '#FFFFFF',
  textMuted: '#B6C2E2',
} as const
