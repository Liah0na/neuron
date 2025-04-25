import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-roboto)'],
        secondary: ['var(--font-sora)'],
      },
    },
  },
  plugins: [],
}

export default config
