/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#040711',
        backgroundAlt: '#070D1D',
        textMain: '#F1F5F9',
        textMuted: '#94A3B8',
        surface: 'rgba(15, 23, 42, 0.65)',
        surfaceBorder: 'rgba(56, 189, 248, 0.15)',
        cyanGlow: '#00F5FF',
        accentStart: '#06B6D4',
        accentEnd: '#6366F1',
        neonPurple: '#A855F7',
        neonEmerald: '#10B981',
      },
      fontFamily: {
        display: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'border-beam': 'borderBeam 4s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        borderBeam: {
          '100%': { 'offset-distance': '100%' },
        }
      }
    },
  },
  plugins: [],
}
