/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#0C0C0C',
        'ink-mid': '#1A1A1A',
        'ink-light': '#262626',
        cobalt: '#0047FF',
        'cobalt-dark': '#0035CC',
        paper: '#F5F5F5',
        'paper-dark': '#E8E8E8',
        rule: '#333333',
      },
      fontFamily: {
        sans: ['DM Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['DM Mono', 'Courier New', 'monospace'],
      },
      fontWeight: {
        black: '900',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
