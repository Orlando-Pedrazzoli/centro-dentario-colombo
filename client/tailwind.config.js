// client/tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      /* ============================================
         PALETA DA MARCA
         primary-600 = #14489c (azul institucional)
         Substitui os usos genéricos de blue-*
      ============================================ */
      colors: {
        primary: {
          50: '#eff4fc',
          100: '#dbe6f8',
          200: '#b6ccf0',
          300: '#85a8e2',
          400: '#4f7fd0',
          500: '#2a5cb8',
          600: '#14489c', // cor oficial da marca
          700: '#0f3a80',
          800: '#0b2d63',
          900: '#082250',
          950: '#051733',
        },
      },

      fontFamily: {
        sans: [
          '"Plus Jakarta Sans Variable"',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },

      /* Sombras suaves e consistentes (substituem a mistura
         de shadow-md/lg/xl/2xl sem critério) */
      boxShadow: {
        card: '0 1px 3px rgba(8, 34, 80, 0.06), 0 8px 24px rgba(8, 34, 80, 0.08)',
        'card-hover':
          '0 2px 6px rgba(8, 34, 80, 0.08), 0 16px 40px rgba(8, 34, 80, 0.14)',
        cta: '0 8px 24px rgba(20, 72, 156, 0.35)',
      },

      /* ============================================
         ANIMAÇÕES
         - fade-up / fade-in: entrada de elementos (hero + Reveal)
         - Delays utilitários via animation-delay arbitrário
      ============================================ */
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.8s ease-out both',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
