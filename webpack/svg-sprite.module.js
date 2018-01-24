module.exports = () => {
  const config = {
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                extract: true,
                spriteFilename: 'images/sprite.svg',
              },
            },
            {
              loader: 'svgo-loader',
              options: {
                plugins: [
                ],
              },
            },
          ],
        },
      ],
    },
  };

  return config;
};
