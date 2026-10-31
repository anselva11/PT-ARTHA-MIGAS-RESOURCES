/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040d16',
          900: '#071827', // Primary Deep Navy
          850: '#0c2236',
          800: '#123B5D', // Secondary Industrial Blue
          700: '#1a4e7a',
          600: '#26659c',
          100: '#e2eaf1',
          50: '#f0f5f9',
        },
        gold: {
          300: '#dfc488',
          400: '#d4b36d',
          500: '#C6A15B', // Accent Premium Gold
          600: '#b08b43',
          700: '#8e6d2e',
        },
        surface: {
          light: '#F4F6F8',
          card: '#ffffff',
          dark: '#071827',
          darker: '#040d16',
          glass: 'rgba(7, 24, 39, 0.75)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'navy-gradient': 'linear-gradient(180deg, rgba(7, 24, 39, 0.95) 0%, rgba(18, 59, 93, 0.90) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(198, 161, 91, 0.3)',
        'premium': '0 20px 40px -15px rgba(7, 24, 39, 0.12)',
        'premium-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

