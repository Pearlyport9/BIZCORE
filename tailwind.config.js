/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0D1B2A',
        'brand-charcoal': '#2E2E2E',
        'brand-gold': '#C9A84C',
        'brand-gold-light': '#E8C97A',
        'brand-bg': '#F8F8F6',
        'brand-text': '#1A1A2E',
        'brand-muted': '#6B7280',
        'brand-success': '#22C55E',
        'brand-warning': '#F59E0B',
        'brand-error': '#EF4444',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        heading: ['Outfit', 'Helvetica', 'sans-serif'],
        body: ['DM Sans', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier', 'monospace'],
      },
      maxWidth: {
        'content': '1280px',
        'text': '720px',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'gold': '0 8px 24px rgba(201, 168, 76, 0.25)',
      },
    },
  },
  plugins: [],
}
