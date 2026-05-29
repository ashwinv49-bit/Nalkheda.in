import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FEFDF7',
        cream: '#FDF9F0',
        beige: {
          50: '#FDF9F0',
          100: '#F9F1E0',
          200: '#F5EBD0',
          DEFAULT: '#F5EFE0',
          600: '#D4C49A',
        },
        gold: {
          light: '#F0E2A3',
          DEFAULT: '#C9A84C',
          dark: '#9A7A26',
        },
        blush: {
          50: '#FDF0F3',
          100: '#FAE0E6',
          DEFAULT: '#F2C4CE',
          dark: '#E89AAB',
        },
        dark: '#2D2726',
        charcoal: '#4A4644',
        muted: '#6B6360',
        'warm-gray': '#9E9994',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 4px 20px rgba(201, 168, 76, 0.3)',
        'gold-lg': '0 8px 40px rgba(201, 168, 76, 0.45)',
        card: '0 2px 20px rgba(45, 39, 38, 0.07)',
        'card-hover': '0 8px 40px rgba(45, 39, 38, 0.14)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2.5s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201,168,76,0.5)' },
          '50%': { boxShadow: '0 0 0 18px rgba(201,168,76,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
