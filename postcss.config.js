module.exports = ({ file, options, env }) => ({
  parser: file.extname === '.sss' ? 'sugarss' : false,
  plugins: {
    'postcss-import': {
      root: 'src'
    },
    'precss': {},
    'postcss-font-magician': {
      variants: {
        'Quicksand': {
          '300': [],
          '400': [],
          '500': [],
          '700': [],
        }
      },
      protocol: 'https:',
      foundries: ['google'],
    },
    'postcss-browser-reporter': (env !== 'production') ? {} : false,
    'postcss-flexbugs-fixes': (env === 'production') ? {} : false,
    'autoprefixer': (env === 'production') ? {} : false,
    'cssnano': (env === 'production') ? {
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }]
    } : false
  }
});

// https://github.com/tomasAlabes/stylefmt-loader
// https://github.com/postcss/postcss-nested
// https://github.com/postcss/sugarss
