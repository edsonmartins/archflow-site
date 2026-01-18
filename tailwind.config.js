/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        archflow: {
          // Paleta oficial archflow
          base: '#0E1A2B',      // Fundo escuro principal
          deep: '#1F3C88',       // Azul profundo / indigo tech
          deepLight: '#2459C7',  // Variação mais viva
          primary: '#2F80ED',    // Azul médio / elétrico
          primaryLight: '#3A7BFF',
          accent: '#2ED8C3',      // Ciano / teal (AI)
          accentLight: '#3FE0C5',
          surface: '#152138',    // Azul quase preto (cards/borders)
          text: '#FFFFFF',       // Branco puro
          textMuted: '#B6C2E2',  // Texto secundário
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      spacing: {
        'section': '5rem',    // 80px
        'component': '1.5rem', // 24px
      }
    }
  },
  plugins: [],
}
