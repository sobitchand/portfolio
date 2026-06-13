/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cyberpunk obsidian & grays
        obsidian: '#0a0e27',
        'dark-navy': '#0f1419',
        'muted-gray': '#4a5568',
        'card-bg': '#1a1f2e',
        // Neon accents
        'neon-cyan': '#00ffcc',
        'neon-green': '#00ff88',
        'neon-magenta': '#ff00ff',
      },
      fontFamily: {
        mono: ['Space Mono', 'JetBrains Mono', 'Courier Prime', 'monospace'],
        sans: ['Inter', 'Syne', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      letterSpacing: {
        widest: '0.15em',
        wider: '0.05em',
        wide: '0.025em',
        tighter: '-0.025em',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 255, 204, 0.3), 0 0 40px rgba(0, 255, 204, 0.1)',
        'neon-green': '0 0 20px rgba(0, 255, 136, 0.3), 0 0 40px rgba(0, 255, 136, 0.1)',
        'glow-lg': '0 0 50px rgba(0, 255, 204, 0.4), inset 0 0 40px rgba(0, 255, 204, 0.1)',
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(0deg, transparent 24%, rgba(0, 255, 204, 0.05) 25%, rgba(0, 255, 204, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 204, 0.05) 75%, rgba(0, 255, 204, 0.05) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(0, 255, 204, 0.05) 25%, rgba(0, 255, 204, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 204, 0.05) 75%, rgba(0, 255, 204, 0.05) 76%, transparent 77%, transparent)
        `,
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'blink': 'blink 0.5s ease-in-out infinite',
        'scan-line': 'scanLine 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 40px rgba(0, 255, 204, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 60px rgba(0, 255, 204, 0.4)',
          },
        },
        blink: {
          '0%, 49%': {
            opacity: '1',
          },
          '50%, 100%': {
            opacity: '0.3',
          },
        },
        scanLine: {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(100%)',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
