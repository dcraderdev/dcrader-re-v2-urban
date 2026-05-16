/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        cobalt: '#0047FF',
        'cobalt-dark': '#0035CC',
        'cobalt-light': '#4D7FFF',
        ink: '#050505',
        'ink-mid': '#111111',
        'ink-light': '#1A1A1A',
        silver: '#E8E8E8',
        'silver-mid': '#AAAAAA',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        ticker: 'ticker 30s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
