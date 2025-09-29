import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#6B9080',
          primaryButton: '#5A7A6C',
          surface1: '#F6FFF8',
          surface2: '#EAF4F4',
          surface3: '#CCE3DE',
          surface4: '#A4C3B2',
          ink: '#0B1220',
          white: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-urbanist)', 'var(--font-inter)', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
