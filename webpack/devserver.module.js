module.exports = () => {
  const config = {
    devServer: {
      port: 3000,
      stats: 'errors-only',
      open: true,
      watchOptions: {
        poll: true,
      },
    },
  };

  return config;
};
