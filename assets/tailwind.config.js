const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      '../lib/**/*.html.eex',
      '../lib/**/*.html.leex',
      '../lib/**/*.ex',
      '../lib/**/*.exs',
      './js/**/*.js',
    ],
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      white: colors.white,
      black: colors.black,

      primary: colors.indigo,
      neutral: colors.blueGray,
      info: colors.blue,
      success: colors.green,
      danger: colors.red,

      basis: {
        DEFAULT: '#4e2a8e',
      },
    },
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains MonoVariable', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
