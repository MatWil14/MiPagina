/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        sans:    ['DM Sans', 'sans-serif'],
      },
      colors: {
        /* Light theme surfaces */
        dark:        '#0F172A',   /* primary text  */
        'dark-2':    '#1E293B',   /* secondary text */
        'dark-card': '#334155',   /* tertiary text  */
        /* Accents */
        accent:       '#16A34A',  /* slightly deeper green reads better on white */
        'accent-dark':'#15803D',
        violet:       '#7C3AED',
        muted:        '#64748B',  /* slate-500, readable on white bg */
        /* Named surfaces for clarity */
        surface:      '#FFFFFF',
        'surface-2':  '#F8FAFC',
        'border-c':   '#E2E8F0',
      },
      animation: {
        'fade-in':      'fadeIn 0.6s ease-out forwards',
        'fade-in-up':   'fadeInUp 0.7s ease-out forwards',
        'slide-left':   'slideLeft 0.7s ease-out forwards',
        float:          'float 8s ease-in-out infinite',
        'float-delay':  'float 10s ease-in-out 2s infinite reverse',
        'cursor-blink': 'cursorBlink 1s step-end infinite',
        'gradient-x':   'gradientX 8s ease infinite',
      },
      keyframes: {
        fadeIn:    { from: { opacity: '0' }, to: { opacity: '1' } },
        fadeInUp:  { from: { opacity: '0', transform: 'translateY(40px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        slideLeft: { from: { opacity: '0', transform: 'translateX(-40px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        float:          { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-28px)' } },
        cursorBlink:    { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        gradientX:      { '0%, 100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
      },
      backgroundSize: { '200%': '200% 200%' },
      boxShadow: {
        card:    '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.05)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}
