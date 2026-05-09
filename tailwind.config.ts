import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        clay: {
          DEFAULT: '#B77466',
          50: '#FAF3F1',
          100: '#F0DBD7',
          200: '#DFB6AE',
          300: '#C99589',
          400: '#B77466',
          500: '#9E5D50',
          600: '#7E4840',
          700: '#5E3530',
          800: '#3F2320',
          900: '#1F1110',
        },
        cream: {
          DEFAULT: '#FFE1AF',
          50: '#FFFAF2',
          100: '#FFF5E0',
          200: '#FFE9BE',
          300: '#FFE1AF',
          400: '#FFD080',
          500: '#F5BE50',
          600: '#D9A030',
          700: '#A87820',
          800: '#755210',
          900: '#412D05',
        },
        sand: {
          DEFAULT: '#E2B59A',
          50: '#FBF6F2',
          100: '#F5E8DE',
          200: '#EDD0BC',
          300: '#E2B59A',
          400: '#D49574',
          500: '#C07550',
          600: '#9A5B38',
          700: '#754428',
          800: '#502D19',
          900: '#2A170C',
        },
        mocha: {
          DEFAULT: '#957C62',
          50: '#F5F1EC',
          100: '#E8DDD2',
          200: '#D2BBA3',
          300: '#BA9876',
          400: '#957C62',
          500: '#78634D',
          600: '#5E4D3B',
          700: '#463828',
          800: '#2E2318',
          900: '#170F07',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        aurora: 'aurora 8s ease-in-out infinite alternate',
        marquee: 'marquee 30s linear infinite',
        beam: 'beam 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        grain: 'grain 0.5s steps(1) infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
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
      },
    },
  },
  plugins: [],
};

export default config;
