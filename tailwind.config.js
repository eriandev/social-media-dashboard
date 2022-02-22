const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./**/*.html'],
  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      center: true,
      padding: {
        default: '1.5rem',
        xl: '4rem',
      },
    },
    extend: {
      fontFamily: {
        inter: ['Inter', ...fontFamily.mono],
      },
      colors: {
        /* Primary */
        'lime-green': 'hsl(163, 72%, 41%)',
        'bright-red': 'hsl(356, 69%, 56%)',
        'dark-blue': 'hsl(230, 17%, 14%)',

        /* Dark Theme */
        'top-dark-blue': 'hsl(232, 19%, 15%)',
        'dark-desa-blue': 'hsl(228, 28%, 20%)',
        'desa-blue': 'hsl(228, 34%, 66%)',

        /* Light Theme */
        'pale-blue': 'hsl(225, 100%, 98%)',
        'light-gray-blue': 'hsl(227, 47%, 96%)',
        'dark-gray-blue': 'hsl(228, 12%, 44%)',
      },
      borderRadius: {
        xl: '1.5rem',
      }
    },
  },
  variants: {},
  plugins: []
}
