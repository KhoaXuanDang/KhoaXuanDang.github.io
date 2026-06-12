/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary accent — refined navy / royal blue (suit vibe)
        primary: {
          50: '#eef4ff',
          100: '#dae6ff',
          200: '#bcd2ff',
          300: '#8eb3ff',
          400: '#5b8af6',
          500: '#3666ea',
          600: '#2049d6',
          700: '#1c3bb0',
          800: '#1c348b',
          900: '#1b2f6e',
          950: '#121d44',
        },
        // Secondary accent — warm champagne / sand (classic navy pairing)
        cream: {
          50: '#fdfaf4',
          100: '#f7efe1',
          200: '#efe1c9',
          300: '#e6cfa8',
          400: '#d9b884',
          500: '#b8945a',
        },
        // Cool, crisp light section tints (steel/mist)
        mist: {
          50: '#f5f8fd',
          100: '#eaf1fb',
          200: '#dbe7f6',
          300: '#c3d6ee',
        },
        // Deep navy slate inks
        ink: {
          DEFAULT: '#0f172a',
          soft: '#33415a',
          muted: '#64748b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'sans-serif'],
        hand: ['Caveat', 'ui-sans-serif', 'cursive'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 8px 30px -12px rgba(15, 23, 42, 0.14)',
        'soft-lg': '0 24px 60px -20px rgba(15, 23, 42, 0.22)',
        glow: '0 12px 40px -10px rgba(32, 73, 214, 0.45)',
      },
      backgroundImage: {
        'hero-tint': 'linear-gradient(180deg, #ffffff 0%, #f7faff 55%, #eef3fb 100%)',
        'accent-banner': 'linear-gradient(120deg, #e7eefb 0%, #eef3fb 40%, #f7efe1 100%)',
        'accent-cta': 'linear-gradient(120deg, #1c348b 0%, #2049d6 50%, #3666ea 100%)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) both',
        float: 'float 7s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
