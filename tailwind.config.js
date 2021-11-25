module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'righteous': ['Righteous'],
        'roboto' : ['Roboto']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
