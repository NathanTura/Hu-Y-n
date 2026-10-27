/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        chinese: {
          red: '#DC2626',
          darkred: '#991B1B',
          gold: '#F59E0B',
          amber: '#D97706',
          jade: '#059669',
          darkjade: '#047857',
          ink: '#0F172A',
          cream: '#FFFBEB',
          paper: '#F8FAFC',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
        chinese: ['PingFang SC', 'Microsoft YaHei', 'Source Han Sans SC', 'Noto Sans SC', 'SimSun', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-soft': 'bounceSoft 2s infinite',
        'fade-in': 'fadeIn 0.25s ease-out',
        'scale-up': 'scaleUp 0.2s ease-out',
      },
      keyframes: {
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(-3%)' },
          '50%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.97)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
