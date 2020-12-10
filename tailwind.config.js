const colors = require('tailwindcss/colors')
module.exports = {
  // ...
  theme: {
    extend: {
      colors
    }
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ]
}