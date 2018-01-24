module.exports = () => {
  const config = {
    devServer: {
      port: 8000,
      stats: 'errors-only',
      open: true,
      watchOptions: {
        poll: true,
      },
    },
  };

  return config;
};
