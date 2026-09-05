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
          teal: '#2DD4BF',
          'teal-ink': '#04110F',
        },
        surface: {
          DEFAULT: '#0F0F12',
          elevated: '#141419',
          elevated2: '#1A1A20',
        },
        line: {
          DEFAULT: '#222228',
          muted: '#2C2C34',
        },
        text: {
          DEFAULT: '#ECECE8',
          muted: '#8F8F98',
          dim: '#5E5E68',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(48px, 8vw, 80px)', { lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-lg': ['clamp(36px, 5vw, 56px)', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-md': ['clamp(28px, 3.5vw, 40px)', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.7', letterSpacing: '0' }],
        'body': ['16px', { lineHeight: '1.65', letterSpacing: '0' }],
        'body-sm': ['14px', { lineHeight: '1.6', letterSpacing: '0' }],
        'caption': ['12px', { lineHeight: '1.5', letterSpacing: '0.03em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'card': '20px',
        'btn': '10px',
      },
      boxShadow: {
        'card': '0 4px 24px -4px rgba(0,0,0,0.4)',
        'card-hover': '0 12px 40px -8px rgba(0,0,0,0.5)',
        'glow': '0 0 40px -10px rgba(45, 212, 191, 0.35)',
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