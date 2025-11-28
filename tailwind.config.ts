import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rust: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'SF Pro Text', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 40px rgba(0,0,0,0.16)',
      },
    },
  },
  plugins: [],
};

export default config;
