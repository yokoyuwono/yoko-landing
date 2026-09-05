import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#D9FF34',
          'yellow-ink': '#000000',
        },
        surface: {
          DEFAULT: '#000000',
          elevated: '#050505',
          elevated2: '#0A0A0A',
          elevated3: '#0F0F0F',
        },
        line: {
          DEFAULT: '#141414',
          muted: '#222222',
        },
        text: {
          DEFAULT: '#FFFFFF',
          muted: '#A3A3A3',
          dim: '#666666',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(48px, 9vw, 96px)', { lineHeight: '0.9', letterSpacing: '-0.04em', fontWeight: '700' }],
        'display-lg': ['clamp(36px, 6vw, 64px)', { lineHeight: '0.92', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-md': ['clamp(28px, 4vw, 44px)', { lineHeight: '0.95', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-sm': ['clamp(22px, 3vw, 32px)', { lineHeight: '0.95', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['20px', { lineHeight: '1.6', letterSpacing: '0' }],
        'body': ['18px', { lineHeight: '1.6', letterSpacing: '0' }],
        'body-sm': ['15px', { lineHeight: '1.6', letterSpacing: '0' }],
        'caption': ['13px', { lineHeight: '1.5', letterSpacing: '0.03em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
      },
      borderRadius: {
        'card': '0px',
        'btn': '0px',
      },
      boxShadow: {
        'card': '0 0 0 1px rgba(217, 255, 52, 0.1)',
        'card-hover': '0 0 30px -10px rgba(217, 255, 52, 0.2)',
        'glow': '0 0 50px -15px rgba(217, 255, 52, 0.3)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;