const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        'core-sans': ['Core Sans C'],
        robwapix: ['NCL Robowapix'],
        'robwapix-mecha': ['NCL Robowapix Mecha'],
      },
    },
  },
}
