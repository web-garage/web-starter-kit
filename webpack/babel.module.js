module.exports = () => {
  const config = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: [
                  ['env', {
                    'targets': {
                      'browsers': ['last 2 versions']
                    }
                  }]
                ]
              },
            },
            {
              loader: 'eslint-loader',
              options: {
                cache: true,
              },
            },
          ],
        },
      ],
    },
  };
  return config;
};
