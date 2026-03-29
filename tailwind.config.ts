import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        'aurra-white': '#ffffff',
        'aurra-off': '#f5f5f7',
        'aurra-light': '#e8e8ed',
        'aurra-mid': '#6e6e73',
        'aurra-dark': '#1d1d1f',
        'aurra-black': '#000000',
      },
      maxWidth: {
        content: '980px',
      },
      borderRadius: {
        card: '18px',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'ping-slow': 'ping-slow 2s ease-in-out infinite',
        'ring-1': 'ring-out 2.4s ease-out infinite',
        'ring-2': 'ring-out 2.4s ease-out 0.8s infinite',
        'ring-3': 'ring-out 2.4s ease-out 1.6s infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'scroll-line': 'scroll-line 1.5s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'ring-out': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(2.8)', opacity: '0' },
        },
        'pulse-dot': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.4)', opacity: '0.7' },
        },
        'scroll-line': {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top', opacity: '1' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top', opacity: '1' },
          '100%': { transform: 'scaleY(1)', transformOrigin: 'bottom', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
