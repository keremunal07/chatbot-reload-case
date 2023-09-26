/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#FFFFFF',
        black: '#000000',
        grey: '#B3B3B3',
        purple: '#C8B6FF',
        blue: '#B6FBFF',
        zinc: {
          50: '#212121',
          100: '#1A1A1A',
          200: '#121212',
          300: '#020202',
          400: '#303030',
        },
      },
      borderRadius: {
        xl: '32px',
        lg: '12px',
        md: '10px',
        sm: '6px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'slide-left': {
          '0%': {
            left: '55%',
          },
          '50%': {
            left: '65%',
          },
          '100%': {
            left: '55%',
          },
        },
        'slide-right': {
          '0%': {
            left: '45%',
          },
          '50%': {
            left: '35%',
          },
          '100%': {
            left: '45%',
          },
        },
        'slide-bottom': {
          '0%': {
            top: '0%',
          },
          '50%': {
            top: '10%',
          },
          '100%': {
            top: '0%',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontSize: {
        small: '15px',
        base: '18px',
        md: '20px',
        lg: '24px',
        '2-lg': '48px',
        xl: '64px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
