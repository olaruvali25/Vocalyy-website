import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0A0F',
          secondary: '#0D0D18',
          card: '#12121E',
          elevated: '#191928',
        },
        accent: {
          primary: '#7C3AED',
          secondary: '#D946EF',
          glow: 'rgba(124, 58, 237, 0.15)',
        },
        text: {
          primary: '#F0F0F8',
          secondary: '#9CA3B0',
          accent: '#7C3AED',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.06)',
          glow: 'rgba(124, 58, 237, 0.3)',
        },
        positive: '#10B981',
        negative: '#EF4444',
        neutral: '#D946EF',
      },
      fontFamily: {
        satoshi: ['var(--font-satoshi)', 'Plus Jakarta Sans', 'sans-serif'],
        sans: ['var(--font-general-sans)', 'DM Sans', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(2.5rem, 5vw, 4.5rem)',
        'hero-sub': 'clamp(1rem, 2vw, 1.25rem)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'count-up': 'countUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'draw-line': 'drawLine 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(124, 58, 237, 0.25)' },
        },
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50px)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(124, 58, 237, 0.15)',
        'glow-lg': '0 0 40px rgba(124, 58, 237, 0.25)',
        'glow-border': '0 0 0 1px rgba(124, 58, 237, 0.3)',
        'card-hover': '0 8px 32px rgba(124, 58, 237, 0.15), 0 0 0 1px rgba(124, 58, 237, 0.3)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      maxWidth: {
        'site': '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
