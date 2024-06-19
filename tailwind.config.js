const { container } = require('webpack');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container:{
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
