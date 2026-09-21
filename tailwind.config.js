/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#071A11',
          900: '#0C2B1D',
          800: '#133E2B',
          700: '#1B543B',
          600: '#246D4D',
          500: '#2E8B62',
        },
        primary: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
          950: '#052E16',
        },
        accent: {
          mint: '#86EFAC',
          emerald: '#10B981',
          forest: '#15803D',
          lime: '#84CC16',
          amber: '#F59E0B',
          gold: '#D97706',
          cream: '#F8FAF6',
          sage: '#E2EBE2',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'blob': 'blob 12s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'spin-slow': 'spin 16s linear infinite',
        'glow-green': 'glowGreen 3s ease-in-out infinite alternate',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.12)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.92)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowGreen: {
          '0%': { boxShadow: '0 0 15px rgba(34, 197, 94, 0.25)' },
          '100%': { boxShadow: '0 0 35px rgba(21, 128, 61, 0.45)' },
        }
      },
      boxShadow: {
        'glass': '0 8px 30px rgba(12, 43, 29, 0.05)',
        'glass-hover': '0 16px 40px rgba(22, 163, 74, 0.14)',
        'neon-green': '0 0 25px rgba(34, 197, 94, 0.4)',
        'neon-emerald': '0 0 30px rgba(21, 128, 61, 0.35)',
        'subtle': '0 2px 15px rgba(0, 0, 0, 0.04)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
