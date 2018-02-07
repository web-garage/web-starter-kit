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
                presets: ['es2015', 'stage-2', 'es2017']
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
