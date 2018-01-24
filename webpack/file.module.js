module.exports = () => {
  const config = {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]',
              },
            },
          ],
        },
      ],
    },
  };

  return config;
};
