import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        'bebas-neue': ['var(--font-bebas-neue)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        'helvetica-neue': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        arabic: ['var(--font-arabic)', 'Cairo', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#c9a24a',
          'blue-hover': '#a8862e',
          navy: '#0c2d5c',
          light: '#e0c56e',
          gold: '#c9a24a',
          'gold-hover': '#a8862e',
          dark: '#1a1a1a',
          black: '#010101',
          muted: '#9ca3af',
        },
      },
      screens: {
        xs: '400px',
        xl2: '1440px',
      },
    },
  },
  plugins: [],
}

export default config
