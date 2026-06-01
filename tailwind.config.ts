import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // New Terminal/SaaS Palette
        cyan: {
          DEFAULT: '#00D9FF',
          50: '#F0FFFE',
          100: '#CCFBFF',
          200: '#99F7FF',
          300: '#66F3FF',
          400: '#33EFFF',
          500: '#00D9FF',
          600: '#00A8CC',
          700: '#007799',
          800: '#004D66',
          900: '#002433',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          50: '#1F1F1F',
          100: '#1A1A1A',
          200: '#111111',
          300: '#0F0F0F',
          400: '#0C0C0C',
          500: '#0A0A0A',
          600: '#080808',
          700: '#060606',
          800: '#040404',
          900: '#020202',
        },
        surface: {
          DEFAULT: '#1A1A1A',
          50: '#2D2D2D',
          100: '#252525',
          200: '#1F1F1F',
          300: '#1A1A1A',
          400: '#151515',
          500: '#111111',
          600: '#0F0F0F',
          700: '#0D0D0D',
          800: '#0B0B0B',
          900: '#050505',
        },
        accent: {
          success: '#10B981',
          warning: '#F59E0B',
          critical: '#EF4444',
        },
        primary: '#F5F5F5',
        secondary: '#999999',
        tertiary: '#666666',
        'border-light': '#252525',
        'border-alt': '#333333',
      },
      fontFamily: {
        mono: ['DM Mono', 'monospace'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        beam: 'beam 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        grain: 'grain 0.5s steps(1) infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        scanline: 'scanline 8s linear infinite',
        blink: 'blink 1s step-start infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'grid-fade': 'gridFade 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        beam: { '0%,100%': { opacity: '0' }, '50%': { opacity: '1' } },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        grain: {
          '0%,100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-5%,-5%)' },
          '30%': { transform: 'translate(3%,-3%)' },
          '50%': { transform: 'translate(-3%,5%)' },
          '70%': { transform: 'translate(5%,3%)' },
          '90%': { transform: 'translate(-5%,2%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 217, 255, 0.1)' },
          '50%': { boxShadow: '0 0 25px rgba(0, 217, 255, 0.3)' },
        },
        gridFade: {
          '0%, 100%': { opacity: '0.02' },
          '50%': { opacity: '0.05' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
