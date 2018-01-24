module.exports = () => {
  const config = {
    module: {
      rules: [
        {
          test: /\.pug$/,
          use: {
            loader: 'pug-loader',
            options: {
              pretty: true,
              cache: true,
            },
          },
        },
      ],
    },
  };

  return config;
};
