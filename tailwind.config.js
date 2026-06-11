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
        // Primary accent — vibrant amethyst / electric purple
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        // Secondary accent — soft warm cream / peach
        cream: {
          50: '#fffaf4',
          100: '#fff3e6',
          200: '#ffe6cc',
          300: '#fdd5ad',
          400: '#fbbf8a',
          500: '#f5a563',
        },
        // Subtle lavender section tints
        lavender: {
          50: '#faf8ff',
          100: '#f3eefe',
          200: '#e9e1fd',
          300: '#d9ccfb',
        },
        // Deep charcoal / slate inks
        ink: {
          DEFAULT: '#1e1b2e',
          soft: '#4b4763',
          muted: '#7c7892',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 8px 30px -12px rgba(76, 29, 149, 0.12)',
        'soft-lg': '0 24px 60px -20px rgba(76, 29, 149, 0.22)',
        glow: '0 12px 40px -8px rgba(124, 58, 237, 0.45)',
      },
      backgroundImage: {
        'lavender-tint': 'linear-gradient(180deg, #ffffff 0%, #faf8ff 55%, #f3eefe 100%)',
        'amethyst-banner': 'linear-gradient(120deg, #ede9fe 0%, #f3eefe 40%, #fff3e6 100%)',
        'amethyst-cta': 'linear-gradient(120deg, #7c3aed 0%, #8b5cf6 50%, #a78bfa 100%)',
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
