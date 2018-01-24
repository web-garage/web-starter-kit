module.exports = () => {
  const config = {
    devServer: {
      port: 8080,
      stats: 'errors-only',
      open: true,
      watchOptions: {
        poll: true,
      },
    },
  };

  return config;
};
