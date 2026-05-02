import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif']
      },
      colors: {
        bg: 'var(--bg)',
        'bg-elev': 'var(--bg-elev)',
        'bg-deep': 'var(--bg-deep)',
        'bg-card': 'var(--bg-card)',
        'text-1': 'var(--text-1)',
        'text-2': 'var(--text-2)',
        'text-3': 'var(--text-3)',
        primary: 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
        'primary-soft': 'var(--primary-soft)',
        'primary-pure': 'var(--primary-pure)',
        accent: 'var(--accent)',
        'accent-bright': 'var(--accent-bright)',
        'accent-soft': 'var(--accent-soft)',
        success: 'var(--success)',
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)'
      }
    }
  },
  plugins: []
} satisfies Config
